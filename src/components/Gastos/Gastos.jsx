import { PieChart } from '@mui/x-charts/PieChart';

import './Gastos.css'
import { useState } from 'react';

import Anadir from './Añadir/Anadir';

function Gastos() {

    const [anadir, setAnadir] = useState(false);
    const [admin, setAdmin] = useState(false);
    const [analisis, setAnalisis] = useState(false);

    function handlerClickAnadir() {
        setAnadir(!anadir);

        if(anadir == true) {
            setAdmin(admin)
            setAnalisis(analisis)
        }
    }

    function handlerClickAdmin() {
        setAdmin(!admin);
        if(admin == true) {
            setAnadir(anadir)
            setAnalisis(analisis)
        }
    }

    function handlerClickAnalisis() {
        setAnalisis(!analisis);
        if(analisis == true) {
            setAdmin(admin)
            setAnadir(anadir)
        }
    }

    return(
        <>
        <div className="analisis-app">
            <header className='header-app'>
                <div className="menu-app">
                    <nav className='nav-app'>
                        <ul>
                            <li className='li-añadir' onClick={handlerClickAnadir}><a href="#">Añadir</a></li>
                            <li className='li-admin' onClick={handlerClickAdmin}><a href="#">Administrar</a></li>
                            <li className='li-analisis' onClick={handlerClickAnalisis}><a href="#">Análisis</a></li>
                        </ul>
                    </nav>
                </div>
            </header>
        </div>

        {
            (anadir == true) ? (
                <Anadir/>
            ) : (
                (admin == true) ? (
                    <div>B</div>
                ) : (
                    (analisis == true) ? (
                        <div>C</div>
                    ) : ''
                )
            )
        }
        </>
    )
}

export default Gastos;