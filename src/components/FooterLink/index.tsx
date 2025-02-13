import "./FooterLink.scss"

const FooterLink = ({ link }: any) => {
  return <a href={link.href}>{link.text}</a>
}

export default FooterLink
