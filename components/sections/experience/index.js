import { ViewContainer } from "@/components/layouts/view-container"
import Link from 'next/link'
import { ExperienceData } from "@/public/data/experience-data"

const Experience = () => {


    return(
        <div id="#experience" className="flex flex-col gap-18 py-20 text-neutral-600 w-full overflow-x-hidden">
            <ViewContainer>
                <div className="flex flex-col gap-4">
                    <h1 className="font-semibold text-xl max-md:text-lg ">Work</h1>
                    <div className="grid gap-3 w-full">
                        {ExperienceData.map((exp, index)=>(
                                <div key={index} className="flex flex-col gap-1">
                                    <div className="min-md:flex min-md:justify-between">
                                        <p className="text-sm max-md:text-xs font-semibold">{exp.Designation}</p>
                                        {/* <p className="text-neutral-400 text-xs max-md:text-[12px] ">{exp.Duration}</p> */}
                                    </div>
                                    <Link href={exp.CompanyLink}>
                                        <p className="text-xs pointer-cursor underline text-neutral-400 hover:text-amber-600">{exp.LinkName}</p>
                                    </Link>
                                    <ul className="pl-8">
                                        {exp.description.map((descriptionItem, ind)=>(
                                            <li className="list-disc text-[13px] text-neutral-500 max-[500px]:text-[14px]" key={ind}>{descriptionItem}</li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                    </div>
                </div>               
            </ViewContainer>
        </div>
    )
}

export {Experience};