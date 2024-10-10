import React from 'react';
import styled from 'styled-components';

interface LayoutProps {
    children?: React.ReactNode;
    changedStyle?: React.CSSProperties; 
}

const StyledLayout = styled.div`
    box-sizing: border-box;
    display:flex;
    width:100%;
`;

const Layout = ({children, changedStyle}:LayoutProps):JSX.Element => {
    return (
        <StyledLayout style={changedStyle}>{children}</StyledLayout>
    )
}

export default Layout;