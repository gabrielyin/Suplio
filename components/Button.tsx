'use client'

interface ButtonProps {
  onClick?: () => void
  text: string
  width?: string
}

export default function Button({ onClick, text, width }: ButtonProps) {
  return (
    <button
      className={`rounded-xl border border-transparent bg-jade-600 px-3 py-2 tracking-wide text-white transition hover:bg-jade-700 ${width}`}
      onClick={() => onClick}
    >
      {text}
    </button>
  )
}
