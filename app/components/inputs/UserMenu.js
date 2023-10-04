'use client';
import {useCallback, useRef, useState} from "react";
import Image from "next/image";
import {ChevronDownIcon} from "@heroicons/react/20/solid";
import Link from "next/link";
import {useOnClickOutside} from "@/app/hooks/useClickOut";

const UserMenu = ({}) => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);
  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value);
  }, []);
  useOnClickOutside(ref, () => setIsOpen(false));

  return (<div className="relative" ref={ref}>
    <div className="flex flex-row items-center h-full gap-2">
      <button
        onClick={toggleOpen}
        className="flex flex-row items-center gap-1 cursor-pointer border focus:border rounded-3xl focus:border-blue-400 focus:border-2 p-1">
        <Image
          className="rounded-full"
          height="32"
          width="32"
          alt="Avatar"
          src='/images/default-img.svg'
        />
        <ChevronDownIcon className='w-7 h-7 text-[#BDBDBD]'/>
      </button>
    </div>
    {isOpen && (<div
      className="overflow-auto absolute z-10 max-w-sm max-h-[500px] w-100 -right-[1.75rem] top-full rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 divide-y block">
      <div className="flex flex-col">
        <div className="py-3 px-4" role="none">
          <p className="block text-sm text-gray-900" role="none">
            Sufyan Zaki
          </p>
          <p className="block text-sm text-gray-900 break-words" role="none">
            sufyan.zaki.789@gmail.com
          </p>
        </div>
        <ul className='flex flex-col cursor-pointer'>
          <li className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50'>
            <Link href="/">sparkoSols - sparko.onlinewaiverpro.com</Link >
          </li>
          <li className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50'>
            <Link href="/" role="menuitem">Dashboard</Link >
          </li>
          <li className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50'>
            <Link href="/" role="menuitem">Setting</Link >
          </li>
          <li className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50'>
            <Link href="/" role="menuitem">Sign out</Link >
          </li>
        </ul>
      </div>
    </div>)}
  </div>);
}

export default UserMenu;