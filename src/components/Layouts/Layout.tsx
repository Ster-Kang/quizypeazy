import React from 'react';
import styled from 'styled-components';

interface LayoutProps {
    children?: React.ReactNode;
    changedStyle?: React.CSSProperties; 
}

const StyledLayout = styled.div`
    box-sizing: border-box;
    display:flex;
    width: 100%;
    max-width: 1194px;
    margin-left:auto;
    margin-right:auto;
    padding-left: 2rem;
    padding-right: 2rem;
`;

const Layout = ({children, changedStyle}:LayoutProps):JSX.Element => {
    return (
        <StyledLayout style={changedStyle}>{children}</StyledLayout>
    )
}

export default Layout;