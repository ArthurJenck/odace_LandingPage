import FooterTitle from "../../components/FooterTitle"
import footerCategs from "../../data/footerCategs.json"
import FooterCateg from "../../components/FooterCateg"
import "./FooterAside.scss"

const FooterAside = () => {
  return (
    <aside className="footer-aside">
      <FooterTitle />
      <div className="footer-aside__links">
        {footerCategs.map((categ, index) => {
          return categ.isAside && <FooterCateg categ={categ} key={index} />
        })}
      </div>
    </aside>
  )
}

export default FooterAside
