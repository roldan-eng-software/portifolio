import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  { title: "Project One", category: "Web App", color: "bg-blue-900" },
  { title: "Project Two", category: "Design System", color: "bg-purple-900" },
  { title: "Project Three", category: "Landing Page", color: "bg-green-900" },
];

const ProjectsSection = () => {
  return (
    <section className="py-20 bg-[#0C0C0C] text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-6xl font-bold mb-16 text-center text-white">Selected Projects</h2>
        
        <div className="relative space-y-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className={`sticky top-20 ${project.color} h-96 rounded-2xl p-10 flex flex-col justify-end shadow-2xl`}
              style={{ top: `${100 + index * 40}px` }}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <h3 className="text-3xl font-bold">{project.title}</h3>
              <p className="text-gray-300">{project.category}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
