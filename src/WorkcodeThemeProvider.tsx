import React from 'react'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'

import Fonts from './components/Fonts'
import {
  buttonTheme,
  inputTheme,
  iconButtonTheme,
  textareaTheme,
  selectTheme,
  aspectRatioTheme,
  boxTheme,
  centerTheme,
  circleTheme,
  squareTheme,
  containerTheme,
  flexTheme,
  spacerTheme,
  gridTheme,
  gridItemTheme,
  simpleGridTheme,
  stackTheme,
  hStackTheme,
  vStackTheme,
  wrapTheme,
  wrapItemTheme,
  checkboxTheme,
  checkboxGroupTheme,
  editableTheme,
  editableInputTheme,
  editablePreviewTheme,
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
    ...aspectRatioTheme,
    ...boxTheme,
    ...centerTheme,
    ...circleTheme,
    ...squareTheme,
    ...containerTheme,
    ...flexTheme,
    ...spacerTheme,
    ...gridTheme,
    ...gridItemTheme,
    ...simpleGridTheme,
    ...stackTheme,
    ...hStackTheme,
    ...vStackTheme,
    ...wrapTheme,
    ...wrapItemTheme,
    ...checkboxTheme,
    ...checkboxGroupTheme,
    ...editableTheme,
    ...editableInputTheme,
    ...editablePreviewTheme,
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
