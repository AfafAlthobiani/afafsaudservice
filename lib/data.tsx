import React from 'react';
import Image from 'next/image';
import { ServiceItem, PortfolioItem, FaqItem } from './types';

export const services: ServiceItem[] = [
  {
    id: 'svc-1',
    num: 'SERVICE · 01 · يوم عمل ⏱ 7-10',
    name: 'بناء متجر إلكتروني متكامل وجاهز للإطلاق',
    desc: 'إنشاء متجر إلكتروني احترافي على منصة سلة، زد، أو Shopify — مع التركيز على مرونة الاستخدام وتوفير تجربة تصفح مريحة.',
    duration: '⏱ 7-10 أيام',
    price: 650,
    oldPrice: 1500,
    featured: true,
    badge: '🔥 الأكثر طلباً',
    includes: [
      'تصميم الواجهة بما يتناسب مع ألوان وهواية علامتك التجارية',
      'إعداد الصفحات التعريفية والتنظيمية (الرئيسية، من نحن، سياسة الاستبدال والاسترجاع، الشروط)',
      'رفع 10 منتجات مع صياغة واضحة للمواصفات',
      'تهيئة بوابات الدفع الأساسية وتفعيل خيارات الشحن المتاحة',
      'ضبط نظام إرسال تنبيهات السلات المتروكة وباقي الإشعارات التقنية المتوفرة بالمنصة',
      'تحسينات أساسية لمحركات البحث (On-Page SEO)',
      'اختبار وفحص شامل لكافة مسارات الشراء لتفادي أي عوائق تقنية قبل التسليم',
    ],
    suitable: ['المشاريع الجديدة', 'إعادة تطوير المتاجر', 'متاجر الدروبشيبينغ'],
    waText: 'هلا! أبي خدمة بناء متجر إلكتروني متكامل 🛒',
    icon: '🛒',
    stripeClass: 'accent-stripe',
    iconClass: 'accent-icon',
    badgeClass: 'hot',
    category: 'store'
  },
  {
    id: 'svc-3',
    num: 'SERVICE · 03 . يوم عمل ⏱ 10 - 15',
    name: 'باقة الهوية البصرية والاستراتيجية الرقمية',
    desc: 'صناعة هوية بصرية مميزة ومتكاملة تعزز حضور علامتك التجارية، مصحوبة بخطة محتوى وقنوات تواصل واضحة.',
    duration: '⏱ 10-14 يوم',
    price: 2500,
    oldPrice: 3125,
    featured: false,
    includes: [
      'تصميم هوية بصرية مخصصة (الشعار البديل والأساسي، لوحة الألوان والخطوط المتناسقة)',
      'إعداد كتاب دليل استخدام الهوية لضمان ثبات المظهر البصري لعلامتك (Brand Guidelines)',
      'توفير قوالب جاهزة ومعدّة للاستخدام بمواقع التواصل الاجتماعي',
      'رسم ملامح استراتيجية محتوى وأفكار منشورات لشهر كامل لتعزيز التواصل',
      'تحديد نبرة وفلسفة التحدث الممثلة لبراندك مع الجمهور المستهدف',
      'توجيه استشاري لتطبيق الهوية بشكل صحيح على المتجر والمنصات المختلفة',
    ],
    suitable: ['المشاريع الناشئة', 'إعادة هيكلة الهوية (Rebranding)', 'المشاريع غير الواضحة بصرياً'],
    waText: 'هلا! أبي باقة الهوية البصرية والاستراتيجية الرقمية ✨',
    icon: '✨',
    category: 'brand_design'
  },
  {
    id: 'svc-4',
    num: 'SERVICE · 04 . ســاعة عـمل ⏱ 10 - 15',
    name: 'كتابة مواصفات وأوصاف المنتجات لـ SEO والتسويق',
    desc: 'نعيد صياغة وكتابة تفاصيل منتجاتك بطريقة توازن بين وضوح الفائدة التسويقية للزبائن والتهيئة الفنية لتسهيل ظهورها بمحركات البحث.',
    duration: '✦ جديد',
    price: 35,
    oldPrice: 50,
    featured: false,
    badge: '✦ جديد',
    includes: [
      'صياغة عنوان مميز وجاذب مدعم بالكلمات المفتاحية الطبيعية',
      'تقديم مقدمة قصيرة تعرض أهم ميزة وقيمة للمنتج فورياً',
      'توفير تفاصيل كاملة تسرد المميزات وطرق الاستخدام والفوائد الفعلية',
      'توزيع ذكي ومرن للكلمات البحثية الأكثر أهمية لمجالك دون تكرار مزعج',
      'تنسيق وقراءة النصوص داخل نقاط مرئية مريحة لعين المتصفح على الجوال',
      'إدراج دعوة قوية وواضحة لاتخاذ إجراء (CTA) متناسقة مع طبيعة المتجر',
    ],
    suitable: ['متاجر سلة', 'متاجر زد', 'متاجر Shopify', 'كافة المنصات والمواقع المخصصة'],
    waText: 'هلا! أبي خدمة وصف منتجات SEO 🔎',
    icon: '🔎',
    stripeClass: 'green-stripe',
    iconClass: 'green-icon',
    badgeClass: 'new-badge',
    labelClass: 'green-label',
    listClass: 'green-list',
    priceClass: 'green-price',
    category: 'store'
  },
  {
    id: 'svc-5',
    num: 'SERVICE · 05 · يوم عمل ⏱ 30 - 01',
    name: 'دعم وتشغيل المتجر الإلكتروني لمدة 30 يوم',
    desc: 'إشراف ومراقبة مستمرة وسد الاحتياج التشغيلي اليومي لمتجرك — تفرغ لأعمالك ودع إدارة التفاصيل التقنية والروتينية للمتجر على كفاءة متخصصة مع تزويدك بتقارير متابعة دورية.',
    duration: '✦ جديد',
    price: 1000,
    oldPrice: 1200,
    featured: true,
    badge: '✦ جديد',
    includes: [
      'ترتيب وتنظيم ورفع ومتابعة المنتجات والبيانات الجديدة بالمتجر',
      'تصميم وتحديث البنرات الخاصة بالحملات أو العروض (بحد أقصى 4 بنرات شهرياً)',
      'تسهيل المتابعة الفنية للطلبات الواردة وتنسيق وتحديث حالاتها',
      'مراجعة مستمرة لمطابقة أجزاء المتجر لاحتياج وخبرة العميل المستهدف والتعديل طبقاً لها',
      'إنشاء ومتابعة وتعديل فترات كوبونات الخصم والخصومات المباشرة بالمنصات',
      'المساعدة في تهيئة وتنسيق صفحات الهبوط الترويجية لمنتجاتك البطلة',
      'مراقبة الأداء وتقديم تقرير واقتراحات لتحسين معدلات الشراء والمظهر التقني للمتجر',
    ],
    suitable: ['المتاجر القائمة', 'رواد الأعمال وأصحاب المشاريع المشغولين', 'صناع العلامات التجارية الباحثين عن النمو المستقر'],
    waText: 'هلا! أبي خدمة إدارة المتجر الإلكتروني لمدة 30 يوم 📦',
    icon: '📦',
    stripeClass: 'accent-stripe',
    iconClass: 'accent-icon',
    badgeClass: 'new-badge',
    category: 'store'
  },
  {
    id: 'svc-6',
    num: 'SERVICE · 06 . يوم عمل ⏱ 05 - 08',
    name: 'تصميم وبناء 15 منشور لمنصات التواصل الاجتماعي',
    desc: 'حسابات علامتك هي بوابتك الأساسية للجمهور — نعد ونصمم 15 نموذجاً يجسد فلسفة علامتك ويرتقي بأسلوب تقديم رسائلك.',
    duration: '✦ جديد',
    price: 450,
    oldPrice: 500,
    featured: false,
    badge: '✦ جديد',
    includes: [
      'تصميم نماذج عصرية ومريحة للرؤية ومتناسقة هيكلياً',
      'التزام دقيق بتطبيقات الهوية البصرية وشعار علامتك على المنشورات',
      'تسليم بجودة مرتفعة وصياغة فوتوغرافية رائعة جاهزة فورياً للنشر والمشاركة',
      'موائمة تنسيق الخطوط وتدرجات الألوان مع الخطوط المعتمدة بشركتك',
      'تصميم منشورات تسية وتوعوية تفاعلية تخدم غايات النشر',
      'تضمين بنرات تزيين وتدعيم واجهة المتاجر الإلكترونية',
    ],
    suitable: ['حسابات الإنستغرام', 'منصة سناب شات', 'موقع تيك توك وتويتر X', 'كافة المعارض الرقمية'],
    waText: 'هلا! أبي خدمة تصميم منشورات السوشيال ميديا 🎨',
    icon: '🎨',
    badgeClass: 'new-badge',
    category: 'brand_design'
  },
  {
    id: 'svc-7',
    num: 'SERVICE · 07 · يوم عمل ⏱ 04 - 07',
    name: 'تصميم صفحة هبوط لمنتج واحد (Landing Page)',
    desc: 'تصميم مميز ومعد لصفحة هبوط تركز على منتج محدد أو حملة دعائية محددة لتسهيل فهم خصائص السلعة وتيسير رغبة الشراء لدى متصفحي الحملة.',
    duration: '⏱ 4-7 أيام',
    price: 800,
    oldPrice: 1000,
    featured: true,
    badge: '💡 مميز',
    includes: [
      'تصميم متطور مهيأ ومريح لتصفح هواتف الجوال كأولوية قصوى',
      'صياغة نصوص وعناوين بأسلوب تسويقي يوضح الفائدة الحقيقية للمنتج',
      'تدفق سلس وواضح يحافظ على اهتمام الزائر ويشرح المشكلة والحل',
      'إنشاء نموذج مبسط لأخذ الطلبات وخيارات سريعة وتفاعلية لمسار البيع',
      'دمج وعرض الوسائط التوضيحية والصور بطرق مرتبة وبسيطة',
      'الموائمة التامة للتصميم مع الخطوط والألوان الرسمية لهويتك البصرية',
    ],
    suitable: ['الحملات الإعلانية الممولة', 'الترويج للمنتج الأكثر شعبية (Hero Product)', 'مشاريع اختبار السوق والمنتجات المعينة'],
    waText: 'هلا! أبي خدمة تصميم صفحة هبوط لمنتج 🚀',
    icon: '🚀',
    stripeClass: 'accent-stripe',
    iconClass: 'accent-icon',
    badgeClass: 'new-badge',
    category: 'landing_web'
  },
  {
    id: 'svc-8',
    num: 'SERVICE · 08 · يوم عمل ⏱ 07 - 12',
    name: 'بناء وتصميم موقع تعريفي متكامل للمؤسسات والشركات',
    desc: 'تصميم وتطوير موقع ويب تعريفي يعبر بصدق واحترافية وبشكل ملموس عن خدمات شركتك ومجال تميزها لرفع رصيد الثقة المهنية أمام الشركاء والعملاء.',
    duration: '⏱ 7-12 يوم',
    price: 1500,
    oldPrice: 1900,
    featured: true,
    badge: '💼 للشركات',
    includes: [
      'تصميم هيكلي واجهات متطابق بالكامل ومخصص برمجياً (Figma)',
      'صفحات أساسية مكتملة (الرئيسية، من نحن، باقة الخدمات، استعراض أعمالنا أو المشاريع، تواصل معنا)',
      'ربط وبناء نماذج للمراسلة واستمارات ممتازة لطلب عروض الأسعار أو الاستشارات',
      'مواءمة كاملة لظهور مريح على الشاشات اللوحية وتجربة الجوال الرائعة',
      'تكامل الروابط مع وسائل التواصل ومواقع الخرائط لتسهيل الوصول الفعلي لفرعك',
      'التهيئة الأساسية لمتطلبات الصداقة مع محركات البحث لمساعدة الزبائن في العثور عليك',
      'توفير تدريب أو لوحة تحكم ميسرة تمكنك من تعديل نصوص المقالات أو المشاريع مستقبلاً بكل استقلالية',
    ],
    suitable: ['الشركات المتوسطة والصغيرة والناشئة', 'مكاتب تقديم الاستشارات ومزودي الخدمات المهنية', 'المؤسسات الفردية الساعية للظهور الموثوق'],
    waText: 'هلا! أبي خدمة تصميم موقع تعريفي لشركة أو مؤسسة 💼',
    icon: '💼',
    stripeClass: 'accent-stripe',
    iconClass: 'accent-icon',
    badgeClass: 'new-badge',
    category: 'landing_web'
  }
];

export const portfolioItems: PortfolioItem[] = [
  {
    id: 'port-1',
    cat: 'store',
    type: 'متجر إلكتروني - سلة',
    name: 'متجر مَدار - ستريت وير عصري',
    tags: ['سلة', 'صفحة رئيسية', 'صفحة منتج', 'ربط دفع'],
    mockType: 'store',
    wide: true,
    buyUrl: 'https://salla.store/ar/stores/1916816108',
    customMockUp: (
      <div className="port-mock-inner !p-0 w-full h-full overflow-hidden relative">
        <Image 
          src="https://i.imgur.com/xPfHVgu.png" 
          alt="متجر مَدار" 
          fill
          className="object-cover select-none" 
          referrerPolicy="no-referrer"
        />
      </div>
    )
  },
  {
    id: 'port-2',
    cat: 'brand',
    type: 'هوية بصرية',
    name: 'براند Nada Studio',
    tags: ['شعار', 'ألوان', 'قوالب'],
    mockType: 'brand',
    customMockUp: (
      <div className="port-mock-inner !p-0 w-full h-full overflow-hidden relative">
        <Image 
          src="https://i.imgur.com/VFCVLrn.png" 
          alt="براند Nada Studio" 
          fill
          className="object-cover select-none" 
          referrerPolicy="no-referrer"
        />
      </div>
    )
  },
  {
    id: 'port-4',
    cat: 'store',
    type: 'متجر إلكتروني',
    name: 'متجر ملابس أطفال — زد',
    tags: ['زد', 'CSS مخصص'],
    mockType: 'store',
    status: 'تحت التنفيذ',
    customMockUp: (
      <div className="port-mock-inner">
        <div className="w-[65%] h-[5px] rounded-[3px] bg-[rgba(169,144,212,0.2)] mb-[7px]" />
        <div className="w-[75%] grid grid-cols-2 gap-[4px]">
          <div className="h-[30px] rounded-[5px] bg-[rgba(201,127,181,0.12)] border border-[rgba(201,127,181,0.08)]" />
          <div className="h-[30px] rounded-[5px] bg-[rgba(126,104,171,0.15)] border border-[rgba(126,104,171,0.1)]" />
          <div className="h-[30px] rounded-[5px] bg-[rgba(126,104,171,0.1)]" />
          <div className="h-[30px] rounded-[5px] bg-[rgba(201,127,181,0.08)]" />
        </div>
        <div className="absolute bottom-[8px] left-[50%] -translate-x-[50%] text-[8px] text-[#7A718E] tracking-[1px] whitespace-nowrap">KIDS STORE · زد</div>
      </div>
    )
  },
  {
    id: 'port-5',
    cat: 'brand',
    type: 'هوية بصرية',
    name: 'براند Qīra — أزياء محتشمة',
    tags: ['شعار', 'Brand Guide'],
    mockType: 'brand',
    customMockUp: (
      <div className="port-mock-inner !p-0 w-full h-full overflow-hidden relative">
        <Image 
          src="https://i.imgur.com/memaUyt.png" 
          alt="براند Qīra — أزياء محتشمة" 
          fill
          className="object-cover select-none" 
          referrerPolicy="no-referrer"
        />
      </div>
    )
  },
  {
    id: 'port-7',
    cat: 'posts',
    type: 'منشورات رقمية',
    name: 'باقة منشورات انستقرام — متجر مجوهرات',
    tags: ['انستغرام', 'محتوى وبصريات', 'فوتوشوب'],
    mockType: 'posts',
    customMockUp: (
      <div className="port-mock-inner flex-row gap-[10px] px-[12px]">
        <div className="w-[60px] h-[60px] rounded-[6px] border border-[rgba(126,104,171,0.15)] bg-[rgba(201,127,181,0.05)] flex flex-col items-center justify-center relative overflow-hidden">
          <div className="w-[20px] h-[20px] rounded-full border-2 border-amber-400 opacity-80 mb-[4px] relative">
            <div className="absolute top-[-2px] left-[7px] w-[4px] h-[4px] rounded-full bg-white shadow-sm" />
          </div>
          <div className="w-[30px] h-[3px] rounded-[1px] bg-[rgba(126,104,171,0.2)] mb-[2px]" />
          <div className="w-[20px] h-[2px] rounded-[1px] bg-[rgba(126,104,171,0.15)]" />
        </div>
        <div className="w-[60px] h-[60px] rounded-[6px] border border-[rgba(201,127,181,0.2)] bg-[rgba(126,104,171,0.08)] flex flex-col items-center justify-center relative overflow-hidden">
          <div className="font-serif text-[18px] text-[#C97FB5] leading-none mb-[2px] font-bold">50%</div>
          <div className="text-[7px] text-[#A990D4] font-medium tracking-[0.5px]">خصم خاص</div>
          <div className="w-[35px] h-[2px] rounded-[1px] bg-amber-400 mt-[4px]" />
        </div>
        <div className="w-[60px] h-[60px] rounded-[6px] border border-[rgba(126,104,171,0.15)] bg-[rgba(201,127,181,0.05)] flex flex-col items-center justify-center relative overflow-hidden">
          <div className="text-[10px] text-[#A990D4] mb-[2px]">✦ ✦ ✦</div>
          <div className="w-[40px] h-[4px] rounded-[2px] bg-[rgba(126,104,171,0.3)] mb-[2px]" />
          <div className="w-[25px] h-[3px] rounded-[2px] bg-[rgba(126,104,171,0.15)]" />
        </div>
      </div>
    )
  },
  {
    id: 'port-8',
    cat: 'posts',
    type: 'منشورات رقمية',
    name: 'منشور ترويجي سناب شات — عطور غسق',
    tags: ['سناب شات', 'إعلان ممول', 'موشن ستيل'],
    mockType: 'posts',
    customMockUp: (
      <div className="port-mock-inner">
        <div className="w-[65px] h-[115px] rounded-[12px] border-2 border-[rgba(126,104,171,0.3)] bg-[rgba(15,10,25,0.7)] p-[5px] flex flex-col items-center justify-between relative overflow-hidden shadow-lg">
          <div className="w-[22px] h-[4px] rounded-[2px] bg-[rgba(126,104,171,0.25)] mx-auto mt-[2px]" />
          
          <div className="flex flex-col items-center flex-1 justify-center my-[6px]">
            <div className="w-[18px] h-[32px] rounded-[3px] bg-gradient-to-b from-[#A990D4] to-[#C97FB5] opacity-80 flex items-center justify-center mb-[4px] relative">
              <div className="w-[4px] h-[4px] bg-white rounded-full opacity-60 absolute top-[4px] left-[7px]" />
            </div>
            <div className="text-[6px] text-white opacity-90 tracking-[1px] font-bold">GHASAQ</div>
            <div className="text-[4px] text-amber-300 opacity-80 scale-90">عطر الليل الفاخر</div>
          </div>

          <div className="w-full flex flex-col items-center gap-[2px]">
            <div className="w-[12px] h-[5px] border-t border-[rgba(201,127,181,0.5)] flex items-center justify-center">
              <span className="text-[4px] text-[#C97FB5] scale-75 animate-bounce">▲</span>
            </div>
            <div className="w-full py-[1.5px] rounded-[3px] bg-gradient-to-r from-[#7e68ab] to-[#C97FB5] text-[4.5px] text-white text-center font-semibold scale-95 shadow-sm">
              اطلب الآن
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 'port-9',
    cat: 'banners',
    type: 'بنرات متاجر',
    name: 'بنر عريض لمتجر قهوة مختصة وعريقة',
    tags: ['واجهة المتجر', 'بنر رئيسي', 'فوتوشوب'],
    mockType: 'banners',
    wide: true,
    customMockUp: (
      <div className="port-mock-inner flex-row justify-between px-[25px] relative">
        <div className="flex flex-col items-start text-right max-w-[55%] font-ibm">
          <div className="text-[5px] text-amber-500 font-bold uppercase tracking-[1px] mb-[2px]">COFFEE CRUDE · قهوة خام</div>
          <div className="text-[12px] text-white font-extrabold tracking-[-0.5px] leading-tight mb-[4px] drop-shadow">
            مزاجك الصباحي، <span className="text-amber-400">محمص بحُب</span>
          </div>
          <div className="w-[110px] h-[4px] rounded-[2px] bg-[rgba(255,255,255,0.08)] mb-[6px] overflow-hidden">
            <div className="w-[60%] h-full bg-amber-500 rounded-[2px]" />
          </div>
          <div className="px-[8px] py-[3px] rounded-[4px] bg-amber-500 text-white font-semibold text-[6px] shadow-sm">
            اكتشف المحاصيل
          </div>
        </div>
        
        <div className="relative flex items-center justify-center shrink-0 w-[55px] h-[65px] rounded-[8px] border border-[rgba(251,191,36,0.15)] bg-gradient-to-br from-[#1b1411] to-[#0d0908] shadow-md mr-[10px]">
          <div className="w-[18px] h-[34px] bg-amber-900/10 border border-amber-600/30 rounded-[3px] flex flex-col items-center justify-between p-[2px] shadow-sm relative overflow-hidden">
            <div className="w-[12px] h-[8px] rounded-[1px] bg-[#C97FB5]/10 border border-[#C97FB5]/20 flex items-center justify-center">
              <span className="text-[3px] text-amber-400 font-bold tracking-[0.2px] scale-90">SEED</span>
            </div>
            <div className="w-[14px] h-[2px] bg-[rgba(126,104,171,0.2)]" />
          </div>
          <div className="absolute top-[6px] right-[6px] text-[#A990D4] text-[8px] opacity-25">✦</div>
          <div className="absolute bottom-[6px] left-[6px] text-[#C97FB5] text-[6px] opacity-25">✦</div>
        </div>
      </div>
    )
  },
  {
    id: 'port-10',
    cat: 'banners',
    type: 'بنرات متاجر',
    name: 'بنرات تفاعلية لهوية عروض التأسيس',
    tags: ['بنر ترويجي', 'هوية وطنية', 'عرض بطل'],
    mockType: 'banners',
    customMockUp: (
      <div className="port-mock-inner flex-row gap-[10px] px-[12px]">
        <div className="w-[90px] h-[80px] rounded-[8px] border border-[rgba(126,104,171,0.15)] bg-gradient-to-br from-[#1c1210] to-[#120a08] flex flex-col items-center justify-between p-[8px] relative overflow-hidden">
          <div className="absolute top-[-20px] right-[-20px] w-[50px] h-[50px] rounded-full bg-[rgba(196,139,96,0.05)] border border-[rgba(196,139,96,0.08)]" />
          
          <div className="w-full flex justify-between items-center z-10">
            <span className="text-[5px] text-[rgba(196,139,96,0.8)] tracking-[0.5px]">يوم التأسيس 1727م</span>
            <span className="text-[6px] text-white font-extrabold text-amber-500">✦</span>
          </div>
          
          <div className="flex flex-col items-center my-[4px] z-10">
            <div className="text-[10px] text-amber-100 font-extrabold tracking-wide text-center leading-[1.2]">عروض تليق بـ</div>
            <div className="text-[12px] text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-[#C97FB5] font-black text-center leading-[1.1]">ثلاثة قرون من العز</div>
          </div>

          <div className="w-full py-[2px] rounded-[4px] bg-[rgba(196,139,96,0.15)] border border-[rgba(196,139,96,0.25)] text-center text-[5.5px] text-[#E4C3A3] font-bold tracking-[0.5px] z-10 scale-95 uppercase">
            شاهد العروض الخاصة
          </div>
        </div>
      </div>
    )
  },
  {
    id: 'port-11',
    cat: 'themes',
    type: 'ثيم مطور سلة (قريباً)',
    name: 'ثيم "أرجوان" التفاعلي الفاخر لمتاجر التجميل والعبايات',
    tags: ['سلة', 'أكواد CSS مخصصة', 'تطوير حركي CSS', 'قريباً ⏱'],
    mockType: 'themes',
    wide: true,
    customMockUp: (
      <div className="port-mock-inner flex flex-row justify-between px-[20px] relative items-center w-full">
        <div className="flex flex-col items-start text-right max-w-[50%]">
          <div className="text-[5.5px] text-[#C97FB5] font-bold tracking-[1px] mb-[1px]">ORJUAN DEVELOPED THEME</div>
          <div className="text-[11.5px] text-white font-extrabold tracking-tight leading-tight mb-[4px]">
            تجربة مستخدم <span className="text-[#C97FB5]">فلترة سريعة وتصميم فخم</span>
          </div>
          <div className="flex gap-[4px] mt-[2px]">
            <div className="w-[45px] h-[14px] rounded-[4px] bg-[#C97FB5] flex items-center justify-center text-[5.5px] font-bold text-white shadow-md">تسوق الآن</div>
            <div className="w-[35px] h-[14px] rounded-[4px] border border-[rgba(201,127,181,0.3)] bg-[rgba(201,127,181,0.05)] flex items-center justify-center text-[5.5px] text-[#EDE9F5]">المزيد</div>
          </div>
        </div>
        
        <div className="flex flex-col gap-[4px] w-[95px] items-stretch pr-[10px]">
          <div className="p-[5px] rounded-[6px] border border-[rgba(201,127,181,0.2)] bg-[rgba(126,104,171,0.1)] flex items-center gap-[6px]">
            <div className="w-[20px] h-[20px] rounded-[4px] bg-[rgba(126,104,171,0.2)] shrink-0 animate-pulse" />
            <div className="flex-1 flex flex-col gap-[3px]">
              <div className="w-[40px] h-[4px] rounded-[2px] bg-[rgba(255,255,255,0.7)]" />
              <div className="w-[20px] h-[3px] rounded-[1.5px] bg-[#C97FB5]" />
            </div>
          </div>
          <div className="p-[5px] rounded-[6px] border border-[rgba(126,104,171,0.1)] bg-[rgba(126,104,171,0.05)] flex items-center gap-[6px]">
            <div className="w-[20px] h-[20px] rounded-[4px] bg-[rgba(126,104,171,0.15)] shrink-0" />
            <div className="flex-1 flex flex-col gap-[3px]">
              <div className="w-[30px] h-[4px] rounded-[2px] bg-[rgba(255,255,255,0.4)]" />
              <div className="w-[15px] h-[3px] rounded-[1.5px] bg-[#7e68ab]" />
            </div>
          </div>
        </div>
        <div className="absolute top-[8px] right-[12px] text-[7px] text-[#EDE9F5]/40 font-mono">سلة مخصصة ✦</div>
      </div>
    )
  },
  {
    id: 'port-12',
    cat: 'themes',
    type: 'ثيم مطور زد (قريباً)',
    name: 'ثيم "تسامي" الفخم لمتاجر المجوهرات والعطور الفاخرة',
    tags: ['زد', 'سلة الشراء السريعة', 'تصميم متجاوب', 'قريباً ⏱'],
    mockType: 'themes',
    customMockUp: (
      <div className="port-mock-inner p-[12px] flex flex-col items-center justify-center">
        <div className="text-[7.5px] text-amber-400 font-bold uppercase tracking-[1.5px] mb-[4px]">TASAMI UNIQUE</div>
        <div className="w-[40px] h-[40px] rounded-full border border-amber-500/30 flex items-center justify-center bg-[rgba(251,191,36,0.03)] mb-[6px] relative shadow-inner">
          <span className="text-[12px] text-amber-400 animate-pulse">✦</span>
        </div>
        <div className="w-[70%] h-[4px] rounded-[2px] bg-[rgba(255,255,255,0.25)] mb-[4px]" />
        <div className="w-[45%] h-[3.5px] rounded-[1.5px] bg-amber-400/75" />
        
        <div className="mt-[8px] flex gap-[4px] justify-center items-center">
          <div className="w-[4px] h-[4px] rounded-full bg-amber-400" />
          <div className="w-[4px] h-[4px] rounded-full bg-white/20" />
          <div className="w-[4px] h-[4px] rounded-full bg-white/20" />
        </div>
      </div>
    )
  },
  {
    id: 'port-13',
    cat: 'themes',
    type: 'ثيم مطور سلة (قريباً)',
    name: 'ثيم "موج" للمتاجر العصرية وعلامات الأزياء والستريت وير',
    tags: ['سلة', 'فلترة متقدمة للسمات', 'تأثير الهوفر التفاعلي', 'قريباً ⏱'],
    mockType: 'themes',
    customMockUp: (
      <div className="port-mock-inner flex flex-col items-center justify-center">
        <div className="w-[75%] h-[42px] rounded-[6px] border border-cyan-500/20 bg-cyan-950/10 flex flex-col justify-between p-[5px] relative overflow-hidden">
          <div className="flex gap-[4px] items-center">
            <span className="w-[5px] h-[5px] rounded-full bg-cyan-500 animate-pulse" />
            <div className="w-[30px] h-[3px] rounded-[1.5px] bg-white/40" />
          </div>
          
          <div className="flex-1 flex flex-col justify-center items-start mt-[4px]">
            <div className="w-[48px] h-[5px] rounded-[2px] bg-gradient-to-r from-cyan-400 to-[#C97FB5] mb-[2px]" />
            <div className="w-[30px] h-[3px] rounded-[1.5px] bg-white/25" />
          </div>
        </div>
        <div className="w-[75%] grid grid-cols-3 gap-[4px] mt-[5px]">
          <div className="h-[14px] rounded-[3px] bg-[rgba(255,255,255,0.05)] border border-white/5" />
          <div className="h-[14px] rounded-[3px] bg-[rgba(6,182,212,0.1)] border border-cyan-500/20" />
          <div className="h-[14px] rounded-[3px] bg-[rgba(255,255,255,0.05)] border border-white/5" />
        </div>
        <div className="absolute bottom-[4px] font-display text-[7px] text-cyan-400 opacity-60">MAWJ THEME ✦</div>
      </div>
    )
  },
  {
    id: 'port-14',
    cat: 'websites',
    type: 'صفحة هبوط تسويقية',
    name: 'صفحة هبوط إبداعية لتطبيق "وصل" للتوصيل السريع',
    tags: ['صفحة هبوط', 'تفاعل حركي', 'تصميم متجاوب', 'ألوان'],
    mockType: 'websites',
    wide: true,
    customMockUp: (
      <div className="port-mock-inner flex flex-row justify-between px-[20px] relative items-center w-full">
        <div className="flex flex-col items-start text-right max-w-[55%]">
          <div className="text-[5.5px] text-[#A990D4] font-bold tracking-[1.5px] mb-[1px]">WASSAL LANDING PAGE</div>
          <div className="text-[12px] text-white font-extrabold tracking-tight leading-tight mb-[4.5px]">
            طلبك يوصلك <span className="text-[#A990D4]">بلمح البصر وبأقل تكلفة</span>
          </div>
          <div className="flex gap-[4px] mt-[2px]">
            <div className="w-[50px] h-[14px] rounded-[4px] bg-gradient-to-r from-[#A990D4] to-[#C97FB5] flex items-center justify-center text-[5px] font-bold text-white shadow-md">حمل التطبيق</div>
            <div className="w-[35px] h-[14px] rounded-[4px] border border-[rgba(169,144,212,0.3)] bg-[rgba(169,144,212,0.05)] flex items-center justify-center text-[5px] text-[#EDE9F5]">اكتشف المزيد</div>
          </div>
        </div>
        
        <div className="relative flex items-center justify-center shrink-0 w-[55px] h-[75px] rounded-[10px] border border-white/10 bg-gradient-to-br from-[#121019] to-[#0A090F] shadow-lg">
          <div className="w-[15px] h-[30px] bg-gradient-to-b from-[#A990D4] to-[#C97FB5] rounded-[2px] flex flex-col justify-between p-[2px]">
            <div className="w-[4px] h-[4px] rounded-full bg-white/40" />
            <div className="w-[10px] h-[1.5px] rounded-[0.5px] bg-white/70 self-center" />
          </div>
        </div>
      </div>
    )
  },
  {
    id: 'port-15',
    cat: 'websites',
    type: 'موقع تعريفي متكامل',
    name: 'الموقع الرسمي لمكتب الرواد للمحاماة والاستشارات القانونية',
    tags: ['صفحة رئيسية', 'باقة خدمات', 'استمارة تواصل', 'Figma'],
    mockType: 'websites',
    customMockUp: (
      <div className="port-mock-inner p-[12px] flex flex-col items-center justify-center">
        <div className="text-[7.5px] text-zinc-400 font-bold uppercase tracking-[1.5px] mb-[4px]">AL-RUWAD LAW</div>
        <div className="w-[36px] h-[36px] rounded-lg border border-zinc-500/20 flex flex-col items-center justify-center bg-[rgba(255,255,255,0.02)] mb-[6px] relative">
          <span className="text-[10px] text-zinc-300">⚖</span>
        </div>
        <div className="w-[80%] h-[3.5px] rounded-[1px] bg-zinc-400/50 mb-[3px]" />
        <div className="w-[50%] h-[3px] rounded-[1px] bg-zinc-500/30" />
        <div className="mt-[8px] w-full flex justify-center">
          <span className="text-[5.5px] text-[#C97FB5] border border-[#C97FB5]/30 bg-[#C97FB5]/5 px-2 py-0.5 rounded-full">استشارة مجانية</span>
        </div>
      </div>
    )
  }
];

export const faqItems: FaqItem[] = [
  {
    q: 'كم يستغرق تنفيذ خدمة بناء المتجر؟',
    a: 'يستغرق بناء المتجر الاحترافي عادةً من 7 إلى 10 أيام عمل، وذلك بعد استلام جميع المعلومات والمواد المطلوبة منك. قد يختلف الوقت بناءً على حجم المتجر ودرجة التخصيص المطلوبة.'
  },
  {
    q: 'ما هي المنصات التي تعملون عليها؟',
    a: 'نعمل على كل منصات التجارة الإلكترونية الرائدة: سلة، زد، وShopify. يمكننا كذلك العمل على منصات أخرى عند الطلب. تواصل معنا لمناقشة احتياجاتك وسنوجهك لأفضل منصة لمشروعك.'
  },
  {
    q: 'هل يمكنني طلب أكثر من خدمة بنفس الوقت？',
    a: 'بالتأكيد! بل يُنصح بذلك لأنك ستحصل على خصم إضافي عند جمع أكثر من خدمة. تواصل معنا عبر واتساب لمعرفة العروض المتاحة وأفضل باقة تناسب احتياجاتك.'
  },
  {
    q: 'ما هي طريقة الدفع المتاحة؟',
    a: 'يُدفع 50% عند بدء العمل، و50% عند التسليم. الدفع عبر تحويل بنكي أو محافظ إلكترونية (STC Pay، Apple Pay).'
  },
  {
    q: 'هل يوجد دعم بعد التسليم؟',
    a: 'نعم، نوفر دعماً مجانياً لمدة 7 أيام بعد التسليم لأي تعديلات بسيطة أو أسئلة. بعد ذلك يمكنك الاشتراك بخدمة إدارة المتجر الشهرية للحصول على دعم مستمر واحترافي.'
  },
  {
    q: 'ماذا أحتاج لبدء العمل معكم؟',
    a: 'كل ما تحتاجه هو التواصل معنا عبر واتساب وإخبارنا بنوع الخدمة التي تريدها ونبذة عن مشروعك. سنوجهك خطوة بخطوة وسنطلب منك المواد المطلوبة (مثل الشعار، الصور، المنتجات) عند الحاجة.'
  }
];

export const faqBrandItems: FaqItem[] = [
  {
    q: 'ماذا يشمل دليل الهوية؟',
    a: 'الشعار بصيغ متعددة، لوح الألوان مع الكودات، الخطوط، أمثلة على الاستخدام الصحيح والخاطئ، وقوالب جاهزة.'
  },
  {
    q: 'هل أحصل على ملفات قابلة للتعديل؟',
    a: 'نعم، تحصل على ملفات AI أو Figma بحسب الاتفاق، إضافة إلى PNG و SVG جاهزة للاستخدام.'
  },
  {
    q: 'كم خياراً للشعار ستقدمين؟',
    a: 'أقدم خياراً واحداً مدروساً بعد استيعاب متطلباتك، وليس عشوائياً. جولة تعديل واحدة مشمولة.'
  }
];
