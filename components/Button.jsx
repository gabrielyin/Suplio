"use client"

export default function Button({ onClick, text, width }) {
    return (
        <button
            className={`bg-jade-600 text-white py-2 rounded-xl tracking-wide border border-transparent ${width}`}
            onClick={() => onClick}
        >
            {text}
        </button>
    )
}