import './Secciones.css'
import descanso from '../../../assets/descanso.svg'


function Seccion1() {
    return(
        <>
        <section className='seccion_1'>
            <div className='texto1'>
                    <h1 className='parrafo'><span className="a">Relajate,</span>
                        <br />
                        <span className="b">nosotros hacemos</span>
                        <br />
                    <span className="c">el resto</span>
                </h1>
            </div>
            <img src={descanso} alt="" className='descanso'/>
        </section>
        </>
    )
}

export default Seccion1;