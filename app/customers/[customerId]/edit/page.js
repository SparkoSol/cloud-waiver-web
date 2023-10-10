import Heading from "@/app/components/Heading";
import Input from "@/app/components/inputs/Input";

export default function EditPage() {
  return (
    <section>
      <div className='py-5'>
        <div className='px-5'>
          <Heading title='Dashboard' titleClasses='text-xl leading-tight text-gray-800 mb-4'/>
          <div className='p-5'>
            <div className='bg-white shadow rounded-lg p-5'>
              <div className='flex gap-3'>
                <div className='w-1/3'>
                  <Heading title='Update Customer' subtitle='Update Customers Details'
                           titleClasses='text-base text-gray-800' subTitleClasses='text-gray-500 text-sm font-normal'/>
                </div>
                <div className='w-2/3'>
                  <form className='grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4'>
                    <Input label='First Name' placeholder='First Name'/>
                    <Input label='Last Name' placeholder='First Name'/>
                    <Input label='Email' placeholder='Email'/>
                    <Input label='Phone' placeholder='Phone'/>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}