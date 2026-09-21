
import { useTheme } from '../contexts/ThemeContext';
// import '../assets/css/Experience.css';
import { faCalendarDays } from '@fortawesome/free-regular-svg-icons';
// Import logos (add your logo images to assets/images/)
import digiliansLogo from '../assets/images/digilians.jpg';
import webMastersLogo from '../assets/images/web masters.jpg';
import sefAcademyLogo from '../assets/images/SEF.jpg';
import blumontLogo from "../assets/images/BLUMONT__logo.jpg"
import freeLancerLogo from "../assets/images/freelancer_Logo.jpg"
import alfuratLogo from"../assets/images/Alfurat_Logo.jpg"
import ENBlumontrole from "../jsonFiles/rolesENBlumont.json"
import ARBlumontRoles from "../jsonFiles/rolesARBlumont.json"
import ENFullDev from "../jsonFiles/rolesENFullStack.json";
import ARFullDev from "../jsonFiles/rolesARFullStack.json"
import {
    FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs,
    FaGitAlt, FaBootstrap,
} from 'react-icons/fa';
import { DiMsqlServer,DiDatabase, DiVisualstudio  } from "react-icons/di";
import { FcComboChart } from "react-icons/fc";
import { TbBrandCSharp, TbBrandNodejs, TbDatabaseStar } from "react-icons/tb";
import { HiDocumentReport } from "react-icons/hi";
import { SiMongodb,
    SiExpress,
    SiAdminer,
    SiTailwindcss,
    SiRedux
} from 'react-icons/si';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { memo  } from 'react';
import ExperienceCard from './ExperienceCard';

const Experience = () => {
    const { language } = useTheme();
//     const [showlist,setShwolist]=useState([])
//    {  language ==='ar'?setShwolist(expAR):setShwolist(expEN)}
// const showlist= language ==='ar'?expAR:expEN;
// const [isExpanded,setisExpanded]=useState(false)
    const experiences = [
        {
            id: 1,
            company: 'BLUMONT Inc',
            companyEn: 'BLUMoNT',
            logo: blumontLogo,
            position: language === 'ar' ? 'مطور Full Stack' : 'Database Management Officer',
            positionEn: 'Full Stack Web Developer',
            type: language === 'ar' ? 'دوام كامل' : 'Full-time',
            period: 'Oct 2018 – Apr 2026',
            duration: language === 'ar' ? '3 شهور' : '8 years',
            location: 'Hassakah, Syria',
            locationType: 'On-site',
            technologies: [
                {
                    name: 'SQL Server',
                    icon: <DiMsqlServer />,
                    color: '#c1121f',
                },
                {
                    name: 'DataBase',
                    icon: <DiDatabase />,
                    color: '#68A063',
                },                
                {
                    name: 'C#',
                    icon: <TbBrandCSharp />,
                    color: '#7b2cbf',
                },
                {
                    name: 'Database Admin',
                    icon:<SiAdminer   /> ,
                    color:"#540b0e"
                },
                {
                    name: 'Power BI',
                    icon: <FcComboChart  />,
                    color: '#F05032',
                },
                {
                    name: 'Visualstudio ',
                    icon: <DiVisualstudio  />,
                    color: '#3d348b',
                },

                
                {
                    name: 'Crystal reports',
                    icon:<HiDocumentReport /> ,
                    color:"#0096c7"
                },
                
                {
                    name: 'Data Analysis',
                    icon:<TbDatabaseStar  /> ,
                    color:"#000007"
                }
            ],
            challenge: language === 'ar'
                ? 'كان التطبيق يعاني من بطء شديد في تحميل البيانات وأداء ضعيف في الاستعلامات، مما أثر سلباً على تجربة المستخدمين.'
                : 'The application suffered from slow data loading and poor query performance, negatively impacting user experience.',
            action: language === 'ar'
                ? ARBlumontRoles
                : ENBlumontrole,
            result: language === 'ar'
                ? ' تحسين سرعة تحميل البيانات بنسبة 85%\n تقليل زمن استجابة الـ API من 3 ثوانٍ إلى أقل من 0.5 ثانية\n زيادة رضا المستخدمين وتحسين معدل الاحتفاظ بنسبة 25%'
                : ' Improved data loading speed by 85%\n Reduced API response time from 3 seconds to under 0.5 seconds\n Increased user satisfaction and retention rate by 25%',
            isCurrent: true
        },
        {
            id: 2,
            company: 'Freelance / Team Projects',
            companyEn: 'Freelance Full-Stack Developer',
            logo: freeLancerLogo,
            position: language === 'ar' ? 'متدرب تطوير واجهة أمامية' : 'Freelance Full-Stack Developer',
            positionEn: 'Front-End Development Intern',
            type: language === 'ar' ? 'المشروع' : 'project based',
            period: 'Aug 2023 – Present',
            duration: language === 'ar' ? '3 سنوات' : '3 years',
            location: 'Freelance',
            locationType: 'Remote',
            technologies: [{
                name: 'HTML5',
                icon: <FaHtml5 />,
                color: '#E34F26',
            },
            {
                name: 'CSS3',
                icon: <FaCss3Alt />,
                color: '#1572B6',
            },
            {
                name: 'JavaScript',
                icon: <FaJs />,
                color: '#F7DF1E',
            },
            {
                name: 'React.js',
                icon: <FaReact />,
                color: '#61DAFB',
            },
            {
                name: 'Bootstrap',
                icon: <FaBootstrap />,
                color: '#7952B3',
            },
            {
                name: 'Git',
                icon: <FaGitAlt />,
                color: '#F05032',
            },
            {
                name: 'Node.Js',
                icon: <TbBrandNodejs  />,
                color: '#8ac926',
            },
            {
                name: 'Tailwindcss ',
                icon: <SiTailwindcss  />,
                color: '#5fa8d3',
            },
            {
                name: 'Redux ',
                icon: <SiRedux  />,
                color: '#F05032',
            }
            ,
            {
                name: 'Express js',
                icon: <SiExpress   />,
                color: '#000012',
            }
            ],
            challenge: language === 'ar'
                ? 'تطبيق التجارة الإلكترونية كان يعاني من واجهة مستخدم غير متجاوبة وضعف في إعادة استخدام المكونات، مما زاد من وقت التطوير والتعقيد.'
                : 'The e-commerce application had a non-responsive UI and poor component reusability, increasing development time and complexity.',
            action: language === 'ar'
                ? ARFullDev
                : ENFullDev,
            result: language === 'ar'
                ? ' تقليل وقت تطوير الميزات الجديدة بنسبة 40%\n تحسين تجربة المستخدم عبر جميع الأجهزة\n إعادة استخدام المكونات بنسبة 60% في صفحات مختلفة'
                : ' Reduced new feature development time by 40%\n Improved user experience across all devices\n Achieved 60% component reusability across different pages',
            isCurrent: false
        },
        {
            id: 3,
            company: 'Al-Furat University',
            companyEn: 'Part-Time Instructor',
            logo: alfuratLogo,
            position: language === 'ar' ? 'مدرس في الجامعة' : 'Part-Time Instructor',
            positionEn: 'Part-Time Instructor',
            type: language === 'ar' ? 'عقد' : 'contract',
            period: ' Oct 2014 – Feb 2017',
            duration: language === 'ar' ? 'سنتين ' : '2 years',
            location: 'Remote',
            locationType: 'Remote',
            technologies: [
                {
                    name: 'JavaScript',
                    icon: <FaJs />,
                    color: '#F7DF1E',
                },
                {
                    name: 'React.js',
                    icon: <FaReact />,
                    color: '#61DAFB',
                },
                {
                    name: 'Git',
                    icon: <FaGitAlt />,
                    color: '#F05032',
                },
                {
                    name: 'Bootstrap',
                    icon: <FaBootstrap />,
                    color: '#7952B3',
                }
            ],
            challenge: language === 'ar'
                ? 'التطبيق كان يعاني من سوء تنظيم الكود وصعوبة في التعاون الجماعي بسبب عدم استخدام نظام فعال للتحكم في الإصدارات.'
                : 'The application suffered from poor code organization and collaboration difficulties due to lack of effective version control.',
            // action: language === 'ar'
            //     ? ' تطبيق سير عمل Git/GitHub باستخدام استراتيجية Git Flow\n إجراء مراجعات الكود (Code Reviews) لضمان جودة الكود\n إعادة هيكلة المشروع باستخدام مبدأ فصل المسؤوليات (Separation of Concerns)\n توثيق الـ API والتعامل معها باستخدام Axios'
            //     : ' Implemented Git/GitHub workflow using Git Flow strategy\n Conducted code reviews to ensure code quality\n Restructured project using Separation of Concerns principle\n Documented APIs and handled them using Axios',
            result: language === 'ar'
                ? ' تحسين كفاءة التعاون الجماعي بنسبة 50%\n تقليل عدد الأخطاء البرمجية (Bugs) بنسبة 35%\n تسريع عملية التطوير بنسبة 30%'
                : ' Improved team collaboration efficiency by 50%\n Reduced bugs by 35%\n Accelerated development process by 30%',
            isCurrent: false
        }
    ];

    return (
        <section id="experience" className="section">
            <div className="">
                {/* Section Title */}
                <div className="gradient-text">
                        <h2 className="section-title1">
                            {language === 'ar' ? 'الخبرات العملية' : 'Work Experience'}
                        </h2>
                        <div className='line-div'> </div>{/* red line div*/}

                </div> 
                {/* Timeline */}
                <div className="card-container">
                    { experiences.map((exp) => (
                        <div key={exp.id} className="card">
                            {/* Timeline Content */}
                            <div className="">
                                {/* Company Logo and Header */}
                                <div className="card-header">
                                    <div className="company-logo-wrapper">
                                        <img
                                            src={exp.logo}
                                            alt={exp.company}
                                            className="card-img"
                                        />
                                    </div>
                                    <div className="">
                                        <h3 className="card-title">{exp.company}</h3>
                                        <div className="card-sub-title">
                                            <span className="">{exp.position}</span>
                                           
                                        </div>
                                    </div>
                                </div>

                                {/* Card body */}
                                <div className="card-body border-b-2 pb-2 border-b-gray-400">
                                    <div className='my-2 md:my-4 text-center'><span className="job-type">{exp.type}</span></div> 
                                    <div className="">
                                        <FontAwesomeIcon icon={faCalendarDays} style={{color: "rgb(177, 151, 252)",}} />
                                        <span className='font-normal ps-1 text-xs text-gray-400'>{exp.period} · {exp.duration}</span>
                                    </div>
                                    <div className="">
                                        <FontAwesomeIcon icon={faLocationDot} style={{color: "rgb(177, 151, 252)",}} />
                                        <span className='font-normal ps-1 text-xs text-gray-400'>{exp.location} · {exp.locationType}</span>
                                    </div>
                                </div>
                                   
                                {/* Technologies */}
                                <div className="flex gap-4 flex-wrap mt-4">
                                    {exp.technologies.map((tech, idx) => (
                                        <span
                                            key={idx}
                                            className=" bg-gray-100 rounded-2xl px-2 py-1 flex items-center gap-1"
                                            // style={{ display: 'flex', alignItems: 'center', gap: '6px' }}
                                        >
                                            <span style={{ color: tech.color, fontSize: '12px' }}>
                                                {tech.icon}
                                            </span>
                                            <span className='text-xs'>{tech.name}</span>
                                        </span>
                                    ))}
                                </div>

                                {/* CAR Section */}
                                <div className="card-body-detials">
                                    {/* Challenge */}
                                    {/* <div className="car-item ">
                                        <div className="car-icon">
                                            <span className="car-label">{language === 'ar' ? 'التحدي' : 'Challenge'}</span>
                                        </div>
                                        <p className="car-text">{exp.challenge}</p>
                                    </div> */}

                                    {/* Action */}
                                    <div className="car-item action-item">
                                        <div className="car-icon">
                                            <span className="car-label">{language === 'ar' ? 'المهام' : 'Roles'}</span>
                                        </div>
                                        <div className="car-text">
                                            <div  className="leading-relaxed transition-all duration-300 " >
 {console.log("render erpppppp")}
                                                <ExperienceCard action={exp.action}/>
                                             
                                            </div>
                                            {/* Toggle Button */}
                                                    {/* <div className="mt-3 flex justify-end">
                                                        <button 
                                                        onClick={() => setisExpanded(!isExpanded)}
                                                        className="text-xs font-bold uppercase tracking-wider text-indigo-600 hover:text-indigo-800 transition-colors focus:outline-none"
                                                        >
                                                        {isExpanded ? 'Show Less ▲' : 'Show More ▼'}
                                                        </button>
                                                    </div> */}
                                        </div>
                                    </div>

                                    {/* Result */}
                                    <div className="car-item result-item">
                                        <div className="car-icon">
                                            <span className="car-label">{language === 'ar' ? 'النتيجة' : 'Result'}</span>
                                        </div>
                                        <div className="car-text">
                                            {exp.result.split('\n').map((line, idx) => (
                                                <li key={idx}>{line.trim()}</li>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default memo(Experience);