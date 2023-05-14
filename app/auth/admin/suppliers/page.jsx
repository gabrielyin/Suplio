import Button from "@/components/Button";
import Container from "@/components/Container";
import SupplierTable from "@/components/Table/SupplierTable";

export default function Suppliers() {
    return (
        <main className="min-h-[calc(100vh-70px)] max-w-[1140px] mx-auto flex flex-col gap-5 py-12">
            <header className="px-6">
                <h3 className="font-mukta text-2xl font-bold leading-6">Fornecedores</h3>
                <span className="text-charade-400">Gestão dos seus fornecedores</span>
            </header>
            <Container>
                <header className="flex justify-between">
                    <label className="bg-charade-50 flex px-2 py-1.5 border rounded-lg w-1/3 items-center gap-1.5 inline">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-charade-300">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                        </svg>
                        <input
                            type="text"
                            placeholder="Pesquisar"
                            className="outline-none text-sm bg-charade-50 w-full"
                        />
                    </label>
                    <Button 
                        text="Adidicionar Fornecedor"
                    />
                </header>
                <SupplierTable />
            </Container>
        </main>
    )
}