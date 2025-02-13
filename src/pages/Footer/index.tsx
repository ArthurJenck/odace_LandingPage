import FooterBottom from "../../components/FooterBottom"
import FooterCateg from "../../components/FooterCateg"
import FooterTitle from "../../components/FooterTitle"
import footerCategs from "../../data/footerCategs.json"
import "./Footer.scss"

const Footer = () => {
  return (
    <footer>
      <aside>
        <FooterTitle />
        {footerCategs.map((categ, index) => {
          return categ.isAside && <FooterCateg categ={categ} key={index} />
        })}
      </aside>
      {footerCategs.map((categ, index) => {
        return !categ.isAside && <FooterCateg categ={categ} key={index} />
      })}
      <FooterBottom />
    </footer>
  )
}

export default Footer
