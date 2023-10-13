'use client'
import Link from "next/link";
import Button from "@/app/components/Button";
import {EnvelopeIcon} from "@heroicons/react/20/solid";
import Input from "@/app/components/inputs/Input";
import {useRef} from "react";
import FormLayout from "@/app/components/Form";
import {useRouter} from 'next/navigation'
import {useDispatch} from "react-redux";
import {forgetPassword} from "@/app/redux/user/userThunk";
import toast from "react-hot-toast";

const ForgotPassword = () => {
  const router = useRouter();
  const emailRef = useRef(null);
  const dispatch = useDispatch();

  async function handleSubmit(e) {
    e.preventDefault();
    await dispatch(forgetPassword({email: emailRef.current.value})).unwrap()
    toast.success('An Email has been sent!')
  }

  return (
    <FormLayout handleSubmit={handleSubmit}
                title='Reset password'
                subtitle='Please enter your email'>
      <Input
        type='email'
        placeholder='name@example.com'
        label='Your Registered Email'
        BtnIcon={EnvelopeIcon}
        inputRef={emailRef}
        extraClasses='mb-6'
      />
      <Button btnText='Email Password Reset Link' fullWidth='w-full mb-4'
              btnClasses='bg-CW-primary border-CW-primary lg:px-16 sm:px-8 sm:py-3.5 py-3.5 w-full'/>
      <div>
        <p className="font-medium text-CW-primary text-sm">Do you want to login? <Link
          href="/" className="text-blue-600">Login</Link></p>
      </div>
    </FormLayout>
  )
}

export default ForgotPassword