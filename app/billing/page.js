import Heading from "@/app/components/Heading";
import DataTable from "@/app/components/DataTable";
import {billingOptions, invoiceData} from "@/app/lib/GeneralFunctions";
import BillingRow from "@/app/billing/components/BillingRow";
import InvoiceRow from "@/app/billing/components/InvoiceRow";
import BillingClient from "@/app/billing/BillingClient";

export default function BillingPage() {
  return (
    <section>
      <Heading title='Plans' subtitle='You are on the Trial plan.' titleClasses='text-xl font-semibold text-gray-900'
               subTitleClasses='mt-2 text-sm text-gray-700'/>
      <div className='divide-y divide-gray-300'>
        <div className='mt-8'>
          <DataTable headers={['Plans']} TableRow={BillingRow} items={billingOptions} colspan={2}/>
        </div>
        <BillingClient/>
        <div className='mt-8'>
          <div className='flex justify-between items-center mb-4 mt-8'>
            <Heading title='Invoices' subtitle='Followings are all the available invoices'
                     subTitleClasses='text-sm text-gray-700' titleClasses='text-xl font-semibold text-gray-900'/>
          </div>
          <DataTable headers={['Invoice #', 'Period', 'Total', 'Status']} TableRow={InvoiceRow} items={invoiceData}
                     colspan={0}/>
        </div>
      </div>
    </section>
  )
}