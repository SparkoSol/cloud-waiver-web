import Heading from "@/app/components/Heading";
import Image from "next/image";

export default function DashboardPage() {
  return (
    <main className='p-5'>
      <div className='flex flex-col md:pl-64 w-full transition-all  ease-in-out'>
        <Heading title='Dashboard' titleClasses='text-xl leading-tight text-gray-800 mb-4'/>
        <div className='grid grid-rows-1 grid-cols-3 gap-5'>
          <div className="flex flex-col justify-center overflow-hidden rounded-xl bg-white p-5 shadow">
            <dt className="flex items-start justify-between">
              <div className="space-y-6">
                <span className="text-2xl">
                  ♾️
                </span>
              </div>
              <Image
                src='/pencil.svg'
                width='20'
                height='30'
                alt='Pencil'
              />
            </dt>
          </div>
          <div className="flex flex-col justify-center overflow-hidden rounded-xl bg-white p-5 shadow">
            <dt className="flex items-start justify-between">
              <div className="space-y-6">
                <p className="text-gray-500 font-normal text-base">Total Templates</p>
                <h2 className="text-4xl font-semibold text-gray-800">2</h2>
              </div>
              <Image
                src='/files2.svg'
                width='32'
                height='30'
                alt='Stats'
              />
            </dt>
          </div>
          <div className="flex flex-col justify-center overflow-hidden rounded-xl bg-white p-5 shadow">
            <dt className="flex items-start justify-between">
              <div className="space-y-6">
                <p className="text-gray-500 font-normal text-base">Total Signed Waivers</p>
                <h2 className="text-4xl font-semibold text-gray-800">1</h2>
              </div>
              <Image
                src='/files.svg'
                width='28'
                height='32'
                alt='Stats'
              />
            </dt>
          </div>
        </div>
      </div>
    </main>
  )
}
