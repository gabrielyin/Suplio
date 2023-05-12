export default function TextInput({ label, placeholder }) {
    return (
        <label className="block">
            <span className="block mb-1">{label}</span>
            <input
                className="w-full border py-2 px-3 rounded-lg outline-none bg-[#F9FAFB]"
                type="text"
                placeholder={placeholder}
            />
        </label>
    )
}