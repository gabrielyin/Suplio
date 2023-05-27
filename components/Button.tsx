'use client'

import { ButtonHTMLAttributes } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  onClick?: () => void
  text: string
  width?: string
}

export default function Button({ text, width, ...rest }: ButtonProps) {
  return (
    <button
      className={`rounded-xl border border-transparent bg-jade-600 px-3 py-2 tracking-wide text-white transition hover:bg-jade-700 ${width}`}
      {...rest}
    >
      {text}
    </button>
  )
}
