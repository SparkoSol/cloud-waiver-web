'use client'

import Link from "next/link";

const CheckboxInput = ({label=null, inputRef=null, url = null, link = null, extraClasses='', setState}) => {
  return (
    <div className='flex gap-2 items-center'>
      <input
        type='checkbox'
        ref={inputRef}
        className='w-4 h-4 border border-gray-300 border-sm focus:ring-blue-500 cursor-pointer'
        id={label.toLowerCase()}
        name={label.toLowerCase()}
        onChange={e=>setState && setState(e.target.checked)}
      />
      <label className={`block text-gray-500 font-normal cursor-pointer ${extraClasses}`}
             htmlFor={label.toLowerCase()}>{label}
        {link && <Link className='font-bold text-blue-600' href={url}> terms and conditions</Link>}
      </label>
    </div>
  )
}

export default CheckboxInput


