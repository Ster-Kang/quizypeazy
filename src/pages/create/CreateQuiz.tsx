import React from 'react';
import Layout from '../../components/layouts/Layout';
import Header from '../../components/layouts/Header';
import Footer from '../../components/layouts/Footer';
import CanvasEditor from '../../components/functionals/canvasEditor/CanvasEditor';
import ToolBar from '../../components/functionals/canvasEditor/ToolBar';

const CreateQuiz: React.FC = () => {
    return (
        <>
            <Header/>
            <Layout>
                <main style={{
                    marginTop:'2rem',
                    width:'100%',
                    display:'flex',
                    alignItems:'center',
                    flexDirection:'column'
                }}>
                    <ToolBar/>
                    <CanvasEditor/>
                </main>
            </Layout>
            <Footer/>
        </>
    )
}

export default CreateQuiz;