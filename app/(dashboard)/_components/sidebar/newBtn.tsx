"use client";
import { Plus } from "lucide-react";
import { CreateOrganization } from "@clerk/nextjs";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { Hint } from "@/components/hint";

function newBtn() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="aspect-square">
          <Hint label="Create New Organization" side="right" align="start" sideOffset={10} >
            <button className="bg-white/25 h-full w-full cursor-pointer rounded-md flex items-center justify-center opacity-70 hover:opacity-100 transition">
              <Plus className="text-white" />
            </button>
          </Hint>
        </div>
      </DialogTrigger>
      <DialogContent className="flex justify-center items-center bg-transparent border-none  shadow-none">
        <CreateOrganization />
      </DialogContent>
    </Dialog>
  )
}

export default newBtn;
