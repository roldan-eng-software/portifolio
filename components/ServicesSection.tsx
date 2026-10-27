import React from 'react';
import { motion } from 'framer-motion';

const services = [
  { title: "UI/UX Design", description: "Crafting intuitive and aesthetically pleasing digital interfaces." },
  { title: "Frontend Development", description: "Building scalable, high-performance web applications." },
  { title: "Motion Design", description: "Adding life to digital products with smooth, purposeful motion." },
  { title: "Brand Identity", description: "Defining unique visual languages that resonate with audiences." },
  { title: "Consulting", description: "Strategic advice on technology and design implementation." },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const ServicesSection = () => {
  return (
    <section className="py-20 bg-[#0C0C0C] text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-6xl font-bold mb-16 text-center text-white">Services</h2>
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="p-8 border border-white/10 hover:border-white/30 transition-colors bg-white/5 rounded-lg"
            >
              <h3 className="text-2xl font-semibold mb-4 text-white">{service.title}</h3>
              <p className="text-gray-400">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
