import React, { useEffect } from "react"
import Layout from "../components/layout"
import SEO from "../components/Seo"
import useWindowsSize from "../constants/useWindowsSize"
import { Context } from "../constants/context"
import Intro from "../components/Intro"
import CarouselSection from "../components/CarouselSection"

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

  // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
  //@ts-ignore
  const IntroIgnore = () => <Intro />

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
        <CarouselSection />
        <p>Welcome to your new Gatsby site.</p>
        <p>Now go build something great.</p>
      </Layout>
    </Context.Provider>
  )
}

export default IndexPage
