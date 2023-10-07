'use client'

import Heading from "@/app/components/Heading";
import SelectInput from "@/app/components/inputs/SelectInput";
import Input from "@/app/components/inputs/Input";
import Button from "@/app/components/Button";
import {countries} from "@/app/lib/GeneralFunctions";
import {useRef, useState} from "react";

const Account = () =>{
  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);
  const emailRef = useRef(null);
  const streetRef = useRef(null);
  const cityRef = useRef(null);
  const stateRef = useRef(null);
  const postalCodeRef = useRef(null)

  const [country, setCountry] = useState('Please Choose');

  const data = [
    {
      id: 1,
      label: 'First Name',
      value: 'value',
      type: 'text',
      placeholder: 'John',
      ref: firstNameRef,
      class: 'w-1/2'
    }, {
      id: 2,
      label: 'Last Name',
      value: 'value',
      type: 'text',
      placeholder: 'Doe',
      ref: lastNameRef,
      class: 'w-1/2'
    }, {
      id: 3,
      label: 'Email',
      value: 'john@gmail.com',
      type: 'email',
      placeholder: 'john@gmail.com',
      ref: emailRef,
      class: "w-9/12"
    },
    {
      id: 4,
      label: 'Country',
      value: 'john@gmail.com',
      options: countries,
      state: country,
      setState: setCountry,
      class: 'w-1/2'
    },
    {
      id: 5,
      label: 'Street Address',
      value: '',
      type: 'text',
      placeholder: '123 Main Street',
      ref: streetRef,
      class: "w-full"
    }, {
      id: 6,
      label: 'City',
      value: '',
      type: 'text',
      placeholder: 'Berlin',
      ref: cityRef,
      class: "w-1/3"
    }, {
      id: 7,
      label: 'State / Province',
      value: '',
      type: 'text',
      placeholder: 'Baden-Württemberg',
      ref: stateRef,
      class: "w-1/3"
    }, {
      id: 8,
      label: 'Zip / Postal Code',
      value: '',
      type: 'text',
      placeholder: 'Baden-Württemberg',
      class: "w-1/3",
      ref: postalCodeRef
    }]
  return(
    <>
      <Heading title='Personal Information' subtitle='Ensure all details are correct'
               titleClasses='text-lg leading-6 font-medium text-gray-900'
               subTitleClasses='text-sm font-normal text-gray-500'/>
      <form className='flex flex-wrap'>
        {data.map(item => {
          if (item.id === 4) {
            return (
              <div className={`px-3 mb-6 ${item.class}`} key={item.id}>
                <SelectInput extraClasses='w-full' options={item.options} setState={item.setState} state={item.state} label='Country'/>
              </div>
            );
          } else {
            return (
              <div className={`px-3 mb-6 ${item.class}`} key={item.id}>
                <Input
                  inputClasses='pl-3'
                  type={item.type}
                  placeholder={item.placeholder}
                  label={item.label}
                  inputRef={item.ref}
                  value={item.value}
                />
              </div>
            );
          }
        })}
        <div className='flex justify-end mt-2 grow'>
          <Button btnText='Save' btnClasses='bg-CW-primary px-6 py-2'/>
        </div>
      </form>
    </>
  )
}

export default Account