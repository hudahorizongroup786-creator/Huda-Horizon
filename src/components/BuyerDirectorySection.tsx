import React, { useState, useMemo } from 'react';
import {
  Search,
  Filter,
  Download,
  Building2,
  Ship,
  ShieldCheck,
  ExternalLink,
  ChevronRight,
  X,
  Mail,
  CheckCircle,
  FileText,
  BadgeCheck,
  Send,
  Phone,
  Sparkles,
} from 'lucide-react';
import { VERIFIED_BUYERS, Buyer } from '../data/buyersData';

interface BuyerDirectoryProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
  onSelectBuyerForInquiry: (buyer: Buyer) => void;
}

export const BuyerDirectorySection: React.FC<BuyerDirectoryProps> = ({
  searchQuery,
  onSearchChange,
  selectedCategory,
  onSelectCategory,
  onSelectBuyerForInquiry,
}) => {
  const [selectedRegion, setSelectedRegion] = useState<string>('All');
  const [activeDossierBuyer, setActiveDossierBuyer] = useState<Buyer | null>(null);
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  // Filter categories
  const categories = ['All', 'Basmati', 'Non-Basmati', 'Parboiled', '100% Broken'];
  const regions = [
    'All',
    'Middle East',
    'West Africa',
    'South Asia',
    'North America',
    'Europe',
    'East Africa',
  ];

  // Filter logic
  const filteredBuyers = useMemo(() => {
    return VERIFIED_BUYERS.filter((b) => {
      // Category filter
      const matchesCategory =
        selectedCategory === 'All' ||
        b.category.toLowerCase() === selectedCategory.toLowerCase() ||
        (selectedCategory === 'Non-Basmati' &&
          (b.category === 'Non-Basmati' || b.category === 'Parboiled' || b.category === '100% Broken'));

      // Region filter
      const matchesRegion = selectedRegion === 'All' || b.region === selectedRegion;

      // Search query
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        b.companyName.toLowerCase().includes(q) ||
        b.country.toLowerCase().includes(q) ||
        b.dischargePort.toLowerCase().includes(q) ||
        b.preferredProducts.some((p) => p.toLowerCase().includes(q));

      return matchesCategory && matchesRegion && matchesSearch;
    });
  }, [searchQuery, selectedCategory, selectedRegion]);

  // Aggregate metric
  const totalVolumeMT = useMemo(() => {
    return filteredBuyers.reduce((sum, b) => sum + b.annualVolumeMT, 0);
  }, [filteredBuyers]);

  // Data Open Option: Client-side CSV export
  const handleExportCSV = () => {
    const headers = [
      'Buyer ID',
      'Company Name',
      'Country',
      'Region',
      'Discharge Port',
      'Rice Category',
      'Preferred Products',
      'Annual Volume (MT)',
      'Target Price ($/MT)',
      'Incoterm',
      'Payment Terms',
      'Packing Specs',
      'Verification Status',
      'Headquarters',
    ];

    const rows = filteredBuyers.map((b) => [
      `"${b.id}"`,
      `"${b.companyName}"`,
      `"${b.country}"`,
      `"${b.region}"`,
      `"${b.dischargePort}"`,
      `"${b.category}"`,
      `"${b.preferredProducts.join('; ')}"`,
      b.annualVolumeMT,
      `"${b.targetPriceUSDMT}"`,
      `"${b.incoterm}"`,
      `"${b.paymentTerms}"`,
      `"${b.packingSpec}"`,
      `"${b.verificationStatus}"`,
      `"${b.headquarters}"`,
    ]);

    const csvContent =
      'data:text/csv;charset=utf-8,' +
      [headers.join(','), ...rows.map((e) => e.join(','))].join('\n');

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `Huda_Horizon_Verified_Rice_Buyers_${Date.now()}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setDownloadSuccess(true);
    setTimeout(() => setDownloadSuccess(false), 3500);
  };

  return (
    <section id="buyer-directory" className="py-16 bg-[#0F1720] border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-teal-400 mb-2">
              <span>Section 04</span>
              <span>·</span>
              <span>Buyer Intelligence & Data Open Option</span>
            </div>
            <h2 className="font-display text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
              Verified Global Rice Buyer Directory
            </h2>
            <p className="mt-2 text-slate-300 text-sm sm:text-base max-w-2xl">
              Pre-screened international rice importers, institutional tenders, and supermarket retail buyers across GCC, West Africa, and Europe.
            </p>
          </div>

          {/* Data Open Export Button */}
          <div className="flex items-center gap-3 self-start md:self-auto">
            <button
              type="button"
              onClick={handleExportCSV}
              className="px-4 py-2 text-xs font-semibold text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-lg transition-colors flex items-center gap-2 shadow-sm"
              title="Export Current Filtered Directory to CSV"
            >
              <Download className="w-3.5 h-3.5 text-teal-400" />
              <span>Export CSV (Data Open)</span>
            </button>
          </div>
        </div>

        {/* Download Success Notice */}
        {downloadSuccess && (
          <div className="mt-4 p-3 rounded-lg bg-emerald-950/80 border border-emerald-800 text-xs text-emerald-300 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-emerald-400" />
              <span>
                Verified Buyer Dataset exported successfully! Includes company profiles, port specifications, and payment terms.
              </span>
            </div>
            <span className="font-mono text-[11px] text-emerald-400">CSV Ready</span>
          </div>
        )}

        {/* Filter Controls Row */}
        <div className="mt-8 p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-4">
          
          {/* Top row: Search input + Region Selector */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <div className="relative md:col-span-2">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                placeholder="Search by company name, country, discharge port, or variety (e.g., 1121 Sella, IR64)..."
                className="w-full pl-10 pr-4 py-2.5 bg-slate-950 border border-slate-700/80 rounded-lg text-sm text-white placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-teal-500"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => onSearchChange('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            <div>
              <select
                value={selectedRegion}
                onChange={(e) => setSelectedRegion(e.target.value)}
                className="w-full py-2.5 px-3 bg-slate-950 border border-slate-700/80 rounded-lg text-sm text-white focus:outline-none focus:ring-1 focus:ring-teal-500 cursor-pointer"
              >
                {regions.map((reg) => (
                  <option key={reg} value={reg} className="bg-slate-900 text-white">
                    {reg === 'All' ? 'All Global Regions' : reg}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Bottom row: Category Filter Tabs */}
          <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-slate-800">
            <div className="flex flex-wrap items-center gap-1.5">
              <span className="text-xs text-slate-400 mr-2 font-medium">Rice Category:</span>
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => onSelectCategory(cat)}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors whitespace-nowrap ${
                    selectedCategory.toLowerCase() === cat.toLowerCase()
                      ? 'bg-[#0E7C86] text-white'
                      : 'bg-slate-800/80 text-slate-300 hover:bg-slate-700 hover:text-white'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Quick summary count */}
            <div className="text-xs text-slate-400 font-mono">
              Showing <span className="text-white font-bold">{filteredBuyers.length}</span> verified buyers
              {' '}(<span className="text-teal-400 font-bold">{totalVolumeMT.toLocaleString()} MT/yr</span> demand)
            </div>
          </div>
        </div>

        {/* Directory Data Table */}
        <div className="mt-6 rounded-xl bg-slate-900 border border-slate-800 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-slate-800 bg-slate-950 text-slate-400 font-medium">
                  <th className="py-3.5 px-4 sm:px-6">Importer / Company</th>
                  <th className="py-3.5 px-4">Country & Discharge Port</th>
                  <th className="py-3.5 px-4">Preferred Product Spec</th>
                  <th className="py-3.5 px-4 text-right">Annual Volume</th>
                  <th className="py-3.5 px-4 text-center">Status</th>
                  <th className="py-3.5 px-4 sm:px-6 text-right">Dossier / Contact</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800">
                {filteredBuyers.length === 0 ? (
                  <tr>
                    <td colSpan={6} className="py-12 text-center text-slate-400 text-sm">
                      No verified buyers found matching your criteria. Try resetting filters or search query.
                    </td>
                  </tr>
                ) : (
                  filteredBuyers.map((buyer) => (
                    <tr
                      key={buyer.id}
                      className="hover:bg-slate-800/50 transition-colors group cursor-pointer"
                      onClick={() => setActiveDossierBuyer(buyer)}
                    >
                      {/* Company Name */}
                      <td className="py-4 px-4 sm:px-6">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded bg-slate-800 flex items-center justify-center text-teal-400 group-hover:bg-[#0E7C86] group-hover:text-white transition-colors shrink-0">
                            <Building2 className="w-4 h-4" />
                          </div>
                          <div>
                            <span className="font-bold text-white group-hover:text-teal-300 transition-colors block">
                              {buyer.companyName}
                            </span>
                            <span className="text-[11px] text-slate-400 font-mono">
                              ID: {buyer.id} · Est. {buyer.establishedYear}
                            </span>
                          </div>
                        </div>
                      </td>

                      {/* Country & Port */}
                      <td className="py-4 px-4">
                        <div className="flex items-center gap-2">
                          <span className="text-xl shrink-0" role="img" aria-label={buyer.country}>
                            {buyer.flag}
                          </span>
                          <div>
                            <span className="font-semibold text-slate-200 block text-xs sm:text-sm">
                              {buyer.country}
                            </span>
                            <span className="text-[11px] text-slate-400 flex items-center gap-1">
                              <Ship className="w-3 h-3 text-teal-400 shrink-0" />
                              <span className="truncate max-w-[150px]">{buyer.dischargePort}</span>
                            </span>
                          </div>
                        </div>
                      </td>

                      {/* Preferred Product */}
                      <td className="py-4 px-4">
                        <div className="space-y-1">
                          <span className="text-xs font-semibold text-teal-300 block">
                            {buyer.category}
                          </span>
                          <span className="text-[11px] text-slate-300 line-clamp-1">
                            {buyer.preferredProducts.join(', ')}
                          </span>
                        </div>
                      </td>

                      {/* Annual Volume */}
                      <td className="py-4 px-4 text-right">
                        <div className="font-data font-bold text-white text-xs sm:text-sm">
                          {buyer.annualVolumeMT.toLocaleString()} MT
                        </div>
                        <span className="text-[11px] text-slate-400 block font-mono">
                          {buyer.targetPriceUSDMT}
                        </span>
                      </td>

                      {/* Verification Status */}
                      <td className="py-4 px-4 text-center">
                        <span className="inline-flex items-center gap-1 text-[11px] font-semibold px-2 py-0.5 rounded bg-emerald-950/80 text-emerald-400 border border-emerald-800/60 whitespace-nowrap">
                          <BadgeCheck className="w-3.5 h-3.5" />
                          <span>{buyer.verificationStatus === 'Verified Exporter-Ready' ? 'Verified' : 'Active KYC'}</span>
                        </span>
                      </td>

                      {/* Actions */}
                      <td className="py-4 px-4 sm:px-6 text-right whitespace-nowrap">
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            setActiveDossierBuyer(buyer);
                          }}
                          className="px-3 py-1.5 text-xs font-semibold text-white bg-[#0E7C86] hover:bg-[#0c6b74] rounded transition-colors inline-flex items-center gap-1"
                        >
                          <span>Open Dossier</span>
                          <ChevronRight className="w-3.5 h-3.5" />
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Dossier Modal ("Data Open Option Preview") */}
        {activeDossierBuyer && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
            <div className="bg-[#0F1720] border border-slate-700 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl p-6 sm:p-8">
              
              {/* Modal Top */}
              <div className="flex items-start justify-between pb-4 border-b border-slate-800">
                <div className="flex items-center gap-3">
                  <span className="text-3xl" role="img" aria-label={activeDossierBuyer.country}>
                    {activeDossierBuyer.flag}
                  </span>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs uppercase tracking-wider font-semibold text-teal-400">
                        Official Buyer Dossier
                      </span>
                      <span className="text-slate-500">·</span>
                      <span className="text-xs text-slate-400 font-mono">
                        {activeDossierBuyer.id}
                      </span>
                    </div>
                    <h3 className="font-display text-xl sm:text-2xl font-bold text-white mt-0.5">
                      {activeDossierBuyer.companyName}
                    </h3>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setActiveDossierBuyer(null)}
                  className="p-1 rounded-md text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                  aria-label="Close Dossier"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Dossier Body Content */}
              <div className="mt-6 space-y-6 text-sm text-slate-300">
                
                {/* Overview paragraph */}
                <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800">
                  <span className="text-xs font-semibold text-slate-400 uppercase tracking-wide block mb-1">
                    Corporate Profile & Commercial Reach
                  </span>
                  <p className="text-slate-200 leading-relaxed text-xs sm:text-sm">
                    {activeDossierBuyer.overview}
                  </p>
                </div>

                {/* Key Spec Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs">
                  <div className="bg-slate-900/60 p-3 rounded-lg border border-slate-800">
                    <span className="text-slate-400 block mb-0.5">Annual Requirement</span>
                    <span className="font-data font-bold text-white text-base">
                      {activeDossierBuyer.annualVolumeMT.toLocaleString()} MT
                    </span>
                  </div>
                  <div className="bg-slate-900/60 p-3 rounded-lg border border-slate-800">
                    <span className="text-slate-400 block mb-0.5">Target Benchmark Price</span>
                    <span className="font-data font-bold text-teal-300 text-sm">
                      {activeDossierBuyer.targetPriceUSDMT}
                    </span>
                  </div>
                  <div className="bg-slate-900/60 p-3 rounded-lg border border-slate-800">
                    <span className="text-slate-400 block mb-0.5">Incoterm / Port</span>
                    <span className="font-semibold text-white truncate block">
                      {activeDossierBuyer.incoterm} - {activeDossierBuyer.dischargePort}
                    </span>
                  </div>
                  <div className="bg-slate-900/60 p-3 rounded-lg border border-slate-800">
                    <span className="text-slate-400 block mb-0.5">Payment Terms</span>
                    <span className="font-semibold text-white block">
                      {activeDossierBuyer.paymentTerms}
                    </span>
                  </div>
                  <div className="bg-slate-900/60 p-3 rounded-lg border border-slate-800">
                    <span className="text-slate-400 block mb-0.5">Packaging Specs</span>
                    <span className="font-semibold text-white block truncate">
                      {activeDossierBuyer.packingSpec}
                    </span>
                  </div>
                  <div className="bg-slate-900/60 p-3 rounded-lg border border-slate-800">
                    <span className="text-slate-400 block mb-0.5">Reliability Score</span>
                    <span className="font-data font-bold text-emerald-400 text-base">
                      {activeDossierBuyer.reliabilityScore} / 100
                    </span>
                  </div>
                </div>

                {/* Preferred Varieties */}
                <div>
                  <span className="text-xs font-semibold text-slate-400 block mb-2">
                    Specified Cultivars & Grades:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {activeDossierBuyer.preferredProducts.map((p) => (
                      <span
                        key={p}
                        className="px-3 py-1 rounded bg-teal-950/80 text-teal-300 border border-teal-800 text-xs font-medium"
                      >
                        {p}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Procurement Desk */}
                <div className="p-3.5 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-between text-xs">
                  <div>
                    <span className="text-slate-400 block">Designated Trade Desk:</span>
                    <span className="font-semibold text-white">
                      {activeDossierBuyer.contactPersonTitle} · {activeDossierBuyer.department}
                    </span>
                  </div>
                  <span className="font-mono text-teal-400 text-[11px]">
                    HQ: {activeDossierBuyer.headquarters}
                  </span>
                </div>

                {/* Lead-gate action */}
                <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row gap-3">
                  <button
                    type="button"
                    onClick={() => {
                      onSelectBuyerForInquiry(activeDossierBuyer);
                      setActiveDossierBuyer(null);
                      const el = document.getElementById('contact-desk');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="flex-1 px-4 py-3 text-xs sm:text-sm font-semibold text-white bg-[#0E7C86] hover:bg-[#0c6b74] rounded-lg transition-colors flex items-center justify-center gap-2 shadow-md"
                  >
                    <Send className="w-4 h-4" />
                    <span>Inquire / Request Trade Introduction</span>
                  </button>

                  <a
                    href={`mailto:hudahorizongroup786@gmail.com?subject=Buyer Introduction Request: ${activeDossierBuyer.companyName} (${activeDossierBuyer.id})&body=Hello Huda Horizon Trade Desk,%0D%0A%0D%0AI would like to establish connection and receive commercial export specs for verified buyer ${activeDossierBuyer.companyName} in ${activeDossierBuyer.country}.%0D%0A%0D%0AMy Exporter Details:%0D%0ACompany Name:%0D%0AContact Phone / WhatsApp:%0D%0ARice Variety Available:%0D%0AMonthly Tonnage Capacity:`}
                    className="px-4 py-3 text-xs sm:text-sm font-medium text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors flex items-center justify-center gap-2 border border-slate-700"
                  >
                    <Mail className="w-4 h-4" />
                    <span>Direct Mail Desk</span>
                  </a>
                </div>

              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
};
