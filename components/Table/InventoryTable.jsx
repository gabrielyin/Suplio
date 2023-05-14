export default function InventoryTable({ children }) {
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
                    <tr className="border-b">
                        <td className="py-3 font-bold">#24434</td>
                        <td className="py-3">09/05/2023</td>
                        <td className="py-3">Gabriel Yin</td>
                        <td className="py-3">R$ 490,00</td>
                        <td className="py-3"><span className="py-1 px-2 rounded-full bg-amber-100 text-amber-600">Pendente</span></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}