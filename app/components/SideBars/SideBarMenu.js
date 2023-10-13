'use client'

import Link from "next/link";
import ClipboardDocumentIcon from "@heroicons/react/20/solid/esm/ClipboardDocumentIcon";
import DocumentTextIcon from "@heroicons/react/20/solid/esm/DocumentTextIcon";
import Squares2X2Icon from "@heroicons/react/20/solid/esm/Squares2X2Icon";
import {
  AdjustmentsVerticalIcon,
  Cog6ToothIcon,
  ComputerDesktopIcon,
  UserIcon,
  UsersIcon
} from "@heroicons/react/24/outline";
import {XMarkIcon} from "@heroicons/react/20/solid";
import Button from "@/app/components/Button";
import Image from "next/image";
import {usePathname, useRouter} from "next/navigation";
import {useEffect, useState} from "react";

const SideBarMenu = ({open, setOpen}) => {
  const router = useRouter();
  const [currentUser, setCurrentUser] = useState('');

  const param = usePathname();

  useEffect(() => {
    if (currentUser?.verified && (param.includes('auth') || param === '/')) {
      router.push('/dashboard')
    }
  }, [param]);

  useEffect(() => {
    let user = localStorage.getItem('cw-user')
    user = JSON.parse(currentUser);
    setCurrentUser(user)
  }, []);


  const inputList = [
    {id: 9, text: 'Dashboard', url: '/dashboard', Icon: Squares2X2Icon},
    {id: 1, text: 'Waiver Templates', url: '/template', Icon: DocumentTextIcon},
    {id: 2, text: 'Signed Waivers', url: '/', Icon: ClipboardDocumentIcon},
    {id: 3, text: 'Templates Gallery', url: '/', Icon: UsersIcon},
    {id: 4, text: 'Customers', url: '/customers', Icon: UserIcon},
    {id: 5, text: 'Kiosk Settings', url: '/', Icon: ComputerDesktopIcon},
    {id: 6, text: 'Staff Management', url: '/', Icon: UsersIcon},
    {id: 7, text: 'Settings', url: '/settings', Icon: Cog6ToothIcon},
    {id: 8, text: 'Billing', url: '/billing', Icon: AdjustmentsVerticalIcon},
  ];
  const url = `/${param.split('/')[1]}`
  return (
    <>
      <aside
        className={`block md:hidden fixed bottom-0 top-0 z-10 w-64 transition-all ease-in-out bg-white border-r border-gray-200 ${open ? 'left-[-256px]' : 'left-0'} overflow-scroll`}>
        <div className='flex justify-between items-center px-3'>
          <Image
            src='/images/cloudwaiver.png'
            alt='Logo'
            width={100}
            height={100}
          />
          <Button BtnIcon={XMarkIcon} onClick={e => setOpen(!open)}/>
        </div>
        <ul className='space-y-1 pb-2'>
          {inputList.map(item => {
            return <MenuListItem key={item.id} active={url === item.url} Icon={item.Icon} text={item.text}
                                 url={item.url}/>
          })}
        </ul>
      </aside>
      <aside
        className={`hidden md:fixed md:bottom-0 md:top-[4.0625rem] md:flex md:w-64 md:flex-col z-1 transition-all ease-in-out bg-white border-r border-gray-200 ${open ? 'left-[-256px]' : 'left-0'}`}>
        <ul className='space-y-4 mt-5'>
          {inputList.map(item => {
            return <MenuListItem key={item.id} active={url === item.url} Icon={item.Icon} text={item.text}
                                 url={item.url}/>
          })}
        </ul>
      </aside>
    </>
  )
}

export default SideBarMenu

function MenuListItem({Icon, text, url, active}) {
  return (
    <li className={active ? 'text-blue-600' : 'text-gray-500'}>
      <Link href={url}
            className="group flex items-center px-5 py-1.5 text-sm font-medium hover:text-blue-600 transition-all">
        <Icon className='w-6 h-6 mr-3'/>
        {text}
      </Link>
    </li>
  );
}