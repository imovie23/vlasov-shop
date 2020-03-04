export interface LogoText {
  mainText: string
  secondaryText?: string
}

export const getLogoText = (text: string): LogoText => {
  const textValues = text.split(` `)

  if (textValues.length === 2) {
    const [first, second] = textValues
    return {
      mainText: first,
      secondaryText: second,
    }
  }

  return {
    mainText: text,
  }
}
