(window.webpackJsonp=window.webpackJsonp||[]).push([[74],{469:function(t,s,a){"use strict";a.r(s);var e=a(32),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"myapp-ads-integration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#myapp-ads-integration"}},[t._v("#")]),t._v(" MyApp Ads Integration")]),t._v(" "),a("h2",{attrs:{id:"prerequisites"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#prerequisites"}},[t._v("#")]),t._v(" Prerequisites")]),t._v(" "),a("ul",[a("li",[t._v("Minimum iOS version: 9.0")]),t._v(" "),a("li",[t._v("MyApp ads support SDK 3.1 and later.")])]),t._v(" "),a("h2",{attrs:{id:"download-aottertrek-sdk"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#download-aottertrek-sdk"}},[t._v("#")]),t._v(" Download AotterTrek SDK")]),t._v(" "),a("p",[a("strong",[t._v("- Using Cocoapods")])]),t._v(" "),a("p",[t._v("     1. Add the following line to your project's Podfile:")]),t._v(" "),a("div",{staticClass:"language-objectivec line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-objectivec"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//Podfile")]),t._v("\npod "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'AotterTrek-iOS-SDK'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'~> 3.1'")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])]),a("p",[t._v("    2. Run  "),a("code",[t._v("pod install")])]),t._v(" "),a("h4",{attrs:{id:"manually-install"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#manually-install"}},[t._v("#")]),t._v(" - Manually install")]),t._v(" "),a("p",[t._v("    1. Pull & drag AotterTrek-iOS-SDK to your project"),a("br"),t._v("\n    2. Link AotterTrek-iOS-SDK (if it's not auto-linked)"),a("br"),t._v("\n    3. Add linked frameworks and libraries to your target (See the table below)"),a("br"),t._v("\n    4. Install "),a("a",{attrs:{href:"https://developers.google.com/interactive-media-ads/docs/sdks/ios/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Google-IMA-iOS-SDK"),a("OutboundLink")],1)]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Frameworks and Libraries")]),t._v(" "),a("th"),t._v(" "),a("th")])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("CoreMedia")]),t._v(" "),a("td",[t._v("SystemConfiguration")]),t._v(" "),a("td",[t._v("CoreTelephony")])]),t._v(" "),a("tr",[a("td",[t._v("WebKit")]),t._v(" "),a("td",[t._v("CoreTelephony")]),t._v(" "),a("td",[t._v("AdSupport")])]),t._v(" "),a("tr",[a("td",[t._v("AVKit")]),t._v(" "),a("td",[t._v("AVFoundation")]),t._v(" "),a("td",[t._v("Foundation")])]),t._v(" "),a("tr",[a("td",[t._v("UIKit")]),t._v(" "),a("td"),t._v(" "),a("td")])])]),t._v(" "),a("h2",{attrs:{id:"initiation-settings"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#initiation-settings"}},[t._v("#")]),t._v(" Initiation & Settings "),a("a",{attrs:{href:"initial-sdk",id:"initial-sdk"}})]),t._v(" "),a("p",[t._v("Initial MyApp Service in "),a("em",[t._v("AppDelegate.m")])]),t._v(" "),a("div",{staticClass:"language-objectivec line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-objectivec"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// AppDelegate.m")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token macro property"}},[a("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),a("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token expression"}},[a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("AotterTrek"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("iOS"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("SDK"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("AotterTrek"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("iOS"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("SDK"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("h"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")])])]),t._v("\n\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//only initial MyApp service")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("AotterTrek sharedAPI"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" initMyAppServiceWithClientId"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('@""')]),t._v("\n                                              secret"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('@""')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n \n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//initial MyApp service and TrekService if needed")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("AotterTrek sharedAPI"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" initTrekServiceWithClientId"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('@""')]),t._v("\n                                              secret"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('@""')]),t._v("\n                                       myAppClientId"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('@""')]),t._v("\n                                   myAppClientSecret"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('@""')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br")])]),a("p",[a("strong",[t._v("#usage")])]),t._v(" "),a("p",[t._v("Native ad  "),a("code",[t._v("TKMyAppAdNative")]),t._v("  usage is the same as  "),a("code",[t._v("TKAdNative")]),t._v(" . See"),a("RouterLink",{attrs:{to:"/trek/ios/ad-formats/"}},[t._v(" Native Ad")]),t._v(" for more information.")],1),t._v(" "),a("div",{staticClass:"language-objectivec line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-objectivec"}},[a("code",[t._v("  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("self")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("nativeAd "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("TKMyAppAdNative alloc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" initWithPlace"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('@"myPlace"')]),t._v(" category"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('@"testCategory"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("self")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("nativeAd registerPresentingViewController"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("self")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("self")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("nativeAd"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("delegate "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("self")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("self")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("nativeAd fetchAd"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br")])]),a("h2",{attrs:{id:"overwrite-click-event-for-myapp-ads"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#overwrite-click-event-for-myapp-ads"}},[t._v("#")]),t._v(" Overwrite Click Event for MyApp Ads "),a("a",{attrs:{href:"overwrite-click-event-for-myapp-ads",id:"overwrite-click-event-for-myapp-ads"}})]),t._v(" "),a("p",[t._v("Implement  "),a("code",[t._v("TKAdNativeDelegate")]),t._v("  -> "),a("code",[t._v("TKMyAppAdNativeOnClicked:(TKMyAppAdNative *)ad")])]),t._v(" "),a("div",{staticClass:"language-objectivec line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-objectivec"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("TKMyAppAdNativeOnClicked"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("TKMyAppAdNative "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("ad"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("NSLog")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('@"[Demo MyApp] >> onClick MyAppAdNative with adData: %@"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ad"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("AdData"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    NSString "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("targetUrl "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" ad"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("AdData"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('@"url_original"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br")])]),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIPS:")]),t._v(" "),a("p",[t._v("This method is only available for MyApp's ads. ")])]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),a("p",[a("strong",[t._v("Notice:")]),t._v(" When implementing this method, the default click event will be prevented. You should manually implement click action such as open URL or browser.")])])])}),[],!1,null,null,null);s.default=n.exports}}]);