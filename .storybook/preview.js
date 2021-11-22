import React from 'react'

import ThemeProvider from '../src/WorkcodeThemeProvider'
import { useColorMode } from '../src/hooks'
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
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <div className='bar'>
      <button
        className='toggle'
        onClick={toggleColorMode}
      >
        Toggle {colorMode === 'light' ? 'Dark' : 'Light'}
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
