
import { ViewContainer } from "@/components/layouts/view-container"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from 'next/link'


const Home = ()=>{
    return(
        <ViewContainer id="home">
        <section className="flex h-full justify-center gap-12 max-md:flex-col max-md:mt-[-25px]">
            <div className="flex flex-col gap-12 max-md:gap-5  text-neutral-700  ">
                <div className="flex min-[500px]:flex-col gap-3 font-semibold text-5xl max-[500px]:text-2xl font-sans">
                    <h1 >Hey there,</h1>
                    <h1>{`I'm Shristi 🌻`}</h1>
                </div>
                <div className="flex gap-5 flex-col max-[500px]:text-[14px] ">
                    <p>A passionate frontend engineer with a love for creating seamless and engaging user experiences.</p>
                    <p>From building intuitive user interfaces to engineering AI-powered solutions that scale.</p>
                    <p>Always up for exploring and learning new things.</p>
                    <div className="w-full flex max-md:justify-center">
                        <Link href="https://drive.google.com/file/d/188_sorZWyNW0eZmnpbA3U-SIk0rV2ZwZ/view?usp=drive_link">
                        <Button variant="primary" className="bg-neutral-800 w-fit text-neutral-100 rounded-xl transition-all hover:scale-105 shadow-md shadow-neutral-400">{"Resume ->"}</Button>
                        </Link>
                    </div>
                </div>
            </div>
                <Image src={'/utils/portfolio2.jpg'} alt="avatar" width={'300'} height={'400'} className="rounded-xl  max-lg:w-[180px] max-lg:h-[240px]  mx-auto max-md:w-[300px] max-md:h-[400px] shadow-md shadow-neutral-400"/>
        </section>
        </ViewContainer>
    )
}

export {Home}
