import React from "react"
import "./style.scss"

const ContactHeader: React.FC = () => {
  return (
    <div className="header__contact">
      <div className="header__contact-number">
        <span className="header__contact-operator">095</span>
        <span className="header__contact-operator">068</span>
        <span className="header__contact-operator">073</span>
      </div>
      <span className="header__contact-phone">(275 62 69)</span>
    </div>
  )
}

export default ContactHeader
