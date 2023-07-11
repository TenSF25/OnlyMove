import proximamente from '../../assets/proximamente.svg'
import './Proximamente.css'

function Proximamente() {
    return(
        <>
            <div className="container-prox">
                <div className="prox">
                    <h1 className='h1-prox'>Proximamente...</h1>
                    <img src={proximamente} alt="" className="imgProx" />
                </div>
            </div>
        </>
    )
}

export default Proximamente;