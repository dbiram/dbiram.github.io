import React from 'react';
import style from './TextAreaField.module.css';

interface TextAreaFieldProps {
    width?: string;
    height?: string;
    type?: string;
    value?: string;
    name?: string;
    placeholder?: string;
    label?: string;
}

const TextAreaField: React.FC<TextAreaFieldProps> = ({
    width,
    height,
    value,
    name,
    placeholder,
    label
}) => {
    return (
        <div style={{ maxWidth: width}} className={style["text-area-field"]}>
            <label>
                {label} 
            </label>
            <textarea 
                style={{
                    height: height
                }} 
                value={value}
                name={name}
                placeholder={placeholder}
                required
            />
        </div>
    );
};

export default TextAreaField;
