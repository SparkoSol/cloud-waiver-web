'use client'

import Tabs from "@/app/components/Tabs";
import {useState} from "react";
import {PencilIcon} from "@heroicons/react/24/outline";
import Modal from "@/app/components/Modals/Modal";

const TemplateClient = ({children}) => {
  const tabs = [
    {name: 'Overview', url:'/template', id:1},
    {name: 'Submissions', url:'/template/submissions', id:2},
    {name: 'Builder', url:'/template-builder', id:3},
    {name: 'Integrations', url:'/template/integrations', id:4},
    {name: 'Settings', url:'/template/settings', id:5}
  ]
  const [editMode, setEditMode] = useState(false)
  return (
    <main>
      <div className='px-2 py-3'>
        <div className="flex items-center space-x-4">
          <h2 className="font-bold text-2xl">waiver 102</h2>
          <button className='outline-none' onClick={e => setEditMode(true)}>
            <PencilIcon className='w-5 h-5'/>
          </button>
          <Modal setOpen={setEditMode} open={editMode} editMode={true}/>
        </div>
        <span className="text-sm italic">sparko.onlinewaiverpro.com/waiver/5f816420-63fe-11ee-bdb3-b91279ed4d18</span>
      </div>
      <Tabs tabs={tabs}/>
      <div className='shadow rounded-md sm:overflow-hidden bg-white py-6 px-4 space-y-6 sm:p-6'>
        {children}
      </div>
    </main>
  )
}

export default TemplateClient;
