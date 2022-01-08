export const shadow = (color?: string) => {
  const shadowColor = color ? color : 'inherit'

  return {
    components: {
      _focus: `3px 3px 0 1px ${shadowColor}`,
      _hover: `0 0 0 1px ${shadowColor}`,
      _invalid: `0 0 0 1px ${shadowColor}`,
      _disabled: 'none',
    },
  }
}

export default shadow
