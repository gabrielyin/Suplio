import Image from 'next/image'
import { ReactNode } from 'react'

interface HeaderProps {
  children?: ReactNode
}

export default function Header({ children }: HeaderProps) {
  return (
    <header className="h-[70px] bg-regal-blue-900">
      <div className="mx-auto flex h-full max-w-6xl items-center justify-between">
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
