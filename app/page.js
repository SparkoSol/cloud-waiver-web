import SideBarAdd from "@/app/components/SideBars/SideBarAdd";
import LoginForm from "@/app/components/auth/LoginForm";

export default function Home() {
  return (
    <section className='w-full min-h-screen flex'>
      <SideBarAdd/>
      <LoginForm/>
    </section>
  )
}
