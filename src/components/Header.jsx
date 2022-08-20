import "./header.scss";
import imgCouple from "../assets/img/couple4.jpg";

export const Header = () => {
  return (
    <header>
      <div className="img-title-container">
        <div
          className="imageHeader"
          style={{ backgroundImage: `url(${imgCouple})` }}
        ></div>
        <div className="titleHeader">
          <h3>Nuestra Boda</h3>
          <hr />
          <h1 className="titulo1">1- Gabriel & Jesica</h1>
          <h1 className="titulo2">2- Gabriel & Jesica</h1>
          <h1 className="titulo3">3- Gabriel & Jesica</h1>
        </div>
      </div>
    </header>
  );
};
