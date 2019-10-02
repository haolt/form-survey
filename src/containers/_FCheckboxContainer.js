import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actionHandleChangeCheckbox } from '../actions';
import FRadioCheckbox from '../components/FRadioCheckbox';

class FCheckboxContainer extends Component {
    render() {
        return <FRadioCheckbox type={'checkbox'} {...this.props} />;
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        changeState: (relatedTags) => {
            dispatch(actionHandleChangeCheckbox(relatedTags));
        }
    }
};
export default connect(null, mapDispatchToProps)(FCheckboxContainer);
