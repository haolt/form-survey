import React, { Component } from 'react';

import FInputTextContainer from './_FInputTextContainer';
import FInputDateContainer from './_FInputDateContainer';
import FInputRadioContainer from './_FInputRadioContainer';
import FInputNumberContainer from './_FInputNumberContainer';
import FSelectContainer from './_FSelectContainer';
import FCheckboxContainer from './_FCheckboxContainer';
import FTextareaContainer from './_FTextareaContainer';
import CapchaContainer from './_CapchaContainer';

class AnswerContainer extends Component {
    showAnswerCorresponding = (question) => {
        const { type } = question;
        switch (type) {
            case 'text':
                return <FInputTextContainer name={question.name}/>;
            case 'radio':
                return <FInputRadioContainer name={question.name} options={question.options} />;
            case 'number':
                return <FInputNumberContainer question={question} />;
            case 'date':
                return <FInputDateContainer name={question.name} />;
            case 'select':
                return <FSelectContainer name={question.name} options={question.options} />;
            case 'checkbox':
                return <FCheckboxContainer name={question.name} options={question.options} />;
            case 'textarea':
                return <FTextareaContainer question={question} />;
            case 'capcha':
                return <CapchaContainer question={question} />;
            default:
            break;
        }
    }
    render() {
        const { question } = this.props;
        return (
            <>
                { this.showAnswerCorresponding(question) }
            </>
        );
    }
}
export default AnswerContainer;