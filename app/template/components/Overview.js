import Submissions from "@/app/template/components/Submissions";
import Input from "@/app/components/inputs/Input";
import Button from "@/app/components/Button";

const Overview = () => {
  const data = [
    {class: 'border-blue-600', title:'Total submissions', number:0},
    {class: 'border-yellow-400', title:'Total Invited', number:0},
    {class: 'border-green-400', title:'Total Approved', number:0},
    {class: 'border-orange-400', title:'Total Declined', number:0}
  ]
  return (<section>
    <div className='flex gap-3 py-6'>
      <div className="w-full lg:w-3/5">
        <div className="grid grid-cols-2 gap-3">
          {data.map((item, index)=>{
            return (
              <div className={`bg-white rounded-lg border-l-4 ${item.class} px-3 py-5 space-y-2`}>
                <p className="text-sm font-normal text-gray-600">{item.title}</p>
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-3xl text-gray-800">{item.number}</h3>
                  {index === 0 && <p className="text-xs font-normal text-gray-600">(Last 24 hours)</p>}
                </div>
              </div>
            )
          })}
        </div>
      </div>
      <div className="w-full lg:w-2/5">
        <div className="bg-white p-4 py-7 rounded-md space-y-6">
          <div className='flex gap-3 items-end'>
            <Input placeholder='eg. Waiver 101' type='text' label='Share your waiver with the following link' extraClasses='font-medium text-gray-500 w-72' inputClasses='pl-3' value='sparko.onlinewaiverpro.com/waiver/5f816420-63fe-11ee-bdb3-b91279ed4d18' />
            <Button btnText='Copy' btnClasses='bg-gray-200 px-6 py-3 text-gray-900'/>
          </div>
          <div className='flex gap-3 items-end'>
            <Input placeholder='eg. Waiver 101' type='text' label='Share the link via email' extraClasses='font-medium text-gray-500 w-72' inputClasses='pl-3'/>
            <Button btnText='Share' btnClasses='bg-CW-primary px-6 py-3'/>
          </div>
        </div>
      </div>
    </div>
    <div className='bg-white rounded-md py-4 px-4'>
      <div className='min-w-full align-middle md:px-6 lg:px-8'>
        <Submissions/>
      </div>
    </div>
  </section>)
}

export default Overview;