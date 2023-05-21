'use client'

import Button from '@/Button'
import Container from '@/Container'
import TextInput from '@/TextInput'
// import { useSearchParams } from 'next/navigation'

export default function CreateProduct() {
  // const searchParams = useSearchParams()

  // <label className="block">
  //         <span className="block mb-1">{label}</span>
  //         <input
  //             className="w-full border py-2 px-3 rounded-lg outline-none bg-[#F9FAFB]"
  //             type={type}
  //             placeholder={placeholder}
  //         />
  //     </label>

  return (
    <main className="mx-auto flex min-h-[calc(100vh-70px)] max-w-[1140px] flex-col gap-5 py-12">
      {/* Title and description */}
      <header className="px-6">
        <h3 className="font-mukta text-2xl font-bold leading-6">
          Detalhes do produto
        </h3>
        <span className="text-charade-400">Informações sobre o produto</span>
      </header>

      <Container>
        {/* Form */}
        <aside className="flex max-w-lg flex-col gap-2">
          <TextInput label="Nome" />

          <TextInput label="SKU" />

          <label>
            <span className="mb-1 block">Descrição</span>
            <textarea
              className="w-full rounded-lg border bg-[#F9FAFB] px-3 py-2 outline-none"
              rows={5}
            ></textarea>
          </label>

          <label htmlFor="price">Preço</label>
          <div className="flex">
            <span className="flex items-center rounded-l-lg border px-3 py-2 text-charade-300">
              R$
            </span>
            <input
              type="number"
              id="price"
              className="rounded-r-lg border bg-[#F9FAFB] px-2 outline-none"
            />
          </div>

          <label htmlFor="cost">Custo</label>
          <div className="flex">
            <span className="flex items-center rounded-l-lg border px-3 py-2 text-charade-300">
              R$
            </span>
            <input
              type="number"
              id="cost"
              className="rounded-r-lg border bg-[#F9FAFB] px-2 outline-none"
            />
          </div>

          <label htmlFor="cost">Unidades em estoque</label>
          <div className="flex">
            <input
              type="number"
              id="cost"
              className="rounded-l-lg border bg-[#F9FAFB] px-2 outline-none"
            />
            <span className="flex items-center rounded-r-lg border px-3 py-2 text-charade-300">
              Un
            </span>
          </div>

          <TextInput label="Fornecedor-CNPJ" />

          <Button text="Editar" width="w-1/4" />
        </aside>
      </Container>
    </main>
  )
}
