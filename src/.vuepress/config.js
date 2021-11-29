const { description } = require('../../package')
const { trekSidebar } = require('./trek-doc-loader')

module.exports = {
  base: '/aotter-aotterpress/',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'Aotter Docs',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#C7283E' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
  ],

  markdown: {
    lineNumbers: true,
  },

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: 'aotter/aotter-aotterpress',
    editLinks: false,
    docsDir: 'src',
    editLinks: false,
    // custom text for edit link. Defaults to "Edit this page"
    editLinkText: '去 GitHub 編輯',
    lastUpdated: true,
    smoothScroll: true,
    nav: [
      {
        text: 'Trek',
        link: '/trek/',
      },
      {
        text: 'Supr.Link',
        link: '/suprlink/',
      },
      {
        text: 'Guide',
        link: '/guide/',
      },
      {
        text: 'VuePress',
        link: 'https://v1.vuepress.vuejs.org',
      },
    ],
    sidebar: {
      '/trek/': [
        {
          title: 'Getting Start',
          collapsable: false,
          children: ['', 'summary', 'ad-slot-management'],
        },
        ...trekSidebar,
        // {
        //   title: 'Android',
        //   collapsable: false,
        //   children: [
        //     'android/changelog',
        //     'android/proguard',
        //     {
        //       title: 'ad-formats',
        //       collapsable: true,
        //       children: [
        //         'android/ad-formats/',
        //         'android/ad-formats/banner-ad',
        //         {
        //           title: 'WTF',
        //           collapsable: true,
        //           children: ['android/admob-mediation/basic-usage/'],
        //         },
        //       ],
        //     },
        //   ],
        // },
      ],
      '/suprlink/': [
        {
          title: 'Supr.Link Doc',
          collapsable: false,
          children: [''],
        },
        {
          title: 'Supr.Link 企業版文件',
          collapsable: false,
          children: ['enterprise'],
        },
      ],
      '/guide/': [
        {
          title: 'Guide',
          collapsable: false,
          children: ['', 'using-vue'],
        },
      ],
    },
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
    ['vuepress-plugin-code-copy', true],
    'vuepress-plugin-pangu',
  ],
}
