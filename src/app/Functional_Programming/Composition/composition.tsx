import React from 'react';

interface ButtonProps {
    size: "small" | "large"; 
    color: string;
    text: string;
}

const Button = ({ size, color, text }: ButtonProps) => {
    const config = {
        small: { padding: 20, fontSize: "text-xs" },
        large: { padding: 40, fontSize: "text-2xl" },
    };

    const { padding, fontSize } = config[size] || config.small;

    return (
        <button className={`bg-${color}-400 p-${padding} ${fontSize}`}>
            {text}
        </button>
    );
};

const DangerButton = (props: any) => {
    return (
        <Button {...props} color="red" />
    )
}

const BigSuccessButton = (props: any) => {
    return (
        <Button {...props} size="large" color="green" />
    )
}

export { Button, DangerButton, BigSuccessButton };
