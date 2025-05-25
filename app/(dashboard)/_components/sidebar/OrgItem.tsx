"use client";

import Image from "next/image";
import {useOrganization,useOrganizationList,} from "@clerk/nextjs";
import {cn} from "@/lib/utils";

interface ItemProps {
    id: string;
    name: string;
    imageUrl: string;
}

export const OrgItem = ({id,name,imageUrl}:ItemProps) => {
return (
    <div className="aspect-square relative">
        <Image
        src={imageUrl}
        fill
alt={name}
onClick={() => {}}
        />
    </div>
);
}