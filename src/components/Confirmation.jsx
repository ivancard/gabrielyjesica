import "./confirmation.scss";
export const Confirmation = () => {
  return (
    <section className="confirmation-container">
      <h2>Confirmar asistencia</h2>
      <div className="form-container">
        {" "}
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSdBqbLEcI6-qEhGVQ_CMmpfMJz2e_Gdo3zghn5yqwnZxREJWA/viewform?embedded=true"
          width="100%"
          height="100%"
          frameborder="0"
          marginheight="0"
          marginwidth="0"
        >
          Cargando…
        </iframe>
      </div>
    </section>
  );
};
