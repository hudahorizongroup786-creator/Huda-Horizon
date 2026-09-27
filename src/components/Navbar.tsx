import React, { useState } from 'react';
import { Menu, X, Globe2, ShieldCheck, Mail, ArrowRight, Phone } from 'lucide-react';

interface NavbarProps {
  onOpenLeadModal?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenLeadModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Market Analytics', href: '#market-analytics' },
    { label: '6-Year Trend', href: '#historical-trend' },
    { label: 'Top Markets', href: '#destination-markets' },
    { label: 'Buyer Intelligence', href: '#buyer-directory' },
    { label: 'Margin Calculator', href: '#margin-calculator' },
    { label: 'Contact Desk', href: '#contact-desk' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-[#0F1720]/95 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18">
          {/* Zone 1: Single text element wordmark */}
          <a href="#" className="flex items-center gap-2.5 text-white group">
            <div className="w-9 h-9 rounded-lg bg-[#0E7C86] flex items-center justify-center text-white shadow-sm shadow-[#0E7C86]/30">
              <Globe2 className="w-5 h-5 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="font-display text-lg font-bold tracking-tight text-white group-hover:text-teal-400 transition-colors">
                Huda Horizon Group
              </span>
              <span className="text-[10px] uppercase tracking-wider text-slate-400 font-semibold">
                Rice Export Intelligence & Trade Directory
              </span>
            </div>
          </a>

          {/* Zone 2: Clean text navigation links */}
          <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-slate-300">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-teal-400 transition-colors whitespace-nowrap py-1"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: Primary Action */}
          <div className="hidden sm:flex items-center gap-2">
            <a
              href="https://wa.me/919321325235"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-slate-400 hover:text-emerald-400 transition-colors"
              title="Direct WhatsApp: +91 9321325235 (Md Naushad Ansari)"
            >
              <Phone className="w-4 h-4" />
            </a>
            <a
              href="mailto:hudahorizongroup786@gmail.com"
              className="p-2 text-slate-400 hover:text-white transition-colors"
              title="Direct Email Desk"
            >
              <Mail className="w-4 h-4" />
            </a>
            <a
              href="#buyer-directory"
              onClick={onOpenLeadModal}
              className="px-4 py-2 text-xs font-semibold text-white bg-[#0E7C86] hover:bg-[#0c6b74] rounded-lg transition-colors shadow-sm flex items-center gap-1.5 whitespace-nowrap"
            >
              <span>Get Verified Buyer List</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md text-slate-400 hover:text-white hover:bg-slate-800 focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-slate-800 bg-[#0F1720] px-4 pt-2 pb-6 space-y-3">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800/60 rounded-md transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="pt-3 border-t border-slate-800 flex flex-col gap-2">
            <a
              href="#buyer-directory"
              onClick={() => {
                setMobileMenuOpen(false);
                if (onOpenLeadModal) onOpenLeadModal();
              }}
              className="w-full text-center px-4 py-2.5 text-xs font-semibold text-white bg-[#0E7C86] hover:bg-[#0c6b74] rounded-lg transition-colors flex items-center justify-center gap-2"
            >
              <span>Get Verified Buyer List</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
            <a
              href="https://wa.me/919321325235"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center px-4 py-2 text-xs font-medium text-emerald-400 hover:text-white border border-emerald-800/80 bg-emerald-950/30 rounded-lg flex items-center justify-center gap-2 font-mono"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>+91 9321325235 (Md Naushad Ansari)</span>
            </a>
            <a
              href="mailto:hudahorizongroup786@gmail.com"
              className="w-full text-center px-4 py-2 text-xs font-medium text-slate-300 hover:text-white border border-slate-700 rounded-lg flex items-center justify-center gap-2"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>hudahorizongroup786@gmail.com</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
