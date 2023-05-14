"use client"

import Container from "@/components/Container";
import { useSearchParams } from "next/navigation"

export default function Supplier() {
    const searchParams = useSearchParams();

    console.log(searchParams.get('id'));

    return (
        <main className="min-h-[calc(100vh-70px)] max-w-[1140px] mx-auto flex flex-col gap-5 py-12">
            <header className="px-6">
                <h3 className="font-mukta text-2xl font-bold leading-6">Detalhes do fornecedor</h3>
                <span className="text-charade-400">Informações sobre o fornecedor</span>
            </header>
            <Container>
                <header className="flex items-center gap-12">
                    <div>
                        <h2 className="text-3xl">CNPJ</h2>
                        <h4 className="text-xl">Nome do fornecedor</h4>
                    </div>
                    <span className="text-xl">Produtos cadastrados</span>
                </header>
                <main>
                    <h4 className="text-xl">Nome de responsável</h4>
                    <h4 className="text-xl">Email</h4>
                </main>
                <footer>
                    <h4 className="text-xl">Endereço comercial</h4>
                </footer>
            </Container>
        </main>
    )
}