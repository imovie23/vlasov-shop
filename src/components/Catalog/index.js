import React from "react"
import Card from './Card'
import "./style.scss"
import { graphql, useStaticQuery } from "gatsby"

export default function Catalog() {

  const {ring, shop} = useStaticQuery(
    graphql`
      query {
        ring: file(relativePath: { eq: "catalog/ring.png" }) {
          childImageSharp {
            fluid(maxWidth: 1500, quality: 100) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        },
        shop: file(relativePath: { eq: "catalog/shop.png" }) {
          childImageSharp {
            fluid(maxWidth: 29, maxHeight: 31) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
    `
  )

  const card = [
    {
      title: "Кольца из белого золота",
      id:1,
      image: ring.childImageSharp.fluid,
      price:'3156 грн',
      discount:'-35%',
      oldPrice: '7889',
      icon: shop.childImageSharp.fluid
    },
    {
      title: "Кольца из белого золота",
      id:2,
      image: ring.childImageSharp.fluid,
      price:'3156 грн',
      discount:'-35%',
      oldPrice: '7889',
      icon: shop.childImageSharp.fluid
    },
    {
      title: "Кольца из белого золота",
      id:3,
      image: ring.childImageSharp.fluid,
      price:'3156 грн',
      discount:'-35%',
      oldPrice: '7889',
      icon: shop.childImageSharp.fluid
    },
    {
      title: "Кольца из белого золота",
      id:4,
      image: ring.childImageSharp.fluid,
      price:'3156 грн',
      discount:'-35%',
      oldPrice: '7889',
      icon: shop.childImageSharp.fluid
    },
  ]

  return(
    <div className="catalog">
      {
        card.map(card => <Card card={card}/>)
      }
      <span className="catalog__showMore">Показать больше</span>
    </div>
  )
}
