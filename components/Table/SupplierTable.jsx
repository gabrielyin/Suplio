"use client"

import { useState } from "react"
import Pagination from "../Pagination";

export default function SupplierTable({ children }) {
    const [suppliers, setSuppliers] = useState([
        {
            cnpj: '81.385.875/0001-50',
            rsocial: 'Apple Computers',
            email: 'contato@apple.com.br'
        },
        {
            cnpj: '63.762.690/0001-36',
            rsocial: 'Logitech S.A',
            email: 'contato@logitech.com.br'
        }
    ]);
    

    return (
        <div className="flex flex-col gap-6">
            {children}
            <table className="w-full table-auto text-left">
                <thead>
                    <tr className="text-charade-300">
                        <th className="font-normal py-2 border-b">CNPJ</th>
                        <th className="font-normal py-2 border-b">Razão Social</th>
                        <th className="font-normal py-2 border-b">Email</th>
                    </tr>
                </thead>
                <tbody>
                    {suppliers.map((supplier) => {
                        return (
                            <tr className="border-b" key={supplier}>
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