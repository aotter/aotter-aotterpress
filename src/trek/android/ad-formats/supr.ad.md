# Supr.Ad

Follow these steps to build a Supr.Ad layout and then requests it.

Step 1: [Create Supr.Ad Layout](supr.ad.md#step-1-create-supr-ad-layout)\
Step 2: [Create `trekAd` Object Instance](supr.ad.md#step-2-create-trekad-object-instance)\
Step 3: [Set Ad Status Listener Callback](supr.ad.md#step-3-set-ad-status-listener-callback)\
Step 4: [Request an Ad](supr.ad.md#step-4-request-an-ad)\
Step 5: [Register Ad View and Set Layout](supr.ad.md#step-5-register-ad-view-and-set-layout)

### **AdData Parameter**

| Variable         | Type   | Description     | **Always have value** | Required to be displayed |
| ---------------- | ------ | --------------- | --------------------- | ------------------------ |
| `advertiserName` | String | Advertiser Name | Yes                   | Recommended              |
| `title`          | String | Ad Headline     | Yes                   | Recommended              |
| `text`           | String | Ad Text         | No, could be empty    | Recommended              |
| `callToAction`   | String | Ex: "瞭解詳情"      | No, could be empty    | Recommended              |

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

#### - isVideoAd

You can use this method to check the ad is a video ad or not.

<code-group>
<code-block title="Kotlin" active>
```kotlin
adData.isVideoAd()
```
</code-block>

<code-block title="Java">
```java
adData.isVideoAd();
```
</code-block>
</code-group>

### Step 1: Create Supr.Ad Layout

Build your own Supr.Ad layout or you can check out the example layout below.

#### **Example Supr.Ad layout**

```kotlin
<androidx.constraintlayout.widget.ConstraintLayout
                android:id="@+id/adContainer"
                android:layout_width="match_parent"
                android:layout_height="wrap_content"
                >

                <com.aotter.net.trek.ads.TrekMediaView
                  android:id="@+id/trekMediaView"
                  android:layout_width="match_parent"
                  android:layout_height="wrap_content"
                />

</androidx.constraintlayout.widget.ConstraintLayout>
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

You need to register ads in **`onAdloaded()`** method to receive the impression and click events. More specifically, register ad view and set layout in **`TrekAdStatusListener()`** method of **`onAdLoaded`**.

<code-group>
<code-block title="Kotlin" active>
```kotlin
override fun onAdLoaded(adData: AdData) {
    
    val advertiserName:String = adata.advertiserName

    val title:String = adData.title
    
    val text:String = adData.text
    
    val callToAction:String = adData.callToAction
       
    //Registered an ad view
    trekAd.registerSuprAd(context,adContainer,trekMediaView,adData)
       
}
```
</code-block>

<code-block title="Java">
```java
@Override
public void onAdLoaded(@NotNull AdData adData) {

      String advertiserName = adData.getAdvertiserName();

      String title = adData.getTitle();

      String text = adData.getText();

      String callToAction = adData.getCallToAction();


      //Registered an ad view
      trekAd.registerSuprAd(context,adContainer,trekMediaView,adData);

}
```
</code-block>
</code-group>
