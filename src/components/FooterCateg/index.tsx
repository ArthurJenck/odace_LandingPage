import FooterLink from "../FooterLink"
import "./FooterCateg.scss"

const FooterCateg = ({ categ }: any) => {
  return (
    <div
      className={
        !categ.title ? "mobile footer-categ__wrapper" : "footer-categ__wrapper"
      }
    >
      <h3>{categ.title}</h3>
      <h3 className="mobile">{categ.mobileTitle}</h3>
      {categ.links.map((link: any, index: number) => {
        return <FooterLink link={link} key={index} />
      })}
    </div>
  )
}

export default FooterCateg
