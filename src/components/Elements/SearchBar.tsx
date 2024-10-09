import styled from "styled-components";
import React, {useState}  from 'react';
import SearchIcon from '../../img/search-icon.svg'
import Inputs from "./Inputs";

interface SearchBarProps {
    style?: React.CSSProperties;
};

const StyledDiv = styled.form`
    width: 15rem;
    height: 2.4rem;
    box-sizing: border-box;
    border: 0.1rem solid rgba(0,0,0,0.6);
    border-radius: 1.5rem;
    display:flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    padding-left: 1rem;
    padding-right: 1rem;
    transition: box-shadow 0.2s;

    &:hover {
        box-shadow: 0rem 0.2rem 0.25rem rgba(0,0,0,0.1);
    }

    // &:hover img {
    //     opacity: 0.6;
    // }
`;

const StyledImg = styled.img`
    opacity: 0.6;
    height: 50%;
    transform: translateX(2px);
    transition: opacity 0.3s ease;
`;

const SearchBar = ({style}:SearchBarProps):JSX.Element => {
    const [Hovered, setHovered] = useState(false);

    return(
        <StyledDiv
            onMouseEnter={()=>setHovered(true)}
            onMouseLeave={()=>setHovered(false)}
            >
            <Inputs placeholder="검색어를 입력해주세요." 
                style={{
                    marginRight:'auto',
                    "--hovered-placeholder-color": Hovered ? "rgba(0, 0, 0, 0.6)" : "rgba(0,0,0,0.3)"
                }}></Inputs>
            <StyledImg src={SearchIcon} alt="검색아이콘" ></StyledImg>
        </StyledDiv>
    )
}

export default SearchBar;