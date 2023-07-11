import { useState } from 'react';
import registro from '../../../assets/registro.svg'
import './Secciones.css'


function Seccion3() {

    const [valores, setValores] = useState({
        nombre: String,
        email: String,
        contra: String
    })

    function handlerChange(e) {
        setValores({
            ...valores,
            [e.target.name] : e.target.value
        })
    }

    function handlerSubmit(e) {
        e.preventDefault()
        console.log(valores)

     if (valores.nombre === "Thiago" && valores.email === "thiagofilippo2504@gmail.com" && valores.contra === "1234") {
            console.log("Bienvenido")
        }
        else {
            console.log("Error")
        }
    }

    return(
        <>
            <section className="seccion_3">
                <div className='contenedor'>
                    <h1 className='h1-register'>Registrarse</h1>
                    <form className="formulario" onSubmit={handlerSubmit}>
                        <h3>Nombre</h3>
                        <input type="text" placeholder='Ingrese su nombre' onChange={handlerChange} name='nombre'/>
                        <br />
                        <h3>Email</h3>
                        <input type="text" className="email" placeholder='Ingrese su email' onChange={handlerChange} name='email'/>
                        <br />
                        <h3>Contraseña</h3>
                        <input type="text" className="contraseña" placeholder='****' onChange={handlerChange} name='contra'/>
                        <br />
                        <br />
                        <button id='boton'>Enviar</button>

                        {(valores.nombre === "Thiago" && valores.email === "thiagofilippo2504@gmail.com" && valores.contra === "1234") ?
                        <h1>Hola</h1>
                        :
                        <h1>Error</h1>
                        }
                    </form>
                    <img src={registro} alt="" className='img_reg'/>
                </div>
            </section>
        </>
    )
}

export default Seccion3;