'use client'
import FormLayout from "@/app/components/Form";
import Input from "@/app/components/inputs/Input";
import Link from "next/link";
import Button from "@/app/components/Button";
import {EnvelopeIcon, LockClosedIcon} from "@heroicons/react/20/solid";
import {useRef} from "react";
import {useDispatch} from "react-redux";
import {resetPassword} from "@/app/redux/user/userThunk";
import toast from "react-hot-toast";
import {useParams, useRouter} from "next/navigation";
const ResetPasswordForm = () => {
  const {id} = useParams();
  const dispatch = useDispatch();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();
  const router = useRouter();

  const inputData = [{
    id: 2, placeHolder: '*********', label: 'Password', type: 'password', btnIcon: LockClosedIcon, ref: passwordRef
  }, {
    id: 3,
    placeHolder: '*********',
    label: 'Password Confirmation',
    type: 'password',
    btnIcon: LockClosedIcon,
    ref: confirmPasswordRef
  }]

  async function handleSubmit(e) {
    e.preventDefault();
    if (passwordRef.current.value !== confirmPasswordRef.current.value) {
      toast.error('Passwords do not match!');
    }
    const body = {
      hash: id,
      password: passwordRef.current.value,
    }
    await dispatch(resetPassword(body)).unwrap();
    router.push('/')
    toast.success('Password Updated successfully!')
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
    <Button btnText='Reset Password' fullWidth='w-full mb-4'
            btnClasses='bg-CW-primary border-CW-primary lg:px-16 sm:px-8 sm:py-3.5 py-3.5 w-full'/>
    <div>
      <p className="font-medium text-CW-primary text-sm">Don't have an account? <Link
        href="/register" className="text-blue-600">Signup</Link></p>
    </div>
  </FormLayout>)
}

export default ResetPasswordForm;