import vi from './vi';
import en from './en';
import ko from './ko';
import ru from './ru';
import type { Dict } from './vi';

export const locales = ['vi', 'en', 'ko', 'ru'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'vi';

const dicts: Record<Locale, Dict> = { vi, en, ko, ru };

export const getDict = (locale: Locale) => dicts[locale];

export const localePath = (locale: Locale) => (locale === defaultLocale ? '/' : `/${locale}/`);

const intlLocale: Record<Locale, string> = { vi: 'vi-VN', en: 'en-US', ko: 'ko-KR', ru: 'ru-RU' };

export const formatPrice = (locale: Locale, vnd: number) =>
  new Intl.NumberFormat(intlLocale[locale], {
    style: 'currency',
    currency: 'VND',
    maximumFractionDigits: 0,
  }).format(vnd);

// Khoảng cách theo brochure "Vị trí thuận tiện"
export const places = [
  { key: 'beach', meters: 300 },
  { key: 'nightMarket', meters: 600 },
  { key: 'tower', meters: 600 },
  { key: 'cathedral', meters: 2000 },
  { key: 'station', meters: 2200 },
  { key: 'damMarket', meters: 2300 },
  { key: 'oceanography', meters: 3800 },
  { key: 'cableCar', meters: 4200 },
  { key: 'airport', meters: 35000 },
] as const;

export const formatDistance = (locale: Locale, meters: number) => {
  const nf = new Intl.NumberFormat(intlLocale[locale], { maximumFractionDigits: 1 });
  const km = locale === 'ru' ? 'км' : 'km';
  const m = locale === 'ru' ? 'м' : 'm';
  return meters < 1000 ? `${nf.format(meters)} ${m}` : `${nf.format(meters / 1000)} ${km}`;
};
