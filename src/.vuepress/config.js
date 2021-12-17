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
          children: ['', 'ad-slot-management'],
        },
        //...trekSidebar,
        {
          "title": "Android",
          "collapsable": false,
          "children": [
            "android/migration-guide",
            {
              "title": "Android SDK",
              "collapsable": true,
              "children": [
                //"android/sdk-integration/",
                "android/sdk-integration/prerequisites",
                "android/sdk-integration/installation",
                "android/sdk-integration/user-setting",
                "android/sdk-integration/tracker",
                "android/sdk-integration/trek-example-app-demo",
              ]
            },
            {
              "title": "Ad Formats",
              "collapsable": true,
              "children": [
                //"android/ad-formats/",
                "android/ad-formats/native-ad",
                "android/ad-formats/supr.ad",
                "android/ad-formats/banner-ad",
              ]
            },
            {
              "title": "AdMob Mediation",
              "collapsable": true,
              "children": [
                //"android/admob-mediation/",
                "android/admob-mediation/prerequisites",
                "android/admob-mediation/installation",
                {
                  "title": "Basic Usage",
                  "collapsable": true,
                  "children": [
                    //"android/admob-mediation/basic-usage/",
                    "android/admob-mediation/basic-usage/native-ad-layout",
                    "android/admob-mediation/basic-usage/supr.ad-layout",
                    "android/admob-mediation/basic-usage/banner-ad-layout"
                  ]
                },
                "android/admob-mediation/proguard",
                "android/admob-mediation/demo",
              ]
            },
            {
              "title": "MoPub Mediation",
              "collapsable": true,
              "children": [
                //"android/mopub-mediation/",
                "android/mopub-mediation/prerequisites",
                "android/mopub-mediation/installation",
                {
                  "title": "Basic Usage",
                  "collapsable": true,
                  "children": [
                    //"android/mopub-mediation/basic-usage/",
                    "android/mopub-mediation/basic-usage/native-ad-layout-manual",
                    "android/mopub-mediation/basic-usage/native-ad-layout-recyclerview",
                    "android/mopub-mediation/basic-usage/supr.ad-layout-manual",
                    "android/mopub-mediation/basic-usage/supr.ad-layout-recyclerview",
                    "android/mopub-mediation/basic-usage/banner-ad-layout"
                  ]
                },
                "android/mopub-mediation/proguard",
                "android/mopub-mediation/demo",
              ]
            },
            "android/proguard",
            "android/changelog"
          ]
        },
        {
          "title": "iOS",
          "collapsable": false,
          "children": [
            "ios/aottertrek-3.x-migration-guide",
            {
              "title": "iOS SDK",
              "collapsable": true,
              "children": [
                //"ios/sdk-integration/",
                "ios/sdk-integration/prerequisites",
                "ios/sdk-integration/installation",
                "ios/sdk-integration/user-setting",
                "ios/sdk-integration/tracker",
                "ios/sdk-integration/demo-working"
              ]
            },
            {
              "title": "Ad Formats",
              "collapsable": true,
              "children": [
                //"ios/ad-formats/",
                "ios/ad-formats/native-ad",
                "ios/ad-formats/supr.ad",
                "ios/ad-formats/banner-ad"
              ]
            },
            {
              "title": "AdMob Mediation",
              "collapsable": true,
              "children": [
                //"ios/admob-mediation/",
                "ios/admob-mediation/prerequisites",
                "ios/admob-mediation/installation",
                {
                  "title": "Basic Usage",
                  "collapsable": true,
                  "children": [
                    //"ios/admob-mediation/basic-usage/",
                    "ios/admob-mediation/basic-usage/native-ad",
                    "ios/admob-mediation/basic-usage/supr.ad",
                    "ios/admob-mediation/basic-usage/banner-ad"
                  ]
                },
                "ios/admob-mediation/demo"
              ]
            },
            {
              "title": "MoPub Mediation",
              "collapsable": true,
              "children": [
                //"ios/mopub-mediation/",
                "ios/mopub-mediation/prerequisites",
                "ios/mopub-mediation/installation",
                {
                  "title": "Basic Usage",
                  "collapsable": true,
                  "children": [
                    //"ios/mopub-mediation/basic-usage/",
                    "ios/mopub-mediation/basic-usage/native-ad",
                    "ios/mopub-mediation/basic-usage/supr.ad"
                  ]
                },
                "ios/mopub-mediation/demo"
              ]
            },
            "ios/myapp-ads-integration",
            "ios/prepare-for-ios-14",
            "ios/changelog",
          ]
        },
        {
          "title": "Web",
          "collapsable": false,
          "children": [
            {
              "title": "Web SDK",
              "collapsable": true,
              "children": [
                //"web/web-sdk/",
                "web/web-sdk/prerequisites",
                "web/web-sdk/sdk-integration",
                "web/web-sdk/user-setting",
                "web/web-sdk/tkadn",
                "web/web-sdk/apis"
              ]
            },
            {
              "title": "Ad Formats",
              "collapsable": true,
              "children": [
                //"web/ad-formats/",
                "web/ad-formats/supr.ad",
                "web/ad-formats/banner-ad"
              ]
            },
            "web/google-ad-manager-mediation",
            "web/wordpress",
            "web/changelog",
          ]
        },
        {
          "title": "Legacy-Android-SDK",
          "collapsable": true,
          "children": [
            "legacy-android-sdk/",
            "legacy-android-sdk/user-setting",
            "legacy-android-sdk/ad-formats",
            "legacy-android-sdk/myapp-ads-integration",
            "legacy-android-sdk/mopub-mediation-guide",
            "legacy-android-sdk/tracker",
            "legacy-android-sdk/proguard",
            "legacy-android-sdk/changelog"
          ]
        }
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
