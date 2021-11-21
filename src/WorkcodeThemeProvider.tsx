import React from 'react'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'

import Fonts from './components/Fonts'
import {
  buttonTheme,
  inputTheme,
  iconButtonTheme,
  textareaTheme,
  selectTheme,
  checkboxTheme,
  editableTheme,
  formControlTheme,
  numberInputTheme,
  pinInputTheme,
  radioTheme,
  rangeSliderTheme,
  sliderTheme,
  switchTheme,
} from './components'
import { fonts } from './theme/fonts'

interface WorkcodeThemeProviderProps {
  children: React.ReactNode
}

const theme = extendTheme({
  components: {
    ...buttonTheme,
    ...inputTheme,
    ...iconButtonTheme,
    ...selectTheme,
    ...textareaTheme,
    ...checkboxTheme,
    ...editableTheme,
    ...formControlTheme,
    ...numberInputTheme,
    ...pinInputTheme,
    ...radioTheme,
    ...rangeSliderTheme,
    ...sliderTheme,
    ...switchTheme,
  },
  ...fonts,
})

console.log(theme)

export const WorkcodeThemeProvider = ({
  children,
}: WorkcodeThemeProviderProps) => {
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      {children}
    </ChakraProvider>
  )
}

export default WorkcodeThemeProvider
