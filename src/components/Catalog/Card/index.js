import React from "react"
import "./style.scss"
import BackgroundImage from "gatsby-background-image"
import Img from "gatsby-image"
import { Link } from "gatsby"

export default function Card({card}) {


  return(
      <BackgroundImage Tag={`div`} id={`media-test`} className='catalog__card' fluid={card.image}>
        <h4 className="catalog__card-title">{card.title}</h4>
        <div className="catalog__card-bottomBar">
          <span className="catalog__card-discount">{card.discount}</span>
          <span className="catalog__card-price">{card.price}</span>
          <span className="catalog__card-oldPrice">{card.oldPrice}</span>
          <span className="catalog__card-icon"><Img className="catalog__card-image" fluid={card.icon} alt="logoOffice" /></span>
        </div>
      </BackgroundImage>
  )
}
