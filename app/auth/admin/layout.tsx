import { ReactNode } from 'react'

import Header from '@/Header/Header'
import AdminNav from '@/Header/AdminNav'
import '../../../styles/globals.css'

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
          <AdminNav />
        </Header>

        {children}
      </body>
    </html>
  )
}
