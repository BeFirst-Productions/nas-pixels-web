export function Input({ label }) {
  return (
    <div>
      <label className="block mb-2 text-sm">{label}</label>
      <input
        type="text"
        className="w-full bg-transparent neon-dotted rounded-2xl px-4 py-3 text-sm focus:outline-none"
      />
    </div>
  );
}