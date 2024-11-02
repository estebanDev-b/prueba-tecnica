import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";
import styles from "./Bloque3.module.scss";

gsap.registerPlugin(ScrollTrigger);

export default function Bloque3({ data }) {
  const quoteRef = useRef(null);
  const words = data.quote.split(" ");
  //captura las 24 palabras del texto.
  const firstPart = words.slice(0, 24).join(" ");
  //renderiza las faltantes, para cambiar la tipografia.
  const secondPart = words.slice(24).join(" ");

  useEffect(() => {
    if (quoteRef.current) {
      const splitText = new SplitType(quoteRef.current, { types: "chars" });
      gsap.fromTo(
        splitText.chars,
        { color: "#c1af99" },
        {
          color: "#977755",
          stagger: 0.05,
          duration: 0.5,
          ease: "power2.inOut",
          scrollTrigger: {
            trigger: quoteRef.current,
            start: "top center",
            end: "bottom center",
            scrub: 1,
          },
        }
      );
    }
  }, []);

  return (
    <div className={styles.scrollContainer}>
      <div className={styles.stickyContainer}>
        <div className={styles.contentContainer}>
          <h3 ref={quoteRef} className={styles.quote}>
            {/* problemas con el diseño al intentar hacer slice para poner la tipografia Canela, se pasa los bordes del viewport. No pude encontrar una solución.  👇  */}

            {/*{firstPart} <span className={styles.fontCanela} >{secondPart}</span>*/}

            {data.quote}
          </h3>
          <p className={styles.author}>
            <span>{data.name}</span> <br />
            <span>{data.title}</span>
          </p>
        </div>
      </div>
    </div>
  );
}