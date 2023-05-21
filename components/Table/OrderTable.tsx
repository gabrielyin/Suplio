'use client'

import { ReactNode, useState } from 'react'
import Pagination from '../Pagination'

interface OrderTableProps {
  children?: ReactNode
}

export default function OrderTable({ children }: OrderTableProps) {
  const colors = {
    Pendente: 'bg-amber-100 text-amber-600',
    Confirmado: 'bg-green-100 text-green-600',
    Cancelado: 'bg-red-100 text-red-600',
  }

  const [orders, setOrders] = useState([
    {
      id: '2443543434',
      date: '09/05/2023',
      name: 'Gabriel Yin',
      price: 'R$ 498,00',
      status: 'Pendente',
    },
    {
      id: '244345334',
      date: '09/05/2023',
      name: 'Gabriel Yin',
      price: 'R$ 498,00',
      status: 'Confirmado',
    },
    {
      id: '24344334',
      date: '09/05/2023',
      name: 'Gabriel Yin',
      price: 'R$ 498,00',
      status: 'Cancelado',
    },
    {
      id: '2324435334',
      date: '09/05/2023',
      name: 'Gabriel Yin',
      price: 'R$ 498,00',
      status: 'Cancelado',
    },
    {
      id: '24328435234',
      date: '09/05/2023',
      name: 'Gabriel Yin',
      price: 'R$ 498,00',
      status: 'Cancelado',
    },
    {
      id: '26448534',
      date: '09/05/2023',
      name: 'Gabriel Yin',
      price: 'R$ 498,00',
      status: 'Cancelado',
    },
  ])

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
          {orders.map((order) => {
            return (
              <tr className="border-b" key={order.id}>
                <td className="py-3 font-bold">{order.id}</td>
                <td className="py-3">{order.date}</td>
                <td className="py-3">{order.name}</td>
                <td className="py-3">{order.price}</td>
                <td className="py-3">
                  <span
                    className={`rounded-full px-2 py-1 ${colors[order.status]}`}
                  >
                    {order.status}
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
