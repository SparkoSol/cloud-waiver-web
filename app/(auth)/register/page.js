
import SideBarAdd from "@/app/components/SideBars/SideBarAdd";
import RegisterForm from "@/app/(auth)/register/RegisterForm";
const RegisterPage = async () => {
  return (
    <section className='w-full min-h-screen flex'>
      <SideBarAdd/>
      <RegisterForm/>
    </section>
  );
}

export default RegisterPage;