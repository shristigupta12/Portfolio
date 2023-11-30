import { cn } from "@/lib/utils"
const PageContainer = ({children, className, ...props})=>{
    return(
        <div className= {cn('mb-10 h-4/6', className)} {...props}>
            {children}
        </div>
    )
}
export {PageContainer}