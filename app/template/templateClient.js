'use client'

import Tabs from "@/app/components/Tabs";
import {useRef, useState} from "react";
import {FolderIcon, PencilIcon} from "@heroicons/react/24/outline";
import DataTable from "@/app/components/DataTable";
import DashboardRow from "@/app/dashboard/components/DashboardRow";
import {dashboardData, DashBoardHeaders} from "@/app/lib/GeneralFunctions";
import Button from "@/app/components/Button";
import {LinkIcon, MagnifyingGlassIcon} from "@heroicons/react/20/solid";
import QRModal from "@/app/components/Modals/QRModal";
import Modal from "@/app/components/Modals/Modal";
import Input from "@/app/components/inputs/Input";
import SelectInput from "@/app/components/inputs/SelectInput";
import Submissions from "@/app/template/components/Submissions";
import Overview from "@/app/template/components/Overview";
import Settings from "@/app/template/components/Settings";

const TemplateClient = () => {

  const [tabs, setTabs] = useState([
    {name: 'Overview', current: true},
    {name: 'Submissions', current: false},
    {name: 'Builder', current: false},
    {name: 'Integrations', current: false},
    {name: 'Settings', current: false}
  ]);

  const [currentTab, setCurrentTab] = useState('Submissions');
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
      <Tabs tabs={tabs} setTabs={setTabs} setCurrentTab={setCurrentTab}/>

      {currentTab === 'Submissions' && <Submissions currentTab={currentTab}/>}
      {currentTab === 'Overview' && <Overview/>}
      {currentTab === 'Settings' && <Settings/>}
    </main>
  )
}

export default TemplateClient;
