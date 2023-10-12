'use client'
import Heading from "@/app/components/Heading";
import {useEffect} from "react";
import {useParams} from "next/navigation";
import {useDispatch} from "react-redux";
import {resendEmail, verifyUser} from "@/app/redux/user/userThunk";
import toast from "react-hot-toast";

const VerificationClient = () => {
  const dispatch = useDispatch();
  const {id, hashId} = useParams();

  useEffect(() => {
    VerifyUserToken()
  }, []);

  function VerifyUserToken() {
    let user = localStorage.getItem('cw-user');
    if (user) {
      user = JSON.parse(user);
      localStorage.removeItem("access_token");
      dispatch(resendEmail({
        email: user.username,
        id: user._id,
        name: user.first_name,
      })).unwrap().then(r => {
      });
    }
  }

  return (
    <div className='w-full h-screen fixed'>
      <img alt='Loading...' src='/verification.svg' className='w-1/3 mx-auto'/>
      <div className='sm:mt-[-30px] md:mt-[-50px] lg:mt-[-70px]'>
        <Heading center={true} title='Verify Your Email Address' subtitle='An Email has been sent'
                 titleClasses='text-xl text-gray-800' subTitleClasses='text-gray-500'/>
      </div>
    </div>
  )
}

export default VerificationClient