import { ViewContainer } from "@/components/layouts/view-container"
import Link from 'next/link'
import { ExperienceData } from "@/public/data/experience-data"

const Experience = () => {


    return(
        <div id="#experience" className="flex flex-col gap-18 bg-neutral-800 text-neutral-100 w-full p-6 overflow-x-hidden">
            <ViewContainer>
                <h1 className="font-semibold text-5xl ">Experience</h1>
                <div className="grid gap-10 w-full my-7">
                    {ExperienceData.map((exp, index)=>(
                            <div key={index} className="flex flex-col">
                                <div className="flex justify-between">
                                    <p>{exp.Designation}</p>
                                    <p className="text-neutral-400 text-sm">{exp.Duration}</p>
                                </div>
                                <Link href={exp.CompanyLink}>
                                    <p className="text-sm pointer-cursor">{exp.LinkName}</p>
                                </Link>
                                <ul className=" ">
                                    {exp.description.map((descriptionItem, ind)=>(
                                        <li className="list-disc text-neutral-400" key={ind}>{descriptionItem}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                </div>
            </ViewContainer>
        </div>
    )
}

export {Experience};