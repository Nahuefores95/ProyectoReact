import logo from './assets/img/Logo.jpeg'
import faceIcon from './assets/img/icono fb.jpg'
import instIcon from './assets/img/icono insta.jpg'
import linkIcon from './assets/img/icono linkedin.png'
import './assets/css/footer.css'

function Footer() {
    return(
        <footer className="container-fluid footer">
            <div className="row">
                <img className="col-lg-4 col-md-3 col-md-2 footer1" src={logo} alt="Logo Tienda" />
                <div className="col-lg-4 col-md-6 col-md-8 footer2">
                    <div className="footer4" id="iconofb">
                        <a title="Logo facebook" href="https://www.facebook.com/NahuePsico/"><img className="iconos" src={faceIcon} alt="Logo facebook" /></a>
                    </div>
                    <div className="footer4" id="iconoinst">
                        <a title="Logo instagram" href="https://www.instagram.com/chimi3d/"><img className="iconos" src={instIcon} alt="Logo instagram" /></a>
                    </div>
                    <div className="footer4" id="iconolink">
                        <a href="https://www.linkedin.com/in/gustavo-nahuel-forestieri-271702170/"><img className="iconos" src={linkIcon} alt="Logo linkedin" /></a>
                    </div>
                </div>
                <div className="col-lg-4 col-md-3 col-md-2 footer3">
                    <span>CHIMI 3D</span><br /><span>by</span><br /><span>Nahuel Forestieri &amp; Leandro Gross</span>
                </div>
            </div>
            
        </footer>
    );   
}

export default Footer;