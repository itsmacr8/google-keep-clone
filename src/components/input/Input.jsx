import { PropTypes } from "prop-types";
import "./Input.css";

Input.propTypes = {
    type: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    className: PropTypes.string,
    name: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func.isRequired,
};

export default function Input({ type, placeholder, className, name, value, onChange }) {
    return (
        <input
            type={type}
            placeholder={placeholder}
            className={className}
            name={name}
            value={value}
            onChange={onChange}
        />
    );
}
