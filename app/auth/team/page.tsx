import Container from '@/Container'
import InventoryTable from '@/Table/InventoryTable'
import OrderTable from '@/Table/OrderTable'
import SupplierTable from '@/Table/SupplierTable'

export default function Team() {
  return (
    <main className="mx-auto flex min-h-[calc(100vh-70px)] max-w-[1140px] flex-col gap-16 py-12">
      {/* Order Table */}
      <Container>
        <OrderTable>
          {/* Order Table Header */}
          <header className="flex items-center justify-between">
            <aside className="flex flex-col">
              <h3 className="font-mukta text-2xl font-bold leading-6">
                Pedidos
              </h3>
              <span className="text-charade-400">Gestão dos seus pedidos</span>
            </aside>
            <span className="cursor-pointer rounded-lg px-4 py-2 uppercase text-charade-400 transition hover:bg-gray-200">
              Ver todos pedidos
            </span>
          </header>
        </OrderTable>
      </Container>

      {/* Inventory Table */}
      <Container>
        <InventoryTable>
          {/* Inventory Table Header */}
          <header className="flex items-center justify-between">
            <aside className="flex flex-col">
              <h3 className="font-mukta text-2xl font-bold leading-6">
                Estoque
              </h3>
              <span className="text-charade-400">Gestão do seu estoque</span>
            </aside>
            <span className="cursor-pointer rounded-lg px-4 py-2 uppercase text-charade-400 transition hover:bg-gray-200">
              Ver estoque
            </span>
          </header>
        </InventoryTable>
      </Container>

      {/* Supplier Table */}
      <Container>
        <SupplierTable>
          {/* Supplier Table Header */}
          <header className="flex items-center justify-between">
            <aside className="flex flex-col">
              <h3 className="font-mukta text-2xl font-bold leading-6">
                Fornecedores
              </h3>
              <span className="text-charade-400">
                Gestão dos seus fornecedores
              </span>
            </aside>
            <span className="cursor-pointer rounded-lg px-4 py-2 uppercase text-charade-400 transition hover:bg-gray-200">
              Ver fornecedores
            </span>
          </header>
        </SupplierTable>
      </Container>
    </main>
  )
}
