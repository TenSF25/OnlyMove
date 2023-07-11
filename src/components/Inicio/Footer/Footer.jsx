import './Footer.css'

function Footer() {
    return(
        <>
        <div className="container">
            <div className="contactos">
            <footer>Contactos</footer>
            <ul>
                <li>+1234556677889</li>
                <li>onlymove@example.com</li>
            </ul>
            </div>
            <div className="ubicacion">
                <footer>Ubicación</footer>
                <h4>3721 Single Street</h4>
                <h4>Quincy, MA 02169</h4>
            </div>
            <div className="horarios">
                <footer>Horarios</footer>
                <h4>I-V         9:00-18:00</h4>
                <h4>VI - VII   Closed</h4>
            </div>
        </div>
        </>
    )
}

export default Footer;