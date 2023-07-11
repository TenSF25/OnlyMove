import './Navegacion.css';
import { useState } from 'react';

import BurguerMenu from '../../assets/menu.png';

import { Outlet, Link } from 'react-router-dom';

function Navegacion() {
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
        <header className='navegacion'>
            <div className={`toogle-menu2 ${clicked ? 'open' : ''}`} style={{height: "80px"}} onClick={handleClick}>
                <img src={BurguerMenu} alt="" style={{width: "40px", height: "40px", position: "absolute", right: "2.5%", top: "20%"}}/>
            </div>
            <div className={`menu-navegacion ${clicked ? 'active' : ''}`}>
                <h1 className='nombre-navegacion'><Link to="/OnlyMove">OnlyMove</Link></h1>
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/Outfits">Outfits</Link></li>
                        <li className='gast'><Link to="/Gastos">Gastos</Link></li>
                        <li><Link to="/Calendario">Calendario</Link></li>
                        <li><Link to="/Chat">Chat</Link></li>
                    </ul>
                    <ul>
                        <li className="icono">
                                <Link to="/Perfil"><img src="https://static.vecteezy.com/system/resources/thumbnails/005/544/718/small/profile-icon-design-free-vector.jpg" alt="" className="perfil" /></Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
        <Outlet />
        </>
    )
}

export default Navegacion;