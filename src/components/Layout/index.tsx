import React, { useContext } from "react"
import { BreakpointProvider } from "react-socks"
import Header from "../header"
import Menu from "../Menu"
import "./layout.css"
import { Context } from "../../constants/context"
import * as DISPLAY from "../../constants/windowDisplay"

type LayoutProps = {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { display } = useContext(Context)
  return (
    <BreakpointProvider>
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 1200,
        }}
      >
        <Header />
        {display !== DISPLAY.MOBILE && display !== DISPLAY.SMALL_TABLE && <Menu />}
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Built with <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </div>
    </BreakpointProvider>
  )
}

export default Layout
