import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import StyledBtns from './styles';

class FButtons extends Component {
    render() {
        const { isFormFillFull } = this.props;
        return (
            <StyledBtns>
                <NavLink exact to="/">Home</NavLink>
                {
                    isFormFillFull ?
                        <NavLink to="/result">Result</NavLink> :
                        null
                    
                }
                <NavLink to="/result">Result</NavLink> 
            </StyledBtns>
        );
    }
}

export default FButtons;