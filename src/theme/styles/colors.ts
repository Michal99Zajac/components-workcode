export const color = (colorMode: 'dark' | 'light') => {
  const isDark = colorMode === 'dark'

  return {
    bg: isDark ? '#020F1C' : '',
    warning: isDark ? '#E9352A' : '',
    primary: {
      input: {
        bg: isDark ? '#102A43' : '',
        border: isDark ? '#63b3ed' : '',
        text: isDark ? '#FFFFFF' : '',
        icon: isDark ? '#FFFFFF' : '',
        _hover: {
          bg: isDark ? '#102A43' : '',
          boxShadow: isDark ? '#63b3ed' : '',
        },
        _invalid: {
          boxShadow: isDark ? '#E9352A' : '',
          bg: isDark ? '#E9352A' : '',
        },
        _focus: {
          bg: isDark ? '#102A43' : '',
          boxShadow: isDark ? '#63b3ed' : '',
        },
        _checked: {
          bg: isDark ? '#3f8cc4' : '',
          boxShadow: isDark ? '#63b3ed' : '',
        },
        _disabled: {
          bg: isDark ? '#3A4D5F' : '',
          boxShadow: isDark ? '#3A4D5F' : '',
        },
        addon: {
          bg: isDark ? '#051D33' : '',
        },
      },
      surface: {
        bg: isDark ? '#091A2A' : '',
        _hover: isDark ? '#0F2437' : '',
      },
    },
  }
}

export default color
