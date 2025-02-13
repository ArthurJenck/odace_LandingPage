import xIcon from "../../assets/socials/x.svg"
import instaIcon from "../../assets/socials/insta.svg"
import linkedinIcon from "../../assets/socials/linkedin.svg"
import tiktokIcon from "../../assets/socials/tiktok.svg"
import "./FooterBottom.scss"

const FooterBottom = () => {
  return (
    <div className="footer-bottom__wrapper">
      <p className="copyright">© odace+. Tous droits réservés</p>
      <ul className="footer-bottom__socials">
        <li>
          <a href="https://x.com/odaceplus">
            <img src={xIcon} alt="icone  X/Twitter" />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/odaceplus_fr">
            <img src={instaIcon} alt="icone Instagram" />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/company/odaceworld/">
            <img src={linkedinIcon} alt="icone Linkedin" />
          </a>
        </li>
        <li>
          <a href="https://www.tiktok.com/@odaceplus">
            <img src={tiktokIcon} alt="icone Tiktok" />
          </a>
        </li>
      </ul>
      <div className="footer-desktop__legal">
        <a href="https://odaceplus.com/fr/legal">Mentions légales</a> •
        <a href="https://odaceplus.com/fr/general-conditions">
          Termes et conditions
        </a>
      </div>
    </div>
  )
}

export default FooterBottom
