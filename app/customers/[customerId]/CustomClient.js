'use client'

import Input from "@/app/components/inputs/Input";
import {MagnifyingGlassIcon} from "@heroicons/react/20/solid";
import SelectInput from "@/app/components/inputs/SelectInput";
import {useRef, useState} from "react";
import {customerData, customerHeaders, dashboardData, DashBoardHeaders} from "@/app/lib/GeneralFunctions";
import DataTable from "@/app/components/DataTable";
import DashboardRow from "@/app/dashboard/components/DashboardRow";
import {FolderIcon} from "@heroicons/react/24/outline";
import CustomerRow from "@/app/customers/components/CustomerRow";

const CustomClient = () => {
  const searchRef = useRef();
  const [status, setStatus] = useState('Status');
  return(
    <section className='py-5'>
      <div className='bg-white shadow rounded-lg p-5'>
        <div className='flex gap-3 flex-wrap mb-4'>
          <Input placeholder='Search' inputRef={searchRef} BtnIcon={MagnifyingGlassIcon} extraClasses='w-fit inline-block grow sm:grow-0'/>
          <SelectInput extraClasses='w-1/4 grow sm:grow-0' options={['Submitted', 'Approved', 'Declined', 'Pending', 'Status']} setState={setStatus} state={status}/>
        </div>
        {dashboardData.length > 0 ? <DataTable headers={customerHeaders} TableRow={CustomerRow} items={customerData} /> : <div className='text-center mt-4'>
          <FolderIcon className='w-40 h-40 text-gray-400 mx-auto'/>
          <span className='text-gray-500 mb-10 text-base'>No Waivers Found. Get started by creating a waiver</span>
        </div>}
      </div>
    </section>
  )
}

export default CustomClient;