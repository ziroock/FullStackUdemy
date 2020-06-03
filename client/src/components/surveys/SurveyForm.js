// SurveyForm gets user input
import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';
import SurveyField from './SurveyField';
import validateEmails from '../../utills/validateEmails';
import formFields from './formFields';

class SurveyForm extends Component {
    renderFields() {
        // ({label, name}) same as (field) and then using field.label and field.name
        return formFields.map(({label, name}) => {
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
                <form onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}>
                    {this.renderFields()}
                    <Link to="/surveys" className="red btn-flat left white-text">
                        Cancel
                    </Link>
                    <button type="submit" className="teal btn-flat right white-text">
                        Next
                        <i className="material-icons right">arrow_forward</i>
                    </button>
                </form>
            </div>
        );
    }
}

function validate(values) {
    const errors = {};

    errors.recipients = validateEmails(values.recipients || '');

    formFields.forEach( ({ name, errorMsg }) => {
        if(!values[name]) {
            errors[name] = errorMsg;
        }
    });

    return errors;
}

// REDUX FORM HELPER
//validate is the same as validate: validate
export default reduxForm({
    validate,
    form: 'surveyForm',
    destroyOnUnmount: false
})(SurveyForm);
