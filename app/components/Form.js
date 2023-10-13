import Heading from "@/app/components/Heading";

const FormLayout = ({children, handleSubmit, title, subtitle}) => {
  return (
    <div className='w-full lg:w-1/2 min-h-screen px-6 py-4 flex justify-center items-center'>
      <div className='py-4 md:py-12 px-4 sm:px-12 flex items-center'>
        <div className='w-full sm:w-96 mx-auto'>
          <div className='mb-8'>
            <img src='/images/cloudwaiver.png' className='w-28 mx-auto sm:mx-0 block mb-4 lg:hidden' alt='Logo'/>
            <Heading
              title={title}
              subtitle={subtitle}
              titleClasses='text-3xl text-CW-primary'
              subTitleClasses='text-CW-textGray font-semibold'/>
          </div>
          <form method='' onSubmit={handleSubmit}>
            {children}
          </form>
        </div>
      </div>
    </div>
  )
}

export default FormLayout