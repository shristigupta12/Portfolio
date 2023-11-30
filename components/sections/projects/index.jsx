import { ProjectsData } from "@/public/data/projects-data"
import { ViewContainer } from "@/components/layouts/view-container"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from 'next/link'

const Projects = () => {
    return(
        <div className="flex flex-col gap-18 bg-neutral-800 text-neutral-100 w-full p-6 overflow-x-hidden" id="projects">
            <ViewContainer className="max-2xl:w-[1050px]">
                <h1 className="font-semibold text-5xl ">Projects</h1>
                <div className="grid gap-12 w-full my-7">
                    {ProjectsData.map((project, index)=>(
                        <div key={index} className="flex justify-center items-center gap-12">
                            {/* <Link href={project.link} className="block"> */}
                            <Image src={project.img} alt={"project image"} width={'400'} height={'280'} className="w-[500px] h-[280px] rounded-xl cursor-pointer hover:scale-95 transition-all" onClick={()=>{
                                window.open(project.link)
                            }}/>
                            {/* </Link> */}
                            <div className="flex flex-col justify-between gap-6">
                                <h1 className="text-4xl font-bold">{project.name}</h1>
                                <p className="text-justify">{project.desc}</p>
                                <div key={index} className="flex gap-3 justify-center">
                                    {project.techStack.map((tech, index)=>(
                                        <Badge variant="default" key={index} className="bg-neutral-300 text-neutral-700 cursor-pointer hover:bg-neutral-200 hover:text-neutral-900 hover:scale-105">{tech}</Badge>
                                    ))}
                                </div>
                                <Link href={project.githubLink} target="_blank">
                                    <Button variant="default" className="rounded-md w-full hover:scale-105">{"Github -->"}</Button>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </ViewContainer>
            
        </div>
    )
}

export {Projects}