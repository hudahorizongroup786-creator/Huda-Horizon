import React from 'react';
import { Globe2, Mail, ShieldCheck, ExternalLink } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0A0E14] border-t border-slate-800 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          
          {/* Brand Info */}
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded bg-[#0E7C86] flex items-center justify-center text-white">
                <Globe2 className="w-4 h-4" />
              </div>
              <span className="font-display font-bold text-white text-base">
                Huda Horizon Group
              </span>
            </div>
            <p className="text-slate-400 max-w-sm leading-relaxed">
              International agricultural commodity intelligence desk specializing in verified rice buyer directories, macro export analytics, and commercial trade execution across GCC, Africa, and Asian markets.
            </p>
            <div className="pt-2 text-slate-300 space-y-1.5">
              <div>
                <span className="text-slate-400">Trade Lead: </span>
                <span className="font-semibold text-white">Md Naushad Ansari</span>
                <span className="text-slate-500 mx-1.5">·</span>
                <span className="text-teal-400">Huda Horizon Group</span>
              </div>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
                <div>
                  <span className="text-slate-400">Mobile / WhatsApp: </span>
                  <a
                    href="https://wa.me/919321325235"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-400 hover:underline font-mono font-semibold"
                  >
                    +91 9321325235
                  </a>
                </div>
                <div>
                  <span className="text-slate-400">Email: </span>
                  <a
                    href="mailto:hudahorizongroup786@gmail.com"
                    className="text-teal-400 hover:underline font-mono"
                  >
                    hudahorizongroup786@gmail.com
                  </a>
                </div>
              </div>
              <div className="text-slate-400 text-[11px] leading-relaxed pt-1">
                <span className="text-slate-300 font-medium">Head Office: </span>
                House No. 689, Shiv Shakti Nagar, Near Islamiya Bakery, Turbhe, Sanpada S.O., Navi Mumbai, Thane - 400705, Maharashtra
              </div>
            </div>
          </div>

          {/* Quick Nav */}
          <div className="space-y-2">
            <span className="text-xs uppercase tracking-wider font-semibold text-slate-200 block mb-2">
              Intelligence Modules
            </span>
            <ul className="space-y-1.5">
              <li>
                <a href="#market-analytics" className="hover:text-teal-400 transition-colors">
                  FY2025-26 Macro Report
                </a>
              </li>
              <li>
                <a href="#historical-trend" className="hover:text-teal-400 transition-colors">
                  6-Year Longitudinal Matrix
                </a>
              </li>
              <li>
                <a href="#destination-markets" className="hover:text-teal-400 transition-colors">
                  Top Destination Discharge Ports
                </a>
              </li>
              <li>
                <a href="#buyer-directory" className="hover:text-teal-400 transition-colors">
                  Verified Buyer Directory
                </a>
              </li>
              <li>
                <a href="#margin-calculator" className="hover:text-teal-400 transition-colors">
                  Export Realization Calculator
                </a>
              </li>
            </ul>
          </div>

          {/* Compliance & Trade Governance */}
          <div className="space-y-2">
            <span className="text-xs uppercase tracking-wider font-semibold text-slate-200 block mb-2">
              Trade Compliance
            </span>
            <ul className="space-y-1.5 text-slate-400">
              <li>APEDA RCMC Alignment</li>
              <li>DGFT Export Policy S.O. Orders</li>
              <li>FSSAI & SFDA Conformity</li>
              <li>DNA Basmati Purity Testing Protocols</li>
              <li>ICC UCP 600 Letter of Credit Standards</li>
            </ul>
          </div>

        </div>

        {/* Citations & Disclaimer */}
        <div className="pt-8 border-t border-slate-900 text-[11px] text-slate-500 space-y-2">
          <p>
            Data Citation: Indian agricultural export statistics compiled from official releases of the Agricultural and Processed Food Products Export Development Authority (APEDA), Directorate General of Foreign Trade (DGFT), and Ministry of Commerce and Industry, Government of India.
          </p>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pt-2">
            <p>© {new Date().getFullYear()} Huda Horizon Group. All rights reserved.</p>
            <p>Confidential B2B Commodity Intelligence · Not an open commercial endorsement.</p>
          </div>
        </div>

      </div>
    </footer>
  );
};
