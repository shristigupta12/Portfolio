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
    return(
        <ViewContainer className={cn("view-container sticky top-3")} id="nav">
            <nav className="flex w-full rounded-full border-2 border-neutral-200 backdrop-blur-sm opacity-80 bg-white p-4 max-[500px]:px-2 max-[500px]:py-4 items-center">
            <ul className="flex  gap-10 max-[500px]:gap-4 max-[400px]:gap-2 w-full justify-end max-[500px]:justify-center text-neutral-700 max-[400px]:hidden ">
                <Link href="#home">
                <li className="cursor-pointer hover:underline hover:text-neutral-900">Home</li>
                </Link>
                <Link href="#projects">
                <li className="cursor-pointer hover:underline hover:text-neutral-900">Projects</li>
                </Link>
                <Link href="#skills">
                <li className="cursor-pointer hover:underline hover:text-neutral-900">Skills</li>
                </Link>
                <Link href="#contacts">
                <li className="cursor-pointer hover:underline hover:text-neutral-900">Contacts</li>
                </Link>
            </ul>
            <div className="flex text-neutral-700 min-[400px]:hidden justify-center">
            <DropdownMenu >
            <DropdownMenuTrigger className="cursor-pointer hover:underline hover:text-neutral-900">Menu</DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuItem className="cursor-pointer hover:underline hover:text-neutral-900">Home</DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer hover:underline hover:text-neutral-900">Skills</DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer hover:underline hover:text-neutral-900">Projects</DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer hover:underline hover:text-neutral-900">Contacts</DropdownMenuItem>
            </DropdownMenuContent>
            </DropdownMenu>
            </div>
        </nav>
        </ViewContainer>
         
    )
}
export {Navbar}