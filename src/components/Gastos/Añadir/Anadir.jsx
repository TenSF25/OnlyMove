import './Anadir.css'
import add from '../../../assets/add.svg'

import Valores from './Valores/Valores';
import { useState } from 'react';

function Anadir() {

    const [serv, setServ] = useState(false);
    const [sc, setSc] = useState(false);
    const [sup, setSup] = useState(false);
    const [rb, setRb] = useState(false);

    function handlerServ() {
        setServ(!serv)
    }

    function handlerSc() {
        setSc(!sc)
    }

    function handlerSup() {
        setSup(!sup)
    }

    function handlerRb() {
        setRb(!rb)
    }

    return(
        <>
            <div className="añadir-app">
                <div className="añadir-gastos">
                    <div className="añadir-categorias">
                        <div className="añadir-servicios">
                            <h1 className="h1-gastos">Servicios</h1>
                            <img src={add} alt="" className='imgAdd-serv' onClick={handlerServ}/>
                        </div>
                        {serv == true && <Valores/>}
                    </div>
                    <div className="añadir-categorias">
                        <div className="añadir-sinCategoria">
                            <h1 className="h1-gastos">Sin categoría</h1>
                            <img src={add} alt="" className='imgAdd-sc' onClick={handlerSc}/>
                        </div>
                        {sc == true && <Valores/>}
                    </div>
                    <div className="añadir-categorias">
                        <div className="añadir-supermercado">
                            <h1 className="h1-gastos">Supermercado</h1>
                            <img src={add} alt="" className='imgAdd-super' onClick={handlerSup}/>
                        </div>
                        {sup == true && <Valores/>}
                    </div>
                    <div className="añadir-categorias">
                        <div className="añadir-restaurantes">
                            <h1 className="h1-gastos">Restaurantes y bares</h1>
                            <img src={add} alt="" className='imgAdd-rest' onClick={handlerRb}/>
                        </div>
                        {rb == true && <Valores/>}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Anadir;