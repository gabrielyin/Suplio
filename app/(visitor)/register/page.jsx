import Button from "@/components/Button";
import Card from "@/components/Card";
import TextInput from "@/components/TextInput";

export default function Register() {
    return (
        <div className="w-full max-w-md mx-auto">
            <Card>

                <div className="flex flex-col items-center my-6">
                    <h3 className="font-mukta text-4xl font-bold text-charade-900">Criar conta</h3>
                </div>

                <div className="flex flex-col gap-3 mb-12">
                    <TextInput
                        label="Nome"
                        placeholder="Nome completo"
                        type="text"
                    />
                    <TextInput
                        label="E-mail"
                        placeholder="nome@email.com.br"
                        text="email"
                    />
                    <TextInput
                        label="Senha"
                        type="password"
                    />
                </div>

                <div className="flex flex-col gap-3">
                    <Button
                        className="w-full"
                        text="Criar conta"
                    />
                    <button
                        className="bg-transparent text-charade-900 py-2 rounded-xl tracking-wide border mb-4"
                    >
                        Login
                    </button>
                </div>

            </Card>
        </div>
    )
}