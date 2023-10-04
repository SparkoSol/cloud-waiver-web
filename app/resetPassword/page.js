import SideBarAdd from "@/app/components/SideBars/SideBarAdd";
import ResetPasswordForm from "@/app/ResetPassword/ResetPasswordForm";

export default function ResetPasswordPage() {
  return (
    <section className='w-full min-h-screen flex'>
      <SideBarAdd/>
      <ResetPasswordForm/>
    </section>
  )
}
