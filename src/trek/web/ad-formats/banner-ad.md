# Banner Ad

**Banner Ad Size**

\- 320x50    - 640x100    - 336x280    - 300x250

We provide different kinds of sizes in banner ads, but the size has been decided by you in the ad slot phase. See [Create an Ad Slot](../web-sdk/prerequisites.md#step-3-create-an-ad-slot).

Follow these steps to build a banner ad layout and then requests it.

Step 1: [Insert `<div>` tag ](banner-ad.md#step-1-insert-less-than-div-greater-than-tag)\
Step 2: [Execute Ad Request](banner-ad.md#step-2-execute-ad-request)

### Step 1: Insert `<div>` Tag

You can insert the following line to where you want to show the ad.\
Please replace`placement_UUID` with your ad place UUID.

```markup
<div id="bannerAdContainer" data-place="placement_UUID"></div>
```

We also provide **top / bottom** of the page ads by simply adding the following dataset attributes.

* **Top of the Page Ad** : `data-fixed="top"`

```markup
    <div
      id="bannerAdContainer"
      data-fixed="top"
      data-mobile
      data-place="placement_UUID"
    ></div>
```

* **Bottom of the Page Ad** : `data-fixed="bottom"`

```markup
<div
      id="bannerAdContainer"
      data-fixed="bottom"
      data-mobile
      data-place="placement_UUID"
    ></div>
```

::: tip TIPS:
When you add dataset attribute `data-mobile`, the ad will only be shown on the **mobile web**.
:::

### Step 2: Execute Ad Request

```markup
<script>
  AotterTrek('suprAd', {
    selector: 'bannerAdContainer',
    onAdLoad: () => {
        // Ad shows. Do something.
    },
    onAdFail: () => {
        // Ad fail. Do something.
    }
  })
</script>
```

### Done! 👏🏼

![](https://previews.dropbox.com/p/thumb/ABZvYsVdON6E8Qh8egoF1tDnKnqjerq2YJWVpu_BpNLzrECNwSLWqgvXcAt3QoYVbVEtTs75IfK3NDJSFjHbXSdirP8FCXP9gu_kbezWLBntYZnL8x1Lq9xHziXs4NprHCkpPXIQnOCxlmUh6d9FctmNIMgv9DKpGdDGb_mey4kszfbGxZ8k71pzGwtlWijlwxIbeXeBeNFzZorS6eVvpg0N-gKscJ1PbXDBgYDsy_1FiX10ohTu84vclmnDPdyZJ2tpBHrsktj12m6lpfDgziTAhHw9eeLFw6eR_8pobrWjmC2Gg6Nb09YNb-o0J6jmxoJoy4q4xfJGrlvnKFtSiKwXuAs0Eg0oKFj7f_qF53w6eg/p.png)

