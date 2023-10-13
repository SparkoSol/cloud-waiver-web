import SideBarAdd from "@/app/components/SideBars/SideBarAdd";
import LoginForm from "@/app/components/auth/LoginForm";
import {getServerSession} from "next-auth";
import {authOptions} from "@/app/auth/[...nextauth]/route";
import {redirect} from "next/navigation";

export default async function Home() {
  const session = await getServerSession(authOptions);
  if (session) redirect("/dashboard");
  return (
    <section className='flex'>
      <SideBarAdd/>
      <LoginForm/>
    </section>
  )
}

