import React from 'react';
import { TrendingUp, TrendingDown, DollarSign, Scale, ArrowUpRight, ArrowDownRight, Layers, HelpCircle } from 'lucide-react';
import { MACRO_KPI_DATA } from '../data/macroReportData';

export const MacroReportDashboard: React.FC = () => {
  return (
    <section id="market-analytics" className="py-16 bg-[#0B1118] border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with exact wording from official briefing */}
        <div className="max-w-4xl">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-teal-400 mb-2">
            <span>Executive Export Assessment</span>
            <span>·</span>
            <span>Grain Trade & Commodity Strategy Review</span>
          </div>
          <h2 className="font-display text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
            India’s rice exports are recovering in volume, not value
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed">
            A multi-year analysis of tonnage rebound, realization drag, and shifting global market demand across major trading corridors.
          </p>
        </div>

        {/* Executive summary banner */}
        <div className="mt-6 p-4 rounded-xl bg-slate-900/90 border border-slate-800 text-sm text-slate-300 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <span className="font-semibold text-white">FY2025-26 closed at 21.57 MMT and US$ 11.54B:</span>
            <span className="ml-1.5 text-slate-300">
              Export tonnage expanded by 1.38 MMT year-on-year, while total dollar value contracted as global price benchmarks softened.
            </span>
          </div>
          <div className="text-xs text-slate-400 whitespace-nowrap flex items-center gap-3">
            <span>DGFT / APEDA Sourced</span>
            <span>·</span>
            <span className="text-teal-400 font-mono">21.566 MMT unrounded</span>
          </div>
        </div>

        {/* The 3 Core Metric Cards (Page 1 from report) */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1: EXPORT VOLUME */}
          <div className="p-6 rounded-xl bg-slate-900 border border-slate-800 relative overflow-hidden group hover:border-slate-700 transition-colors">
            <div className="flex items-center justify-between">
              <span className="text-xs uppercase tracking-wider font-semibold text-slate-400">
                Export Volume
              </span>
              <span className="inline-flex items-center gap-1 text-xs font-semibold px-2 py-0.5 rounded bg-emerald-950/80 text-emerald-400 border border-emerald-800/50">
                <ArrowUpRight className="w-3.5 h-3.5" />
                ▲ 1.38 MMT
              </span>
            </div>
            
            <div className="mt-4 flex items-baseline gap-3">
              <span className="font-data text-4xl sm:text-5xl font-extrabold text-white">
                {MACRO_KPI_DATA.fyVolume}
              </span>
              <span className="text-sm font-semibold text-slate-400">MMT</span>
            </div>

            <div className="mt-3 pt-3 border-t border-slate-800 text-xs text-slate-400 space-y-1">
              <p className="font-medium text-slate-300">
                Rose from 20.19 MMT in FY2024-25
              </p>
              <p className="text-[11px] text-slate-400">
                (21.566 MMT unrounded official APEDA compilation)
              </p>
            </div>
          </div>

          {/* Card 2: EXPORT VALUE */}
          <div className="p-6 rounded-xl bg-slate-900 border border-slate-800 relative overflow-hidden group hover:border-slate-700 transition-colors">
            <div className="flex items-center justify-between">
              <span className="text-xs uppercase tracking-wider font-semibold text-slate-400">
                Export Value
              </span>
              <span className="inline-flex items-center gap-1 text-xs font-semibold px-2 py-0.5 rounded bg-rose-950/80 text-rose-400 border border-rose-800/50">
                <ArrowDownRight className="w-3.5 h-3.5" />
                ▼ US$ 0.93B
              </span>
            </div>
            
            <div className="mt-4 flex items-baseline gap-3">
              <span className="font-data text-4xl sm:text-5xl font-extrabold text-white">
                11.54
              </span>
              <span className="text-sm font-semibold text-slate-400">US$ Billion</span>
            </div>

            <div className="mt-3 pt-3 border-t border-slate-800 text-xs text-slate-400 space-y-1">
              <p className="font-medium text-slate-300">
                Fell from US$ 12.47B in FY2024-25
              </p>
              <p className="text-[11px] text-slate-400">
                (US$ 11.538B unrounded dollar value)
              </p>
            </div>
          </div>

          {/* Card 3: REALIZATION GAP */}
          <div className="p-6 rounded-xl bg-slate-900 border border-slate-800 relative overflow-hidden group hover:border-slate-700 transition-colors">
            <div className="flex items-center justify-between">
              <span className="text-xs uppercase tracking-wider font-semibold text-slate-400">
                Realization Gap
              </span>
              <span className="inline-flex items-center gap-1 text-xs font-semibold px-2 py-0.5 rounded bg-amber-950/80 text-amber-400 border border-amber-800/50">
                ▼ -US$ 83 / MT
              </span>
            </div>
            
            <div className="mt-4 flex items-baseline gap-3">
              <span className="font-data text-4xl sm:text-5xl font-extrabold text-white">
                535
              </span>
              <span className="text-sm font-semibold text-slate-400">US$ / MT Avg</span>
            </div>

            <div className="mt-3 pt-3 border-t border-slate-800 text-xs text-slate-400 space-y-1">
              <p className="font-medium text-slate-300">
                Implied realization down from US$ 618/MT in FY2024-25
              </p>
              <p className="text-[11px] text-slate-400">
                Reflects removal of minimum export price floors
              </p>
            </div>
          </div>
        </div>

        {/* Narrative Drivers (Exact Callout Blocks from Report) */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-5 rounded-xl bg-gradient-to-br from-slate-900 to-[#101c27] border border-teal-900/40">
            <div className="flex items-center gap-2 text-teal-400 font-semibold text-sm">
              <TrendingUp className="w-4 h-4" />
              <span>Volume Recovery Driver</span>
            </div>
            <p className="mt-2 text-slate-300 text-sm leading-relaxed">
              {MACRO_KPI_DATA.volumeRecoveryDriver}
            </p>
            <div className="mt-3 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
              <span>Primary destinations: West Africa, Bangladesh</span>
              <span className="text-teal-400 font-mono">+1.38 MMT gain</span>
            </div>
          </div>

          <div className="p-5 rounded-xl bg-gradient-to-br from-slate-900 to-[#1e171b] border border-rose-900/40">
            <div className="flex items-center gap-2 text-rose-400 font-semibold text-sm">
              <TrendingDown className="w-4 h-4" />
              <span>Value Compression Driver</span>
            </div>
            <p className="mt-2 text-slate-300 text-sm leading-relaxed">
              {MACRO_KPI_DATA.valueCompressionDriver}
            </p>
            <div className="mt-3 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
              <span>Avg price realized: $535 vs $618 prior year</span>
              <span className="text-rose-400 font-mono">-$0.93B net</span>
            </div>
          </div>
        </div>

        {/* Segment Split: Basmati vs Non-Basmati in FY2025-26 */}
        <div className="mt-10 p-6 rounded-xl bg-slate-900/90 border border-slate-800">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-slate-800">
            <div>
              <h3 className="font-display text-lg font-bold text-white flex items-center gap-2">
                <Layers className="w-5 h-5 text-teal-400" />
                <span>FY2025-26 Segment Breakdown: Basmati vs Non-Basmati</span>
              </h3>
              <p className="text-xs text-slate-400 mt-0.5">
                Comparing volume tonnage, export foreign exchange value, and metric ton price realization.
              </p>
            </div>
            <div className="text-xs text-slate-400 font-mono">
              Total: 21.57 MMT · US$ 11.54 Billion
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Basmati Segment */}
            <div className="p-5 rounded-xl bg-slate-950/60 border border-slate-800 space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs uppercase tracking-wider font-semibold text-teal-400">
                    Premium Category
                  </span>
                  <h4 className="text-xl font-bold text-white">Basmati Rice Export</h4>
                </div>
                <div className="text-right">
                  <span className="font-data text-2xl font-bold text-white">$870</span>
                  <span className="text-xs text-slate-400 block font-medium">US$ / MT Realization</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="bg-slate-900/80 p-3 rounded-lg border border-slate-800">
                  <span className="text-[11px] text-slate-400 uppercase font-semibold">Tonnage Volume</span>
                  <div className="font-data text-xl font-bold text-white mt-1">6.52 MMT</div>
                  <span className="text-[11px] text-slate-400">30.2% of national exports</span>
                </div>
                <div className="bg-slate-900/80 p-3 rounded-lg border border-slate-800">
                  <span className="text-[11px] text-slate-400 uppercase font-semibold">Foreign Exchange Value</span>
                  <div className="font-data text-xl font-bold text-white mt-1">US$ 5.67B</div>
                  <span className="text-[11px] text-teal-400 font-medium">49.1% of national export value</span>
                </div>
              </div>

              {/* Progress Bar */}
              <div>
                <div className="flex justify-between text-xs text-slate-400 mb-1">
                  <span>Value-to-Volume Ratio: Premium Premiumization</span>
                  <span className="font-mono text-teal-400">1.62x Value Density</span>
                </div>
                <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                  <div className="bg-teal-500 h-full rounded-full" style={{ width: '49.1%' }} />
                </div>
              </div>
            </div>

            {/* Non-Basmati Segment */}
            <div className="p-5 rounded-xl bg-slate-950/60 border border-slate-800 space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs uppercase tracking-wider font-semibold text-amber-400">
                    Bulk Commodity Category
                  </span>
                  <h4 className="text-xl font-bold text-white">Non-Basmati Rice Export</h4>
                </div>
                <div className="text-right">
                  <span className="font-data text-2xl font-bold text-white">$390</span>
                  <span className="text-xs text-slate-400 block font-medium">US$ / MT Realization</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="bg-slate-900/80 p-3 rounded-lg border border-slate-800">
                  <span className="text-[11px] text-slate-400 uppercase font-semibold">Tonnage Volume</span>
                  <div className="font-data text-xl font-bold text-white mt-1">15.05 MMT</div>
                  <span className="text-[11px] text-emerald-400 font-medium">69.8% of national exports</span>
                </div>
                <div className="bg-slate-900/80 p-3 rounded-lg border border-slate-800">
                  <span className="text-[11px] text-slate-400 uppercase font-semibold">Foreign Exchange Value</span>
                  <div className="font-data text-xl font-bold text-white mt-1">US$ 5.87B</div>
                  <span className="text-[11px] text-slate-400">50.9% of national export value</span>
                </div>
              </div>

              {/* Progress Bar */}
              <div>
                <div className="flex justify-between text-xs text-slate-400 mb-1">
                  <span>Volume Dominance: Bulk Food Security</span>
                  <span className="font-mono text-amber-400">69.8% Tonnage Share</span>
                </div>
                <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                  <div className="bg-amber-500 h-full rounded-full" style={{ width: '69.8%' }} />
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
