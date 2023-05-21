import Header from '@/Header/Header'
import '../../../styles/globals.css'
import EmployeeNav from '@/Header/EmployeeNav'
import { ReactNode } from 'react'

export const metadata = {
  icons: {
    icon: '/assets/logo/favicon.svg',
  },
  title: 'Suplio',
  description: 'Sistema de controle de estoque',
}

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className="bg-background">
        <Header>
          <EmployeeNav />
        </Header>

        {children}
      </body>
    </html>
  )
}
