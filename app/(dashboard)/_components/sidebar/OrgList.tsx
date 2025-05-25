"use client";
import { useOrganizationList } from "@clerk/clerk-react";
import { OrgItem } from "./OrgItem";

export const OrgList = () => {
    const { userMemberships } = useOrganizationList({
        userMemberships: {
            infinite: true,
        },
    });
    if (!userMemberships.data?.length) return null;
    return (
        <ul className="flex flex-col gap-3">
            {
                userMemberships.data.map((e) => (
                    <OrgItem key={e.organization.id} id={e.organization.id} name={e.organization.name} imageUrl={e.organization.imageUrl} />
                ))
            }
        </ul>
    );
};