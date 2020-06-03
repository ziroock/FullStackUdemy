// SurveyForm gets user input
import _ from 'lodash';
import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
<<<<<<< HEAD
=======
import { Link } from 'react-router-dom';
>>>>>>> Completed and have working Fields for the SurveyFrom
import SurveyField from "./SurveyField";

const FIELDS = [
    {label: 'Survey Title', name: 'title'},
    {label: 'Subject Line', name: 'subject'},
    {label: 'Email Body', name: 'body'},
    {label: 'Recipient List', name: 'emails'}
];

<<<<<<< HEAD
// return(
//     <div>
//         <Field label="Survey Title" type="text" name="title" component={SurveyField} />
//         <Field label="Subject Line " type="text" name="subject" component={SurveyField} />
//         <Field label="Email Body" type="text" name="body" component={SurveyField} />
//         <Field label="Recipient List" type="text" name="emails" component={SurveyField} />
//     </div>
// );

=======
>>>>>>> Completed and have working Fields for the SurveyFrom
class SurveyForm extends Component {
    renderFields() {
        return _.map(FIELDS, ({label, name}) => {
           return( <Field key={name} component={SurveyField} type="text" label={label} name={name}/> );
        });
    }

    render() {
        return (
            // name could be anything I like, it will automatically save in redux Form as a key
            <div>
                <form onSubmit={this.props.handleSubmit(values => console.log(values))}>
                    {this.renderFields()}
<<<<<<< HEAD
                    <button type="submit">Submit</button>
=======
                    <Link to="/surveys" className="red btn-flat left white-text">
                        Cancel
                    </Link>
                    <button type="submit" className="teal btn-flat right white-text">
                        Next
                        <i className="material-icons right">done</i>
                    </button>

>>>>>>> Completed and have working Fields for the SurveyFrom
                </form>
            </div>
        );
    }
}

export default reduxForm({
    form: 'surveyForm'
})(SurveyForm);
