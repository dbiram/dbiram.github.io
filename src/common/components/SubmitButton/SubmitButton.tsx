import React from 'react';
import style from './SubmitButton.module.css';

interface SubmitButtonProps {
    width?: string;
    height?: string;
    icon?: React.ReactNode;
    children: React.ReactNode;
    color?: string;
    backgroundColor?: string;
}

const SubmitButton: React.FC<SubmitButtonProps> = ({
    width,
    height,
    icon,
    children,
    color,
    backgroundColor
}) => {
    return (
        <div className={style["submit-button"]} style={{width: width, height: height}}>
            <div className={style.icon}>
                {icon}
            </div>
            <input 
                style={{
                    width: width,
                    height: height,
                    backgroundColor: backgroundColor,
                    color: color
                }}
                type="submit" 
                value={children?.toString()}
            />
        </div>
    );
};

export default SubmitButton;
