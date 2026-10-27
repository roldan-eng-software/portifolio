import React from 'react';
import { motion } from 'framer-motion';

const AboutSection = () => {
  return (
    <section className="py-20 bg-[#0C0C0C] text-white">
      <div className="container mx-auto px-6">
        <motion.h2 
          className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500 mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          About Jack
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-300">
              Passionate designer and developer crafting digital experiences that blend aesthetic precision with technical rigor.
            </p>
            <p className="text-lg text-gray-300">
              My work focuses on the intersection of motion, typography, and clean, scalable code.
            </p>
          </div>
          <div className="h-64 bg-gray-800 rounded-lg flex items-center justify-center">
            {/* Decorative 3D Asset Placeholder */}
            <span className="text-gray-500">3D Asset Space</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
