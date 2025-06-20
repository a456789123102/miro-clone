import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

export interface HintProps {
    label: string;
    children: React.ReactNode;
    side?: "top" | "bottom" | "left" | "right";
    align?: "start" | "center" | "end";
    sideOffset?: number;
    alignOffset?: number;
}

export const Hint = ({ label, children, side, align, sideOffset, alignOffset }: HintProps) => {
    return (
        <TooltipProvider>
            <Tooltip delayDuration={150}>
                <TooltipTrigger asChild>{children}</TooltipTrigger>
                <TooltipContent
                    className="text-white bg-black opacity-65"
                    side={side}
                    align={align}
                    sideOffset={sideOffset}
                    alignOffset={alignOffset}
                >
                    <p className="font-semibold capitalize">{label}</p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    )
}