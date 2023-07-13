import { useEffect, useReducer, useState } from 'react'
import './App.css'

import Main from './components/Inicio/Main/Main'

import Home from './components/Weather/Home/Home'
import Navegacion from './components/Header/Navegacion'

import Perfil from './components/Perfil/Perfil'

import Calendario from './components/Calendario/Calendario'

import Gastos from './components/Gastos/Gastos'
import Remeras from './components/Perfil/Prendas/Remeras/Remeras'

import Proximamente from './components/Proximamente/Proximamente'

import { Routes, Route } from 'react-router-dom';

import geoLocalizacion from './components/Weather/Api/geoLocalizacion'

function App() {

  geoLocalizacion();

  return(
    <>
      <Routes>
        <Route path="/" element={<Navegacion/>}>
          <Route path="/" element={<Home/>} />
          <Route path="/OnlyMove" element={<Main/>} />
          <Route path="/Outfits" element={<Proximamente/>} />
          <Route path="/Gastos" element={<Gastos/>} />
          <Route path="/Calendario" element={<Calendario/>} />
          <Route path="/Chat" element={<Proximamente/>} />
          <Route path="/Perfil" element={<Perfil/>} />
        </Route>
      </Routes>
    </>
  )
}

export default App