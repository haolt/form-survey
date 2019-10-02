import * as types from '../constants/actionTypes';

export const actionHandleChangeInputText = (name) => {
    return {
        type: types.CHANGE_INPUT_TEXT,
        payload: name
    }
}
export const actionHandleChangeTextarea = (msg) => {
    return {
        type: types.CHANGE_TEXTAREA,
        payload: msg
    }
}
export const actionHandleChangeInputDate = (date) => {
    return {
        type: types.CHANGE_INPUT_DATE,
        payload: date
    }
}
export const actionHandleChangeInputNumber = (age) => {
    return {
        type: types.CHANGE_INPUT_NUMBER,
        payload: age
    }
}
export const actionHandleChangeSelect = (status) => {
    return {
        type: types.CHANGE_SELECT,
        payload: status
    }
}
export const actionHandleChangeRadio = (relationshipRating) => {
    return {
        type: types.CHANGE_RADIO,
        payload: relationshipRating
    }
}
export const actionHandleChangeCheckbox = (relatedTags) => {
    return {
        type: types.CHANGE_CHECKBOX,
        payload: relatedTags
    }
}
export const actionConfirmNotBeRobot = () => {
    return {
        type: types.CONFIRM_NOT_BE_ROBOT
    }
}
