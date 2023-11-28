import { FaApple } from "react-icons/fa";
import { FaGooglePlay } from "react-icons/fa";
import "./footer.css";
const Footer = () => {
    return (
        <div>
            <div className="footer d-flex justify-content-between mt-5">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="box">
                                <h3>SnapBooks</h3>
                                <p>
                                    Automatisert regnskap for småbedrifter
                                </p>
                            </div>
                        </div>
                        <div className="col">
                            <div className="box">
                                <h2>SELSKAP</h2>
                                <a href="#">Hjem</a>
                                <a href="#">Kontakt oss</a>
                            </div>
                        </div>
                        <div className="col">
                            <div className="box">
                                <div className="line">
                                    <h2>ADRESSE</h2>
                                    <a href="#">hei@snapbooks.no</a>
                                    <h1>Christian Michelsensgate 4</h1>
                                    <h1>5012 Bergen, Norway</h1>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="box">
                                <div className="line">
                                    <h2>SOSIALT</h2>
                                    <a href="#">Facebook</a>
                                    <a href="#">LinkedIn</a>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="boxs">
                                <div className="link">
                                    <h2>LAST NED APP</h2>
                                    <div className="app">
                                        <div>
                                            <FaApple size={30} />
                                        </div>
                                        <div className="last">
                                            <h1>Last ned pa</h1>
                                            <a href="#">App Stor</a>
                                        </div>
                                    </div>
                                    <div className="google">
                                        <FaGooglePlay size={30} />
                                        <div className="last">
                                            <h1>Last ned pa</h1>
                                            <a href="#">Google pLAY</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Footer;