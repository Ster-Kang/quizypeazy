import styled from "styled-components";
import React, {useState}  from 'react';
import SearchIcon from '../../img/search-icon.svg'
import Inputs from "./Inputs";

interface SearchBarProps {
    style?: React.CSSProperties;
    
};

const StyledImg = styled.img< { isFocused : boolean} >`
    opacity: ${({isFocused})=>(isFocused?0.5:0.2)};
    height: 50%;
    transform: translateX(2px);
    transition: opacity 0.3s ease;
    margin-right:1rem;
`;

const StyledInput = styled(Inputs)`
    width: 7rem;

        &::placeholder {
        color: rgba(0, 0, 0, 0.5);
        transition: color 0.3s ease;
    }

    &:focus::placeholder {
        color: rgba(0, 0, 0, 1);
    }

    &:hover::placeholder {
        color: rgba(0, 0, 0, 1);
    
`

const StyledDiv = styled.form<{isFocused:boolean}>`
    width: 12rem;
    height: 2.4rem;
    box-sizing: border-box;
    border: ${({isFocused})=>(isFocused? '0.15rem solid rgba(0,0,0,0.6)' : '0.15rem solid rgba(0,0,0,0.2)')};
    border-radius: 1.5rem;
    display:flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    padding-left: 1rem;
    padding-right: 1rem;
    transition: box-shadow 0.2s, border 0.2s;
    position:relative;
    box-shadow: ${({isFocused})=>(isFocused? '0rem 0.2rem 0.25rem rgba(0,0,0,0.1)':'none')};

    &:hover {
        border: 0.15rem solid rgba(0,0,0,0.6);
        box-shadow: 0rem 0.2rem 0.25rem rgba(0,0,0,0.1);

        ${StyledImg} {
            opacity: 0.6;
        }

        ${StyledInput}::placeholder {
            color: rgba(0, 0, 0, 1);
        }
    }
`;

const Modals = styled.div<{isFilled:boolean, isFocused:boolean}>`
    width: 20rem; 
    height: ${({isFilled, isFocused})=>(isFilled && isFocused?'20rem;':'10rem')};
    border: 0.15rem solid rgba(0,0,0,0.6);
    border-radius: 1.5rem;
    position: absolute;
    z-index:2;
    top: 3rem;
    right: 0rem;
    box-shadow: 0.2rem 0.4rem 0.5rem rgba(0,0,0,0.1);
    opacity: ${({isFilled, isFocused})=>(isFilled && isFocused?'1':'0')};
    transition: opacity 0.2s ease, height 0.5s ease;
    pointer-events: ${({isFilled, isFocused}) => (isFilled && isFocused? 'auto' : 'none')};
    display:flex;
    flex-direction: column;
    justify-contents: center;
    padding: 0.66rem 1.44rem;
`

const Results = styled.div`
    width: 100%;
    height: 3rem;
    display:flex;
    align-items: center;
`

const SearchBar = ({style}:SearchBarProps):JSX.Element => {

    const [isFocused, setIsFocused] = useState(false);
    
    const [isFilled, setIsFilled] = useState(false);
    
    const inputChecks = (e:React.FormEvent<HTMLInputElement>) => {
        setIsFilled(e.currentTarget.value != "");
    };

    return(
        <StyledDiv isFocused={isFocused}>
            <StyledImg isFocused={isFocused} src={SearchIcon} alt="검색아이콘" ></StyledImg>
            <StyledInput placeholder="검색어 입력" 
                onFocus={()=>setIsFocused(true)}
                onBlur={()=>
                    setIsFocused(false)}
                onInput={inputChecks}
                ></StyledInput>
            <Modals isFilled={isFilled} isFocused={isFocused}>
                <Results>
                <StyledImg isFocused={isFocused} src={SearchIcon} alt="검색아이콘" ></StyledImg>
                     게시글 결과 1번</Results>
                <Results>
                <StyledImg isFocused={isFocused} src={SearchIcon} alt="검색아이콘" ></StyledImg>
                    게시글 결과 2번 게시글 결과</Results>
                <Results>
                <StyledImg isFocused={isFocused} src={SearchIcon} alt="검색아이콘" ></StyledImg>
                    게시글 결과 3번 게시글</Results>
                <Results>
                <StyledImg isFocused={isFocused} src={SearchIcon} alt="검색아이콘" ></StyledImg>
                    게시글 결과 4번</Results>
            </Modals>
        </StyledDiv>
    )
}


export default SearchBar;