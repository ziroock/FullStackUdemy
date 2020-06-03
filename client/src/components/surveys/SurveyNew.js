// SurveyNew displays SurveyForm and SurveyReview
import React, { Component } from "react";
import SurveyForm from "./SurveyForm";
import SurveyFormReview from "./SurveyFormReview";

class SurveyNew extends Component {
    state = { showFormReview: false };

    renderContent() {
        if(this.state.showFormReview) {
            return <SurveyFormReview />;
        }

        return (
                <SurveyForm
                    onSurveySubmit={() => this.setState({ showFormReview: true })}
                />
            );
    }

    render() {
        return (
          <div>
              {this.renderContent()}
          </div>
        );
    }
}

export default SurveyNew;

// constructor to configure and keep the state of the application
// it is the same as: state = { showFormReview: false };
// constructor(props) {
//     super(props);
//
//     this.state = { new:true };
// }
