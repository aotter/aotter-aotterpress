(window.webpackJsonp=window.webpackJsonp||[]).push([[82],{477:function(s,a,t){"use strict";t.r(a);var n=t(32),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"legacy-android-sdk"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#legacy-android-sdk"}},[s._v("#")]),s._v(" Legacy Android SDK")]),s._v(" "),t("h2",{attrs:{id:"guide"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#guide"}},[s._v("#")]),s._v(" Guide "),t("a",{attrs:{href:"guide",id:"guide"}})]),s._v(" "),t("ul",[t("li",[s._v("AotterTrek Android SDK contains tracking and native advertising service.")]),s._v(" "),t("li",[s._v("Minimum SDK Version: 16 ")])]),s._v(" "),t("h2",{attrs:{id:"install-sdk"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#install-sdk"}},[s._v("#")]),s._v(" Install SDK "),t("a",{attrs:{href:"install-sdk",id:"install-sdk"}})]),s._v(" "),t("p",[s._v("In order to use that repository, you need to refer to it in the app's project-level  "),t("code",[s._v("build.gradle")]),s._v("  file. Open yours and looking for an  "),t("code",[s._v("allprojects")]),s._v("  section:")]),s._v(" "),t("ul",[t("li",[t("strong",[s._v("Example project-level build.gradle (excerpt)")])])]),s._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[s._v("allprojects "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    repositories "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("google")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("jcenter")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        maven "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n          url "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"https://deps.aotter.net/artifactory/libs-release-local"')]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br")])]),t("p",[s._v("Add the maven directive")]),s._v(" "),t("ul",[t("li",[t("strong",[s._v("Example app-level build.gradle (excerpt)")])])]),s._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[s._v("dependencies "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    implementation "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("fileTree")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("dir"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'libs'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" include"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'*.jar'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    implementation "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'com.google.android.gms:play-services-ads:18.1.1'")]),s._v("\n    implementation "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'com.aotter.net:trek-sdk:3.2.1'")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("p",[s._v("Pull in the latest version of the AotterTrek-Android-SDK and additional related dependencies.")]),s._v(" "),t("h2",{attrs:{id:"update-your-androidmanifest-xml-and-application"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#update-your-androidmanifest-xml-and-application"}},[s._v("#")]),s._v(" Update your AndroidManifest.xml and Application "),t("a",{attrs:{href:"update-your-androidmanifestxml-and-application",id:"update-your-androidmanifestxml-and-application"}})]),s._v(" "),t("p",[s._v("Declare the following permissions:")]),s._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("uses")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("permission android"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("name"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"android.permission.INTERNET"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("uses")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("permission android"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("name"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"android.permission.ACCESS_WIFI_STATE"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//If you are shipping an app, extend the Application class if you are not already doing so:")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("MyApplication")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("extends")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Application")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@Override")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("onCreate")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("super")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("onCreate")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n        "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// init AotterTrek")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("AotterTrek")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("initTrekService")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" YOUR_CLIENT_ID"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" YOUR_CLIENT_SECRET"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br")])]),t("table",[t("thead",[t("tr",[t("th",[s._v("Test Key")]),s._v(" "),t("th",[s._v("Value")])])]),s._v(" "),t("tbody",[t("tr",[t("td",[s._v("CLIENT_ID")]),s._v(" "),t("td",[t("code",[s._v("DNgNhOwfbUkOqcQFI+uD")])])]),s._v(" "),t("tr",[t("td",[s._v("CLIENT_SECRET")]),s._v(" "),t("td",[t("code",[s._v("1k+sYKMLZrclCRmgw/esYNZbjAhArT7Vn42cxfn3f/tgmT0XJZI4mNiNwBYLu9GOet7YtiT6")])])])])])])}),[],!1,null,null,null);a.default=e.exports}}]);