import React from "react"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import "./style.scss"
import { graphql, Link, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

export default function DescriptionTab() {

  const {brilliant, girl, cash, car} = useStaticQuery(
    graphql`
      query {
        brilliant: file(relativePath: { eq: " advantages/brilliant.png" }) {
          childImageSharp {
            fluid(maxWidth: 51, maxHeight: 40) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        },
        girl: file(relativePath: { eq: " advantages/girl.png" }) {
          childImageSharp {
            fluid(maxWidth: 42, maxHeight: 40) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        },
        cash: file(relativePath: { eq: " advantages/cash.png" }) {
          childImageSharp {
            fluid(maxWidth: 42, maxHeight: 39) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        },
        car: file(relativePath: { eq: " advantages/car.png" }) {
          childImageSharp {
            fluid(maxWidth: 75, maxHeight: 35) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
    `
  )

  return (
    <Tabs>
      <TabList>
        <Tab>
          <Img className="react-tabs__image-brilliant" fluid={ brilliant.childImageSharp.fluid } alt="brilliant"/>
        </Tab>
        <Tab>
          <Img className="react-tabs__image-girl" fluid={ girl.childImageSharp.fluid } alt="girl"/>
        </Tab>
        <Tab>
          <Img className="react-tabs__image-cash" fluid={ cash.childImageSharp.fluid } alt="cash"/>
        </Tab>
        <Tab>
          <Img className="react-tabs__image-car" fluid={ car.childImageSharp.fluid } alt="car"/>
        </Tab>
      </TabList>

      <TabPanel>
        <h3 className="react-tabs__description-title">Детальная консультация</h3>
        <p className="react-tabs__description-secondaryTitle">Наши продавцы - консультанты знают все о продукции, представленной
          на сайте.
          Вы можете получить исчерпывающие ответы на все интерисуюшие вопросы, а также рассчитывать на помощь в выборе
          наиболее подходящих товаров.</p>
      </TabPanel>
      <TabPanel>
        <h3 className="react-tabs__description-title">Детальная консультация</h3>
        <p className="react-tabs__description-secondaryTitle">Наши продавцы - консультанты знают все о продукции, представленной
          на сайте.
          Вы можете получить исчерпывающие ответы на все интерисуюшие вопросы, а также рассчитывать на помощь в выборе
          наиболее подходящих товаров.</p>
      </TabPanel>
      <TabPanel>
        <h3 className="react-tabs__description-title">Детальная консультация</h3>
        <p className="react-tabs__description-secondaryTitle">Наши продавцы - консультанты знают все о продукции, представленной
          на сайте.
          Вы можете получить исчерпывающие ответы на все интерисуюшие вопросы, а также рассчитывать на помощь в выборе
          наиболее подходящих товаров.</p>
      </TabPanel>
      <TabPanel>
        <h3 className="react-tabs__description-title">Детальная консультация</h3>
        <p className="react-tabs__description-secondaryTitle">Наши продавцы - консультанты знают все о продукции, представленной
          на сайте.
          Вы можете получить исчерпывающие ответы на все интерисуюшие вопросы, а также рассчитывать на помощь в выборе
          наиболее подходящих товаров.</p>
      </TabPanel>
    </Tabs>
  )
}

