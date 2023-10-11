'use client'
import Heading from "@/app/components/Heading";
import {useEffect} from "react";
import {useParams, useRouter} from "next/navigation";
import {useDispatch} from "react-redux";
import {verifyUser} from "@/app/redux/user/userThunk";

const VerificationClient = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const {id, hashId} = useParams();

  useEffect(() => {
    if (id && hashId) {
      VerifyUserToken()
        .then(r => router.push('/dashboard'))
    }
  }, [id, hashId]);

  async function VerifyUserToken() {
    return await dispatch(verifyUser({
      url: id,
      hash: hashId
    })).unwrap();
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