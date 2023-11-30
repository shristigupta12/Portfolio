'use client'
import { useState } from "react"
import { Projects } from "@/public/data/projects";
import Image from "next/image"
import { Button } from "@/components/ui/button"


const Slider = () =>{

    const [slideIndex, setSlideIndex] = useState(0);
    const handleClick = (direction)=>{
        if(direction=="left"){
            setSlideIndex(slideIndex>0?slideIndex-1:2)
        }else{
            setSlideIndex(slideIndex<2?slideIndex+1:0)
        }
    }

    return(
        <div className={`relative flex items-center h-full`}>
            <div className="absolute backdrop-blur-sm opacity-60 bg-white rounded-full border-2 border-neutral-500 text-neutral-800 p-2 left-0 cursor-pointer" onClick={()=>handleClick("left")}>{"<--"}</div>

            <div className={`h-full flex transition-all ease-in-out translate-x-[${slideIndex * -100}vw]`}>
                {Projects.map((project, index) => (
                    <div className="w-screen h-full px-5 flex gap-3 justify-center text-white items-center" key={index}>
                        <div className="cursor-pointer w-full">
                            <Image src={project.img}  width={'500'} height={'500'} />
                        </div>
                        <div className="flex flex-col gap-3 px-8">
                            <h1 className="text-3xl font-semibold">{project.name}</h1>
                            <p className="">{project.desc}</p>
                            <Button className="" >{"GitHub ->"}</Button>
                        </div>
                    </div>
            ))}
</div>


            <div className="absolute backdrop-blur-sm opacity-60 bg-white rounded-full border-2 border-neutral-200 text-neutral-800 p-2 right-0 cursor-pointer" onClick={()=>handleClick("right")} >{"-->"}</div>
        </div>
    )
}

export {Slider}