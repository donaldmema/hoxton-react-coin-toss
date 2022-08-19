import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  backgroundColor?: string;
  color?: string;
  variant?: "primary" | "secondary" | "destructive";
  [key: string]: any;
};

export function Button({
  children,
  backgroundColor,
  color,
  variant,
  ...props
}: Props) {
  let style = {
    backgroundColor: backgroundColor,
    borderRadius: "5px",
    padding: "10px",
    border: "none",
    cursor: "pointer",
    color: "white",
    fontSize: "1.2rem",
  };

  if (variant === "primary") {
    style = {
      ...style,
      backgroundColor: "#309fff",
      color: "#fff",
    };
  } else if (variant === "secondary") {
    style = {
      ...style,
      backgroundColor: "#fff",
      color: "#309fff",
      border: "1px solid #309fff",
    };
  } else if (variant === "destructive") {
    style = {
      ...style,
      backgroundColor: "red",
      color: "yellow",
      fontSize: "1.6rem",
      borderRadius: "20px",
      border: "4px solid black",
    };
  }

  return (
    <button className="button" style={style} {...props}>
      {children}
    </button>
  );
}
