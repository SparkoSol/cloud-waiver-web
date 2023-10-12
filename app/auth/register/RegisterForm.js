'use client'

import Input from "@/app/components/inputs/Input";
import Link from "next/link";
import Button from "@/app/components/Button";
import {BuildingOfficeIcon, EnvelopeIcon, LockClosedIcon, UserIcon} from "@heroicons/react/20/solid";
import CheckboxInput from "@/app/components/inputs/CheckboxInput";
import FormLayout from "@/app/components/Form";
import {useRef, useState} from "react";
import {useDispatch} from "react-redux";
import {registerUser} from "@/app/redux/user/userThunk";
import {useRouter} from "next/navigation";
import toast from "react-hot-toast";

const RegisterForm = () => {
  const [domainName, setDomainName] = useState();
  const router = useRouter();
  const dispatch = useDispatch();
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const emailRef = useRef();
  const companyNameRef = useRef();
  const confirmPasswordRef = useRef()
  const passwordRef = useRef();

  const inputData = [
    {
      id: 1,
      placeHolder: 'John',
      label: 'First Name',
      type: 'text',
      btnIcon: UserIcon,
      ref: firstNameRef
    },
    {
      id: 2,
      placeHolder: 'Doe',
      label: 'Last Name',
      type: 'text',
      btnIcon: UserIcon,
      ref: lastNameRef
    },
    {
      id: 3,
      placeHolder: 'name@example.com',
      label: 'Your Email',
      type: 'email',
      btnIcon: EnvelopeIcon,
      ref: emailRef
    }, {
      id: 4,
      placeHolder: '*********',
      label: 'Password',
      type: 'password',
      btnIcon: LockClosedIcon,
      ref: passwordRef
    },
    {
      id: 5,
      placeHolder: '*********',
      label: 'Password Confirmation',
      type: 'password',
      btnIcon: LockClosedIcon,
      ref: confirmPasswordRef
    },
    {
      id: 6,
      placeHolder: 'Yates Curry Co',
      label: 'Company Name',
      type: 'text',
      btnIcon: BuildingOfficeIcon,
      ref: companyNameRef
    },
    // {
    //   id: 7,
    //   placeHolder: 'Indigo Mccormick',
    //   label: 'Domain Name',
    //   type: 'text',
    //   btnIcon: BuildingOfficeIcon,
    //   ref: domainNameRef
    // }
  ]

  async function handleSubmit(e) {
    e.preventDefault();
    if (passwordRef.current.value !== confirmPasswordRef.current.value) {
      toast.error('Passwords do not match.')
      return
    }
    const body = {
      username: emailRef.current.value,
      password: passwordRef.current.value,
      first_name: firstNameRef.current.value,
      last_name: lastNameRef.current.value,
      domain: domainName,
      company_name: companyNameRef.current.value
    }
    const domain = await dispatch(registerUser(body)).unwrap();
    toast.success('An Email has been sent!')
  }

  function convertSpaces(e) {
    const inputValue = e.target.value;
    const convertedValue = inputValue.replace(/ /g, '-');
    setDomainName(convertedValue);
  }

  return (
    <FormLayout handleSubmit={handleSubmit}
                title='Welcome to Cloud Waiver'
                subtitle='Start your 15 day free trial today'>
      {inputData.map((item) => (
        <Input
          key={item.id}
          type={item.type}
          placeholder={item.placeHolder}
          label={item.label}
          BtnIcon={item.btnIcon}
          inputRef={item.ref}
          extraClasses={`mb-6 ${item.id !== 7 ? '' : 'w-fit inline-block'}`}
        />
      ))}
      <div className="mb-6 w-fit inline-block"><label className="block text-sm font-medium text-primary mb-2 text-start"
                                                      htmlFor="domain name">Domain Name</label>
        <div className="relative rounded-md shadow-sm flex items-center">
          <BuildingOfficeIcon
            className='pointer-events-none absolute inset-y-0 left-3 mt-px flex items-center text-CW-textGray w-5 h-5 transform translate-y-1/2'/>
          <input onChange={e => convertSpaces(e)}
                 className="block w-full py-2.5 rounded-md border border-gray-300 bg-gray-50 focus:border-gray-300 focus-visible:outline-none sm:text-sm text-gray-900 pl-11"
                 id="Indigo Mccormick" required="" placeholder="Indigo Mccormick" type="text" value={domainName}
                 name="domain name"/>
          <span>.cloudwaiver.com</span>
        </div>
      </div>
      <div className='flex mb-2 ml-2 block text-xs text-gray-500 font-normal'>
        <CheckboxInput label='I accept the ' link='terms and conditions' url='/' extraClasses='text-xs'
                       required={true}/>
      </div>
      <Button btnText='Get Started' fullWidth='w-full mb-4'
              btnClasses='bg-CW-primary border-CW-primary lg:px-16 sm:px-8 sm:py-3.5 py-3.5 w-full'/>
      <div>
        <p className="font-medium text-CW-primary text-sm">Alraedy have an account? <Link
          href="/" className="text-blue-600">Login Here</Link></p>
      </div>
    </FormLayout>
  )
}

export default RegisterForm;