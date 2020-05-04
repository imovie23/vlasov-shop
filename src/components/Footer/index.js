import React, { useContext } from "react"
import './style.scss'
import * as DISPLAY from "../../constants/windowDisplay"
import { graphql, Link, useStaticQuery } from "gatsby"
import { Context } from "../../constants/context"
import Logo from '../common/Logo'
import Img from "gatsby-image"
import DivideLine from "../common/DivideLine"
import Layout from "../Layout"
import Contact from '../Contact'

export default function Footer() {

  const {instagram, faceBook, twitter} = useStaticQuery(
    graphql`
      query {
        instagram: file(relativePath: { eq: "footer/instagram.png" }) {
          childImageSharp {
            fluid(maxWidth: 35, maxHeight: 35) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        },
        faceBook: file(relativePath: { eq: "footer/faceBook.png" }) {
          childImageSharp {
            fluid(maxWidth: 19, maxHeight: 37) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        },
        twitter: file(relativePath: { eq: "footer/twitter.png" }) {
          childImageSharp {
            fluid(maxWidth: 35, maxHeight: 35) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
    `
  )

  const { display } = useContext(Context)

return(
  <footer>
    {(display === DISPLAY.MOBILE || display === DISPLAY.SMALL_TABLE) ?
    (<div className="footer__information">
    {display === DISPLAY.MOBILE && (

        <div className="footer__padding">
          <span className="footer__work">Режим работы:</span>
          <div>
            <span className="footer__day margin">ПН - ПТ</span>
            <span className="footer__day">9 - 18</span>
          </div>
          <div>
            <span className="footer__day margin">СБ - ВС</span>
            <span className="footer__weekend">выходной</span>
          </div>
        </div>
    )}

      <div className="footer__action">
        <Logo/>
        <div className="footer__action-socialMedia">
          <Img className="footer__action-socialMedia-instagram" fluid={instagram.childImageSharp.fluid} alt="logoOffice" />
          <Img className="footer__action-socialMedia-faceBook" fluid={faceBook.childImageSharp.fluid} alt="logoOffice" />
          <Img className="footer__action-socialMedia-twitter" fluid={twitter.childImageSharp.fluid} alt="logoOffice" />
        </div>
      </div>
    </div>) : <div className="footer__media">
        <Logo/>
        <div className="footer__action-720">
        <Contact />
        <div className="footer__action-socialMedia-720">
          <Img className="footer__action-socialMedia-instagram" fluid={instagram.childImageSharp.fluid} alt="logoOffice" />
          <Img className="footer__action-socialMedia-faceBook" fluid={faceBook.childImageSharp.fluid} alt="logoOffice" />
          <Img className="footer__action-socialMedia-twitter" fluid={twitter.childImageSharp.fluid} alt="logoOffice" />
        </div>
        </div>
      </div>}
  </footer>
)
}



