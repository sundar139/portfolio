import { useEffect, useRef } from "react";
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
  const sectionRef = useRef(null);
  useEffect(() => {
    const cardLine = document.getElementById("skillsCardLine");
    const backCanvas = document.getElementById("skillsParticlesBack");
    const frontCanvas = document.getElementById("skillsParticlesFront");
    const cardStream = document.getElementById("skillsCardStream");
    const container = backCanvas?.parentElement;
    if (!cardLine || !backCanvas || !frontCanvas || !container || !cardStream) return;
    const sectionEl = sectionRef.current;

    const skills = [
      {
        variant: "ai",
        html: `
            <div class="card-heading"><span class="card-heading-row"><span class="card-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="20" height="20"><path d="M8 5c-2 0-3.5 1.6-3.5 3.5 0 .6.1 1.1.4 1.6C3.9 10.6 3 11.8 3 13.2c0 2.1 1.8 3.8 3.9 3.8H9a3 3 0 0 0 3 3 3 3 0 0 0 3-3h2.1c2.2 0 3.9-1.7 3.9-3.8 0-1.4-.9-2.6-1.9-3.1.3-.5.4-1 .4-1.6C19.5 6.6 18 5 16 5c-.7 0-1.3.2-1.9.5C13.4 4 12.3 3 10.9 3s-2.5 1-3.2 2.5C7.3 5.2 6.7 5 6 5z"></path><path d="M12 7v8"></path><path d="M10 10.5h4"></path></svg></span><span>AI & Machine Learning</span></span></div>
            <div class="pill-list">
              <span class="pill">TensorFlow</span>
              <span class="pill">PyTorch</span>
              <span class="pill">Keras</span>
              <span class="pill">Scikit-learn</span>
              <span class="pill">XGBoost</span>
              <span class="pill">MLFlow</span>
              <span class="pill">Transformers (BERT, T5, RoBERTa)</span>
              <span class="pill">LLMs (GPT-2, 3.5)</span>
              <span class="pill">SpaCy/NLTK</span>
              <span class="pill">OpenCV</span>
              <span class="pill">Sequence Modeling</span>
              <span class="pill">Multi-label Classification</span>
            </div>
        `,
      },
      {
        variant: "de",
        html: `
            <div class="card-heading"><span class="card-heading-row"><span class="card-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="20" height="20"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path><path d="M12 14v4"></path><path d="M12 22v-4"></path></svg></span><span>Data Engineering</span></span></div>
            <div class="pill-list">
              <span class="pill">Apache Airflow</span>
              <span class="pill">Docker</span>
              <span class="pill">DBT</span>
              <span class="pill">CI/CD Pipelines</span>
              <span class="pill">PySpark</span>
              <span class="pill">Databricks</span>
              <span class="pill">Delta Lake</span>
              <span class="pill">Hadoop/HDFS</span>
              <span class="pill">MapReduce</span>
              <span class="pill">AWS (S3, RDS, Lambda)</span>
              <span class="pill">Snowflake</span>
              <span class="pill">PostgreSQL</span>
              <span class="pill">MongoDB</span>
            </div>
        `,
      },
      {
        variant: "se",
        html: `
            <div class="card-heading"><span class="card-heading-row"><span class="card-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="20" height="20"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline><line x1="12" y1="22" x2="12" y2="2"></line></svg></span><span>Software Engineering</span></span></div>
            <div class="pill-list">
              <span class="pill">Python</span>
              <span class="pill">TypeScript/JS</span>
              <span class="pill">SQL</span>
              <span class="pill">R</span>
              <span class="pill">C++</span>
              <span class="pill">FastAPI</span>
              <span class="pill">Next.js</span>
              <span class="pill">Streamlit</span>
              <span class="pill">Microservices</span>
              <span class="pill">REST APIs</span>
              <span class="pill">Kubernetes</span>
              <span class="pill">GitHub Actions</span>
              <span class="pill">Linux/CUDA</span>
              <span class="pill">Git</span>
              <span class="pill">VSCode</span>
            </div>
        `,
      },
      {
        variant: "da",
        html: `
            <div class="card-heading"><span class="card-heading-row"><span class="card-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="20" height="20"><path d="M4 18h16"></path><path d="M4 18V6"></path><polyline points="5 14 9 11 12 13 16 9 20 12"></polyline></svg></span><span>Data Analytics</span></span></div>
            <div class="pill-list">
              <span class="pill">Power BI</span>
              <span class="pill">Tableau</span>
              <span class="pill">Plotly</span>
              <span class="pill">Seaborn</span>
              <span class="pill">Matplotlib</span>
              <span class="pill">Pandas</span>
              <span class="pill">NumPy</span>
              <span class="pill">SciPy</span>
              <span class="pill">Statistical Modeling</span>
              <span class="pill">Time-Series Analysis</span>
              <span class="pill">Feature Engineering</span>
              <span class="pill">Large-scale Cleaning</span>
            </div>
        `,
      },
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

    let baseSpeed = 80;
    let directionSign = 1;
    let currentSpeed = 80;
    const easeFactor = 0.04;
    let sequenceWidth = 0;
    let sequencesCount = 0;
    let position = 0;
    let lastTime = 0;
    let clipAccumulator = 0;
    let scanBoostUntil = 0;
    let intersectionBands = [];

    const nextProjectCode = () => {
      const c = projectCodes[codeIndex % projectCodes.length] || "";
      codeIndex += 1;
      return c;
    };

    const createCardWrapper = (skill) => {
      const wrapper = document.createElement("div");
      wrapper.className = "card-wrapper";
      if (skill.variant) wrapper.setAttribute("data-variant", skill.variant);

      const normal = document.createElement("div");
      normal.className = "card card-normal";
      if (skill.html) {
        normal.innerHTML = skill.html;
      } else {
        normal.innerHTML = `
          <div class="card-title">${skill.title}</div>
          <div class="card-description">${skill.description}</div>
        `;
      }

      const code = document.createElement("div");
      code.className = "card card-code";
      const codeContent = document.createElement("div");
      codeContent.className = "code-content";
      const baseCode = nextProjectCode();
      const cols = Math.floor(240 / 7);
      const rows = Math.floor(320 / 14);
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
      const containerRect = container.getBoundingClientRect();
      const beamCenterX = containerRect.left + containerRect.width * 0.25;
      const beamWidth = 4;
      const leftBoundary = beamCenterX - beamWidth / 2;
      const rightBoundary = beamCenterX + beamWidth / 2;
      intersectionBands = [];
      let hasScanIntersection = false;
      cardLine.querySelectorAll(".card-wrapper").forEach((wrapper) => {
        const rect = wrapper.getBoundingClientRect();
        const cardLeft = rect.left;
        const cardRight = rect.right;
        const width = rect.width;
        const normalCard = wrapper.querySelector(".card-normal");
        const codeCard = wrapper.querySelector(".card-code");
        if (cardLeft < rightBoundary && cardRight > leftBoundary) {
          hasScanIntersection = true;
          const intersectLeft = Math.max(leftBoundary - cardLeft, 0);
          const intersectRight = Math.min(rightBoundary - cardLeft, width);
          const normalClipRight = (intersectLeft / width) * 100;
          const codeClipLeft = (intersectRight / width) * 100;
          normalCard.style.setProperty("--clip-right", `${normalClipRight}%`);
          codeCard.style.setProperty("--clip-left", `${codeClipLeft}%`);
          const topLocal = Math.max(0, rect.top - containerRect.top);
          const bottomLocal = Math.min(height, rect.bottom - containerRect.top);
          if (bottomLocal > topLocal) intersectionBands.push([topLocal, bottomLocal]);
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
        }
      });
      if (hasScanIntersection) {
        scanBoostUntil = performance.now() + 500;
      }
    };

    const addSequence = () => {
      skills.forEach((s) => cardLine.appendChild(createCardWrapper(s)));
      sequencesCount = Math.max(1, Math.floor(cardLine.children.length / skills.length));
      if (cardLine.children.length >= skills.length * 2) {
        const firstA = cardLine.children[0];
        const firstB = cardLine.children[skills.length];
        if (firstA && firstB) {
          const aLeft = firstA.offsetLeft;
          const bLeft = firstB.offsetLeft;
          sequenceWidth = Math.max(1, bLeft - aLeft);
        }
      } else {
        sequenceWidth = cardLine.scrollWidth / sequencesCount;
      }
    };
    cardLine.innerHTML = "";
    addSequence();
    while (cardLine.scrollWidth < container.clientWidth + sequenceWidth * 2) {
      addSequence();
    }

    const prefersReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const streamStyles = getComputedStyle(cardStream);
    const varSpeed = parseFloat(streamStyles.getPropertyValue('--scroll-speed'));
    const varDir = parseFloat(streamStyles.getPropertyValue('--scroll-direction'));
    const attrSpeed = parseFloat(cardStream.getAttribute('data-scroll-speed') || '');
    const attrDir = parseFloat(cardStream.getAttribute('data-scroll-dir') || '');
    if (!Number.isNaN(varSpeed)) baseSpeed = varSpeed;
    if (!Number.isNaN(attrSpeed)) baseSpeed = attrSpeed;
    if (!Number.isNaN(varDir)) directionSign = Math.sign(varDir) || 1;
    if (!Number.isNaN(attrDir)) directionSign = Math.sign(attrDir) || directionSign;
    currentSpeed = baseSpeed;

    // particle systems
    let ctxBack = null;
    let ctxFront = null;
    let width = 0;
    let height = 0;
    const stars = [];
    const glimmers = [];
    const sparks = [];
    let fpsAvg = 60;

    const glowColor = { r: 139, g: 92, b: 246 }; // match unified card accent (violet)
    const setupCanvas = () => {
      ctxBack = backCanvas.getContext('2d');
      ctxFront = frontCanvas.getContext('2d');
      width = container.clientWidth;
      height = container.clientHeight;
      backCanvas.width = width;
      backCanvas.height = height;
      frontCanvas.width = width;
      frontCanvas.height = height;
    };
    // initialize star field
    const initStars = (count = 220) => {
      stars.length = 0;
      for (let i = 0; i < count; i++) {
        const r = 1 + Math.random() * 2.5;
        stars.push({
          x: Math.random() * width,
          y: Math.random() * height,
          r,
          baseY: Math.random() * height,
          speedX: 10 + Math.random() * 25,
          bobAmp: 6 + Math.random() * 10,
          bobFreq: 0.6 + Math.random() * 1.2,
          alpha: 0.4 + Math.random() * 0.6,
        });
      }
    };

    const pickBeamY = () => {
      if (!intersectionBands.length) return Math.random() * height;
      const t = Math.random();
      return t * height;
    };

    const spawnGlimmer = () => {
      const x = (width * 0.25) + 2;
      const y = pickBeamY();
      const boost = performance.now() < scanBoostUntil ? 1.6 : 1.0;
      const vx = (18 + Math.random() * 26) * boost;
      const vy = (Math.random() - 0.5) * (8 * boost);
      const radius = (1.1 + Math.random() * 1.8) * boost;
      const maxDist = (intersectionBands.length ? 50 : 40) * boost;
      glimmers.push({ x, y, vx, vy, r: radius, life: 1, decay: 0.7 + Math.random() * 0.3, t: 0, startX: x, maxDist });
      if (glimmers.length > 1200) glimmers.shift();
    };

    const spawnSpark = () => {
      const x = (width * 0.25) + ((Math.random() - 0.5) * 4);
      const y = pickBeamY();
      const boost = performance.now() < scanBoostUntil ? 1.6 : 1.0;
      const vx = (28 + Math.random() * 34) * boost;
      const vy = (Math.random() - 0.5) * (6 * boost);
      const radius = (0.7 + Math.random() * 1.0);
      const maxDist = (intersectionBands.length ? 35 : 28) * boost;
      sparks.push({ x, y, vx, vy, r: radius, life: 1.0, decay: 1.2 + Math.random() * 0.5, t: 0, startX: x, maxDist });
      if (sparks.length > 1000) sparks.shift();
    };

    const drawStar = (s) => {
      const g = ctxBack.createRadialGradient(s.x, s.y, 0, s.x, s.y, s.r);
      g.addColorStop(0, `rgba(255,255,255,${s.alpha})`);
      g.addColorStop(0.5, `hsla(217,61%,33%,${s.alpha * 0.8})`);
      g.addColorStop(1, `hsla(217,64%,6%,0)`);
      ctxBack.fillStyle = g;
      ctxBack.beginPath();
      ctxBack.arc(s.x, s.y, s.r, 0, Math.PI * 2);
      ctxBack.fill();
    };

    const drawGlimmer = (p) => {
      const g = ctxFront.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r);
      const sinAlpha = 0.5 + 0.5 * Math.sin(p.t * 6);
      const a = Math.max(0, Math.min(1, sinAlpha * p.life));
      g.addColorStop(0, `rgba(${glowColor.r},${glowColor.g},${glowColor.b},${0.65 * a})`);
      g.addColorStop(0.6, `rgba(${glowColor.r},${glowColor.g},${glowColor.b},${0.35 * a})`);
      g.addColorStop(1, `rgba(${glowColor.r},${glowColor.g},${glowColor.b},0)`);
      ctxFront.fillStyle = g;
      ctxFront.beginPath();
      ctxFront.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctxFront.fill();
    };

    const drawSpark = (p) => {
      const g = ctxFront.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r);
      const sinAlpha = 0.5 + 0.5 * Math.sin(p.t * 10);
      const a = Math.max(0, Math.min(1, sinAlpha * p.life));
      g.addColorStop(0, `rgba(${glowColor.r},${glowColor.g},${glowColor.b},${0.75 * a})`);
      g.addColorStop(0.65, `rgba(${glowColor.r},${glowColor.g},${glowColor.b},${0.5 * a})`);
      g.addColorStop(1, `rgba(${glowColor.r},${glowColor.g},${glowColor.b},0)`);
      ctxFront.fillStyle = g;
      ctxFront.beginPath();
      ctxFront.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctxFront.fill();
    };

    const updateParticles = (delta) => {
      if (!ctxBack || !ctxFront) return;
      const scale = Math.min(1, Math.max(0.5, fpsAvg / 60));
      const bandActive = intersectionBands.length > 0;
      const spawnRate = prefersReduced ? 0 : Math.floor(((bandActive ? 240 : 120) * scale) * delta);
      const sparkRate = prefersReduced ? 0 : Math.floor(((performance.now() < scanBoostUntil ? 500 : (bandActive ? 220 : 100)) * scale) * delta);
      for (let i = 0; i < spawnRate; i++) spawnGlimmer();
      for (let i = 0; i < sparkRate; i++) spawnSpark();
      ctxBack.clearRect(0, 0, width, height);
      ctxBack.globalCompositeOperation = 'lighter';

      // update stars
      stars.forEach(s => {
        s.x += s.speedX * delta;
        s.y = s.baseY + Math.sin(performance.now() / 1000 * s.bobFreq) * s.bobAmp;
        s.alpha += (Math.random() - 0.5) * 0.02;
        s.alpha = Math.max(0.2, Math.min(1, s.alpha));
        if (s.x - s.r > width) { s.x = -s.r; s.baseY = Math.random() * height; }
        drawStar(s);
      });

      ctxFront.clearRect(0, 0, width, height);
      ctxFront.globalCompositeOperation = 'lighter';
      // update glimmers
      for (let i = 0; i < glimmers.length; i++) {
        const p = glimmers[i];
        p.t += delta;
        p.x += p.vx * delta;
        p.y += p.vy * delta;
        p.life -= p.decay * delta;
        if (p.life <= 0 || Math.abs(p.x - p.startX) > p.maxDist || p.y < -50 || p.y > height + 50) { glimmers.splice(i, 1); i--; continue; }
        drawGlimmer(p);
      }

      // update sparks (short-lived, fast)
      for (let i = 0; i < sparks.length; i++) {
        const p = sparks[i];
        p.t += delta;
        p.x += p.vx * delta;
        p.y += p.vy * delta;
        p.life -= p.decay * delta;
        if (p.life <= 0 || Math.abs(p.x - p.startX) > p.maxDist || p.y < -30 || p.y > height + 30) { sparks.splice(i, 1); i--; continue; }
        drawSpark(p);
      }
    };

    setupCanvas();
    initStars();
    const onResize = () => setupCanvas();
    window.addEventListener('resize', onResize);

    let running = false;
    let rafId = 0;
    let visible = true;

    const step = (ts) => {
      if (!lastTime) lastTime = ts;
      const raw = (ts - lastTime) / 1000;
      const delta = Math.min(raw, 1 / 60);
      lastTime = ts;
      if (visible) {
        const targetSpeed = prefersReduced ? 0 : baseSpeed;
        currentSpeed += (targetSpeed - currentSpeed) * easeFactor;
        const velocity = currentSpeed * directionSign;
        position -= velocity * delta;
        if (sequenceWidth <= 0) {
          sequencesCount = Math.max(1, Math.floor(cardLine.children.length / skills.length));
          sequenceWidth = cardLine.scrollWidth / sequencesCount;
        }
        const mod = sequenceWidth === 0 ? 0 : ((position % sequenceWidth) + sequenceWidth) % sequenceWidth;
        const mapped = directionSign > 0 ? (mod - sequenceWidth) : mod;
        cardLine.style.transform = `translate3d(${mapped}px,0,0)`;
        clipAccumulator += delta;
        if (clipAccumulator >= 0.06) {
          updateCardClipping();
          clipAccumulator = 0;
        }
        updateParticles(delta);
      }
      const fps = delta > 0 ? (1 / delta) : 60;
      fpsAvg = fpsAvg * 0.9 + fps * 0.1;
      rafId = requestAnimationFrame(step);
    };
    const start = () => {
      if (running) return;
      running = true;
      rafId = requestAnimationFrame(step);
    };
    const stop = () => {
      if (!running) return;
      running = false;
      cancelAnimationFrame(rafId);
    };

    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      visible = entry.isIntersecting;
      if (visible) start();
      else stop();
    }, { threshold: 0.0, rootMargin: '50px' });
    if (sectionEl) observer.observe(sectionEl);
    start();
    const interval = null;
    const ro = new ResizeObserver(() => {
      sequencesCount = Math.max(1, Math.floor(cardLine.children.length / skills.length));
      sequenceWidth = cardLine.scrollWidth / sequencesCount;
      while (cardLine.scrollWidth < container.clientWidth + sequenceWidth * 2) {
        addSequence();
      }
    });
    ro.observe(cardLine);

    return () => {
      stop();
      if (interval) clearInterval(interval);
      window.removeEventListener('resize', onResize);
      if (sectionEl) observer.unobserve(sectionEl);
      observer.disconnect();
      ro.disconnect();
    };
  }, []);

  return (
    <section ref={sectionRef} id="skills" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <Title title="Core Skills" />
        <div className="scan-container">
          <canvas className="particles-canvas-back" id="skillsParticlesBack" />
          <div className="beam">
            <div className="beam-halo-white-inner"></div>
            <div className="beam-bloom-white-mid"></div>
            <div className="beam-core"></div>
            <div className="beam-bloom-inner"></div>
            <div className="beam-halo-cyan"></div>
            <div className="beam-halo-pink"></div>
            <div className="beam-halo-white"></div>
            <div className="beam-halo-white-outer"></div>
            <div className="beam-halo-blue"></div>
            <div className="beam-bloom-cyan-wide"></div>
            <div className="beam-bloom-white-wide"></div>
          </div>
          <canvas className="particles-canvas-front" id="skillsParticlesFront" />
          <div className="card-stream" id="skillsCardStream" tabIndex={0} aria-label="Scrolling core skills cards">
            <div className="card-line" id="skillsCardLine" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
