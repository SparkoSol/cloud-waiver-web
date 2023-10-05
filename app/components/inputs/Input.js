'use client';

const Input = ({placeholder, type, label = null, fullWidth = true, BtnIcon = null, inputRef, extraClasses = '', inputClasses}) => {
  return (
    <>
      <div className={`${fullWidth ? 'w-full' : 'w-fit inline-block'} ${extraClasses}`}>
        {label &&
          <label className='block text-sm font-medium text-primary mb-2' htmlFor={label.toLowerCase()}>{label}</label>}
        <div className="relative rounded-md shadow-sm">
          {BtnIcon && <BtnIcon
            className="pointer-events-none absolute inset-y-0 left-3 mt-px flex items-center text-CW-textGray w-5 h-5 transform translate-y-1/2"/>}
          <input ref={inputRef}
                 className={`block w-full py-2.5 rounded-md border border-gray-300 bg-gray-50 ${inputClasses ? inputClasses : 'pl-11'} focus:border-gray-300 focus-visible:outline-none sm:text-sm`}
                 id={placeholder} type={type} name={label?.toLowerCase()} required="required" placeholder={placeholder}
          />

        </div>
      </div>
      {label === 'Domain Name' && <span>.cloudwaiver.com</span>}
    </>
  )
}

export default Input;