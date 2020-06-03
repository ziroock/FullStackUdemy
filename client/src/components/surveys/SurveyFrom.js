// SurveyForm gets user input
import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { Link } from 'react-router-dom';
import SurveyField from "./SurveyField";
import validateEmails from "../../utills/validateEmails";

const FIELDS = [
    {label: 'Survey Title', name: 'title', errorMsg: 'Please provide a Survey Title!'},
    {label: 'Subject Line', name: 'subject', errorMsg: 'Please provide a Subject!'},
    {label: 'Email Body', name: 'body', errorMsg: 'Please provide a Body!'},
    {label: 'Recipient List', name: 'emails', errorMsg: 'Please provide Recipient Emails!'}
];

class SurveyForm extends Component {
    renderFields() {
        // ({label, name}) same as (field) and then using field.label and field.name
        return FIELDS.map(({label, name}) => {
           return(
               <Field
                   key={name}
                   component={SurveyField}
                   type="text"
                   label={label} name={name}
               />
           );
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

function validate(values) {
    const errors = {};

    errors.emails = validateEmails(values.emails || '');

    FIELDS.forEach( ({ name, errorMsg }) => {
        if(!values[name]) {
            errors[name] = errorMsg;
        }
    });

    return errors;
}

//validate is the same as validate: validate
export default reduxForm({
    validate,
    form: 'surveyForm'
})(SurveyForm);
