'use client'
import Input from "@/app/components/inputs/Input";
import CheckboxInput from "@/app/components/inputs/CheckboxInput";
import Link from "next/link";
import Button from "@/app/components/Button";
import {EnvelopeIcon, LockClosedIcon} from "@heroicons/react/20/solid";
import {useRef} from "react";
import FormLayout from "@/app/components/Form";
import {useDispatch} from "react-redux";
import {loginUser} from "@/app/redux/user/userThunk";
import {useRouter} from "next/navigation";

const LoginForm = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const email = useRef();
  const password = useRef();
  const remember = useRef(null);

  const inputData = [{
    id: 1, placeHolder: 'name@example.com', label: 'Your Email', type: 'text', btnIcon: EnvelopeIcon, ref: email
  }, {
    id: 2, placeHolder: '*********', label: 'Password', type: 'password', btnIcon: LockClosedIcon, ref: password
  }]

  async function handleSubmit(e) {
    e.preventDefault();
    const body = {
      username:'sufyan.zaki.789@gmail.com',
      password:'test123'
    }
    const data = await dispatch(loginUser(body)).unwrap();
    // window.location.assign(`http://${data}.localhost:3000/dashboard?data=johnDoe`);
  }

  return (<FormLayout handleSubmit={handleSubmit} title='Hi, Welcome Back' subtitle='Please enter your details'>
    {inputData.map((item) => (<Input
      key={item.id}
      type={item.type}
      placeholder={item.placeHolder}
      label={item.label}
      BtnIcon={item.btnIcon}
      inputRef={item.ref}
      extraClasses='mb-6'
    />))}
    <div className='flex justify-between mb-4'>
      <CheckboxInput label='Remember me' inputRef={remember} extraClasses='text-sm'/>
      <Link className='text-sm font-medium text-blue-600' href={'/forgotPassword'}>Forgot your password?</Link>
    </div>
    <Button btnText='Login' fullWidth='w-full mb-4'
            btnClasses='bg-CW-primary border-CW-primary lg:px-16 sm:px-8 sm:py-3.5 py-3.5 w-full'/>
    <div>
      <p className="font-medium text-CW-primary text-sm">Don't have an account? <Link
        href="/register" className="text-blue-600">Signup</Link></p>
    </div>
  </FormLayout>)
}

export default LoginForm