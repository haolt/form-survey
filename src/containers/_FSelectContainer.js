import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actionHandleChangeSelect } from '../actions';
import FSelect from '../components/FSelect';

class FSelectContainer extends Component {
    render() {
        return <FSelect {...this.props} />;
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        changeState: (val) => {
            dispatch(actionHandleChangeSelect(val));
        }
    }
};
export default connect(null, mapDispatchToProps)(FSelectContainer);
