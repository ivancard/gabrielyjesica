import "./confirmation.scss";
import watercolorOv from "../assets/img/watercolor.jpg";

export const Confirmation = () => {
  return (
    <section
      className="confirmation-container"
      style={{ backgroundImage: `url(${watercolorOv})` }}
    >
      <h2>Confirmar asistencia</h2>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="57.692"
        height="0.5"
        viewBox="0 0 57.692 0.5"
      >
        <path
          id="Trazado_1"
          data-name="Trazado 1"
          d="M-33.846,111.538H23.846"
          transform="translate(33.846 -111.288)"
          fill="none"
          stroke="#707070"
          strokeWidth="0.5"
        />
      </svg>

      <div className="form-container">
        <form action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSdBqbLEcI6-qEhGVQ_CMmpfMJz2e_Gdo3zghn5yqwnZxREJWA/formResponse">
          <input
            type="text"
            name="entry.1995556633"
            id="name"
            placeholder="Igresá tu nombre y apellido"
            required
            autoComplete="off"
          />
          <input type="submit" value="Confirmar" />
        </form>
      </div>
    </section>
  );
};
