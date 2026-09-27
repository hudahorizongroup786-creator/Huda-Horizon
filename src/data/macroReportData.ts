export interface MacroYearData {
  year: string;
  label: string;
  volumeMMT: number;
  valueBillionUSD: number;
  realizationUSDMT: number;
  volumeGrowth?: string;
  valueGrowth?: string;
  policyNotes: string;
}

export interface DestinationMarket {
  country: string;
  percentage: number;
  volumeMT: number;
  flag: string;
  primaryPorts: string[];
  keyProducts: string;
}

export const MACRO_KPI_DATA = {
  fyVolume: 21.57,
  fyVolumePrevious: 20.19,
  volumeDeltaMMT: 1.38,
  volumeUnrounded: 21.566,
  fyValueUSD: 11.54,
  fyValuePrevious: 12.47,
  valueDeltaUSD: -0.93,
  valueUnrounded: 11.538,
  realizationUSDMT: 535,
  realizationPreviousUSDMT: 618,
  realizationDelta: -83,
  segments: {
    basmati: {
      volumeMMT: 6.52,
      valueUSD: 5.67,
      realizationUSDMT: 870,
      volumeShare: 30.2,
      valueShare: 49.1,
    },
    nonBasmati: {
      volumeMMT: 15.05,
      valueUSD: 5.87,
      realizationUSDMT: 390,
      volumeShare: 69.8,
      valueShare: 50.9,
    },
  },
  volumeRecoveryDriver:
    "Shippers regained access to African and Asian markets as baseline trade flows normalized across broken and white rice channels.",
  valueCompressionDriver:
    "Average export realization dropped across broad categories, preventing total earnings from matching the previous year's record.",
};

export const SIX_YEAR_HISTORICAL_DATA: MacroYearData[] = [
  {
    year: "FY2020-21",
    label: "FY21",
    volumeMMT: 17.7,
    valueBillionUSD: 8.82,
    realizationUSDMT: 498,
    volumeGrowth: "+81.3%",
    valueGrowth: "+43.6%",
    policyNotes: "Pandemic food security surge; open export policy across Non-Basmati.",
  },
  {
    year: "FY2021-22",
    label: "FY22",
    volumeMMT: 21.2,
    valueBillionUSD: 9.65,
    realizationUSDMT: 455,
    volumeGrowth: "+19.8%",
    valueGrowth: "+9.4%",
    policyNotes: "Massive African containerized demand; record high parboiled shipments.",
  },
  {
    year: "FY2022-23",
    label: "FY23",
    volumeMMT: 22.4,
    valueBillionUSD: 11.10,
    realizationUSDMT: 496,
    volumeGrowth: "+5.7%",
    valueGrowth: "+15.0%",
    policyNotes: "All-time volume peak; late-year 20% export duty on Non-Basmati introduced.",
  },
  {
    year: "FY2023-24",
    label: "FY24",
    volumeMMT: 15.9,
    valueBillionUSD: 10.40,
    realizationUSDMT: 654,
    volumeGrowth: "-29.0%",
    valueGrowth: "-6.3%",
    policyNotes: "Strict export ban on white rice, $950-$1200 MEP on Basmati; prices spiked.",
  },
  {
    year: "FY2024-25",
    label: "FY25",
    volumeMMT: 20.19,
    valueBillionUSD: 12.47,
    realizationUSDMT: 618,
    volumeGrowth: "+27.0%",
    valueGrowth: "+19.9%",
    policyNotes: "Phased easing of MEP and export quotas; value set historic $12.47B benchmark.",
  },
  {
    year: "FY2025-26",
    label: "FY26",
    volumeMMT: 21.57,
    valueBillionUSD: 11.54,
    realizationUSDMT: 535,
    volumeGrowth: "+6.8%",
    valueGrowth: "-7.5%",
    policyNotes: "Duty elimination; sharp volume rebound to 21.57 MMT, prices compressed to $535/MT.",
  },
];

export const TOP_BASMATI_MARKETS: DestinationMarket[] = [
  {
    country: "Saudi Arabia",
    percentage: 16.62,
    volumeMT: 1083600,
    flag: "🇸🇦",
    primaryPorts: ["Jeddah Islamic Port", "King Abdulaziz Port Dammam"],
    keyProducts: "Basmati 1121 Steam, Pusa 1509 Sella, Traditional Raw",
  },
  {
    country: "Iran",
    percentage: 13.92,
    volumeMT: 907500,
    flag: "🇮🇷",
    primaryPorts: ["Bandar Abbas", "Chabahar Port"],
    keyProducts: "1121 Golden Sella, Super Basmati",
  },
  {
    country: "Iraq",
    percentage: 11.18,
    volumeMT: 728900,
    flag: "🇮🇶",
    primaryPorts: ["Umm Qasr Port"],
    keyProducts: "1121 Creamy Sella, 1509 Steam",
  },
  {
    country: "UAE",
    percentage: 8.18,
    volumeMT: 533300,
    flag: "🇦🇪",
    primaryPorts: ["Jebel Ali Dubai", "Port Khalid Sharjah"],
    keyProducts: "1121 Steam / Raw, Traditional Aged Basmati",
  },
  {
    country: "Yemen",
    percentage: 5.70,
    volumeMT: 371600,
    flag: "🇾🇪",
    primaryPorts: ["Hodeidah Port", "Aden Port"],
    keyProducts: "1121 Sella, Long Grain Basmati",
  },
  {
    country: "United Kingdom",
    percentage: 4.15,
    volumeMT: 270500,
    flag: "🇬🇧",
    primaryPorts: ["Felixstowe", "London Gateway"],
    keyProducts: "Authentic Dehradun Basmati, 1121 Brown & Milled",
  },
  {
    country: "United States",
    percentage: 3.82,
    volumeMT: 249000,
    flag: "🇺🇸",
    primaryPorts: ["New York / Newark", "Houston", "Long Beach"],
    keyProducts: "Premium Aged 1121 Basmati, Organic Basmati",
  },
  {
    country: "Kuwait",
    percentage: 3.45,
    volumeMT: 224900,
    flag: "🇰🇼",
    primaryPorts: ["Shuwaikh Port", "Shuaiba Port"],
    keyProducts: "1121 XXL Steam, Pusa Sella",
  },
  {
    country: "Oman",
    percentage: 2.95,
    volumeMT: 192300,
    flag: "🇴🇲",
    primaryPorts: ["Sohar Port", "Port Sultan Qaboos"],
    keyProducts: "1121 Steam, 1401 Basmati",
  },
  {
    country: "Other Markets",
    percentage: 20.03,
    volumeMT: 1306000,
    flag: "🌐",
    primaryPorts: ["Global Regional Ports"],
    keyProducts: "Diversified Basmati Cultivars",
  },
];

export const TOP_NON_BASMATI_MARKETS: DestinationMarket[] = [
  {
    country: "Benin",
    percentage: 11.46,
    volumeMT: 1724700,
    flag: "🇧🇯",
    primaryPorts: ["Port of Cotonou"],
    keyProducts: "IR64 5% Broken Parboiled, 100% Broken White",
  },
  {
    country: "Bangladesh",
    percentage: 9.29,
    volumeMT: 1398100,
    flag: "🇧🇩",
    primaryPorts: ["Chattogram (Chittagong)", "Mongla Port"],
    keyProducts: "Swarna Parboiled, Non-Basmati White Rice 5%",
  },
  {
    country: "Guinea",
    percentage: 6.61,
    volumeMT: 994800,
    flag: "🇬🇳",
    primaryPorts: ["Port of Conakry"],
    keyProducts: "Parboiled Rice 5% & 25% Broken",
  },
  {
    country: "Togo",
    percentage: 6.58,
    volumeMT: 990300,
    flag: "🇹🇬",
    primaryPorts: ["Autonomous Port of Lomé"],
    keyProducts: "IR64 Parboiled, 100% Broken Grain",
  },
  {
    country: "Côte d'Ivoire",
    percentage: 5.39,
    volumeMT: 811200,
    flag: "🇨🇮",
    primaryPorts: ["Autonomous Port of Abidjan"],
    keyProducts: "Parboiled 5% Sortexed, White Rice 25%",
  },
  {
    country: "Senegal",
    percentage: 4.82,
    volumeMT: 725400,
    flag: "🇸🇳",
    primaryPorts: ["Port Autonome de Dakar"],
    keyProducts: "100% Broken White Rice (Thieboudienne grade)",
  },
  {
    country: "Djibouti",
    percentage: 4.12,
    volumeMT: 620000,
    flag: "🇩🇯",
    primaryPorts: ["Port of Djibouti (Transit to Ethiopia)"],
    keyProducts: "Long Grain White Rice, Parboiled 5%",
  },
  {
    country: "Somalia",
    percentage: 3.95,
    volumeMT: 594500,
    flag: "🇸🇴",
    primaryPorts: ["Mogadishu Port", "Berbera Port"],
    keyProducts: "IR64 White Rice 5%, Broken Rice",
  },
  {
    country: "Mozambique",
    percentage: 3.78,
    volumeMT: 568900,
    flag: "🇲🇿",
    primaryPorts: ["Port of Maputo", "Port of Beira"],
    keyProducts: "White Rice 25% Broken, Parboiled 5%",
  },
  {
    country: "Other African / Asian Markets",
    percentage: 44.00,
    volumeMT: 6622100,
    flag: "🌐",
    primaryPorts: ["Various West African & ASEAN Harbors"],
    keyProducts: "Swarna, Sona Masoori, PR11/14, 100% Broken",
  },
];
