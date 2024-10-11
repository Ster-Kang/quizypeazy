import React from 'react';
import Layout from '../../components/layouts/Layout';
import Header from '../../components/layouts/Header';
import Footer from '../../components/layouts/Footer';

const CreateQuiz: React.FC = () => {
    return (
        <>
            <Header/>
            <Layout>
                <main style={{
                    marginTop:'2rem',
                    width:'100%',
                    display:'flex',
                    alignItems:'flex-start',
                    justifyContent:'center',
                    flexDirection:'column'
                }}>
                    <h1 style={{}}>
                        문제 작성
                    </h1>
                    
                </main>
            </Layout>
            <Footer/>
        </>
    )
}

export default CreateQuiz;