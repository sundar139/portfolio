import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Title from "/src/components/Title.jsx";

gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
  const sectionRef = useRef(null);

  // Refs for animating elements one by one
  const imageRef = useRef(null);
  const headingRef = useRef(null);
  const roleRef = useRef(null);
  const dateRef = useRef(null);
  const responsibilitiesTitleRef = useRef(null);
  const listItemRefs = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      tl.from(imageRef.current, { opacity: 0, y: 20, duration: 0.2 })
        .from(headingRef.current, { opacity: 0, y: 20, duration: 0.2 })
        .from(roleRef.current, { opacity: 0, y: 20, duration: 0.2 })
        .from(dateRef.current, { opacity: 0, y: 20, duration: 0.2 })
        .from(responsibilitiesTitleRef.current, { opacity: 0, y: 20, duration: 0.2 })
        .from(listItemRefs.current, {
          opacity: 0,
          y: 20,
          duration: 0.4,
          stagger: 0.3,
        });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="flex flex-col items-center justify-center section-padding scroll-mt-25"
    >
      <div className="w-full h-full md:px-20 px-5">
        <Title title="Work Experience" />

        <div className="mt-20 flex flex-col gap-10">
          <div className="flex w-full gap-4 items-center">
            <div className="w-[5%] hidden md:flex justify-center">
              <div className="w-1 h-100 rounded-full gradient-waterfall" />
            </div>

            <div className="w-full md:w-[95%]">
              <img
                ref={imageRef}
                src="/images/logo.png"
                alt="Company Logo"
                className="w-16 h-16 object-contain"
              />
              <h2
                ref={headingRef}
                className="text-2xl font-bold text-white"
              >
                Kennesaw State University, UDM - Lab (Now CHAT - Lab)
              </h2>
              <p ref={roleRef} className="text-lg text-white mt-2">
                RESEARCH ASSISTANT
              </p>
              <p ref={dateRef} className="text-sm text-white-50 mt-1">
                🗓️ Aug 2023 — Jul 2024
              </p>

              <p
                ref={responsibilitiesTitleRef}
                className="text-[#839CB5] italic mt-4"
              >
                Responsibilities
              </p>
              <ul className="list-disc ms-5 mt-2 flex flex-col gap-2 text-white text-justify">
                {[
                  "Developed a validation pipeline to extract and annotate 2,750 user posts from ReachOut mental health forums. Implemented data cleaning, lemmatization, and privacy-preserving techniques. Built a composite model combining CNN, BiLSTM, and multi-head attention for multi-label classification of mental health disorders. Used BERT-based models for post summarization, evaluated with ROUGE scores, and optimized for scalability.",
                  "Designed a text processing pipeline to analyze EHR data related to suicide attempts and ideation. Preprocessed medical texts by cleaning and formatting complex structures. Applied keyword-based methods to extract relevant sentences and trained a transformer-based binary classifier, achieving 82% accuracy. Generated a labeled dataset of 16,280 sentences for future research.",
                  "Built a Python tool to scrape and analyze mental health app data from the Google Play Store. Extracted app details, tags, ratings, and user reviews, and automated the storage of collected data into text files for analysis and record-keeping.",
                ].map((text, i) => (
                  <li
                    key={i}
                    ref={(el) => (listItemRefs.current[i] = el)}
                    className="text-base"
                  >
                    {text}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
