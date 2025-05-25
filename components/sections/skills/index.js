import { ViewContainer } from "@/components/layouts/view-container"
import { SkillsData } from "@/public/data/skills-data"
import Marquee from "react-fast-marquee"

const Skills = () => {
    return(
        <div className="text-neutral-600 w-full px-6 overflow-x-hidden">
            <ViewContainer id="skills" >
                <div className="grid gap-2 w-fit">
                    <h1 className="font-semibold text-xl max-md:text-lg">Skills</h1>
                    <div className="flex flex-col gap-3 w-[750px] max-sm:w-[340px]">
                                {/* <p className=" text-neutral-500 text-sm max-md:text-xs">{skill.domain}</p> */}
                            <Marquee direction="right" speed={50} gradient={false} className="flex gap-10">
                                {SkillsData.map((skillset, index) => (
                                    <p className="text-neutral-500 text-sm max-md:text-xs mx-6 hover:text-amber-600" key={index}>
                                    {skillset}
                                    </p>
                                ))}
                            </Marquee>
                    </div>
                </div>
            </ViewContainer>
        </div>
        
    )
}

export {Skills}