'use client'
import Input from "@/app/components/inputs/Input";
import CheckboxInput from "@/app/components/inputs/CheckboxInput";
import Link from "next/link";
import Button from "@/app/components/Button";
import {EnvelopeIcon, LockClosedIcon} from "@heroicons/react/20/solid";
import {useRef} from "react";
import FormLayout from "@/app/components/Form";
import {useDispatch, useSelector} from "react-redux";
import {getUser, loginUser} from "@/app/redux/user/userThunk";
import {useRouter} from "next/navigation";

const LoginForm = () => {
  const currentUser = useSelector(state => state.user.currentUser);
  const router = useRouter();
  const dispatch = useDispatch();
  const email = useRef();
  const password = useRef();
  const remember = useRef(null);

  const inputData = [{
    id: 1, placeHolder: 'name@example.com', label: 'Your Email', type: 'email', btnIcon: EnvelopeIcon, ref: email
  }, {
    id: 2, placeHolder: '*********', label: 'Password', type: 'password', btnIcon: LockClosedIcon, ref: password
  }]

  async function handleSubmit(e) {
    e.preventDefault();
    const body = {
      username: email.current?.value,
      password: password.current?.value,
      // redirect: false,
    }

    // const res = await signIn("credentials", body);
    const data = await dispatch(loginUser(body)).unwrap();
    await dispatch(getUser())

    let currentUser = localStorage.getItem('cw-user');
    currentUser = JSON.parse(currentUser);
    if (currentUser.verified) {
      router.push('/dashboard')
    } else {
      router.push('/verify-mail')
    }
    // window.location.assign(`http://nintendo.localhost:3000/dashboard`);
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
    <div className='flex justify-between mb-4 flex-wrap gap-3'>
      <CheckboxInput label='Remember me' inputRef={remember} extraClasses='text-sm'/>
      <Link className='text-sm font-medium text-blue-600' href={'/forgotPassword'}>Forgot password?</Link>
    </div>
    <Button btnText='Login' fullWidth='w-full mb-4'
            btnClasses='bg-CW-primary border-CW-primary lg:px-16 sm:px-8 sm:py-3.5 py-3.5 w-full'/>
    <div>
      <p className="font-medium text-CW-primary text-sm">Don't have an account? <Link
        href="/register" className="text-blue-600">Signup</Link></p>
    </div>
    {/*<Spinner/>*/}
  </FormLayout>)
}

export default LoginForm

// Cookies.set('access_token', data.access_token, {expires: 7, path: '/', domain: 'localhost.com', sameSite: 'lax'});
// Cookies.set('refresh_token', data.refresh_token, {
//   expires: 31,
//   path: '/',
//   domain: '.localhost.com',
//   sameSite: 'none',
//   secure: false
// });