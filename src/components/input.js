import React from 'react';

const Input = (title, state, onChange, name) => {
    return (
        <div classname="input">
        <input name={name} value={state} onChange={onChange}/>
        <label>{title}</label>
        </div>
    )
}

export default Input;