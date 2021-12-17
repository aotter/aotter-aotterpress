(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{454:function(t,s,a){"use strict";a.r(s);var n=a(32),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"banner-ad"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#banner-ad"}},[t._v("#")]),t._v(" Banner Ad")]),t._v(" "),a("p",[t._v("Follow these steps to build a banner ad layout and then requests it.")]),t._v(" "),a("p",[t._v("Step 1: "),a("RouterLink",{attrs:{to:"/trek/ios/admob-mediation/basic-usage/banner-ad.html#step-1-initialize-aottertrek-sdk"}},[t._v("Initialize AotterTrek SDK")]),a("br"),t._v("\nStep 2: "),a("RouterLink",{attrs:{to:"/trek/ios/admob-mediation/basic-usage/banner-ad.html#step-2-customize-viewcontroller"}},[t._v("Customize "),a("em",[t._v("ViewController")])])],1),t._v(" "),a("h3",{attrs:{id:"step-1-initialize-aottertrek-sdk"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#step-1-initialize-aottertrek-sdk"}},[t._v("#")]),t._v(" Step 1: Initialize AotterTrek SDK ")]),t._v(" "),a("p",[a("em",[t._v("File: AppDelegate.m")])]),t._v(" "),a("div",{staticClass:"language-swift line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-swift"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/// Need to import Lib")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token other-directive property"}},[t._v("#import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("AotterTrek")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("iOS"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("SDK")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("AotterTrek")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("iOS"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("SDK")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("h"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token other-directive property"}},[t._v("#import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("GoogleMobileAds")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("GoogleMobileAds")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("h"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("BOOL")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("application"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("UIApplication")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("application didFinishLaunchingWithOptions"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("NSDictionary")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("launchOptions "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Override point for customization after application launch.")]),t._v("\n    \n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("GADMobileAds")]),t._v(" sharedInstance"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" startWithCompletionHandler"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token nil constant"}},[t._v("nil")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    \n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("AotterTrek")]),t._v(" sharedAPI"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" initTrekServiceWithClientId"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("@"),a("span",{pre:!0,attrs:{class:"token string-literal"}},[a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Your Client ID"')])]),t._v("\n                                                   secret"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("@"),a("span",{pre:!0,attrs:{class:"token string-literal"}},[a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Your Client Secret"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    \n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Open Log")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//[[AotterTrek sharedAPI] performSelector:@selector(enableLoggerLevelDevDetail)];")]),t._v("\n    \n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("YES")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br"),a("span",{staticClass:"line-number"},[t._v("19")]),a("br"),a("span",{staticClass:"line-number"},[t._v("20")]),a("br")])]),a("h3",{attrs:{id:"step-2-customize-viewcontroller"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#step-2-customize-viewcontroller"}},[t._v("#")]),t._v(" Step 2: Customize ViewController")]),t._v(" "),a("p",[t._v("- "),a("strong",[t._v("GoogleMobileAds SDK version 8 and above")])]),t._v(" "),a("div",{staticClass:"language-swift line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-swift"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//Ex:BannerViewController")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token other-directive property"}},[t._v("#import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string-literal"}},[a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"BannerViewController.h"')])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token other-directive property"}},[t._v("#import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("GoogleMobileAds")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("GoogleMobileAds")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("h"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("NSString")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("const "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("BannerAdUnit")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" @"),a("span",{pre:!0,attrs:{class:"token string-literal"}},[a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Your AdMob banner ad unit"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token attribute atrule"}},[t._v("@interface")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("BannerViewController")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("GADBannerViewDelegate")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("GADBannerView")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("_gadBannerView"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token attribute atrule"}},[t._v("@end")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token attribute atrule"}},[t._v("@implementation")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("BannerViewController")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("void"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("viewDidLoad "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("super")]),t._v(" viewDidLoad"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Do additional setup after loading the view from its nib.")]),t._v("\n    \n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("self")]),t._v(" setupGADBannerView"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token other-directive property"}},[t._v("#pragma")]),t._v(" mark "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Setup")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("GADBanner")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("void"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("setupGADBannerView "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    _gadBannerView "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("GADBannerView")]),t._v(" alloc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("initWithAdSize"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("kGADAdSizeBanner")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    _gadBannerView"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("delegate "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("self")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    _gadBannerView"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("rootViewController "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("self")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    _gadBannerView"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("adUnitID "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("BannerAdUnit")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        \n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("self")]),t._v(" bannerLoadRequest"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("void"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("bannerLoadRequest "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("GADRequest")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("request "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("GADRequest")]),t._v(" request"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("GADCustomEventExtras")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("extra "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("GADCustomEventExtras")]),t._v(" alloc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("init")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  \n  \t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// FIll in categories like "news"、"movie" at CATEGORIES')]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("extra setExtras"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("@"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("@"),a("span",{pre:!0,attrs:{class:"token string-literal"}},[a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"category"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("@"),a("span",{pre:!0,attrs:{class:"token string-literal"}},[a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"CATEGORIES"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" forLabel"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("@"),a("span",{pre:!0,attrs:{class:"token string-literal"}},[a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"AotterTrekGADCustomEventBannerAd"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("request registerAdNetworkExtras"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("extra"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    \n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("_gadBannerView loadRequest"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("request"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("void"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("setupBannerViewUI"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("GADBannerView")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("bannerView "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    \n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("self")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("view addSubview"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("bannerView"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("bannerView setTranslatesAutoresizingMaskIntoConstraints"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("NO")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("bannerView"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("heightAnchor constraintEqualToConstant"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("bannerView"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("bounds"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("size"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("height"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("active "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("YES")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("bannerView"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("bottomAnchor constraintEqualToAnchor"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("self")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("view"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("safeAreaLayoutGuide"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("bottomAnchor constant"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("active "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("YES")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("bannerView"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("leftAnchor constraintEqualToAnchor"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("self")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("view"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("leftAnchor constant"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("active "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("YES")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("bannerView"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("rightAnchor constraintEqualToAnchor"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("self")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("view"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("rightAnchor constant"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("active "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("YES")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token other-directive property"}},[t._v("#pragma")]),t._v(" mark "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("GADBannerViewDelegate")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("void"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("bannerViewDidReceiveAd"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("GADBannerView")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("bannerView "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("bannerView "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token nil constant"}},[t._v("nil")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("self")]),t._v(" setupBannerViewUI"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("bannerView"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("void"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("bannerView"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("GADBannerView")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("bannerView didFailToReceiveAdWithError"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("NSError")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("error "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("NSLog")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("@"),a("span",{pre:!0,attrs:{class:"token string-literal"}},[a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"error message: %@"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("error"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("localizedDescription"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token attribute atrule"}},[t._v("@end")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br"),a("span",{staticClass:"line-number"},[t._v("19")]),a("br"),a("span",{staticClass:"line-number"},[t._v("20")]),a("br"),a("span",{staticClass:"line-number"},[t._v("21")]),a("br"),a("span",{staticClass:"line-number"},[t._v("22")]),a("br"),a("span",{staticClass:"line-number"},[t._v("23")]),a("br"),a("span",{staticClass:"line-number"},[t._v("24")]),a("br"),a("span",{staticClass:"line-number"},[t._v("25")]),a("br"),a("span",{staticClass:"line-number"},[t._v("26")]),a("br"),a("span",{staticClass:"line-number"},[t._v("27")]),a("br"),a("span",{staticClass:"line-number"},[t._v("28")]),a("br"),a("span",{staticClass:"line-number"},[t._v("29")]),a("br"),a("span",{staticClass:"line-number"},[t._v("30")]),a("br"),a("span",{staticClass:"line-number"},[t._v("31")]),a("br"),a("span",{staticClass:"line-number"},[t._v("32")]),a("br"),a("span",{staticClass:"line-number"},[t._v("33")]),a("br"),a("span",{staticClass:"line-number"},[t._v("34")]),a("br"),a("span",{staticClass:"line-number"},[t._v("35")]),a("br"),a("span",{staticClass:"line-number"},[t._v("36")]),a("br"),a("span",{staticClass:"line-number"},[t._v("37")]),a("br"),a("span",{staticClass:"line-number"},[t._v("38")]),a("br"),a("span",{staticClass:"line-number"},[t._v("39")]),a("br"),a("span",{staticClass:"line-number"},[t._v("40")]),a("br"),a("span",{staticClass:"line-number"},[t._v("41")]),a("br"),a("span",{staticClass:"line-number"},[t._v("42")]),a("br"),a("span",{staticClass:"line-number"},[t._v("43")]),a("br"),a("span",{staticClass:"line-number"},[t._v("44")]),a("br"),a("span",{staticClass:"line-number"},[t._v("45")]),a("br"),a("span",{staticClass:"line-number"},[t._v("46")]),a("br"),a("span",{staticClass:"line-number"},[t._v("47")]),a("br"),a("span",{staticClass:"line-number"},[t._v("48")]),a("br"),a("span",{staticClass:"line-number"},[t._v("49")]),a("br"),a("span",{staticClass:"line-number"},[t._v("50")]),a("br"),a("span",{staticClass:"line-number"},[t._v("51")]),a("br"),a("span",{staticClass:"line-number"},[t._v("52")]),a("br"),a("span",{staticClass:"line-number"},[t._v("53")]),a("br"),a("span",{staticClass:"line-number"},[t._v("54")]),a("br"),a("span",{staticClass:"line-number"},[t._v("55")]),a("br"),a("span",{staticClass:"line-number"},[t._v("56")]),a("br"),a("span",{staticClass:"line-number"},[t._v("57")]),a("br"),a("span",{staticClass:"line-number"},[t._v("58")]),a("br"),a("span",{staticClass:"line-number"},[t._v("59")]),a("br"),a("span",{staticClass:"line-number"},[t._v("60")]),a("br"),a("span",{staticClass:"line-number"},[t._v("61")]),a("br"),a("span",{staticClass:"line-number"},[t._v("62")]),a("br"),a("span",{staticClass:"line-number"},[t._v("63")]),a("br"),a("span",{staticClass:"line-number"},[t._v("64")]),a("br"),a("span",{staticClass:"line-number"},[t._v("65")]),a("br"),a("span",{staticClass:"line-number"},[t._v("66")]),a("br")])])])}),[],!1,null,null,null);s.default=e.exports}}]);