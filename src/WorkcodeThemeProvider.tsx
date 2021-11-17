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
  checkboxGroupTheme,
  editableTheme,
  editableInputTheme,
  editablePreviewTheme,
  formControlTheme,
  formLabelTheme,
  formErrorMessageTheme,
  formHelperTextTheme,
  buttonGroupTheme,
  numberInputTheme,
  numberInputFieldTheme,
  numberInputStepperTheme,
  numberIncrementStepperTheme,
  numberDecrementStepperTheme,
  pinInputTheme,
  pinInputFieldTheme,
  radioTheme,
  radioGroupTheme,
  rangeSliderTheme,
  rangeSliderTrackTheme,
  rangeSliderFilledTrackTheme,
  rangeSliderThumbTheme,
  sliderTheme,
  sliderTrackTheme,
} from './components'

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
    ...checkboxGroupTheme,
    ...editableTheme,
    ...editableInputTheme,
    ...editablePreviewTheme,
    ...formControlTheme,
    ...formLabelTheme,
    ...formErrorMessageTheme,
    ...formHelperTextTheme,
    ...buttonGroupTheme,
    ...numberInputTheme,
    ...numberInputFieldTheme,
    ...numberInputStepperTheme,
    ...numberIncrementStepperTheme,
    ...numberDecrementStepperTheme,
    ...pinInputTheme,
    ...pinInputFieldTheme,
    ...radioTheme,
    ...radioGroupTheme,
    ...rangeSliderTheme,
    ...rangeSliderTrackTheme,
    ...rangeSliderFilledTrackTheme,
    ...rangeSliderThumbTheme,
    ...sliderTheme,
    ...sliderTrackTheme,
  },
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
