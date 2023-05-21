import Link from 'next/link'
import { LoginForm } from '@/Forms/LoginForm'
import Card from '@/Card'

export default function Home() {
  return (
    <div className="mx-auto w-full max-w-md">
      <Card>
        {/* Header */}
        <div className="my-6 flex flex-col items-center">
          <h3 className="font-mukta text-4xl font-bold text-charade-900">
            Login
          </h3>
          <h6 className="text-charade-300">Sistema de controle de estoque</h6>
        </div>

        {/* Login Form */}
        <LoginForm />

        <div className="my-8 flex items-center">
          <hr className="border-1 flex-1 border" />
          <span className="mx-3 text-xs text-charade-300">OU</span>
          <hr className="border-1 flex-1 border" />
        </div>

        <Link
          href="/register"
          className="mb-4 flex justify-center rounded-xl border border-transparent bg-charade-50 py-2 tracking-wide text-charade-900 transition hover:bg-charade-100"
        >
          Criar conta
        </Link>
      </Card>
    </div>
  )
}
