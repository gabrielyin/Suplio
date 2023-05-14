import Link from "next/link";
import Button from "../Button";

export default function VistorNav() {
    return (
        <nav className="flex gap-2">
            <Link
                href="/"
            >
                <Button
                    width="w-[140px]"
                    text="Login"
                />
            </Link>
            <Link
                href="/register"
                className="bg-regal-blue-900 hover:bg-regal-blue-800 hover:bg-opacity-40 transition text-white py-2 w-[140px] rounded-xl tracking-wide border text-center"

            >
                Criar conta
            </Link>
        </nav>
    )
}