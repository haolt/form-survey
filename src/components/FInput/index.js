import React, { Component } from 'react';
import StyledInput from './styles';

class FInput extends Component {
    handleChangeInputText(event) {
        const val = event.target.value;
        this.props.changeState(val);
    }
    render() {
        const { type, name } = this.props;
        return <StyledInput type={type} name={name} onChange={($event) => this.handleChangeInputText($event)} />;
    }
}
export default FInput;