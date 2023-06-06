import { defineConfig } from 'vitepress'
import en from './en'
import zh_CN from './zh_CN'
import zh_TW from './zh_TW'
import vi_VN from './vi_VN'
import id_ID from './id_ID'

export default defineConfig({
  locales: {
    root: {
      label: 'English',
      lang: en.lang,
      themeConfig: en.themeConfig,
      description: en.description
    },
    zh_CN: {
      label: '简体中文',
      lang: zh_CN.lang,
      themeConfig: zh_CN.themeConfig,
      description: zh_CN.description
    },
    zh_TW: {
      label: '繁體中文',
      lang: zh_TW.lang,
      themeConfig: zh_TW.themeConfig,
      description: zh_TW.description
    },
    vi_VN: {
      label: 'Tiếng Việt',
      lang: vi_VN.lang,
      themeConfig: vi_VN.themeConfig,
      description: vi_VN.description
    },
    id_ID: {
      label: 'Bahasa',
      lang: id_ID.lang,
      themeConfig: id_ID.themeConfig,
      description: id_ID.description
    }
  }
})
