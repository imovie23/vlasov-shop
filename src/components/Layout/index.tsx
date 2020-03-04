import React from "react"
import { BreakpointProvider } from "react-socks"
import Header from "../header"
import "./layout.css"

type LayoutProps = {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <BreakpointProvider>
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 1200,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <Header />
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Built with <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </div>
    </BreakpointProvider>
  )
}

export default Layout
