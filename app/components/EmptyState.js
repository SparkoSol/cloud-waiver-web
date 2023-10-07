import Image from "next/image";
import Heading from "@/app/components/Heading";
import Link from "next/link";
import {PlusIcon} from "@heroicons/react/20/solid";

const EmptyState = ({title, subtitle, btnText, url}) => {
  return (
    <>
      <Image
        src='/integrations.svg'
        alt='No integrations yet!'
        width='221'
        height='162'
      />
      <Heading title={title} subtitle={subtitle} center={true} titleClasses='text-gray-800 font-medium text-xl pb-2' subTitleClasses='text-gray-600 font-normal text-sm'/>
      <Link href={url} className='flex items-center bg-CW-primary px-6 py-3 rounded-md text-white text-sm font-medium space-x-2'>
        <PlusIcon className='w-5 h-5 mr-2'/>
        {btnText}</Link>
    </>
  )
}
export default EmptyState;