import Button from "../Button";

export default function VistorNav() {
    return (
        <nav className="flex gap-2">
            <Button
                width="w-[140px]" 
                text="Login"
            />
            <button
                className="bg-transparent text-white py-2 w-[140px] rounded-xl tracking-wide border"
                
            >
                Criar conta
            </button>
        </nav>  
    )
}