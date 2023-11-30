import { cn } from "@/lib/utils"
const ViewContainer = ({children, className, ...props})=>{
    return(
        <div className={cn('view-container', className)} {...props}>
            {children}
        </div>
    )
}
export {ViewContainer}