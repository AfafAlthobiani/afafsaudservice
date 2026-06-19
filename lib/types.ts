import React from 'react';

export interface ServiceItem {
  id: string;
  num: string;
  name: string;
  desc: string;
  duration: string;
  price: number;
  oldPrice?: number;
  featured: boolean;
  includes: string[];
  suitable: string[];
  badge?: string;
  waText: string;
  icon: string;
  stripeClass?: string;
  iconClass?: string;
  badgeClass?: string;
  labelClass?: string;
  listClass?: string;
  priceClass?: string;
  category: 'store' | 'landing_web' | 'brand_design';
}

export interface PortfolioItem {
  id: string;
  cat: 'store' | 'brand' | 'posts' | 'banners' | 'themes' | 'websites';
  type: string;
  name: string;
  tags: string[];
  mockType: 'store' | 'brand' | 'posts' | 'banners' | 'themes' | 'websites';
  wide?: boolean;
  customMockUp?: React.ReactNode;
  buyUrl?: string;
  status?: string;
}

export interface FaqItem {
  q: string;
  a: string;
}
