import styled from "styled-components";

function Button({ disabled, backgroundColor, padding, font, children, onClick}) {
    return (
        <StyledButton
            disabled={disabled}
            backgroundColor={backgroundColor}
            padding={padding}
            onClick={onClick}
            font={font}>
            {children}
        </StyledButton>
    )
}

const StyledButton = styled.button`
  margin: 0;
  border: none;
  cursor: pointer;
  border-radius: 4px;

  /* var(--maincolor); */

  background-color: ${props => props.backgroundColor ? props.backgroundColor : 'var(--maincolor)'};
  color: ${props => props.backgroundColor ? 'black' : 'white'};
  padding: ${props => props.padding ? props.padding + 'px' : '9px'};

  font-size: ${props => props.font ? props.font + 'rem' : '1.4rem'};
  display: inline-flex;
  align-items: center;
`;

export default Button;