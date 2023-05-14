import Image from "next/image";

export default function EmployeeNav() {
    return (
        <nav className="flex gap-6 h-full items-center">
            <span className="cursor-pointer text-white">
                Pedidos
            </span>
            <span className="cursor-pointer text-white">  
                Fornecedores
            </span> 
            <span className="cursor-pointer text-white">
                Estoque
            </span>
            <span>
                <div className="rounded-full border-[2px] border-regal-blue-900 overflow-hidden outline outline-[2px] outline-white">
                    <Image 
                        src="https://github.com/gabrielyin.png"
                        width={30}
                        height={30}
                    />
                </div>
            </span>
        </nav>
    )
}