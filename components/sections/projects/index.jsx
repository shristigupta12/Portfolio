import { ProjectsData } from "@/public/data/projects-data"
import { ViewContainer } from "@/components/layouts/view-container"
import Image from "next/image"
import Link from 'next/link'
import { motion } from "framer-motion"

const shadowClasses = [
    "hover:shadow-blue-200",
    "hover:shadow-purple-200", 
    "hover:shadow-[#DFD2C6]",
    "hover:shadow-neutral-200",
    "hover:shadow-pink-200",
    "hover:shadow-green-200",
    "hover:shadow-red-200",
    "hover:shadow-yellow-200",
]

const textColor = [
    "hover:text-blue-700",
    "hover:text-purple-700",
    "hover:text-[#B3937A]",
    "hover:text-neutral-900",
    "hover:text-pink-700",
    "hover:text-green-700",
    "hover:text-red-700",
    "hover:text-yellow-700",
]

const borderColor = [
    "hover:border-blue-200",
    "hover:border-purple-200",
    "hover:border-[#DFD2C6]",
    "hover:border-neutral-200",
    "hover:border-pink-200",
    "hover:border-green-200",
    "hover:border-red-200",
    "hover:border-yellow-200",
]

const Projects = () => {
    return(
        <motion.div 
            className="flex flex-col items-center sm:gap-18 gap-10 bg-neutral-50 text-neutral-700 w-full px-6 sm:py-20 py-10 overflow-x-hidden" 
            id="projects"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
        >
            <ViewContainer className="min-xl:w-[1050px] flex flex-col gap-10 items-center">
                <motion.p 
                    className="sm:text-5xl text-2xl font-semibold text-neutral-600 max-w-2xl mx-auto"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    Projects
                </motion.p>
                <div className="flex flex-col gap-10 w-full items-center">
                    {ProjectsData.map((project, index)=>(
                        <motion.div 
                            key={index} 
                            className={`flex items-center gap-6 shadow-sm border rounded-[10px] p-4 sm:w-[50vw] w-[90vw] sm:h-[70vh] h-[32vh] hover:shadow-md bg-white transition-shadow duration-300 ease-in-out ${shadowClasses[index]} $ ${borderColor[index]}`}
                            initial={{ opacity: 0, y: 50, scale: 0.9 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            transition={{ 
                                duration: 0.6, 
                                delay: index * 0.1,
                                ease: "easeOut"
                            }}
                            viewport={{ once: true, amount: 0.3 }}
                            whileHover={{ 
                                y: -5,
                                transition: { duration: 0.2 }
                            }}
                        >
                            <div className="flex flex-col justify-between sm:gap-2 gap-4">
                                <motion.h1 
                                    className={`max-md:text-xs text-base font-semibold text-center`}
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    transition={{ duration: 0.4, delay: index * 0.1 + 0.3 }}
                                    viewport={{ once: true }}
                                >
                                    {project.name}
                                </motion.h1>
                                <Link href={project.link} target="_blank">
                                    <motion.div
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <Image src={project.imageUrl} alt={project.name} width={608} height={300} className="w-full h-full object-cover rounded-lg cursor-pointer hover:shadow-sm" />
                                    </motion.div>
                                </Link>
                                <motion.div 
                                    className="flex items-center justify-between gap-4"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.4, delay: index * 0.1 + 0.4 }}
                                    viewport={{ once: true }}
                                >
                                    <p className=" sm:text-[13px] text-[10px] text-neutral-400">{project.desc}</p>
                                    
                                    <Link href={project.githubLink} target="_blank">
                                        <motion.button 
                                            className={`${textColor[index]} text-neutral-600 text-sm`}
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            GitHub
                                        </motion.button>
                                    </Link>
                                </motion.div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </ViewContainer>
            
        </motion.div>
    )
}

export {Projects}










