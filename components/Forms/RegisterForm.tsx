'use client'

import Button from '@/Button'
import TextInput from '@/TextInput'
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { api } from '../../lib/api'
import { useRouter } from 'next/navigation'

const registerFormSchema = z.object({
  cnpj: z.string(),
  cpf: z.string(),
  name: z.string(),
  email: z.string(),
  password: z.string(),
})

type RegisterFormData = z.infer<typeof registerFormSchema>

export function RegisterForm() {
  const {
    register,
    handleSubmit,
    // formState: { errors, isSubmitting },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerFormSchema),
  })

  const router = useRouter()

  async function onFormSubmit(data: RegisterFormData) {
    try {
      await api.post('/register', {
        account: data.cnpj,
        cpf: data.cpf,
        email: data.email,
        role: 'Admin',
        password: data.password,
      })

      await router.push('/auth/admin')
    } catch (err) {
      if (err) throw err
    }
  }

  return (
    <form onSubmit={handleSubmit(onFormSubmit)}>
      <div className="mb-12 flex flex-col gap-3">
        <TextInput
          label="CNPJ"
          name="cnpj"
          placeholder="XXX.XXX/0001-XX"
          type="text"
          register={register('cnpj')}
        />
        <TextInput
          label="CPF"
          name="cpf"
          placeholder="XXX.XXX.XXX-XX"
          type="text"
          register={register('cpf')}
        />
        <TextInput
          label="Nome"
          name="name"
          placeholder="Nome completo"
          type="text"
          register={register('name')}
        />
        <TextInput
          label="E-mail"
          name="email"
          placeholder="nome@email.com.br"
          type="email"
          register={register('email')}
        />
        <TextInput
          label="Senha"
          name="password"
          type="password"
          register={register('password')}
        />
      </div>

      <div className="flex flex-col gap-3">
        <Button width="w-full" text="Criar conta" type="submit" />
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
