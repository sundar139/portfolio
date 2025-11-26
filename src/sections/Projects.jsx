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
      desc:
        "Interactive analysis of heart health datasets with preprocessing, feature engineering, and model evaluation.",
      tags: [
        "Python",
        "Pandas",
        "Sklearn",
        "EDA",
        "Classification",
      ],
      github: "https://github.com/sundar139/Heart-Attack-Data-Analysis",
      live: null,
      featured: true,
    },
    {
      img: "/images/project2.png",
      title: "Predicting Stocks",
      desc:
        "Deep learning models for stock price forecasting with LSTM and evaluation metrics.",
      tags: ["Python", "TensorFlow", "LSTM", "Time Series", "Finance"],
      github:
        "https://github.com/sundar139/Predicting-Stock-Prices-Using-Deep-Learning-Models",
      live: null,
      featured: true,
    },
    {
      img: "/images/project3.png",
      title: "News Sentiment Analysis",
      desc:
        "NLP pipeline to classify news sentiment, with vectorization and model comparisons.",
      tags: ["NLP", "Scikit-Learn", "TF-IDF", "Classification", "Python"],
      github: "https://github.com/sundar139/News-Sentiment-Analysis",
      live: null,
      featured: true,
    },
    {
      img: "/images/project2.png",
      title: "Pneumonia Detection",
      desc:
        "CNN-based classifier on chest X-ray images with training pipeline and evaluation.",
      tags: ["CNN", "Keras", "Medical Imaging", "Python"],
      github:
        "https://github.com/sundar139/Pneumonia-Detection-Using-Deep-Learning-on-Chest-X-ray-Images",
      live: null,
      featured: false,
    },
  ];

  // Initialize VanillaTilt
  useEffect(() => {
    cardRefs.current.forEach((card) => {
      if (card) {
        VanillaTilt.init(card, {
          max: 8,
          speed: 300,
          glare: false,
          scale: 1.02,
          easing: "cubic-bezier(.03,.98,.52,.99)",
          gyroscope: true,
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
            duration: 0.9,
            delay: 0.12 * (index + 1),
            ease: "power3.out",
            force3D: true,
            scrollTrigger: {
              trigger: card,
              start: "top bottom-=100",
              toggleActions: "play none none none",
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
      className="app-showcase section-padding scroll-mt-12"
    >
      <div className="w-full h-full md:px-20 px-5">
        <Title title="My Projects" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {projects.map((p, index) => (
            <div
              key={index}
              ref={(el) => (cardRefs.current[index] = el)}
              className="bg-black text-white rounded-2xl border border-white/10 shadow-xl overflow-hidden hover:border-white/20 transform-gpu transition-transform duration-300 ease-out hover:scale-[1.02]"
              style={{ willChange: "transform" }}
            >
              <div className="p-4">
                <img
                  src={p.img}
                  alt={p.title}
                  className="w-full h-64 md:h-72 lg:h-80 object-cover rounded-xl"
                  loading="lazy"
                  decoding="async"
                />
              </div>

              <div className="px-4">
                {p.featured && (
                  <span className="inline-block text-xs px-2 py-1 rounded-full border border-white/15 bg-white/5 text-white">Featured Project</span>
                )}
              </div>

              <div className="px-4 pt-3 pb-4">
                <h3 className="text-lg font-semibold">{p.title}</h3>
                <p className="text-sm text-neutral-300 mt-2">{p.desc}</p>

                <div className="flex flex-wrap gap-2 mt-4">
                  {p.tags?.map((t, i) => (
                    <span key={i} className="px-2.5 py-1 text-xs rounded-full border border-white/15 bg-white/5 text-white">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-3 mt-6">
                  {p.github && (
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 text-sm rounded-lg border border-white/15 bg-white/5 hover:bg-white/10"
                    >
                      GitHub
                    </a>
                  )}
                  {p.live && (
                    <a
                      href={p.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 text-sm rounded-lg border border-white/15 bg-white/5 hover:bg-white/10"
                    >
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
