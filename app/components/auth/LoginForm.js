'use client'
import Heading from "@/app/components/Heading";
import Input from "@/app/components/inputs/Input";
import CheckboxInput from "@/app/components/inputs/CheckboxInput";
import Link from "next/link";
import Button from "@/app/components/Button";
import {EnvelopeIcon, LockClosedIcon} from "@heroicons/react/20/solid";
import {useRef} from "react";
import FormLayout from "@/app/components/Form";

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
    console.log(remember.current.checked)
  }
  return(
    <FormLayout handleSubmit={handleSubmit} title='Hi, Welcome Back' subtitle='Please enter your details'>
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
      <div className='flex justify-between mb-4'>
        <CheckboxInput label='Remember me' inputRef={remember} extraClasses='text-sm'/>
        <Link className='text-sm font-medium text-blue-600' href={'/forgotPassword'}>Forgot your password?</Link>
      </div>
      <Button btnText='Login' fullWidth={true} btnClasses='bg-CW-primary border-CW-primary lg:px-16 sm:px-8 sm:py-3.5 py-3.5 w-full'/>
      <div>
        <p className="font-medium text-CW-primary text-sm">Don't have an account? <Link
          href="/register" className="text-blue-600">Signup</Link></p>
      </div>
    </FormLayout>
  )
}

export default LoginForm