import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import Img from "gatsby-image"
import { Breakpoint } from "react-socks"
import Logo from "../common/Logo"
import ContactHeader from "../ContactHeader"
import MenuMobile from "../common/MenuMobile"
import "./style.scss"

interface Data {
  file: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    childImageSharp: any
  }
}

const Header: React.FC = () => {
  const data = useStaticQuery<Data>(graphql`
    query {
      file(relativePath: { eq: "header/office.png" }) {
        childImageSharp {
          fluid(maxWidth: 25, maxHeight: 24) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `)

  return (
    <header className="header">
      <Breakpoint small down>
        <div className="header__wrapper">
          <MenuMobile />
          <Logo />
          <div className="header__office">
            <Link to={`/`} className="header__office-link">
              <Img className="header__office-logo" fluid={data.file.childImageSharp.fluid} alt="logoOffice" />
            </Link>
          </div>
        </div>
      </Breakpoint>

      <Breakpoint medium only>
        <div className="header__wrapper">
          <ContactHeader />
          <Logo />
          <div className="header__office">
            <Link to={`/`} className="header__office-link">
              <span className="header__office-text">Войти в кабинет</span>
              <Img className="header__office-logo" fluid={data.file.childImageSharp.fluid} alt="logoOffice" />
            </Link>
          </div>
        </div>
      </Breakpoint>

      <Breakpoint large up>
        <div className="header__wrapper">
          <ContactHeader />
          <Logo />
          <div className="header__office">
            <Link to={`/`} className="header__office-link">
              <span className="header__office-text">Войти в кабинет</span>
              <Img className="header__office-logo" fluid={data.file.childImageSharp.fluid} alt="logoOffice" />
            </Link>
          </div>
        </div>
      </Breakpoint>
    </header>
  )
}

export default Header
