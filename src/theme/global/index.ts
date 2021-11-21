export const global = {
  global: (props: any) => ({
    body: {
      bg: props.colorMode === 'dark' ? '#020F1C' : '#FFFFFF',
    },
  }),
}

export default global
