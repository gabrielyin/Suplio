'use client'

import Button from '@/Button'
import TextInput from '@/TextInput'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/navigation'
import { api } from '../../lib/api'

const loginFormSchema = z.object({
  email: z.string(),
  password: z.string(),
})

type LoginFormData = z.infer<typeof loginFormSchema>

export function LoginForm() {
  const {
    register,
    handleSubmit,
    // formState: { errors, isSubmitting },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginFormSchema),
  })

  const router = useRouter()

  async function onFormSubmit(data: LoginFormData) {
    try {
      const response = await api.post('http://localhost:3333/login', {
        email: data.email,
        password: data.password,
      })

      const role = response.data.role === 'Admin' ? 'admin' : 'team'

      await router.push(`/auth/${role}`)
    } catch (err) {
      if (err) throw err
    }
  }

  return (
    <form onSubmit={handleSubmit(onFormSubmit)}>
      <div className="my-5 flex flex-col gap-3">
        <TextInput
          label="E-mail"
          name="email"
          placeholder="nome@email.com.br"
          type="email"
          register={register('email')}
        />
        <label>
          <div className="mb-1 flex justify-between">
            <span>Senha</span>
            <span className="text-blue-500">Esqueceu a senha?</span>
          </div>
          <input
            className="w-full rounded-lg border bg-[#F9FAFB] p-2 outline-none"
            type="password"
            {...register('password')}
          />
        </label>
      </div>

      <Button width="w-full" text="Login" />
    </form>
  )
}
