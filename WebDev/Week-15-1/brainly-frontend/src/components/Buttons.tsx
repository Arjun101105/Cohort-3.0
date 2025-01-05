import { ReactElement } from "react";


type ButtonVariant = "primary" | "secondary";

export interface ButtonProps {
    variant: ButtonVariant;
    size: "sm" | "md" | "lg";
    text: string;
    startIcon?:ReactElement;
    endIcon?:ReactElement;
    onClick:()=>void;
}

const variantStyles = {
    primary: "bg-blue-500 text-white",
    secondary: "bg-gray-200 text-gray-900",
};

const defaultStyles = {
    rounded: "rounded-md flex items-center"
};

const sizeStyles = {
    sm: "px-2 py-1 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
}


export const Button = (props: ButtonProps) => {
    return <button className={`${variantStyles[props.variant]} ${defaultStyles.rounded} ${sizeStyles[props.size]} mt-4 `}>
        {props.startIcon ? <div className="pr-2">{props.startIcon}</div> : null}
        {props.text}
        {props.endIcon} 
        </button>
}