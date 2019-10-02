import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actionHandleChangeInputDate } from '../actions';
import FInput from '../components/FInput';

class FInputDateContainer extends Component {
    render() {
        return <FInput type={'date'} {...this.props} />;
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        changeState: (date) => {
            dispatch(actionHandleChangeInputDate(date));
        }
    }
};
export default connect(null, mapDispatchToProps)(FInputDateContainer);
