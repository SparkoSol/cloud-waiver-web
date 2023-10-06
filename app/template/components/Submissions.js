import Button from "@/app/components/Button";
import {LinkIcon, MagnifyingGlassIcon} from "@heroicons/react/20/solid";
import QRModal from "@/app/components/Modals/QRModal";
import Input from "@/app/components/inputs/Input";
import SelectInput from "@/app/components/inputs/SelectInput";
import {dashboardData, DashBoardHeaders} from "@/app/lib/GeneralFunctions";
import DataTable from "@/app/components/DataTable";
import DashboardRow from "@/app/dashboard/components/DashboardRow";
import {FolderIcon} from "@heroicons/react/24/outline";
import {useRef, useState} from "react";
import Heading from "@/app/components/Heading";

const Submissions = ({currentTab=''}) => {
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState('Status');
  const searchRef = useRef();
  return(
    <section>
      {currentTab !== 'Submissions' &&
        <Heading title='Recent Waivers' titleClasses='text-xl text-gray-800 py-2'/>}
      {currentTab === 'Submissions' && <div className='flex justify-between items-center pt-6 pb-4'>
        <p className='text-sm text-gray-700'>List of all submissions received for waiver 102.</p>
        <div className='mt-4 sm:mt-0 sm:ml-16 sm:flex-none'>
          <Button btnText='Share' BtnIcon={LinkIcon} btnClasses='px-5 py-2.5 border text-gray-900 font-medium' onClick={e=>setOpen(true)}/>
          <QRModal setOpen={setOpen} open={open}/>
        </div>
      </div>}
      <div className='flex gap-3'>
        <Input placeholder='Search' type='text' inputRef={searchRef} BtnIcon={MagnifyingGlassIcon} extraClasses='w-fit inline-block'/>
        <SelectInput options={['Submitted', 'Approved', 'Declined', 'Pending', 'Status']} setState={setStatus} state={status} extraClasses='w-1/4'/>
      </div>
      {
        dashboardData.length > 0 ?
          <DataTable headers={DashBoardHeaders} TableRow={DashboardRow} items={dashboardData} setSelectAll={() => {
          }}/> : <div className='text-center mt-4'>
            <FolderIcon className='w-40 h-40 text-gray-400 mx-auto'/>
            <span className='text-gray-500 mb-10 text-base'>No Waivers Found. Get started by creating a waiver</span>
          </div>
      }
    </section>
  )
}

export default Submissions