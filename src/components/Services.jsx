import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import '../assets/css/Services.css';
import { 
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, 
  FaGitAlt, FaBootstrap, FaRocket, FaHeadset,
  FaSync, FaBug, FaChartLine, FaDesktop,
  FaLaptopCode,
  FaWindows
} from 'react-icons/fa';
import { 
  SiTypescript, SiTailwindcss, SiRedux, SiMongodb, 
  SiExpress
} from 'react-icons/si';
import { useNavigate } from 'react-router-dom';
import { DiDatabase, DiMsqlServer,  } from 'react-icons/di';

import { CgWebsite } from "react-icons/cg";
import { BiLogoPostgresql } from "react-icons/bi";
import { PiChartBarDuotone } from "react-icons/pi";
import { TbBrandCSharp } from 'react-icons/tb';
import { BsWindowStack } from "react-icons/bs";


const Services = () => {
  const { language } = useTheme();
  const navigate = useNavigate();

  // Technical Skills data with icons
  const technicalSkills = [
    { name: "HTML5", icon: <FaHtml5 />, color: "#E34F26" },
    { name: "CSS3", icon: <FaCss3Alt />, color: "#1572B6" },
    { name: "JavaScript", icon: <FaJs />, color: "#F7DF1E" },
    { name: "TypeScript", icon: <SiTypescript />, color: "#3178C6" },
    { name: "React.js", icon: <FaReact />, color: "#61DAFB" },
    { name: "Node.js", icon: <FaNodeJs />, color: "#68A063" },
    { name: "Express.js", icon: <SiExpress />, color: "#000000" },
    { name: "Express", icon: <SiExpress />, color: "#000000" }, // Added for matching
    { name: "MongoDB", icon: <SiMongodb />, color: "#47A248" },
    { name: "Git", icon: <FaGitAlt />, color: "#F05032" },
    { name: "Redux", icon: <SiRedux />, color: "#764ABC" },
    { name: "TailwindCSS", icon: <SiTailwindcss />, color: "#38B2AC" },
    { name: "Tailwind", icon: <SiTailwindcss />, color: "#38B2AC" }, // Added for matching
    { name: "Bootstrap", icon: <FaBootstrap />, color: "#7952B3" },
    { name: "JWT", icon: <FaRocket />, color: "#FF4D6D" }, // Added for JWT
    { name: "RESTful", icon: <FaRocket />, color: "#8B5CF6" }, // Added for RESTful
    { name: "SQL server", icon: <DiMsqlServer />, color: "#ED3326" }, // Added for Mongoose
    { name: "Support", icon: <FaHeadset />, color: "#8B5CF6" }, // Added for Support
    { name: "Updates", icon: <FaSync />, color: "#F59E0B" }, // Added for Updates
    { name: "Bug Fixing", icon: <FaBug />, color: "#EF4444" }, // Added for Bug Fixing
    { name: "Monitoring", icon: <FaChartLine />, color: "#10B981" }, // Added for Monitoring
    { name: "Electron", icon: <FaDesktop />, color: "#9FEAF9" }, // Added for Electron
    { name: "PostgreSQL", icon: <BiLogoPostgresql />, color: "#336791" }, // Added for Postgre
    { name: "Power BI", icon: <PiChartBarDuotone />, color: "#DFA110" }, //Added for Bower BI
    { name: "C#", icon: <TbBrandCSharp />, color: "#9A6ED5" }, // Added
    { name: "windows", icon: <FaWindows />, color: "#9A6ED5" }, // Added
    
  ];

  // Helper function to find icon for a tag
  const findIconForTag = (tagName) => {
    const matchedSkill = technicalSkills.find(skill => 
      skill.name.toLowerCase() === tagName.toLowerCase() ||
      (tagName.toLowerCase().includes('react') && skill.name.toLowerCase().includes('react')) ||
      (tagName.toLowerCase().includes('node') && skill.name.toLowerCase().includes('node')) ||
      (tagName.toLowerCase().includes('express') && skill.name.toLowerCase().includes('express')) ||
      (tagName.toLowerCase().includes('mongo') && skill.name.toLowerCase().includes('mongo')) ||
      (tagName.toLowerCase().includes('tailwind') && skill.name.toLowerCase().includes('tailwind'))
    );
    
    return matchedSkill ? matchedSkill.icon : null;
  };

  // Helper function to find color for a tag (optional - uses service color as fallback)
  const findColorForTag = (tagName) => {
    const matchedSkill = technicalSkills.find(skill => 
      skill.name.toLowerCase() === tagName.toLowerCase() ||
      (tagName.toLowerCase().includes('react') && skill.name.toLowerCase().includes('react')) ||
      (tagName.toLowerCase().includes('node') && skill.name.toLowerCase().includes('node'))
    );
    
    return matchedSkill ? matchedSkill.color : null;
  };

  const servicesData = [
    {
      id: 1,
      title: language === "Ar" ? "تصميم قواعد البيانات" : "Database Design",
      description:
        language === "Ar"
          ? "تصميم قواعد بيانات فعالة ومحسّنة للأداء وقابلة للتوسع."
          : "Efficient schemas optimized for performance and scalability.",
      tags: ["SQL server", "PostgreSQL", "Power BI", "MongoDB"],
      icon: <DiDatabase />,
      color: "#47A248",
    },
    {
      id: 2,
      title: language === "Ar" ? "تطبيقات الويب" : "Web Applications",
      description:
        language === "Ar"
          ? "بناء تطبيقات ويب كاملة باستخدام React.js و Node.js."
          : "Building full-featured web applications using React.js and Node.js.",
      tags: ["React.js", "Node.js", "Express", "Redux"],
      icon: <CgWebsite />,
      color: "#386AF3",
    },
    {
      id: 3,
      title:
        language === "Ar" ? "تطوير الواجهة الأمامية" : "Frontend Development",
      description:
        language === "Ar"
          ? "إنشاء واجهات تفاعلية واستجابية مع تجربة مستخدم ممتازة."
          : "Creating responsive and interactive web interfaces with excellent user experience.",
      tags: ["React.js", "HTML5", "CSS3", "TailwindCSS"],
      icon: <FaLaptopCode />,
      color: "#FF4D6D",
    },
    {
      id: 4,
      title:
        language === "Ar" ? "الصيانة والدعم الفني" : "Maintenance & Support",
      description:
        language === "Ar"
          ? "تقديم تحديثات مستمرة وتصحيح الأخطاء ودعم فني لضمان عمل التطبيقات بسلاسة."
          : "Ongoing updates, debugging, and technical support to ensure smooth operation.",
      tags: ["Support", "Updates", "Bug Fixing", "Monitoring"],
      icon: <FaHeadset />,
      color: "#8B5CF6",
    },
    {
      id: 5,
      title:
        language === "Ar" ? "تطبيقات ويندوز" : "Windows  Form Applications",
      description:
        language === "Ar"
          ? "بناء تطبيقات مكتبية متكاكلة "
          : "building Full windows form applications using C# and MS SQL server ",
      tags: ["SQL server", "C#", "windows"],
      icon: <BsWindowStack />,
      color: "#46CBFF",
    },
  ];



  return (
    <section id="services" className="section pb-8 md:pb-20 ">
      <div className="">
        {/* Section Title */}
        <div className="">
          <div className="">
            <h1 className="gradient-text section-title1">
              {language === "Ar" ? "خدماتي" : "My Services"}
            </h1>
            <div className="line-div"> </div>
            <p className="section-subtitle text-muted mt-1">
              {language === "Ar"
                ? "أقدم مجموعة متنوعة من الخدمات في تطوير الويب وتصميم قواعد البيانات"
                : "I offer a variety of services in web development and database design"}
            </p>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-center  ">
          {servicesData.map((service) => (
            <div key={service.id} className="">
              <div className="card h-full ">
                {/* Card Header with Icon */}
                <div className=" flex items-center gap-2">
                  <div
                    className="service-icon-wrapper rounded-full flex items-center justify-center"
                    style={{
                      background: `linear-gradient(135deg, ${service.color}20, ${service.color}40)`,
                      borderColor: service.color,
                    }}
                  >
                    <i style={{ color: service.color }}>{service.icon}</i>
                  </div>
                  <h3 className="service-title mb-0">{service.title}</h3>
                </div>

                {/* Description */}
                <p className="service-description text-muted mb-3">
                  {service.description}
                </p>

                {/* Tags/Technologies with Icons - FIXED VERSION */}
                <div className="service-tags flex flex-wrap gap-2 mt-auto">
                  {service.tags.map((tag, index) => {
                    const icon = findIconForTag(tag);
                    const tagColor = findColorForTag(tag) || service.color;

                    return (
                      <span
                        key={index}
                        className="tag-badge flex items-center gap-2"
                        style={{
                          background: `${service.color}10`,
                          color: tagColor,
                          borderColor: `${service.color}30`,
                        }}
                      >
                        {icon && <span className="tag-icon">{icon}</span>}
                        {tag}
                      </span>
                    );
                  })}
                </div>

                {/* Decorative line */}
                <div className="service-decoration mt-3">
                  <div
                    className="decoration-line"
                    style={{
                      background: `linear-gradient(90deg, transparent, ${service.color}, transparent)`,
                    }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;