import Button from "@/components/Button";
import Container from "@/components/Container";
import InventoryTable from "@/components/Table/InventoryTable";

export default function Orders() {
    return (
        <main className="min-h-[calc(100vh-70px)] max-w-[1140px] mx-auto flex flex-col gap-5 py-12">
            <header className="px-6">
                <h3 className="font-mukta text-2xl font-bold leading-6">Estoque</h3>
                <span className="text-charade-400">Gestão do seu estoque</span>
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
                    <div className="flex items-center gap-3">
                        <div className="flex items-center gap-2">
                            <span className="text-charade-300">
                                Filtrar por status:
                            </span>
                            <select name="status" id="status" className="outline-none border rounded-lg py-1.5 px-2">
                                <option value="">Todos</option>
                                <option value="Confirmado">OK</option>
                                <option value="Pendente">Médio</option>
                                <option value="Cancelado">Baixo</option>
                            </select>
                        </div>
                        <Button
                            text="Adicionar Produto"
                        />
                    </div>
                </header>
                <InventoryTable />
            </Container>
        </main>
    )
}