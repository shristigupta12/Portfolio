import { ViewContainer } from "@/components/layouts/view-container"
import Link from 'next/link'
import { ExperienceData } from "@/public/data/experience-data"
import { motion } from "framer-motion"

const Experience = () => {

    const hoverColors = [
        "hover:text-amber-600",
        "hover:text-red-600",
        "hover:text-indigo-800",
        "hover:text-red-700",
    ]

    return(
        <motion.div 
            id="work" 
            className="flex flex-col sm:gap-18 gap-10 sm:py-20 py-10 text-neutral-600 w-full overflow-x-hidden bg-[linear-gradient(to_right,_#f5f5f5_1px,_transparent_1px),_linear-gradient(to_bottom,_#f5f5f5_1px,_transparent_1px)] bg-[length:50px_50px] sm:bg-[length:80px_80px] bg-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
        >
            <ViewContainer>
                <div className="flex flex-col sm:gap-10 gap-4 w-full">
                    <motion.p 
                        className="sm:text-5xl text-2xl font-semibold text-neutral-600 max-w-2xl mx-auto"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        Work
                    </motion.p>
                    <div className="grid gap-8 w-full">
                        {ExperienceData.map((exp, index)=>(
                            <motion.div 
                                key={index} 
                                className="flex flex-col gap-3"
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ 
                                    duration: 0.6, 
                                    delay: index * 0.15,
                                    ease: "easeOut"
                                }}
                                viewport={{ once: true, amount: 0.3 }}
                            >
                                <motion.div 
                                    className="flex flex-col gap-1"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.4, delay: index * 0.15 + 0.2 }}
                                    viewport={{ once: true }}
                                >
                                    <div className="flex min-md:justify-between items-center gap-2">
                                        <motion.img 
                                            src={exp.icon} 
                                            className="w-5 h-5"
                                            initial={{ scale: 0, rotate: -180 }}
                                            whileInView={{ scale: 1, rotate: 0 }}
                                            transition={{ 
                                                duration: 0.5, 
                                                delay: index * 0.15 + 0.3,
                                                type: "spring",
                                                stiffness: 260,
                                                damping: 20
                                            }}
                                            viewport={{ once: true }}
                                        />
                                        <p className="text-lg max-md:text-xs font-semibold">{exp.Designation}</p>
                                    </div>
                                    <Link href={exp.CompanyLink}>
                                        <motion.p 
                                            className={`text-xs pointer-cursor underline text-neutral-400 ${hoverColors[index]}`}
                                            whileHover={{ scale: 1.05 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            {exp.LinkName}
                                        </motion.p>
                                    </Link>
                                </motion.div>
                                <motion.ul 
                                    className="pl-8"
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    transition={{ duration: 0.6, delay: index * 0.15 + 0.4 }}
                                    viewport={{ once: true }}
                                >
                                    {exp.description.map((descriptionItem, ind)=>(
                                        <motion.li 
                                            className="list-disc sm:text-sm text-[10px] text-neutral-500" 
                                            key={ind}
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            transition={{ 
                                                duration: 0.4, 
                                                delay: index * 0.15 + 0.5 + ind * 0.1 
                                            }}
                                            viewport={{ once: true }}
                                        >
                                            {descriptionItem}
                                        </motion.li>
                                    ))}
                                </motion.ul>
                            </motion.div>
                        ))}
                    </div>
                </div>               
            </ViewContainer>
        </motion.div>
    )
}

export {Experience};