type TFormatNumber = "id-ID" | "en-US";
type TCurrency = "IDR" | "USD";

export type TParamFormatCurrency = {
  format?: TFormatNumber;
  currency?: TCurrency;
  maximumFractionDigits?: number;
};
