import React from 'react';
import Layout from '../../components/layouts/Layout';
import Header from '../../components/layouts/Header';
import Footer from '../../components/layouts/Footer';
import QuizEditor from '../../components/functionals/quizEditor/QuizEditor';
import styled from 'styled-components';

const Title = styled.h1`
    margin:0;
    
    &::after {
        content: '';
        display: block;
        width: 120%;
        height: 1rem;
        background-color: rgba(95, 245, 39, 0.8);
        transform: translateY(-1rem);
        position: relative;
        z-index:-10;
    }
`

const CreateQuiz: React.FC = () => (
    <>
        <Header />
        <Layout>
            <main style={{
                marginTop: '2rem',
                width: '100%',
                display: 'flex',
                alignItems: 'flex-start',
                justifyContent: 'center',
                flexDirection: 'column',
                paddingLeft: '1rem',
                paddingRight: '1rem'
            }}>
                <Title>
                    문제 작성
                </Title>
                <QuizEditor>
                
                </QuizEditor>                

            </main>
        </Layout>
        <Footer />
    </>
)

export default CreateQuiz;