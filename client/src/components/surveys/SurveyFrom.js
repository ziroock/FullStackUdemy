// SurveyForm gets user input
import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";

import { Link } from 'react-router-dom';
import SurveyField from "./SurveyField";

const FIELDS = [
    {label: 'Survey Title', name: 'title'},
    {label: 'Subject Line', name: 'subject'},
    {label: 'Email Body', name: 'body'},
    {label: 'Recipient List', name: 'emails'}
];

class SurveyForm extends Component {
    renderFields() {
        // ({label, name}) same as (field) and then using field.label and field.name
        return FIELDS.map(({label, name}) => {
           return( <Field key={name} component={SurveyField} type="text" label={label} name={name}/> );
        });
    }

    render() {
        return (
            // name could be anything I like, it will automatically save in redux Form as a key
            <div>
                <form onSubmit={this.props.handleSubmit(values => console.log(values))}>
                    {this.renderFields()}
                    <Link to="/surveys" className="red btn-flat left white-text">
                        Cancel
                    </Link>
                    <button type="submit" className="teal btn-flat right white-text">
                        Next
                        <i className="material-icons right">done</i>
                    </button>
                </form>
            </div>
        );
    }
}

export default reduxForm({
    form: 'surveyForm'
})(SurveyForm);
