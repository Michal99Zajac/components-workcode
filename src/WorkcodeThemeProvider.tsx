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
import { global } from './theme/global'
import { config } from './theme/config'

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
  ...config,
  styles: {
    ...global,
  },
})

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
