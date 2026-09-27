import React, { useState } from 'react';
import { BarChart3, TrendingUp, Info, Calendar, ArrowUpRight, ArrowDownRight, Layers } from 'lucide-react';
import { SIX_YEAR_HISTORICAL_DATA, MacroYearData } from '../data/macroReportData';

export const HistoricalTrendSection: React.FC = () => {
  const [selectedYear, setSelectedYear] = useState<MacroYearData>(
    SIX_YEAR_HISTORICAL_DATA[SIX_YEAR_HISTORICAL_DATA.length - 1]
  );

  // Maximum scales for chart rendering
  const maxVolume = 25; // max MMT scale
  const maxValue = 15; // max US$B scale

  return (
    <section id="historical-trend" className="py-16 bg-[#0F1720] border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-teal-400 mb-2">
              <span>Section 02</span>
              <span>·</span>
              <span>Longitudinal Trade Analysis</span>
            </div>
            <h2 className="font-display text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
              The six-year story is a volume rebound with a price problem
            </h2>
            <p className="mt-2 text-slate-300 text-sm sm:text-base max-w-2xl">
              From the pandemic grain surge (FY21) to export policy disruptions (FY24) and the post-restriction price normalization in FY26.
            </p>
          </div>

          <div className="flex items-center gap-4 text-xs font-medium text-slate-400 bg-slate-900/90 px-4 py-2.5 rounded-lg border border-slate-800 self-start md:self-auto">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-sm bg-[#0E7C86]"></span>
              <span className="text-slate-300">Quantity (MMT)</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-sm bg-amber-500"></span>
              <span className="text-slate-300">Value (US$ Billion)</span>
            </div>
          </div>
        </div>

        {/* Interactive Bar Chart Visualization */}
        <div className="mt-10 p-6 sm:p-8 rounded-xl bg-slate-900/90 border border-slate-800">
          <div className="flex items-center justify-between pb-6 border-b border-slate-800">
            <div>
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <BarChart3 className="w-4 h-4 text-teal-400" />
                <span>Quantity vs Value Comparison (FY2020-21 to FY2025-26)</span>
              </h3>
              <p className="text-xs text-slate-400 mt-0.5">
                Click on any financial year to view policy interventions and realization benchmarks.
              </p>
            </div>
            <span className="text-xs text-slate-400 font-mono hidden sm:inline-block">
              Units: Tonnage in MMT · Currency in US$B
            </span>
          </div>

          {/* Chart Bars Grid */}
          <div className="mt-8 grid grid-cols-6 gap-2 sm:gap-6 pt-4 pb-2 items-end min-h-[260px] sm:min-h-[300px]">
            {SIX_YEAR_HISTORICAL_DATA.map((item) => {
              const isSelected = selectedYear.year === item.year;
              const volumeHeightPct = (item.volumeMMT / maxVolume) * 100;
              const valueHeightPct = (item.valueBillionUSD / maxValue) * 100;

              return (
                <button
                  key={item.year}
                  type="button"
                  onClick={() => setSelectedYear(item)}
                  className={`group flex flex-col items-center justify-end h-full focus:outline-none transition-all rounded-lg p-1 sm:p-2 ${
                    isSelected ? 'bg-slate-800/80 ring-1 ring-teal-500' : 'hover:bg-slate-800/40'
                  }`}
                >
                  {/* Top value badge when selected */}
                  <div className="text-[10px] sm:text-xs font-mono text-slate-400 mb-2 opacity-80 group-hover:opacity-100">
                    <span className="text-teal-400 font-bold block">{item.volumeMMT}M</span>
                    <span className="text-amber-400 font-bold block">${item.valueBillionUSD}B</span>
                  </div>

                  {/* Dual Bars container */}
                  <div className="w-full flex items-end justify-center gap-1 sm:gap-2 h-48 sm:h-56">
                    {/* Volume Bar */}
                    <div
                      style={{ height: `${volumeHeightPct}%` }}
                      className={`w-3 sm:w-6 rounded-t transition-all ${
                        isSelected
                          ? 'bg-[#0E7C86] shadow-md shadow-teal-500/30'
                          : 'bg-[#0E7C86]/70 group-hover:bg-[#0E7C86]'
                      }`}
                    />
                    {/* Value Bar */}
                    <div
                      style={{ height: `${valueHeightPct}%` }}
                      className={`w-3 sm:w-6 rounded-t transition-all ${
                        isSelected
                          ? 'bg-amber-500 shadow-md shadow-amber-500/30'
                          : 'bg-amber-500/70 group-hover:bg-amber-500'
                      }`}
                    />
                  </div>

                  {/* Year Label */}
                  <div className="mt-3 text-center">
                    <span
                      className={`text-xs sm:text-sm font-bold block ${
                        isSelected ? 'text-teal-300' : 'text-slate-400 group-hover:text-slate-200'
                      }`}
                    >
                      {item.label}
                    </span>
                    <span className="text-[10px] text-slate-400 hidden sm:block">
                      ${item.realizationUSDMT}/MT
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Detailed Year Focus Callout */}
          <div className="mt-8 p-4 sm:p-5 rounded-lg bg-slate-950/80 border border-slate-800">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-slate-800/80">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-teal-400" />
                <span className="text-sm font-bold text-white">
                  Fiscal Period: {selectedYear.year} ({selectedYear.label})
                </span>
                <span className="text-xs px-2 py-0.5 rounded bg-slate-800 text-teal-400 font-mono">
                  Realization: ${selectedYear.realizationUSDMT} / MT
                </span>
              </div>
              <div className="flex items-center gap-4 text-xs font-mono">
                <span className="text-slate-400">
                  Volume YoY:{' '}
                  <span
                    className={
                      selectedYear.volumeGrowth?.startsWith('+')
                        ? 'text-emerald-400 font-bold'
                        : 'text-rose-400 font-bold'
                    }
                  >
                    {selectedYear.volumeGrowth}
                  </span>
                </span>
                <span className="text-slate-400">
                  Value YoY:{' '}
                  <span
                    className={
                      selectedYear.valueGrowth?.startsWith('+')
                        ? 'text-emerald-400 font-bold'
                        : 'text-rose-400 font-bold'
                    }
                  >
                    {selectedYear.valueGrowth}
                  </span>
                </span>
              </div>
            </div>

            <div className="mt-3 grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
              <div className="bg-slate-900/60 p-3 rounded border border-slate-800/60">
                <span className="text-slate-400 block mb-1">Export Quantity</span>
                <span className="font-data text-lg font-bold text-white">
                  {selectedYear.volumeMMT} Million MT
                </span>
              </div>
              <div className="bg-slate-900/60 p-3 rounded border border-slate-800/60">
                <span className="text-slate-400 block mb-1">Total Dollar Value</span>
                <span className="font-data text-lg font-bold text-amber-400">
                  US$ {selectedYear.valueBillionUSD} Billion
                </span>
              </div>
              <div className="bg-slate-900/60 p-3 rounded border border-slate-800/60">
                <span className="text-slate-400 block mb-1">Trade Policy Benchmark</span>
                <p className="text-slate-300 leading-snug">{selectedYear.policyNotes}</p>
              </div>
            </div>
          </div>
        </div>

        {/* 6-Year Historical Data Table */}
        <div className="mt-8 rounded-xl bg-slate-900/90 border border-slate-800 overflow-hidden">
          <div className="p-4 sm:p-5 border-b border-slate-800 flex items-center justify-between">
            <h3 className="font-bold text-sm sm:text-base text-white">
              Official 6-Year India Rice Export Matrix (FY21 to FY26)
            </h3>
            <span className="text-xs text-slate-400 font-mono">APEDA / DGFT Records</span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-slate-800 bg-slate-950/60 text-slate-400 font-medium">
                  <th className="py-3 px-4 sm:px-6">Financial Year</th>
                  <th className="py-3 px-4 text-right">Volume (MMT)</th>
                  <th className="py-3 px-4 text-right">Volume Growth</th>
                  <th className="py-3 px-4 text-right">Export Value (US$ B)</th>
                  <th className="py-3 px-4 text-right">Value Growth</th>
                  <th className="py-3 px-4 text-right">Avg Realization ($/MT)</th>
                  <th className="py-3 px-4 sm:px-6">Policy & Trade Regime</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800 font-normal">
                {SIX_YEAR_HISTORICAL_DATA.map((row) => (
                  <tr
                    key={row.year}
                    className={`hover:bg-slate-800/50 transition-colors ${
                      row.year === 'FY2025-26' ? 'bg-teal-950/20 font-medium' : ''
                    }`}
                  >
                    <td className="py-3.5 px-4 sm:px-6 font-semibold text-white whitespace-nowrap">
                      {row.year}
                      {row.year === 'FY2025-26' && (
                        <span className="ml-2 text-[10px] text-teal-400 bg-teal-950 border border-teal-800 px-1.5 py-0.5 rounded">
                          Current FY
                        </span>
                      )}
                    </td>
                    <td className="py-3.5 px-4 text-right font-data font-semibold text-slate-200">
                      {row.volumeMMT}
                    </td>
                    <td
                      className={`py-3.5 px-4 text-right font-data ${
                        row.volumeGrowth?.startsWith('+') ? 'text-emerald-400' : 'text-rose-400'
                      }`}
                    >
                      {row.volumeGrowth}
                    </td>
                    <td className="py-3.5 px-4 text-right font-data font-semibold text-amber-300">
                      US$ {row.valueBillionUSD}B
                    </td>
                    <td
                      className={`py-3.5 px-4 text-right font-data ${
                        row.valueGrowth?.startsWith('+') ? 'text-emerald-400' : 'text-rose-400'
                      }`}
                    >
                      {row.valueGrowth}
                    </td>
                    <td className="py-3.5 px-4 text-right font-data font-bold text-white">
                      ${row.realizationUSDMT}
                    </td>
                    <td className="py-3.5 px-4 sm:px-6 text-slate-300 text-xs max-w-xs truncate">
                      {row.policyNotes}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </section>
  );
};
