const FloatingInput = ({
  label,
  type = "text",
  name,
  value,
  onChange,
}) => {
  return (
    <div className="relative">
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder=" "
        className="peer w-full border border-gray-300 px-4 pt-6 pb-2 rounded-lg 
        focus:outline-none focus:ring-2 focus:ring-[#903728] 
        focus:border-[#903728] bg-white text-sm"
      />

      <label
        className="absolute left-4 top-2 text-xs text-[#903728] 
        transition-all duration-200
        peer-placeholder-shown:top-4 
        peer-placeholder-shown:text-sm 
        peer-placeholder-shown:text-gray-400
        peer-focus:top-2 
        peer-focus:text-xs 
        peer-focus:text-[#903728]"
      >
        {label}
      </label>
    </div>
  );
};

export default FloatingInput;