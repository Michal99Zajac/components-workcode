import React from 'react'
import { useColorMode } from '@chakra-ui/react'

import ThemeProvider from '../src/theme'
import './style.css'

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

const ToggleButton = () => {
  const { toggleColorMode, colorMode } = useColorMode()

  return (
    <div className='bar'>
      <button
        style={{
          justifyContent: colorMode === 'dark' ? 'flex-end' : 'flex-start',
        }}
        className='toggle'
        onClick={toggleColorMode}
      >
        <div className='tog'/>
      </button>
    </div>
  )
}

export const decorators = [
  (Story) => (
    <ThemeProvider>
      <ToggleButton />
      <div className='story'>
        <Story />
      </div>
    </ThemeProvider>
  ),
]
