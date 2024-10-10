import React from 'react';
import styled from 'styled-components';
import Links from '../elements/Links';
import Logo from '../elements/Logo';
import Buttons from '../elements/Buttons';
import SearchBar from '../elements/SearchBar';
import { useLocation } from 'react-router-dom';

interface HeaderProps {
    title?: string;
    activePage?: string;
    children?: React.ReactNode;
}

const StyledHeader = styled.header`
    box-sizing: border-box;
    display:flex;
    width: 100%;
    max-width: 1194px;
    height: 5rem;
    justify-content: flex-start;
    align-items: center;
    gap: 2rem;
    padding-left: 2rem;
    padding-right: 3rem;
    margin-left: auto;
    margin-right: auto;
`;

const logoSrc = 'https://i.namu.wiki/i/geGngQMnvmK2g3wuKU4O1uNs8Ix1HXQULk9PrnT57lHOlU4AxL9qsNCYXOOY9DIqPWtXnphq8G6NzCcvzv-ppQ.webp';

const Header = ({title, activePage, children}: HeaderProps):JSX.Element => {
    const location = useLocation().pathname;
    const menu1 = "/";
    const menu2 = "babo";
    const menu3 = "munchung";
    const menu4 = "DdongGgae";
    return (
        <>
            <StyledHeader>
                <Logo src={logoSrc} type="img"
                    style={{
                        transform: 'translateY(-3.5px)',
                    }}></Logo>
                <Links to={menu1} 
                    style={{
                        fontSize:'1.2rem',
                        fontWeight: ( location === menu1 ) ? 'bold' : 'normal'
                }}>홈</Links>
                <Links to={menu2} 
                    style={{
                        fontSize:'1.2rem',
                        fontWeight: ( location === menu2 ) ? 'bold' : 'normal'
                }}>문제쓰기</Links>
                <Links to={menu3} 
                    style={{
                        fontSize:'1.2rem',
                        fontWeight: ( location === menu3 ) ? 'bold' : 'normal'
                }}>둘러보기</Links>
                <Links to={menu4} 
                    style={{
                        marginRight:'auto',
                        fontSize:'1.2rem',
                        fontWeight: ( location === menu4 ) ? 'bold' : 'normal'
                }}>나의문제</Links>
                <SearchBar></SearchBar>
                <Buttons style={{fontSize:'1.2rem'}}>로그인</Buttons>
            </StyledHeader>
        </>
    )
}

export default Header;
