import { cn } from "@/lib/utils"
const ViewContainer = ({children, className, ...props})=>{
    return(
        <div className={cn('mx-auto w-3/4 py-10', className)} {...props}>
            {children}
        </div>
    )
}
export {ViewContainer}