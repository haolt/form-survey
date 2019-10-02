import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faKey } from '@fortawesome/free-solid-svg-icons';
import StyledQuestionTitle from './styles';

const QuestionTitle = (props) => <StyledQuestionTitle><FontAwesomeIcon icon={faKey} color="#636e72" />&nbsp;{props.title}</StyledQuestionTitle>;

export default QuestionTitle;