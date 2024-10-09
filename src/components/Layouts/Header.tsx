import React from 'react';
import styled from 'styled-components';
import Links from '../Elements/Links';
import Logo from '../Elements/Logo';
import Buttons from '../Elements/Buttons';
import SearchBar from '../Elements/SearchBar';

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
    return (
        <StyledHeader>
            <Logo src={logoSrc} type="img"
                style={{
                    transform: 'translateY(-3.5px)',
                }}></Logo>
            <Links to="/" style={{fontSize:'1.2rem'}}>홈</Links>
            <Links to="/" style={{fontSize:'1.2rem'}}>문제쓰기</Links>
            <Links to="/" style={{fontSize:'1.2rem'}}>둘러보기</Links>
            <Links to="/" style={{
                marginRight:'auto',
                fontSize:'1.2rem'
            }}>나의문제</Links>
            <SearchBar></SearchBar>
            <Buttons style={{fontSize:'1.2rem'}}>로그인</Buttons>
        </StyledHeader>
    )
}

export default Header;
