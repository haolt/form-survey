import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actionHandleChangeTextarea } from '../actions';
import FTextarea from '../components/FTextarea';

class FTextareaContainer extends Component {
    render() {
        return <FTextarea changeState={this.props.changeState} />;
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        changeState: (msg) => {
            dispatch(actionHandleChangeTextarea(msg));
        }
    }
};
export default connect(null, mapDispatchToProps)(FTextareaContainer);