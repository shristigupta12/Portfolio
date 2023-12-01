import {Github} from 'lucide-react'
import {Twitter} from 'lucide-react'
import {Newspaper} from 'lucide-react'
import {Linkedin} from 'lucide-react'
import {Code} from 'lucide-react'
import {Instagram} from 'lucide-react'

const ContactData = [
    {
        media:"GitHub",
        icon:<Github className='w-4'/>,
        link:"https://www.github.com/shristigupta12"
    },
    {
        media:"Twitter",
        icon:<Twitter className='w-4'/>,
        link:"https://www.twitter.com/shristigupta120"
    },
    {
        media:"Resume",
        icon:<Newspaper className='w-4'/>,
        link:"https://drive.google.com/file/d/1QaHS9L0vimQDfxEwSGEEyg46MxQ5tBvt/view?usp=drive_link"
    },
    {
        media:"LinkedIn",
        icon:<Linkedin className='w-4'/>,
        link:"https://www.linkedin.com/in/shristigupta12"
    },
    {
        media:"Leetcode",
        icon:<Code className='w-4'/>,
        link:"https://www.leetcode.com/ShristiGupta12"
    },
    {
        media:"Instagram",
        icon:<Instagram className='w-4'/>,
        link:"https://www.instagram.com/shrisstiiiii/"
    }
]

export {ContactData}