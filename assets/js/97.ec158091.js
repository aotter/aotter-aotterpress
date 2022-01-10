(window.webpackJsonp=window.webpackJsonp||[]).push([[97],{492:function(t,s,a){"use strict";a.r(s);var e=a(32),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"apis"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#apis"}},[t._v("#")]),t._v(" APIs")]),t._v(" "),a("p",[t._v("The tab below explains different kinds of AotterTrek Web APIs. Please take a look if needed.")]),t._v(" "),a("details",{staticClass:"custom-block details"},[a("summary",[t._v("AotterTrek('init')")]),t._v(" "),a("h2",{attrs:{id:"aottertrek-init-client-id"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#aottertrek-init-client-id"}},[t._v("#")]),t._v(" AotterTrek('init', 'CLIENT_ID')")]),t._v(" "),a("blockquote",[a("p",[t._v("Initialize AotterTrek SDK")])]),t._v(" "),a("h4",{attrs:{id:"arguments"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#arguments"}},[t._v("#")]),t._v(" Arguments")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("order")]),t._v(" "),a("th",[t._v("name")]),t._v(" "),a("th",[t._v("type")]),t._v(" "),a("th",[t._v("note")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("1")]),t._v(" "),a("td",[t._v("init")]),t._v(" "),a("td",[a("code",[t._v("string")])]),t._v(" "),a("td",[t._v('Accept "'),a("strong",[t._v("init")]),t._v('" only')])]),t._v(" "),a("tr",[a("td",[t._v("2")]),t._v(" "),a("td",[t._v("CLIENT_ID")]),t._v(" "),a("td",[a("code",[t._v("string")])]),t._v(" "),a("td",[t._v("Your client id from AotterTrek")])])])]),t._v(" "),a("h4",{attrs:{id:"example"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[t._v("#")]),t._v(" Example")]),t._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("AotterTrek")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'init'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'CLIENT_ID'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])])]),t._v(" "),a("details",{staticClass:"custom-block details"},[a("summary",[t._v("AotterTrek('ADTYPE')")]),t._v(" "),a("h2",{attrs:{id:"aottertrek-adtype-options"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#aottertrek-adtype-options"}},[t._v("#")]),t._v(" AotterTrek('ADTYPE', OPTIONS)")]),t._v(" "),a("blockquote",[a("p",[t._v("Send HTTP request to get ad and injecting response data to specific element.")])]),t._v(" "),a("blockquote",[a("p",[t._v("Ref: "),a("RouterLink",{attrs:{to:"/trek/web/ad-formats/"}},[t._v("Ad Formats")])],1)]),t._v(" "),a("h4",{attrs:{id:"arguments-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#arguments-2"}},[t._v("#")]),t._v(" Arguments")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("order")]),t._v(" "),a("th",[t._v("name")]),t._v(" "),a("th",[t._v("type")]),t._v(" "),a("th",[t._v("note")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("1")]),t._v(" "),a("td",[t._v("ADTYPE")]),t._v(" "),a("td",[a("code",[t._v("string")])]),t._v(" "),a("td",[t._v('Only accept "suprAd"')])]),t._v(" "),a("tr",[a("td",[t._v("2")]),t._v(" "),a("td",[t._v("OPTIONS")]),t._v(" "),a("td",[a("code",[t._v("object")])]),t._v(" "),a("td",[t._v("See Options below.")])])])]),t._v(" "),a("h4",{attrs:{id:"options"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#options"}},[t._v("#")]),t._v(" Options")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("name")]),t._v(" "),a("th",[t._v("type")]),t._v(" "),a("th",[t._v("note")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("selector")]),t._v(" "),a("td",[a("code",[t._v("string")]),t._v("  or  "),a("code",[t._v("element")])]),t._v(" "),a("td",[t._v("The CSS selector or target element.")])]),t._v(" "),a("tr",[a("td",[t._v("layout")]),t._v(" "),a("td",[a("code",[t._v("string")])]),t._v(" "),a("td",[t._v("If sets, using default Trek ad layout.")])]),t._v(" "),a("tr",[a("td",[t._v("place")]),t._v(" "),a("td",[a("code",[t._v("string")])]),t._v(" "),a("td",[t._v("Custom placement name, you can check out analytics data in Trek Dashboard.")])]),t._v(" "),a("tr",[a("td",[t._v("trekNetwork")]),t._v(" "),a("td",[a("code",[t._v("string")])]),t._v(" "),a("td",[t._v('Set ad network "trek" or "house", '),a("strong",[t._v('default by "trek"')]),t._v(".")])]),t._v(" "),a("tr",[a("td",[t._v("onAdLoad")]),t._v(" "),a("td",[a("code",[t._v("function")])]),t._v(" "),a("td",[t._v("Trigger when ad successfully loaded.")])]),t._v(" "),a("tr",[a("td",[t._v("onAdFail")]),t._v(" "),a("td",[a("code",[t._v("function")])]),t._v(" "),a("td",[t._v("Trigger when ad fails to load.")])])])]),t._v(" "),a("h4",{attrs:{id:"example-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example-2"}},[t._v("#")]),t._v(" Example")]),t._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("AotterTrek")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'suprAd'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    selector"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'#supr-ad'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    place"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'YOUR_PLACE_UUID'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    layout"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'prebuilt'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("onAdLoad")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("node")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Do something.")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("onAdFail")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("node")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Do something.")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br")])])]),t._v(" "),a("details",{staticClass:"custom-block details"},[a("summary",[t._v("AotterTrek('setUser')")]),t._v(" "),a("h2",{attrs:{id:"aottertrek-setuser-user"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#aottertrek-setuser-user"}},[t._v("#")]),t._v(" AotterTrek('setUser', USER)")]),t._v(" "),a("blockquote",[a("p",[t._v("Ref:"),a("RouterLink",{attrs:{to:"/trek/web/web-sdk/user-setting.html"}}),a("RouterLink",{attrs:{to:"/trek/web/web-sdk/user-setting.html"}},[t._v("User info Setting")])],1)]),t._v(" "),a("h4",{attrs:{id:"arguments-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#arguments-3"}},[t._v("#")]),t._v(" Arguments")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("order")]),t._v(" "),a("th",[t._v("name")]),t._v(" "),a("th",[t._v("type")]),t._v(" "),a("th",[t._v("note")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("1")]),t._v(" "),a("td",[t._v("setUser")]),t._v(" "),a("td",[a("code",[t._v("string")])]),t._v(" "),a("td",[t._v('Accept "'),a("strong",[t._v("setUser")]),t._v('" only')])]),t._v(" "),a("tr",[a("td",[t._v("2")]),t._v(" "),a("td",[t._v("USER")]),t._v(" "),a("td",[a("code",[t._v("object")])]),t._v(" "),a("td",[t._v("See User below")])])])]),t._v(" "),a("h4",{attrs:{id:"user"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#user"}},[t._v("#")]),t._v(" User")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("name")]),t._v(" "),a("th",[t._v("type")]),t._v(" "),a("th",[t._v("note")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("email")]),t._v(" "),a("td",[a("code",[t._v("string")])]),t._v(" "),a("td",[t._v("User's email")])]),t._v(" "),a("tr",[a("td",[t._v("birthday")]),t._v(" "),a("td",[a("code",[t._v("string")])]),t._v(" "),a("td",[t._v("User's birthday, only accept  "),a("code",[t._v("yyyy/MM/dd format")])])]),t._v(" "),a("tr",[a("td",[t._v("fbid")]),t._v(" "),a("td",[a("code",[t._v("string")])]),t._v(" "),a("td",[t._v("User's facebook id")])]),t._v(" "),a("tr",[a("td",[t._v("gender")]),t._v(" "),a("td",[a("code",[t._v("string")])]),t._v(" "),a("td",[t._v("User's gender")])])])]),t._v(" "),a("h4",{attrs:{id:"example-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example-3"}},[t._v("#")]),t._v(" Example")]),t._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("AotterTrek")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'setUser'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  email"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'example@aotter.net'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("  \n  birthday"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'1999/01/01'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  fbId"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'[USER_FACEBOOK_ID]'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  gender"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'MALE'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("AotterTrek")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'init'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'CLIENT_ID'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("AotterTrek")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'suprAd'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  selector"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'#supr-ad'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br")])])]),t._v(" "),a("details",{staticClass:"custom-block details"},[a("summary",[t._v("AotterTrek('tkadn')")]),t._v(" "),a("h2",{attrs:{id:"aottertrek-tkadn-event"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#aottertrek-tkadn-event"}},[t._v("#")]),t._v(" AotterTrek('tkadn', EVENT)")]),t._v(" "),a("blockquote",[a("p",[t._v("Ref: "),a("RouterLink",{attrs:{to:"/trek/web/web-sdk/tkadn.html"}},[t._v("Tkadn")])],1)]),t._v(" "),a("h4",{attrs:{id:"arguments-4"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#arguments-4"}},[t._v("#")]),t._v(" Arguments")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("order")]),t._v(" "),a("th",[t._v("name")]),t._v(" "),a("th",[t._v("type")]),t._v(" "),a("th",[t._v("note")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("1")]),t._v(" "),a("td",[t._v("tkadn")]),t._v(" "),a("td",[a("code",[t._v("string")])]),t._v(" "),a("td",[t._v('Accept "'),a("strong",[t._v("tkadn")]),t._v('" only.')])]),t._v(" "),a("tr",[a("td",[t._v("2")]),t._v(" "),a("td",[t._v("EVENT")]),t._v(" "),a("td",[a("code",[t._v("string")])]),t._v(" "),a("td",[t._v("See Standard Events below.")])])])]),t._v(" "),a("h4",{attrs:{id:"standard-events"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#standard-events"}},[t._v("#")]),t._v(" Standard Events")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Event")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("code",[t._v("PageView")])]),t._v(" "),a("td",[t._v("A person lands on your website pages.")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("PageViewed")])]),t._v(" "),a("td",[t._v("A person staying on your page for more than 10s or scrolling exceeds 50%.")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("ClickBtn")])]),t._v(" "),a("td",[t._v("A person clicks on a button.")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("FormSubmit")])]),t._v(" "),a("td",[t._v("A person submits a form.")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("AddToCart")])]),t._v(" "),a("td",[t._v("A person clicks on an add to cart button.")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("Purchased")])]),t._v(" "),a("td",[t._v("A person has finished the purchase")])])])]),t._v(" "),a("h4",{attrs:{id:"example-4"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example-4"}},[t._v("#")]),t._v(" Example")]),t._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("reportEvent")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("AotterTrek")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'tkadn'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'FormSubmit'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])])]),t._v(" "),a("details",{staticClass:"custom-block details"},[a("summary",[t._v("AotterTrek('send')")]),t._v(" "),a("h2",{attrs:{id:"aottertrek-send"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#aottertrek-send"}},[t._v("#")]),t._v(" AotterTrek('send')")]),t._v(" "),a("blockquote",[a("p",[t._v("Send an event for trek to analytic page information.")])]),t._v(" "),a("h4",{attrs:{id:"example-5"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example-5"}},[t._v("#")]),t._v(" Example")]),t._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("AotterTrek")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'send'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])])])])}),[],!1,null,null,null);s.default=n.exports}}]);