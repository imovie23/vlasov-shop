import React, { useContext, useState } from "react"
import { graphql, useStaticQuery } from "gatsby"
import './style.scss'
import Img from "gatsby-image"
import { Context } from "../../constants/context"
import * as DISPLAY from "../../constants/windowDisplay"
import BackgroundImage from "gatsby-background-image"

export default function DescriptionSite() {

  const [visible, setVisible] = useState(false)

  const {background, girlPhoto} = useStaticQuery(
    graphql`
      query {
        background: file(relativePath: { eq: "descriptionSite/background.png" }) {
          childImageSharp {
            fluid(maxWidth: 1500, quality: 100) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        },
         girlPhoto: file(relativePath: { eq: "descriptionSite/girlPhoto.png" }) {
          childImageSharp {
            fluid(maxWidth: 1500, quality: 100) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
    `
  )
  console.log(background)
  const { display } = useContext(Context)

  return (
    <>
      {display !== DISPLAY.MOBILE && display !== DISPLAY.SMALL_TABLE && display !== DISPLAY.TABLE ?(
          <BackgroundImage Tag={`section`} id={`media-test`} className="description--720__background--720" fluid={background.childImageSharp.fluid}>
            <div className="description--720">
              <div className="description--720__text--720">
                <span className="description__text-title">Вас приветствует интернет магазин ювелирных украшений!</span>
                <span className={'description__text-secondaryTitleVisible'}>Интернет магазин ювелирных изделий в Украине предлагает Вашему вниманию большой выбор всевозможных ювелирных украшений из золота и серебра. Ассортимент представленных ювелирных изделий – это довольно таки широкий модельный ряд роскошных сережек, красивых браслетов, оригинальных колец, потрясающих кулонов и многих других разнообразных украшений с драгоценными камнями. Мы пытаемся следить за всеми текущими тенденциями нашего времени и регулярно пополняем каталог все новыми и новыми украшениями.</span>
              </div>
              <Img className="description--720__image--720" fluid={ girlPhoto.childImageSharp.fluid } alt="photo-girl"/>
            </div>
          </BackgroundImage>

        ) :


     (
       <div className="description">
         <Img className="description__image" fluid={ girlPhoto.childImageSharp.fluid } alt="photo-girl"/>
         <div className="description__text">
           <span className="description__text-title">Вас приветствует интернет магазин ювелирных украшений!</span>
           <span className={visible ? 'description__text-secondaryTitleVisible' : 'description__text-secondaryTitle'}>
Интернет магазин ювелирных изделий в Украине предлагает Вашему вниманию большой выбор всевозможных ювелирных украшений из золота и серебра. Ассортимент представленных ювелирных изделий – это довольно таки широкий модельный ряд роскошных сережек, красивых браслетов, оригинальных колец, потрясающих кулонов и многих других разнообразных украшений с драгоценными камнями. Мы пытаемся следить за всеми текущими тенденциями нашего времени и регулярно пополняем каталог все новыми и новыми украшениями.

Вы наверняка подберете в каталоге изделия на свой вкус. Украшения представлены в разном диапазоне цен. Какое изделие Вы бы не выбрали, купленное в нас украшение не перестанет радовать Ваш глаз долгое время. С помощью таких аксессуаров можно подчеркнуть свой индивидуальный стиль, подарить себе и окружающим хорошее настроение.

Каждая женщина хочет блистать. Какой образ для себя Вы не выбрали бы, модные украшения подчеркнут и гармонично дополнят его. А ведь так хочется всегда быть разной, удивляя окружающих. Каждый день меняться, ощущая на себе восхищенные взгляды – радость для женской души. Почему бы не воплотить это в реальность? Стоит всего лишь подобрать модные аксессуары и образ сразу же измениться, передаст ваше настроение.</span>
         </div>
         <button className="description__button" onClick={() => setVisible(prevState => !prevState)}>Показать больше</button>
       </div>
     )
      }
      </>
  )
}
