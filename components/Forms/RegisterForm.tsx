'use client'

import Button from '@/Button'
import TextInput from '@/TextInput'
import Link from 'next/link'

export function RegisterForm() {
  function handleRegister() {
    console.log('Register')
  }

  return (
    <form>
      <div className="mb-12 flex flex-col gap-3">
        <TextInput label="Nome" placeholder="Nome completo" type="text" />
        <TextInput
          label="E-mail"
          placeholder="nome@email.com.br"
          type="email"
        />
        <TextInput label="Senha" type="password" />
      </div>

      <div className="flex flex-col gap-3">
        <Button width="w-full" text="Criar conta" onClick={handleRegister} />
        <Link
          href="/"
          className="mb-4 flex justify-center rounded-xl border bg-transparent py-2 tracking-wide text-charade-900"
        >
          Login
        </Link>
      </div>
    </form>
  )
}
