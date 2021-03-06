# Native Ad

### Add Native Ads to an Android APP

The Native Ad API allows you to build a customized experience for the ads you show in your app. When using Native Ad API, instead of receiving an ad ready to be displayed, you will receive a group of **ad parameters** such as a title, an image, a call to action, and you are able to use them to construct a custom view where the ad is shown.\
\
Follow these steps to build a native ad layout that fits your application and then requests it.

Step 1: [Create Native Ad Layout](native-ad.md#step-1-create-native-ad-layout)\
Step 2: [Create `trekAd` Object Instance](native-ad.md#step-2-create-trekad-object-instance)\
Step 3: [Set Ad Status Listener Callback](native-ad.md#step-3-set-ad-status-listener-callback)\
Step 4: [Request an Ad](native-ad.md#step-4-request-an-ad)\
Step 5: [Register Ad View and Set Layout](native-ad.md#step-5-register-ad-view-and-set-layout)

### AdData Parameters

| Variable         | Type   | Description     |  **Always have value** |  Required to be displayed |
| ---------------- | ------ | --------------- | ---------------------- | ------------------------- |
| `advertiserName` | String | Advertiser Name | Yes                    | Recommended               |
| `title`          | String | Ad Headline     | Yes                    | Required                  |
| `text`           | String | Ad Text         | No, could be empty     | Recommended               |
| `imgMain`        | String | Size: 1200x628  | Yes                    | Recommended               |
| `imgIcon`        | String | Size: 82x82     | Yes                    | Recommended               |
| `imgIconHd`      | String | Size: 300x300   | Yes                    | Recommended               |
| `callToAction`   | String | Ex: "瞭解詳情"      | Yes                    | Recommended               |
| `sponsor`        | String | Sponsored       | Yes                    | Required                  |


![and_nativead](https://previews.dropbox.com/p/thumb/ABbOrsK4EBA95YGunbhvO8OZg5DtqpqR5OZeUZx2kCNMYaWA8kaK0iOHurN-qi61BEhvP7J0gaqzZy5KxHU377T_8gl0DOhMvw7EtY_xsbIqyi_EjggdNQK9dxKY1CAGCgtoMGe6CiuK3y_GacqPHULx9KJKtviWYzupBfHF005IawqK-0xvZBOj-k3aJFzKD-I91HYBAuNYzdGCTCqGqrrlBqeRuOuL72Vi2TaFRZPuW5V9Rr1KulVOs4njgTmD9aIVE_HiG3hZBwOIxM79ekt31EtCGyvn4efYjE7qG6XBgOpp6lHPCYo5QmHF24Sv4_oPVPPKqt7kH48ri1PUnCh20OB0kukW5GwETzMbHcgH4A/p.png)

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

### Step 1: Create Native Ad Layout

Build your own native ad layout or you can check out the example layout below.

#### **Example Native Ad Layout**

```kotlin
<androidx.cardview.widget.CardView
                android:id="@+id/nativeAdView"
                android:layout_width="match_parent"
                android:layout_height="100dp"
                app:layout_constraintBottom_toBottomOf="parent"
                app:layout_constraintEnd_toEndOf="parent"
                app:layout_constraintStart_toStartOf="parent"
                app:layout_constraintTop_toTopOf="parent">

    <androidx.constraintlayout.widget.ConstraintLayout
                    android:layout_width="match_parent"
                    android:layout_height="match_parent">

                    <TextView
                        android:id="@+id/advertiser"
                        android:layout_width="0dp"
                        android:layout_height="wrap_content"
                        app:layout_constraintEnd_toEndOf="parent"
                        app:layout_constraintStart_toEndOf="@+id/adImg10"
                        app:layout_constraintTop_toTopOf="parent" />

                    <TextView
                        android:id="@+id/adTitle"
                        android:layout_width="0dp"
                        android:layout_height="0dp"
                        app:layout_constraintBottom_toBottomOf="parent"
                        app:layout_constraintEnd_toEndOf="parent"
                        app:layout_constraintStart_toEndOf="@+id/adImg10"
                        app:layout_constraintTop_toBottomOf="@+id/advertiser10" />


     </androidx.constraintlayout.widget.ConstraintLayout>

</androidx.cardview.widget.CardView>
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

Please inject the **TrekAdStatusCallBack** interface in **`setTrekStatusCallBack()`** method.

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

The **`setCategory()`**method is optional. You can skip it if you don't want to set it.

<code-group>
<code-block title="Kotlin" active>
```kotlin
trekAd
.setPlaceUid("YOUR_UUID")//Ex."0000-12345-6789-000"
.setCategory("YOUR_CATEGORY_STRING_WHICH_YOU_WANT")//Ex."news"
.applyTrekAd()
```
</code-block>

<code-block title="Java">
```java
trekAd
.setPlaceUid("YOUR_UUID")//Ex."0000-12345-6789-000"
.setCategory("YOUR_CATEGORY_STRING_WHICH_YOU_WANT")//Ex."news"
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
    
    val advertiserName:String = adata.advertiserName

    val title:String = adData.title
    
    val text:String = adData.text
    
    var imgMain:String = adData.imgMain //size:1200x628
    
    var imgIcon:String = adData.imgIcon //size:82x82
    
    var imgIconHd:String = adData.imgIconHd //size:300x300
    
    val callToAction:String = adData.callToAction
    
    val sponsor:String = adData.sponsor
    
    //Registered an ad view
    trekAd.registerNativeAd(context,nativeAdView,adData)
       
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

      String imgMain = adData.getImgMain(); //size:1200x628

      String imgIcon = adData.getImgIcon(); //size:82x82

      String imgIconHd = adData.getImgIconHd(); //size:300x300

      String callToAction = adData.getCallToAction();

      String sponsor = adData.getSponsor();


      //Registered an ad view
      trekAd.registerNativeAd(context,nativeAdView,adData);

}
```
</code-block>
</code-group>
