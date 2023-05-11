import '../styles/globals.css';

export const metadata = {
  title: 'Suplio',
  description: 'Sistema de controle de estoque',
}

export default function RootLayout({ children }) {
  return (
    <html lang='pt-BR'>
      <body className='bg-background'>{children}</body>
    </html>
  )
}
