import styled from "styled-components";
import React from "react";
import Eraser from "./Eraser";

interface ToolBarProps {

}

const StyledDiv = styled.div`
    display:flex;
    flex-direction:row;
`

const ToolBar = ({}:ToolBarProps) => {
    return (
        <StyledDiv>
            <Eraser></Eraser>
        </StyledDiv>
    )
}

export default ToolBar;