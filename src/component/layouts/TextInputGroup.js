import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

const TextInputGroup = ({ name, label, value, type, placeholder, onChange, error }) => {
    //những thuộc tính khác nhau thì truyền

    return (
        <div className="form-group">
            <label htmlFor="name"> {label} </label>
            <input
                value={value}
                name={name}
                type={type}
                className={classnames("form-control form-control-lg", {'is-invalid': error})} //is-invalid là báo lỗi trong bootstraap
                placeholder={placeholder}
                onChange={onChange}
            />
            {
               error && <div className="invalid-feedback">{error}</div>
            }
        </div>
    );
};

TextInputGroup.propTypes = {
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
};
 
TextInputGroup.defaultProps = {
    type: "text",
};

export default TextInputGroup;

//điều này tương tự với
// const TextInputGroup = (props) => {
// const {name, label, value, type, placeholder, onChange} = props;
//     //khác nhau thì truyền

//     return (
//       <div className="form-group">
//         <label htmlFor="phone"> {label} </label>
//         <input
//           value={value}
//           name={name}
//           type={type}
//           className="form-control form-control-lg"
//           placeholder={placeholder}
//           onChange={onChange}
//         ></input>
//       </div>
//     );
//   };
