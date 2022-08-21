import "../components/location.scss";

export const Location = () => {
  return (
    <section className="location-date-container">
      <h2>Donde y Cuando</h2>
      <p>9 de Setptiembre a las 19:00hs</p>
      <p>En Bucarest 557 - Villa Centenario</p>
      <p>Iglesia "Hay vida en Jesus"</p>

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3279.46054045909!2d-58.433359499999995!3d-34.71878410000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccdb13cae66d5%3A0xc15e1fe249192b24!2sBucarest%20557%2C%20B1821AEQ%20Villa%20Centenario%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1660249229448!5m2!1ses!2sar"
        //width="600"
        className="map-iframe"
        //height="450"
        style={{
          marginTop: "20px",
          border: 0,
          width: "90%",
          height: "200px",
          borderRadius: "10px",
        }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </section>
  );
};
