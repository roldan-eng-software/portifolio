"use client";
import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  { title: "Project One", category: "3D Direction", gradient: "from-[#1a1a1a] to-[#646973]" },
  { title: "Project Two", category: "Interactive Web", gradient: "from-[#18011F] to-[#7721B1]" },
  { title: "Project Three", category: "Motion System", gradient: "from-[#0C0C0C] to-[#BE4C00]" },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 sm:py-32 bg-primary text-secondary scroll-mt-16">
      <div className="container mx-auto px-6">
        <h2 className="hero-heading font-bold uppercase tracking-tight text-4xl md:text-6xl mb-16 text-center">Selected Projects</h2>

        <div className="relative space-y-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className={`sticky bg-gradient-to-br ${project.gradient} h-96 rounded-2xl p-10 flex flex-col justify-end shadow-2xl`}
              style={{ top: `${100 + index * 40}px` }}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <h3 className="text-3xl font-bold text-white">{project.title}</h3>
              <p className="font-light text-white/75">{project.category}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
