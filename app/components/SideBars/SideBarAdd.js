'use client'
import Image from "next/image";
import Heading from "@/app/components/Heading";

const SideBarAdd = () => {
  return (
    <article className='w-1/2 min-h-screen relative justify-center items-center py-12 px-24 hidden lg:flex'>
      <Image src="/images/register-bg.jpg"
             layout='fill'
             objectFit='cover'
             className='absolute top-0 left-0 w-full h-full'
             alt="Picture of the author"/>
      <div className='z-[1]'>
          <img src='/images/cloudwaiver.png' className='w-32 mb-4' alt='Logo' />
        <Heading title='Simple, Secure & Affordable Solution'
                 subtitle='Sign up and lower your costs. Online waivers made easy, create your own or let us build it for you. Start today!'
        />
      </div>
    </article>
  )
}

export default SideBarAdd