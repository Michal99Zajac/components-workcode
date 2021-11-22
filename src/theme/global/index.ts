export const global = {
  global: (props: any) => ({
    body: {
      bg: props.colorMode === 'dark' ? '#020F1C' : '#ECF5FF',
    },
  }),
}

export default global
