"use client";
import { motion, useScroll } from "motion/react";
export function ReadingProgress() {
  const { scrollYProgress } = useScroll();
  return <motion.div className="reading-progress" style={{ scaleX: scrollYProgress }} aria-hidden="true" />;
}
