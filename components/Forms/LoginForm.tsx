'use client'

import Button from '@/Button'
import TextInput from '@/TextInput'

export function LoginForm() {
  function handleLogin() {
    console.log('log')
  }

  return (
    <form>
      <div className="my-5 flex flex-col gap-3">
        <TextInput
          label="E-mail"
          placeholder="nome@email.com.br"
          type="email"
        />
        <label>
          <div className="mb-1 flex justify-between">
            <span>Senha</span>
            <span className="text-blue-500">Esqueceu a senha?</span>
          </div>
          <input
            className="w-full rounded-lg border bg-[#F9FAFB] p-2 outline-none"
            type="password"
          />
        </label>
      </div>

      <Button onClick={handleLogin} width="w-full" text="Login" />
    </form>
  )
}
