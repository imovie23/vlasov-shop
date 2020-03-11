import React, { useContext } from "react"
import MenuItem from "./MenuItem"
import "./style.scss"
import * as DISPLAY from "../../constants/windowDisplay"
import Search from "../common/Search"
import Shop from "../common/Shop"
import { Context } from "../../constants/context"

interface MenuPoint {
  name: string
  id: number | string
}

const Menu: React.FC = () => {
  const { display } = useContext(Context)
  const menuItems: MenuPoint[] = [
    {
      name: `Каталог`,
      id: 1,
    },
    {
      name: `О Нас`,
      id: 2,
    },
    {
      name: `Контакты`,
      id: 3,
    },
    {
      name: `Доставка и оплата`,
      id: 4,
    },
    {
      name: `Возврат и обмен`,
      id: 5,
    },
  ]
  return (
    <nav className="nav">
      <div className="nav__content">
        <ul className="nav__menu">
          {menuItems.map(item => (
            <MenuItem key={item.id} pointName={item.name} />
          ))}
        </ul>
      </div>
      {(display === DISPLAY.DESKTOP || display === DISPLAY.LARGE_DESKTOP) && (
        <div className="nav__actions">
          <span className="nav__actions--indent">
            <Search />
          </span>
          <Shop />
        </div>
      )}
    </nav>
  )
}

export default Menu
