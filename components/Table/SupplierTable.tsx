'use client'

import { ReactNode, useEffect, useState } from 'react'
import Pagination from '../Pagination'
import { usePathname, useRouter } from 'next/navigation'
import { api } from '../../lib/api'

interface SupplierTableProps {
  children?: ReactNode
}

interface supplierType {
  address: string
  cnpj: string
  email: string
  name: string
  rsocial: string
}

export default function SupplierTable({ children }: SupplierTableProps) {
  const pathname = usePathname().split('/')[2]
  const router = useRouter()

  const [suppliers, setSuppliers] = useState([])

  useEffect(() => {
    async function getSuppliers() {
      const { data: suppliers } = await api.get('/suppliers')

      setSuppliers(suppliers)
    }

    getSuppliers()
  }, [])

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
          {suppliers.map((supplier: supplierType) => {
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
