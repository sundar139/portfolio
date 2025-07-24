import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import VanillaTilt from "vanilla-tilt";
import { useGSAP } from "@gsap/react";
import Title from "/src/components/Title.jsx";

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const sectionRef = useRef(null);
  const cardRefs = useRef([]);

  const projects = [
    {
      img: "/images/project1.png",
      title: "Heart Attack Data Analysis",
      link: "https://github.com/sundar139/Heart-Attack-Data-Analysis",
    },
    {
      img: "/images/project2.png",
      title: "Predicting Stocks",
      link: "https://github.com/sundar139/Predicting-Stock-Prices-Using-Deep-Learning-Models",
    },
    {
      img: "/images/project3.png",
      title: "News Sentiment Analysis",
      link: "https://github.com/sundar139/News-Sentiment-Analysis",
    },
    {
      img: "/images/project2.png",
      title: "Pneumonia Detection",
      link: "https://github.com/sundar139/Pneumonia-Detection-Using-Deep-Learning-on-Chest-X-ray-Images",
    },
  ];

  // Initialize VanillaTilt
  useEffect(() => {
    cardRefs.current.forEach((card) => {
      if (card) {
        VanillaTilt.init(card, {
          max: 15,
          speed: 500,
          glare: true,
          "max-glare": 0.2,
          scale: 1.02,
        });
      }
    });
  }, []);

  // GSAP Animations
  useGSAP(() => {
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );

    cardRefs.current.forEach((card, index) => {
      if (card) {
        gsap.fromTo(
          card,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            delay: 0.2 * (index + 1),
            scrollTrigger: {
              trigger: card,
              start: "top bottom-=100",
              toggleActions: "play none none reverse",
            },
          }
        );
      }
    });
  }, []);

  return (
    <section
      id="work"
      ref={sectionRef}
      className="app-showcase scroll-mt-12"
    >
      <div className="w-full h-full md:px-20 px-5">
        <Title title="My Projects" />

        <div className="grid-4-cols gap-6 mt-8">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              ref={(el) => (cardRefs.current[index] = el)}
              className="card frosted-card p-4 rounded-xl transform transition-transform duration-300 hover:scale-105"
            >
              <img
                src={project.img}
                alt={project.title}
                className="project-image-wrapper w-full h-48 object-cover rounded-md mb-4"
              />
              <h2 className="card-title text-lg font-semibold text-center">
                {project.title}
              </h2>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
