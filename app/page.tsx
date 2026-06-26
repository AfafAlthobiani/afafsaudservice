'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import NextImage from 'next/image';

import { 
  ShoppingBag, 
  TrendingUp, 
  Palette, 
  Search, 
  Sliders, 
  Image as ImageIcon, 
  ChevronDown,
  ChevronUp,
  MapPin,
  Rocket,
  Star,
  Lightbulb,
  Handshake,
  MessageSquare,
  Store,
  Briefcase,
  BookOpen,
  MessageCircle,
  PenTool,
  Activity,
  Code,
  Figma,
  Link,
  Sparkles,
  Globe,
  Sun,
  Moon,
  Share2,
  Check,
  Brain,
  FileText,
  RefreshCw,
  CheckCircle,
  ExternalLink,
  Percent,
  Copy,
  Tag,
  Send
} from 'lucide-react';

// Import Types
import { ServiceItem, PortfolioItem, CouponItem } from '@/lib/types';

// Import Static Datasets
import { services, portfolioItems, faqItems, faqBrandItems, coupons } from '@/lib/data';

// Import Custom Modular Components
import { LazyPortMock } from '@/components/lazy-port-mock';
import { AnimatedCounter } from '@/components/animated-counter';

// Tag styling helper for dynamic platform and category colors
const getTagStyles = (tag: string, theme: 'dark' | 'light') => {
  const normTag = tag.trim();
  const isDark = theme === 'dark';
  
  if (normTag === 'سلة' || normTag === 'سلة') {
    return {
      color: isDark ? '#10B981' : '#059669', // Green
      backgroundColor: isDark ? 'rgba(16, 185, 129, 0.08)' : 'rgba(5, 150, 105, 0.06)',
      borderColor: isDark ? 'rgba(16, 185, 129, 0.22)' : 'rgba(5, 150, 105, 0.18)',
    };
  }
  if (normTag === 'زد') {
    return {
      color: isDark ? '#F59E0B' : '#D97706', // Gold/Amber
      backgroundColor: isDark ? 'rgba(245, 158, 11, 0.08)' : 'rgba(217, 119, 6, 0.06)',
      borderColor: isDark ? 'rgba(245, 158, 11, 0.22)' : 'rgba(217, 119, 6, 0.18)',
    };
  }
  if (normTag === 'انستغرام' || normTag === 'انستقرام') {
    return {
      color: isDark ? '#EC4899' : '#DB2777', // Pink/Instagram
      backgroundColor: isDark ? 'rgba(236, 72, 153, 0.08)' : 'rgba(219, 39, 119, 0.06)',
      borderColor: isDark ? 'rgba(236, 72, 153, 0.22)' : 'rgba(219, 39, 119, 0.18)',
    };
  }
  if (normTag === 'سناب شات') {
    return {
      color: isDark ? '#EAB308' : '#CA8A04', // Yellow
      backgroundColor: isDark ? 'rgba(234, 179, 8, 0.08)' : 'rgba(202, 138, 4, 0.06)',
      borderColor: isDark ? 'rgba(234, 179, 8, 0.22)' : 'rgba(202, 138, 4, 0.18)',
    };
  }
  if (normTag === 'فوتوشوب' || normTag === 'CSS مخصص' || normTag.includes('CSS')) {
    return {
      color: isDark ? '#3B82F6' : '#2563EB', // Blue
      backgroundColor: isDark ? 'rgba(59, 130, 246, 0.08)' : 'rgba(37, 99, 235, 0.06)',
      borderColor: isDark ? 'rgba(59, 130, 246, 0.22)' : 'rgba(37, 99, 235, 0.18)',
    };
  }
  if (normTag.includes('قريباً')) {
    return {
      color: isDark ? '#C97FB5' : '#B25D9B', // Orchid/Violet
      backgroundColor: isDark ? 'rgba(201, 127, 181, 0.08)' : 'rgba(178, 93, 155, 0.06)',
      borderColor: isDark ? 'rgba(201, 127, 181, 0.22)' : 'rgba(178, 93, 155, 0.18)',
    };
  }
  if (normTag === 'صفحة رئيسية' || normTag === 'صفحة منتج' || normTag === 'واجهة المتجر' || normTag === 'بنر رئيسي' || normTag === 'ربط دفع') {
    return {
      color: isDark ? '#14B8A6' : '#0D9488', // Teal
      backgroundColor: isDark ? 'rgba(20, 184, 166, 0.08)' : 'rgba(13, 148, 136, 0.06)',
      borderColor: isDark ? 'rgba(20, 184, 166, 0.22)' : 'rgba(13, 148, 136, 0.18)',
    };
  }
  if (normTag === 'شعار' || normTag === 'Brand Guide' || normTag === 'ألوان' || normTag === 'قوالب' || normTag === 'محتوى وبصريات') {
    return {
      color: isDark ? '#A78BFA' : '#7C3AED', // Light Purple/Lavender
      backgroundColor: isDark ? 'rgba(167, 139, 250, 0.08)' : 'rgba(124, 58, 237, 0.06)',
      borderColor: isDark ? 'rgba(167, 139, 250, 0.22)' : 'rgba(124, 58, 237, 0.18)',
    };
  }
  return {
    color: isDark ? '#B4AECE' : '#5E5478', // Default muted style
    backgroundColor: isDark ? 'rgba(126, 104, 171, 0.06)' : 'rgba(126, 104, 171, 0.04)',
    borderColor: isDark ? 'rgba(126, 104, 171, 0.15)' : 'rgba(126, 104, 171, 0.12)',
  };
};

const renderFreelanceDocument = (theme: 'dark' | 'light') => {
  return (
    <div className={`mt-4 flex items-center gap-2.5 px-3 py-1.5 rounded-xl border transition-all duration-300 max-w-[245px] w-full ${
      theme === 'dark'
        ? 'bg-[#13111A]/95 border-[rgba(126,104,171,0.15)]'
        : 'bg-white border-[rgba(126,104,171,0.12)] shadow-sm'
    }`} dir="rtl">
      <div className="relative h-6 w-16 shrink-0 flex items-center justify-center overflow-hidden rounded bg-white p-0.5 border border-gray-100">
        <NextImage
          src="https://saudipedia.com/var/site/storage/images/6/6/6/2/4252666-1-ara-SA/4178c68ab4ae-86595.jpg"
          alt="شعار العمل الحر"
          width={64}
          height={20}
          className="object-contain"
          referrerPolicy="no-referrer"
        />
      </div>
      <div className="flex flex-col text-right leading-none gap-0.5">
        <span className="text-[7.5px] text-[#7A718E] font-medium leading-none">وثيقة العمل الحر</span>
        <span className="text-[9.5px] font-bold text-[#C97FB5] font-mono tracking-wide leading-none">FL-302277938</span>
      </div>
      <div className="mr-auto flex items-center gap-0.5 px-1.5 py-0.5 rounded-full text-[7px] font-bold bg-emerald-500/10 text-emerald-500 border border-emerald-500/15">
        <span className="w-1 h-1 rounded-full bg-emerald-500 animate-pulse" />
        <span>نشط</span>
      </div>
    </div>
  );
};

export default function HomePage() {
  // Theme state: 'dark' | 'light'
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'dark' | 'light' | null;
    if (savedTheme && savedTheme !== 'dark') {
      setTimeout(() => {
        setTheme(savedTheme);
      }, 0);
    }
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('light', theme === 'light');
  }, [theme]);

  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
    localStorage.setItem('theme', nextTheme);
  };

  // Scroll to top button states & logic
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window !== 'undefined') {
        setShowScrollTop(window.scrollY > 350);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    if (typeof window !== 'undefined') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  };

  // Share dropdown states & logic
  const [showShareMenu, setShowShareMenu] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);
  const shareContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (shareContainerRef.current && !shareContainerRef.current.contains(event.target as Node)) {
        setShowShareMenu(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleCopyLink = () => {
    const shareUrl = typeof window !== 'undefined' ? window.location.href : 'https://ownerafaf.github.io';
    navigator.clipboard.writeText(shareUrl).then(() => {
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2000);
    }).catch(err => console.error('Failed to copy text: ', err));
  };

  const [copiedCouponId, setCopiedCouponId] = useState<string | null>(null);

  const handleCopyCoupon = (id: string, code: string) => {
    navigator.clipboard.writeText(code).then(() => {
      setCopiedCouponId(id);
      setTimeout(() => setCopiedCouponId(null), 2000);
    }).catch(err => console.error('Failed to copy coupon: ', err));
  };

  const [sharedCouponId, setSharedCouponId] = useState<string | null>(null);
  const [isSharing, setIsSharing] = useState(false);

  const handleShareCoupon = async (id: string, coupon: string, product: string, link: string) => {
    if (isSharing) return;
    setIsSharing(true);

    const text = `استخدم كود الخصم: ${coupon} لـ ${product}\nالرابط من هنا: ${link}`;

    const fallbackCopyToClipboard = async () => {
      try {
        await navigator.clipboard.writeText(text);
        setSharedCouponId(id);
        setTimeout(() => setSharedCouponId(null), 2500);
      } catch (clipboardErr) {
        console.warn('Failed to copy to clipboard (fallback):', clipboardErr);
      }
    };

    if (navigator.share) {
      try {
        await navigator.share({
          title: `كوبون لـ ${product}`,
          text: text,
          url: link
        });
        setSharedCouponId(id);
        setTimeout(() => setSharedCouponId(null), 2500);
      } catch (err: any) {
        // If the user cancelled the share sheet, the browser throws an AbortError.
        // We shouldn't show a fallback or log as a severe error in this case.
        if (err && (err.name === 'AbortError' || err.message?.toLowerCase().includes('cancel') || err.message?.toLowerCase().includes('abort'))) {
          console.log('Share canceled by user');
        } else {
          console.error('Error sharing:', err);
          // Only attempt fallback if document is focused to avoid clipboard focus permission errors
          if (typeof document !== 'undefined' && document.hasFocus()) {
            await fallbackCopyToClipboard();
          }
        }
      } finally {
        setIsSharing(false);
      }
    } else {
      await fallbackCopyToClipboard();
      setIsSharing(false);
    }
  };

  // Page Switching state: 'services' | 'portfolio' | 'coupons' | 'faq' | 'social'
  const [activeTab, setActiveTab] = useState<'services' | 'portfolio' | 'coupons' | 'faq' | 'social'>('services');

  // Portfolio local filter state
  const [portfolioFilter, setPortfolioFilter] = useState<'all' | 'store' | 'brand' | 'themes' | 'websites' | 'landing'>('all');

  // Expanded FAQ items tracker (index-based)
  const [expandedFaqs, setExpandedFaqs] = useState<number[]>([]);

  // Services category filter state: 'all' | 'store' | 'landing_web' | 'brand_design'
  const [servicesFilter, setServicesFilter] = useState<string>('all');

  // Coupon category filter state
  const [couponFilter, setCouponFilter] = useState<'all' | 'theme' | 'app' | 'salla'>('all');

  // Utility to switch active tab with window reset scroll
  const handleTabChange = (tab: typeof activeTab) => {
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleFaqItem = (index: number) => {
    if (expandedFaqs.includes(index)) {
      setExpandedFaqs(expandedFaqs.filter(i => i !== index));
    } else {
      setExpandedFaqs([...expandedFaqs, index]);
    }
  };

  // Helper render WhatsApp SVG icon in precise path
  const renderWaIcon = (sizeClass = 'wa-icon') => (
    <svg className={sizeClass} viewBox="0 0 24 24">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );

  const renderServiceIcon = (id: string, className = "w-6 h-6") => {
    switch (id) {
      case 'svc-1':
        return <ShoppingBag className={className} />;
      case 'svc-3':
        return <Palette className={className} />;
      case 'svc-4':
        return <Search className={className} />;
      case 'svc-5':
        return <Sliders className={className} />;
      case 'svc-6':
        return <ImageIcon className={className} />;
      case 'svc-7':
        return <Rocket className={className} />;
      case 'svc-8':
        return <Briefcase className={className} />;
      default:
        return <ShoppingBag className={className} />;
    }
  };



  return (
    <div className="relative min-h-screen pb-16 md:pb-8">
      <div className="glow-bg" />

      {/* Global Desktop & Mobile Sticky Header */}
      <header className={`sticky top-0 z-[100] w-full backdrop-blur-md border-b transition-colors duration-300 ${
        theme === 'dark' 
          ? 'bg-[#0C0B10]/80 border-[rgba(126,104,171,0.12)]' 
          : 'bg-[#FAF9FC]/85 border-[rgba(126,104,171,0.15)] shadow-sm'
      }`}>
        <div className="max-w-[1240px] mx-auto px-4 md:px-6 py-3.5 flex items-center justify-between">
          
          {/* Logo Brand Title */}
          <div 
            className="flex items-center gap-2 cursor-pointer group" 
            onClick={() => handleTabChange('services')}
          >
            <div className="w-8 h-8 rounded-full overflow-hidden border border-[#C97FB5]/50 shadow-sm shrink-0 relative">
              <NextImage
                src="https://i.imgur.com/sD9iVJr.jpeg"
                alt="عفاف سعود"
                width={32}
                height={32}
                className="object-cover rounded-full"
                referrerPolicy="no-referrer"
              />
            </div>
            <span className={`font-display text-[19px] md:text-[21px] font-extrabold bg-gradient-to-r bg-clip-text text-transparent transition-all ${
              theme === 'dark' 
                ? 'from-[#EDE9F5] via-[#A990D4] to-[#C97FB5]' 
                : 'from-[#241E30] via-[#5A4880] to-[#B3589B]'
            }`}>
              عفاف سعود
            </span>
            <span className="text-[#C97FB5] font-bold text-sm hidden sm:inline-block">✦</span>
          </div>

          {/* Desktop Shared Menu Links */}
          <nav className={`hidden md:flex items-center gap-1.5 border rounded-full p-1 transition-colors duration-300 ${
            theme === 'dark' 
              ? 'bg-[#13111A]/60 border-[rgba(126,104,171,0.15)]' 
              : 'bg-[#FFFFFF]/80 border-[rgba(126,104,171,0.18)] shadow-sm'
          }`} dir="rtl">
            <button
              onClick={() => handleTabChange('services')}
              className={`px-4.5 py-2 text-[12.5px] font-bold rounded-full transition-all duration-300 ${
                activeTab === 'services' 
                  ? 'bg-gradient-to-r from-[#5A4880] to-[#7e68ab] text-white shadow-sm' 
                  : (theme === 'dark' ? 'text-[#7A718E] hover:text-[#EDE9F5]' : 'text-[#696178] hover:text-[#241E30]')
              }`}
            >
              خدماتي
            </button>
            <button
              onClick={() => handleTabChange('portfolio')}
              className={`px-4.5 py-2 text-[12.5px] font-bold rounded-full transition-all duration-300 ${
                activeTab === 'portfolio' 
                  ? 'bg-gradient-to-r from-[#5A4880] to-[#7e68ab] text-white shadow-sm' 
                  : (theme === 'dark' ? 'text-[#7A718E] hover:text-[#EDE9F5]' : 'text-[#696178] hover:text-[#241E30]')
              }`}
            >
              أعمالي
            </button>
            <button
              onClick={() => handleTabChange('coupons')}
              className={`px-4.5 py-2 text-[12.5px] font-bold rounded-full transition-all duration-300 ${
                activeTab === 'coupons' 
                  ? 'bg-gradient-to-r from-[#5A4880] to-[#7e68ab] text-white shadow-sm' 
                  : (theme === 'dark' ? 'text-[#7A718E] hover:text-[#EDE9F5]' : 'text-[#696178] hover:text-[#241E30]')
              }`}
            >
              أكواد الخصم
            </button>
            <button
              onClick={() => handleTabChange('faq')}
              className={`px-4.5 py-2 text-[12.5px] font-bold rounded-full transition-all duration-300 ${
                activeTab === 'faq' 
                  ? 'bg-gradient-to-r from-[#5A4880] to-[#7e68ab] text-white shadow-sm' 
                  : (theme === 'dark' ? 'text-[#7A718E] hover:text-[#EDE9F5]' : 'text-[#696178] hover:text-[#241E30]')
              }`}
            >
              الأسئلة الشائعة
            </button>
            <button
              onClick={() => handleTabChange('social')}
              className={`px-4.5 py-2 text-[12.5px] font-bold rounded-full transition-all duration-300 ${
                activeTab === 'social' 
                  ? 'bg-gradient-to-r from-[#5A4880] to-[#7e68ab] text-white shadow-sm' 
                  : (theme === 'dark' ? 'text-[#7A718E] hover:text-[#EDE9F5]' : 'text-[#696178] hover:text-[#241E30]')
              }`}
            >
              تواصل معي
            </button>
          </nav>

          {/* Call-to-action left badge */}
          <div className="flex items-center gap-2">
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="w-9 h-9 rounded-full flex items-center justify-center bg-[var(--bg2)] border border-[var(--border)] text-[var(--pur-light)] hover:bg-[var(--bg3)] hover:text-[var(--accent)] transition-all cursor-pointer shadow-sm ml-1 shrink-0"
              title={theme === 'dark' ? 'تفعيل الوضع الفاتح' : 'تفعيل الوضع الداكن'}
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? (
                <Sun className="w-4.5 h-4.5 text-amber-400" />
              ) : (
                <Moon className="w-4.5 h-4.5 text-indigo-500" />
              )}
            </button>

            {/* Share Dropdown Button */}
            <div className="relative shrink-0 z-[500]" ref={shareContainerRef}>
              <button
                onClick={() => setShowShareMenu(!showShareMenu)}
                className={`w-9 h-9 rounded-full flex items-center justify-center bg-[var(--bg2)] border border-[var(--border)] transition-all cursor-pointer shadow-sm ml-1 shrink-0 ${
                  showShareMenu
                    ? 'text-[var(--accent)] bg-[var(--bg3)] border-[rgba(201,127,181,0.4)] scale-105'
                    : 'text-[var(--pur-light)] hover:bg-[var(--bg3)] hover:text-[var(--accent)]'
                }`}
                title="مشاركة الموقع"
                aria-label="Share Website"
                id="btn-share-website"
              >
                <Share2 className="w-4.5 h-4.5" />
              </button>

              <AnimatePresence>
                {showShareMenu && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.12 }}
                    className={`absolute left-0 mt-2 w-56 rounded-xl border p-2.5 z-[500] shadow-xl ${
                      theme === 'dark'
                        ? 'bg-[#121019] border-[rgba(126,104,171,0.25)] text-[#EDE9F5]'
                        : 'bg-[#FFFFFF] border-[rgba(126,104,171,0.18)] text-[#241E30]'
                    }`}
                    dir="rtl"
                  >
                    <div className="px-2 py-1.5 text-[11px] font-bold text-[#A990D4] border-b border-[rgba(126,104,171,0.1)] mb-1">
                      مشاركة الموقع الاحترافي
                    </div>
                    
                    <button
                      onClick={handleCopyLink}
                      className={`w-full flex items-center justify-between text-right px-2 py-2 rounded-lg text-xs font-bold transition-colors cursor-pointer ${
                        theme === 'dark' ? 'hover:bg-[rgba(126,104,171,0.12)] text-[#EDE9F5]' : 'hover:bg-[rgba(126,104,171,0.06)] text-[#241E30]'
                      }`}
                    >
                      <span className="flex items-center gap-2">
                        <Link className="w-3.5 h-3.5 text-[#C97FB5]" />
                        <span>نسخ رابط الموقع</span>
                      </span>
                      {copiedLink ? (
                        <span className="text-emerald-500 text-[10px] bg-emerald-500/10 px-1.5 py-0.5 rounded flex items-center gap-1">
                          <Check className="w-2.5 h-2.5" /> تم النسخ
                        </span>
                      ) : (
                        <span className="text-[10px] opacity-40">نقرة واحدة</span>
                      )}
                    </button>

                    <a
                      href={`https://api.whatsapp.com/send?text=${encodeURIComponent(
                        'مرحباً! أنصحك بزيارة موقع عفاف سعود المميز لحلول الأعمال، تصميم المتاجر والمواقع، وإدارة الحملات وتصميم الهويات البصرية للشركات والمتاجر ✦ ' + 
                        (typeof window !== 'undefined' ? window.location.href : 'https://ownerafaf.github.io')
                      )}`}
                      target="_blank"
                      rel="noreferrer"
                      className={`w-full flex items-center gap-2 text-right px-2 py-2 rounded-lg text-xs font-bold transition-colors no-underline cursor-pointer ${
                        theme === 'dark' ? 'hover:bg-[rgba(126,104,171,0.12)] text-[#EDE9F5]' : 'hover:bg-[rgba(126,104,171,0.06)] text-[#241E30]'
                      }`}
                      onClick={() => setShowShareMenu(false)}
                    >
                      <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
                      <span>مشاركة عبر الوتساب</span>
                    </a>

                    <a
                      href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
                        'موقع عفاف سعود - للخدمات المتكاملة لبناء الهوية، تصميم المتاجر والمواقع، وإدارة الحملات وتصميم الهويات البصرية للشركات والمتاجر ✦'
                      )}&url=${encodeURIComponent(
                        typeof window !== 'undefined' ? window.location.href : 'https://ownerafaf.github.io'
                      )}`}
                      target="_blank"
                      rel="noreferrer"
                      className={`w-full flex items-center gap-2 text-right px-2 py-2 rounded-lg text-xs font-bold transition-colors no-underline cursor-pointer ${
                        theme === 'dark' ? 'hover:bg-[rgba(126,104,171,0.12)] text-[#EDE9F5]' : 'hover:bg-[rgba(126,104,171,0.06)] text-[#241E30]'
                      }`}
                      onClick={() => setShowShareMenu(false)}
                    >
                      <span className="text-sky-400 font-extrabold text-[12px] leading-none shrink-0 w-3.5 h-3.5 flex items-center justify-center">𝕏</span>
                      <span>نشر على منصة 𝕏</span>
                    </a>

                    <a
                      href={`https://t.me/share/url?url=${encodeURIComponent(
                        typeof window !== 'undefined' ? window.location.href : 'https://ownerafaf.github.io'
                      )}&text=${encodeURIComponent(
                        'شاهد الخدمات الفريدة لتصميم المواقع وتجربة المستخدم من عفاف سعود ✦'
                      )}`}
                      target="_blank"
                      rel="noreferrer"
                      className={`w-full flex items-center gap-2 text-right px-2 py-2 rounded-lg text-xs font-bold transition-colors no-underline cursor-pointer ${
                        theme === 'dark' ? 'hover:bg-[rgba(126,104,171,0.12)] text-[#EDE9F5]' : 'hover:bg-[rgba(126,104,171,0.06)] text-[#241E30]'
                      }`}
                      onClick={() => setShowShareMenu(false)}
                    >
                      <Globe className="w-3.5 h-3.5 text-sky-500" />
                      <span>إرسال عبر تليجرام</span>
                    </a>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div className="hidden lg:flex items-center gap-1.5 text-[11px] font-medium text-[var(--pur-pale)] bg-[var(--pur-dim)] border border-[var(--border)] px-3.5 py-1.5 rounded-full">
              <div className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
              <span>متاحة للمشاريع</span>
            </div>
            
            <a
              href="https://wa.me/966592843956?text=هلا عفاف! أبي أتعاون معك 💼"
              target="_blank"
              rel="noreferrer"
              className="wa-btn !py-2 !px-3.5 !rounded-full !text-[12px] !font-bold flex items-center gap-1.5 shrink-0"
            >
              {renderWaIcon('w-4 h-4 shrink-0')}
              <span>استشارة مجانية</span>
            </a>
          </div>

        </div>
      </header>

      {/* Main Content Area */}
      <AnimatePresence mode="wait">
        <motion.main
          key={activeTab}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
          className="page w-full"
        >
          {/*********************************************************
           * TAB 1: SERVICES (services)
           *********************************************************/}
          {activeTab === 'services' && (
            <div className="wrap">
              <div className="hero">
                <div className="hero-tag">عفاف سعود</div>
                <h1 className="hero-title">
                  براندك
                  <br />
                  <span>يبدأ من هنا ✦</span>
                </h1>
                <p className="hero-sub flex items-center justify-center gap-1.5 flex-wrap">
                  <span>متاجر إلكترونية، هويات بصرية، وبناء حلول نمو رقمية متكاملة</span>
                  <Rocket className="w-4 h-4 text-[#C97FB5]" />
                </p>
                
                <div className="hero-stats">
                  <div className="stat">
                    <span className="stat-num">
                      <AnimatedCounter value="7" />
                    </span>
                    <span className="stat-label">خدمات</span>
                  </div>
                  <div className="stat">
                    <span className="stat-num">سلة</span>
                    <span className="stat-label">زد · Shopify</span>
                  </div>
                  <div className="stat">
                    <a href="https://s.salla.sa/experts/service-provider/1744104089" target="_blank" rel="noreferrer" className="no-underline flex flex-col items-center justify-center">
                      <span className="stat-num !text-[#00955d] flex items-center justify-center gap-0.5">
                        <AnimatedCounter value="5" />
                        <Star className="w-4 h-4 fill-[#00955d] text-[#00955d]" />
                      </span>
                      <span className="stat-label flex items-center gap-1">
                        <span>مزود خدمات سلة</span>
                        <span className="text-[10px]">↗</span>
                      </span>
                    </a>
                  </div>
                  <div className="stat">
                    <span className="stat-num">
                      <AnimatedCounter value="50+" />
                    </span>
                    <span className="stat-label">مشروع مكتمل</span>
                  </div>
                </div>
              </div>

              {/* وثيقة العمل الحر المعتمدة */}
              <div className="flex justify-center mb-10 -mt-2 px-4" dir="rtl">
                <a 
                  href="https://freelance.sa" 
                  target="_blank" 
                  rel="noreferrer"
                  className={`flex items-center gap-2.5 px-4.5 py-2.5 rounded-2xl border transition-all duration-300 ${
                    theme === 'dark'
                      ? 'bg-[#13111A]/80 border-[rgba(126,104,171,0.2)] text-[#EDE9F5] hover:border-[#C97FB5]/40 hover:shadow-[0_0_15px_rgba(201,127,181,0.15)]'
                      : 'bg-white border-[rgba(126,104,171,0.15)] text-[#241E30] hover:border-[#C97FB5]/50 hover:shadow-[0_4px_12px_rgba(0,0,0,0.05)] shadow-sm'
                  }`}
                  style={{ textDecoration: 'none' }}
                >
                  <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-[#A990D4]/20 to-[#C97FB5]/20 flex items-center justify-center shrink-0">
                    <Briefcase className="w-4.5 h-4.5 text-[#C97FB5]" />
                  </div>
                  <div className="flex flex-col text-right">
                    <span className="text-[10px] text-[var(--muted)] font-medium leading-none mb-1">وثيقة العمل الحر المعتمدة</span>
                    <span className="text-xs font-bold font-mono tracking-wide text-[var(--accent)]">FL-302277938</span>
                  </div>
                  <div className="mr-3 px-2 py-0.5 rounded-full text-[9.5px] font-bold bg-[#10B981]/10 text-[#10B981] border border-[#10B981]/20">
                    نشط ومعتمد
                  </div>
                </a>
              </div>

              <div className="section-header">
                <div className="section-dot" />
                <div className="section-title">خدماتنا</div>
                <div className="section-line" />
              </div>

              {/* Service Categories Filter Tabs */}
              <div className="filter-tabs" id="services-categories-container" dir="rtl">
                <button
                  className={`tab ${servicesFilter === 'all' ? 'active' : ''}`}
                  onClick={() => setServicesFilter('all')}
                  id="tab-svc-all"
                >
                  الكل
                </button>
                <button
                  className={`tab ${servicesFilter === 'store' ? 'active' : ''}`}
                  onClick={() => setServicesFilter('store')}
                  id="tab-svc-store"
                >
                  متاجر إلكترونية
                </button>
                <button
                  className={`tab ${servicesFilter === 'landing_web' ? 'active' : ''}`}
                  onClick={() => setServicesFilter('landing_web')}
                  id="tab-svc-landing-web"
                >
                  مواقع تعريفيّة وهبوط
                </button>
                <button
                  className={`tab ${servicesFilter === 'brand_design' ? 'active' : ''}`}
                  onClick={() => setServicesFilter('brand_design')}
                  id="tab-svc-brand-design"
                >
                  هويات وتصاميم
                </button>
              </div>

              <div className="scroll-hint">اسحب للاستكشاف</div>
              
              <div className="services-scroll-wrap">
                {services
                  .filter((svc) => servicesFilter === 'all' || svc.category === servicesFilter)
                  .map((svc: ServiceItem) => (
                    <div
                      key={svc.id}
                      className={`svc-detail-card transition-all duration-300 ${svc.featured ? 'featured' : ''}`}
                      id={`svc-card-${svc.id}`}
                    >
                      <div className={`svc-stripe ${svc.stripeClass || (svc.featured ? 'accent-stripe' : '')}`} />
                      <div className="svc-detail-header">
                        <div className={`svc-detail-icon-wrap ${svc.iconClass || (svc.featured ? 'accent-icon' : '')} flex items-center justify-center text-[#A990D4]`}>
                          {renderServiceIcon(svc.id, "w-5 h-5")}
                        </div>
                        <div className={`svc-detail-badge ${svc.badgeClass || (svc.featured ? 'hot' : '')}`}>
                          {svc.duration}
                        </div>
                      </div>

                      <div className="svc-detail-body">
                        <span className="svc-detail-num">{svc.num}</span>
                        <div className="svc-detail-name" dangerouslySetInnerHTML={{ __html: svc.name.replace('بناء متجر', 'بناء متجر<br>').replace('تحسين معدل', 'تحسين معدل<br>').replace('باقة الهوية', 'باقة الهوية<br>').replace('وصف منتجات', 'وصف منتجات<br>').replace('إدارة متجرك', 'إدارة متجرك<br>').replace('تصميم 15', 'تصميم 15<br>').replace('تصميم موقع تعريفي', 'تصميم موقع<br>تعريفي') }} />
                        <p className="svc-detail-desc">{svc.desc}</p>
                        
                        <div className={`includes-label ${svc.labelClass || ''}`}>ماذا تشمل الخدمة</div>
                        <ul className={`includes-list ${svc.listClass || (svc.featured ? 'accent-list' : '')}`}>
                          {svc.includes.map((inc, index) => (
                            <li key={index}>{inc}</li>
                          ))}
                        </ul>

                        <div className="suitable-label">مناسب لـ</div>
                        <div className="suitable-tags">
                          {svc.suitable.map((tag, index) => (
                            <span key={index} className="suitable-tag">{tag}</span>
                          ))}
                        </div>
                      </div>

                      <div className="svc-detail-footer flex items-center justify-between mt-4">
                        <div className="text-[12px] font-medium text-[var(--muted)] flex flex-col">
                          <span className="text-[10px] text-[var(--muted)] opacity-85 font-semibold leading-normal">السعر والاتفاق الفني</span>
                          <span className="text-[var(--pur-light)] font-bold text-[13px] leading-normal">حسب نطاق وإبداع المتطلبات</span>
                        </div>
                        <a
                          href={`https://wa.me/966592843956?text=${encodeURIComponent(svc.waText)}`}
                          className="wa-btn whitespace-nowrap"
                          target="_blank"
                          rel="noreferrer"
                          id={`btn-order-svc-${svc.id}`}
                          onClick={(e) => e.stopPropagation()}
                        >
                          {renderWaIcon()}
                          اطلب الآن
                        </a>
                      </div>
                    </div>
                  ))}
              </div>

              {/* ── Process: آلية وخطوات العمل ── */}
              <div id="work-process-steps-section" className="mt-14 mb-8" dir="rtl">
                <div className="section-header">
                  <div className="section-dot" />
                  <div className="section-title">خطوات العمل المتبعة</div>
                  <div className="section-line" />
                </div>

                <div className="text-center mb-8 px-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[rgba(126,104,171,0.08)] border border-[rgba(126,104,171,0.12)] text-[#A990D4] mb-3">
                    <Sparkles className="w-3.5 h-3.5 text-[#C97FB5]" />
                    من الفكرة الملهمة إلى التدشين والنمو
                  </span>
                  <p className="text-[12px] text-[var(--muted)] max-w-lg mx-auto leading-relaxed">
                    منهجية عمل واضحة ومدروسة تهدف إلى صياغة هوية بصرية مميزة وبناء متجر إلكتروني متكامل يسهم في تحسين تجربة زوارك ومساندة نمو مشروعك.
                  </p>
                </div>

                <div id="work-process-steps-box" className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
                  {/* Decorative timeline background connector on desktop */}
                  <div className="hidden md:block absolute top-[44px] left-[10%] right-[10%] h-[1px] bg-gradient-to-r from-transparent via-[rgba(126,104,171,0.15)] to-transparent z-0" />

                  {[
                    {
                      num: '01',
                      title: 'الاستشارة وفهم الرؤية',
                      desc: 'جلسة نقاشية لبلورة أفكار مشروعك، التعرف على جمهورك المستهدف، وتحديد المتطلبات الفنية والجمالية بدقة قبل البدء.',
                      icon: Lightbulb,
                      iconColor: '#A990D4',
                      borderColor: 'rgba(169,144,212,0.15)',
                      glowColor: 'rgba(169,144,212,0.2)',
                    },
                    {
                      num: '02',
                      title: 'الهندسة وتجربة المستخدم',
                      desc: 'تخطيط هيكل المتجر ورسم مسارات تصفح سهلة وسريعة تسعى لتيسير رحلة العميل داخل المتجر وزيادة فاعلية التصفح.',
                      icon: Sliders,
                      iconColor: '#C97FB5',
                      borderColor: 'rgba(201,127,181,0.15)',
                      glowColor: 'rgba(201,127,181,0.2)',
                    },
                    {
                      num: '03',
                      title: 'التصميم وبناء الهوية',
                      desc: 'ابتكار الهوية البصرية وتصميم واجهات واضحة وجذابة تتناسق بشكل كامل عبر مختلف الأجهزة والشاشات.',
                      icon: Palette,
                      iconColor: '#C4B3E3',
                      borderColor: 'rgba(196,179,227,0.15)',
                      glowColor: 'rgba(196,179,227,0.2)',
                    },
                    {
                      num: '04',
                      title: 'التطوير والربط التقني',
                      desc: 'تأسيس المتجر على منصة سلة أو زد، وتفعيل بوابات الدفع الإلكتروني، الربط مع شركات الشحن، وتهيئته لتحليلات قوقل.',
                      icon: Code,
                      iconColor: '#E4A5D0',
                      borderColor: 'rgba(228,165,208,0.15)',
                      glowColor: 'rgba(228,165,208,0.2)',
                    },
                    {
                      num: '05',
                      title: 'التدشين والتحليق',
                      desc: 'إطلاق وتدشين المتجر مع تقديم جلسة تعريفية لشرح كيفية إدارة الطلبات والمنتجات وتأهيلك للبدء بثقة.',
                      icon: Rocket,
                      iconColor: '#2ECC71',
                      borderColor: 'rgba(46,204,113,0.15)',
                      glowColor: 'rgba(46,204,113,0.2)',
                    },
                  ].map((step, idx) => {
                    const StepIcon = step.icon;
                    return (
                      <div 
                        key={step.num}
                        className="relative flex flex-col items-center bg-[var(--bg2)] border border-[var(--border)] rounded-2xl p-5 text-center transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1 hover:border-[rgba(201,127,181,0.25)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] z-10 group"
                        id={`process-step-item-${step.num}`}
                      >
                        {/* Circle step badge with light indicator */}
                        <div className="absolute top-3 left-4 text-[11px] font-mono font-black text-[var(--muted)] opacity-60 tracking-wider">
                          {step.num}
                        </div>

                        {/* Icon Wrap with custom background glowing effects */}
                        <div 
                          className="w-14 h-14 rounded-full flex items-center justify-center border border-[var(--border)] mb-4 transition-all duration-300 relative overflow-hidden group-hover:scale-110 shadow-sm"
                          style={{ 
                            background: `radial-gradient(circle, ${step.borderColor} 0%, rgba(0,0,0,0) 70%)`,
                          }}
                        >
                          <div 
                            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                            style={{ 
                              background: `radial-gradient(circle, ${step.glowColor} 0%, rgba(0,0,0,0) 70%)` 
                            }}
                          />
                          <StepIcon 
                            className="w-6 h-6 transition-transform duration-300 group-hover:rotate-6" 
                            style={{ color: step.iconColor }}
                          />
                        </div>

                        {/* Title and description */}
                        <h3 className="text-[13px] font-bold text-[var(--text)] mb-2 group-hover:text-[#C97FB5] transition-colors duration-200">
                          {step.title}
                        </h3>
                        <p className="text-[11px] text-[var(--muted)] leading-relaxed text-center">
                          {step.desc}
                        </p>

                        {idx < 4 && (
                          <div className="block md:hidden w-[1px] h-4 bg-gradient-to-b from-[var(--border)] to-transparent my-2" />
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Consultation CTA block */}
              <div className="cta-section grid grid-cols-1 md:grid-cols-[1fr_auto] gap-6 items-center text-center md:text-right">
                <div className="flex flex-col items-center md:items-start">
                  <div className="flex flex-col md:flex-row items-center gap-4 mb-4 md:mb-2 text-center md:text-right">
                    <div className="w-12 h-12 rounded-full bg-[rgba(201,127,181,0.15)] border border-[rgba(201,127,181,0.2)] flex items-center justify-center text-[#C97FB5] shrink-0">
                      <Handshake className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="cta-title !mb-0 font-bold text-lg md:text-xl leading-snug">
                        مو متأكد وش تحتاج؟ راسلنا ونشوف سواً
                      </div>
                    </div>
                  </div>
                  <p className="cta-desc !mb-0 flex items-center justify-center md:justify-start gap-1.5 flex-wrap text-sm text-[var(--muted)]">
                    <span>شارك تفاصيل مشروعك ونرد عليك باقتراح مناسب</span>
                    <MessageSquare className="w-3.5 h-3.5 text-[#C97FB5]" />
                  </p>
                </div>
                <div className="w-full md:w-auto">
                  <a
                    href="https://wa.me/966592843956?text=هلا عفاف سعود! أبي تساعدوني أختار الخدمة المناسبة 💼"
                    className="wa-btn lg w-full md:w-auto justify-center px-8"
                    target="_blank"
                    rel="noreferrer"
                    id="btn-general-consult"
                  >
                    {renderWaIcon('wa-icon lg')}
                    تواصل الآن
                  </a>
                </div>
              </div>

              <footer className="mt-[20px] flex flex-col items-center">
                <span className="footer-logo">Afaf Saud ✦</span>
                <span className="flex flex-wrap items-center justify-center gap-1 mt-1 text-[11px] text-[#7A718E] px-4 text-center">
                  <span>خدمات التسويق وحلول الأعمال</span>
                  <span>·</span>
                  <span className="flex items-center gap-0.5">
                    <MapPin className="w-3 h-3 text-[#C97FB5]" />
                    <span>المملكة العربية السعودية</span>
                  </span>
                </span>
                {renderFreelanceDocument(theme)}
              </footer>
            </div>
          )}

          {/*********************************************************
           * TAB 2: PORTFOLIO (portfolio)
           *********************************************************/}
          {activeTab === 'portfolio' && (
            <div className="wrap">
              <div className="topbar md:hidden">
                <div className="topbar-logo">Afaf Saud</div>
                <div className="topbar-pill">✦ البورتفوليو</div>
              </div>

              <div className="hero">
                <div className="hero-tag">أعمالي</div>
                <h1 className="hero-title">
                  شوف الشغل
                  <br />
                  <span>قبل ما تقرر ✦</span>
                </h1>
                <p className="hero-sub">نماذج من متاجر، هويات بصرية، وتحليلات تجربة مستخدم</p>
              </div>

              <div className="section-header">
                <div className="section-dot" />
                <div className="section-title">الأعمال</div>
                <div className="section-line" />
              </div>

              {/* Category selector tabs */}
              <div className="filter-tabs pt-2" id="portfolio-categories-container" dir="rtl">
                <button
                  className={`tab ${portfolioFilter === 'all' ? 'active' : ''}`}
                  onClick={() => setPortfolioFilter('all')}
                  id="tab-filter-all"
                >
                  الكل
                </button>
                <button
                  className={`tab relative ${portfolioFilter === 'store' ? 'active' : ''}`}
                  onClick={() => setPortfolioFilter('store')}
                  id="tab-filter-store"
                >
                  <span className="absolute -top-2.5 -right-1 flex h-4 items-center justify-center bg-red-600 text-white text-[9px] font-bold px-1.5 py-0.5 rounded-full shadow-md z-10 border border-white dark:border-[#13111C] animate-pulse">
                    جاهزة
                  </span>
                  متاجر إلكترونية
                </button>
                <button
                  className={`tab relative ${portfolioFilter === 'websites' ? 'active' : ''}`}
                  onClick={() => setPortfolioFilter('websites')}
                  id="tab-filter-websites"
                >
                  <span className="absolute -top-2.5 -right-1 flex h-4 items-center justify-center bg-amber-600 text-white text-[9px] font-bold px-1.5 py-0.5 rounded-full shadow-md z-10 border border-white dark:border-[#13111C] animate-pulse">
                    للناشئة
                  </span>
                  مواقع تعريفية
                </button>
                <button
                  className={`tab relative ${portfolioFilter === 'landing' ? 'active' : ''}`}
                  onClick={() => setPortfolioFilter('landing')}
                  id="tab-filter-landing"
                >
                  <span className="absolute -top-2.5 -right-1 flex h-4 items-center justify-center bg-emerald-600 text-white text-[9px] font-bold px-1.5 py-0.5 rounded-full shadow-md z-10 border border-white dark:border-[#13111C] animate-pulse">
                    أعلى تحويل
                  </span>
                  صفحات الهبوط
                </button>
                <button
                  className={`tab ${portfolioFilter === 'themes' ? 'active' : ''}`}
                  onClick={() => setPortfolioFilter('themes')}
                  id="tab-filter-themes"
                >
                  ثيمات مطورة
                </button>
                <button
                  className={`tab ${portfolioFilter === 'brand' ? 'active' : ''}`}
                  onClick={() => setPortfolioFilter('brand')}
                  id="tab-filter-brand"
                >
                  هويات وتصاميم
                </button>
              </div>

              <div className="portfolio-grid" id="portfolioGrid">
                {portfolioFilter === 'themes' ? (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="col-span-full py-20 px-8 flex flex-col items-center justify-center text-center rounded-2xl bg-[rgba(126,104,171,0.04)] border border-[rgba(126,104,171,0.1)] shadow-inner w-full min-h-[300px]"
                  >
                    <div className="text-[14px] text-[#A990D4] font-medium tracking-[1px] mb-3 uppercase">ثيمات مطورة مخصصة لمتاجر سلة وزد</div>
                    <div className="text-[32px] md:text-[40px] font-bold text-[#C97FB5] animate-pulse">
                      قريباً ⏱
                    </div>
                  </motion.div>
                ) : (
                  <AnimatePresence mode="popLayout">
                    {portfolioFilter === 'store' && (
                      <motion.div
                        initial={{ opacity: 0, y: -12 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -12 }}
                        transition={{ duration: 0.35 }}
                        className={`col-span-full wide mb-5 p-5 rounded-2xl border transition-all duration-300 relative overflow-hidden ${
                          theme === 'dark'
                            ? 'border-[rgba(201,127,181,0.25)] bg-[linear-gradient(135deg,rgba(27,24,37,0.85)_0%,rgba(19,17,26,0.92)_100%)] shadow-xl shadow-[rgba(126,104,171,0.05)]'
                            : 'border-[rgba(184,77,159,0.22)] bg-[linear-gradient(135deg,rgba(255,255,255,0.95)_0%,rgba(248,246,252,0.98)_100%)] shadow-md shadow-[rgba(126,104,171,0.02)]'
                        }`}
                        id="ready-stores-alert-container"
                        dir="rtl"
                      >
                        {/* Glow decorative pattern */}
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(201,127,181,0.08),transparent_50%)] pointer-events-none" />

                        <div className="relative flex flex-col lg:flex-row items-start lg:items-center justify-between gap-5 z-10">
                          <div className="flex items-start gap-4">
                            <div className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 mt-0.5 lg:mt-0 shadow-inner ${
                              theme === 'dark'
                                ? 'bg-[rgba(201,127,181,0.12)] border border-[rgba(201,127,181,0.2)] text-[#C97FB5]'
                                : 'bg-[rgba(184,77,159,0.08)] border border-[rgba(184,77,159,0.15)] text-[#B84D9F]'
                            }`}>
                              <Sparkles className="w-5 h-5 animate-pulse" />
                            </div>
                            <div>
                              <div className="flex items-center flex-wrap gap-2 mb-1.5">
                                <span className={`text-[15px] font-bold ${
                                  theme === 'dark' ? 'text-[#EDE9F5]' : 'text-[#191424]'
                                }`}>فرص استثمارية مميزة: متاجر إلكترونية جاهزة للبيع</span>
                                <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider animate-pulse ${
                                  theme === 'dark'
                                    ? 'bg-[#C97FB5]/15 text-[#C97FB5] border border-[#C97FB5]/20'
                                    : 'bg-[#B84D9F]/10 text-[#B84D9F] border border-[#B84D9F]/15'
                                }`}>
                                  تسليم وانطلاق فوري 🚀
                                </span>
                              </div>
                              <p className={`text-[12px] leading-relaxed max-w-3xl ${
                                theme === 'dark' ? 'text-[#A990D4]' : 'text-[#504664]'
                              }`}>
                                أقدم متاجر إلكترونية جاهزة على منصات سلة، زد، وشوبفاي، مجهزة بالكامل باحترافية عالية، تشمل الهوية البصرية، التصميم المتكامل، رفع المنتجات، إعداد بوابات الدفع، وتجهيز خيارات الشحن. ابدأ مشروعك التجاري مباشرة وتجاوز مراحل التأسيس الطويلة.
                              </p>
                            </div>
                          </div>

                          <a
                            href="https://wa.me/966592843956?text=%D9%87%D9%84%D8%A7%20%D8%B9%D9%81%D8%A7%20%D8%B3%D8%B9%D9%88%D8%AF!%20%D8%A3%D8%B1%D8%BA%D8%A8%20%D9%81%D9%8A%20%D8%A7%D9%84%D8%A7%D8%B3%D8%AA%D9%81%D8%B3%D8%A7%D8%B1%20%D8%B9%D9%86%20%D8%A7%D9%84%D9%85%D8%AA%D8%A7%D8%AC%D8%B1%20%D8%A7%D9%84%D8%AC%D8%A7%D9%87%D8%B2%D9%83%20%D9%84%D9%84%D8%A8%D9%8A%D8%B9%20%F0%9F%93%88"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`w-full lg:w-auto px-5 py-2.5 rounded-xl text-center font-bold text-[12.5px] transition-all flex items-center justify-center gap-2 shrink-0 shadow-md ${
                              theme === 'dark'
                                ? 'bg-gradient-to-r from-[#C97FB5] to-[#E4A5D0] hover:opacity-95 text-[#0C0B10] shadow-[rgba(201,127,181,0.15)]'
                                : 'bg-gradient-to-r from-[#B84D9F] to-[#C97FB5] hover:opacity-95 text-white shadow-[rgba(184,77,159,0.15)]'
                            }`}
                          >
                            {renderWaIcon("w-4 h-4 fill-current")}
                            <span>عندك منصة محددة؟ بلغنا 🚀</span>
                          </a>
                        </div>
                      </motion.div>
                    )}

                    {portfolioItems
                      .filter((item: PortfolioItem) => {
                        if (portfolioFilter === 'all') {
                          return !['themes', 'posts', 'banners'].includes(item.cat);
                        }
                        return item.cat === portfolioFilter;
                      })
                      .map((item: PortfolioItem) => (
                        <motion.div
                          layout
                          key={item.id}
                          initial={{ opacity: 0, scale: 0.95 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.95 }}
                          transition={{ duration: 0.3 }}
                          className={`port-card ${item.wide ? 'wide' : ''}`}
                          id={`port-card-${item.id}`}
                        >
                          <div className={`stripe ${['brand'].includes(item.cat) ? 'accent' : ''}`} />
                          <LazyPortMock mockType={item.mockType} wide={item.wide}>
                            {item.customMockUp}
                          </LazyPortMock>
                          <div className="port-body flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                            <div className="flex-1">
                              <div className="port-type">{item.type}</div>
                              <div className="port-name">{item.name}</div>
                              {item.status && (
                                <div className="text-[#EF4444] text-[11.5px] font-bold mt-1.5 mb-2 flex items-center gap-1.5" dir="rtl">
                                  <span className="w-1.5 h-1.5 rounded-full bg-[#EF4444] animate-ping" />
                                  <span>{item.status}</span>
                                </div>
                              )}
                              <div className="port-tags">
                                {item.tags.map((tag: string, tIndex: number) => {
                                  const customStyle = getTagStyles(tag, theme);
                                  return (
                                    <span
                                      key={tIndex}
                                      className="port-tag transition-all duration-300 hover:scale-105 cursor-default"
                                      style={{
                                        color: customStyle.color,
                                        backgroundColor: customStyle.backgroundColor,
                                        borderColor: customStyle.borderColor,
                                        borderWidth: '1px',
                                        borderStyle: 'solid'
                                      }}
                                    >
                                      {tag}
                                    </span>
                                  );
                                })}
                              </div>
                            </div>
                            {item.buyUrl && (
                              <a
                                href={item.buyUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-1 sm:mt-0 flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl text-[12.5px] font-bold transition-all text-white bg-red-600 hover:bg-red-500 shadow-md shadow-red-600/15 active:scale-95 text-center shrink-0"
                                onClick={(e) => {
                                  e.stopPropagation();
                                }}
                              >
                                <ShoppingBag className="w-3.5 h-3.5" />
                                <span>شراء المتجر والبدء فوراً</span>
                              </a>
                            )}
                            {item.previewUrl && (
                              <a
                                href={item.previewUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`mt-1 sm:mt-0 flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl text-[12.5px] font-bold transition-all hover:opacity-95 shadow-md active:scale-95 text-center shrink-0 ${
                                  theme === 'dark'
                                    ? 'bg-gradient-to-r from-[#C97FB5] to-[#E4A5D0] text-[#0C0B10] shadow-[rgba(201,127,181,0.15)]'
                                    : 'bg-gradient-to-r from-[#B84D9F] to-[#C97FB5] text-white shadow-[rgba(184,77,159,0.15)]'
                                }`}
                                onClick={(e) => {
                                  e.stopPropagation();
                                }}
                              >
                                <ExternalLink className="w-3.5 h-3.5" />
                                <span>معاينة</span>
                              </a>
                            )}
                          </div>
                        </motion.div>
                      ))}
                  </AnimatePresence>
                )}
              </div>

              {/* Dynamic used Tools showcase */}
              <div className="section-header !mt-[32px]">
                <div className="section-dot bg-[#C97FB5] shadow-[0_0_10px_#C97FB5]" />
                <div className="section-title">الأدوات</div>
                <div className="section-line" />
              </div>

              <div className="tools-strip" id="tools-showcase-bar">
                <div className="tools-label">TOOLS & PLATFORMS</div>
                <div className="tool-pill flex items-center gap-1 text-[11px] font-medium py-1 px-2.5 rounded-lg bg-[rgba(126,104,171,0.06)] border border-[rgba(126,104,171,0.12)] text-[#C4B3E3] hover:border-[rgba(201,127,181,0.3)] transition-all">
                  <ShoppingBag className="w-3.5 h-3.5 text-[#C97FB5]" />
                  <span>سلة</span>
                </div>
                <div className="tool-pill flex items-center gap-1 text-[11px] font-medium py-1 px-2.5 rounded-lg bg-[rgba(126,104,171,0.06)] border border-[rgba(126,104,171,0.12)] text-[#C4B3E3] hover:border-[rgba(201,127,181,0.3)] transition-all">
                  <Store className="w-3.5 h-3.5 text-[#A990D4]" />
                  <span>زد</span>
                </div>
                <div className="tool-pill flex items-center gap-1 text-[11px] font-medium py-1 px-2.5 rounded-lg bg-[rgba(126,104,171,0.06)] border border-[rgba(126,104,171,0.12)] text-[#C4B3E3] hover:border-[rgba(201,127,181,0.3)] transition-all">
                  <Globe className="w-3.5 h-3.5 text-[#C97FB5]" />
                  <span>Shopify</span>
                </div>
                <div className="tool-pill flex items-center gap-1 text-[11px] font-medium py-1 px-2.5 rounded-lg bg-[rgba(126,104,171,0.06)] border border-[rgba(126,104,171,0.12)] text-[#C4B3E3] hover:border-[rgba(201,127,181,0.3)] transition-all">
                  <Figma className="w-3.5 h-3.5 text-[#A990D4]" />
                  <span>Figma</span>
                </div>
                <div className="tool-pill flex items-center gap-1 text-[11px] font-medium py-1 px-2.5 rounded-lg bg-[rgba(126,104,171,0.06)] border border-[rgba(126,104,171,0.12)] text-[#C4B3E3] hover:border-[rgba(201,127,181,0.3)] transition-all">
                  <PenTool className="w-3.5 h-3.5 text-[#C97FB5]" />
                  <span>Illustrator</span>
                </div>
                <div className="tool-pill flex items-center gap-1 text-[11px] font-medium py-1 px-2.5 rounded-lg bg-[rgba(126,104,171,0.06)] border border-[rgba(126,104,171,0.12)] text-[#C4B3E3] hover:border-[rgba(201,127,181,0.3)] transition-all">
                  <Activity className="w-3.5 h-3.5 text-[#A990D4]" />
                  <span>Hotjar</span>
                </div>
                <div className="tool-pill flex items-center gap-1 text-[11px] font-medium py-1 px-2.5 rounded-lg bg-[rgba(126,104,171,0.06)] border border-[rgba(126,104,171,0.12)] text-[#C4B3E3] hover:border-[rgba(201,127,181,0.3)] transition-all">
                  <Code className="w-3.5 h-3.5 text-[#C97FB5]" />
                  <span>CSS / JS</span>
                </div>
              </div>

              {/* Work Process flow step block */}
              <div className="section-header">
                <div className="section-dot" />
                <div className="section-title">كيف أشتغل</div>
                <div className="section-line" />
              </div>

              <div className="mb-[28px]" id="work-process-steps-box">
                <div className="process-steps">
                  <div className="process-step">
                    <div className="step-num">01</div>
                    <div className="step-content">
                      <div className="step-title flex items-center gap-1.5 font-bold">
                        <Brain className="w-4 h-4 text-[var(--accent)] shrink-0" />
                        <span>استيعاب المشروع</span>
                      </div>
                      <div className="step-desc">أسأل أسئلة محددة عن المنتج، الجمهور، والمنافسين — قبل ما أبدأ أي شي</div>
                    </div>
                  </div>

                  <div className="process-step">
                    <div className="step-num">02</div>
                    <div className="step-content">
                      <div className="step-title flex items-center gap-1.5 font-bold">
                        <FileText className="w-4 h-4 text-[var(--accent)] shrink-0" />
                        <span>تقديم المقترح</span>
                      </div>
                      <div className="step-desc">أرسل مقترح بالنطاق والتكلفة والجدول الزمني — بدون مفاجآت</div>
                    </div>
                  </div>

                  <div className="process-step">
                    <div className="step-num">03</div>
                    <div className="step-content">
                      <div className="step-title flex items-center gap-1.5 font-bold">
                        <RefreshCw className="w-4 h-4 text-[var(--accent)] shrink-0 animate-[spin_12s_linear_infinite]" />
                        <span>التنفيذ بالتحديثات</span>
                      </div>
                      <div className="step-desc">أشارك معك التقدم كل مرحلة — مو بس في النهاية</div>
                    </div>
                  </div>

                  <div className="process-step">
                    <div className="step-num">04</div>
                    <div className="step-content">
                      <div className="step-title flex items-center gap-1.5 font-bold">
                        <CheckCircle className="w-4 h-4 text-[var(--accent)] shrink-0" />
                        <span>التسليم والمراجعة</span>
                      </div>
                      <div className="step-desc">التسليم مع جولة تعديل واحدة مدرجة في السعر</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="cta-section grid grid-cols-1 md:grid-cols-[1fr_auto] gap-6 items-center text-center md:text-right">
                <div className="flex flex-col items-center md:items-start">
                  <div className="flex flex-col md:flex-row items-center gap-4 mb-4 md:mb-2 text-center md:text-right">
                    <div className="w-12 h-12 rounded-full bg-[rgba(126,104,171,0.15)] border border-[rgba(126,104,171,0.2)] flex items-center justify-center text-[#A990D4] shrink-0">
                      <MessageSquare className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="cta-title !mb-0 font-bold text-lg md:text-xl leading-snug">
                        شفت شغلي؟ راسلني نشوف مشروعك
                      </div>
                    </div>
                  </div>
                  <p className="cta-desc !mb-0 text-sm text-[var(--muted)]">
                    شارك تفاصيل مشروعك ونرد باقتراح مناسب
                  </p>
                </div>
                <div className="w-full md:w-auto">
                  <a
                    href="https://wa.me/966592843956?text=هلا عفاف! شفت البورتفوليو وأبي نتكلم عن مشروعي 💼"
                    className="wa-btn lg w-full md:w-auto justify-center px-8"
                    target="_blank"
                    rel="noreferrer"
                    id="btn-portfolio-whatsapp"
                  >
                    {renderWaIcon('wa-icon lg')}
                    تواصل الآن
                  </a>
                </div>
              </div>

              <footer className="mt-[20px] flex flex-col items-center">
                <span className="footer-logo">Afaf Saud ✦</span>
                <span className="flex items-center justify-center gap-1 mt-1 text-[11px] text-[#7A718E]">
                  <span>خدمات التسويق والتصميم وحلول الأعمال</span>
                  <span>·</span>
                  <MapPin className="w-3 h-3 text-[#C97FB5]" />
                  <span>المملكة العربية السعودية</span>
                </span>
                {renderFreelanceDocument(theme)}
              </footer>
            </div>
          )}



          {/*********************************************************
           * TAB 3: ACTIVE COUPONS (coupons)
           *********************************************************/}
          {activeTab === 'coupons' && (
            <div className="wrap" id="coupons-independent-view">
              {/* Mobile Topbar */}
              <div className="topbar md:hidden">
                <div className="topbar-logo">Afaf Saud</div>
                <div className="topbar-pill flex items-center gap-1">
                  <Percent className="w-3.5 h-3.5 text-[#C97FB5]" />
                  <span>أكواد الخصم</span>
                </div>
              </div>

              {/* Hero Section */}
              <div className="hero pb-6">
                <div className="hero-tag">توفير وعروض متميزة</div>
                <h1 className="hero-title !text-[30px] md:!text-[36px]">
                  أكواد الخصم الفعّالة
                  <br />
                  <span>لاستثمار أذكى بمشروعك ✦</span>
                </h1>
                <p className="hero-desc max-w-2xl mx-auto mt-3">
                  كوبونات وعروض حصرية للاستفادة من تخفيضات منصات التجارة الإلكترونية، الثيمات، والتطبيقات المعتمدة لتطوير تجارتك.
                </p>
              </div>

              {/* Filters Container */}
              <div className="filter-tabs-container mb-8" dir="rtl">
                <div className="filter-tabs justify-center" id="coupon-filter-container">
                  <button
                    className={`tab ${couponFilter === 'all' ? 'active' : ''}`}
                    onClick={() => setCouponFilter('all')}
                  >
                    الكل
                  </button>
                  <button
                    className={`tab ${couponFilter === 'theme' ? 'active' : ''}`}
                    onClick={() => setCouponFilter('theme')}
                  >
                    الثيمات
                  </button>
                  <button
                    className={`tab ${couponFilter === 'app' ? 'active' : ''}`}
                    onClick={() => setCouponFilter('app')}
                  >
                    التطبيقات
                  </button>
                  <button
                    className={`tab ${couponFilter === 'salla' ? 'active' : ''}`}
                    onClick={() => setCouponFilter('salla')}
                  >
                    باقات سلة
                  </button>
                </div>
              </div>

              {/* Coupons Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 max-w-[1140px] mx-auto mb-16" dir="rtl">
                {coupons
                  .filter(item => {
                    if (couponFilter === 'all') return true;
                    if (couponFilter === 'theme') return item.productType === 'ثيم';
                    if (couponFilter === 'app') return item.productType === 'تطبيق';
                    if (couponFilter === 'salla') return item.productType === 'باقة سلة';
                    return true;
                  })
                  .map((item) => {
                    const isCopied = copiedCouponId === item.id;
                    const isShared = sharedCouponId === item.id;
                    return (
                      <motion.div
                        key={item.id}
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -12 }}
                        className={`p-6 rounded-2xl border transition-all duration-300 relative overflow-hidden flex flex-col justify-between ${
                          theme === 'dark'
                            ? 'border-[rgba(201,127,181,0.25)] bg-[linear-gradient(135deg,rgba(27,24,37,0.85)_0%,rgba(19,17,26,0.92)_100%)] shadow-xl shadow-[rgba(126,104,171,0.05)]'
                            : 'border-[rgba(184,77,159,0.22)] bg-[linear-gradient(135deg,rgba(255,255,255,0.95)_0%,rgba(248,246,252,0.98)_100%)] shadow-md shadow-[rgba(126,104,171,0.02)]'
                        }`}
                        id={`coupon-card-${item.id}`}
                      >
                        {/* Soft ambient glow inside the card */}
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(201,127,181,0.06),transparent_50%)] pointer-events-none" />

                        <div>
                          {/* Card Header (Product Type Tag & Active Status) */}
                          <div className="flex items-center justify-between mb-4">
                            <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-[11px] font-bold ${
                              theme === 'dark' 
                                ? 'bg-[rgba(201,127,181,0.12)] text-[#C97FB5] border border-[rgba(201,127,181,0.2)]'
                                : 'bg-[rgba(184,77,159,0.08)] text-[#B84D9F] border border-[rgba(184,77,159,0.15)]'
                            }`}>
                              <Tag className="w-3 h-3" />
                              {item.productType}
                            </span>
                            
                            <span className="inline-flex items-center gap-1.5 text-xs text-emerald-500 font-medium font-bold">
                              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                              مفعل
                            </span>
                          </div>

                          {/* Product Title */}
                          <h3 className={`text-[19px] font-bold mb-2 ${
                            theme === 'dark' ? 'text-[#EDE9F5]' : 'text-[#191424]'
                          }`}>
                            {item.product}
                          </h3>

                          {/* Sub-Marketer information */}
                           {item.subMarketer && item.subMarketer !== '—' && (
                             <div className="space-y-1.5 mb-6 text-sm">
                               <div className="flex items-center gap-1.5 text-[#7A718E] dark:text-[#A990D4]">
                                 <span className="font-semibold text-xs opacity-75">المسوّق الفرعي:</span>
                                 <span className="text-xs">{item.subMarketer}</span>
                               </div>
                             </div>
                           )}
                         </div>

                         {/* Interactive Coupon Box with Dashed Border */}
                        <div className="space-y-4">
                          <div 
                            onClick={() => handleCopyCoupon(item.id, item.coupon)}
                            className={`group/coupon relative p-3.5 rounded-xl border-2 border-dashed flex items-center justify-between cursor-pointer transition-all duration-300 ${
                              isCopied 
                                ? 'border-emerald-500 bg-emerald-500/10'
                                : theme === 'dark'
                                  ? 'border-[rgba(126,104,171,0.3)] bg-[rgba(126,104,171,0.04)] hover:border-[#C97FB5] hover:bg-[#C97FB5]/5'
                                  : 'border-[rgba(184,77,159,0.25)] bg-[#FAF8FC] hover:border-[#B84D9F] hover:bg-[#B84D9F]/5'
                            }`}
                            title="انقر لنسخ الكوبون"
                          >
                            <div className="flex flex-col items-start gap-0.5">
                              <span className="text-[10px] uppercase tracking-wider text-[#7A718E] dark:text-[#A990D4]">رمز الكوبون</span>
                              <span className="font-mono text-[17px] font-bold tracking-wider uppercase text-[#B84D9F] dark:text-[#C97FB5]">
                                {item.coupon}
                              </span>
                            </div>
                            
                            <button className={`w-8 h-8 rounded-lg flex items-center justify-center transition-all ${
                              isCopied 
                                ? 'bg-emerald-500 text-white' 
                                : 'bg-[var(--bg3)] text-[var(--pur-light)] group-hover/coupon:text-[var(--accent)]'
                            }`}>
                              {isCopied ? (
                                <Check className="w-4.5 h-4.5" />
                              ) : (
                                <Copy className="w-4.5 h-4.5" />
                              )}
                            </button>

                            {/* Floating temporary tooltip */}
                            <AnimatePresence>
                              {isCopied && (
                                <motion.div 
                                  initial={{ opacity: 0, y: 10, scale: 0.9 }}
                                  animate={{ opacity: 1, y: 0, scale: 1 }}
                                  exit={{ opacity: 0, scale: 0.9 }}
                                  className="absolute -top-8 left-1/2 -translate-x-1/2 px-2.5 py-1 rounded bg-emerald-600 text-white text-[10px] font-bold shadow-md z-10 whitespace-nowrap"
                                >
                                  تم نسخ الكوبون! ✅
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>

                          {/* CTA to use Coupon Link & Share */}
                          <div className="flex items-center gap-2">
                            <a
                              id={`coupon-link-btn-${item.id}`}
                              href={item.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className={`flex-1 py-2.5 px-4 rounded-xl flex items-center justify-center gap-1.5 font-bold transition-all duration-300 text-[13px] text-center shadow-md active:scale-95 ${
                                theme === 'dark' 
                                  ? 'bg-gradient-to-r from-[#C97FB5] to-[#E4A5D0] text-[#0C0B10] hover:opacity-95 shadow-[rgba(201,127,181,0.15)]'
                                  : 'bg-gradient-to-r from-[#B84D9F] to-[#C97FB5] text-white hover:opacity-95 shadow-[rgba(184,77,159,0.15)]'
                              }`}
                            >
                              <ExternalLink className="w-4 h-4" />
                              <span>الرابط</span>
                            </a>
                            <button
                              id={`coupon-share-btn-${item.id}`}
                              onClick={() => handleShareCoupon(item.id, item.coupon, item.product, item.link)}
                              className={`p-2.5 h-[38.5px] w-[38.5px] rounded-xl flex items-center justify-center transition-all duration-300 relative cursor-pointer active:scale-95 border ${
                                isShared
                                  ? 'border-emerald-500 bg-emerald-500/10 text-emerald-500'
                                  : theme === 'dark'
                                    ? 'bg-[rgba(126,104,171,0.08)] border-[rgba(126,104,171,0.22)] text-[#C97FB5] hover:bg-[rgba(126,104,171,0.15)]'
                                    : 'bg-[#FAF8FC] border-[rgba(184,77,159,0.22)] text-[#B84D9F] hover:bg-[#B84D9F]/5'
                              }`}
                              title="مشاركة الكوبون"
                            >
                              {isShared ? (
                                <Check className="w-4.5 h-4.5" />
                              ) : (
                                <Share2 className="w-4.5 h-4.5" />
                              )}
                              
                              {/* share tooltip */}
                              <AnimatePresence>
                                {isShared && (
                                  <motion.div 
                                    initial={{ opacity: 0, y: 10, scale: 0.9 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded bg-emerald-600 text-white text-[9px] font-bold shadow-md z-10 whitespace-nowrap"
                                  >
                                    تم نسخ الرابط! ✅
                                  </motion.div>
                                )}
                              </AnimatePresence>
                            </button>
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
              </div>

              {/* supportive message footer inside coupon tab */}
              <div className="text-center pb-12 flex flex-col items-center justify-center gap-2">
                <p className="text-xs text-[#7A718E] dark:text-[#A990D4] max-w-md mx-auto">
                  تنويه: جميع الأكواد والكوبونات أعلاه يتم تحديثها دورياً للتحقق من صلاحيتها وفاعليتها لتقديم أفضل تجربة ممكنة. ✦
                </p>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[rgba(126,104,171,0.06)] border border-[rgba(126,104,171,0.12)] text-[11px] text-[#7A718E] dark:text-[#A990D4] font-bold">
                  <RefreshCw className="w-3 h-3 text-[#C97FB5]" />
                  <span>آخر تحديث للأكواد: ٢٢ يونيو ٢٠٢٦ ✦</span>
                </div>
              </div>

              <footer className="mt-[20px] flex flex-col items-center">
                <span className="footer-logo">Afaf Saud ✦</span>
                <span className="flex items-center justify-center gap-1 mt-1 text-[11px] text-[#7A718E]">
                  <span>خدمات التسويق والتصميم وحلول الأعمال</span>
                  <span>·</span>
                  <MapPin className="w-3 h-3 text-[#C97FB5]" />
                  <span>المملكة العربية السعودية</span>
                </span>
                {renderFreelanceDocument(theme)}
              </footer>
            </div>
          )}



          {/*********************************************************
           * TAB 4: FAQ (faq)
           *********************************************************/}
          {activeTab === 'faq' && (
            <div className="wrap">
              <div className="topbar md:hidden">
                <div className="topbar-logo">Afaf Saud</div>
                <div className="topbar-pill flex items-center gap-1">
                  <Lightbulb className="w-3.5 h-3.5 text-[#C97FB5]" />
                  <span>الأسئلة الشائعة</span>
                </div>
              </div>

              <div className="hero pb-0">
                <div className="hero-tag">الأسئلة الشائعة</div>
                <h1 className="hero-title !text-[30px]">
                  استفسارات شائعة
                  <br />
                  <span>وإجابات واضحة ✦</span>
                </h1>
              </div>

              <div id="faq-panel">
                <div className="section-header">
                  <div className="section-dot" />
                  <div className="section-title">أسئلة عن الخدمات</div>
                  <div className="section-line" />
                </div>

                <div className="faq-list">
                  {faqItems.map((item, index) => {
                    const idKey = index;
                    const isOpen = expandedFaqs.includes(idKey);
                    return (
                      <div
                        key={idKey}
                        className={`faq-item ${isOpen ? 'open' : ''}`}
                        onClick={() => toggleFaqItem(idKey)}
                        id={`faq-item-service-${index}`}
                      >
                        <div className="faq-q">
                          <span>{item.q}</span>
                          <span className="faq-arrow">↓</span>
                        </div>
                        <div
                          className="faq-a"
                          style={{
                            maxHeight: isOpen ? '200px' : '0',
                            padding: isOpen ? '0 16px 14px' : '0 16px',
                          }}
                        >
                          {item.a}
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="section-header !mt-[28px]">
                  <div className="section-dot bg-[#C97FB5] shadow-[0_0_10px_#C97FB5]" />
                  <div className="section-title">أسئلة عن الهوية البصرية</div>
                  <div className="section-line" />
                </div>

                <div className="faq-list">
                  {faqBrandItems.map((item, index) => {
                    const idKey = index + 100;
                    const isOpen = expandedFaqs.includes(idKey);
                    return (
                      <div
                        key={idKey}
                        className={`faq-item ${isOpen ? 'open' : ''}`}
                        onClick={() => toggleFaqItem(idKey)}
                        id={`faq-item-brand-${index}`}
                      >
                        <div className="faq-q">
                          <span>{item.q}</span>
                          <span className="faq-arrow">↓</span>
                        </div>
                        <div
                          className="faq-a"
                          style={{
                            maxHeight: isOpen ? '200px' : '0',
                            padding: isOpen ? '0 16px 14px' : '0 16px',
                          }}
                        >
                          {item.a}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <footer className="mt-[20px] flex flex-col items-center">
                <span className="footer-logo">Afaf Saud ✦</span>
                <span className="flex items-center justify-center gap-1 mt-1 text-[11px] text-[#7A718E]">
                  <span>خدمات التسويق والتصميم وحلول الأعمال</span>
                  <span>·</span>
                  <MapPin className="w-3 h-3 text-[#C97FB5]" />
                  <span>المملكة العربية السعودية</span>
                </span>
                {renderFreelanceDocument(theme)}
              </footer>
            </div>
          )}

          {/*********************************************************
           * TAB 5: SOCIAL CHANNELS (social)
           *********************************************************/}
          {activeTab === 'social' && (
            <div className="wrap">
              <div className="topbar md:hidden">
                <div className="topbar-logo">Afaf Saud</div>
                <div className="topbar-pill flex items-center gap-1">
                  <MessageCircle className="w-3.5 h-3.5 text-[#C97FB5]" />
                  <span>تواصل معي</span>
                </div>
              </div>

              <div className="hero">
                <div className="hero-tag">على السوشيال ميديا</div>
                <h1 className="hero-title">
                  تابعني
                  <br />
                  <span>وتواصل معي ✦</span>
                </h1>
                <p className="hero-sub">أشارك نصائح، أعمال، وكواليس العمل الرقمي</p>
              </div>

              {/* Social Channels items */}
              <div className="section-header">
                <div className="section-dot" />
                <div className="section-title">قنواتي</div>
                <div className="section-line" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-[28px] max-w-4xl mx-auto" id="social-cards-wrapper">
                {/* WHATSAPP */}
                <a
                  href="https://wa.me/966592843956"
                  className="social-card animate-fade-in"
                  style={{
                    '--card-bg': 'rgba(37,211,102,0.06)',
                    '--card-border': 'rgba(37,211,102,0.18)',
                    '--card-bg-hover': 'rgba(37,211,102,0.12)',
                    '--card-border-hover': 'rgba(37,211,102,0.35)',
                    '--card-hover-shadow': '0 8px 25px rgba(37,211,102,0.14)',
                  } as React.CSSProperties}
                  target="_blank"
                  rel="noreferrer"
                  id="social-wa-link"
                >
                  <div
                    className="social-icon"
                    style={{
                      backgroundColor: 'rgba(37,211,102,0.08)',
                      borderColor: 'rgba(37,211,102,0.15)',
                    }}
                  >
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="#25D366">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                  </div>
                  <div className="social-info">
                    <div className="social-name">واتساب مباشر</div>
                    <div className="social-handle">966592843956+</div>
                  </div>
                  <div className="social-action">راسلني ←</div>
                </a>

                {/* TELEGRAM */}
                <a
                  href="https://t.me/DigitalStoresSolutions"
                  className="social-card animate-fade-in"
                  style={{
                    '--card-bg': 'rgba(36,161,222,0.06)',
                    '--card-border': 'rgba(36,161,222,0.18)',
                    '--card-bg-hover': 'rgba(36,161,222,0.12)',
                    '--card-border-hover': 'rgba(36,161,222,0.35)',
                    '--card-hover-shadow': '0 8px 25px rgba(36,161,222,0.14)',
                  } as React.CSSProperties}
                  target="_blank"
                  rel="noreferrer"
                  id="social-tg-link"
                >
                  <div
                    className="social-icon"
                    style={{
                      backgroundColor: 'rgba(36,161,222,0.08)',
                      borderColor: 'rgba(36,161,222,0.15)',
                    }}
                  >
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="#24A1DE">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.07-.2-.08-.06-.19-.04-.27-.02-.12.02-1.96 1.25-5.54 3.69-.52.36-1 .53-1.42.52-.47-.01-1.37-.26-2.03-.48-.82-.27-1.47-.42-1.42-.88.03-.24.35-.49.97-.74 3.79-1.65 6.32-2.73 7.58-3.25 3.61-1.48 4.36-1.74 4.85-1.75.11 0 .35.03.5.16.13.12.17.29.19.41-.02.11-.01.25-.02.3z" />
                    </svg>
                  </div>
                  <div className="social-info">
                    <div className="social-name">حلول المتاجر الرقمية</div>
                    <div className="social-handle">@DigitalStoresSolutions</div>
                  </div>
                  <div className="social-action">اشترك الآن ←</div>
                </a>

                {/* EMAIL */}
                <a
                  href="mailto:ownerafaf@gmail.com"
                  className="social-card animate-fade-in"
                  style={{
                    '--card-bg': 'rgba(201,127,181,0.05)',
                    '--card-border': 'rgba(201,127,181,0.15)',
                    '--card-bg-hover': 'rgba(201,127,181,0.10)',
                    '--card-border-hover': 'rgba(201,127,181,0.30)',
                    '--card-hover-shadow': '0 8px 25px rgba(201,127,181,0.12)',
                  } as React.CSSProperties}
                  id="social-email-link"
                >
                  <div
                    className="social-icon"
                    style={{
                      backgroundColor: 'rgba(201,127,181,0.06)',
                      borderColor: 'rgba(201,127,181,0.12)',
                    }}
                  >
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#C97FB5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                  </div>
                  <div className="social-info">
                    <div className="social-name">البريد الإلكتروني</div>
                    <div className="social-handle">ownerafaf@gmail.com</div>
                  </div>
                  <div className="social-action">راسلني ←</div>
                </a>
              </div>

              {/* LINKTREE BIOGRAPHY SECTION */}
              <div className="section-header">
                <div className="section-dot bg-[#C97FB5] shadow-[0_0_10px_#C97FB5]" />
                <div className="section-title">روابط سريعة</div>
                <div className="section-line" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-[32px]" id="biolinks-card-wrapper">
                <button className="quick-link flex items-center justify-center gap-2" onClick={() => handleTabChange('services')} id="btn-quick-services">
                  <ShoppingBag className="w-4 h-4 text-[#C97FB5] shrink-0" />
                  <span>تصفّح خدماتي</span>
                </button>
                <button className="quick-link flex items-center justify-center gap-2" onClick={() => handleTabChange('portfolio')} id="btn-quick-portfolio">
                  <Briefcase className="w-4 h-4 text-[#A990D4] shrink-0" />
                  <span>البورتفوليو</span>
                </button>
                <a
                  href="https://t.me/DigitalStoresSolutions"
                  className="quick-link flex items-center justify-center gap-2 text-center no-underline md:col-span-2 border-[rgba(36,161,222,0.3)] bg-[rgba(36,161,222,0.06)] hover:bg-[rgba(36,161,222,0.1)] text-[#24A1DE] font-bold"
                  target="_blank"
                  rel="noreferrer"
                  id="link-quick-tg"
                >
                  <Send className="w-4 h-4 text-[#24A1DE] shrink-0" />
                  <span>اشترك في قناة تليجرام «حلول المتاجر الرقمية» ✦</span>
                </a>
                <a
                  href="https://wa.me/966592843956?text=هلا عفاف! أبي أتعاون معك 💼"
                  className="quick-link flex items-center justify-center gap-2 text-center no-underline md:col-span-2"
                  target="_blank"
                  rel="noreferrer"
                  id="link-quick-wa"
                >
                  <MessageSquare className="w-4 h-4 text-[#A990D4] shrink-0" />
                  <span>تواصل معي مباشرة</span>
                </a>
              </div>

              <footer className="mt-[20px] flex flex-col items-center">
                <span className="footer-logo">Afaf Saud ✦</span>
                <span className="flex flex-wrap items-center justify-center gap-1 mt-1 text-[11px] text-[#7A718E] px-4 text-center">
                  <span>خدمات التسويق والتصميم وحلول الأعمال</span>
                  <span>·</span>
                  <span className="flex items-center gap-0.5">
                    <MapPin className="w-3 h-3 text-[#C97FB5]" />
                    <span>المملكة العربية السعودية</span>
                  </span>
                </span>
                {renderFreelanceDocument(theme)}
              </footer>
            </div>
          )}
        </motion.main>
      </AnimatePresence>

      {/* Persistent Bottom Nav supporting 5 tabs */}
      <nav className="bottom-nav" id="bottom-persistent-navigation">
        <button
          className={`nav-btn ${activeTab === 'services' ? 'active' : ''}`}
          onClick={() => handleTabChange('services')}
          id="nav-btn-services"
        >
          <span className="nav-icon flex items-center justify-center mb-1">
            <ShoppingBag className="w-5 h-5" />
          </span>
          <span className="nav-label">خدماتي</span>
          <div className="nav-dot" />
        </button>

        <button
          className={`nav-btn ${activeTab === 'portfolio' ? 'active' : ''}`}
          onClick={() => handleTabChange('portfolio')}
          id="nav-btn-portfolio"
        >
          <span className="nav-icon flex items-center justify-center mb-1">
            <Briefcase className="w-5 h-5" />
          </span>
          <span className="nav-label">أعمالي</span>
          <div className="nav-dot" />
        </button>

        <button
          className={`nav-btn ${activeTab === 'coupons' ? 'active' : ''}`}
          onClick={() => handleTabChange('coupons')}
          id="nav-btn-coupons"
        >
          <span className="nav-icon flex items-center justify-center mb-1">
            <Percent className="w-5 h-5" />
          </span>
          <span className="nav-label">الكوبونات</span>
          <div className="nav-dot" />
        </button>

        <button
          className={`nav-btn ${activeTab === 'faq' ? 'active' : ''}`}
          onClick={() => handleTabChange('faq')}
          id="nav-btn-faq"
        >
          <span className="nav-icon flex items-center justify-center mb-1">
            <Lightbulb className="w-5 h-5" />
          </span>
          <span className="nav-label">أسئلة</span>
          <div className="nav-dot" />
        </button>

        <button
          className={`nav-btn ${activeTab === 'social' ? 'active' : ''}`}
          onClick={() => handleTabChange('social')}
          id="nav-btn-social"
        >
          <span className="nav-icon flex items-center justify-center mb-1">
            <MessageCircle className="w-5 h-5" />
          </span>
          <span className="nav-label">تواصل</span>
          <div className="nav-dot" />
        </button>
      </nav>

      {/* Back to Top Smooth Floating Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 15 }}
            onClick={scrollToTop}
            className="fixed left-8 bottom-[96px] md:left-8 md:bottom-8 z-[750] w-12 h-12 rounded-full flex items-center justify-center bg-[var(--bg2)] border border-[var(--border)] text-[var(--pur-light)] hover:bg-[var(--bg3)] hover:text-[var(--accent)] transition-all cursor-pointer shadow-lg group focus:outline-none focus:ring-2 focus:ring-[#C97FB5]/50"
            id="back-to-top-btn"
            title="العودة للأعلى"
            aria-label="العودة للأعلى"
            whileHover={{ y: -3, scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <ChevronUp className="w-6 h-6 transition-transform duration-300 group-hover:-translate-y-0.5" />
          </motion.button>
        )}
      </AnimatePresence>

    </div>
  );
}
