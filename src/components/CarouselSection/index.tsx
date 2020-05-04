import React, { useContext } from "react"
import CustomSlider from "../common/Slider"
import "./style.scss"
import Slide from "./Slide"
import DivideLine from "../common/DivideLine"
import * as DISPLAY from "../../constants/windowDisplay"
import { Context } from "../../constants/context"

const CarouselSection: React.FC = () => {
  const { display } = useContext(Context)
  const examplSlide = [
    {
      id: 1,
    },
    {
      id: 2,
    },
    {
      id: 3,
    },
    {
      id: 4,
    },
    {
      id: 5,
    },
    {
      id: 6,
    },
  ]
  return (
    <section className="carousel">
      {display !== DISPLAY.MOBILE && display !== DISPLAY.SMALL_TABLE && (
        <DivideLine nameClass="carousel__divider style" />
      )}
      <div className="carousel__content">
        <CustomSlider>
          {examplSlide.map(item => (
            <Slide key={item.id} />
          ))}
        </CustomSlider>
      </div>
    </section>
  )
}

export default CarouselSection
