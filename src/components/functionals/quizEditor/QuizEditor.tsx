import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import Inputs from "../../elements/Inputs";

interface QuizEditorProps {

}

const Layout = styled.form`
    width: 80%;
    height: calc( 100vh - 13.5rem );
`

const QuizEditor = ({}:QuizEditorProps):JSX.Element => {
    const [hoveredCategory, setHoveredCategory] = useState(false);
    const [hoveredTitle, setHoveredTitle] = useState(false);

    return(
        <Layout>
            <h2>

            </h2>
            <Inputs
                onMouseEnter={() => setHoveredCategory(true)}
                onMouseLeave={() => setHoveredCategory(false)}
                placeholder="문제 카테고리 입력"
                style={{
                    width: '7.5rem',
                    border: hoveredCategory 
                    ? '0.2rem solid rgba(0,0,0,0.6)' : '0.2rem solid rgba(0,0,0,0.2)',
                    padding: '0.66rem 1.2rem',
                    borderRadius: '2rem', 
                    "--hovered-placeholder-color": hoveredCategory
                    ? "rgba(0,0,0,0.6)"
                    : "rgba(0,0,0,0.2)",
                    marginRight: '1rem'
                }}
                isolated={true}
            ></Inputs>          
            <Inputs
                onMouseEnter={() => setHoveredTitle(true)}
                onMouseLeave={() => setHoveredTitle(false)}
                placeholder="문제 제목 입력"
                style={{
                    width: '20rem',
                    border: hoveredTitle 
                    ? '0.2rem solid rgba(0,0,0,0.6)' : '0.2rem solid rgba(0,0,0,0.2)',
                    padding: '0.66rem 1.2rem',
                    borderRadius: '2rem', 
                    "--hovered-placeholder-color": hoveredTitle
                    ? "rgba(0,0,0,0.6)"
                    : "rgba(0,0,0,0.2)",
                }}
                isolated={true}
            ></Inputs>

        </Layout>
    )
};

export default QuizEditor;