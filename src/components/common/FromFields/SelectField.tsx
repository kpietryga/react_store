import React from "react";

interface SelectFieldProps {
    id: string;
    label: string;
    value?: string;
    options: { value: string; label: string }[];
    onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const SelectField: React.FC<SelectFieldProps> = ({ id, label, value, options, onChange }) => {
    return (
        <div className="py-4">
            <label htmlFor={id} className="block text-gray-700 font-medium mb-2">
                {label}
            </label>
            <select
                id={id}
                value={value}
                onChange={onChange}
                className="w-full border rounded-xl p-3 border-gray-600 focus:outline-none focus:ring-2 focus:ring-customGrayText"
            >
                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default SelectField;