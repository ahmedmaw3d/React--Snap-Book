import snapbooks from '../../image/snapbooks.svg';
import { FaBars } from "react-icons/fa";

const Header = () => {
    return (
        <div className="header sticky-top bg-white py-4">
            <div className="row">
                <div className="col-lg">
                    <img src={snapbooks} alt="" />
                </div>
                <div className="col-lg">
                    <div className='toggle-menu'>
                        <FaBars />
                    </div>
                    <span>Send faktura nå!</span>
                </div>
                <div className="col-lg">
                    <button>Prov gratis</button>
                </div>
            </div>
        </div>
    )
}
export default Header;