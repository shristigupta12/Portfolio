import { ViewContainer } from "@/components/layouts/view-container"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
  import { cn } from "@/lib/utils"
  import Link from 'next/link'

const Navbar = ()=>{
    const navItems = [
        {
            name:"home",
            link:"#home"
        },
        {
            name:'experience',
            link:'#experience'
        },
        {
            name:"projects",
            link:"#projects"
        },
        {
            name:"skills",
            link:"#skills"
        },
        {
            name:"contacts",
            link:"#contacts"
        }
    ]
    return(
        <ViewContainer className={cn("view-container sticky top-3 flex justify-start")} id="nav">
            <nav className="flex w-fit rounded-2xl bg-white mt-3 p-1 max-[500px]:px-2 max-[500px]:py-2 items-center transition-all shadow-sm shadow-neutral-400 ">
            <ul className="flex  gap-1 max-[500px]:gap-2  w-full  text-neutral-700 max-[500px]:text-[14px] text-sm ">
                {navItems.map((item, index)=>(
                    <Link href={item.link} key={index}>
                    <li className="cursor-pointer text-neutral-500 hover:text-neutral-900  px-3 py-1.5 rounded-xl max-[500px]:px-1 max-[500px]:py-1">{item.name}</li>
                    </Link>
                ))}
            </ul>
        </nav>
        </ViewContainer>
         
    )
}
export {Navbar}