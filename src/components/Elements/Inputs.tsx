import { forwardRef } from "react";
import styled from "styled-components";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    style?:React.CSSProperties & {
        "--hovered-placeholder-color"?:string};
    placeholder?:string;
    isolated?:boolean;
}

const StyledInput = styled.input<{isolated?:boolean}>`
    margin: 0;
    padding: 0;
    border: none;
    background: none;
    font: inherit;
    color: inherit;
    outline: none;
    transition: border 0.2s ease;

    ${ ({isolated}) => isolated ? `
            &:hover {
                box-shadow: 0rem 0.2rem 0.25rem rgba(0,0,0,0.1);
            }
        `
        : "" }

    &::placeholder {
        color: var(--hovered-placeholder-color, rgba(0,0,0,0.2));
        transition:  color 0.2s ease;
    }
`

const Inputs = forwardRef<HTMLInputElement, InputProps>(
    ({isolated, style, placeholder, ...props }:InputProps, ref):JSX.Element => {
    return(
        <StyledInput style={style} placeholder={placeholder} ref={ref} isolated={isolated}></StyledInput>
    )
})

export default Inputs;