import { ViewContainer } from "@/components/layouts/view-container"
import { SkillsData } from "@/public/data/skills-data"
import { cn } from "@/lib/utils"

const Skills = () => {
    return(
        <ViewContainer id="skills">
            <div className="grid gap-10 w-fit mx-auto">
                <h1 className="font-semibold text-5xl text-center ">Skills</h1>
                <div className="grid gap-12">
                    {SkillsData.map((skill, index)=>(
                        <div className="flex gap-4 flex-col items-center" key={index}>
                            <p className="font-semibold text-neutral-600">{skill.domain}</p>
                            <div className="flex gap-6">
                                {skill.skillSets.map((skillset, iconIndex)=>(
                                    <i className={cn("text-5xl text-neutral-800 hover:scale-95", skillset)} key={iconIndex}></i>
                                ))}
                            </div>
                        </div>
                    ))} 
                </div>
            </div>
        </ViewContainer>
    )
}

export {Skills}