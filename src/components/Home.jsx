import  { useEffect, useState , useMemo  } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import '../assets/css/Home.css';
import logo from '../assets/images/Aziz_Logo1.jpg';
import cvFile from "../assets/files/Abdulaziz_Barghouth_Full_Stack_Developer_CV.pdf"; // Import the CV file
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faReact,
  faNode,
  faJs,
  faPython,
  faHtml5,
  faCss3Alt,
  faGitAlt,
  faPostgresql,
  faSquareJs,
  faCss3,
  faGithub,

 
} from "@fortawesome/free-brands-svg-icons";
import {  faDatabase } from "@fortawesome/free-solid-svg-icons"; // Database is in the solid package
import { TbBrandCSharp } from "react-icons/tb";

const Home = () => {
  const { language } = useTheme();
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [letterIndex, setLetterIndex] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  // Words based on language
  const words = useMemo(() => {
    return language === "en"
      ? ["Full Stack Developer", "Database Admin"]
      : ["مطور ويب متكامل", "مدير قاعدة البيانات"];
  }, [language]);

  useEffect(() => {
    const handleTyping = () => {
      const currentWord = words[currentWordIndex];

      if (!isDeleting) {
        setText(currentWord.substring(0, letterIndex + 1));
        setLetterIndex(letterIndex + 1);
        setTypingSpeed(150);

        if (letterIndex === currentWord.length) {
          setTimeout(() => setIsDeleting(true), 1000);
        }
      } else {
        setText(currentWord.substring(0, letterIndex - 1));
        setLetterIndex(letterIndex - 1);
        setTypingSpeed(75);

        if (letterIndex === 0) {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, letterIndex, currentWordIndex, typingSpeed, words]);

  const scrollToProjects = () => {
    const element = document.getElementById("projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleDownloadCV = () => {
    // Create a link to the imported file
    const link = document.createElement("a");
    link.href = cvFile;
    link.download = "Abdulaziz Barghoth CV.pdf"; // The name for the downloaded file
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  // Tech icons data for orbiting animation
  const techIcons = [
    { icon: faReact, name: "React", color: "#61DAFB" },
    { icon: faNode, name: "Node.js", color: "#68A063" },
    { icon: faSquareJs, name: "JavaScript", color: "#F7DF1E" },
    { icon: faDatabase, name: "database", color: "#3776AB" },
    { icon: faPostgresql, name: "Postgresql", color: "#47A248" },
    { icon: faHtml5, name: "Html", color: "#E34F26" },
    { icon: faCss3, name: "CSS3", color: "#1572B6" },
    { icon: faGithub, name: "GitHub", color: "#E5E5E5" },
  ];
  // const RADIUS = 160; // size-80 = 320px → radius 160
  // const RADIUS_SM=80;//for responsive small screens 
  const STEP = 360 / techIcons.length; // evenly spaced, whatever the count

  return (
    <section className="min-h-screen overflow-hidden bg-slate-50 text-slate-900 transition-colors dark:bg-slate-950 dark:text-white">
      <div className="relative isolate mx-auto grid min-h-screen max-w-7xl grid-cols-1 gap-12 px-6 py-10 lg:grid-cols-2 lg:gap-20 lg:px-10">
        <div className="pointer-events-none absolute -left-32 -top-32 -z-10 h-96 w-96 rounded-full bg-blue-300/30 blur-3xl dark:bg-blue-700/20" />
        <div className="pointer-events-none absolute -bottom-40 -right-32 -z-10 h-96 w-96 rounded-full bg-purple-300/30 blur-3xl dark:bg-purple-700/20" />
        <div className="">
          {/* Hero text */}
          <div>
            <p className="mb-5 text-sm font-bold uppercase tracking-[0.25em] text-blue-600 dark:text-blue-400">
              {language === "ar" ? "مرحباً! أنا، " : "Hi! I'm "}
            </p>

            <h1 className="max-w-2xl text-lg xs:2xl font-black leading-[1.05] tracking-tight sm:text-3xl lg:text-4xl">
              {language === "ar"
                ? "عبدالعزيز برغوث، "
                : "Abdulaziz Salih Barghoth "}
              <span className="block mt-10 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 bg-clip-text text-transparent">
                <h2
                  className={
                    language === "ar"
                      ? "bg-gradient-to-l from-transparent to-pink-900 w-fit"
                      : "bg-gradient-to-r from-transparent to-pink-900 w-fit"
                  }
                >
                  <span className=" gradient-text ">{text}</span>
                  <span className=" bg-accent px-0.5 py-1 lg:text-2xl "></span>
                </h2>
              </span>
            </h1>
          </div>

          <div className="">
            <p className="mt-8 max-w-xl text-xs md:text-sm xl:text-lg leading-8 text-slate-600 dark:text-slate-400">
              {language === "ar"
                ? "مطور تطبيقات متكاملة متخصص في React و Node.js"
                : "I am Informatics Engineer and Full-Stack Developer with 8+ years of professional experience in database and systems development, plus hands-on full-stack web development experience. Skilled in building business applications and web solutions using React, JavaScript, Node.js, Express, C#, SQL Server, PostgreSQL, database design, authentication, reporting. Strong background in solving real-world business problems and delivering practical applications for humanitarian and local-market clients. "}
            </p>
          </div>
          <div className="">
            <div className="mt-10 flex flex-wrap gap-4">
              <button
                onClick={scrollToProjects}
                className="rounded-full bg-slate-900 px-6 py-3 text-sm font-bold text-white shadow-xl shadow-slate-900/20 transition hover:-translate-y-1 hover:bg-blue-600 dark:bg-white dark:text-slate-950 dark:hover:bg-blue-400"
              >
                {language === "ar" ? "عرض المشاريع" : "View Projects"}
              </button>

              <button
                onClick={handleDownloadCV}
                className="rounded-full border border-slate-300 px-6 py-3 text-sm font-bold text-slate-700 transition hover:-translate-y-1 hover:border-blue-500 hover:text-blue-600 dark:border-slate-700 dark:text-slate-300 dark:hover:border-blue-400 dark:hover:text-blue-400"
              >
                {language === "ar" ? "تحميل السيرة الذاتية" : "Download CV"}
              </button>
            </div>
            {/* <button className="secondary-btn" onClick={scrollToProjects}>
              {language === "ar" ? "عرض المشاريع" : "View Projects"}
            </button>
            <button className="primary-btn " onClick={handleDownloadCV}>
              {language === "ar" ? "تحميل السيرة الذاتية" : "Download CV"}
            </button> */}
          </div>
        </div>

        <div className="w-full flex items-center justify-center">
          {/* orbit ring */}
          <div
            className="relative  flex items-center justify-center border border-accent/25 rounded-full transition 
                         size-40 [--radius:80px]
               md:size-80 md:[--radius:160px]"
          >
            {/* Rotating wrapper: fills the ring, spins around its center */}
            <div className="absolute inset-0 animate-[spin_20s_linear_infinite]">
              {techIcons.map((tech, index) => {
                const angle = index * STEP;
                return (
                  <div
                    key={tech.name ?? index}
                    className="absolute left-1/2 top-1/2 -ml-3 -mt-3 md:-mt-6 md:-ml-6 size-6 md:size-12"
                    style={{
                      transform: `rotate(${angle}deg) translateX(var(--radius))`,
                    }}
                  >
                    {/* 1st counter-rotation: cancels the static angle */}
                    <div style={{ transform: `rotate(${-angle}deg)` }}>
                      {/* 2nd counter-rotation: cancels the wrapper's spin */}
                      <div
                        className="size-6 md:size-12 rounded-full flex items-center justify-center text-2xl animate-[spin_20s_linear_infinite] [animation-direction:reverse]  transition 
                      shadow-[0_0_25px_5px_rgba(99,102,241,0.45)]"
                      >
                        <FontAwesomeIcon
                          icon={tech.icon}
                          style={{ color: tech.color }}
                        />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Center logo */}
            <img
              src={logo}
              alt="Logo"
              className=" size-24 md:size-56 rounded-full ring ring-accent   shadow-accent opacity-70 animate-[bounce_4s_ease-in-out_infinite]
              shadow-[0_0_30px_8px_rgba(99,102,241,0.45)]"
            />
            <div className="logo-glow" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;