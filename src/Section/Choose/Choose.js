import { FaApple } from "react-icons/fa";
import { FaGooglePlay } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa6";
import snapbook from '../../image/snapbooks-forside.webp';
import "./choose.css"
const Choose = () => {
    return (
        <div className="choose-us">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md">
                        <div className="left">
                            <h2 className="h1">Regnskap kan være enkelt – med litt AI-magi</h2>
                            <button>Prov gratis</button>
                            <p>Sammen skal vi 100% automatisere regnskapet ditt</p>
                        </div>
                    </div>
                    <div className="col-md">
                        <div className="right">
                            <div className="image">
                                <img src={snapbook} alt="" />
                            </div>
                            <div className="link">
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
                    <div className="ico">
                        <FaArrowDown />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Choose;