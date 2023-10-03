'use client'

const CheckboxInput = ({label, inputRef})=>{
  return(
    <div className='flex gap-2 items-center'>
      <input
        type='checkbox'
        ref={inputRef}
        className='w-4 h-4 border border-gray-300 border-sm focus:ring-blue-500 cursor-pointer'
        id={label.toLowerCase()}
        name={label.toLowerCase()}
      />
      <label className='block text-sm text-gray-500 font-normal cursor-pointer' htmlFor={label.toLowerCase()}>{label}</label>
    </div>
  )
}

export default CheckboxInput