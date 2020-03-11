import React from "react"
import CustomSlider from "../common/Slider"
import "./style.scss"
import Slide from "./Slide"

const CarouselSection: React.FC = () => {
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
      <CustomSlider>
        {examplSlide.map(item => (
          <Slide key={item.id} />
        ))}
      </CustomSlider>
    </section>
  )
}

export default CarouselSection
