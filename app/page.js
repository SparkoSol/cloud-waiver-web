import SideBarAdd from "@/app/components/SideBars/SideBarAdd";
import LoginForm from "@/app/components/auth/LoginForm";
import {cookies} from "next/headers";

export default function Home() {
  const cookieStore = cookies()
  const accessToken = cookieStore.get('access_token')
  return (
    <section className='w-full min-h-screen flex'>
      <SideBarAdd/>
      <LoginForm/>
    </section>
  )
}
