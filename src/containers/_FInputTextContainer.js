import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actionHandleChangeInputText } from '../actions';
import FInput from '../components/FInput';

class FInputTextContainer extends Component {
    render() {
        return <FInput type={'text'} {...this.props}/>;
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        changeState: (val) => {
            dispatch(actionHandleChangeInputText(val));
        }
    }
};
export default connect(null, mapDispatchToProps)(FInputTextContainer);