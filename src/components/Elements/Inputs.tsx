import styled from "styled-components";

interface InputProps {
    style?:React.CSSProperties & {
        "--hovered-placeholder-color"?:string};
    placeholder?:string;
}

const StyledInput = styled.input`
    margin: 0;
    padding: 0;
    border: none;
    background: none;
    font: inherit;
    color: inherit;
    outline: none;

    &::placeholder {
        color: var(--hovered-placeholder-color, rgba(0,0,0,0.2));
        transition:  color 0.2s ease;
    }
`

const Inputs = ({style, placeholder}:InputProps):JSX.Element => {
    return(
        <StyledInput style={style} placeholder={placeholder}></StyledInput>
    )
}

export default Inputs;