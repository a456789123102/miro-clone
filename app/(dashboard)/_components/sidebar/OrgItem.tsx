"use client";

import Image from "next/image";
import { useOrganization, useOrganizationList, } from "@clerk/nextjs";
import { cn } from "@/lib/utils";
import { Hint } from "@/components/hint";

interface ItemProps {
    id: string;
    name: string;
    imageUrl: string;
}

export const OrgItem = ({ id, name, imageUrl }: ItemProps) => {
    const { organization } = useOrganization();
    const { setActive } = useOrganizationList();
    const isActive = organization?.id === id;
    const setOrgClick = () => {
        if (!setActive) return;
        setActive({ organization: id })
    }
    return (
        <div className="aspect-square relative">
            <Hint label={name} side="right" align="start" sideOffset={10}>
            <Image
                src={imageUrl}
                fill
                alt={name}
                onClick={setOrgClick}
                className={cn(
                    "rounded-md cursor-pointer opacity-70 hover:opacity-95 transition",isActive && "opacity-100"
                )}
            />
            </Hint>
        </div>
    );
}