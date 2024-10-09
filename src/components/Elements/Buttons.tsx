import styled from 'styled-components';
import React from 'react';
import '../../App.css';

interface ButtonsProps {
    children:React.ReactNode;
    style?:React.CSSProperties;
}

const StyledButton = styled.button`
    margin: 0;
    padding: 0;
    border: none;
    background: none;

    font: inherit;
    color: inherit;
    outline: none;

    cursor: pointer;

        &:hover {
            animation: boing 0.4s ease-out;
        }

    }
`;

const Buttons = ({children, style}:ButtonsProps):JSX.Element => {
    return (
        <StyledButton style={style}>{children}</StyledButton>
    )
}

export default Buttons;