import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import "./style.scss"

interface Data {
  file: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    childImageSharp: any
  }
}

const Shop: React.FC = () => {
  const data = useStaticQuery<Data>(graphql`
    query {
      file(relativePath: { eq: "shop.png" }) {
        childImageSharp {
          fluid(maxWidth: 25, maxHeight: 25) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `)

  return <Img className="menu__shop-logo" fluid={data.file.childImageSharp.fluid} alt="Shop" />
}

export default Shop
