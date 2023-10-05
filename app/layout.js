import './globals.css'
import {Inter} from 'next/font/google'
import Theme from "@/app/components/Theme";

const inter = Inter({subsets: ['latin']})

export const metadata = {
  title: 'Cloud Waiver', description: '',
}

export default function RootLayout({children}) {
  const currentUser = true;
  return (
    <html lang="en">
    <body>
    <div className={`${inter.className} bg-gray-50`}>
      <Theme currentUser={currentUser}>
            {children}
      </Theme>
    </div>
    </body>
    </html>)
}
