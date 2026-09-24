import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useTheme } from "../contexts/ThemeContext";
import logo from "../assets/images/Aziz_Header_Logo.jpg";
import "../assets/css/header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [navToggler,setNavToggler]=useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { isDarkMode, language, toggleTheme, toggleLanguage } = useTheme();

  const [activeSection, setActiveSection] = useState("home");

  const navItems = [
    { name: "home", nameAr: "الرئيسية", path: "/" },
    { name: "about", nameAr: "عنّي", path: "/about" },
    { name: "education", nameAr: "التعليم", path: "/education" },
    // { name: "services", nameAr: "الخدمات", path: "/services" },
    { name: "skills", nameAr: "المهارات", path: "/skills" },
    { name: "experience", nameAr: "الخبرات", path: "/experience" },
    { name: "projects", nameAr: "المشاريع", path: "/projects" },
    { name: "achievements", nameAr: "الإنجازات", path: "/achievements" },
    // { name: "testimonials", nameAr: "التوصيات", path: "/testimonials" },
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // for header margin top
      const top =
        element.getBoundingClientRect().top + window.pageYOffset - offset;

      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  const handleNavigation = (sectionName) => {
    if (location.pathname === "/") {
      scrollToSection(sectionName);
    } else {
      navigate("/", { state: { scrollTo: sectionName } });
    }
    setActiveSection(sectionName);
  };

  const handleConnectClick = () => {
    handleNavigation("connect");
  };

  const handleLogoClick = () => {
    if (location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      navigate("/");
    }
    setActiveSection("home");
  };

  // 🔥 مراقبة السكشن أثناء السكرول
  useEffect(() => {
    const sections = navItems.map((item) =>
      document.getElementById(item.name)
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.6,
      }
    );

    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  return (
    <header className="size-full h-8 sm:h-10 md:h-12 lg:h-14  ">
      <nav className="nav-bar ">
        {/* Logo */}
        <div className="" onClick={handleLogoClick}>
          <img src={logo} alt="Logo" className="nav-logo" />
        </div>

        {/* Toggler */}
        <button
          className="toggler-btn"
          type="button"
          onClick={() => {
            setNavToggler((prev) => !prev);
          }}
        >
          {navToggler ? (
            <FontAwesomeIcon icon={faXmark} />
          ) : (
            <FontAwesomeIcon icon={faBars} />
          )}
        </button>
        {/* Togler Menu */}

        {/* Links */}

        <ul className="hidden md:flex" id="navbarContent">
          {navItems.map((item) => (
            <li key={item.name} className="nav-item">
              <a
                href={`#${item.name}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavigation(item.name);
                }}
                className="nav-item active:text-gray-100-200"
              >
                {language === "ar"
                  ? item.nameAr
                  : item.name.charAt(0).toUpperCase() + item.name.slice(1)}
              </a>
            </li>
          ))}
        </ul>

        {/* Toggles */}
        <div className="md:flex hidden">
          <a
            href="#Connect"
            onClick={(e) => {
              e.preventDefault();
              handleConnectClick();
            }}
            className="nav-btn"
          >
            {language === "ar" ? "تواصل معي" : "Connect Me"}
          </a>

          <div className="theme-language">
            <button
              onClick={toggleTheme}
              className="text-gray-200 text-sm md:text-lg"
            >
              {isDarkMode ? "☀️" : "🌙"}
            </button>
            <button
              onClick={toggleLanguage}
              className="text-gary-800 dark:text-gray-400 text-sm md:text-md"
            >
              {language === "en" ? "عربي" : "EN"}
            </button>
          </div>
        </div>
      </nav>
      {/* toggler navigation */}
      <div>
        {navToggler && (
          <div className="mobile-nav-menu">
            <ul>
              {navItems.map((item) => (
                <li key={item.name} className="nav-item">
                  <a
                    href={`#${item.name}`}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavigation(item.name);
                    }}
                    className="nav-item active:text-gray-100-200"
                  >
                    {language === "ar"
                      ? item.nameAr
                      : item.name.charAt(0).toUpperCase() + item.name.slice(1)}
                  </a>
                </li>
              ))}
            </ul>
            <div className="flex-col">
              <a
                href="#Connect"
                onClick={(e) => {
                  e.preventDefault();
                  handleConnectClick();
                }}
                className="nav-btn"
              >
                {language === "ar" ? "تواصل معي" : "Connect Me"}
              </a>
              <div className=" space-x-2">
                <button
                  onClick={toggleTheme}
                  className="text-gray-600 text-sm md:text-lg"
                >
                  {isDarkMode ? "☀️" : "🌙"}
                </button>
                <button
                  onClick={toggleLanguage}
                  className="text-gary-800  px-2  dark:text-gray-400 text-sm md:text-md border border-gray-300 dark:border-gray-500 rounded-sm"
                >
                  {language === "en" ? "عربي" : "EN"}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;