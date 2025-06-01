"use client"

import { motion } from "framer-motion"
import Marquee from "react-fast-marquee"
import { SkillsData, getSkillColor } from "@/public/data/skills-data"


const SkillTag = ({ skill, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className={`
        px-4 py-2 mx-3 rounded-full border font-mono text-sm
        transition-all duration-300 hover:scale-105 hover:shadow-md
        cursor-pointer whitespace-nowrap 
       ${getSkillColor(index)}
      `}
    >
      {skill}
    </motion.div>
  )
}

export default function Skills() {
  return (
    <section className="w-full py-10 md:py-24 overflow-hidden max-w-6xl mx-auto px-6 flex flex-col gap-10">
        {/* Section Header */}
        <div className="flex flex-col gap-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center "
        >
          {/* <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Tech Stack & Skills</h2> */}
          <p className="text-5xl font-semibold text-neutral-400 max-w-2xl mx-auto">
            Technologies and tools
          </p>
        </motion.div>

        
        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center "
        >
          <p className="text-lg  text-neutral-600">love learning new things ♡</p>
        </motion.div>
        </div>

        {/* Skills Marquee Container */}
        <div className="relative">
          {/* Gradient overlays for smooth fade effect */}
          <div className="absolute left-0 top-0 w-[20vw] h-full bg-gradient-to-r from-white to-transparent z-10" />
          <div className="absolute right-0 top-0 w-[20vw] h-full bg-gradient-to-l from-white to-transparent z-10" />

          {/* First row - moving right */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-6"
          >
            <Marquee direction="right" speed={40} gradient={false} className="py-2">
              {SkillsData.map((skill, index) => (
                <SkillTag key={`right-${index}`} skill={skill} index={index} />
              ))}
            </Marquee>
          </motion.div>

          {/* Second row - moving left */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Marquee direction="left" speed={35} gradient={false} className="py-2">
              {SkillsData.map((skill, index) => (
                <SkillTag key={`left-${index}`} skill={skill} index={index} />
              ))}
            </Marquee>
          </motion.div>
        </div>

    </section>
  )
}
