'use client'

import Heading from "@/app/components/Heading";
import Input from "@/app/components/inputs/Input";
import {MagnifyingGlassIcon} from "@heroicons/react/20/solid";
import {useEffect, useRef, useState} from "react";
import SelectInput from "@/app/components/inputs/SelectInput";
import {cardsData, dashboardData, DashBoardHeaders, generateMonths, generateYears} from "@/app/lib/GeneralFunctions";
import DataTable from "@/app/components/DataTable";
import Button from "@/app/components/Button";
import clipboardIcon from "@heroicons/react/20/solid/esm/ClipboardIcon";
import {FolderIcon} from "@heroicons/react/24/outline";
import Modal from "@/app/components/Modals/Modal";
import {useRouter, useSearchParams} from "next/navigation";
import DashboardRow from "@/app/dashboard/components/DashboardRow";
import Card from "@/app/dashboard/components/Card";

const DashboardClient = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const searchRef = useRef();
  const [status, setStatus] = useState('Status')
  const [template, setTemplate] = useState('Template')
  const [month, setMonth] = useState('Month')
  const [year, setYear] = useState('Year')
  const [openModal, setOpenModal] = useState(false)

  const selectData = [{
    options: ['Submitted', 'Approved', 'Declined', 'Pending', 'Status'], state: status, setState: setStatus
  }, {
    options: ['Template'], state: template, setState: setTemplate
  }, {
    options: generateMonths(12), state: month, setState: setMonth
  }, {
    options: generateYears(2005), state: year, setState: setYear
  }]

  return (<>
    <div>
      <Heading title='Dashboard' titleClasses='text-xl leading-tight text-gray-800 mb-4'/>
      <div className='grid grid-rows-1 grid-cols-1 md:grid-cols-3 gap-5'>
        {cardsData.map(item => {
          return (<Card key={item.id} title={item.title} number={item.number} endIcon={item.endIcon}
                        startIcon={item.startIcon}/>)
        })}
      </div>
    </div>
    <div className='mt-5 bg-white shadow rounded-lg p-5'>
      <div className='flex justify-between flex-wrap pb-4'>
        <Heading title='Recent waiver' titleClasses='text-xl leading-tight text-gray-800 mb-4'/>
        <Button BtnIcon={clipboardIcon}
                btnText='Create waivers'
                onClick={e => setOpenModal(true)}
                btnClasses='bg-CW-primary border-CW-primary px-5 py-2.5'
                iconClasses='w-4 h-4 text-white inline-block ml-2'/>
      </div>
      <div className='flex gap-2 mb-4 flex-wrap'>
        <Input placeholder='Search' inputRef={searchRef} BtnIcon={MagnifyingGlassIcon}
               extraClasses='w-fit inline-block'/>
        {selectData.map((item, index) => {
          return <SelectInput extraClasses='grow md:grow-0 w-28' key={index} options={item.options} state={item.state}
                              setState={item.setState}/>
        })}
      </div>
      {dashboardData.length > 0 ? <DataTable headers={DashBoardHeaders} TableRow={DashboardRow} items={dashboardData}
      /> : <div className='text-center mt-4'>
        <FolderIcon className='w-40 h-40 text-gray-400 mx-auto'/>
        <span className='text-gray-500 mb-10 text-base'>No Waivers Found. Get started by creating a waiver</span>
      </div>}
    </div>
    <Modal open={openModal} setOpen={setOpenModal}/>
  </>)
}

export default DashboardClient;