import {twMerge} from "tailwind-merge";
import Link from "next/link";

const Tabs = ({tabs}) => {
  return (<div className='flex font-medium text-sm border-b-2 border-gray-300 overflow-x-scroll sm:overflow-x-hidden'>
      {tabs.map((tab, index) => {
        return <Link
          data-current-tab={tab.name}
          key={tab.name}
          href={tab.url}
          className={twMerge(`
           text-gray-500  inline-block flex items-center p-4 rounded-t-lg hover:text-gray-600 space-x-2 
           ${tab.current && 'border-b-4 border-black hover:border-gray-300 text-gray-900 hover:text-gray-600'}`)}
        >
          <span
            data-current-tab={tab.name}
            className=''
          >
            {tab.name}
          </span>
        </Link>
      })}
    </div>)
}

export default Tabs