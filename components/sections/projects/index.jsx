import { ProjectsData } from "@/public/data/projects-data"
import { ViewContainer } from "@/components/layouts/view-container"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from 'next/link'

const Projects = () => {
    return(
        <div className="flex flex-col gap-18 text-neutral-700 w-full px-6 py-20 overflow-x-hidden" id="projects">
            <ViewContainer className="min-xl:w-[1050px] flex flex-col gap-4">
                <h1 className="font-semibold text-xl max-md:text-lg">Projects</h1>
                <div className="grid gap-3 w-full">
                    {ProjectsData.map((project, index)=>(
                        <div key={index} className="flex items-center gap-6">
                            {/* <Link href={project.link} className="block"> */}
                            {/* <Image src={project.img} alt={"project image"} width={'400'} height={'280'} className="w-[500px] h-[280px] rounded-xl cursor-pointer hover:scale-95 transition-all max-lg:w-[300px] max-lg:h-[210px] max-md:w-[500px] max-sm:h-[280px] max-md:hidden" onClick={()=>{
                                window.open(project.link)
                            }}/> */}
                            {/* </Link> */}
                            <div className="flex flex-col justify-between gap-2">
                                <Link href={project.link} target="_blank">
                                    <h1 className="max-md:text-xs text-sm font-semibold underline hover:text-amber-600">{project.name}</h1>
                                </Link>
                                <p className=" text-[13px] text-neutral-500">{project.desc}</p>
                                {/* <div key={index} className="flex gap-3  ">
                                    {project.techStack.map((tech, index)=>(
                                        <Badge variant="default" key={index} className=" cursor-pointer font-extrabold hover:bg-neutral-200 hover:text-neutral-900 hover:scale-105">{tech}</Badge>
                                    ))}
                                </div> */}
                                {/* <div className="flex justify-between min-md:hidden">
                                    <Link href={project.githubLink} target="_blank">
                                        <Button variant="default" className="rounded-xl  w-full hover:scale-105 shadow-md shadow-neutral-400">{"Github -->"}</Button>
                                    </Link>
                                    <Link href={project.link} target="_blank">
                                        <Button variant="default" className="rounded-xl  w-full hover:scale-105 shadow-md shadow-neutral-400">{"Deployment -->"}</Button>
                                    </Link>
                                </div> */}
                            </div>
                        </div>
                    ))}
                </div>
            </ViewContainer>
            
        </div>
    )
}

export {Projects}










