"use client"

import { chipColor } from "@/utils/chip-color";
import { useState } from "react"

export default function OrderTable({ children }) {
    const [orders, setOrders] = useState([
        {
            id: "24434",
            date: "09/05/2023",
            name: "Gabriel Yin",
            valor: "R$ 498,00",
            status: "Pendente"
        },
        {
            id: "24434",
            date: "09/05/2023",
            name: "Gabriel Yin",
            valor: "R$ 498,00",
            status: "Confirmado"
        },
        {
            id: "24434",
            date: "09/05/2023",
            name: "Gabriel Yin",
            valor: "R$ 498,00",
            status: "Cancelado"
        }
    ]);

    return (
        <div className="flex flex-col gap-6">
            {children}
            <table className="w-full table-auto text-left">
                <thead>
                    <tr className="text-charade-300">
                        <th className="font-normal py-2 border-b">ID</th>
                        <th className="font-normal py-2 border-b">Data</th>
                        <th className="font-normal py-2 border-b">Nome</th>
                        <th className="font-normal py-2 border-b">Valor</th>
                        <th className="font-normal py-2 border-b">Status</th>
                    </tr>
                </thead>
                <tbody>
                    {orders.map((order) => {
                        return (
                            <tr className="border-b">
                                <td className="py-3 font-bold">{order.id}</td>
                                <td className="py-3">{order.date}</td>
                                <td className="py-3">{order.name}</td>
                                <td className="py-3">{order.valor}</td>
                                <td className="py-3"><span className={`py-1 px-2 rounded-full ${chipColor(order.status)}`}>{order.status}</span></td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
} 