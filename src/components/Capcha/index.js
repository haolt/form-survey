import React from 'react';
import robotCapcha from './images/capcha.PNG';
import verifyRobotCapchaSuccess from './images/capcha-success.PNG';

const Capcha = (props) => {
    const { isRobot, handleVeryfyCapcha } = props;
    return (
        <img onClick={handleVeryfyCapcha}
            alt="robotCapcha" height="100px" width="52%"
            src={isRobot ? robotCapcha : verifyRobotCapchaSuccess}
        />
    );
}
export default Capcha;