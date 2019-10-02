import React, { Component } from 'react';
import { StyledLabel } from './styles';

class FRadioCheckbox extends Component {
    relatedTags = [];
    handleChangeorCheckbox(event) {
        const { type } = this.props;
        let value = event.target.value;
        if (type === 'checkbox') {
            value = this.checkTagInRelateTags(value, this.relatedTags);
        }
        this.props.changeState(value);
    }
    checkTagInRelateTags(curentTag, allTags) {
        if (allTags.includes(curentTag)) {
            allTags = allTags.filter((tag) => tag !== curentTag )
        } else {
           allTags.push(curentTag);
        }
        return allTags;
    }
    render() {
        const { name, options, type } = this.props;
        return (
            <>
                {
                    options.map((option) => (
                        <StyledLabel key={option} htmlFor={option}>
                            <input type={type} id={option} value={option} name={name}
                                onChange={($event) => this.handleChangeorCheckbox($event)}
                            />
                            {option}
                        </StyledLabel>
                    ))
                }
            </>
        );
    }
}
export default FRadioCheckbox;