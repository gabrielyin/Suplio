export default function TextInput({ label, name, register, ...rest }) {
  return (
    <label className="block">
      <span className="mb-1 block">{label}</span>
      <input
        className="w-full rounded-lg border bg-[#F9FAFB] px-3 py-2 outline-none"
        {...rest}
        {...register}
      />
    </label>
  )
}
