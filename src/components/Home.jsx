import React, { useEffect, useState , useMemo  } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import '../assets/css/Home.css';
import logo from '../assets/images/Aziz_Logo1.jpg';
import cvFile from '../assets/files/Esraa Shaban CV.pdf'; // Import the CV file

const Home = () => {
    const { language } = useTheme();
    const [text, setText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [letterIndex, setLetterIndex] = useState(0);
    const [typingSpeed, setTypingSpeed] = useState(150);
  
    // Words based on language
   const words = useMemo(() => {
  return language === 'en'
    ? [
        "Full Stack Developer",
        "Database Admin",
      ]
    : [
        "مطور ويب متكامل",
        "مدير قاعدة البيانات",
      ];
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
        const element = document.getElementById('projects');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

const handleDownloadCV = () => {
  // Create a link to the imported file
  const link = document.createElement('a');
  link.href = cvFile;
  link.download = 'my-resume.pdf'; // The name for the downloaded file
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
    // Tech icons data for orbiting animation
    const techIcons = [
        { icon: 'fab fa-react', name: 'React', color: '#61DAFB' },
        { icon: 'fab fa-node', name: 'Node.js', color: '#68A063' },
        { icon: 'fab fa-js', name: 'JavaScript', color: '#F7DF1E' },
        { icon: 'fab fa-python', name: 'Python', color: '#3776AB' },
        { icon: 'fas fa-database', name: 'MongoDB', color: '#47A248' },
        { icon: 'fab fa-html5', name: 'HTML5', color: '#E34F26' },
        { icon: 'fab fa-css3-alt', name: 'CSS3', color: '#1572B6' },
        { icon: 'fab fa-git-alt', name: 'Git', color: '#F05032' },
    ];

    return (
        <section id="home" className="bg-gray-200">
            <div className="">
                <div className="">
                    <div className="">
                        <h2>
                            <p>{language === 'ar' ? 'مرحباً! أنا، ' : "Hi! I'm "}</p>
                            {language === 'ar' ? 'عبدالعزيز برغوث، ' : "Abdulaziz Salih Barghoth "}
                            <br />
                            <span className="">{text}</span>
                            <span className="cursor"></span>
                        </h2>
                        
                        <div className="">
                            <p>
                                {language === 'ar' 
                                    ? 'مطور تطبيقات متكاملة متخصص في React و Node.js'
                                    : 'Full-Stack Developer specializing in React and Node.js.'}
                            </p>
                            
                            <div className="">
                                <button className="secondary-btn" onClick={scrollToProjects}>
                                    {language === 'ar' ? 'عرض المشاريع' : 'View Projects'}
                                </button>
                                <button className="primary-btn " onClick={handleDownloadCV}>
                                    {language === 'ar' ? 'تحميل السيرة الذاتية' : 'Download CV'}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="">
                    {/* Orbiting Icons Container */}
                    <div className="">
                        {techIcons.map((tech, index) => {
                            // Calculate angle for each icon (evenly spaced)
                            const angle = (index * 45) * (Math.PI / 180); // 45 degrees apart
                            const radius = 180; // Radius of orbit
                            
                            // Calculate position
                            const x = Math.cos(angle) * radius;
                            const y = Math.sin(angle) * radius;
                            
                            return (
                                <div 
                                    key={index}
                                    className="orbiting-icon"
                                    style={{
                                        '--tx': `${x}px`,
                                        '--ty': `${y}px`,
                                        '--rotation': `${index * 45}deg`,
                                        '--icon-color': tech.color,
                                        animation: `orbit 12s linear infinite`,
                                        animationDelay: `${-index * 1.5}s`, // Stagger the animation
                                    }}
                                >
                                    <i className={tech.icon}></i>
                                    <span className="icon-tooltip">{tech.name}</span>
                                </div>
                            );
                        })}
                    </div>
                    
                    {/* Center Logo */}
                    <img src={logo} alt="Logo" className="size-80 rounded-full" />
                    
                    {/* Outer glow effect */}
                    <div className="logo-glow"></div>
                </div>
            </div>
        </section>
    );
};

export default Home;