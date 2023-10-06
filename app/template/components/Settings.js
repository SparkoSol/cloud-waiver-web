import Heading from "@/app/components/Heading";
import ToggleButton from "@/app/components/ToggleButton";
import {useState} from "react";

const Settings = () => {
  const [enabled, setEnabled] = useState(false);
  return (
    <section className='bg-white shadow rounded-lg p-5'>
      <ul className='flex flex-col gap-5'>
        <li className='md:grid md:grid-cols-3 md:gap-6'>
          <div className="md:col-span-1">
            <Heading title='Notification For Customer' subtitle='Notify customer with attached pdf when signed waiver' titleClasses='text-lg leading-6 text-gray-900' subTitleClasses='text-sm text-gray-500'/>
          </div>
          <ToggleButton enabled={enabled} setEnabled={setEnabled}/>
        </li>
      </ul>
    </section>
  )
}

export default Settings;