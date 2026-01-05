export function Input({ label, name, value, onChange, ...props }) {
  return (
    <div className="w-full">
      <label className="block mb-2 text-sm">{label}</label>
      <input
        name={name}
        value={value}
        onChange={onChange}
        {...props}
        className="w-full bg-transparent neon-dotted rounded-xl px-4 py-3 text-sm focus:outline-none"
      />
    </div>
  );
}
