import './globals.css'
import {Inter} from 'next/font/google'
import Navbar from "@/app/components/Navbar";
import SideBarMenu from "@/app/components/SideBars/SideBarMenu";

const inter = Inter({subsets: ['latin']})

export const metadata = {
  title: 'Cloud Waiver',
  description: '',
}

export default function RootLayout({children}) {
  const currentUser = true;
  return (
    <html lang="en">
    <body className={`${inter.className} bg-gray-50`}>
    {/*{currentUser &&*/}
    {/*  <Navbar/>}*/}
    {children}
    </body>
    </html>
  )
}
