import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

interface PropsArrow {
  className: string
  style: object
  onClick: any
}

const CustomNextArrow: React.FC<PropsArrow> = props => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "slider/slider-left-arrow.png" }) {
        childImageSharp {
          fluid(maxWidth: 150, maxHeight: 150) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `)
  const { style, onClick } = props
  return (
    <div className="slick-arrow slick-prev slider__arrow" style={{ ...style, display: `block` }} onClick={onClick}>
      <Img className="slider__arrow" fluid={data.file.childImageSharp.fluid} alt="left" />
    </div>
  )
}

export default CustomNextArrow
