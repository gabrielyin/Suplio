import Link from 'next/link'
import Button from '../Button'

export default function VistorNav() {
  return (
    <nav className="flex gap-2">
      <Link href="/">
        <Button width="w-[140px]" text="Login" />
      </Link>
      <Link
        href="/register"
        className="w-[140px] rounded-xl border bg-regal-blue-900 py-2 text-center tracking-wide text-white transition hover:bg-regal-blue-800 hover:bg-opacity-40"
      >
        Criar conta
      </Link>
    </nav>
  )
}
