import { ProjectsData } from "@/public/data/projects-data"
import { ViewContainer } from "@/components/layouts/view-container"
import Image from "next/image"
import Link from 'next/link'

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
        <div className="flex flex-col items-center gap-18 bg-neutral-50 text-neutral-700 w-full px-6 py-20 overflow-x-hidden" id="projects">
            <ViewContainer className="min-xl:w-[1050px] flex flex-col gap-10 items-center">
            <p className="text-5xl font-semibold text-neutral-600 max-w-2xl mx-auto">
                Projects
            </p>
                <div className="flex flex-col gap-10 w-full items-center">
                    {ProjectsData.map((project, index)=>(
                        <div key={index} className={`flex items-center gap-6 shadow-sm border rounded-[10px] p-4 w-[50vw] h-[70vh] hover:shadow-md bg-white transition-shadow duration-300 ease-in-out ${shadowClasses[index]} $ ${borderColor[index]}`}>
                            <div className="flex flex-col justify-between gap-2">
                                <h1 className={`max-md:text-xs text-base font-semibold text-center`}>{project.name}</h1>
                                <Link href={project.link} target="_blank">
                                    <Image src={project.imageUrl} alt={project.name} width={608} height={300} className="w-full h-full object-cover rounded-lg cursor-pointer hover:shadow-sm" />
                                </Link>
                                <div className="flex items-center justify-between gap-4">
                                <p className=" text-[13px] text-neutral-400">{project.desc}</p>
                                
                                <Link href={project.githubLink} target="_blank">
                                    <button className={`${textColor[index]} text-neutral-600 text-sm`}>GitHub</button>
                                </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </ViewContainer>
            
        </div>
    )
}

export {Projects}










