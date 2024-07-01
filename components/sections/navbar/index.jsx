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
        <ViewContainer className={cn("view-container sticky top-3 flex justify-center")} id="nav">
            <nav className="flex w-full rounded-2xl backdrop-blur-sm opacity-80 bg-white p-2 max-[500px]:px-2 max-[500px]:py-2 items-center transition-all">
            <ul className="flex  gap-1 max-[500px]:gap-2 max-[500px]:justify-evenly w-full text-neutral-700 max-[500px]:text-[12px] ">
                {navItems.map((item, index)=>(
                    <Link href={item.link} key={index}>
                    <li className="cursor-pointer hover:bg-neutral-700 hover:text-white px-3 py-1.5 rounded-xl  max-[500px]:px-1 max-[500px]:py-1">{item.name}</li>
                    </Link>
                ))}
            </ul>
            {/* <div className="flex text-neutral-700 min-[400px]:hidden justify-center "> */}
            {/* <DropdownMenu >
            <DropdownMenuTrigger className="cursor-pointer hover:underline hover:text-neutral-900 ">Menu</DropdownMenuTrigger>
            <DropdownMenuContent className=" rounded-md backdrop-blur-sm opacity-80 bg-white">
                {navItems.map((item, index)=>(
                    <Link href={item.link} key={index}>
                    <DropdownMenuItem className="cursor-pointer hover:bg-neutral-900 hover:text-white px-3 py-1.5 rounded-full">{item.name}</DropdownMenuItem>
                    </Link>
                ))}
            </DropdownMenuContent>
            </DropdownMenu> */}
            {/* </div> */}
        </nav>
        </ViewContainer>
         
    )
}
export {Navbar}