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
            name:"Home",
            link:"#home"
        },
        {
            name:'Work',
            link:'#experience'
        },
        {
            name:"Projects",
            link:"#projects"
        },
        // {
        //     name:"skills",
        //     link:"#skills"
        // },
        {
            name:"Contacts",
            link:"#contacts"
        }
    ]
    return(
        <nav className=" flex w-full bg-white/80 backdrop-blur-sm py-4 max-[500px]:px-2 max-[500px]:py-2 items-center transition-all shadow-sm  ">
                 {/* <ViewContainer className={cn("view-container sticky  flex justify-start")} id="nav"> */}
            <ul className="flex justify-between items-center w-full text-neutral-700 px-6">
                <p className=" text-base font-medium">SHRISTI</p>
                <div className="flex gap-4 max-[500px]:gap-2 max-[500px]:text-[14px] text-sm">
                {navItems.map((item, index)=>(
                    <Link href={item.link} key={index}>
                    <li className="cursor-pointer text-neutral-500 hover:text-neutral-900 pl-3 rounded-xl max-[500px]:px-1">{item.name}</li>
                    </Link>
                ))}
                </div>
            </ul>
         {/* </ViewContainer> */}
        </nav>
         
    )
}
export {Navbar}