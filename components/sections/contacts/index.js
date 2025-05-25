import { ViewContainer } from "@/components/layouts/view-container"
import Link from 'next/link'
import {MapPin} from 'lucide-react'
import { Button } from "@/components/ui/button"
import { ContactData } from "@/public/data/contacts-data"

const Contacts = () =>{
    return(
        <footer id="contacts" className="flex flex-col gap-18 text-neutral-700 w-full p-6 overflow-x-hidden">
            <ViewContainer className="grid gap-8">
                <div className="grid font-semibold text-4xl gap-2 max-md:text-xl ">
                <h1 className="text-neutral-600">Want to get in touch?</h1>
                <Link href="mailto:shristigupta12@gmail.com">
                    <h1 className="text-amber-600 hover:text-neutral-400">{"shristiguptawork@gmail.com -->"}</h1>
                </Link>
                </div>
                <div className="flex justify-between items-center  ">
                    <div className="flex gap-1 max-md:text-xs">
                        <MapPin className="w-4 max-md:w-3"/>
                        <p >Bhopal, India</p>
                    </div>
                    <div className="grid grid-cols-3 gap-3">
                    {ContactData.map((contact, index)=>(
                        <Link href={contact.link} key={index} target="_blank">
                            <Button className="flex gap-1 hover:text-amber-600 max-md:px-1 max-md:py-0.5 ">
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