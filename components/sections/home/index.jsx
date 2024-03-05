
import { ViewContainer } from "@/components/layouts/view-container"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from 'next/link'


const Home = ()=>{
    return(
        <ViewContainer id="home">
        <section className="flex h-full justify-center gap-12 max-md:flex-col max-md:mt-[-40px]">
            <div className="flex flex-col gap-12 text-neutral-700  ">
                <div className="flex flex-col gap-3 font-semibold text-5xl font-sans">
                    <h1 >Hey there,</h1>
                    <h1>{`I'm Shristi Gupta`}</h1>
                </div>
                <div className="flex gap-5 flex-col ">
                    <p>A passionate frontend engineer with a love for creating seamless and engaging user experiences.</p>
                    <p>From crafting elegant code to exploring the world of algorithms.</p>
                    <p>I thrive on turning ideas into reality.</p>
                    <Link href="https://drive.google.com/file/d/19XbRXEjvcLp6ATKBePU1uZ01iIbpNEWZ/view?usp=drive_link" target="_blank">
                    <Button variant="primary" className="bg-neutral-800 w-fit text-neutral-100 rounded-lg transition-all hover:scale-105 max-sm:w-full ">{"Resume ->"}</Button>
                    </Link>
                </div>
            </div>
                <Image src={'/utils/profile.jpeg'} alt="avatar" width={'300'} height={'400'} className="rounded-xl shadow-xl shadow-neutral-200 max-lg:w-[180px] max-lg:h-[240px]  mx-auto max-md:w-[300px] max-md:h-[400px]"/>
        </section>
        </ViewContainer>
    )
}

export {Home}