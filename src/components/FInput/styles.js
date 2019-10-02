import styled from 'styled-components';

export default styled.input`
  border: 1px solid #00000024;
  border-radius: 2px;
  height: 2em;
  padding: 5px;
  font-size: 0.9em;
  color: ${(props) => props.theme.textColor};
  outline: none;
  width: 50%;
  :hover,
  :focus {
    outline: none;
  }
`;

