export interface KaratResult {
  purity: number;
  millesimal: number;
  percentage: number;
}

export function calculateKaratProperties(karats: number): KaratResult {
  // 24K is pure gold (100%)
  const purity = karats / 24;
  const millesimal = purity * 1000;
  const percentage = purity * 100;

  return {
    purity,
    millesimal,
    percentage
  };
}

export function formatPercentage(value: number): string {
  return `${value.toFixed(2)}%`;
}

export function formatMillesimal(value: number): string {
  return value.toFixed(1);
}

export const COMMON_KARATS = [
  { karat: 24, name: "Pure Gold" },
  { karat: 22, name: "916 Gold" },
  { karat: 18, name: "750 Gold" },
  { karat: 14, name: "585 Gold" },
  { karat: 10, name: "417 Gold" },
  { karat: 9, name: "375 Gold" }
];