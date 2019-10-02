import React, { Component } from 'react';
import StyledSelect from './styles';

class FSelect extends Component {
    handleChangeSelect(event) {
        const age = event.target.value;
        this.props.changeState(age);
    }
    render() {
        const { name, options } = this.props;
        return (
            <StyledSelect name={name} onChange={($event) => this.handleChangeSelect($event)}>
                { options.map((option) => <option value={option} key={option}>{option}</option>) }
            </StyledSelect>
        );
    }
}
export default FSelect;