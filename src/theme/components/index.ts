import { ThemeComponents } from '@chakra-ui/react'

import {
  buttonTheme,
  checkboxTheme,
  inputTheme,
  selectTheme,
  textareaTheme,
  switchTheme,
} from './forms'

export const components: ThemeComponents = {
  Button: buttonTheme.Button,
  Checkbox: checkboxTheme.Checkbox,
  Input: inputTheme.Input,
  Select: selectTheme.Select,
  Textarea: textareaTheme.Textarea,
  Switch: switchTheme.Switch,
}

export default components
