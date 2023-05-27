'use client'

import { ReactNode, useEffect, useState } from 'react'
import Pagination from '../Pagination'
import { api } from '../../lib/api'

interface OrderTableProps {
  children?: ReactNode
}

interface OrderSchema {
  Status: string
  amount: number
  email: string
  name: string
  id: string
  createdAt: string
}

interface ColorsType {
  [key: string]: string
}

export default function OrderTable({ children }: OrderTableProps) {
  const colors: ColorsType = {
    Pendente: 'bg-amber-100 text-amber-600',
    Confirmado: 'bg-green-100 text-green-600',
    Cancelado: 'bg-red-100 text-red-600',
  }

  useEffect(() => {
    async function getOrders() {
      const { data: orders } = await api.get('/orders')

      setOrders(orders)
    }

    getOrders()
  }, [])

  const [orders, setOrders] = useState([])

  return (
    <div className="flex flex-col gap-6">
      {children}
      <table className="w-full table-auto text-left">
        <thead>
          <tr className="text-charade-300">
            <th className="border-b py-2 font-normal">ID</th>
            <th className="border-b py-2 font-normal">Data</th>
            <th className="border-b py-2 font-normal">Nome</th>
            <th className="border-b py-2 font-normal">Valor</th>
            <th className="border-b py-2 font-normal">Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order: OrderSchema) => {
            const date = new Date(order.createdAt)

            const formattedDate = date.toLocaleString('pt-BR', {
              day: '2-digit',
              month: '2-digit',
              year: 'numeric',
            })

            return (
              <tr className="border-b" key={order.id}>
                <td className="py-3 font-bold">{order.id}</td>
                <td className="py-3">{formattedDate}</td>
                <td className="py-3">{order.name}</td>
                <td className="py-3">{order.amount}</td>
                <td className="py-3">
                  <span
                    className={`rounded-full px-2 py-1 ${colors[order.Status]}`}
                  >
                    {order.Status}
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
