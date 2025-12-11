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
      img: "/images/GHCND2.jpeg",
      title: "GHCN-D Climate Analytics ETL Pipeline",
      desc:
        "A data workflow that transforms years of climate observations into clean, structured datasets ready for analytics and modeling. It standardizes raw records, applies quality checks, and organizes outputs into layers optimized for exploration and downstream prediction tasks.",
      tags: [
        "PySpark",
        "Databricks",
        "Delta Lake",
        "ETL",
        "Feature Engineering",
      ],
      github: "https://github.com/sundar139/GHCN-D-ETL-Project",
      live: null,
      featured: false,
    },
    {
      img: "/images/PJM.png",
      title: "PJM-LMP-Forecasting",
      desc:
        "An end-to-end machine learning system that predicts Locational Marginal Prices in the PJM electricity market to support energy trading and grid management decisions. The production-grade pipeline fetches real-time data from PJM APIs, engineers temporal features including lags and rolling windows, trains regression models with experiment tracking, and serves predictions through a scalable API endpoint.",
      tags: ["Python", "FastAPI", "XGBoost", "MLflow", "Terraform", "Docker", "AWS S3"],
      github:
        "https://github.com/sundar139/PJM-LMP-Forecasting",
      live: null,
      featured: false,
    },
    {
      img: "/images/IOWA.jpeg",
      title: "IOWA Liquor Sales ETL Pipeline",
      desc:
        "A data pipeline that ingests millions of liquor sales records into a centralized store to support reporting and business insights. It automates end-to-end data flow, from ingestion to cleaned, analytics-ready tables, providing reliable daily updates with minimal manual effort.",
      tags: ["Apache Airflow", "Python", "PostgreSQL", "AWS RDS", "Docker", "ETL"],
      github: "https://github.com/sundar139/IOWA-Liquor-Sales",
      live: null,
      featured: false,
    },
    {
      img: "/images/Pixar.png",
      title: "Pixar Analytics ELT Pipeline",
      desc:
        "An analytics-ready data foundation for exploring movies, performance, and trends across the Pixar catalog. It centralizes raw records into a unified warehouse and applies layered transformations that make it easy for stakeholders to answer questions about revenue, franchises, and audience behavior.",
      tags: ["Snowflake", "DBT", "SQL", "ELT"],
      github:
        "https://github.com/sundar139/Pixar_Analytics",
      live: null,
      featured: false,
    },
    {
      img: "/images/Convex.png",
      title: "Synthetic Vision: AI vs Human Art Classifier ",
      desc:
        "A visual recognition project that distinguishes AI-generated artwork from human-made pieces to support authenticity checks and research on creative patterns. It evaluates thousands of images, analyzes visual characteristics, and produces a confidence score indicating whether a piece is likely human- or machine-created.",
      tags: ["TensorFlow", "Keras", "CNN", "OpenCV", "Binary Classification"],
      github:
        "https://github.com/sundar139/Synthetic-Vision-Classifying-Human-vs-AI-Generated-Art-Using-CNNs",
      live: null,
      featured: false,
    },
    {
      img: "/images/TMDB2.jpeg",
      title: "TMDB Movies EDA & Dashboard ",
      desc:
        "An end-to-end analytics project that explores decades of movie data to uncover trends in genres, ratings, and box office outcomes. It powers interactive dashboards where users can slice by time, genre, and revenue to discover hidden gems and high-performing patterns.",
      tags: ["Python", "Pandas", "Power BI", "EDA"],
      github:
        "https://github.com/sundar139/TMDB-Movies-Data-Analysis",
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
                <div className="w-full h-64 md:h-72 lg:h-80 bg-neutral-900 rounded-xl flex items-center justify-center overflow-hidden">
                  <img
                    src={p.img}
                    alt={p.title}
                    className="max-w-full max-h-full object-contain"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
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
