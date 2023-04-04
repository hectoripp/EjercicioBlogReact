import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Inicio from './componentes/Inicio';
import Header from './componentes/Header';
import Blog from './componentes/Blog';
import AcercaDe from './componentes/AcercaDe';
import styled from 'styled-components';
import Post from './componentes/Post';
import Error404 from './componentes/Error404';

function App() {
  return (
    <BrowserRouter>
      <ContenedorPrincipal>
          <Header />
       
        <Main>
          <Routes>
            <Route path='/*'         element={<Error404 />}/>
            <Route path='/'          element={<Inicio />}/>
            <Route path='blog'       element={<Blog />}/>
            <Route path='/blog/:id'  element={<Post/>}/>
            <Route path='/acerca-de' element={<AcercaDe/>}/>
            
          </Routes>
        </Main>
      </ContenedorPrincipal>
    </BrowserRouter>
  );
}

const ContenedorPrincipal = styled.div`
padding: 20px;
width: 90%;
max-width: 1200px;
`

const Main = styled.main`
padding: 40px;
background-color: #fff;
border-radius: 15px;
box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.75);
`
export default App;
