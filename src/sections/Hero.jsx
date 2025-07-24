import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import { words } from "../constants";
import Button from "../components/Button";
import HeroExperience from "../HeroModels/HeroGLB";

const Hero  = () => {
    useGSAP(() => {
        gsap.fromTo(
        ".hero-text h1",
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.2, duration: 1, ease: "power2.inOut" }
        );
    });
    return (
        <section id='hero' className='relative overflow-hidden'>
            <div className='hero-layout'>
            {/* LEFT: Hero Content */}
                <header className="flex flex-col justify-center md:w-full w-screen md:px-20 px-5">
                    <div className="flex flex-col gap-7">
                        <div className="hero-text">
                            <h1>ROHITH SUNDAR</h1>
                            <h1>JONNALAGADDA</h1>
                            <h1 className='text-3xl flex self-auto mt-5 h-[4rem]'>
                                <span className="slide">
                                    <span className="wrapper">
                                        {words.map((word, index) => (
                                        <span
                                            key={index}
                                            className="flex items-center md:gap-3 gap-1 pb-2"
                                        >
                                            <span>{word.text}</span>
                                        </span>
                                        ))}
                                    </span>
                                </span>
                            </h1> 
                        </div>
                        <Button
                            text="Get Started"
                            className="md:w-80 md:h-16 w-30 h-12"
                            id="about"
                            />
                    </div>
                </header>
                {/* RIGHT: 3D Model or Visual */}
                <figure>
                    <div className="hero-3d-layout">
                        <HeroExperience />
                    </div>
                </figure>
            </div>    
        </section>
    )
}

export default Hero 