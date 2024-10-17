import styled from "styled-components"
import SearchIcon from "../../img/search-icon.svg"

interface ModalsProps extends React.HTMLAttributes<HTMLDivElement> {
    isFilled: boolean;
    isFocused: boolean;
    children?: React.ReactNode;
}

const ModalsContainer = styled.div<{isFilled:boolean, isFocused:boolean}>`
    width: 20rem; 
    height: ${({isFilled, isFocused})=>(isFilled && isFocused?'20rem;':'10rem')};
    border: 0.15rem solid rgba(0,0,0,0.6);
    border-radius: 1.5rem;
    box-shadow: 0.2rem 0.4rem 0.5rem rgba(0,0,0,0.1);
    opacity: ${({isFilled, isFocused})=>(isFilled && isFocused?'1':'0')};
    transition: opacity 0.2s ease, height 0.5s ease;
    pointer-events: ${({isFilled, isFocused}) => (isFilled && isFocused? 'auto' : 'none')};
    position:absolute;
    display:flex;
    flex-direction: column;
    justify-contents: center;
    padding: 0.66rem 1.44rem;
`

const Results = styled.div<{}>`
    width: 100%;
    height: 3rem;
    display:flex;
    align-items: center;
`

const StyledImg = styled.img< { isFocused : boolean} >`
    opacity: ${({isFocused})=>(isFocused?0.5:0.2)};
    height: 50%;
    transform: translateX(2px);
    transition: opacity 0.3s ease;
    margin-right:1rem;
`;


const Modals = ({
    isFilled, 
    isFocused,
    children,
    ...props
}:ModalsProps):JSX.Element => {
    return (
        <ModalsContainer isFocused={isFocused} isFilled={isFilled}>
                <Results>
                    <StyledImg isFocused={isFocused} src={SearchIcon} alt="검색아이콘" ></StyledImg>
                게시글 결과 1번
                </Results>
                <Results>
                    <StyledImg isFocused={isFocused} src={SearchIcon} alt="검색아이콘" ></StyledImg>
                게시글 결과 2번 게시글 결과</Results>
                <Results>
                    <StyledImg isFocused={isFocused} src={SearchIcon} alt="검색아이콘" ></StyledImg>
                게시글 결과 3번 게시글</Results>
                <Results>
                    <StyledImg isFocused={isFocused} src={SearchIcon} alt="검색아이콘" ></StyledImg>
                게시글 결과 4번</Results>
        </ModalsContainer>
    )
}

export default Modals;
