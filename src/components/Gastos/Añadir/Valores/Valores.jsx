import './Valores.css'
import confirm from '../../../../assets/confirm.svg'
import { useState } from 'react';

function Valores() {
    const [conf, setConf] = useState(false);
    const [valor, setValores] = useState({
        nombre: String,
        value: Number
    })

    function handlerClick(e) {
        e.preventDefault();
        setConf(!conf);
    }

    function handlerChange(e) {
        setValores({
            [e.target.name]: e.target.value
        })
    }

    return(
        <>
        <div className="valores-app">
            <div className="inputs-val">
                <input type="text" className="valText" name="nombre" placeholder="Nombre" onChange={handlerChange}/>
                <input type="number" className="valNum" name="value" placeholder='Valor' onChange={handlerChange}/>
                <img src={confirm} alt="" className='imgConf' onClick={handlerClick}/>
            </div>

            {conf && (<h1>{valor.nombre}</h1>)}
            {/* {conf && (<h1>{valor.value}</h1>)} */}
        </div>
        </>
    )
}

export default Valores;