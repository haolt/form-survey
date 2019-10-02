import React, { Component } from 'react';
import FButtons from '../components/FButtons';

class FButtonsContainer extends Component {
    checkIsFormFillFull = () => {
        const {
            name,
            age,
            status,
            relationshipRating,
            relatedTags,
            meetingDay,
            message,
            isRobot
        } = this.props;
        console.log(this.props);
        if ( name === '') { return false; }
        if ( age === undefined ) { return false; }
        if ( status === '') { return false; }
        if ( relationshipRating === '') { return false; }
        if ( relatedTags.length <= 0 ) { return false; }
        if ( meetingDay === '') { return false; }
        if ( message === '') { return false; }
        if ( isRobot) { return false; }
        return true;
    }

    render() {
        let isFormFillFull = this.checkIsFormFillFull();
        return <FButtons isFormFillFull={isFormFillFull} />;
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
        message: state.message,
        isRobot: state.isRobot
    }
};
export default connect(mapStateToProps)(FButtonsContainer);
