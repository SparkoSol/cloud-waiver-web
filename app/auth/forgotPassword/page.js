import SideBarAdd from "@/app/components/SideBars/SideBarAdd";
import ForgotPassword from "@/app/auth/forgotPassword/ForgotPassword";
const ForgotPasswordPage = async () => {
  return (
    <section className='w-full min-h-screen flex'>
      <SideBarAdd/>
      <ForgotPassword/>
    </section>
  );
}

export default ForgotPasswordPage;