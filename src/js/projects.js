
import { 
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, 
  FaGitAlt, FaBootstrap, FaRocket, FaHeadset,
  FaSync, FaBug, FaChartLine, FaDesktop,
  FaLaptopCode,
  FaWindows
} from 'react-icons/fa';
import { 
  SiTypescript, SiTailwindcss, SiRedux, SiMongodb, 
  SiExpress,
  SiJsonwebtokens,
  SiSwagger
} from 'react-icons/si';
import { DiDatabase, DiMsqlServer,  } from 'react-icons/di';

import { CgWebsite } from "react-icons/cg";
import { BiLogoPostgresql } from "react-icons/bi";
import { PiChartBarDuotone } from "react-icons/pi";
import { TbBrandCSharp } from 'react-icons/tb';
import { BsWindowStack } from "react-icons/bs";
// Import project images (add your own images to assets/images/)
import beautifulShop from "../assets/images/beautifulShop.png";
import ecommerce from "../assets/images/ecommerce.png";
import crmDashboard from "../assets/images/crmDashboard.png";
import yasmenaFlower from "../assets/images/yasmenaFlowers.png";
import dawaya from "../assets/images/dawaya.png";

 export const projects = [
    {
      id: 0,
      title: "Dawaya",
      titleAr: "منصة دوايا",
      description:
        "Led the development of Dawaya, a healthcare platform connecting patients and pharmacies. Contributed as Team Leader, Backend Developer, and Admin Dashboard Developer, building scalable REST APIs, authentication, and management systems to streamline medicine accessibility.",
      descriptionAr:
        "قيادة تطوير منصة دوايا، وهي منصة صحية تربط المرضى بالصيدليات. شاركت كقائدة للفريق ومطورة Backend ومطورة لوحة تحكم الإدارة، مع بناء REST APIs قابلة للتوسع، ونظام مصادقة، وأنظمة إدارة تهدف إلى تسهيل الوصول إلى الأدوية.",

      image: dawaya,

      badges: [
        {
          name: "React.js",
          icon: FaReact ,
          color: "#61DAFB",
        },
        {
          name: "Node.js",
          icon: FaNodeJs ,
          color: "#339933",
        },
        {
          name: "Express.js",
          icon: SiExpress ,
          color: "#000000",
        },
        {
          name: "MongoDB",
          icon: SiMongodb ,
          color: "#47A248",
        },
        {
          name: "JWT",
          icon: SiJsonwebtokens ,
          color: "#D63AFF",
        },
        {
          name: "Swagger",
          icon: SiSwagger ,
          color: "#85EA2D",
        },
      ],

      category: "Full Stack",

      categoryAr: "تطوير متكامل",

      categoryId: "fullstack",

      liveLink: "https://dawaya.vercel.app/",

      features: [
        "Led a multidisciplinary team throughout the project lifecycle",
        "Developed scalable RESTful APIs with 45+ endpoints",
        "Designed and implemented secure JWT Authentication & OTP verification",
        "Built the Admin Dashboard for managing users, pharmacies, medicines, and orders",
        "Integrated frontend and backend modules into a complete healthcare platform",
        "Implemented role-based access control for Users, Pharmacies, and Admins",
        "Designed API documentation using Swagger",
        "Developed Prescription Scan and WhatsApp Reminder interfaces",
        "Built a scalable architecture ready for future expansion",
      ],

      featuresAr: [
        "قيادة فريق متعدد التخصصات طوال دورة تطوير المشروع",
        "تطوير أكثر من 45 واجهة REST API قابلة للتوسع",
        "تنفيذ نظام مصادقة آمن باستخدام JWT والتحقق عبر OTP",
        "تطوير لوحة تحكم الإدارة لإدارة المستخدمين والصيدليات والأدوية والطلبات",
        "ربط الواجهة الأمامية مع الخلفية في منصة صحية متكاملة",
        "تطبيق نظام صلاحيات متعدد للمستخدمين والصيدليات والإدارة",
        "توثيق جميع الـ APIs باستخدام Swagger",
        "تطوير واجهات مسح الروشتة ونظام التذكير عبر واتساب",
        "بناء هيكل برمجي قابل للتوسع وإضافة خصائص مستقبلية",
      ],
    },
    {
      id: 1,
      title: "Beautiful Shop",
      titleAr: "مشروع Beautiful Shop",
      // الوصف يركز الآن على "المشكلة والحل" كما في الصورة
      description:
        "Transformed the online shopping experience by building a high-performance, responsive e-commerce frontend. Solved the challenge of slow interface transitions and inconsistent mobile layouts using modern React patterns.",
      descriptionAr:
        "تطوير واجهة متجر إلكتروني احترافية عالجت تحديات بطء التصفح وعدم تناسق التصميم على الهواتف، من خلال بناء مكونات React سريعة الاستجابة وتجربة مستخدم سلسة.",
      image: beautifulShop,
      badges: [
        {
          name: "HTML5",
          icon: FaHtml5 ,
          color: "#E34F26",
        },
        {
          name: "CSS3",
          icon: FaCss3Alt ,
          color: "#1572B6",
        },
        {
          name: "JavaScript",
          icon: FaJs ,
          color: "#F7DF1E",
        },
        {
          name: "React.js",
          icon: FaReact ,
          color: "#61DAFB",
        },
      ],
      category: "Frontend",
      categoryAr: "واجهة أمامية",
      categoryId: "frontend",
      liveLink: "https://esraashaban2002.github.io/beautifulShop/",
      // الـ Features تم تقسيمها لتعبر عن "الحل التقني" و "النتائج"
      features: [
        "Challenge: Improving load times & UI consistency",
        "Solution: Component-based architecture with React.js",
        "Result: 40% faster navigation and seamless mobile experience",
        "Interactive UI with optimized CSS animations",
        "Dynamic category filtering for better product discovery",
        "Clean & maintainable codebase for future scaling",
      ],
      featuresAr: [
        "التحدي: تحسين سرعة التحميل وتناسق الواجهة",
        "الحل التقني: هيكلة المكونات باستخدام React.js",
        "النتيجة: تنقل أسرع بنسبة 40% وتجربة مستخدم مثالية",
        "واجهة تفاعلية مع حركات CSS محسّنة للأداء",
        "نظام فلترة ديناميكي لتسهيل الوصول للمنتجات",
        "كود برمي نظيف (Clean Code) قابل للتطوير المستقبلي",
      ],
    },
    {
      id: 2, // تأكدي من ترتيب المعرف حسب موقع المشروع في القائمة
      title: "Professional E-commerce Web App",
      titleAr: "تطبيق متجر إلكتروني متكامل",
      description:
        "A complete shopping solution addressing the complexity of real-time cart management and user engagement. Developed a seamless user journey from product discovery to checkout using optimized React architecture.",
      descriptionAr:
        "حل برمجي متكامل يعالج تعقيدات إدارة سلة التسوق وتفاعل المستخدم في الوقت الفعلي. قمت ببناء رحلة مستخدم سلسة تبدأ من استكشاف المنتج وحتى إتمام الشراء باستخدام بنية React محسّنة.",
      image: ecommerce, // تأكدي من استيراد الصورة بهذا الاسم
      badges: [
        {
          name: "HTML5",
          icon: FaHtml5 ,
          color: "#E34F26",
        },
        {
          name: "CSS3",
          icon: FaCss3Alt ,
          color: "#1572B6",
        },
        {
          name: "JavaScript",
          icon: FaJs ,
          color: "#F7DF1E",
        },
        {
          name: "React.js",
          icon: FaReact ,
          color: "#61DAFB",
        },
      ],
      category: "Frontend",
      categoryAr: "واجهة أمامية",
      categoryId: "frontend",
      liveLink: "https://esraashaban2002.github.io/E-commerce-website/",
      features: [
        "Challenge: Synchronizing shopping cart state across pages",
        "Solution: Efficient State Management for real-time updates",
        "Result: 100% bug-free checkout flow and smooth user experience",
        "Fully responsive layout optimized for conversion on mobile",
        "Interactive UI elements with high-performance CSS animations",
        "Optimized assets for fast loading and reduced bounce rates",
      ],
      featuresAr: [
        "التحدي: مزامنة حالة سلة التسوق عبر الصفحات المختلفة",
        "الحل التقني: إدارة فعالة للحالة (State) لتحديث البيانات لحظياً",
        "النتيجة: مسار شراء خالٍ من الأخطاء وتجربة مستخدم انسيابية",
        "تصميم متجاوب بالكامل لزيادة معدلات التحويل عبر الهاتف",
        "عناصر واجهة تفاعلية مع حركات CSS عالية الأداء",
        "تحسين ملفات المشروع لضمان سرعة التحميل وتقليل معدل الارتداد",
      ],
    },
    {
      id: 3,
      title: "Enterprise CRM Backend System",
      titleAr: "نظام إدارة علاقات العملاء (CRM) للمؤسسات",
      // الوصف يركز على الأمان والكفاءة المؤسسية
      description:
        "Engineered a robust, scalable backend for enterprise CRM needs. Addressed data security and complex user permissions by implementing a secure JWT authentication system and granular Role-Based Access Control (RBAC).",
      descriptionAr:
        "تصميم وبناء نظام خلفي (Backend) قوي وقابل للتوسع لاحتياجات الشركات. عالجت تحديات أمن البيانات وصلاحيات المستخدمين المعقدة عبر نظام مصادقة JWT متطور وإدارة دقيقة للأدوار (RBAC).",
      image: crmDashboard,
      badges: [
        {
          name: "Node.js",
          icon: FaNodeJs ,
          color: "#68A063",
        },
        {
          name: "Express.js",
          icon: SiExpress ,
          color: "#000000",
        },
        {
          name: "MongoDB",
          icon: SiMongodb ,
          color: "#47A248",
        },
        {
          name: "Git",
          icon: FaGitAlt ,
          color: "#F05032",
        },
      ],
      category: "Backend",
      categoryAr: "واجهة خلفية",
      categoryId: "backend",
      liveLink: "https://github.com/Esraashaban2002/CRM_Dashboard",
      // المميزات بصيغة (تحدي - حل - نتيجة)
      features: [
        "Challenge: Securing sensitive business data & complex access",
        "Solution: JWT & Role-Based Access Control (RBAC) implementation",
        "Result: 100% secure data environment with scalable performance",
        "Developed high-performance RESTful APIs for seamless integration",
        "Robust data validation & error handling using best practices",
        "Clean architecture designed for easy future feature scaling",
      ],
      featuresAr: [
        "التحدي: تأمين بيانات الأعمال الحساسة وإدارة الوصول المعقدة",
        "الحل التقني: تنفيذ نظام JWT وإدارة الصلاحيات حسب الأدوار (RBAC)",
        "النتيجة: بيئة بيانات آمنة تماماً بنسبة 100% مع أداء عالي الاستقرار",
        "تطوير واجهات API متوافقة مع REST لضمان تكامل سلس مع الواجهات",
        "نظام صارم للتحقق من صحة البيانات والتعامل مع الأخطاء",
        "بناء معماري نظيف (Clean Architecture) لسهولة التوسع المستقبلي",
      ],
    },
    {
      id: 4,
      title: "Yasmena Flowers Website",
      titleAr: "موقع ياسمينا فلور",

      description:
        "A modern flower shop website designed to showcase products in an elegant and user-friendly way, focusing on smooth navigation and attractive visual presentation to enhance user engagement and conversion.",

      descriptionAr:
        "موقع متجر ورد بتصميم عصري يهدف لعرض المنتجات بشكل جذاب وسهل الاستخدام، مع التركيز على تجربة مستخدم سلسة تساعد في جذب العملاء وزيادة التفاعل.",

      image: yasmenaFlower,

      badges: [
        {
          name: "HTML5",
          icon: FaHtml5 ,
          color: "#E34F26",
        },
        {
          name: "CSS3",
          icon: FaCss3Alt ,
          color: "#1572B6",
        },
        {
          name: "JavaScript",
          icon: FaJs ,
          color: "#F7DF1E",
        },
        {
          name: "React.js",
          icon: FaReact ,
          color: "#61DAFB",
        },
      ],

      category: "Frontend",
      categoryAr: "واجهة أمامية",
      categoryId: "frontend",

      liveLink: "https://esraashaban2002.github.io/yasmena-flowers",

      // المميزات بصيغة (Challenge - Solution - Result)
      features: [
        "Challenge: Presenting flower products in an attractive and engaging way",
        "Solution: Designed a clean and visually appealing UI with strong visual hierarchy",
        "Result: Enhanced user engagement and improved browsing experience",
        "Implemented smooth and intuitive navigation for better user flow",
        "Built fully responsive design for seamless experience across all devices",
        "Optimized performance to ensure fast loading and better user retention",
      ],

      featuresAr: [
        "التحدي: عرض منتجات الورد بشكل جذاب يلفت انتباه المستخدم",
        "الحل: تصميم واجهة عصرية مع تنظيم بصري واضح (Visual Hierarchy)",
        "النتيجة: تحسين تفاعل المستخدم وتجربة التصفح",
        "تنفيذ نظام تنقل سهل وبسيط لتحسين تجربة المستخدم",
        "تصميم متجاوب بالكامل يعمل بكفاءة على جميع الأجهزة",
        "تحسين الأداء لتقليل وقت التحميل وزيادة بقاء المستخدم داخل الموقع",
      ],
    },
  ];

  // Category filter options
  export const categories = [
    { id: "all", nameEn: "All Projects", nameAr: "جميع المشاريع" },
    { id: "frontend", nameEn: "Frontend", nameAr: "واجهة أمامية" },
    { id: "backend", nameEn: "Backend", nameAr: "واجهة خلفية" },
    { id: "fullstack", nameEn: "Full Stack", nameAr: "تطبيق متكامل" },
  ];