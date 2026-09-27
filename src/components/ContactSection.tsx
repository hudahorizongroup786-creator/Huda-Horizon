import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, MessageSquare, ArrowRight, ShieldCheck, Clock } from 'lucide-react';
import { Buyer } from '../data/buyersData';

interface ContactSectionProps {
  prefilledBuyer?: Buyer | null;
  onClearPrefill?: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  prefilledBuyer,
  onClearPrefill,
}) => {
  const [exporterName, setExporterName] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [riceVariety, setRiceVariety] = useState('Basmati 1121 Steam');
  const [monthlyCapacity, setMonthlyCapacity] = useState('500 - 2,000 MT');
  const [customRequirement, setCustomRequirement] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  // When prefilled buyer changes, update custom requirement
  useEffect(() => {
    if (prefilledBuyer) {
      setCustomRequirement(
        `Requesting introduction to verified importer: ${prefilledBuyer.companyName} (${prefilledBuyer.country}, Port: ${prefilledBuyer.dischargePort}). We can supply their preferred cultivars: ${prefilledBuyer.preferredProducts.join(', ')}.`
      );
      if (prefilledBuyer.category === 'Basmati') {
        setRiceVariety('Basmati 1121 Steam');
      } else {
        setRiceVariety('IR64 Parboiled 5%');
      }
    }
  }, [prefilledBuyer]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!exporterName.trim() || !companyName.trim() || !email.trim()) {
      setErrorMsg('Please complete all mandatory fields (Name, Company, Official Email).');
      return;
    }
    setErrorMsg('');
    setSubmitting(true);

    setTimeout(() => {
      setSubmitting(false);
      setIsSubmitted(true);
    }, 800);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setExporterName('');
    setCompanyName('');
    setEmail('');
    setPhone('');
    setCustomRequirement('');
    if (onClearPrefill) onClearPrefill();
  };

  // WhatsApp prefilled message
  const whatsappText = encodeURIComponent(
    `Hello Huda Horizon Group Trade Desk,\n\nI am an Indian Rice Exporter interested in accessing verified international buyer dossiers and FY26 market intelligence.\n\nExporter: ${exporterName || 'Rice Exporter'}\nCompany: ${companyName || 'Export Mill'}\nRequirement: ${riceVariety}`
  );

  return (
    <section id="contact-desk" className="py-16 bg-[#0F1720] border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-teal-400 mb-2">
            <span>Section 06</span>
            <span>·</span>
            <span>Trade Desk & Direct Lead Generation</span>
          </div>
          <h2 className="font-display text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
            Connect with Our International Grain Trade Desk
          </h2>
          <p className="mt-2 text-slate-300 text-sm sm:text-base leading-relaxed">
            Request targeted buyer matchmaking, obtain custom port discharge dossiers, or initiate direct commercial introductions for your milling capacity.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Contact Info & Fast Actions */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="p-6 rounded-xl bg-slate-900 border border-slate-800 space-y-5">
              <h3 className="font-bold text-white text-base">
                Global Trade Advisory & Inquiries
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Our commercial desk directly assists millers, commodity brokers, and merchant exporters with verified importer contacts, draft sales contracts, and LC structuring.
              </p>

              <div className="space-y-4 pt-2 text-xs">
                
                {/* Contact Person & Company */}
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded bg-teal-950 border border-teal-800 text-teal-400 flex items-center justify-center shrink-0">
                    <span className="font-bold text-xs">MA</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block font-medium">Head of Trade Desk</span>
                    <span className="font-bold text-white text-sm block">
                      Md Naushad Ansari
                    </span>
                    <span className="text-teal-400 font-medium text-[11px] block">
                      Huda Horizon Group
                    </span>
                  </div>
                </div>

                {/* Mobile / WhatsApp Direct */}
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded bg-emerald-950/80 border border-emerald-800 text-emerald-400 flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-slate-400 block font-medium">Direct Mobile / WhatsApp</span>
                    <a
                      href="tel:+919321325235"
                      className="font-bold text-white hover:text-emerald-400 transition-colors text-sm font-mono"
                    >
                      +91 9321325235
                    </a>
                    <span className="text-[11px] text-slate-400 block mt-0.5">
                      Available for calls & WhatsApp business queries
                    </span>
                  </div>
                </div>

                {/* Official Email */}
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded bg-slate-800 text-slate-300 flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4 text-teal-400" />
                  </div>
                  <div>
                    <span className="text-slate-400 block font-medium">Official Trade Desk Email</span>
                    <a
                      href="mailto:hudahorizongroup786@gmail.com"
                      className="font-bold text-white hover:text-teal-400 transition-colors text-sm break-all font-mono"
                    >
                      hudahorizongroup786@gmail.com
                    </a>
                  </div>
                </div>

                {/* Desk Locations */}
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded bg-slate-800 text-slate-300 flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4 text-teal-400" />
                  </div>
                  <div>
                    <span className="text-slate-400 block font-medium">Corporate Office & Trade Desk</span>
                    <span className="font-semibold text-white block text-xs leading-relaxed">
                      House No. 689, Shiv Shakti Nagar, Near Islamiya Bakery, Turbhe, Sanpada S.O., Navi Mumbai, Thane - 400705, Maharashtra
                    </span>
                    <span className="text-[11px] text-slate-400 block mt-0.5">
                      JNPT Port Export Corridor · Maharashtra, India
                    </span>
                  </div>
                </div>

                {/* Operating Hours */}
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded bg-slate-800 text-slate-300 flex items-center justify-center shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-slate-400 block font-medium">Trading Desk Operations</span>
                    <span className="font-semibold text-white">
                      Monday – Saturday · 08:30 – 19:30 IST / GST
                    </span>
                  </div>
                </div>

              </div>

              {/* 1-Click WhatsApp Button */}
              <div className="pt-4 border-t border-slate-800">
                <a
                  href={`https://wa.me/919321325235?text=${whatsappText}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs transition-colors flex items-center justify-center gap-2 shadow-md shadow-emerald-900/30"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Chat on WhatsApp (+91 9321325235)</span>
                </a>
                <span className="text-[11px] text-slate-400 text-center block mt-1.5">
                  Direct connection with Md Naushad Ansari (Huda Horizon Group)
                </span>
              </div>
            </div>

            {/* Trust Assurances */}
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 text-xs text-slate-300 space-y-2">
              <div className="flex items-center gap-2 text-teal-400 font-semibold">
                <ShieldCheck className="w-4 h-4" />
                <span>Strict Trade Confidentiality</span>
              </div>
              <p className="text-[11px] text-slate-400 leading-normal">
                Your milling capacity, brand marks, and target pricing are protected under commercial confidentiality. We do not sell open public lists to unverified intermediaries.
              </p>
            </div>

          </div>

          {/* Right Column: Lead Form & Submission Confirmation */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-xl bg-slate-900 border border-slate-800">
              
              {isSubmitted ? (
                /* Instant Feedback State */
                <div className="py-8 text-center space-y-4 animate-in fade-in duration-300">
                  <div className="w-14 h-14 rounded-full bg-emerald-950 border border-emerald-800 text-emerald-400 flex items-center justify-center mx-auto shadow-lg shadow-emerald-950/50">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="font-display text-2xl font-bold text-white">
                      Inquiry Dispatched Successfully!
                    </h3>
                    <p className="text-slate-300 text-sm mt-2 max-w-md mx-auto leading-relaxed">
                      Thank you, <span className="text-white font-semibold">{exporterName}</span>! Our trade desk has received your request for <span className="text-teal-400 font-medium">{companyName}</span>.
                    </p>
                  </div>

                  <div className="p-4 rounded-lg bg-slate-950 border border-slate-800 max-w-md mx-auto text-xs text-left space-y-2">
                    <div className="flex justify-between text-slate-400">
                      <span>Dispatch Destination:</span>
                      <span className="text-white font-mono">{email}</span>
                    </div>
                    <div className="flex justify-between text-slate-400">
                      <span>Assigned Trade Desk:</span>
                      <span className="text-teal-400 font-semibold">Huda Horizon Group Commodity Desk</span>
                    </div>
                    <div className="flex justify-between text-slate-400">
                      <span>Estimated Dossier Dispatch:</span>
                      <span className="text-emerald-400 font-medium">Within 2 to 4 Business Hours</span>
                    </div>
                  </div>

                  <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <button
                      type="button"
                      onClick={handleReset}
                      className="px-5 py-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-200 transition-colors"
                    >
                      Submit Another Requirement
                    </button>
                    <a
                      href="mailto:hudahorizongroup786@gmail.com"
                      className="px-5 py-2.5 rounded-lg bg-[#0E7C86] hover:bg-[#0c6b74] text-xs font-semibold text-white transition-colors flex items-center gap-1.5"
                    >
                      <Mail className="w-3.5 h-3.5" />
                      <span>Email Us Directly</span>
                    </a>
                  </div>
                </div>
              ) : (
                /* Exporter Inquiry Form */
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="pb-2 border-b border-slate-800">
                    <h3 className="font-bold text-white text-base">
                      Exporter Registration & Verified Buyer Dossier Request
                    </h3>
                    <p className="text-xs text-slate-400 mt-0.5">
                      Fill out your details to receive matching foreign importer contacts and port specifications.
                    </p>
                  </div>

                  {errorMsg && (
                    <div className="p-3 rounded-lg bg-rose-950/80 border border-rose-800 text-xs text-rose-300">
                      {errorMsg}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1">
                        Exporter / Contact Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={exporterName}
                        onChange={(e) => setExporterName(e.target.value)}
                        placeholder="e.g. Md Naushad Ansari"
                        className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-lg text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-teal-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1">
                        Company / Mill Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={companyName}
                        onChange={(e) => setCompanyName(e.target.value)}
                        placeholder="e.g. Huda Horizon Group"
                        className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-lg text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-teal-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1">
                        Official Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="trade@company.com"
                        className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-lg text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-teal-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1">
                        Phone / WhatsApp (with Country Code)
                      </label>
                      <input
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+91 98765 43210"
                        className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-lg text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-teal-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1">
                        Rice Variety Handled
                      </label>
                      <select
                        value={riceVariety}
                        onChange={(e) => setRiceVariety(e.target.value)}
                        className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-lg text-sm text-white focus:outline-none focus:ring-1 focus:ring-teal-500"
                      >
                        <option value="Basmati 1121 Steam">Basmati 1121 Steam / Raw</option>
                        <option value="Basmati 1509 Golden Sella">Basmati 1509 Sella / Creamy</option>
                        <option value="Traditional Basmati">Traditional Aged Basmati</option>
                        <option value="IR64 Parboiled 5%">IR64 Parboiled 5% Sortex</option>
                        <option value="Swarna White Rice 5%">Swarna Non-Basmati White Rice</option>
                        <option value="100% Broken White Rice">100% Broken White Rice</option>
                        <option value="Sona Masoori Raw">Sona Masoori Raw / Steam</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1">
                        Monthly Export Supply Capacity
                      </label>
                      <select
                        value={monthlyCapacity}
                        onChange={(e) => setMonthlyCapacity(e.target.value)}
                        className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-lg text-sm text-white focus:outline-none focus:ring-1 focus:ring-teal-500"
                      >
                        <option value="100 - 500 MT">100 - 500 MT (Trial / Containerized)</option>
                        <option value="500 - 2,000 MT">500 - 2,000 MT (Multi-container)</option>
                        <option value="2,000 - 10,000 MT">2,000 - 10,000 MT (Bulk vessel share)</option>
                        <option value="10,000+ MT">10,000+ MT (Full charter cargo)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">
                      Custom Requirement / Target Countries / Port Specifications
                    </label>
                    <textarea
                      rows={3}
                      value={customRequirement}
                      onChange={(e) => setCustomRequirement(e.target.value)}
                      placeholder="Specify your preferred target importing countries (e.g., Saudi Arabia, Benin, Iraq), loading ports (Kandla, Mundra, Kakinada), or specific buyer ID..."
                      className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-lg text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-teal-500"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={submitting}
                      className="w-full py-3 px-4 rounded-lg bg-[#0E7C86] hover:bg-[#0c6b74] text-white font-semibold text-sm transition-colors flex items-center justify-center gap-2 shadow-md shadow-[#0E7C86]/20 disabled:opacity-50"
                    >
                      {submitting ? (
                        <span>Processing Request...</span>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Request Buyer Dossiers & Trade Dispatch</span>
                        </>
                      )}
                    </button>
                    <p className="text-[11px] text-slate-400 text-center mt-2">
                      Official email delivery to <span className="text-teal-400">hudahorizongroup786@gmail.com</span> with immediate acknowledgment.
                    </p>
                  </div>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
