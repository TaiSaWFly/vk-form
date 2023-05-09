import React, { ReactNode } from "react";

interface ButtonProps {
    children: ReactNode;
    onClick?: () => void;
    isDisabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ children, onClick, isDisabled }) => {
    return (
        <button onClick={onClick} disabled={isDisabled}>
            {children}
        </button>
    );
};

export default Button;
