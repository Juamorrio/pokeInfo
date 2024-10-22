import Zekrom from '../img/zekrom.gif';
import './Inicio.css';

function Inicio() {
    return (
      <div className="fondo">
        <div className='linea1'>
        </div>
        <div className='center'>
          <div className='zekromContainer'>
            <img src={Zekrom}></img>
            <button class="inicioButton"
             onClick={() => window.location.href = "/Index"}>
                    <span>
                        Start 
                    </span>
            </button>
          </div>
        </div>
        <div className='linea2'>
        </div>
      </div>
    );
  }
  
  export default Inicio;