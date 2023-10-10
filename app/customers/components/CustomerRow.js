import {EyeIcon, PencilSquareIcon} from "@heroicons/react/24/outline";
import CheckboxInput from "@/app/components/inputs/CheckboxInput";
import React from "react";
import {limitChars} from "@/app/lib/GeneralFunctions";
import Link from "next/link";

const CustomerRow = ({item}) => {
  return (
    <tr>
      <td className='p-4 whitespace-nowrap'>
        <div className="flex items-center max-w-fit">
          <CheckboxInput label='selectAll' extraClasses='hidden'/>
        </div>
      </td>
      <td className='py-3 px-4 font-semibold text-gray-900'>{limitChars(item.id, 6)}</td>
      <td className='py-3 px-4'>{item.firstName}</td>
      <td className='py-3 px-4'>{item.lastName}</td>
      <td className='py-3 px-4'>{item.email}</td>
      <td className='py-3 px-4'>{item.count}</td>
      <td className='py-3 px-4'>
        <div className='flex gap-5'>
          <Link href={`/customers/${item.id}`}><EyeIcon className='w-5 h-5 text-gray-500'/></Link>
          <Link href={`/customers/${item.id}/edit`}><PencilSquareIcon className='w-5 h-5 text-gray-500'/></Link>
        </div>
      </td>
    </tr>
  )
}

export default CustomerRow;