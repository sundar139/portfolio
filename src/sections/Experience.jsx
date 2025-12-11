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
          <div className="flex w-full gap-4 items-stretch">
            <div className="w-[5%] hidden md:flex items-stretch justify-center">
              <div className="w-1 h-full rounded-full gradient-waterfall" />
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
                  "Extracting & Annotating Mental‑Health Forum Posts: Led the creation of a comprehensive validation pipeline to ingest and prepare 2 750 user posts from ReachOut forums. Cleaned over 3.3 million tokens of free‑text by removing identifiers, standardizing format and applying lemmatization, providing a secure, high‑quality foundation for mental‑health research.",
                  "Multi‑Label Classification of Forum Posts: Designed and deployed a composite neural network combining convolutional layers, bidirectional LSTMs and multi‑head attention to identify multiple mental‑health disorders within user posts. Manually annotated the training data and applied binary classifiers with ensemble methods, which improved multi‑label classification accuracy and enabled reliable tagging of posts.",
                  "Summarisation & Model Evaluation: Integrated BERT‑based models to generate concise summaries of lengthy forum posts. Evaluated summary quality with ROUGE metrics and optimized the process for scalability, ensuring coherent outputs and efficient inference for large datasets.",
                  "EHR Text Processing for Suicide Detection: Built a multi‑stage text‑processing pipeline to extract and normalize Electronic Health Records related to suicide attempts and ideation. Developed robust preprocessing routines to handle messy medical text, including splitting numbered lists and resolving line breaks, enabling accurate sentence extraction without pre‑trained models.",
                  "Classification & Dataset Creation: Developed a multi‑layer transformer‑based binary classifier that achieved 82 % accuracy in predicting suicide attempt or ideation labels. As a result, produced a curated dataset of 16 280 labelled sentences with ground truth annotations, supporting ongoing research into suicide‑related language.",
                  "Mental‑Health App Scraping Tool: Created a Python utility to scrape the Google Play Store for mental‑health apps, capturing metadata, ratings and user reviews. Automated the storage of extracted data to text files, laying the groundwork for subsequent analysis of app efficacy and user sentiment.",
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
