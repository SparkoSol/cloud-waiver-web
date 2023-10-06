'use client';
import {Fragment, useCallback, useRef, useState} from "react";
import Image from "next/image";
import {ChevronDownIcon} from "@heroicons/react/20/solid";
import Link from "next/link";
import {useOnClickOutside} from "@/app/hooks/useClickOut";
import {Menu, Transition} from "@headlessui/react";

const UserMenu = ({options}) => {
  return (
    <div className="flex flex-row items-center h-full gap-2 relative">
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button
                       className="flex flex-row items-center gap-1 cursor-pointer border focus:border rounded-3xl focus:border-blue-400 focus:border-2 p-1">
            <Image
              className="rounded-full"
              height="32"
              width="32"
              alt="Avatar"
              src='/images/default-img.svg'
            />
            <ChevronDownIcon className='w-7 h-7 text-[#BDBDBD]'/>
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items
            className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="px-1 py-1 ">
              {options.map((item, index)=>{
                return (<Menu.Item key={index}>
                  {({active}) => (
                    <Link href={item.url}
                          className={`${
                            active ? 'bg-gray-200 text-gray-900' : 'text-gray-900'
                          } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                    >
                      {item.text}
                    </Link >
                  )}
                </Menu.Item>)
              })}
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}

export default UserMenu;