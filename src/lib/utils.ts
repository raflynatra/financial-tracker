import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { TParamFormatCurrency } from "./types";

export const capitalize = (word = "", eachWord = false): string => {
  word = word.toLocaleLowerCase();

  let wordArr = word.split(" ");

  if (!eachWord && wordArr.length > 1) {
    const firstLetter: string = word[0].toUpperCase();
    const rest: string = word.slice(1);
    return `${firstLetter}${rest}`;
  }

  for (let i = 0; i < wordArr.length; i++) {
    wordArr[i] = `${wordArr[i][0].toUpperCase()}${wordArr[i].slice(1)}`;
  }

  return wordArr.join(" ");
};

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};

export const formatCurrency = (
  value: number,
  config?: TParamFormatCurrency,
) => {
  try {
    return new Intl.NumberFormat(config?.format ?? "id-ID", {
      ...(config?.currency && {
        style: "currency",
        currency: config.currency,
        maximumFractionDigits: config.maximumFractionDigits,
      }),
    }).format(value);
  } catch (error) {
    console.log(error);
    return "0";
  }
};
