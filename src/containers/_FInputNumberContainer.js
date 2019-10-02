import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actionHandleChangeInputNumber } from '../actions';
import FInput from '../components/FInput';

class FInputNumberContainer extends Component {
    render() {
        return <FInput type={'number'} {...this.props}/>;
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        changeState: (age) => {
            dispatch(actionHandleChangeInputNumber(age));
        }
    }
};
export default connect(null, mapDispatchToProps)(FInputNumberContainer);
