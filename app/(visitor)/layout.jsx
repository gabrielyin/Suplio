import Header from '@/components/Header/Header';
import '../../styles/globals.css';
import VistorNav from '@/components/Header/VisitorNav';

export const metadata = {
  icons: {
    icon: '/assets/logo/favicon.svg',
  },
  title: 'Suplio',
  description: 'Sistema de controle de estoque',
}

export default function RootLayout({ children }) {
  return (
    <html lang='pt-BR'>
      <body className='bg-background'>

        <Header>
          <VistorNav />
        </Header>

        <main className='min-h-[calc(100vh-70px)] flex items-center p-3'>
          {children}
        </main>

      </body>
    </html>
  )
}
