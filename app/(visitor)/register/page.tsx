import Card from '@/Card'
import { RegisterForm } from '@/Forms/RegisterForm'

export default function Register() {
  return (
    <div className="mx-auto w-full max-w-md">
      <Card>
        <div className="my-6 flex flex-col items-center">
          <h3 className="font-mukta text-4xl font-bold text-charade-900">
            Criar conta
          </h3>
        </div>

        {/* Register Form */}
        <RegisterForm />
      </Card>
    </div>
  )
}
