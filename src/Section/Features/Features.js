import { FaCalendarAlt } from "react-icons/fa";
import { HiOutlineCog6Tooth } from "react-icons/hi2";
import { FaHandHoldingUsd } from "react-icons/fa";
import "./features.css";
const Features = () => {
    return (
        <div>
            <div className="features text-center">
                <div className="container">
                    <div className="row d-flex justify-content-between  mt-5">
                        <div className="col-sm-3 col-lg-3 ">
                            <div style={{ backgroundColor: "#B8DDB6" }} className='i'>
                                < FaCalendarAlt size={30} />
                            </div>
                            <h3>Alt på ett sted</h3>
                            <p>Regnskap, faktura, timer og lønn. Alt du trenger på ett sted, uten stress
                            </p>
                        </div>

                        <div className="col-sm-3 col-lg-3 ">
                            <div style={{ backgroundColor: "#FEF0C2" }} className='i'>
                                <HiOutlineCog6Tooth size={30} />
                            </div>
                            <h3>Mindre knot, mer fritid</h3>
                            <p>La vår smarte hjelper ta seg av tallene, så kan du ta deg en kaffepause
                            </p>
                        </div>

                        <div className="col-sm-3 col-lg-3 ">
                            <div style={{ backgroundColor: " #D8EEF2" }} className='i'>
                                <FaHandHoldingUsd size={30} />
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