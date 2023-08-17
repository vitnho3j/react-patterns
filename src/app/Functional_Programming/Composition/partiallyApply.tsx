import React from 'react';

export const partiallyApply = (
  Component: React.ComponentType<any>, 
  partialProps: any
) => {
  return (props: any) => (
    <Component {...partialProps} {...props} />
  );
}

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

export const DangerButton = partiallyApply(Button, { color: "red" });
export const BigSuccessButton = partiallyApply(Button, { color: "green", size: "large" });
