import styled from 'styled-components';
import React from 'react';
import Links from './Links';

interface LogoProps {  
    src:string;
    alt?:string;
    children?:React.ReactNode;
    type?:"img" | "link";
    style?:React.CSSProperties;
}

const StyledImg = styled.img`
    width: 4rem;
    heigth: 4rem;
    border-radius: 2rem;
`

const Logo = ({src, children, alt, type, style}:LogoProps):JSX.Element => {
    return (
        <>
            {type==="img"? 
                (
                    <Links to="/">
                        <StyledImg src={src} alt={alt} style={style}></StyledImg>
                    </Links>
                )
                : 
                (<Links to={src} style={style}>{children}</Links>)
            }
        </>
    )
}

export default Logo;