import './globals.css'
import {Inter} from 'next/font/google'
import Theme from "@/app/components/Theme";
import {ReduxProvider} from "@/app/providers/ReduxProvider";
import {FetchAPI} from "@/app/lib/FetchAPI";

const inter = Inter({subsets: ['latin']})

export const metadata = {
  title: 'Cloud Waiver', description: '',
}

export default function RootLayout({children}) {
  return (
    <html lang="en">
    <body>
    <div className={`${inter.className} bg-gray-50`}>
      <ReduxProvider>
        <Theme>
          {children}
        </Theme>
      </ReduxProvider>
    </div>
    </body>
    </html>)
}
