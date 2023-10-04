'use client'

import Input from "@/app/components/inputs/Input";
import Link from "next/link";
import Button from "@/app/components/Button";
import {BuildingOfficeIcon, EnvelopeIcon, LockClosedIcon, UserIcon} from "@heroicons/react/20/solid";
import CheckboxInput from "@/app/components/inputs/CheckboxInput";
import FormLayout from "@/app/components/Form";

const RegisterForm = () => {
  const inputData = [
    {
      id: 1,
      placeHolder: 'name@example.com',
      label: 'First Name',
      type: 'text',
      btnIcon: UserIcon,
    },
    {
      id: 2,
      placeHolder: 'name@example.com',
      label: 'Last Name',
      type: 'text',
      btnIcon: UserIcon,
    },
    {
    id: 3,
    placeHolder: 'name@example.com',
    label: 'Your Email',
    type: 'text',
    btnIcon: EnvelopeIcon,
  }, {
    id: 4,
    placeHolder: '*********',
    label: 'Password',
    type: 'password',
    btnIcon:LockClosedIcon,
  },
    {
      id: 5,
      placeHolder: '*********',
      label: 'Password Confirmation',
      type: 'password',
      btnIcon:LockClosedIcon,
    },
    {
      id: 6,
      placeHolder: 'Company Name',
      label: 'Company Name',
      type: 'text',
      btnIcon:BuildingOfficeIcon,
    },
    {
      id: 7,
      placeHolder: 'Domain Name',
      label: 'Domain Name',
      type: 'text',
      btnIcon:BuildingOfficeIcon,
    }]

  function handleSubmit(e){
    console.log('called')
  }
  return(
    <FormLayout handleSubmit={handleSubmit}
                title='Welcome to OnlineWaiverPro'
                subtitle='Start your 15 day free trial today'>
      {inputData.map((item) => (
        <Input
          key={item.id}
          type={item.type}
          placeholder={item.placeHolder}
          label={item.label}
          BtnIcon={item.btnIcon}
          inputRef={item.ref}
          extraClasses='mb-6'
        />
      ))}
      <div className='flex mb-2 ml-2 block text-xs text-gray-500 font-normal'>
        <CheckboxInput label='I accept the ' link='terms and conditions' url='/' extraClasses='text-xs'/>
      </div>
      <Button btnText='Get Started' fullWidth={true} btnClasses='bg-CW-primary border-CW-primary lg:px-16 sm:px-8 sm:py-3.5 py-3.5 w-full'/>
      <div>
        <p className="font-medium text-CW-primary text-sm">Alraedy have an account? <Link
          href="/" className="text-blue-600">Login Here</Link></p>
      </div>
    </FormLayout>
  )
}

export default RegisterForm;