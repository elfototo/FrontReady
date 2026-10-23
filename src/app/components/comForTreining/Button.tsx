"use client";

type ButtonVariants = "primary" | "secondary" | "ghost";

type ButtonProps = {
  variant: ButtonVariants;
  disabled?: boolean;
  onClick?: () => void;
  children: React.ReactNode;
};

export default function Button({ ...props }: ButtonProps) {
  const variantButton = {
    primary: "bg-white border-gray-200 cursor-pointer border",
    secondary: "bg-gray-100 cursor-pointer",
    ghost: "bg-transparent cursor-pointer ",
  };

  return (
    <button
        onClick={props.onClick}
        className={`${variantButton[props.variant]} px-2 py-1 rounded-xl hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-100`}
        disabled={props.disabled}>
            {props.children}
    </button>
  );
}