import * as types from '../constants/actionTypes';

var initialState = {
    name: '',
    age: undefined,
    status: '',
    relationshipRating: '',
    relatedTags: [],
    meetingDay: '',
    message: '',
    isRobot: true,
};

const appReducers = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case types.CHANGE_INPUT_TEXT:
            return { ...state, name: payload}
        case types.CHANGE_INPUT_DATE:
            return { ...state, meetingDay: payload}
        case types.CHANGE_INPUT_NUMBER:
            return { ...state, age: payload}
        case types.CHANGE_TEXTAREA:
            return { ...state, message: payload}
        case types.CHANGE_SELECT:
            return { ...state, status: payload}
        case types.CHANGE_RADIO:
            return { ...state, relationshipRating: payload}
        case types.CHANGE_CHECKBOX:
            return { ...state, relatedTags: payload}
        case types.CONFIRM_NOT_BE_ROBOT:
            return { ...state, isRobot: false}
        default: return state;
    }
}
export default appReducers;