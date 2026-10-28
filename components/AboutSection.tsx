"use client";
import React from 'react';
import { motion } from 'framer-motion';

const AboutSection = () => {
  return (
    <section id="about" className="py-24 sm:py-32 bg-primary text-secondary scroll-mt-16">
      <div className="container mx-auto px-6">
        <motion.h2
          className="hero-heading font-bold uppercase tracking-tight text-4xl md:text-6xl mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          About Jack
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div className="space-y-6 font-light text-lg leading-relaxed text-secondary/85">
            <p>
              A 3D creator obsessed with motion, light, and form — building striking
              visual experiences that feel alive rather than laid out.
            </p>
            <p>
              Every project starts as a raw render and ends as an interface where the
              artifact leads and the UI recedes.
            </p>
          </div>
          {/* Decorative gradient orb — stand-in for a real floating 3D asset */}
          <div aria-hidden="true" className="relative h-64 sm:h-80 flex items-center justify-center">
            <div className="absolute w-56 h-56 sm:w-72 sm:h-72 rounded-full bg-gradient-to-br from-[#646973] via-[#BBCCD7] to-[#18011F] opacity-80 blur-[1px]" />
            <div className="absolute w-40 h-40 sm:w-52 sm:h-52 rounded-full bg-primary/60 blur-xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
