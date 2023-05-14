"use client"

import Container from "@/components/Container";
import { useSearchParams } from "next/navigation"

export default function Product() {
    const searchParams = useSearchParams();

    return (
        <main className="min-h-[calc(100vh-70px)] max-w-[1140px] mx-auto flex flex-col gap-5 py-12">
            <header className="px-6">
                <h3 className="font-mukta text-2xl font-bold leading-6">Detalhes do produto</h3>
                <span className="text-charade-400">Informações sobre o produto</span>
            </header>
            <Container>
                <header className="flex items-center gap-12">
                    <div>
                        <h2 className="text-3xl">Nome do produto</h2>
                        <h4 className="text-xl">SKU</h4>
                    </div>
                    <span className="text-xl">OK</span>
                </header>
                <main>
                    <p>Descrição</p>
                    <h4 className="text-xl">Preço</h4>
                    <h4 className="text-xl">Custo</h4>
                    <h4 className="text-xl">Unidades em estoque</h4>
                </main>
                <footer>
                    <h4 className="text-xl">Fornecedor</h4>
                </footer>
            </Container>
        </main>
    )
}