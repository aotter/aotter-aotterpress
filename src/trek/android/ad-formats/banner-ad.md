# Banner Ad

Follow these steps to build a banner ad layout and then requests it.

Step 1: [Create Banner Ad Layout](banner-ad.md#step-1-create-banner-ad-layout)\
Step 2: [Create `trekAd` Object Instance](banner-ad.md#step-2-create-trekad-object-instance)\
Step 3: [Set Ad Status Listener Callback](banner-ad.md#step-3-set-ad-status-listener-callback)\
Step 4: [Request an Ad](banner-ad.md#step-4-request-an-ad)\
Step 5: [Register Ad View and Set Layout](banner-ad.md#step-5-register-ad-view-and-set-layout)

### **AdData**

#### - isExpired

You can use this method to check if the ad is expired or not.

<code-group>
<code-block title="Kotlin" active>
```kotlin
adData.isExpired()
```
</code-block>

<code-block title="Java">
```java
adData.isExpired();
```
</code-block>
</code-group>

### Step 1: Create Banner Ad Layout

Build your own banner ad layout or you can check out the example layout below.

#### **Example banner ad layout**

```kotlin
<com.aotter.net.trek.ads.TrekBannerView
  android:id="@+id/trekBannerView"
  android:layout_width="match_parent"
  android:layout_height="wrap_content"
/>
```

### Step 2: Create `trekAd` Object Instance

Notice that you should initialize `AotterTrek.TrekService` before using `trekAd`, otherwise, an exception will be thrown.

<code-group>
<code-block title="Kotlin" active>
```kotlin
var trekAd:TrekAd = AotterTrek.trekService(context)
```
</code-block>

<code-block title="Java">
```java
TrekAd trekAd = AotterTrek.INSTANCE.trekService(context);
```
</code-block>
</code-group>

### Step 3: Set Ad Status Listener Callback

Please inject the **TrekAdStatusCallBack** interface in **`setTrekSatusCallBack()`** method.

<code-group>
<code-block title="Kotlin" active>
```kotlin
//you have to set the method that is or not get a AdData.
trekAd.setTrekAdStatusListener(object : TrekAdStatusCallBack {

    override fun onAdError(message: String) {
       //ad error callback
    }

    override fun onAdLoaded(adData: AdData) {
       //In this callback, it means that you will receive an advertisement.
       //adData is an ad data.
    }

    override fun onAdClicked(adData: AdData) {
       //In this callback, it means that the  ad was clicked.
    }

    override fun onAdImpression(view: View) {
       //In this callback, this means that the ad has been displayed.
    }

 })
```
</code-block>

<code-block title="Java">
```java
//you have to set the method that is or not get a AdData.
trekAd.setTrekAdStatusListener(new TrekAdStatusCallBack() {
        @Override
        public void onAdError(@NotNull String message) {
            //ad error callback
        }

        @Override
        public void onAdLoaded(@NotNull AdData adData) {
            //In this callback, it means that you will receive an advertisement.
            //adData is an ad data.
        }

        @Override
        public void onAdClicked(@NotNull AdData adData) {
            //In this callback, it means that the  ad was clicked.
        }

        @Override
        public void onAdImpression(@NotNull View view) {
            //In this callback, this means that the ad has been displayed.
        }
    });
```
</code-block>
</code-group>

### Step 4: Request an Ad

The **`setCategory()`** method is optional. You can skip it if you don't want to set it.

<code-group>
<code-block title="Kotlin" active>
```kotlin
trekAd
.setPlaceUid("YOUR_UUID")//Ex."0000-12345-6789-000"
.setCategory("YOUR_CATEGORY_STRING_WHAT_EVERY_YOU_WANT")//Ex."news"
.applyTrekAd()
```
</code-block>

<code-block title="Java">
```java
trekAd
.setPlaceUid("YOUR_UUID")//Ex."0000-12345-6789-000"
.setCategory("YOUR_CATEGORY_STRING_WHAT_EVERY_YOU_WANT")//Ex."news"
.applyTrekAd();
```
</code-block>
</code-group>

### Step 5: Register Ad View and Set Layout

You need to register ads in **`onAdloaded()`**method to receive the impression and click events. More specifically, register ad view and set layout in **`TrekAdStatusListener()`** method of**`onAdLoaded`**.

<code-group>
<code-block title="Kotlin" active>
```kotlin
override fun onAdLoaded(adData: AdData) {
    
    //Registered an ad view
    trekAd.registerBannerAd(context,trekBannerView,adData)
       
}
```
</code-block>

<code-block title="Java">
```java
@Override
public void onAdLoaded(@NotNull AdData adData) {

      //Registered an ad view
       trekAd.registerBannerAd(context,trekBannerView,adData)

}
```
</code-block>
</code-group>
