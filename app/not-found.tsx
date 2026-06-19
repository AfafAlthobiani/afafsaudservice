import React from 'react';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#0C0B10] text-[#EDE9F5] flex flex-col items-center justify-center p-4 text-center select-none" style={{ direction: 'rtl' }}>
      <div className="absolute top-0 left-0 right-0 h-96 bg-gradient-to-b from-[rgba(201,127,181,0.06)] to-transparent pointer-events-none" />
      <div className="relative z-10 max-w-md mx-auto space-y-6">
        <div className="text-8xl font-black tracking-widest text-[#C97FB5] font-sans drop-shadow-[0_0_35px_rgba(201,127,181,0.15)] animate-pulse">
          404
        </div>
        <div className="space-y-2">
          <h2 className="text-2xl font-extrabold text-[#EDE9F5]">عذراً، الصفحة غير موجودة!</h2>
          <p className="text-[#a299b8] text-sm leading-relaxed">
            ربما تم نقل الصفحة أو أن الرابط المستخدم غير صحيح. لا تقلق، يمكنك العودة واستكشاف خدمات الهويات الرقمية وبناء المتاجر مجداً.
          </p>
        </div>
        <div className="pt-4">
          <Link
            href="/"
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#7e68ab] to-[#C97FB5] text-white font-bold text-sm shadow-lg shadow-[#C97FB5]/10 hover:shadow-[#C97FB5]/20 hover:scale-[1.02] transition-all inline-block"
          >
            العودة للرئيسية ✦
          </Link>
        </div>
      </div>
    </div>
  );
}
