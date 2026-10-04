import type { Lang, Tier } from '@/lib/types';

type Customer = {
  phone: string;
} & Record<Lang, { name: string; address: string }>;

export const CUSTOMERS: Record<Tier, Customer> = {
  green: {
    phone: '(+66) 81 234 5678',
    th: {
      name: 'สมชาย ใจดี',
      address: '88/9 ซอยสุขุมวิท 55 แขวงคลองตันเหนือ เขตวัฒนา กรุงเทพฯ 10110',
    },
    en: {
      name: 'Somchai Jaidee',
      address: '88/9 Soi Sukhumvit 55, Khlong Tan Nuea, Watthana, Bangkok 10110',
    },
  },
  yellow: {
    phone: '(+66) 92 555 0142',
    th: {
      name: 'วิภาดา ศรีสุข',
      address: '12/4 ถนนพหลโยธิน แขวงสามเสนใน เขตพญาไท กรุงเทพฯ 10400',
    },
    en: {
      name: 'Wipada Srisuk',
      address: '12/4 Phahonyothin Rd, Samsen Nai, Phaya Thai, Bangkok 10400',
    },
  },
  red: {
    phone: '(+66) 63 555 0199',
    th: {
      name: 'ธนพล มั่นคง',
      address: '45 หมู่ 3 ตำบลบางพูด อำเภอปากเกร็ด นนทบุรี 11120',
    },
    en: {
      name: 'Thanapon Mankong',
      address: '45 Moo 3, Bang Phut, Pak Kret, Nonthaburi 11120',
    },
  },
};
