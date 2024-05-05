"use client";
import React, { useEffect, useRef } from "react";
import styles from "./page.module.scss";
import { montserrat } from "../aboutus/about";
import { opensans } from "../aboutus/about";
import { useScroll } from "framer-motion";
import Lenis from "@studio-freight/lenis";
import { projects } from "./data";
import Card from "./index";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
function Features() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  });
  const FeatureComponent = useRef<HTMLDivElement | null>(null);
  const FeatureTl = gsap.timeline({ paused: true });
  useGSAP(() => {
    const TitleComponent =
      FeatureComponent.current?.querySelector("#Feature-component");
    const CardComponent =
      FeatureComponent.current?.querySelector("#card-component");

    if (TitleComponent && CardComponent) {
      FeatureTl.from(
        TitleComponent,
        {
          opacity: 0,
          duration: 1.2,
          ease: "power3.inOut",
          y: "10vh",
        },
        0
      ).from(
        CardComponent,
        {
          opacity: 0,
          duration: 1.2,
          ease: "power3.inOut",
          y: "10vh",
        },
        0
      );
    }
    const trigger = ScrollTrigger.create({
      trigger: FeatureComponent.current,
      start: "top center",
      end: "bottom center",
      toggleActions: "play none none reverse",
      onEnter: () => FeatureTl.play(),
    });

    return () => {
      trigger.kill();
    };
  });
  return (
    <div ref={FeatureComponent}>
      <div
        className={`${montserrat.className} flex justify-center lg:mt-60  md:mx-32`}
        id="Feature-component"
      >
        <div className="md:w-1/2 text-center grid gap-5 w-full">
          <h1 className="font-normal text-[#00ffff] text-sm">FEATURED</h1>
          <p className="text-5xl font-light">
            <span className="font-medium">In the spotlight: </span> Our most
            popular episodes
          </p>
          <p className={`${opensans.className} text-lg font-normal`}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
      </div>
      <div ref={container} className={styles.main} id="card-component">
        {projects.map((project, i: number) => {
          const targetScale = 1 - (projects.length - i) * 0.05;
          return (
            <Card
              // flexDirection={
              //   project.flexDirection as
              //     | "row"
              //     | "row-reverse"
              //     | "column"
              //     | "column-reverse"
              //     | undefined
              // }
              key={`p_${i}`}
              i={i}
              EPISODE={project.EPISODE}
              title={project.title}
              description={project.description}
              src={project.src}
              name={project.name}
              profession={project.profession}
              banner={project.banner}
              progress={scrollYProgress}
              range={[i * 0.25, 1]}
              targetScale={targetScale}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Features;
