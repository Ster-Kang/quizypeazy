import React from "react";
import styled from "styled-components";
import EraserIcon from "../../../img/eraser-svgrepo-com.svg"

interface EraserProps {
    
}

const StyledImg = styled.img`
    width: 2rem;
    height: 2rem;
`

const Eraser = ({}:EraserProps):JSX.Element => {
    return (
        <>
            <StyledImg src={EraserIcon}></StyledImg>
        </>
    )
}

export default Eraser;

