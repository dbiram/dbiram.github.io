import React from 'react';
import style from './IconButton.module.css';

interface IconButtonProps {
    width?: string;
    height?: string;
    icon?: React.ReactNode;
    children: React.ReactNode;
    color?: string;
    backgroundColor?: string;
    link?: string;
}

const IconButton: React.FC<IconButtonProps> = ({ 
    width, 
    height, 
    icon, 
    children, 
    color, 
    backgroundColor, 
    link 
}) => {
    return (
        <a href={link} target="_blank" rel="noreferrer">
            <button 
                className={style.button}
                style={{
                    width,
                    height,
                    backgroundColor,
                    color
                }}
            >
                <div className={style.text}>{children}</div>
                <div className={style.icon}>{icon}</div>
            </button>
        </a>
    );
};

export default IconButton;
