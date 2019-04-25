import React from 'react';
import PropTypes from 'prop-types';

const Input = (props) => {

    // console.log('props',props);

    const {autoComplete, label, name, id=name, onChange, size, type, value} = props;

    return(
        <div className="input-field col s12">
            {/* <input onChange={props.handleInputChange} value={props.student} name="student" type="text" autoComplete="off" id="std"></input> */}
            {/* <label htmlFor="std">Input Student</label> */}
            <input onChange={onChange} value={value} name={name} type={type} id={id} autoComplete={autoComplete}></input>
            <label htmlFor={id}>{label}</label>
        </div>

    )
}

Input.propTypes = {
    autoComplete: PropTypes.oneOf(['on','off']),
    id: PropTypes.string,
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    size: PropTypes.string,
    type: PropTypes.string,
    value: PropTypes.string.isRequired
}

Input.defaultProps = {
    autoComplete: 'off',
    type: 'text'
}

export default Input;
