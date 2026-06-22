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
  cat: 'store' | 'brand' | 'posts' | 'banners' | 'themes' | 'websites' | 'landing';
  type: string;
  name: string;
  tags: string[];
  mockType: 'store' | 'brand' | 'posts' | 'banners' | 'themes' | 'websites' | 'landing';
  wide?: boolean;
  customMockUp?: React.ReactNode;
  buyUrl?: string;
  previewUrl?: string;
  status?: string;
}

export interface FaqItem {
  q: string;
  a: string;
}

export interface CouponItem {
  id: string;
  coupon: string;
  product: string;
  productType: string;
  exceptions?: string;
  subMarketer?: string;
  status: 'active' | 'inactive';
  link: string;
}
