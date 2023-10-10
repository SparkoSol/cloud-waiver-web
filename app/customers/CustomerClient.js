'use client'

import Heading from "@/app/components/Heading";
import Input from "@/app/components/inputs/Input";
import {MagnifyingGlassIcon} from "@heroicons/react/24/outline";
import {useRef} from "react";
import DataTable from "@/app/components/DataTable";
import CustomerRow from "@/app/customers/components/CustomerRow";
import {customerData, customerHeaders} from "@/app/lib/GeneralFunctions";

const CustomerClient = () => {
  const searchRef = useRef();
  return (
    <section>
      <Heading title='Customers' titleClasses='text-xl font-bold text-gray-800'/>
      <div className='px-5 py-5'>
        <div className='bg-white shadow rounded-lg p-5'>
          <Input placeholder='Search' BtnIcon={MagnifyingGlassIcon} inputRef={searchRef} extraClasses='w-fit mb-6'/>
          <DataTable TableRow={CustomerRow} headers={customerHeaders} items={customerData}/>
        </div>
      </div>
    </section>
  )
}

export default CustomerClient;