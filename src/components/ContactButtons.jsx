import { FaFacebook } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";

export default function ContactButtons() {
  return (
    <div className="btns">
      <button className="contact-btn">
        <FaFacebook />
      </button>
      <button className="contact-btn">
        <FaSquareInstagram />
      </button>
      <button className="contact-btn">
        <FaYoutube />
      </button>
      <button className="contact-btn">
        <AiFillTikTok />
      </button>
    </div>
  );
}
