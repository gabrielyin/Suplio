"use client"

import Button from "@/components/Button";
import Container from "@/components/Container";
import TextInput from "@/components/TextInput";
import { useSearchParams } from "next/navigation"

export default function CreateProduct() {
    const searchParams = useSearchParams();

    // <label className="block">
    //         <span className="block mb-1">{label}</span>
    //         <input
    //             className="w-full border py-2 px-3 rounded-lg outline-none bg-[#F9FAFB]"
    //             type={type}
    //             placeholder={placeholder}
    //         />
    //     </label>

    return (
        <main className="min-h-[calc(100vh-70px)] max-w-[1140px] mx-auto flex flex-col gap-5 py-12">
            <header className="px-6">
                <h3 className="font-mukta text-2xl font-bold leading-6">Detalhes do produto</h3>
                <span className="text-charade-400">Informações sobre o produto</span>
            </header>
            <Container>
                <aside className="max-w-lg flex flex-col gap-2">
                    <TextInput
                        label="Nome"
                    />

                    <TextInput
                        label="SKU"
                    />

                    <label>
                        <span className="block mb-1">Descrição</span>
                        <textarea
                            className="w-full border outline-none rounded-lg bg-[#F9FAFB] px-3 py-2"
                            rows="5"
                        ></textarea>
                    </label>

                    <label for="price">Preço</label>
                    <div class="flex">
                        <span className="border flex items-center py-2 px-3 rounded-l-lg text-charade-300">
                            R$
                        </span>
                        <input
                            type="number"
                            id="price"
                            className="border rounded-r-lg bg-[#F9FAFB] outline-none px-2"
                        />
                    </div>

                    <label for="cost">Custo</label>
                    <div class="flex">
                        <span className="border flex items-center py-2 px-3 rounded-l-lg text-charade-300">
                            R$
                        </span>
                        <input
                            type="number"
                            id="cost"
                            className="border rounded-r-lg bg-[#F9FAFB] outline-none px-2"
                        />
                    </div>

                    <label for="cost">Unidades em estoque</label>
                    <div class="flex">
                        <input
                            type="number"
                            id="cost"
                            className="border rounded-l-lg bg-[#F9FAFB] outline-none px-2"
                        />
                        <span className="border flex items-center py-2 px-3 rounded-r-lg text-charade-300">
                            Un
                        </span>
                    </div>

                    <TextInput
                        label="Fornecedor-CNPJ"
                    />

                    <Button 
                        text="Editar"
                        width="w-1/4"
                    />
                </aside>
            </Container>
        </main >
    )
}