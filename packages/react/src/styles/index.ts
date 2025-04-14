import { createStitches, defaultThemeMap } from '@stitches/react'
import {
  colors,
  fontSizes,
  fontWeights,
  fonts,
  lineHeights,
  radii,
  space,
} from '@jordane-ignite-ui/tokens'

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  themeMap: {
    ...defaultThemeMap,
    height: 'space', // habilita os tokens de `space` para a propriedade `height` do css
    width: 'space', // habilita os tokens de `space` para a propriedade `width` do css
  },

  theme: {
    colors,
    fontSizes,
    fontWeights,
    fonts,
    lineHeights,
    radii,
    space,
  },
})
