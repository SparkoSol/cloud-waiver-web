import {EyeIcon} from "@heroicons/react/20/solid";
import Link from "next/link";
import Image from "next/image";
import CheckboxInput from "@/app/components/inputs/CheckboxInput";
import React from "react";
import {limitChars} from "@/app/lib/GeneralFunctions";

const DashboardRow = ({item}) => {
  return (
    <tr>
      <td className='p-4 font-semibold text-sm text-gray-900 whitespace-nowrap'>
        <div className="flex items-center max-w-fit">
          <CheckboxInput label='selectAll' extraClasses='hidden'/>
        </div>
      </td>
      <td className='py-4 px-6 font-semibold text-sm text-gray-900 whitespace-nowrap'>{limitChars(item._id, 6)}</td>
      <td className='py-4 px-6 text-sm text-gray-900 whitespace-nowrap'>{item.signedDate}</td>
      <td className='py-4 px-6 text-sm text-gray-900 whitespace-nowrap'>{item.firstName}</td>
      <td className='py-4 px-6 text-sm text-gray-900 whitespace-nowrap'>{item.lastName}</td>
      <td className='py-4 px-6 text-sm text-gray-900 whitespace-nowrap'>{limitChars(item.refrenceNo, 5)}</td>
      <td className='py-4 px-6 text-sm text-gray-900 whitespace-nowrap'>{item.templateName}</td>
      <td className='py-4 px-3 text-sm text-gray-900 whitespace-nowrap'>
        <span className='bg-yellow-100 text-yellow-800 text-xs font-semibold px-2.5 py-0.5 rounded '>{item.status}</span></td>
      <td className='py-4 px-6 text-sm text-gray-900 whitespace-nowrap'>
        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-6">
            <Link href="/">
              <EyeIcon className='w-5 h-5 text-CW-textGray'/>
            </Link>
            <button>
              <Image
                src='/tick.svg'
                width='18'
                height='18'
                alt='Loading...'
              />
            </button>
            <button>
              <Image
                src='/cross.svg'
                width='18'
                height='18'
                alt='Loading...'
              />
            </button>
          </div>
        </div>
      </td>
    </tr>
  )
}

export default DashboardRow