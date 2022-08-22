import "./header.scss";
import imgCouple from "../assets/img/couple4.jpg";
import watercolorOv from "../assets/img/watercolor.jpg";
import texture from "../assets/img/texture3.jpg";

export const Header = () => {
  return (
    <header>
      <div
        className="img-title-container"
        style={{ backgroundImage: `url(${watercolorOv})` }}
      >
        <div
          className="imageHeader"
          style={{ backgroundImage: `url(${imgCouple})` }}
        ></div>
        <div
          className="titleHeader"
          style={{ backgroundImage: `url(${texture})` }}
        >
          <h3>Nuestra Boda</h3>
          <hr />
          <h1 className="titulo1">
            <span className="gabriel">Gabriel</span> & Jesica
          </h1>
        </div>
      </div>
    </header>
  );
};
