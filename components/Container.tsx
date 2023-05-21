export default function Container({ children }) {
    return (
        <div className="flex h-full flex-col gap-4 rounded-lg bg-white p-6 shadow-[0_4px_39px_rgba(0,0,0,0.08)]">
            {children}
        </div>
    )
}
