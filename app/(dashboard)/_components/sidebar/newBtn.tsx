"use client";
import {Plus} from "lucide-react";
import { CreateOrganization } from "@clerk/nextjs";
import {Dialog,DialogContent,DialogTrigger} from "@/components/ui/dialog"

function newBtn() {
  return (
<Dialog>
    <DialogTrigger asChild>
<div className="aspect-square">
<button className="bg-white/25 h-full cursor-pointer w-full rounded-md flex items-center justify-center opacity-70 hover:opacity-100 transition">
    <Plus className="text-white"/>
</button>
</div>
    </DialogTrigger>
<DialogContent className="flex justify-center items-center bg-transparent border-none  shadow-none">
    <CreateOrganization />
</DialogContent>
</Dialog>
  )
}

export default newBtn
