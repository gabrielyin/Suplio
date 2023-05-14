import Header from '@/components/Header/Header';
import '../../../styles/globals.css';
import EmployeeNav from '@/components/Header/EmployeeNav';

export const metadata = {
    icons: {
        icon: '/assets/logo/favicon.svg',
    },
    title: 'Suplio',
    description: 'Sistema de controle de estoque',
}

export default function AuthLayout({ children }) {
    return (
        <html lang='pt-BR'>
            <body className='bg-background'>

                <Header>
                    <EmployeeNav />
                </Header>
                
                {children}

            </body>
        </html>
    )
}
