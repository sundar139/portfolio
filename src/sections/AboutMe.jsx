import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lottie from "lottie-react";
import animationData from "/src/assets/a1.json";

gsap.registerPlugin(ScrollTrigger);

const AboutMe = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const paragraphRefs = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });

      tl.fromTo(
        headingRef.current,
        { x: -50, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.8, ease: "power3.out" }
      );

      tl.fromTo(
        paragraphRefs.current,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.3,
        },
        "-=0.4"
      );
    }, sectionRef);

    return () => ctx.revert(); // clean-up on unmount
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="section-padding scroll-mt-28"
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center max-w-7xl mx-auto">
        {/* Left Side: Lottie animation */}
        <div className="md:col-span-4 flex justify-center items-center h-full">
          <Lottie
            animationData={animationData}
            loop={true}
            className="w-100 h-100"
          />
        </div>

        {/* Right Side: About content */}
        <div className="md:col-span-8 space-y-5 text-center md:text-left">
          <h2
            ref={headingRef}
            className="text-3xl md:text-4xl font-bold text-white"
          >
            About Me
          </h2>

          <p
            ref={(el) => (paragraphRefs.current[0] = el)}
            className="text-white text-sm md:text-lg leading-relaxed text-justify"
          >
            I’m a data engineer and applied AI specialist who builds real, production-ready systems that solve messy problems end to end. I architect and implement scalable ETL/ELT pipelines, build analytical models, and apply machine learning and deep learning across domains. My academic research experience includes NLP and mental-health-oriented modeling, with presentations at KSU’s 2023 Symposium of Student Scholars and a co-authored poster at IEEE/ACM CHASE 2024. I’ve applied forecasting methods in multiple contexts, including stock price prediction in my graduate capstone, and I built a project to predict Locational Marginal Prices (LMP) in the PJM electricity market using data ingestion, feature engineering and XGBoost models, served through a FastAPI endpoint to enable real-time prediction workflows.
          </p>

          <p
            ref={(el) => (paragraphRefs.current[1] = el)}
            className="text-white text-sm md:text-lg leading-relaxed text-justify"
          >
            On the engineering side, I specialize in building scalable data infrastructure with PySpark, Databricks, Snowflake, dbt and Airflow that transform raw data into analytics-ready formats. I’ve done everything from climate and public-data ETL pipelines to high-throughput streaming workflows and exploratory analyses across finance, healthcare, media and business datasets. My AI work spans sentiment analysis, computer vision and transformer-based NLP, and I built AssignWell, a mental-health-aware academic planner that blends user workflows with AI insights. Across research and open-source projects, I bring a rare blend of deep technical skills, product thinking and a drive to deliver solutions that matter.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
