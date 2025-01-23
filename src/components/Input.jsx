import React from "react";

const Input = ({ label, type, value, onChange, placeholder, required = false }) => {
  return (
    <div className="mb-4">
      {label && <label className="block text-gray-700 font-bold mb-2">{label}</label>}
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
};

export default Input;
