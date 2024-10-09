import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';

interface LinksProps {
    style?:React.CSSProperties;
    to:string;
    children: React.ReactNode;
    className?: string;
};

const StyledLink = styled(Link)<LinksProps>`
    color: black;
    text-decoration: none;
    &:hover {
        color: black;
        text-decoration: none;
    }

    &:visited {
        color: black;
    }
`;

const Links = ({style, to, children, className}:LinksProps):JSX.Element => {
    const location = useLocation();
    const active = location.pathname === to;

    return (
        <StyledLink style={style} to={to} className={className}>{children}</StyledLink>
    )
}

export default Links;