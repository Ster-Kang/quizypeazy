import { forwardRef } from "react";
import styled from "styled-components";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
}

const StyledInput = styled.input`
    margin: 0;
    padding: 0;
    border: none;
    background: none;
    font: inherit;
    color: inherit;
    outline: none;
`

const Inputs = forwardRef<HTMLInputElement, InputProps>(
    ({...props}:InputProps, ref):JSX.Element => {
    return(
        <StyledInput 
            ref={ref}
            {...props}    
        ></StyledInput>
    )
})

export default Inputs;