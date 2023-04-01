import React from 'react'

const Form = (prop) => {
    const props = prop.data
    return (
        <div>
            <form>
                <h2>{props.heading}</h2>
                <input type="text" name="field" />
                <label>{props.fieldName}</label>
                <button>{props.buttonText}</button>
            </form>
        </div>
    )
}

export default Form