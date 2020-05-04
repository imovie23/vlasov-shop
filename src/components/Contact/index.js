import React, { useContext } from "react"
import './style.scss'
import * as DISPLAY from "../../constants/windowDisplay"
import { Context } from "../../constants/context"

export default function Contacts() {
  const { display } = useContext(Context)
  return(
    <div className="contact">
      <div className="contact__action">
        <span className="contact__action-item">Каталог</span>
        <span className="contact__action-item">Новое поступление</span>
        <span className="contact__action-item">Распродажа</span>
        <span className="contact__action-item">Контакты</span>
        <span className="contact__action-item">Доставка и оплата</span>
        <span className="contact__action-item">Возврат и обмен</span>
        <span className="contact__action-item">О нас</span>
      </div>
      <div className="contact__phone">
        <span className="contact__phone-phone">Телефон:</span>
        <span className="contact__phone-number">095 275 6269</span>
        <span className="contact__phone-number">068 275 6269</span>
        <span className="contact__phone-number">073 275 6269</span>
        {display !== DISPLAY.MOBILE && (

          <>
            <span className="footer__work">Режим работы:</span>
            <div>
              <span className="footer__day margin">ПН - ПТ</span>
              <span className="footer__day">9 - 18</span>
            </div>
            <div>
              <span className="footer__day margin">СБ - ВС</span>
              <span className="footer__weekend">выходной</span>
            </div>
          </>
        )}
      </div>
    </div>
  )
}










