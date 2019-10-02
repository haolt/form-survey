import React, { Component } from 'react';
import StyledTextarea from './styles';

class FTextarea extends Component {
    handleChangeTexarea(event) {
        const msg = event.target.value;
        this.props.changeState(msg);
    }
    render() {
        return (
            <StyledTextarea  rows="5" onChange={($event) => this.handleChangeTexarea($event)}></StyledTextarea>
        );
    }
}
export default FTextarea;