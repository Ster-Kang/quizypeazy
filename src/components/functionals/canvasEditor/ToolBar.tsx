import styled from "styled-components";
import React from "react";
import Eraser from "./Eraser";
import Pens from "./Pens";
import Handle from "./Handle";

interface ToolBarProps {
    style?: React.CSSProperties
}

const StyledDiv = styled.div`
    display:flex;
    flex-direction:row;
`

const ToolBar = ({style}:ToolBarProps):JSX.Element => {
    return (
        <StyledDiv style={{}}>
            <Eraser></Eraser>
            <Pens></Pens>
            <Handle></Handle>
        </StyledDiv>
    )
}

export default ToolBar;