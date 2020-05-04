import React, { useContext } from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import Img from "gatsby-image"
import { getLogoText, LogoText } from "../../../lib/getLogoText"
import "./styles.scss"
import { Context } from "../../../constants/context"
import * as DISPLAY from "../../../constants/windowDisplay"

interface Data {
  site: {
    siteMetadata: {
      title: string
      description?: string
      author?: string
    }
  }
  file: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    childImageSharp: any
  }
}

const Logo: React.FC = ({logo}) => {
  const data = useStaticQuery<Data>(graphql`
    query {
      file(relativePath: { eq: "header/logo.png" }) {
        childImageSharp {
          fluid(maxWidth: 60, maxHeight: 65) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const { mainText, secondaryText }: LogoText = getLogoText(data?.site ? data.site.siteMetadata.title : `Logo text`)
  const { display } = useContext(Context)

  return (
    <div className="logo">
      <Link to={`/`} className="logo__link">
        {display !== DISPLAY.MOBILE && display !== DISPLAY.SMALL_TABLE && (
          <Img className="logo__image" fluid={data.file.childImageSharp.fluid} alt="logoVlasov" />
        )}
        <div className="logo__text-container">
          <span className="logo__main-text">{secondaryText ? mainText.toUpperCase() : mainText}</span>
          {secondaryText && <span className="logo__secondary-text">{secondaryText}</span>}
        </div>
      </Link>
    </div>
  )
}

export default Logo
