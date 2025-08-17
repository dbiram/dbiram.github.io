import React from 'react';
import style from './InputField.module.css';

interface InputFieldProps {
    width?: string;
    height?: string;
    type?: string;
    value?: string;
    name?: string;
    placeholder?: string;
    label?: string;
}

const InputField: React.FC<InputFieldProps> = ({
    width,
    height,
    type,
    value,
    name,
    placeholder,
    label
}) => {
    return (
        <div style={{ maxWidth: width }} className={style["input-field"]}>
            <label>
                {label} 
            </label>
            <input 
                style={{
                    height: height
                }}
                type={type}  
                value={value}
                name={name}
                placeholder={placeholder}
                required
            />
        </div>
    );
};

export default InputField;
