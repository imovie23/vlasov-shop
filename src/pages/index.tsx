import React, { useEffect } from "react"
import Layout from "../components/layout"
import SEO from "../components/Seo"
import useWindowsSize from "../constants/useWindowsSize"
import { Context } from "../constants/context"
import Intro from "../components/Intro"
import CarouselSection from "../components/CarouselSection"
import DivideLine from "../components/common/DivideLine"
import * as DISPLAY from "../constants/windowDisplay"
import DescriptionTabs from "../components/DescriptionTabs"
import Catalog from "../components/Catalog"
import DescriptionSite from "../components/DescriptionSite"
import Contact from "../components/Contact"
import "./style.scss"

interface WindowSize {
  width: number
  height: number
  display: string | number
}

const IndexPage: React.FC = () => {
  const windowSize: WindowSize = useWindowsSize()
  const { width, height, display } = windowSize

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  useEffect(() => {}, [display])

  //@ts-ignore
  const IntroIgnore = (): any => <Intro />

  return (
    <Context.Provider
      value={{
        width,
        height,
        display,
      }}
    >
      <Layout>
        <SEO title="Home" />
        <IntroIgnore />
        {(display === DISPLAY.MOBILE || display === DISPLAY.SMALL_TABLE) && <DivideLine />}
        <CarouselSection />
        {(display === DISPLAY.MOBILE || display === DISPLAY.SMALL_TABLE) && <DivideLine />}
        <DescriptionTabs />
        {(display === DISPLAY.MOBILE || display === DISPLAY.SMALL_TABLE) && <DivideLine nameClass="divide__line" />}
        <Catalog />
        <DescriptionSite />
        {(display === DISPLAY.MOBILE || display === DISPLAY.SMALL_TABLE) && <DivideLine />}
        {(display === DISPLAY.MOBILE || display === DISPLAY.SMALL_TABLE) && <Contact />}

        {(display === DISPLAY.MOBILE || display === DISPLAY.SMALL_TABLE) && <DivideLine />}
      </Layout>
    </Context.Provider>
  )
}

export default IndexPage
