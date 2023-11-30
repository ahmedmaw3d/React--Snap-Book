import { FaCheck } from "react-icons/fa6";
import kvittering from '../../image/kvittering_app.webp';
import regnskap from '../../image/sendfaktura.webp';
import sendfaktura from '../../image/regnskap_app.webp';
import chat from '../../image/chat_app.webp';
import "./phone.css";

const ContainerPhone = () => {
  return (
    <div className="container-phone text-conter mt-5">
      <div className="container">
        <div className="kvittering">
          <h1>Last opp bilag og få de automatisk ført</h1>
          <img src={kvittering} alt="" />
        </div>

        <div className="kvittering">
          <img src={chat} alt="" />
          <h1>Svar på spørsmål fra roboten i appen slik at bokføringen går som en drøm</h1>
        </div>

        <div className="kvittering">
          <h1>Send og betal faktura på farten</h1>

          <img src={sendfaktura} alt="" />
        </div>

        <div className="kvittering">
          <img src={regnskap} alt="" />
          <h1>Oppdatert regnskap hver dag</h1>
        </div>

        <div className="background-shapes">
          <div className="orange_circle_max"></div>
          <div className="black_circle_min"></div>
          <div className="orange_circle_min"></div>
          <div className="green_circle_min"></div>
          <div className="blue_circle_min"></div>
          <div className="yellow_circle_max"></div>
          <div className="pink_circle_min"></div>

        </div>
      </div>
      <p>Funksjoner og priser helt uten overraskelser</p>

      <div className="functions_in_snap_books-table">
        <div className="h2 bg-white ">AI Regnskapsmodul inkl 15 bilag</div>
        <div className="i bg-white ">
          <FaCheck color="green" />
        </div>
        <div className="h1 bg-white ">395,- pr mnd</div>

        <div className="h2 ">Automatisk bokføring over 15 bilag</div>
        <div className="i">
          <FaCheck color="green" />
        </div>
        <div className="h1">10,- pr bilag</div>

        <div className="h2 bg-white ">Fakturamodul</div>
        <div className="i bg-white ">
          <FaCheck color="green" />
        </div>
        <div className="h1 bg-white">8,- pr faktura</div>

        <div className="h2">Lønnsmodul</div>
        <div className="i ">
          <FaCheck color="green" />
        </div>
        <div className="h1 ">95,- pr ansatt</div>

        <div className="h2 bg-white">MVA</div>
        <div className="i bg-white">
          <FaCheck color="green" />
        </div>
        <div className="h1 bg-white">Inkludert</div>

        <div className="h2">Årsoppgjør og skattemelding</div>
        <div className="i ">
          <FaCheck color="green" />
        </div>
        <div className="h1">1990,- pr år</div>

        <div className="h2 bg-white">Integrasjoner (Bank, kasse, Altinn ++)</div>
        <div className="i bg-white">
          <FaCheck color="green" />
        </div>
        <div className="h1 bg-white">Inkludert</div>

        <div className="h2">Fri support</div>
        <div className="i ">
          <FaCheck color="green" />
        </div>
        <div className="h1">Inkludert</div>

        <div className="h2 bg-white">Rapporter</div>
        <div className="i bg-white">
          <FaCheck color="green" />
        </div>
        <div className="h1 bg-white">Inkludert</div>

        <div className="h2">Prosjekt og timeføring</div>
        <div className="i ">
          <FaCheck color="green" />
        </div>
        <div className="h1">95,- pr ansatt</div>

        <div className="h2 bg-white">Åpent API</div>
        <div className="i bg-white">
          <FaCheck color="green" />
        </div>
        <div className="h1 bg-white">Inkludert</div>
      </div>
    </div>
  )
}
export default ContainerPhone;