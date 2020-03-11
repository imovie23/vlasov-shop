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

const Slide: React.FC = () => {
  const data = useStaticQuery<Data>(graphql`
    query {
      file(relativePath: { eq: "slider/slider-image.png" }) {
        childImageSharp {
          fluid(maxWidth: 450, maxHeight: 300) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `)
  const carouselPrimaryTxt = `2 по цене 1`
  const carouselSecondaryTxt = `акция ко Дню Святого Валентина`

  return (
    <div className="carousel__slide">
      <Img className="carousel__slide-image" fluid={data.file.childImageSharp.fluid} alt="slider-image" />
      <div className="carousel__slide-content">
        <span className="carousel__slide-primary">{carouselPrimaryTxt}</span>
        <span className="carousel__slide-secondary">{carouselSecondaryTxt}</span>
      </div>
    </div>
  )
}

export default Slide
