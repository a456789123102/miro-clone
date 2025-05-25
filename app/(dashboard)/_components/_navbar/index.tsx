"use client"

import { UserButton } from "@clerk/clerk-react"

function Navbar() {
  return (
    <div className=" flex items-center gap-x-4 p-5 bg-blue-500">
      <div className="hidden lg:flex lg:flex-1 bg-white">
        searchbar
      </div>
     <div className="ml-auto">
       <UserButton/>
     </div>
    </div>
  )
}

export default Navbar
