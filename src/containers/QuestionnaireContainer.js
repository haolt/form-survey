import React, { Component } from 'react';
import { connect } from 'react-redux';

import Questionnaire from '../components/Questionnaire';
import AnswerContainer from './AnswerContainer';
import QuestionTitle from '../components/QuestionTitle';
import questions from '../constants/questions';

class QuestionnaireContainer extends Component {
    showQuestionnaire = (_questions) => _questions.map(
        (question) => (
            <React.Fragment key={question.id}>
                <QuestionTitle title={question.title} />
                <AnswerContainer question={question} />
            </React.Fragment>
        )
    );
    render() {
        return <Questionnaire> { this.showQuestionnaire(questions) } </Questionnaire>;
    }
}
export default connect()(QuestionnaireContainer);