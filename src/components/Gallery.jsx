import van1 from "../../public/images/van1.jpg";
import van2 from "../../public/images/van2.jpg";
import van3 from "../../public/images/van3.jpg";
import van4 from "../../public/images/vannight.jpg";
import van5 from "../../public/images/vanstop.jpg";
import van6 from "../../public/images/van.jpg";

export default function Gallery() {
  return (
    <main className="main-gallery">
      {/* <h1>Gallery</h1> */}
      <div className="photo-container">
        <div className="photo">
          <img src={van1} alt="" />
        </div>
        <div className="photo">
          <img src={van2} alt="" />
        </div>
        <div className="photo">
          <img src={van3} alt="" />
        </div>
        <div className="photo">
          <img src={van4} alt="" />
        </div>
        <div className="photo">
          <img src={van5} alt="" />
        </div>
        <div className="photo">
          <img src={van6} alt="" />
        </div>
      </div>
    </main>
  );
}
