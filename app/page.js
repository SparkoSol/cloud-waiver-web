import SideBarAdd from "@/app/components/SideBars/SideBarAdd";
import Input from "@/app/components/inputs/Input";
import Heading from "@/app/components/Heading";
import CheckboxInput from "@/app/components/inputs/CheckboxInput";
import Link from "next/link";
import Button from "@/app/components/Button";
import {EnvelopeIcon, LockClosedIcon} from "@heroicons/react/20/solid";
import LoginForm from "@/app/components/auth/LoginForm";

export default function Home() {
  return (
    <section className='w-full min-h-screen flex'>
      <SideBarAdd/>
      <LoginForm/>
    </section>
  )
}
