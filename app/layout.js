import { AuthProvider } from "./Provider";
import "../pages/style.css";
import "bootstrap/dist/css/bootstrap.css";
import Header from "@/components/MainHeader";
import { Poppins } from 'next/font/google'

const poppins = Poppins({ subsets: ['latin'], weight: ['400'] })

export const metadata = {
  title: "Singhfreight Inc",
  description: "Generated by create next app",
  icons: {
    icon: '/icon.ico',
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <AuthProvider>
          <Header />
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}

