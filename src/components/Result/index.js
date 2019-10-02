import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faKey } from '@fortawesome/free-solid-svg-icons';
import { StyledList, StyledItem, StyledLabel, StyledTag } from './styles';

class Result extends Component {
    render() {
        console.log(this.props);
        const {
            name,
            age,
            status,
            relationshipRating,
            relatedTags,
            meetingDay,
            message
        } = this.props;
        return (
            <StyledList>
                <StyledItem>
                    <FontAwesomeIcon icon={faKey} color="#636e72" />&nbsp;
                    <StyledLabel>Name:</StyledLabel>{name || ''}
                </StyledItem>
                <StyledItem>
                    <FontAwesomeIcon icon={faKey} color="#636e72" />&nbsp;
                    <StyledLabel>Age:</StyledLabel>{age || ''}
                </StyledItem>
                <StyledItem>
                    <FontAwesomeIcon icon={faKey} color="#636e72" />&nbsp;
                    <StyledLabel>Status:</StyledLabel>{status || ''}
                </StyledItem>
                <StyledItem>
                    <FontAwesomeIcon icon={faKey} color="#636e72" />&nbsp;
                    <StyledLabel>Relationship rating:</StyledLabel>{relationshipRating || ''}
                </StyledItem>
                <StyledItem>
                    <FontAwesomeIcon icon={faKey} color="#636e72" />&nbsp;
                    <StyledLabel>Related tags:</StyledLabel>
                    { relatedTags.map((tag) => <StyledTag key={tag}>{tag || ''}</StyledTag>) }
                </StyledItem>
                <StyledItem>
                    <FontAwesomeIcon icon={faKey} color="#636e72" />&nbsp;
                    <StyledLabel>Meeting Day:</StyledLabel>{meetingDay || ''}
                </StyledItem>
                <StyledItem>
                    <FontAwesomeIcon icon={faKey} color="#636e72" />&nbsp;
                    <StyledLabel>Message:</StyledLabel>{message && ''}
                </StyledItem>
            </StyledList>
        );
    }
}
export default Result;