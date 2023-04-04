import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
const Header = () => {
  return (
    <ContenedorHearder>
    <Titulo>Blog de Lenguajes de Programación</Titulo>
    <Menu>
      <NavLink to='/'>Inicio</NavLink>
      <NavLink to='/blog'>Blog</NavLink>
      <NavLink to='/acerca-de'>Contacto</NavLink>
    </Menu>
  </ContenedorHearder>
  )
}

export default Header

const ContenedorHearder = styled.header`
text-align: center;
margin-bottom: 40px;
magin-top: 40px;
`

const Titulo = styled.h1`
  font-size: 26px;
  margin-bottom: 20px;
  text-transform: uppercase;
  color: #187A46;
`
const Menu = styled.nav`
a {
  text-decoration: none;
  color: #165158;
  margin: 0 25px;

}
a:hover{
  color: #165158;
  background-color: #526DF2;
}
a:active{
  border-bottom: 2px solid #165158;
  padding-bottom: 5px;

}
`
