'use client'

import {twMerge} from "tailwind-merge";

const Tabs = ({tabs, setTabs, setCurrentTab, customStyles=''}) => {
  const handleCurrentTab = (e) => {
    const tabName = e.target.dataset.currentTab;

    const newTabs = tabs.map((tab) => {
      if (tab.name === tabName) {
        tab.current = true;
        setCurrentTab(tab.name)
      } else {
        tab.current = false;
      }
      return tab;
    });
    setTabs(newTabs);
  }
  return (<div className='flex font-medium text-sm border-b-2 border-gray-300'>
      {tabs.map((tab, index) => {
        return <button
          data-current-tab={tab.name}
          key={tab.name}
          onClick={(e) => {
            handleCurrentTab(e)
          }}
          className={twMerge(`
           text-gray-500  inline-block flex items-center p-4 rounded-t-lg hover:text-gray-600 space-x-2 
           ${tab.current && 'border-b-4 border-black hover:border-gray-300 text-gray-900 hover:text-gray-600'}
          ${customStyles}`)}
        >
          <span
            data-current-tab={tab.name}
            className=''
          >
            {tab.name}
          </span>
        </button>
      })}
    </div>)
}

export default Tabs