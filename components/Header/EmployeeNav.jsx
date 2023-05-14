"use client"

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function EmployeeNav() {
    const pathname = usePathname().split('/');

    const activeLink = "h-full cursor-pointer text-white flex items-center px-2 border-b-[3px] border-jade-600 text-jade-600"

    const notActiveLink = "h-full cursor-pointer text-white flex items-center px-2 border-b-[3px] border-transparent hover:text-jade-800 hover:border-jade-800 transition"

    return (
        <nav className="flex gap-4 h-full items-center">
            <Link
                className={pathname.includes("orders") ? activeLink : notActiveLink}
                href={`/auth/${pathname[2]}/orders`}
            >
                Pedidos
            </Link>
            <Link
                className={pathname.includes("suppliers") ? activeLink : notActiveLink}
                href={`/auth/${pathname[2]}/suppliers`}
            >
                Fornecedores
            </Link>
            <Link
                className={pathname.includes("inventory") ? activeLink : notActiveLink}
                href={`/auth/${pathname[2]}/inventory`}
            >
                Estoque
            </Link>
            <span>
                <div className="rounded-full border-[2px] border-regal-blue-900 overflow-hidden outline outline-[2px] outline-white">
                    <Image
                        src="https://github.com/gabrielyin.png"
                        width={30}
                        height={30}
                        alt='profile image'
                    />
                </div>
            </span>
        </nav>
    )
}