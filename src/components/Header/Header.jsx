import './Header.css';
import { Link } from "react-router-dom";

import BurguerMenu from '../../assets/menu.png';
import { display } from '@mui/system';

import { useState } from 'react';

function Header() {
    window.addEventListener("scroll", function() {
        var header = this.document.querySelector("header");
        header.classList.toggle("abajo", this.window.scrollY>0);
    })

    const [clicked, setClicked] = useState(false)

    function handleClick() {
        setClicked(!clicked)
    }

    return(
        <>
        <header className='header'>
            <div className='toogle-menu' style={{height: "80px"}} onClick={handleClick}>
                <img src={BurguerMenu} alt="" style={{width: "40px", height: "40px", position: "absolute", right: "2.5%", top: "20%"}}/>
            </div>
            <div className={`menu ${clicked ? 'activo' : ''}`}>
                <h1 className='nombre'><a href="#">OnlyMove</a></h1>
                <nav>
                    <ul>
                        <li className='distancia1'><a href="#">Sobre</a></li>
                        <li><a href="#">Servicios</a></li>
                        <li><a href="#">Contactos</a></li>
                        <li><a href="#">Registro</a></li>
                    </ul>
                </nav>
            </div>
        </header>
        </>
    )
}

export default Header;