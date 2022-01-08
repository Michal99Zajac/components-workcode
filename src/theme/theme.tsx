import React from 'react'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'

import color from './colors'
import { SourceCodeProFonts } from './fonts'
import { components } from './components'

interface WorkcodeProviderProps {
  children: React.ReactNode
}

const theme = extendTheme({
  components: components,
  fonts: {
    body: 'Source Code Pro',
    heading: 'Source Code Pro',
  },
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: false,
  },
  styles: {
    global: ({ colorMode }: { colorMode: 'dark' | 'light' }) => ({
      body: {
        bg: color(colorMode).bg,
      },
    }),
  },
})

export const WorkcodeProvider = ({ children }: WorkcodeProviderProps) => {
  // TODO: remove after package complate
  console.log(theme)

  return (
    <ChakraProvider theme={theme}>
      <SourceCodeProFonts />
      {children}
    </ChakraProvider>
  )
}

export default WorkcodeProvider
