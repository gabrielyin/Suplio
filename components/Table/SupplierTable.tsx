'use client'

import { ReactNode, useState } from 'react'
import Pagination from '../Pagination'
import { usePathname, useRouter } from 'next/navigation'

interface SupplierTableProps {
  children?: ReactNode
}

export default function SupplierTable({ children }: SupplierTableProps) {
  const pathname = usePathname().split('/')[2]
  const router = useRouter()

  const [suppliers, setSuppliers] = useState([
    {
      cnpj: '81.385.875/0001-50',
      rsocial: 'Apple Computers',
      email: 'contato@apple.com.br',
    },
    {
      cnpj: '63.762.690/0001-36',
      rsocial: 'Logitech S.A',
      email: 'contato@logitech.com.br',
    },
  ])

  return (
    <div className="flex flex-col gap-6">
      {children}
      <table className="w-full table-auto text-left">
        <thead>
          <tr className="text-charade-300">
            <th className="border-b py-2 font-normal">CNPJ</th>
            <th className="border-b py-2 font-normal">Razão Social</th>
            <th className="border-b py-2 font-normal">Email</th>
          </tr>
        </thead>
        <tbody>
          {suppliers.map((supplier) => {
            return (
              <tr
                className="cursor-pointer border-b transition hover:bg-gray-50"
                key={supplier.cnpj}
                onClick={() => {
                  router.push(
                    `/auth/${pathname}/supplier?id=${encodeURIComponent(
                      supplier.cnpj,
                    )}`,
                  )
                }}
              >
                <td className="py-3 font-bold">{supplier.cnpj}</td>
                <td className="py-3">{supplier.rsocial}</td>
                <td className="py-3">{supplier.email}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
      <Pagination />
    </div>
  )
}
