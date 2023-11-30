'use client'
import { PageContainer } from "@/components/layouts/page-container"
import { ViewContainer } from "@/components/layouts/view-container"
import { Slider } from "@/components/ui/Slider"

const Projects = () => {
    return(
        <PageContainer className="flex flex-col gap-18 bg-neutral-800 text-neutral-100 h-screen w-full p-6 ">
            <h1 className="font-semibold text-5xl mx-auto">Projects</h1>
            <Slider />
        </PageContainer>
    )
}

export {Projects}