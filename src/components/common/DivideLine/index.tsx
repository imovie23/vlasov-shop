import React from "react"
import "./style.scss"

interface Divides {
  nameClass?: string | undefined
}

const DivideLine: React.FC<Divides> = ({ nameClass }) => {
  return <hr className={`${nameClass ? nameClass : ``} divide-line`} />
}

export default DivideLine
