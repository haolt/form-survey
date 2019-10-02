import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actionConfirmNotBeRobot } from '../actions';
import Capcha from '../components/Capcha';

class CapchaContainer extends Component {
    handleVeryfyCapcha = () => {
        this.props.confirmNotBeRobot();
    }
    render() {
        const { isRobot } = this.props;
        return <Capcha handleVeryfyCapcha={this.handleVeryfyCapcha} isRobot={isRobot} />
    }
}
const mapStateToProps = state => {
    return {
        isRobot: state.isRobot
    }
};
const mapDispatchToProps = (dispatch, props) => {
    return {
        confirmNotBeRobot: () => {
            dispatch(actionConfirmNotBeRobot());
        }
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(CapchaContainer);
