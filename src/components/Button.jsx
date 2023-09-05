import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Button = ({
  type,
  outline,
  text,
  disableShadow,
  disabled,
  icon,
  iconPosition,
  size,
  color,
  children,
  ...rest
}) => {
  const baseClasses = "focus:outline-none";
  const sizeClasses = {
    small: "py-1 px-2 text-sm",
    medium: "py-2 px-4",
    large: "py-3 px-6 text-lg",
  };
  const colorClasses = {
    primary: "bg-blue-500 text-white hover:bg-blue-600",
    secondary: "bg-gray-400 text-black hover:bg-gray-500",
    danger: "bg-red-500 text-white hover:bg-red-600",
    warning: "bg-yellow-500 text-white hover:bg-yellow-600",
    success: "bg-green-500 text-white hover:bg-green-600",
  };
  const shadowClasses = disableShadow ? "shadow-none" : "shadow-md";
  const outlineClasses = outline ? "border border-solid" : "";
  const textClasses = text ? "bg-transparent text-black" : ""; // Added text color class for text and outline buttons
  const disabledClasses = disabled ? "opacity-50 cursor-not-allowed" : "";

  const iconComponent = icon && (
    <FontAwesomeIcon
      icon={icon}
      className={`mx-2 ${iconPosition === "right" ? "order-2" : ""}`}
    />
  );

  return (
    <button
      type={type}
      className={`rounded ${sizeClasses[size]} ${colorClasses[color]} ${shadowClasses} ${outlineClasses} ${textClasses} ${disabledClasses} ${baseClasses}`}
      disabled={disabled}
      {...rest}
    >
      {iconPosition === "left" && iconComponent}
      {children}
      {iconPosition === "right" && iconComponent}
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.string,
  outline: PropTypes.bool,
  text: PropTypes.bool,
  disableShadow: PropTypes.bool,
  disabled: PropTypes.bool,
  icon: PropTypes.object,
  iconPosition: PropTypes.oneOf(["left", "right"]),
  size: PropTypes.oneOf(["small", "medium", "large"]),
  color: PropTypes.oneOf(["primary", "secondary"]),
  children: PropTypes.node.isRequired,
};

Button.defaultProps = {
  type: "button",
  outline: false,
  text: false,
  disableShadow: false,
  disabled: false,
  icon: null,
  iconPosition: "left",
  size: "medium",
  color: "primary",
};

export default Button;
