import React from "react";

interface TextareaFieldProps {
    id: string;
    label: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const TextareaField: React.FC<TextareaFieldProps> = ({ id, label, value, onChange }) => {
    return (
        <div className="py-4">
            <label htmlFor={id} className="block text-gray-700 font-medium mb-2">
                {label}
            </label>
            <textarea
                id={id}
                value={value}
                onChange={onChange}
                className="w-full border rounded-xl p-3 border-gray-600 focus:outline-none focus:ring-2 focus:ring-customGrayText"
            ></textarea>
        </div>
    );
};

export default TextareaField;
