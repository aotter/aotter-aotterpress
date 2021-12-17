# Installation

This guide is for web developers who want to monetize a website with AotterTrek. Integrating AotterTrek SDK into your web pages will be the first step before displaying Ads and earning revenue. Follow the steps below to get started!

Step 1: [Including the SDK](sdk-integration.md#step-1-including-the-sdk)\
Step 2: [Execute `AotterTrek()` ](sdk-integration.md#step-2-execute-aottertrek)\
Step 3: [Insert \<div>\</div> tag with trek-ad attribute](sdk-integration.md#step-3-insert-less-than-div-greater-than-less-than-div-greater-than-tag-with-trek-ad-attribute)\
[Full Example](sdk-integration.md#full-example)

::: tip Notice: 
AotterTrek SDK only supports displaying Ads on **mobile and tablet websites** currently.&#x20;
:::

### Step 1: Including the SDK

Please copy the following code snippet then paste it within the`  <body>  `section of your pages. It's better to put it right before the closing tag.

```markup
<!-- start: trek sdk -->
<script>
  (function(w, d, s, src, n) {
    var js, ajs = d.getElementsByTagName(s)[0];
    if (d.getElementById(n)) return;
    js = d.createElement(s); js.id = n;
    w[n] = w[n] || function() { (w[n].q = w[n].q || []).push(arguments) }; w[n].l = 1 * new Date();
    js.async = 1; js.src = src; ajs.parentNode.insertBefore(js, ajs)
  })(window, document, 'script', 'https://static.aottercdn.com/trek/sdk/3.3.2/sdk.js', 'AotterTrek');

  // Notice: replace your own client id or use our test id.
  AotterTrek('init', 'CLIENT_ID');

</script>
<!-- end: trek sdk -->
```

* #### Test Client ID:`yEFcFoJaruNorh5RqtuR`

::: warning Info:
We provide test client id as above for receiving test ads only.
Please use **your client id** for initialization, which can be found in the [application list](https://trek.aotter.net/publisher/list/app). 
:::


::: tip TIPS:
You can switch **test / production** mode by changing **test client id to your own client id.**
:::

### Step 2: Execute AotterTrek()

To displaying Ads, you need to invoke` AotterTrek()`. Put the following code snippet after trek SDK.

```markup
<script>
AotterTrek('suprAd', {
    selector: '#adContainer', //#id, .class or any other selector
    onAdLoad: () => {
        // Ad shows. Do something.
    },
    onAdFail: () => {
        // Ad fail. Do something.
    }   
})
</script>
```

You can also pass different Ad formats and options to AotterTrek(). For example, "nativeAd".

> Ref:  [Ad Formats](../ad-formats/) and Options

### Step 3: Insert \<div>\</div> tag with trek-ad attribute

Insert the following` <div>` tag to the place you want to display Ad.

```markup
<div id="adContainer" data-place="placement_UUID"></div>
```

::: warning Notice:
Please replace`placement_UUID` with the ad place UUID in the ad slot management.

For the publisher who use AotterTrek SDK for the first time and didn't get full access to ad slot management, please contact Aseal representative or [E-mail us](https://aseal.in/contactus).
:::

### Done! 👏🏼

AotterTrek web SDK will parse `<div id="adContainer">` to an ad view.

![](https://previews.dropbox.com/p/thumb/ABYvmi79nqxtg_Dw3DwDdqckyQdiCmSXZnpRTK8jw9VQJhf9JDmGWO-63J4wf-FZNPjIT0fpDGaN6tYmmHMRITotDnRQwxLEgBR45i-pqb1Ath1XLWT-Nj4cqUE3z7S3m0ikJzunLIEWgXXJt6H1Egl0wajRF4P_AEiWzGA1p6iMfSlKdPkMuuHWm11fyDSYwe9T-ZqDq_xeywnref4TMiRTtcoi04yBSk-M7HmkT3_ji-ic7u48EHCCkjNmAZlvlDI-Mx6gvIvoWVf3OlbECZQZ1C-4V4siUkZLDwmIxwty329pQf4tN7cEaPmfuZ2qUgfpOXATpU8OKh8y-kKcHTq9cXeFKMYcK2w5I7TFRNjNXw/p.png)

### Full Example

```markup
<body>
    <div id="adContainer" data-place="placement_UUID"></div>

    <!-- start: trek sdk -->
    <script>
        (function(w, d, s, src, n) {
            var js, ajs = d.getElementsByTagName(s)[0];
            if (d.getElementById(n)) return;
            js = d.createElement(s); js.id = n;
            w[n] = w[n] || function() { (w[n].q = w[n].q || []).push(arguments) }; w[n].l = 1 * new Date();
            js.async = 1; js.src = src; ajs.parentNode.insertBefore(js, ajs)
        })(window, document, 'script', 'https://static.aottercdn.com/trek/sdk/3.3.2/sdk.js', 'AotterTrek');

        // Notice: This client ID is for test only. Replace it to your own for official operation.
        AotterTrek('init', 'yEFcFoJaruNorh5RqtuR');
    </script>
    <!-- end: trek sdk -->

    <script>
        AotterTrek('suprAd', { 
            selector: '#adContainer',
            onAdLoad: () => {
                // Ad shows. Do something.
            },
            onAdFail: () => {
                // Ad fail. Do something.
            }
        })
    </script>

</body>
```
