// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { useState, useEffect } from "react"
import * as DISPLAY from "./windowDisplay"

interface WindowSize {
  width: number
  height: number
  display: string | number
}

export default function useWindowsSize(): WindowSize {
  const [width, setWidth] = useState(window.innerWidth)
  const [height, setHeight] = useState(window.innerHeight)
  const [display, setDisplay] = useState(``)

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const updateDimensions = (): void => {
    setWidth(window.innerWidth)
    setHeight(window.innerHeight)
    windowsDisplay(width)
  }

  const windowsDisplay = (width: number): void => {
    if (width < 480) {
      setDisplay(DISPLAY.MOBILE)
    }
    if (width > 481 && width < 768) {
      setDisplay(DISPLAY.SMALL_TABLE)
    }
    if (width > 769 && width < 920) {
      setDisplay(DISPLAY.TABLE)
    }
    if (width > 921 && width < 1200) {
      setDisplay(DISPLAY.DESKTOP)
    }
    if (width > 1201) {
      setDisplay(DISPLAY.LARGE_DESKTOP)
    }
  }

  useEffect(() => {
    windowsDisplay(width)
    window.addEventListener(`resize`, updateDimensions)
    return (): void => window.removeEventListener(`resize`, updateDimensions)
  }, [display, updateDimensions, width])

  return {
    width,
    height,
    display,
  }
}
