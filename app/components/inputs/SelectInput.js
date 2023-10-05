'use client'
import {ChevronDownIcon} from "@heroicons/react/20/solid";

const SelectInput = ({ options, value, setState }) => {
  const handleChange = (event) => {
    const selectedValue = event.target.value;
    setState(selectedValue);
  };

  return (
    <div className='relative w-fit rounded-md border border-gray-300 bg-gray-50 focus:border-gray-300'>
      <ChevronDownIcon className='w-4 h-4 absolute top-1/2 transform -translate-y-1/2 right-2 text-sm'/>
      <select className='block p-2.5 custom-menu appearance-none relative pr-6 focus-visible:outline-none cursor-pointer sm:text-sm bg-transparent z-1' value={value} onChange={handleChange}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectInput;