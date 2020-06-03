import React from "react";
import { connect } from 'react-redux';
import formFields from './formFields';
import * as actions from '../../actions';

const SurveyFormReview = ({ onCancel, formValues, submitSurvey }) => {
    const reviewFields = formFields.map(({ name, label}) => {
        return (
            <div key={name}>
                <label>{label}</label>
                <div> {formValues[name]} </div>
            </div>
        );
    });

    return (
      <div>
          <h5>Please confirm your entries</h5>
          {reviewFields}
          <button className="yellow darken-3 white-text btn-flat left" onClick={onCancel}>
              <i className="material-icons left">arrow_back</i>
              Back
          </button>
          <button onClick={() => submitSurvey(formValues)} className="green btn-flat white-text right">
              Send
              <i className="material-icons right">email</i>
          </button>
      </div>
    );
};

function mapStateToProps(state) {
    // console.log(state);
    return { formValues: state.form.surveyForm.values };
}

export default connect(mapStateToProps, actions)(SurveyFormReview);