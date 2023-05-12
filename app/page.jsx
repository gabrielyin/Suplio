import Button from "@/components/Button";
import Card from "@/components/Card";
import TextInput from "@/components/TextInput";

export default function Home() {
  return (
    <div className="w-full max-w-md mx-auto">
      <Card>

        <div className="flex flex-col items-center my-6">
          <h3 className="font-mukta text-4xl font-bold text-charade-900">Login</h3>
          <h6 className="text-charade-300">Sistema de controle de estoque</h6>
        </div>

        <div className="flex flex-col gap-3 my-5">
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
              className="w-full border p-2 rounded-lg outline-none bg-[#F9FAFB]"
              type="password"
            />
          </label>
        </div>

        <Button
          className="w-full"
          text="Login"
        />

        <div className="flex items-center my-8">
          <hr className="border border-1 flex-1" />
          <span className="mx-3 text-xs text-charade-300">OU</span>
          <hr className="border border-1 flex-1" />
        </div>

        <button
          className="bg-charade-50 text-charade-900 py-2 rounded-xl tracking-wide border border-transparent mb-4"
        >
          Criar conta
        </button>

      </Card>
    </div>
  )
}
