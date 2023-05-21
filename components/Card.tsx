export default function Card({ children }) {
    return (
        <div className="flex flex-col rounded-lg bg-white p-6 shadow-[0_4px_39px_rgba(0,0,0,0.08)]">
            {children}
        </div>
    )
}
