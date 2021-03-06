---
description: Migrating from version 3.x to version 4.x
---

# Migration Guide

This migration guide help developer who like to update AotterTrek Android SDK to version 4.x from 3.x. If you haven't updated, we highly recommend upgrading for a better integration experience and optimized Ads.  For some seasons, you still stick to version 3. Please check the Legacy SDK page below.


<link-component title="Legacy Android SDK" link="../legacy-android-sdk/"/>


## Key Differences

* [SDK Installation](migration-guide.md#install-sdk)
* [Callback Functions](migration-guide.md#initialization-sdk)
* [Objects / Methods / Media View](migration-guide.md#objects-media-view-methods)
* [Request Ads](migration-guide.md#ad-object-listener)
* [Life Cycle](migration-guide.md#life-cycle)

### SDK Installation <a href="install-sdk" id="install-sdk"></a>

Dependencies library is upgraded to version 4.x. Version 3.x is no longer be updated.

```kotlin
// Version 4.x: Please use the dependency library as follow
implementation 'com.google.code.gson:gson:2.8.6'
implementation 'com.aotter.net:trek-sdk-android-kotlin:4.3.2'

// Version 3.x: It's about to deprecate the following dependency library
implementation 'com.google.android.gms:play-services-ads:18.1.1'
implementation 'com.aotter.net:trek-sdk:3.2.1'
```

### Callback Functions <a href="initialization-sdk" id="initialization-sdk"></a>

#### SDK Initialization&#x20;

We add a completion callback in version 4 which is useful for publishers who want to do something at this point.


<code-group>
<code-block title="Kotlin" active>
```kotlin
     // Version 4.x
     AotterTrek.initAotterService(context,"YOUR_CLIENT_ID"){
          //aotter service init finshed callback.
     } 
```
</code-block>

<code-block title="Java">
```java
     // Version 4.x
     AotterTrek.INSTANCE.initAotterService(context,"YOUR_CLIENT_ID", (Function1)(new Function1() {
          public Object invoke(Object var1) {
               this.invoke((Unit)var1);
               return Unit.INSTANCE;
          }
          public final void invoke(@NotNull Unit it) {
               Intrinsics.checkNotNullParameter(it, "it");
               //aotter service init finshed callback.  
          }
     }));
```
</code-block>

</code-group>





In version 4, the following callbacks are still available but please notice that `onAdLoaded` callback use **AdData** model instead of the TKAdNative model.

**-** onAdError                       **-** **onAdLoaded**\
**-** onAdClicked                     **-** onAdImpression

### Objects / Media View / Methods

#### - Ad Object

In version 4, the _TKAdN_ object is deprecated and uses the **TrekAd** object instead.

<code-group>

<code-block title="Kotlin" active>
```kotlin
// Version 4.x
var trekAd:TrekAd = AotterTrek.trekService(context)
```
</code-block>

<code-block title="Java">
```java
// Version 4.x
TrekAd trekAd = AotterTrek.INSTANCE.trekService(context);
```
</code-block>

</code-group>

#### - Media View

In version 4, we use **TrekMediaView** instead of TKMediaView.

**- Methods**

When setting ad listener, version 4 uses the **`setTrekAdStatusListener()`** method instead of `setAdListener()`.Furthermore, inject interface to listener use **TrekAdStatusCallBack** interface instead of _TKAdListener._

When register ads, **`registerAdView()`** method is deprecated. In version 4, different ad types use their own register method as below.

* Native Ad: Use **`registerNativeAd()`** method
* Supr.Ad: Use **`registerSuprAd()`** method
* Banner Ad: Use **`registerBannerAd()`** method

### Request Ads <a href="ad-object-listener" id="ad-object-listener"></a>

In version 4, requesting ads use **builder style** as the following code snippet.

<code-group>

<code-block title="Kotlin" active>
```kotlin
// Version 4.x
trekAd
.setPlaceUid("YOUR_UUID")//Ex."0000-12345-6789-000"
.setCategory("YOUR_CATEGORY_STRING_WHAT_EVERY_YOU_WANT")//Ex."news"
.applyTrekAd()
```
</code-block>

<code-block title="Java">
```java
// Version 4.x
trekAd
.setPlaceUid("YOUR_UUID")//Ex."0000-12345-6789-000"
.setCategory("YOUR_CATEGORY_STRING_WHAT_EVERY_YOU_WANT")//Ex."news"
.applyTrekAd();
```
</code-block>

</code-group>

### Life Cycle 

The life cycle in version 4 is automatically managed, which means that publishers don't need to do any life cycle management on their own.
