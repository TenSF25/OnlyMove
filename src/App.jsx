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

import { ubicacionUsuario } from './helpers/ubicacionUsuario'

function App() {

  const [lat, setLat] = useState("");
  const [lng, setLong] = useState("");

  if(!navigator.geolocation) {
    alert("El navegador no soporta geolocalización")
    return;
  }

  navigator.geolocation.getCurrentPosition(
    (position) => {
      setLat(position.coords.latitude)
      setLong(position.coords.longitude)

      console.log(lat, lng)

      console.log('Mi ubicacion:', `lat: ${position.coords.latitude}, lng: ${position.coords.longitude}`);
    },
    (err) => {
    alert('Error al obtener la ubicación')
  })

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