import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

const Button = ({ text, className, id }) => {
  return (
    <a
      onClick={(e) => {
        e.preventDefault(); // Stop the link from jumping instantly

        const target = document.getElementById(id);
        if (target && id) {
          const nav = document.querySelector('.navbar');
          const offsetY = (nav ? nav.offsetHeight + 16 : window.innerHeight * 0.15);
          gsap.killTweensOf(window);
          gsap.to(window, {
            duration: 0.6,
            scrollTo: { y: target, offsetY },
            ease: 'power3.out',
          });
        }
      }}
      className={`${className ?? ""} cta-wrapper`} // Add base + extra class names
    >
      <div className="cta-button group">
        <div className="bg-circle" />
        <p className="text">{text}</p>
        <div className="arrow-wrapper">
          <img src="/images/arrow-down.svg" alt="arrow" />
        </div>
      </div>
    </a>
  );
};

export default Button;
