import styled from 'styled-components';

const StyledTextarea = styled.textarea`
    resize: none;
    line-height: 25px;
    color: ${(props) => props.theme.textColor};
    width: 50%;
    border: 1px solid #00000024;
    border-radius: 2px;
    padding: 5px;
    outline: none;
`;
export default StyledTextarea;
