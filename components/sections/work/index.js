import { ViewContainer } from "@/components/layouts/view-container"
import Link from 'next/link'
import { ExperienceData } from "@/public/data/experience-data"

const Experience = () => {

    const hoverColors = [
        "hover:text-amber-600",
        "hover:text-red-600",
        "hover:text-indigo-800",
        "hover:text-red-700",
    ]

    return(
            <div id="#work" className="flex flex-col gap-18 py-20 text-neutral-600 w-full overflow-x-hidden" style={{
                background: 'linear-gradient(to right, #f5f5f5 1px, transparent 1px), linear-gradient(to bottom, #f5f5f5 1px, transparent 1px)',
                backgroundSize: '80px 80px',
                backgroundPosition: 'center',
            }}>
            <ViewContainer>
                <div className="flex flex-col gap-10 w-full">
                <p className="text-5xl font-semibold text-neutral-600 max-w-2xl mx-auto ">Work</p>
                    <div className="grid gap-8 w-full">
                        {ExperienceData.map((exp, index)=>(
                                <div key={index} className="flex flex-col gap-3">
                                    <div className="flex flex-col gap-1">
                                        <div className="flex min-md:justify-between items-center gap-2">
                                            <img src={exp.icon} className="w-5 h-5" />
                                            <p className="text-lg max-md:text-xs font-semibold">{exp.Designation}</p>
                                        </div>
                                        <Link href={exp.CompanyLink}>
                                            <p className={`text-xs pointer-cursor underline text-neutral-400 ${hoverColors[index]}`}>{exp.LinkName}</p>
                                        </Link>
                                        </div>
                                    <ul className="pl-8">
                                        {exp.description.map((descriptionItem, ind)=>(
                                            <li className="list-disc text-sm text-neutral-500 max-[500px]:text-[14px]" key={ind}>{descriptionItem}</li>
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