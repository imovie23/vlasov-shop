import React from "react"
import "./style.scss"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"
import BackgroundImage from "gatsby-background-image"

type IntroProps = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  className: any
}
const Intro: React.FC<IntroProps> = ({ className }) => {
  const { mobileImage, desktopImage } = useStaticQuery(
    graphql`
      query {
        mobileImage: file(relativePath: { eq: "intro/Intro-bg-small.png" }) {
          childImageSharp {
            fluid(maxWidth: 490, quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        desktopImage: file(relativePath: { eq: "intro/Intro-bg-large.png" }) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 4160) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `
  )

  const sources = [
    mobileImage.childImageSharp.fluid,
    {
      ...desktopImage.childImageSharp.fluid,
      media: `(min-width: 769px)`,
    },
  ]

  const headingText = `золотые и серебряные ювелирные изделия`
  const mainText =
    `Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Вдали от всех живут они в буквенных домах на берегу Семантика большого языкового океана. Маленький ручеек Даль журчит по всей стране и обеспечивает ее всеми необходимыми правилами. \n` +
    `Эта парадигматическая страна, в которой жаренные члены предложения залетают прямо в рот. Даже всемогущая пунктуация не имеет власти над рыбными текстами, ведущими безорфографичный образ жизни.`
  const buttonText = `Перейти в каталог`

  return (
    <BackgroundImage Tag={`section`} id={`media-test`} className={className} fluid={sources}>
      <div className="intro__content">
        <div className="intro__wrapper">
          <h2 className="intro__heading-text">{headingText.toUpperCase()}</h2>
          <span className="intro__chief-text">{mainText}</span>
          <button className="intro__btn">{buttonText}</button>
        </div>
      </div>
    </BackgroundImage>
  )
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const StyledArtDirectedBackground = styled(Intro)`
  width: 100%;
  min-height: 100vh;
  background-size: auto;
  background-color: transparent;
`

export default Intro
