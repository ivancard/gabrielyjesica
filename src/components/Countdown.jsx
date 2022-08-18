import "./countdown.scss";

export const Countdown = () => {
  return (
    <div className="countdown-container">
      <div className="countdown-placeholder">
        <div className="border">
          <h2>¿Cuanto Falta?</h2>
          <div className="countdown-cifras">
            <div className="item item-dia">
              <p>DIAS</p>
              <p>00</p>
            </div>
            <div className="item item-hora">
              <p>HORAS</p>
              <p>00</p>
            </div>
            <div className="item item-segundos">
              <p>SEGUNDOS</p>
              <p>00</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
