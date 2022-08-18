import "./photos.scss";
import photo1 from "../assets/img/photo-1.jpg";
import photo2 from "../assets/img/photo-2.jpg";
import photo3 from "../assets/img/photo-3.jpg";

export const Photos = () => {
  return (
    <section className="photos-container">
      <div className="photos-root">
        <img className="photo photo-1" src={photo1} alt="A couple in love" />
        <img className="photo photo-2" src={photo2} alt="A couple in love" />
        <img className="photo photo-3" src={photo3} alt="A couple in love" />
      </div>
    </section>
  );
};
