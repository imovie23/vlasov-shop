import React, { useContext } from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import Img from "gatsby-image"
import Logo from "../common/Logo"
import MenuMobile from "../common/MenuMobile"
import { Context } from "../../constants/context"
import ContactHeader from "../ContactHeader"
import Search from "../common/Search"
import Shop from "../common/Shop"
import * as DISPLAY from "../../constants/windowDisplay"
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

  const { display } = useContext(Context)

  return (
    <header className="header">
      <div className="header__wrapper">
        {(display === DISPLAY.MOBILE || display === DISPLAY.SMALL_TABLE) && <MenuMobile />}
        {display !== DISPLAY.MOBILE && display !== DISPLAY.SMALL_TABLE && <ContactHeader />}
        <Logo />

        {display !== DISPLAY.MOBILE && display !== DISPLAY.SMALL_TABLE && display !== DISPLAY.TABLE && (
          <div className="header__office">
            <Link to={`/`} className="header__office-link">
              <span className="header__office-text">Войти в кабинет</span>
              <Img className="header__office-logo" fluid={data.file.childImageSharp.fluid} alt="logoOffice" />
            </Link>
          </div>
        )}

        {(display === DISPLAY.MOBILE || display === DISPLAY.SMALL_TABLE || display === DISPLAY.TABLE) && (
          <div className="header__actions">
            <span className="header__actions--indent">
              <Search />
            </span>
            {display === DISPLAY.TABLE && (
              <span className="header__actions--indent">
                <Link to={`/`} className="header__office-link">
                  <Img className="header__office-logo" fluid={data.file.childImageSharp.fluid} alt="logoOffice" />
                </Link>
              </span>
            )}
            <Shop />
          </div>
        )}
      </div>
    </header>
  )
}

export default Header
