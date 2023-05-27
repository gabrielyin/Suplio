'use client'

import { ReactNode, useEffect, useState } from 'react'
import Pagination from '../Pagination'
import { usePathname, useRouter } from 'next/navigation'
import { api } from '../../lib/api'

interface Colors {
  [key: string]: string
}

const colors: Colors = {
  Pendente: 'bg-amber-100 text-amber-600',
  Confirmado: 'bg-green-100 text-green-600',
  Cancelado: 'bg-red-100 text-red-600',
  OK: 'bg-green-100 text-green-600',
  Médio: 'bg-amber-100 text-amber-600',
  Baixo: 'bg-red-100 text-red-600',
}

interface InvetoryTableProps {
  children?: ReactNode
}

interface SupplierType {
  id: string
  rsocial: string
}

type Item = {
  sku: string
  description: string
  supplier: SupplierType
  price: string
  cost: string
  status: string
  stock: number
}

export default function InventoryTable({ children }: InvetoryTableProps) {
  const pathname = usePathname().split('/')[2]
  const router = useRouter()

  const [inventory, setInventory] = useState<Item[]>([])

  useEffect(() => {
    async function getInventory() {
      const { data: products } = await api.get('/products')

      console.log(products)
      setInventory(products)
    }

    getInventory()
  }, [])

  return (
    <div className="flex flex-col gap-6">
      {children}
      <table className="w-full table-auto text-left">
        <thead>
          <tr className="text-charade-300">
            <th className="border-b py-2 font-normal">SKU</th>
            <th className="border-b py-2 font-normal">Descrição</th>
            <th className="border-b py-2 font-normal">Fornecedor</th>
            <th className="border-b py-2 font-normal">Valor</th>
            <th className="border-b py-2 font-normal">Status</th>
          </tr>
        </thead>
        <tbody>
          {inventory.map((item: Item) => {
            const quantity = item.stock
            let status

            if (quantity < 10) {
              status = 'Baixo'
            } else if (quantity < 30) {
              status = 'Médio'
            } else {
              status = 'OK'
            }

            return (
              <tr
                className="cursor-pointer border-b transition hover:bg-gray-50"
                key={item.sku}
                onClick={() => {
                  router.push(
                    `/auth/${pathname}/product?id=${encodeURIComponent(
                      item.sku,
                    )}`,
                  )
                }}
              >
                <td className="py-3 font-bold">{item.sku}</td>
                <td className="py-3">{item.description}</td>
                <td className="py-3">{item.supplier.rsocial}</td>
                <td className="py-3">R$ {item.price}</td>
                <td className="py-3">
                  <span className={`rounded-full px-2 py-1 ${colors[status]}`}>
                    {status}
                  </span>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
      <Pagination />
    </div>
  )
}
