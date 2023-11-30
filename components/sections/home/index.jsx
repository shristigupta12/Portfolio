
import { ViewContainer } from "@/components/layouts/view-container"
import Image from "next/image"
import { Button } from "@/components/ui/button"


const Home = ()=>{
    return(
        <section className="flex h-full justify-center gap-2">
            <div className="flex flex-col gap-12 text-neutral-700  ">
                <div className="flex flex-col gap-3 font-semibold text-5xl font-sans">
                    <h1 >Hey there,</h1>
                    <h1>{`I'm Shristi Gupta`}</h1>
                </div>
                <div className="flex gap-5 flex-col">
                    <p>A passionate frontend engineer with a love for creating seamless and engaging user experiences.</p>
                    <p>From crafting elegant code to exploring the world of algorithms.</p>
                    <p>I thrive on turning ideas into reality.</p>
                    <p>
                        <Button variant="primary" className="bg-neutral-800 text-neutral-100 hover:underline transition-all">{"Resume ->"}</Button>
                    </p>
                </div>
            </div>
            
                <Image src={'/utils/profile.jpeg'} alt="avatar" width={'300'} height={'400'}/>
                
            
        </section>
    )
}

export {Home}