import React from "react";

interface InputFieldProps {
    id: string;
    label: string;
    type?: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputField: React.FC<InputFieldProps> = ({ id, label, type = "text", value, onChange }) => {
    return (
        <div className="py-4">
            <label htmlFor={id} className="block text-gray-700 font-medium mb-2">
                {label}
            </label>
            <input
                type={type}
                id={id}
                value={value}
                onChange={onChange}
                className="w-full border rounded-xl p-3 border-gray-600 focus:outline-none focus:ring-2 focus:ring-customGrayText"
            />
        </div>
    );
};

export default InputField;