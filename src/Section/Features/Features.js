import { FaCalendarAlt } from "react-icons/fa";
import { HiOutlineCog6Tooth } from "react-icons/hi2";
import { FaHandHoldingUsd } from "react-icons/fa";
import "./features.css";

const Features = () => {
    return (
        <div>
            <div className="features text-center">
                <div className="container">
                    <div className=" d-flex justify-content-between  mt-5">
                        <div className="col-sm-3 col-lg-3 ">
                            <div style={{ backgroundColor: "#B8DDB6" }} className='i mt-5'>
                                <div className="icon ">
                                    < FaCalendarAlt size={50} />
                                </div>
                            </div>
                            <h3>Alt på ett sted</h3>
                            <p>Regnskap, faktura, timer og lønn. Alt du trenger på ett sted, uten stress
                            </p>
                        </div>
                        <div className="elementor-icon mt-5">
                            <svg xmlns="http://www.w3.org/2000/svg" width="100" height="8" viewBox="0 0 187 8" fill="none">
                                <circle cx="4" cy="4" r="3.5" fill="white" stroke="#171E44"></circle>
                                <circle cx="183" cy="4" r="3.5" fill="white" stroke="#171E44"></circle>
                                <line x1="8" y1="3.5" x2="180" y2="3.5" stroke="black" stroke-dasharray="2 2"></line>
                            </svg>
                        </div>
                        <div className="col-sm-3 col-lg-3 ">
                            <div style={{ backgroundColor: "#FEF0C2" }} className='i mt-5'>
                                <HiOutlineCog6Tooth size={50} />
                            </div>
                            <h3>Mindre knot, mer fritid</h3>
                            <p>La vår smarte hjelper ta seg av tallene, så kan du ta deg en kaffepause
                            </p>
                        </div>
                        <div className="elementor-icon mt-5">
                            <svg xmlns="http://www.w3.org/2000/svg" width="100" height="8" viewBox="0 0 187 8" fill="none">
                                <circle cx="4" cy="4" r="3.5" fill="white" stroke="#171E44"></circle>
                                <circle cx="183" cy="4" r="3.5" fill="white" stroke="#171E44"></circle>
                                <line x1="8" y1="3.5" x2="180" y2="3.5" stroke="black" stroke-dasharray="2 2"></line>
                            </svg>
                        </div>
                        <div className="col-sm-3 col-lg-3 ">
                            <div style={{ backgroundColor: " #D8EEF2" }} className='i mt-5'>
                                <FaHandHoldingUsd size={50} />
                            </div>
                            <h3>Styr unna feilene</h3>
                            <p>Vår AI passer på så du slipper småfeil og hodepine. Penger og regnskap i trygge hender
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default Features;