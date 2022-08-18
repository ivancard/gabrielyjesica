import "./footer.scss";
import footerImg from "../assets/img/fotterImg.jpg";
export const Footer = () => {
  return (
    <div
      className="footer-image"
      style={{ backgroundImage: `url(${footerImg})` }}
    >
      <h2>Te esperamos</h2>
    </div>
  );
};
