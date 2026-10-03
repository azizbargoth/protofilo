import React, { useState } from "react";
import { useTheme } from "../contexts/ThemeContext";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "../assets/css/project.css";
import { projects,categories } from "../js/projects";

// Import project images (add your own images to assets/images/)


const Projects = () => {
  const { language } = useTheme();
  const [selectedProject, setSelectedProject] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [activeCategory, setActiveCategory] = useState("all");

  // Projects Data
  

  // Filter projects based on active category
  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((project) => project.categoryId === activeCategory);

  const openModal = (project) => {
    setSelectedProject(project);
    setShowModal(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedProject(null);
    document.body.style.overflow = "unset";
  };

  return (
    <section id="projects" className="section pb-8 md:pb-20">
      <div>
        <h1 className="gradient-text section-title1">
          {language === "Ar" ? "مشاريعي" : "My Projects"}
        </h1>
        <div className="line-div"> </div>
        <p className="section-subtitle text-muted mt-1">
          {language === "Ar"
            ? "مجموعة من مشاريعي في تطوير الويب"
            : "A collection of my web development projects"}
        </p>
      </div>
      <div className="container m-auto">
        {/* Category Filter Buttons - Similar to Skills section */}
        <div className="projects-filter">
          {categories.map((category) => (
            <button
              key={category.id}
              className={`filter-btn ${activeCategory === category.id ? "active" : ""}
               text-gray-700 bg-gray-300 border-2 rounded-3xl focus:border-none  border-accent/80`}
              onClick={() => setActiveCategory(category.id)}
            >
              {language === "Ar" ? category.nameAr : category.nameEn}
            </button>
          ))}
        </div>

        {/* Projects Count */}
        <div className="projects-count  text-gray-700 bg-gray-300 border-2 rounded-3xl">
          {language === "Ar"
            ? `عرض ${filteredProjects.length} مشاريع`
            : `Showing ${filteredProjects.length} projects`}
        </div>
        <div className="card py-20 px-4 md:px-12">
          <Swiper
            modules={[Navigation]}
            navigation
            spaceBetween={25}
            slidesPerView={3}
            breakpoints={{
              320: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
          >
            {filteredProjects.map((project) => (
              <SwiperSlide key={project.id} className="">
                <div className="project-card my-3 ">
                  <div className="project-image-container">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="project-image"
                    />
                    <div className="project-overlay">
                      <span className="project-category">
                        {language === "Ar"
                          ? project.categoryAr
                          : project.category}
                      </span>
                    </div>
                  </div>

                  <div className="project-content ">
                    <h3 className="project-title">
                      {language === "Ar" ? project.titleAr : project.title}
                    </h3>

                    <p className="project-description">
                      {language === "Ar"
                        ? project.descriptionAr.substring(0, 100) + "..."
                        : project.description.substring(0, 100) + "..."}
                    </p>

                    <div className="project-actions">
                      <button
                        className="project-btn show-more"
                        onClick={() => openModal(project)}
                      >
                        {language === "Ar" ? "عرض التفاصيل" : "Show More"}
                      </button>

                      <div className="project-links">
                        <a
                          href={project.liveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="project-link live"
                        >
                          <i className="fas fa-external-link-alt"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        {/* Show message if no projects in category */}
        {filteredProjects.length === 0 && (
          <div className="no-projects">
            <i className="fas fa-folder-open"></i>
            <p>
              {language === "Ar"
                ? "لا توجد مشاريع في هذا التصنيف"
                : "No projects found in this category"}
            </p>
          </div>
        )}

        {/* Project Modal */}
        {showModal && selectedProject && (
          <div className="modal-overlay" onClick={closeModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <button className="modal-close" onClick={closeModal}>
                <i className="fas fa-times"></i>
              </button>

              <div className="modal-body">
                <div className="modal-image-container">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="modal-image"
                  />
                </div>

                <div className="modal-details">
                  <h2 className="modal-title">
                    {language === "Ar"
                      ? selectedProject.titleAr
                      : selectedProject.title}
                  </h2>

                  <div className="modal-badges">
                    {selectedProject.badges.map((badge, index) => (
                      <span
                        key={index}
                        className="project-badge"
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "6px",
                        }}
                      >
                        <span style={{ color: badge.color, fontSize: "16px" }}>
                          {badge.icon}
                        </span>
                        <span>{badge.name}</span>
                      </span>
                    ))}
                  </div>

                  <p className="modal-description">
                    {language === "Ar"
                      ? selectedProject.descriptionAr
                      : selectedProject.description}
                  </p>

                  <div className="modal-features">
                    <h3>{language === "Ar" ? "المميزات:" : "Features:"}</h3>
                    <ul className="features-list">
                      {(language === "Ar"
                        ? selectedProject.featuresAr
                        : selectedProject.features
                      ).map((feature, index) => (
                        <li key={index}>
                          <i className="fas fa-check-circle"></i>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="modal-actions">
                    <a
                      href={selectedProject.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="modal-btn live"
                    >
                      <i className="fas fa-external-link-alt"></i>
                      {language === "Ar" ? "معاينة مباشرة" : "Live Preview"}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
