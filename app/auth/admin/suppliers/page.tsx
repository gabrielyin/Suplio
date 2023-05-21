import Button from '@/Button'
import Container from '@/Container'
import SupplierTable from '@/Table/SupplierTable'

export default function Suppliers() {
  return (
    <main className="mx-auto flex min-h-[calc(100vh-70px)] max-w-[1140px] flex-col gap-5 py-12">
      {/* Title and description */}
      <header className="px-6">
        <h3 className="font-mukta text-2xl font-bold leading-6">
          Fornecedores
        </h3>
        <span className="text-charade-400">Gestão dos seus fornecedores</span>
      </header>

      <Container>
        {/* Header */}
        <header className="flex justify-between">
          <label className="flex h-fit w-1/3 items-center gap-1.5 rounded-lg border bg-charade-50 px-2 py-1.5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-4 w-4 text-charade-300"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
            <input
              type="text"
              placeholder="Pesquisar"
              className="w-full bg-charade-50 text-sm outline-none"
            />
          </label>
          <Button text="Adidicionar Fornecedor" />
        </header>

        {/* Suppliers Table */}
        <SupplierTable />
      </Container>
    </main>
  )
}
