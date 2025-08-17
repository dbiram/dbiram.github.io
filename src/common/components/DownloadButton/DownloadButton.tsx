import React from 'react';
import style from './DownloadButton.module.css';

interface DownloadButtonProps {
    width?: string;
    height?: string;
    onClick?: () => void;
    children: React.ReactNode;
}

const DownloadButton: React.FC<DownloadButtonProps> = ({ width, height, onClick, children }) => {
    return (
        <button 
            className={style.button} 
            onClick={onClick} 
            style={{
                width: width,
                height: height,
            }}
        >
            <span className={style["button-content"]}>{children}</span>
        </button>
    );
};

export default DownloadButton;
