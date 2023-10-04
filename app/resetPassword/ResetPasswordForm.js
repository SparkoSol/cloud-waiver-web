'use client'
import FormLayout from "@/app/components/Form";
import Input from "@/app/components/inputs/Input";
import Link from "next/link";
import Button from "@/app/components/Button";
import {EnvelopeIcon, LockClosedIcon} from "@heroicons/react/20/solid";
import {useRef} from "react";

const ResetPasswordForm = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();

  const inputData = [{
    id: 1, placeHolder: 'name@example.com', label: 'Your Email', type: 'text', btnIcon: EnvelopeIcon, ref: emailRef
  }, {
    id: 2, placeHolder: '*********', label: 'Password', type: 'password', btnIcon: LockClosedIcon, ref: passwordRef
  }, {
    id: 3, placeHolder: '*********', label: 'Password Confirmation', type: 'password', btnIcon: LockClosedIcon, ref: confirmPasswordRef
  }]

  function handleSubmit(){
    console.log(emailRef.current.value, passwordRef.current.value, confirmPasswordRef.current.value)
  }

  return (<FormLayout
    handleSubmit={handleSubmit}
    title='Hi, Welcome to waiver'
    subtitle='Or Start your 15 day free trial'
  >
    {inputData.map((item) => (<Input
      extraClasses='mb-6'
      key={item.id}
      type={item.type}
      placeholder={item.placeHolder}
      label={item.label}
      BtnIcon={item.btnIcon}
      inputRef={item.ref}
    />))}
    <Button btnText='Login' fullWidth={true} btnClasses='bg-CW-primary border-CW-primary lg:px-16 sm:px-8 sm:py-3.5 py-3.5 w-full'/>
    <div>
      <p className="font-medium text-CW-primary text-sm">Don't have an account? <Link
        href="/register" className="text-blue-600">Signup</Link></p>
    </div>
  </FormLayout>)
}

export default ResetPasswordForm;