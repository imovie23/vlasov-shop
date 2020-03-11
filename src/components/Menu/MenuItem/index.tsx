import React from "react"
import { Link } from "gatsby"
import "./style.scss"

const Index: React.FC<{ pointName: string }> = props => {
  const { pointName } = props
  return (
    <>
      <li className="nav__menu-point">
        <Link to={`/`} className="nav__menu-link">
          {pointName}
        </Link>
      </li>
    </>
  )
}

export default Index
