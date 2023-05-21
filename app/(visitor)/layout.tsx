import { ReactNode } from 'react'

import '../../styles/globals.css'
import Header from '@/Header/Header'
import VistorNav from '@/Header/VisitorNav'

export const metadata = {
  icons: {
    icon: '/assets/logo/favicon.svg',
  },
  title: 'Suplio',
  description: 'Sistema de controle de estoque',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className="bg-background">
        <Header>
          <VistorNav />
        </Header>

        <main className="flex min-h-[calc(100vh-70px)] items-center p-3">
          {children}
        </main>
      </body>
    </html>
  )
}
