import Image from "next/image";

export default function Header({ children }) {
    return (
        <header className="h-[70px] bg-regal-blue-900">
            <div className="flex justify-between max-w-6xl mx-auto h-full items-center">
                <div>
                    <Image
                        src="/assets/logo/logo-transparent.png"
                        width={160}
                        height={28.64}
                        alt="suplio logo"
                    />
                </div>

                {children}
            </div>
        </header>
    )
}