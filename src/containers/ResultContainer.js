import React, { Component } from 'react';
import { connect } from 'react-redux';
import Result from '../components/Result';

class ResultContainer extends Component {
    render() {
        return <Result { ...this.props}/>;
    }
}
const mapStateToProps = state => {
    return {
        name: state.name,
        age: state.age,
        status: state.status,
        relationshipRating: state.relationshipRating,
        relatedTags: state.relatedTags,
        meetingDay: state.meetingDay,
        message: state.message
    }
};
export default connect(mapStateToProps)(ResultContainer);