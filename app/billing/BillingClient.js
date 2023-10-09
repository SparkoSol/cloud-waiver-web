'use client'

import Heading from "@/app/components/Heading";
import Button from "@/app/components/Button";
import DataTable from "@/app/components/DataTable";
import PaymentRow from "@/app/billing/components/PaymentRow";
import {useState} from "react";

export const BillingClient = () => {
  const [open, setOpen] = useState(false)
  return (
    <div className='mt-8'>
      <div className='flex justify-between items-center mb-4 mt-8 flex-wrap gap-5'>
        <Heading title='Payment Method' subtitle='Followings are the payment methods available to choose'
                 subTitleClasses='text-sm text-gray-700' titleClasses='text-xl font-semibold text-gray-900'/>
        <Button btnText='Add credit card' fullWidth='w-fit grow md:grow-0'
                btnClasses='bg-CW-primary text-white px-5 py-2.5' onClick={e=>setOpen(true)}/>
      </div>
      <DataTable headers={['Brand', 'Last 4', 'Expiration']} TableRow={PaymentRow} items={[]} colspan={0}/>
    </div>
  )
}

export default BillingClient;