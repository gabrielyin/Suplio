"use client"

import { useState } from "react"
import Pagination from "../Pagination";
import { usePathname, useRouter } from "next/navigation";

const colors = {
    Pendente: 'bg-amber-100 text-amber-600',
    Confirmado: 'bg-green-100 text-green-600',
    Cancelado: 'bg-red-100 text-red-600',
    OK: 'bg-green-100 text-green-600',
    Médio: 'bg-amber-100 text-amber-600',
    Baixo: 'bg-red-100 text-red-600',
}

export default function InventoryTable({ children }) {

    const pathname = usePathname().split('/')[2];
    const router = useRouter();

    const [inventory, setInventory] = useState([
        {
            sku: '#125334',
            description: 'Iphone 14 248gb',
            supplier: 'Apple',
            price: 'R$ 490,00',
            status: 'Médio'
        },
        {
            sku: '#413234',
            description: 'Iphone 14 248gb',
            supplier: 'Apple',
            price: 'R$ 490,00',
            status: 'OK'
        },
        {
            sku: '#1478234',
            description: 'Iphone 14 248gb',
            supplier: 'Apple',
            price: 'R$ 490,00',
            status: 'Baixo'
        }
    ]);

    return (
        <div className="flex flex-col gap-6">
            {children}
            <table className="w-full table-auto text-left">
                <thead>
                    <tr className="text-charade-300">
                        <th className="font-normal py-2 border-b">SKU</th>
                        <th className="font-normal py-2 border-b">Descrição</th>
                        <th className="font-normal py-2 border-b">Fornecedor</th>
                        <th className="font-normal py-2 border-b">Valor</th>
                        <th className="font-normal py-2 border-b">Status</th>
                    </tr>
                </thead>
                <tbody>
                    {inventory.map((item) => {
                        return (
                            <tr
                                className="border-b"
                                key={item.sku}
                                onClick={() => { router.push(`/auth/${pathname}/product?id=${encodeURIComponent(item.sku)}`) }}
                            >
                                <td className="py-3 font-bold">{item.sku}</td>
                                <td className="py-3">{item.description}</td>
                                <td className="py-3">{item.supplier}</td>
                                <td className="py-3">{item.price}</td>
                                <td className="py-3"><span className={`py-1 px-2 rounded-full ${colors[item.status]}`}>{item.status}</span></td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            <Pagination />
        </div>
    )
}