import React, { useState, useId } from 'react';
import { Calculator, DollarSign, ArrowRight, Percent, CheckCircle2, RefreshCw } from 'lucide-react';
import { MACRO_KPI_DATA } from '../data/macroReportData';

interface RoutePreset {
  name: string;
  category: string;
  exMillUSD: number;
  processingUSD: number;
  portChargesUSD: number;
  oceanFreightUSD: number;
  targetSellingUSD: number;
}

const PRESETS: RoutePreset[] = [
  {
    name: 'Mundra to Jeddah · Basmati 1121 Steam',
    category: 'Basmati',
    exMillUSD: 760,
    processingUSD: 35,
    portChargesUSD: 20,
    oceanFreightUSD: 32,
    targetSellingUSD: 910,
  },
  {
    name: 'Kakinada to Cotonou · IR64 Parboiled',
    category: 'Non-Basmati',
    exMillUSD: 310,
    processingUSD: 18,
    portChargesUSD: 15,
    oceanFreightUSD: 58,
    targetSellingUSD: 415,
  },
  {
    name: 'Kandla to Jebel Ali · 1509 Golden Sella',
    category: 'Basmati',
    exMillUSD: 710,
    processingUSD: 30,
    portChargesUSD: 18,
    oceanFreightUSD: 22,
    targetSellingUSD: 840,
  },
  {
    name: 'Kolkata to Chattogram · Swarna White',
    category: 'Non-Basmati',
    exMillUSD: 315,
    processingUSD: 15,
    portChargesUSD: 12,
    oceanFreightUSD: 28,
    targetSellingUSD: 395,
  },
];

export const MarginCalculator: React.FC = () => {
  const [category, setCategory] = useState<'Basmati' | 'Non-Basmati'>('Basmati');
  const [exMillUSD, setExMillUSD] = useState<number>(760);
  const [processingUSD, setProcessingUSD] = useState<number>(35);
  const [portChargesUSD, setPortChargesUSD] = useState<number>(20);
  const [oceanFreightUSD, setOceanFreightUSD] = useState<number>(32);
  const [targetSellingUSD, setTargetSellingUSD] = useState<number>(910);

  // Derived calculations
  const totalFOBCost = exMillUSD + processingUSD + portChargesUSD;
  const totalCIFCost = totalFOBCost + oceanFreightUSD;
  const grossMarginUSD = targetSellingUSD - totalCIFCost;
  const marginPercentage = totalCIFCost > 0 ? (grossMarginUSD / targetSellingUSD) * 100 : 0;

  // Official benchmark
  const segmentBenchmark =
    category === 'Basmati'
      ? MACRO_KPI_DATA.segments.basmati.realizationUSDMT
      : MACRO_KPI_DATA.segments.nonBasmati.realizationUSDMT;

  const handleApplyPreset = (preset: RoutePreset) => {
    setCategory(preset.category as 'Basmati' | 'Non-Basmati');
    setExMillUSD(preset.exMillUSD);
    setProcessingUSD(preset.processingUSD);
    setPortChargesUSD(preset.portChargesUSD);
    setOceanFreightUSD(preset.oceanFreightUSD);
    setTargetSellingUSD(preset.targetSellingUSD);
  };

  return (
    <section id="margin-calculator" className="py-16 bg-[#0B1118] border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-teal-400 mb-2">
            <span>Section 05</span>
            <span>·</span>
            <span>Trade Feasibility & Costing Engine</span>
          </div>
          <h2 className="font-display text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
            Export Realization & Margin Simulator
          </h2>
          <p className="mt-2 text-slate-300 text-sm sm:text-base leading-relaxed">
            Calculate your Net FOB cost, landed CIF delivery, and commercial gross margins against the official FY2025-26 Indian national benchmarks ($535/MT avg).
          </p>
        </div>

        {/* Presets Row */}
        <div className="mt-6 flex flex-wrap items-center gap-2 text-xs">
          <span className="text-slate-400 mr-1 font-medium">Quick Route Presets:</span>
          {PRESETS.map((p) => (
            <button
              key={p.name}
              type="button"
              onClick={() => handleApplyPreset(p)}
              className="px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 transition-colors"
            >
              {p.name}
            </button>
          ))}
        </div>

        {/* Calculator Interactive Grid */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Inputs Form */}
          <div className="lg:col-span-7 p-6 rounded-xl bg-slate-900 border border-slate-800 space-y-5">
            <h3 className="font-bold text-white text-base flex items-center justify-between">
              <span>Milling, Port & Freight Variables</span>
              <button
                type="button"
                onClick={() => handleApplyPreset(PRESETS[0])}
                className="text-xs text-slate-400 hover:text-teal-400 flex items-center gap-1 font-normal"
              >
                <RefreshCw className="w-3 h-3" />
                <span>Reset Defaults</span>
              </button>
            </h3>

            {/* Segment Choice */}
            <div>
              <label className="block text-xs font-medium text-slate-400 mb-1.5">
                Rice Segment Category
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setCategory('Basmati')}
                  className={`py-2 px-3 text-xs font-semibold rounded-lg border transition-colors ${
                    category === 'Basmati'
                      ? 'bg-[#0E7C86] text-white border-teal-500'
                      : 'bg-slate-950 text-slate-400 border-slate-800 hover:text-white'
                  }`}
                >
                  Basmati (Ref: $870/MT)
                </button>
                <button
                  type="button"
                  onClick={() => setCategory('Non-Basmati')}
                  className={`py-2 px-3 text-xs font-semibold rounded-lg border transition-colors ${
                    category === 'Non-Basmati'
                      ? 'bg-[#0E7C86] text-white border-teal-500'
                      : 'bg-slate-950 text-slate-400 border-slate-800 hover:text-white'
                  }`}
                >
                  Non-Basmati (Ref: $390/MT)
                </button>
              </div>
            </div>

            {/* Input sliders / numbers */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              <div>
                <label className="block text-xs font-medium text-slate-400 mb-1">
                  Ex-Mill Base Procurement (US$/MT)
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-xs">$</span>
                  <input
                    type="number"
                    value={exMillUSD}
                    onChange={(e) => setExMillUSD(Number(e.target.value) || 0)}
                    className="w-full pl-7 pr-3 py-2 bg-slate-950 border border-slate-800 rounded-lg text-sm text-white font-mono focus:outline-none focus:ring-1 focus:ring-teal-500"
                  />
                </div>
                <span className="text-[10px] text-slate-400 mt-1 block">Raw paddy + initial hulling</span>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-400 mb-1">
                  Sortex, Polishing & Bagging (US$/MT)
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-xs">$</span>
                  <input
                    type="number"
                    value={processingUSD}
                    onChange={(e) => setProcessingUSD(Number(e.target.value) || 0)}
                    className="w-full pl-7 pr-3 py-2 bg-slate-950 border border-slate-800 rounded-lg text-sm text-white font-mono focus:outline-none focus:ring-1 focus:ring-teal-500"
                  />
                </div>
                <span className="text-[10px] text-slate-400 mt-1 block">Sortex grading, master bags, stitching</span>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-400 mb-1">
                  Port Handling, Fumigation & Cess (US$/MT)
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-xs">$</span>
                  <input
                    type="number"
                    value={portChargesUSD}
                    onChange={(e) => setPortChargesUSD(Number(e.target.value) || 0)}
                    className="w-full pl-7 pr-3 py-2 bg-slate-950 border border-slate-800 rounded-lg text-sm text-white font-mono focus:outline-none focus:ring-1 focus:ring-teal-500"
                  />
                </div>
                <span className="text-[10px] text-slate-400 mt-1 block">Inland haulage, THC, phytosanitary</span>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-400 mb-1">
                  Ocean Container / Bulk Freight (US$/MT)
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-xs">$</span>
                  <input
                    type="number"
                    value={oceanFreightUSD}
                    onChange={(e) => setOceanFreightUSD(Number(e.target.value) || 0)}
                    className="w-full pl-7 pr-3 py-2 bg-slate-950 border border-slate-800 rounded-lg text-sm text-white font-mono focus:outline-none focus:ring-1 focus:ring-teal-500"
                  />
                </div>
                <span className="text-[10px] text-slate-400 mt-1 block">To discharge destination harbor</span>
              </div>

            </div>

            {/* Selling target price */}
            <div className="pt-3 border-t border-slate-800">
              <label className="block text-xs font-medium text-teal-300 mb-1">
                Target Contract Selling Realization (US$/MT CIF)
              </label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-teal-400 text-sm font-bold">$</span>
                <input
                  type="number"
                  value={targetSellingUSD}
                  onChange={(e) => setTargetSellingUSD(Number(e.target.value) || 0)}
                  className="w-full pl-8 pr-4 py-2.5 bg-slate-950 border border-teal-800 rounded-lg text-base text-white font-mono font-bold focus:outline-none focus:ring-1 focus:ring-teal-500"
                />
              </div>
              <span className="text-[11px] text-slate-400 mt-1 block">
                Agreed price on Sales Contract with overseas importer
              </span>
            </div>

          </div>

          {/* Results Summary Card */}
          <div className="lg:col-span-5 p-6 rounded-xl bg-gradient-to-b from-slate-900 to-[#0e1722] border border-teal-900/50 space-y-6">
            <div>
              <span className="text-xs uppercase tracking-wider font-semibold text-teal-400">
                Calculated Trade Breakdown
              </span>
              <h3 className="font-display text-xl font-bold text-white mt-1">
                Estimated Net Realization
              </h3>
            </div>

            {/* Core Output Metrics */}
            <div className="space-y-3">
              <div className="p-3.5 rounded-lg bg-slate-950/80 border border-slate-800 flex items-center justify-between">
                <div>
                  <span className="text-xs text-slate-400">Net FOB Cost at Indian Port</span>
                  <span className="block text-[11px] text-slate-400">Ex-Mill + Processing + Port</span>
                </div>
                <span className="font-data text-xl font-bold text-white">
                  ${totalFOBCost} <span className="text-xs text-slate-400 font-normal">/ MT</span>
                </span>
              </div>

              <div className="p-3.5 rounded-lg bg-slate-950/80 border border-slate-800 flex items-center justify-between">
                <div>
                  <span className="text-xs text-slate-400">Total Landed CIF Cost</span>
                  <span className="block text-[11px] text-slate-400">FOB + Ocean Freight</span>
                </div>
                <span className="font-data text-xl font-bold text-slate-200">
                  ${totalCIFCost} <span className="text-xs text-slate-400 font-normal">/ MT</span>
                </span>
              </div>

              <div className={`p-4 rounded-lg border ${
                grossMarginUSD >= 0
                  ? 'bg-emerald-950/40 border-emerald-800/80'
                  : 'bg-rose-950/40 border-rose-800/80'
              } flex items-center justify-between`}>
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-slate-300">
                    Net Projected Margin
                  </span>
                  <span className="block text-[11px] text-slate-400">
                    Per Metric Ton Shipped
                  </span>
                </div>
                <div className="text-right">
                  <span className={`font-data text-2xl font-black ${
                    grossMarginUSD >= 0 ? 'text-emerald-400' : 'text-rose-400'
                  }`}>
                    {grossMarginUSD >= 0 ? `+$${grossMarginUSD}` : `-$${Math.abs(grossMarginUSD)}`}
                  </span>
                  <span className="block font-mono text-xs font-bold text-slate-300">
                    {marginPercentage.toFixed(1)}% Gross Margin
                  </span>
                </div>
              </div>
            </div>

            {/* Benchmark Comparative Callout */}
            <div className="p-4 rounded-lg bg-slate-950 border border-slate-800 text-xs space-y-2">
              <span className="text-slate-400 font-medium block">
                Comparison with Official FY26 Benchmarks:
              </span>
              <div className="flex items-center justify-between text-slate-300">
                <span>{category} Official Benchmark:</span>
                <span className="font-data font-bold text-teal-400">${segmentBenchmark}/MT</span>
              </div>
              <div className="flex items-center justify-between text-slate-300">
                <span>Your Target Price:</span>
                <span className="font-data font-bold text-white">${targetSellingUSD}/MT</span>
              </div>
              <p className="text-[11px] text-slate-400 pt-1 border-t border-slate-800">
                {targetSellingUSD >= segmentBenchmark
                  ? `Your target price is +$${targetSellingUSD - segmentBenchmark}/MT above the national FY26 average for ${category.toLowerCase()} rice.`
                  : `Your target price is -$${segmentBenchmark - targetSellingUSD}/MT below the national FY26 average for ${category.toLowerCase()} rice.`}
              </p>
            </div>

            {/* Direct Exporter Action */}
            <a
              href="#contact-desk"
              className="w-full py-3 px-4 text-xs font-semibold text-white bg-[#0E7C86] hover:bg-[#0c6b74] rounded-lg transition-colors flex items-center justify-center gap-2"
            >
              <span>Submit Costing for Trade Desk Review</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>

          </div>

        </div>

      </div>
    </section>
  );
};
