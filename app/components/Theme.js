'use client'

import Link from "next/link";
import Image from "next/image";
import { usePathname } from 'next/navigation';
import {Bars4Icon, MagnifyingGlassIcon} from "@heroicons/react/20/solid";
import Button from "@/app/components/Button";
import Input from "@/app/components/inputs/Input";
import {useRef, useState} from "react";
import UserMenu from "@/app/components/inputs/UserMenu";
import Container from "@/app/components/Container";
import SideBarMenu from "@/app/components/SideBars/SideBarMenu";
import {menuOptions} from "@/app/lib/GeneralFunctions";

const Theme = ({children, currentUser}) => {
  const searchRef = useRef(null);
  const [open, setOpen] = useState(false);

  const pathName = usePathname();
  return (
    <>
      {!(pathName === '/forgotPassword' || pathName === '/' || pathName === '/resetPassword' || pathName === '/register') && <>
        <div className="sticky top-0 z-10 h-16 flex-shrink-0 bg-white shadow">
          <Container>
            <div className='flex gap-3 h-full'>
              <Button onClick={e => setOpen(!open)} type="button" BtnIcon={Bars4Icon}/>
              <div className="flex flex-1 justify-between gap-3">
                <div className="flex flex-1 items-center space-x-4">
                  <div className="hidden md:inline-block min-w-[70px]">
                    <Link href="/dashboard">
                      <Image
                        src="/images/cloudwaiver.png"
                        width={70}
                        height={70}
                        alt="logo"/>
                    </Link>
                  </div>
                  <div className="relative rounded-md shadow-sm">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    </div>
                    <Input placeholder='Search' inputRef={searchRef} BtnIcon={MagnifyingGlassIcon}/>
                  </div>
                </div>
                <UserMenu options={menuOptions}/>
              </div>
            </div>
          </Container>
        </div>
        <SideBarMenu open={open} setOpen={setOpen} param={pathName}/>
      </>}
      <div className={`flex flex-col ${!open && !(pathName === '/forgotPassword' || pathName === '/' || pathName === '/resetPassword' || pathName === '/register') ? 'md:pl-64' : 'md:pl-0'} w-full transition-all ease-in-out`}>
        <div className={`${!(pathName === '/forgotPassword' || pathName === '/' || pathName === '/resetPassword' || pathName === '/register') && 'p-5 max-w-6xl'} mx-auto w-full`}>
          {children}
        </div>
      </div>
    </>
  )
}

export default Theme;