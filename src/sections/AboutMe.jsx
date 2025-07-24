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
            I’m a Computer Science professional with expertise in Machine Learning, NLP, and Generative AI, focused on building intelligent, cloud-integrated solutions. My experience includes developing transformer-based chatbots, inference pipelines, and AI-powered applications using technologies like Python, TensorFlow, PyTorch, Huggingface, and Langchain. I’ve worked with LLMs such as GPT-2, GPT-3.5, BERT, RoBERTa, and Mistral, and designed Retrieval-Augmented Generation (RAG) pipelines for advanced language tasks.
          </p>

          <p
            ref={(el) => (paragraphRefs.current[1] = el)}
            className="text-white text-sm md:text-lg leading-relaxed text-justify"
          >
            I’m skilled in deploying AI systems using AWS services including EC2, S3, Bedrock, Lambda, and SageMaker, and managing workflows with Docker, Kubernetes, MLflow, and GitHub Actions. My strengths also include data processing with Pandas and NumPy, big data tools like Spark and Hadoop, and data visualization using Power BI, Plotly, and Seaborn. Passionate about impactful domains like health informatics and education, I aim to continue delivering scalable, real-world AI solutions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
