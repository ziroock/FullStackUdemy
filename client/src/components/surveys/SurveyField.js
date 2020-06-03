// SurveyField contains logic to render a single label and text input
import React from 'react';

export default ({ input, label }) => {
    return (
        //{...input} gets all the properties from input
        <div>
            <label>{label}</label>
            <input {...input} />
        </div>
    )
}