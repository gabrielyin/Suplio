import Button from "@/components/Button";
import Container from "@/components/Container";
import InventoryTable from "@/components/Table/InventoryTable";
import OrderTable from "@/components/Table/OrderTable";
import SupplierTable from "@/components/Table/SupplierTable";

export default function Admin() {
    return (
        <main className="min-h-[calc(100vh-70px)] max-w-[1140px] mx-auto flex flex-col gap-16 py-12">
            <Container>
                <OrderTable>
                    <header className="flex justify-between items-center">
                        <aside className="flex flex-col">
                            <h3 className="font-mukta text-2xl font-bold leading-6">Pedidos</h3>
                            <span className="text-charade-400">Gestão dos seus pedidos</span>
                        </aside>
                        <div className="flex items-center gap-2">
                            <span className="uppercase text-charade-400 py-2 px-4 hover:bg-gray-200 rounded-lg transition cursor-pointer">Ver todos pedidos</span>
                            <Button
                                text="Adicionar Pedido"
                            />
                        </div>
                    </header>
                </OrderTable>
            </Container>
            <Container>
                <InventoryTable>
                    <header className="flex justify-between items-center">
                        <aside className="flex flex-col">
                            <h3 className="font-mukta text-2xl font-bold leading-6">Estoque</h3>
                            <span className="text-charade-400">Gestão do seu estoque</span>
                        </aside>
                        <div className="flex items-center gap-2">
                            <span className="uppercase text-charade-400 py-2 px-4 hover:bg-gray-200 rounded-lg transition cursor-pointer">Ver estoque</span>
                            <Button
                                text="Adicionar Produto"
                            />
                        </div>
                    </header>
                </InventoryTable>
            </Container>
            <Container>
                <SupplierTable>
                    <header className="flex justify-between items-center">
                        <aside className="flex flex-col">
                            <h3 className="font-mukta text-2xl font-bold leading-6">Fornecedores</h3>
                            <span className="text-charade-400">Gestão dos seus fornecedores</span>
                        </aside>
                        <div className="flex items-center gap-2">
                            <span className="uppercase text-charade-400 py-2 px-4 hover:bg-gray-200 rounded-lg transition cursor-pointer">Ver fornecedores</span>
                            <Button
                                text="Novo Fornecedor"
                            />
                        </div>
                    </header>
                </SupplierTable>
            </Container>
        </main>
    )
}