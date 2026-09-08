import "../styles/globals.css";
import { LazyMotion, domMax, MotionConfig } from "motion/react";

export default function AppleGuide({ Component, pageProps }) {
  return (
    <LazyMotion features={domMax} strict>
      <MotionConfig reducedMotion="user" transition={{ type: "spring", stiffness: 260, damping: 30, mass: 0.8 }}>
        <Component {...pageProps} />
      </MotionConfig>
    </LazyMotion>
  );
}
