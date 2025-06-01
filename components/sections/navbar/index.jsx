"use client"

  import { cn } from "@/lib/utils"
  import Link from 'next/link'
  import { useState } from 'react'
  import { Menu, X } from 'lucide-react'

const Navbar = ()=>{
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)
    
    const navItems = [
        {
            name:"Home",
            link:"#home"
        },
        {
            name:"Projects",
            link:"#projects"
        },
        {
            name:'Work',
            link:'#work'
        },
        {
            name:"Contacts",
            link:"#contacts"
        }
    ]

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen)
    }

    const closeSidebar = () => {
        setIsSidebarOpen(false)
    }

    return(
        <>
            <nav className=" flex w-full bg-white/80 backdrop-blur-sm py-4 items-center transition-all shadow-sm  ">
                     {/* <ViewContainer className={cn("view-container sticky  flex justify-start")} id="nav"> */}
                <ul className="flex justify-between items-center w-full text-neutral-700 px-6">
                    <p className=" text-base font-medium">SHRISTI</p>
                    <div className="flex gap-4 max-[500px]:gap-2 max-[500px]:text-[14px] text-sm max-sm:hidden">
                    {navItems.map((item, index)=>(
                        <Link href={item.link} key={index}>
                        <li className="cursor-pointer text-neutral-500 hover:text-neutral-900 pl-3 rounded-xl max-[500px]:px-1">{item.name}</li>
                        </Link>
                    ))}
                    </div>
                    <div className="sm:hidden">
                        <button 
                            onClick={toggleSidebar}
                            className="p-2 text-neutral-700 hover:text-neutral-900 transition-colors"
                            aria-label="Toggle menu"
                        >
                            <Menu size={24} />
                        </button>
                    </div>
                </ul>
             {/* </ViewContainer> */}
            </nav>

            {/* Mobile Sidebar */}
            <div className={cn(
                "fixed inset-0 z-50 sm:hidden transition-all duration-300",
                isSidebarOpen ? "visible" : "invisible"
            )}>
                {/* Backdrop */}
                <div 
                    className={cn(
                        "absolute inset-0 bg-black transition-opacity duration-300",
                        isSidebarOpen ? "opacity-50" : "opacity-0"
                    )}
                    onClick={closeSidebar}
                />
                
                {/* Sidebar */}
                <div className={cn(
                    "absolute top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out",
                    isSidebarOpen ? "translate-x-0" : "translate-x-full"
                )}>
                    {/* Sidebar Header */}
                    <div className="flex items-center justify-between p-6 border-b">
                        <h2 className="text-lg font-medium text-neutral-700">SHRISTI</h2>
                        <button 
                            onClick={closeSidebar}
                            className="p-2 text-neutral-700 hover:text-neutral-900 transition-colors"
                            aria-label="Close menu"
                        >
                            <X size={20} />
                        </button>
                    </div>
                    
                    {/* Navigation Items */}
                    <nav className="p-6">
                        <ul className="space-y-4">
                            {navItems.map((item, index) => (
                                <li key={index}>
                                    <Link 
                                        href={item.link} 
                                        onClick={closeSidebar}
                                        className="block py-3 px-4 text-neutral-600 hover:text-neutral-900 hover:bg-neutral-50 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-neutral-200 focus:bg-neutral-50 active:bg-neutral-100"
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
            </div>
        </>
         
    )
}
export {Navbar}