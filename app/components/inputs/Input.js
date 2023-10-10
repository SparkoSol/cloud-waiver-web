'use client';

import {twMerge} from "tailwind-merge";

const Input = ({
                 placeholder, type='text', label = null, BtnIcon = null, inputRef, extraClasses = '', inputClasses, value = ''
               }) => {
  return (<>
    <div className={twMerge(`w-full ${extraClasses}`)}>
      {label && <label className='block text-sm font-medium text-primary mb-2 text-start'
                       htmlFor={label.toLowerCase()}>{label}</label>}
      <div className="relative rounded-md shadow-sm">
        {BtnIcon && <BtnIcon
          className="pointer-events-none absolute inset-y-0 left-3 mt-px flex items-center text-CW-textGray w-5 h-5 transform translate-y-1/2"/>}
        <input ref={inputRef}
               defaultValue={value}
               className={twMerge(`block w-full w-full py-2.5 rounded-md border border-gray-300 bg-gray-50 focus:border-gray-300 focus-visible:outline-none sm:text-sm text-gray-900 ${inputClasses ? inputClasses : 'pl-11'}`)}
               id={placeholder} type={type} name={label?.toLowerCase()} required="required" placeholder={placeholder}
        />

      </div>
    </div>
    {label === 'Domain Name' && <span>.cloudwaiver.com</span>}
  </>)
}

export default Input;