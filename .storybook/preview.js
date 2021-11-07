import React from 'react'

import ThemeProvider from '../src/WorkcodeThemeProvider'

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

export const decorators = [
  (Story) => (
    <div
      style={{
        backgroundColor:'#020F1C',
        padding: '20px'
      }}
    >
      <ThemeProvider>
        <Story />
      </ThemeProvider>
    </div>
  ),
]
