import './Perfil.css'

import { useState } from 'react';
import Remeras from './Prendas/Remeras/Remeras';
import Pantalones from './Prendas/Pantalones/Pantalones';
import Abrigo from './Prendas/Abrigo/Abrigo';
import Zapas from './Prendas/Zapatillas/Zapas';

function Perfil() {

    const [remeras, setRemeras] = useState(false);
    const [pantalones, setLompas] = useState(false)
    const [abrigo, setAbrigo] = useState(false);
    const [zapatillas, setZapatillas] = useState(false);

    function handlerClickRemeras() {
        setRemeras(!remeras)
        if(remeras == true) {
            setLompas(pantalones)
            setAbrigo(abrigo)
            setZapatillas(zapatillas)
        }
    }

    function handlerClickPantalones() {
        setLompas(!pantalones)
        if(pantalones == true) {
            setRemeras(remeras)
            setAbrigo(abrigo)
            setZapatillas(zapatillas)
        }
    }

    function handlerClickAbrigo() {
        setAbrigo(!abrigo)
        if(abrigo == true) {
            setRemeras(remeras)
            setLompas(pantalones)
            setZapatillas(zapatillas)
        }
    }

    function handlerClickZapatillas() {
        setZapatillas(!zapatillas);
        if(zapatillas == true) {
            setRemeras(remeras)
            setLompas(pantalones)
            setAbrigo(abrigo)
        }
    }

    return(
        <>
            <div className="perfil-container">
                <div className="datos">
                    <div className="img-container">
                        <img src="https://static.vecteezy.com/system/resources/thumbnails/005/544/718/small/profile-icon-design-free-vector.jpg" alt="" className="imgPerfil"/>
                    </div>
                    <div className="personales">
                        <h1 className='nombre-perfil'>Thiago Filippo</h1>
                        <h4 className='edad-perfil'>16 años</h4>
                    </div>
                    <div className="emergencia">
                        <h1 className='titulo-emergencia'>Datos de emergencia</h1>
                        <div className="emergencia-datos">
                            <div className="fn">
                                <h3 className='nacimiento'>Fecha de nacimiento</h3>
                                <h5 className='fecha'>25 de abril 2007</h5>
                            </div>
                            <div className="gs">
                                <h3 className='g'>Grupo Sanguíneo</h3>
                                <h5 className='lg'>A+</h5>
                            </div>
                            <div className="ep">
                                <h3 className='eP'>Enfermedades Preexistentes</h3>
                                <h5 className='p'>Presíncope</h5>
                            </div>
                            <div className="lc">
                                <h3 className='lC'>Lista de contactos</h3>
                                <ul className="ul-contactos">
                                    <li className="li-contactos">+54 9 11 2345-5432</li>
                                    <li className="li-contactos">+54 9 11 9867-7689</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <hr />
                <div className='outfits-container'>
                    <div className="menu-outfits">
                        <nav className='nav-outfits'>
                            <ul>
                                <li className='li-remeras' onClick={handlerClickRemeras}><a href="#">Remeras</a></li>
                                <li className='li-pant' onClick={handlerClickPantalones}><a href="#">Pantalones</a></li>
                                <li className='li-abrigo' onClick={handlerClickAbrigo}><a href="#">Abrigo</a></li>
                                <li className='li-zapas' onClick={handlerClickZapatillas}><a href="#">Zapatillas</a></li>
                            </ul>
                        </nav>
                    </div>
                </div>
                {(remeras == true) ? (
                    <Remeras/>
                ) : (
                    (pantalones == true) ? (
                        <Pantalones/>
                    ) : (
                        (abrigo == true) ? (
                            <Abrigo/>
                        ) : (
                            (zapatillas == true) ? (
                                <Zapas/>
                             ) : ''
                        )
                    )
                )}
            </div>
        </>
    )
}

export default Perfil;