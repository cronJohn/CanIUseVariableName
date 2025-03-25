import presetWebFonts from '@unocss/preset-web-fonts'
import presetWind3 from '@unocss/preset-wind3'
import { defineConfig, presetIcons } from 'unocss'
import { validatorLibrary } from './src/lib/validators/langs'

export default defineConfig({
    presets: [
        presetWind3(),
        presetIcons(),
        presetWebFonts({
            provider: 'google',
            fonts: {
                main: ['Inter:400,700'],
            }
        }),
    ],
    // add icons to compilation build due to dynamically using them
    safelist: Object.entries(validatorLibrary)
              .map(([key, validator]) => `i-skill-icons:${validator.iconName ?? key.toLowerCase()}`)
})
