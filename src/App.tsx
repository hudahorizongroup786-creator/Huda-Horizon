import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { MacroReportDashboard } from './components/MacroReportDashboard';
import { HistoricalTrendSection } from './components/HistoricalTrendSection';
import { DestinationMarketsSection } from './components/DestinationMarketsSection';
import { BuyerDirectorySection } from './components/BuyerDirectorySection';
import { MarginCalculator } from './components/MarginCalculator';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { Buyer } from './data/buyersData';
import { ShieldCheck, CheckCircle2, ArrowRight, X, Mail, Phone, FileText } from 'lucide-react';

export default function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [prefilledBuyer, setPrefilledBuyer] = useState<Buyer | null>(null);
  const [showLeadModal, setShowLeadModal] = useState(false);
  const [modalEmail, setModalEmail] = useState('');
  const [modalSuccess, setModalSuccess] = useState(false);

  // Jump to buyer directory
  const scrollToDirectory = () => {
    const el = document.getElementById('buyer-directory');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Jump to contact desk
  const scrollToContact = () => {
    const el = document.getElementById('contact-desk');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectMarketCountry = (country: string, category: string) => {
    setSearchQuery(country);
    setSelectedCategory(category);
    scrollToDirectory();
  };

  const handleSelectBuyerForInquiry = (buyer: Buyer) => {
    setPrefilledBuyer(buyer);
    scrollToContact();
  };

  const handleModalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (modalEmail.trim()) {
      setModalSuccess(true);
      setTimeout(() => {
        setModalSuccess(false);
        setShowLeadModal(false);
        setModalEmail('');
        scrollToDirectory();
      }, 1500);
    }
  };

  return (
    <div className="min-h-screen bg-[#0F1720] text-slate-100 flex flex-col font-sans selection:bg-[#0E7C86] selection:text-white">
      {/* Top Navbar */}
      <Navbar onOpenLeadModal={() => setShowLeadModal(true)} />

      {/* Main Content Area */}
      <main className="flex-grow">
        {/* 1. Hero Section & Value Proposition */}
        <HeroSection
          onSearchChange={setSearchQuery}
          onSelectCategory={setSelectedCategory}
          onOpenDirectory={scrollToDirectory}
        />

        {/* 2. Macro Report & Executive Assessment (Authentic FY20-21 to FY25-26 India Data) */}
        <MacroReportDashboard />

        {/* 3. Longitudinal 6-Year Historical Analysis & Interactive Trend Matrix */}
        <HistoricalTrendSection />

        {/* 4. Top Destination Markets & Discharge Ports */}
        <DestinationMarketsSection
          onSelectMarketCountry={handleSelectMarketCountry}
        />

        {/* 5. Global Buyer Intelligence Directory ("Data Open Option") */}
        <BuyerDirectorySection
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
          onSelectBuyerForInquiry={handleSelectBuyerForInquiry}
        />

        {/* 6. Export Realization & Margin Calculator */}
        <MarginCalculator />

        {/* 7. Contact Desk & Lead Capture Form ("Contact Us via Mail") */}
        <ContactSection
          prefilledBuyer={prefilledBuyer}
          onClearPrefill={() => setPrefilledBuyer(null)}
        />
      </main>

      {/* Quiet Enterprise Footer */}
      <Footer />

      {/* "Get Verified Buyer List" Fast Modal */}
      {showLeadModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-[#0F1720] border border-slate-700 rounded-2xl max-w-md w-full shadow-2xl p-6 sm:p-7 relative">
            <button
              type="button"
              onClick={() => setShowLeadModal(false)}
              className="absolute right-4 top-4 p-1 rounded-md text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="text-center space-y-2">
              <div className="w-12 h-12 rounded-xl bg-teal-950 border border-teal-800 text-teal-400 flex items-center justify-center mx-auto">
                <FileText className="w-6 h-6" />
              </div>
              <h3 className="font-display text-xl font-bold text-white">
                Download Verified Buyer Dossier
              </h3>
              <p className="text-xs text-slate-300">
                Receive the unredacted FY2025-26 verified international rice importer directory with direct purchasing contacts, discharge ports, and payment terms.
              </p>
            </div>

            {modalSuccess ? (
              <div className="mt-6 p-4 rounded-xl bg-emerald-950/80 border border-emerald-800 text-center space-y-2 animate-in fade-in">
                <CheckCircle2 className="w-8 h-8 text-emerald-400 mx-auto" />
                <span className="font-bold text-white block text-sm">Access Granted!</span>
                <p className="text-xs text-emerald-300">
                  Directory dispatch initiated. Redirecting to directory view...
                </p>
              </div>
            ) : (
              <form onSubmit={handleModalSubmit} className="mt-6 space-y-4">
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1.5">
                    Official Corporate Email
                  </label>
                  <input
                    type="email"
                    required
                    value={modalEmail}
                    onChange={(e) => setModalEmail(e.target.value)}
                    placeholder="exporter@ricemill.com"
                    className="w-full px-3 py-2.5 bg-slate-950 border border-slate-700 rounded-lg text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-teal-500"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-2.5 px-4 rounded-lg bg-[#0E7C86] hover:bg-[#0c6b74] text-white font-semibold text-xs transition-colors flex items-center justify-center gap-1.5 shadow-md"
                >
                  <span>Access Directory Now</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <p className="text-[11px] text-slate-400 text-center">
                  Direct support: <span className="text-teal-400">hudahorizongroup786@gmail.com</span>
                </p>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
