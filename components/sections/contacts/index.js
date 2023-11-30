import { ViewContainer } from "@/components/layouts/view-container"
import Link from 'next/link'
import {MapPin} from 'lucide-react'
import { Button } from "@/components/ui/button"
import { ContactData } from "@/public/data/contacts-data"

const Contacts = () =>{
    return(
        <footer id="contacts" className="flex flex-col gap-18 bg-neutral-800 text-neutral-100 w-full p-6 overflow-x-hidden">
            <ViewContainer className="grid gap-24">
                <div className="grid font-semibold text-4xl gap-2">
                <h1 >Want to get in touch?</h1>
                <Link href="mailto:shristigupta12@gmail.com">
                    <h1 className="text-orange-600 underline2 hover:scale-95 transition-all">{"shristiguptawork@gmail.com -->"}</h1>
                </Link>
                </div>
                <div className="flex justify-between items-center">
                    <div className="flex gap-1">
                        <MapPin />
                        <p>Indore, India</p>
                    </div>
                    <div className="grid grid-cols-3 gap-3">
                    {ContactData.map((contact, index)=>(
                        <Link href={contact.link} key={index} target="_blank">
                            <Button className="flex gap-1 hover:scale-110">
                                <p>{contact.media}</p>
                                {contact.icon}
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