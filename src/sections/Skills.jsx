import { useEffect } from "react";
import Title from "/src/components/Title.jsx";
import "../styles/skills.css";
import appCode from "/src/App.jsx?raw";
import heroCode from "/src/sections/Hero.jsx?raw";
import navCode from "/src/sections/NavBar.jsx?raw";
import projectsCode from "/src/sections/Projects.jsx?raw";
import expCode from "/src/sections/Experience.jsx?raw";
import aboutCode from "/src/sections/AboutMe.jsx?raw";
import contactCode from "/src/sections/ContactMe.jsx?raw";
import buttonCode from "/src/components/Button.jsx?raw";
import titleCode from "/src/components/Title.jsx?raw";
import heroModelCode from "/src/HeroModels/HeroGLB.jsx?raw";
import constantsCode from "/src/constants/index.js?raw";
import stylesCode from "/src/index.css?raw";

const Skills = () => {
  useEffect(() => {
    const cardLine = document.getElementById("skillsCardLine");
    const particlesCanvas = document.getElementById("skillsParticles");
    const container = particlesCanvas?.parentElement;
    if (!cardLine) return;

    const skills = [
      { title: "Data Analysis", description: "Pandas, NumPy, visualization" },
      { title: "Data Science", description: "Scikit-Learn, TensorFlow, PyTorch" },
      { title: "AI & LLMs", description: "GPT, BERT, RAG pipelines" },
      { title: "MLOps", description: "AWS, Docker, Kubernetes, MLflow" },
      { title: "Databases", description: "SQL, NoSQL, Big Data" },
      { title: "Dev Tools", description: "Git, CI/CD, Streamlit" },
    ];

    const projectCodes = [
      appCode,
      heroCode,
      navCode,
      projectsCode,
      expCode,
      aboutCode,
      contactCode,
      buttonCode,
      titleCode,
      heroModelCode,
      constantsCode,
      stylesCode
    ];
    let codeIndex = 0;

    const fitCodeToCard = (text, targetChars) => {
      if (!text) return "";
      let out = text;
      while (out.length < targetChars) out += text;
      return out.slice(0, targetChars);
    };
    const compactCode = (text) => (text || "").replace(/\s+/g, "");
    const renderCodeHTMLChunked = (text, chunkSize = 60) => {
      let html = "";
      for (let i = 0; i < text.length; i += chunkSize) {
        const chunk = text.slice(i, i + chunkSize);
        const d = (Math.random() * 1.8).toFixed(2) + "s";
        html += `<span class="code-char" style="--d:${d}">${chunk}</span>`;
      }
      return html;
    };

    const speed = 80;
    let position = 0;
    let lastTime = 0;
    let clipAccumulator = 0;

    const nextProjectCode = () => {
      const c = projectCodes[codeIndex % projectCodes.length] || "";
      codeIndex += 1;
      return c;
    };

    const createCardWrapper = (skill) => {
      const wrapper = document.createElement("div");
      wrapper.className = "card-wrapper";

      const normal = document.createElement("div");
      normal.className = "card card-normal";
      normal.innerHTML = `
        <div class="card-title">${skill.title}</div>
        <div class="card-description">${skill.description}</div>
      `;

      const code = document.createElement("div");
      code.className = "card card-code";
      const codeContent = document.createElement("div");
      codeContent.className = "code-content";
      const baseCode = nextProjectCode();
      const cols = Math.floor(320 / 7);
      const rows = Math.floor(200 / 14);
      const target = Math.max(600, Math.floor(cols * rows * 1.2));
      const cleanCompacted = compactCode(baseCode);
      codeContent.innerHTML = renderCodeHTMLChunked(fitCodeToCard(cleanCompacted, target));
      wrapper.setAttribute("data-base-code", baseCode);
      wrapper.setAttribute("data-condensed", "true");
      wrapper.setAttribute("data-code-index", String((codeIndex - 1) % projectCodes.length));
      code.appendChild(codeContent);

      wrapper.appendChild(normal);
      wrapper.appendChild(code);
      return wrapper;
    };


    const updateCardClipping = () => {
      const beamCenterX = window.innerWidth / 2;
      const beamWidth = 4;
      const leftBoundary = beamCenterX - beamWidth / 2;
      const rightBoundary = beamCenterX + beamWidth / 2;
      cardLine.querySelectorAll(".card-wrapper").forEach((wrapper) => {
        const rect = wrapper.getBoundingClientRect();
        const cardLeft = rect.left;
        const cardRight = rect.right;
        const width = rect.width;
        const normalCard = wrapper.querySelector(".card-normal");
        const codeCard = wrapper.querySelector(".card-code");
        if (cardLeft < rightBoundary && cardRight > leftBoundary) {
          const intersectLeft = Math.max(leftBoundary - cardLeft, 0);
          const intersectRight = Math.min(rightBoundary - cardLeft, width);
          const normalClipRight = (intersectLeft / width) * 100;
          const codeClipLeft = (intersectRight / width) * 100;
          normalCard.style.setProperty("--clip-right", `${normalClipRight}%`);
          codeCard.style.setProperty("--clip-left", `${codeClipLeft}%`);
          // keep condensed content even while intersecting
          if (!wrapper.hasAttribute("data-scanned") && intersectLeft > 0) {
            wrapper.setAttribute("data-scanned", "true");
            const sweep = document.createElement("div");
            sweep.className = "scan-effect";
            wrapper.appendChild(sweep);
            setTimeout(() => sweep.remove(), 600);
          }
        } else {
          if (cardRight < leftBoundary) {
            normalCard.style.setProperty("--clip-right", "100%");
            codeCard.style.setProperty("--clip-left", "100%");
            wrapper.setAttribute("data-condensed", "true");
          } else if (cardLeft > rightBoundary) {
            normalCard.style.setProperty("--clip-right", "0%");
            codeCard.style.setProperty("--clip-left", "0%");
            wrapper.setAttribute("data-condensed", "true");
          }
          wrapper.removeAttribute("data-scanned");
        }
      });
    };

    const allSkills = skills.concat(skills);
    cardLine.innerHTML = "";
    allSkills.forEach((s) => cardLine.appendChild(createCardWrapper(s)));

    const prefersReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // particle system
    let ctx = null;
    let width = 0;
    let height = 0;
    const particles = [];
    const maxParticles = 1400;
    const spawnBase = 480;
    let fpsAvg = 60;
    const pickColor = () => {
      const roll = Math.random();
      if (roll < 0.28) return "#00fff0"; // neon cyan
      if (roll < 0.50) return "#ff00ff"; // neon magenta
      if (roll < 0.70) return "#00aaff"; // neon blue
      if (roll < 0.82) return "#ff1493"; // neon pink
      if (roll < 0.90) return "#a100ff"; // neon purple
      if (roll < 0.96) return "#39ff14"; // neon green
      return "#f9ff00"; // neon yellow
    };
    const hexToRgb = (hex) => {
      const c = hex.replace('#','');
      const n = parseInt(c, 16);
      return { r: (n >> 16) & 255, g: (n >> 8) & 255, b: n & 255 };
    };

    const setupCanvas = () => {
      if (!particlesCanvas) return;
      ctx = particlesCanvas.getContext('2d');
      width = container.clientWidth;
      height = container.clientHeight;
      particlesCanvas.width = width;
      particlesCanvas.height = height;
    };

    const spawnParticle = () => {
      const x = width / 2;
      const y = Math.random() * height;
      const vx = 80 + Math.random() * 140;
      const vy = (Math.random() - 0.5) * 40;
      particles.push({
        x,
        y,
        vx,
        vy,
        life: 1,
        decay: 0.6 + Math.random() * 0.4,
        radius: 0.9 + Math.random() * 0.7,
        radiusDecay: 0.30 + Math.random() * 0.20,
        color: pickColor()
      });
      if (particles.length > maxParticles) particles.shift();
    };

    const updateParticles = (delta) => {
      if (!ctx) return;
      const scale = Math.min(1, Math.max(0.5, fpsAvg / 60));
      const spawnCount = prefersReduced ? 0 : Math.floor(spawnBase * scale * delta);
      for (let i = 0; i < spawnCount; i++) spawnParticle();

      ctx.clearRect(0, 0, width, height);
      ctx.globalCompositeOperation = 'lighter';
      particles.forEach(p => {
        p.x += p.vx * delta;
        p.y += p.vy * delta;
        p.life -= p.decay * delta;
        p.radius = Math.max(0, p.radius - p.radiusDecay * delta);
        if (p.life <= 0) return;
        if (p.x < width / 2) return;
        const rgb = hexToRgb(p.color);
        ctx.beginPath();
        const alpha = Math.max(0, Math.min(1, p.life));
        ctx.shadowColor = `rgba(${rgb.r},${rgb.g},${rgb.b},${alpha})`;
        ctx.shadowBlur = 20;
        ctx.fillStyle = `rgba(${rgb.r},${rgb.g},${rgb.b},${alpha})`;
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();
      });
    };

    setupCanvas();
    const onResize = () => setupCanvas();
    window.addEventListener('resize', onResize);

    const step = (ts) => {
      if (!lastTime) lastTime = ts;
      const delta = (ts - lastTime) / 1000;
      lastTime = ts;
      position -= speed * delta;
      const totalWidth = cardLine.scrollWidth;
      if (position <= -totalWidth / 2) position = 0;
      cardLine.style.transform = `translateX(${position}px)`;
      clipAccumulator += delta;
      if (clipAccumulator >= 0.05) {
        updateCardClipping();
        clipAccumulator = 0;
      }
      updateParticles(delta);
      const fps = delta > 0 ? (1 / delta) : 60;
      fpsAvg = fpsAvg * 0.9 + fps * 0.1;
      requestAnimationFrame(step);
    };

    const raf = requestAnimationFrame(step);
    const interval = null;

    return () => {
      cancelAnimationFrame(raf);
      if (interval) clearInterval(interval);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return (
    <section id="skills" className="bg-black text-white py-20 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        <Title title="Core Skills" />
        <div className="scan-container">
          <canvas className="particles-canvas" id="skillsParticles" />
          <div className="beam">
            <div className="beam-core"></div>
            <div className="beam-halo-cyan"></div>
            <div className="beam-halo-pink"></div>
            <div className="beam-halo-white"></div>
            <div className="beam-halo-white-outer"></div>
            <div className="beam-halo-blue"></div>
          </div>
          <div className="card-stream" id="skillsCardStream">
            <div className="card-line" id="skillsCardLine" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
