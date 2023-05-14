export default function Container({ children }) {
    return (
        <div className="rounded-lg shadow-[0_4px_39px_rgba(0,0,0,0.08)] h-full p-6">
            {children}
        </div>
    )
}