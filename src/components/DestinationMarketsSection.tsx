import React, { useState } from 'react';
import { Globe, Ship, ArrowRight, CheckCircle2, ChevronRight } from 'lucide-react';
import { TOP_BASMATI_MARKETS, TOP_NON_BASMATI_MARKETS, DestinationMarket } from '../data/macroReportData';

interface DestinationMarketsProps {
  onSelectMarketCountry: (country: string, category: string) => void;
}

export const DestinationMarketsSection: React.FC<DestinationMarketsProps> = ({
  onSelectMarketCountry,
}) => {
  const [activeTab, setActiveTab] = useState<'basmati' | 'nonBasmati'>('basmati');

  const activeMarkets = activeTab === 'basmati' ? TOP_BASMATI_MARKETS : TOP_NON_BASMATI_MARKETS;

  return (
    <section id="destination-markets" className="py-16 bg-[#0B1118] border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-teal-400 mb-2">
              <span>Section 03</span>
              <span>·</span>
              <span>Global Destination Breakdown</span>
            </div>
            <h2 className="font-display text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
              Top Destination Markets & Discharge Ports
            </h2>
            <p className="mt-2 text-slate-300 text-sm sm:text-base max-w-2xl">
              Distribution of India’s FY2025-26 export volume across GCC high-value corridors and African staple transshipment hubs.
            </p>
          </div>

          {/* Segment Selector Tabs */}
          <div className="inline-flex p-1 rounded-lg bg-slate-900 border border-slate-800 self-start md:self-auto">
            <button
              type="button"
              onClick={() => setActiveTab('basmati')}
              className={`px-4 py-2 text-xs font-semibold rounded-md transition-colors whitespace-nowrap ${
                activeTab === 'basmati'
                  ? 'bg-[#0E7C86] text-white shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Basmati Destinations (6.52 MMT)
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('nonBasmati')}
              className={`px-4 py-2 text-xs font-semibold rounded-md transition-colors whitespace-nowrap ${
                activeTab === 'nonBasmati'
                  ? 'bg-[#0E7C86] text-white shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Non-Basmati Destinations (15.05 MMT)
            </button>
          </div>
        </div>

        {/* Tab Context Banner */}
        <div className="mt-6 p-4 rounded-xl bg-slate-900/60 border border-slate-800 text-xs sm:text-sm text-slate-300 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-teal-400"></span>
            <span>
              {activeTab === 'basmati'
                ? 'Middle East GCC corridor commands 55%+ of all Basmati exports led by Saudi Arabia (16.62%) and Iran (13.92%).'
                : 'West Africa (Benin 11.46%, Guinea 6.61%, Togo 6.58%) and Bangladesh (9.29%) absorb majority bulk non-basmati volume.'}
            </span>
          </div>
          <span className="text-slate-400 font-mono text-xs">
            {activeTab === 'basmati' ? 'Average Realization: $870/MT' : 'Average Realization: $390/MT'}
          </span>
        </div>

        {/* Market Cards Grid */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {activeMarkets.map((market, idx) => (
            <div
              key={market.country}
              className="p-5 rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-700 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-2.5">
                    <span className="text-2xl" role="img" aria-label={market.country}>
                      {market.flag}
                    </span>
                    <div>
                      <h4 className="font-bold text-white text-base group-hover:text-teal-400 transition-colors">
                        {market.country}
                      </h4>
                      <span className="text-xs text-slate-400 font-mono">
                        Rank #{idx + 1} Importer
                      </span>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="font-data text-xl font-extrabold text-teal-400">
                      {market.percentage}%
                    </span>
                    <span className="block text-[11px] text-slate-400 font-medium">Export Share</span>
                  </div>
                </div>

                {/* Visual Share Bar */}
                <div className="mt-3 w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                  <div
                    className="bg-[#0E7C86] h-full rounded-full transition-all duration-500"
                    style={{ width: `${Math.min(market.percentage * 4, 100)}%` }}
                  />
                </div>

                {/* Stats */}
                <div className="mt-4 pt-3 border-t border-slate-800/80 space-y-2 text-xs">
                  <div className="flex items-center justify-between text-slate-300">
                    <span className="text-slate-400">Estimated Volume:</span>
                    <span className="font-data font-semibold text-white">
                      {market.volumeMT.toLocaleString()} MT
                    </span>
                  </div>
                  <div>
                    <span className="text-slate-400 block mb-0.5">Primary Discharge Ports:</span>
                    <div className="flex flex-wrap gap-1 text-[11px] text-slate-300">
                      {market.primaryPorts.map((port) => (
                        <span
                          key={port}
                          className="px-2 py-0.5 rounded bg-slate-800/80 text-slate-300 border border-slate-700/60"
                        >
                          {port}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="text-[11px]">
                    <span className="text-slate-400">Key Cultivars: </span>
                    <span className="text-slate-300">{market.keyProducts}</span>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              {market.country !== 'Other Markets' && market.country !== 'Other African / Asian Markets' && (
                <div className="mt-4 pt-3 border-t border-slate-800">
                  <button
                    type="button"
                    onClick={() => {
                      onSelectMarketCountry(
                        market.country,
                        activeTab === 'basmati' ? 'Basmati' : 'Non-Basmati'
                      );
                      const el = document.getElementById('buyer-directory');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="w-full py-2 px-3 text-xs font-semibold text-teal-400 hover:text-white hover:bg-[#0E7C86]/20 rounded border border-teal-900/60 transition-colors flex items-center justify-center gap-1.5"
                  >
                    <span>View {market.country} Buyers</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
