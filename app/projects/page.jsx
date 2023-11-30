'use client'
import { PageContainer } from "@/components/layouts/page-container"
import { ViewContainer } from "@/components/layouts/view-container"

const Projects = () => {
    return(
        <PageContainer className="flex flex-col gap-18 bg-neutral-800 text-neutral-100 w-full p-6 overflow-x-hidden">
            <marquee behavior="" direction=""><div className="text-neutral-700 cursor-default select-none flex gap-3 items-center">
            <h1 className="font-semibold text-5xl ">Projects</h1>
            <h1 className="font-semibold text-5xl ">Projects</h1>
            <h1 className="font-semibold text-5xl ">Projects</h1>
            <h1 className="font-semibold text-5xl ">Projects</h1>
            <h1 className="font-semibold text-5xl ">Projects</h1>
            <h1 className="font-semibold text-5xl ">Projects</h1>
            <h1 className="font-semibold text-5xl ">Projects</h1>
            <h1 className="font-semibold text-5xl ">Projects</h1>
            </div></marquee>
        </PageContainer>
    )
}

export {Projects}