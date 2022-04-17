import React from "react";
import { buttonTypes } from "../../constants";

const getClasses = (type?: string) => {
  if (type === buttonTypes.TRUE) return "text-emerald-400";
  if (type === buttonTypes.FALSE) return "text-red-400";
};
const Button: React.FC<IButtonProperties> = ({ onClick, children, type }) => {
  return (
    <button
      onClick={onClick}
      className={`${getClasses(type)} w-20 font-extrabold  text-xl`}
    >
      {children}
    </button>
  );
};
export default Button;
