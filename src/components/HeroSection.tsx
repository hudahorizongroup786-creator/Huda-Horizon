import React, { useState } from 'react';
import { Search, TrendingUp, ShieldCheck, ArrowRight, Anchor, FileSpreadsheet, Building2, CheckCircle2 } from 'lucide-react';
import { MACRO_KPI_DATA } from '../data/macroReportData';

interface HeroSectionProps {
  onSearchChange: (query: string) => void;
  onSelectCategory: (category: string) => void;
  onOpenDirectory: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onSearchChange,
  onSelectCategory,
  onOpenDirectory,
}) => {
  const [searchInput, setSearchInput] = useState('');

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearchChange(searchInput);
    onOpenDirectory();
  };

  const quickFilterPills = [
    { label: 'Saudi Arabia Basmati', query: 'Saudi Arabia', category: 'Basmati' },
    { label: 'Benin Parboiled', query: 'Benin', category: 'Non-Basmati' },
    { label: 'UAE 1121 Sella', query: 'UAE', category: 'Basmati' },
    { label: 'Bangladesh White Rice', query: 'Bangladesh', category: 'Non-Basmati' },
    { label: 'Senegal 100% Broken', query: 'Senegal', category: '100% Broken' },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#0F1720] via-[#15202B] to-[#0F1720] pt-12 pb-16 border-b border-slate-800">
      {/* Subtle background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Trust Notice */}
        <div className="flex items-center justify-center gap-2 mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-slate-800/80 border border-slate-700/80 text-xs text-slate-300">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>Official India Agricultural Trade Briefing FY2020-21 to FY2025-26</span>
            <span className="text-slate-500">·</span>
            <span className="text-teal-400 font-medium">Updated Q1 2026 Data Desk</span>
          </div>
        </div>

        {/* Primary Headline */}
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-tight text-balance">
            Empower Your{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-teal-300 to-emerald-400">
              Rice Exporters
            </span>
          </h1>

          <p className="mt-5 text-base sm:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed text-balance">
            Huda Horizon Group bridges Indian rice millers and global commodity trading houses with verified international buyer dossiers, authentic port discharge requirements, and granular FY21–FY26 export price realizations.
          </p>
        </div>

        {/* Interactive Search Bar */}
        <div className="mt-8 max-w-3xl mx-auto">
          <form
            onSubmit={handleSearchSubmit}
            className="p-2 sm:p-2.5 bg-slate-900/90 border border-slate-700 rounded-xl shadow-2xl backdrop-blur-md flex flex-col sm:flex-row gap-2"
          >
            <div className="relative flex-1 flex items-center">
              <Search className="w-5 h-5 text-slate-400 absolute left-3.5" />
              <input
                type="text"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                placeholder="Search by buyer name, country (e.g., Saudi, Benin), or rice cultivar..."
                className="w-full bg-transparent pl-11 pr-4 py-2.5 text-sm text-white placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-teal-500 rounded-lg"
              />
            </div>
            <button
              type="submit"
              className="px-6 py-3 text-xs sm:text-sm font-semibold text-white bg-[#0E7C86] hover:bg-[#0c6b74] rounded-lg transition-colors flex items-center justify-center gap-2 whitespace-nowrap shadow-md"
            >
              <span>Search Buyer Directory</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>

          {/* Quick Filter Buttons */}
          <div className="mt-3 flex flex-wrap items-center justify-center gap-2 text-xs text-slate-400">
            <span className="text-slate-500 mr-1">Trending Searches:</span>
            {quickFilterPills.map((pill) => (
              <button
                key={pill.label}
                type="button"
                onClick={() => {
                  setSearchInput(pill.query);
                  onSearchChange(pill.query);
                  onSelectCategory(pill.category);
                  onOpenDirectory();
                }}
                className="px-2.5 py-1 rounded bg-slate-800/80 hover:bg-slate-700 hover:text-white border border-slate-700/60 transition-colors"
              >
                {pill.label}
              </button>
            ))}
          </div>
        </div>

        {/* High-Impact Metric Row (Data directly from official briefing page) */}
        <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
          <div className="bg-slate-900/80 border border-slate-800 p-4 rounded-xl relative overflow-hidden group hover:border-slate-700 transition-colors">
            <div className="flex items-center justify-between">
              <span className="text-xs font-medium text-slate-400">FY2025-26 Total Volume</span>
              <span className="text-xs font-semibold text-emerald-400 flex items-center gap-0.5">
                ▲ +1.38 MMT
              </span>
            </div>
            <div className="mt-2 flex items-baseline gap-2">
              <span className="font-data text-2xl sm:text-3xl font-bold text-white">21.57</span>
              <span className="text-xs text-slate-400 font-medium">MMT</span>
            </div>
            <p className="mt-1 text-[11px] text-slate-400 truncate">
              Up from 20.19 MMT in FY2024-25
            </p>
          </div>

          <div className="bg-slate-900/80 border border-slate-800 p-4 rounded-xl relative overflow-hidden group hover:border-slate-700 transition-colors">
            <div className="flex items-center justify-between">
              <span className="text-xs font-medium text-slate-400">FY2025-26 Export Value</span>
              <span className="text-xs font-semibold text-rose-400 flex items-center gap-0.5">
                ▼ -$0.93B
              </span>
            </div>
            <div className="mt-2 flex items-baseline gap-2">
              <span className="font-data text-2xl sm:text-3xl font-bold text-white">11.54</span>
              <span className="text-xs text-slate-400 font-medium">US$ Billion</span>
            </div>
            <p className="mt-1 text-[11px] text-slate-400 truncate">
              Down from US$ 12.47B (price drag)
            </p>
          </div>

          <div className="bg-slate-900/80 border border-slate-800 p-4 rounded-xl relative overflow-hidden group hover:border-slate-700 transition-colors">
            <div className="flex items-center justify-between">
              <span className="text-xs font-medium text-slate-400">Average Realization</span>
              <span className="text-xs font-semibold text-amber-400">
                -13.4% YoY
              </span>
            </div>
            <div className="mt-2 flex items-baseline gap-2">
              <span className="font-data text-2xl sm:text-3xl font-bold text-white">535</span>
              <span className="text-xs text-slate-400 font-medium">US$ / MT Avg</span>
            </div>
            <p className="mt-1 text-[11px] text-slate-400 truncate">
              Implied realization vs $618/MT in FY25
            </p>
          </div>

          <div className="bg-slate-900/80 border border-slate-800 p-4 rounded-xl relative overflow-hidden group hover:border-slate-700 transition-colors">
            <div className="flex items-center justify-between">
              <span className="text-xs font-medium text-slate-400">Active Importer Network</span>
              <span className="text-xs font-semibold text-teal-400 flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3" /> KYC Ready
              </span>
            </div>
            <div className="mt-2 flex items-baseline gap-2">
              <span className="font-data text-2xl sm:text-3xl font-bold text-teal-400">100%</span>
              <span className="text-xs text-slate-400 font-medium">Verified</span>
            </div>
            <p className="mt-1 text-[11px] text-slate-400 truncate">
              Saudi, UAE, Benin, Iraq, Bangladesh
            </p>
          </div>
        </div>

        {/* CTAs & Trust Badges */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#buyer-directory"
            className="w-full sm:w-auto px-6 py-3 text-sm font-semibold text-white bg-[#0E7C86] hover:bg-[#0c6b74] rounded-lg transition-colors flex items-center justify-center gap-2 shadow-lg shadow-[#0E7C86]/20"
          >
            <span>Open Verified Buyer Intelligence</span>
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="#historical-trend"
            className="w-full sm:w-auto px-6 py-3 text-sm font-medium text-slate-200 hover:text-white bg-slate-800/80 hover:bg-slate-800 border border-slate-700 rounded-lg transition-colors flex items-center justify-center gap-2"
          >
            <FileSpreadsheet className="w-4 h-4 text-teal-400" />
            <span>View 6-Year Historical Analysis</span>
          </a>
        </div>
      </div>
    </section>
  );
};
