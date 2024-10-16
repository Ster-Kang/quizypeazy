import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import Inputs from "../../Elements/Inputs";

interface QuizEditorProps {

}

const Layout = styled.form`
    width: 80%;
    height: calc( 100vh - 13.5rem );
`

const CategoryInput = styled(Inputs)`
    border: 0.2rem solid rgba(0, 0, 0, 0.2);
    border-radius: 1.5rem;
    width: 8rem;
    padding: 0.66rem 1.2rem;
    border-radius: 2rem;
    margin-right: 1.5rem;
    transition: border 0.2s, box-shadow 0.2s;

    &:hover {
        border: 0.2rem solid rgba(0, 0, 0, 0.6);
        box-shadow: 0rem 0.2rem 0.25rem rgba(0,0,0,0.1);
    }

    &:hover::placeholder {
        color: rgba(0,0,0,1);
    }

    &:focus {
        border: 0.2rem solid rgba(0, 0, 0, 0.6);
        box-shadow: 0rem 0.2rem 0.25rem rgba(0,0,0,0.1);
    }

    &:focus::placeholder {
        color:rgba(0,0,0,1)
    }
`

const SubjectInput = styled(Inputs)`
    border: 0.2rem solid rgba(0, 0, 0, 0.2);
    border-radius: 1.5rem;
    width: 12rem;
    padding: 0.66rem 1.2rem;
    border-radius: 2rem;
    margin-right: 1rem;
    transition: border 0.2s, box-shadow 0.2s;

    &:hover {
        border: 0.2rem solid rgba(0, 0, 0, 0.6);
        box-shadow: 0rem 0.2rem 0.25rem rgba(0,0,0,0.1);
    }

    &:hover::placeholder {
        color: rgba(0,0,0,1);
    }

    &:focus {
        border: 0.2rem solid rgba(0, 0, 0, 0.6);
        box-shadow: 0rem 0.2rem 0.25rem rgba(0,0,0,0.1);
    }

    &:focus::placeholder {
        color:rgba(0,0,0,1)
    }
`

const QuizMetaDataInputs = styled.section`

`

const QuizMainData = styled.div`

`

const QuizEditor = ({}:QuizEditorProps):JSX.Element => {

    return(
        <Layout>
            <QuizMetaDataInputs>
                <CategoryInput
                    placeholder="문제 카테고리 입력"
                ></CategoryInput>          
                <SubjectInput
                    placeholder="문제 제목 입력"
                ></SubjectInput>
            </QuizMetaDataInputs>
            <QuizMainData>
                
            </QuizMainData>
        </Layout>
    )
};

export default QuizEditor;