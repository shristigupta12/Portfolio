import { ViewContainer } from "@/components/layouts/view-container"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from 'next/link'


const Home = ()=>{
    return(
        <ViewContainer id="home">
        <section className="flex h-full justify-between gap-12 max-md:flex-col max-md:mt-[-25px] ">
            <div className="flex flex-col gap-5 max-md:gap-5  text-neutral-700 max-sm:mt-3 ">
                <div className="flex min-[500px]:flex-col font-semibold text-3xl max-[500px]:text-2xl font-sans max-sm:gap-2">
                    <h1 >Hey there,</h1>
                    <h1>{`I'm Shristi 🌻`}</h1>
                </div>
                <div className="flex gap-3 flex-col max-[500px]:text-[14px] text-[15px] text-neutral-600">
                    <p>A passionate frontend engineer with a love for creating seamless and engaging user experiences.</p>
                    <p>From building intuitive user interfaces to engineering AI-powered solutions that scale.</p>
                    <p>Always up for exploring and learning new things.</p>
                    <div className="w-full flex max-md:justify-center">
                        <Link href="https://drive.google.com/file/d/188_sorZWyNW0eZmnpbA3U-SIk0rV2ZwZ/view?usp=drive_link">
                        <button variant="ghost" className="text-sm w-fit text-neutral-400 underline transition-all hover:scale-105 hover:text-amber-600 ">{"Resume ->"}</button>
                        </Link>
                    </div>
                </div>
            </div>
                <div className="relative max-sm:flex max-sm:items-center max-sm:justify-center max-sm:gap-5"> 
                    <Image src={'/utils/brush-stroke-img.png'} alt="avatar" width={450} height={550} className="-mt-5 max-sm:mt-0 max-sm:w-[400px] max-sm:h-[350px]"/>
                    <Image src={'/utils/portfolio-profile.png'} alt="avatar" width={230} height={330} className=" absolute top-0 max-sm:w-[200px] max-sm:h-[300px]"/>
                </div>
        </section>
        </ViewContainer>
    )
}

export {Home}
