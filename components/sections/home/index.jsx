import { ViewContainer } from "@/components/layouts/view-container"
import Link from 'next/link'
import LayoutAnimation from "./-components/layout-animation"
import { motion } from "framer-motion"

const Home = ()=>{
    return(
        <div 
            className="flex justify-between sm:gap-24 gap-10 sm:pt-20 pt-10 flex-col sm:min-h-screen "
            style={{
                background: 'radial-gradient(circle at bottom left,  #fdf2f8 40%, #ffffff 60%)',
            }}
        >
        <ViewContainer id="home"  >
            <div className="flex flex-col sm:gap-8 gap-4 text-neutral-700 ">
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    Hi, I&apos;m 
                </motion.p>
                <motion.div 
                    className="flex items-end text-7xl max-[500px]:text-2xl font-sans max-sm:gap-2"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.6 }}
                >
                    <h1 className="">{`Shristi Gupta `}</h1>
                        <motion.span
                            animate={{ y: [-4, -8, -4] }}
                            transition={{
                                duration: 1,
                                repeat: 10,
                                ease: "easeInOut"
                            }}
                            className="sm:text-5xl text-3xl"
                        >
                            🌻
                        </motion.span>
                </motion.div>
                <motion.div 
                    className="flex gap-3 flex-col items-center max-[500px]:text-[14px] text-[15px] text-neutral-600"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.8, duration: 0.6 }}
                >
                    <p>A passionate frontend engineer with a love for creating seamless and engaging user experiences. Building intuitive user interfaces to engineering AI-powered solutions that scale.</p>
                </motion.div>
                <motion.div 
                    className="w-full flex max-md:justify-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 2.5, duration: 0.8 }}
                >
                    <Link href="https://drive.google.com/file/d/188_sorZWyNW0eZmnpbA3U-SIk0rV2ZwZ/view?usp=drive_link">
                    <button variant="ghost" className="text-sm w-fit text-neutral-400 underline transition-all  hover:text-neutral-600 ">{"Resume ->"}</button>
                    </Link>
                </motion.div>
            </div>
        </ViewContainer>
            <LayoutAnimation />
        </div>
    )
}

export {Home}
