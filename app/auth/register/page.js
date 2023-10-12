import RegisterForm from "@/app/auth/register/RegisterForm";
import SideBarAdd from "@/app/components/SideBars/SideBarAdd";
const RegisterPage = async () => {
  return (
    <section className='w-full min-h-screen flex'>
      <SideBarAdd/>
      <RegisterForm/>
    </section>
  );
}

export default RegisterPage;