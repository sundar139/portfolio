import { useState, useEffect } from "react";
import { Player } from "@lottiefiles/react-lottie-player";

import { navLinks } from "../constants";
import scholarAnimation from "/src/assets/scholar.json";
import githubAnimation from "/src/assets/github.json";
import linkedinAnimation from "/src/assets/linkedin.json";

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? "scrolled" : "not-scrolled"}`}>
      <div className="inner">
        <a href="#hero" className="logo">
          RJ
        </a>

        <nav className="desktop">
          <ul>
            {navLinks.map(({ link, name }) => (
              <li key={name} className="group">
                <a href={link}>
                  <span>{name}</span>
                  <span className="underline" />
                </a>
              </li>
            ))}
          </ul>
        </nav>
          
        <div className="right-section" style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          <a href="https://scholar.google.com/citations?hl=en&view_op=list_works&gmla=AH8HC4w8kV_csGU0PTrSR2SlcjpjymTzY8Qo5S4HN7LFsJfQdE1bNAhyfN0BcaJ14AYw4a93dAYvHVu5nra7_g&user=90MHLXUAAAAJ" target="_blank" rel="noopener noreferrer">
            <Player
              autoplay
              loop
              src={scholarAnimation}
              style={{ height: "40px", width: "40px" }}
            />
          </a>
          <a href="https://github.com/sundar139" target="_blank" rel="noopener noreferrer">
            <Player
              autoplay
              loop
              src={githubAnimation}
              style={{ height: "20px", width: "20px" }}
            />
          </a>
          <a href="https://www.linkedin.com/in/rohith-sundar-j-88178a275/" target="_blank" rel="noopener noreferrer">
            <Player
              autoplay
              loop
              src={linkedinAnimation}
              style={{ height: "32px", width: "32px" }}
            />
          </a>

          <a href="#contact" className="contact-btn group">
            <div className="inner">
              <span>Contact me</span>
            </div>
          </a>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
