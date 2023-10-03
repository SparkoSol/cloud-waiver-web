'use client'
import Heading from "@/app/components/Heading";
import Input from "@/app/components/inputs/Input";
import CheckboxInput from "@/app/components/inputs/CheckboxInput";
import Link from "next/link";
import Button from "@/app/components/Button";
import {EnvelopeIcon, LockClosedIcon} from "@heroicons/react/20/solid";
import {useRef} from "react";
import Image from "next/image";

const LoginForm = () =>{
  const email = useRef();
  const password = useRef();
  const remember = useRef(null);

  const inputData = [{
    id: 1,
    placeHolder: 'name@example.com',
    label: 'Your Email',
    type: 'text',
    btnIcon: EnvelopeIcon,
    ref : email
  }, {
    id: 2,
    placeHolder: '*********',
    label: 'Password',
    type: 'password',
    btnIcon:LockClosedIcon,
    ref : password
  }]

  function handleSubmit(e){
    e.preventDefault();
    // console.log(remember.current.checked)
  }
  return(
    <div className='w-1/2 mx-auto min-h-screen flex items-center px-0 xl:px-6 py-4'>
      <div className='py-12 flex-grow mx-3 md:px-[3rem] lg:px-20 xl:px-28'>
        <div className='mb-8'>
          <img src='/images/cloudwaiver.png' className='h-[110px] object-cover block md:hidden' alt='Logo' />
          <Heading
            title='Hi, Welcome Back'
            subtitle='Please enter your details'
            titleClasses='text-3xl text-CW-primary'
            subTitleClasses='text-CW-textGray font-semibold'/>
        </div>
        <form method='' onSubmit={handleSubmit}>
          {inputData.map((item) => (
            <Input
              key={item.id}
              type={item.type}
              placeholder={item.placeHolder}
              label={item.label}
              BtnIcon={item.btnIcon}
              inputRef={item.ref}
            />
          ))}
          <div className='flex justify-between mb-8'>
            <CheckboxInput label='Remember me' inputRef={remember}/>
            <Link className='text-sm font-medium text-blue-600' href={'/'}>Forgot your Password?</Link>
          </div>
          <Button btnText='Login' fullWidth={true}/>
          <div>
            <p className="font-medium text-CW-primary text-sm">Don't have an account? <Link
              href="/" className="text-blue-600">Signup</Link></p>
          </div>
        </form>
      </div>
    </div>
  )
}

export default LoginForm