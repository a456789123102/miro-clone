import React from 'react';
import NewBtn from './newBtn';
import {OrgList} from "./OrgList"

function Sidebar() {
  return (
<aside className='fixed z-50 left-0 bg-amber-900 h-full w-[60px] flex p-3 flex-col gap-y-4 text-white'>
  <OrgList/>
 <NewBtn/>
</aside>

  );
}

export default Sidebar;
