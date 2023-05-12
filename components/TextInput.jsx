export default function TextInput({ label, placeholder, type }) {
    return (
        <label className="block">
            <span className="block mb-1">{label}</span>
            <input
                className="w-full border py-2 px-3 rounded-lg outline-none bg-[#F9FAFB]"
                type={type}
                placeholder={placeholder}
            />
        </label>
    )
}