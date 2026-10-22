export function Input({ iconSrc, iconAlt, type, placeholder, name, value, onChange }) {
  return (
    <div className="flex items-center gap-2 border border-gray-300 p-2 rounded-lg w-80 bg-white">
      {iconSrc && <img src={iconSrc} alt={iconAlt} className="w-5 h-5" />}
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        className="outline-none w-full bg-transparent text-sm"
      />
    </div>
  );
}