import { ViewContainer } from "@/components/layouts/view-container"
import Link from 'next/link'
import {MapPin} from 'lucide-react'
import { Button } from "@/components/ui/button"
import { ContactData } from "@/public/data/contacts-data"

const Contacts = () =>{
    return(
        <footer id="contacts" className="flex flex-col sm:gap-18 gap-10 text-neutral-700 w-full sm:py-20 py-10 overflow-x-hidden">
            <ViewContainer className="grid sm:gap-8 gap-4">
                <div className="grid font-semibold sm:text-4xl sm:gap-2 gap-1 text-lg ">
                <h1 className="text-neutral-600">Want to get in touch?</h1>
                <Link href="mailto:shristigupta12@gmail.com">
                    <h1 className="text-neutral-400 hover:text-amber-600">{"shristiguptawork@gmail.com -->"}</h1>
                </Link>
                </div>
                <div className="flex justify-between items-center  ">
                    <div className="flex gap-1 sm:text-sm text-[10px] sm:items-center ">
                        <MapPin className="w-4 max-md:w-3"/>
                        <p >Bhopal, India</p>
                    </div>
                    <div className="grid grid-cols-3 sm:gap-3 gap-1">
                    {ContactData.map((contact, index)=>(
                        <Link href={contact.link} key={index} target="_blank">
                            <Button className="flex gap-1 hover:text-neutral-500  ">
                                <p className="max-md:text-xs">{contact.media}</p>
                                { contact.icon2 ? <i className={contact.icon2}></i> : contact.icon }
                            </Button>
                        </Link>
                    ))}
                    </div>
                </div>
            </ViewContainer>
        </footer>
    )
}

export {Contacts}