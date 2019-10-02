import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actionHandleChangeRadio } from '../actions';
import FRadioCheckbox from '../components/FRadioCheckbox';

class FInputRadioContainer extends Component {
    render() {
        return <FRadioCheckbox type={'radio'} {...this.props} />;
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        changeState: (relationshipRating) => {
            dispatch(actionHandleChangeRadio(relationshipRating));
        }
    }
};
export default connect(null, mapDispatchToProps)(FInputRadioContainer);