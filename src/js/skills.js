import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaBootstrap,
  FaUsers,
  FaClock,
  FaComments,
  FaLightbulb,
} from "react-icons/fa";
import {
  SiTypescript,
  SiTailwindcss,
  SiRedux,
  SiMongodb,
  SiExpress,
  SiAdminer,
} from "react-icons/si";
import { DiDatabase, DiMsqlServer } from "react-icons/di";
import { FcComboChart } from "react-icons/fc";

export const categories = [
  { id: "front", nameEn: "Frontend Skills", nameAr: "مهارات الواجهة الأمامية" },
  { id: "back", nameEn: "Backend Skills", nameAr: "مهارات الواجهة الخلفية" },
  { id: "data", nameEn: "Database Skills", nameAr: "مهارات قواعد البيانات" },
  { id: "soft", nameEn: "Soft Skills", nameAr: "المهارات الشخصية" },
];

export const skillsByCategory = {
  front: {
    titleEn: "Frontend Development with React in Js File",
    titleAr: "تطوير الواجهة الأمامية باستخدام React",
    descriptionEn:
      "Designing and developing scalable web applications with modern frontend technologies.",
    descriptionAr:
      "تصميم وتطوير تطبيقات ويب قابلة للتوسع باستخدام تقنيات الواجهة الأمامية الحديثة.",
    technologies: [
      {
        name: "HTML5",
        icon: FaHtml5,
        color: "#E34F26",
        descriptionEn:
          "Designing and developing scalable, high-performance web applications with modern frontend technologies, focusing on clean architecture, maintainable code, optimized rendering, and seamless user experience across devices.",
        descriptionAr:
          "تصميم وتطوير تطبيقات ويب قابلة للتوسع وعالية الأداء باستخدام أحدث تقنيات الواجهة الأمامية، مع التركيز على الهندسة النظيفة، الكود القابل للصيانة، الأداء المحسن، وتجربة مستخدم سلسة عبر جميع الأجهزة.",
      },
      { name: "CSS3", icon: FaCss3Alt, color: "#1572B6" },
      { name: "JavaScript", icon: FaJs, color: "#F7DF1E" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "React.js", icon: FaReact, color: "#61DAFB" },
      { name: "Redux", icon: SiRedux, color: "#764ABC" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#38B2AC" },
      { name: "Bootstrap", icon: FaBootstrap, color: "#7952B3" },
    ],
  },

  back: {
    titleEn: "Backend Development with Node.js",
    titleAr: "تطوير الواجهة الخلفية باستخدام Node.js",
    descriptionEn:
      "Building robust server-side applications, REST APIs, and database integrations.",
    descriptionAr:
      "بناء تطبيقات خادم قوية وواجهات REST وربطها بقواعد البيانات.",
    technologies: [
      {
        name: "Node.js",
        icon: FaNodeJs,
        color: "#68A063",
        descriptionEn:
          "Building robust, secure, and scalable server-side applications with Node.js and Express.js. Designing RESTful APIs, implementing authentication and authorization, managing databases, and ensuring optimal performance and reliability.",
        descriptionAr:
          "بناء تطبيقات خادم قوية وآمنة وقابلة للتوسع باستخدام Node.js و Express.js. تصميم RESTful APIs، تنفيذ المصادقة والتفويض، إدارة قواعد البيانات، وضمان الأداء الأمثل والموثوقية.",
      },
      { name: "Express.js", icon: SiExpress, color: "#000000" },
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
      { name: "Git", icon: FaGitAlt, color: "#F05032" },
    ],
  },

  data: {
    titleEn: "Database Skills",
    titleAr: "مهارات قواعد البيانات",
    descriptionEn:
      "Database design, querying, administration, and business intelligence dashboards.",
    descriptionAr:
      "تصميم قواعد البيانات والاستعلام عنها وإدارتها وإنشاء لوحات معلومات ذكاء الأعمال.",
    technologies: [
      {
        name: "SQL Server",
        icon: DiMsqlServer,
        color: "#c1121f",
        descriptionEn:
          "Database administration, backups, data import/export, and SQL queries.",
        descriptionAr:
          "إدارة قواعد البيانات والنسخ الاحتياطي واستيراد وتصدير البيانات واستعلامات SQL.",
      },
      {
        name: "Databases",
        icon: DiDatabase,
        color: "#68A063",
        descriptionEn: "Database analysis and design.",
        descriptionAr: "تحليل قواعد البيانات وتصميمها.",
      },
      {
        name: "Database Admin",
        icon: SiAdminer,
        color: "#540b0e",
        descriptionEn: "Managing databases and maintaining performance.",
        descriptionAr: "إدارة قواعد البيانات والحفاظ على أدائها.",
      },
      {
        name: "Power BI",
        icon: FcComboChart,
        color: "#F05032",
        descriptionEn:
          "Connecting dashboards to data sources such as SQL Server and Excel.",
        descriptionAr:
          "ربط لوحات المعلومات بمصادر بيانات مثل SQL Server وExcel.",
      },
    ],
  },

  soft: {
    titleEn: "Soft Skills",
    titleAr: "المهارات الشخصية",
    descriptionEn:
      "Collaboration, communication, problem-solving, and time management.",
    descriptionAr: "التعاون والتواصل وحل المشكلات وإدارة الوقت.",
    technologies: [
      {
        name: "Teamwork",
        icon: FaUsers,
        color: "#FF4D6D",
        descriptionEn: "Collaboration, code reviews, and pair programming.",
        descriptionAr: "التعاون ومراجعة الكود والبرمجة الثنائية.",
      },
      {
        name: "Communication",
        icon: FaComments,
        color: "#8B5CF6",
        descriptionEn:
          "Technical writing, presentations, and active listening.",
        descriptionAr: "الكتابة التقنية والعروض التقديمية والاستماع الفعال.",
      },
      {
        name: "Time Management",
        icon: FaClock,
        color: "#10B981",
        descriptionEn: "Prioritizing tasks and meeting deadlines.",
        descriptionAr: "تحديد أولويات المهام والالتزام بالمواعيد النهائية.",
      },
      {
        name: "Problem Solving",
        icon: FaLightbulb,
        color: "#F59E0B",
        descriptionEn:
          "Analytical thinking, debugging, and creative solutions.",
        descriptionAr: "التفكير التحليلي وتصحيح الأخطاء وإيجاد حلول إبداعية.",
      },
    ],
  },
};
export const getCategoryDescriptions = (categoryKey, lang = "En") => {
  const category = skillsByCategory[categoryKey];
  if (!category || !category.technologies) return "";

  const propName = `description${lang}`;

  return category.technologies
    .map((tech) => tech[propName])
    .filter(Boolean) // Excludes items that don't have a description (like HTML, CSS in your front array)
    .join(". ");
};