// SurveyField contains logic to render a single label and text input
import React from 'react';

export default ({ input, label, meta: {error, touched} }) => {
    return (
        //{...input} gets all the properties from input
        <div>
            <label>{label}</label>
            <input {...input} style={{ marginBottom: '5px'}}/>
            <div className="red-text" style={{ marginBottom: '15px', fontWeight: 'bold'}}>
                {touched && error}
            </div>
        </div>
    )
}