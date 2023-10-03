'use client';

const Input = ({placeholder, type, label, BtnIcon, inputRef}) => {
  return (
    <div className='mb-6'>
      <label className='block text-sm font-medium text-primary mb-2' htmlFor={label.toLowerCase()}>{label}</label>
      <div className="relative rounded-md shadow-sm">
        <BtnIcon
          className="pointer-events-none absolute inset-y-0 left-3 mt-px flex items-center text-CW-textGray w-5 h-5 transform translate-y-1/2"/>
        <input ref={inputRef}
          className="block w-full py-2.5 rounded-md border border-gray-300 bg-gray-50 pl-11 focus:border-gray-300 focus:ring-transparent sm:text-sm"
          id="email" type={type} name={label.toLowerCase()} required="required" placeholder={placeholder}
        />

      </div>
    </div>
  )
}

export default Input;