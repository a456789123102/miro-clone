"use client";
import { useOrganizationList } from "@clerk/clerk-react";

export const OrgList = () => {
    const { userMemberships } = useOrganizationList({
        userMemberships: {
            infinite: true,
        },
    });
    if (!userMemberships.data?.length) return null;
    return (
        <ul>
            {
                userMemberships.data.map((e) => (
                    <div key={e.organization.id}>
                        {e.organization.name}
                    </div>
                ))
            }
        </ul>
    );
};