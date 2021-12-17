# Supr.Ad

Follow these steps to build a Supr.Ad layout and then requests it.

Step 1: [Create Supr.Ad Layout](supr.ad-layout.md#step-1-create-supr-ad-layout)\
Step 2: [Create `AdLoader`](supr.ad-layout.md#step-2-create-adloader)\
Step 3: [Set Ad Layout and Bind Ad View](supr.ad-layout.md#step-3-set-ad-layout-and-bind-ad-view)\
Step 4: [Create `AdRequest`](supr.ad-layout.md#step-4-create-adrequest)\
Step 5: [Request an Ad](supr.ad-layout.md#step-5-request-an-ad)

### Step 1: Create Supr.Ad Layout

#### **Example Supr.Ad layout**

::: tip TIPS:
**Please use `NativeAdView` as the container of your layout**
:::

```kotlin
<com.google.android.gms.ads.nativead.NativeAdView
    android:id="@+id/admobNativeView"
    android:layout_width="match_parent"
    android:layout_height="wrap_content">

        <com.google.android.gms.ads.nativead.MediaView
            android:id="@+id/admobMediaView"
            android:layout_width="match_parent"
            android:layout_height="wrap_content" 
            />

</com.google.android.gms.ads.nativead.NativeAdView>
```

### Step 2: Create `AdLoader`

<code-group>
<code-block title="Kotlin" active>
```kotlin
val adLoader = AdLoader
    .Builder(context, "YOUR_ADUNIT")
    .forNativeAd { nativeAd ->
          //successfully get an ad
     }
    .build()
```
</code-block>

<code-block title="Java">
```java
AdLoader  adLoader = new AdLoader.Builder(context,"YOUR_ADUNIT")
    .forNativeAd(new NativeAd.OnNativeAdLoadedListener() {
        @Override
        public void onNativeAdLoaded(@NonNull @NotNull NativeAd nativeAd) {
            //successfully get an ad
        }
    })
.build();
```
</code-block>
</code-group>

### Step 3: Set Ad Layout and Bind Ad View

Set layout and bind ad view in the callback function of `forNativeAd`.

<code-group>
<code-block title="Kotlin" active>
```kotlin
.....

forNativeAd { nativeAd ->

  //Please binding ad view
  viewBinding.admobNativeView.mediaView = viewBinding.admobMediaView

  admobNativeView.setNativeAd(nativeAd)

  nativeAd.extras.getSerializable(TrekAdmobDataKey.AD_DATA)?.let{

  val adData = it as AdData
  
  TrekAdmobAdViewBinder.bindingAdView(adData,admobNativeView)

  } 
  //      
   
}

.....
```
</code-block>

<code-block title="Java">
```java
.....


.forNativeAd(new NativeAd.OnNativeAdLoadedListener() {
  @Override
    public void onNativeAdLoaded(@NonNull @NotNull NativeAd nativeAd) {
                        
     //Please binding ad view
      viewBinding.admobNativeView.setMediaView(viewBinding.admobMediaView);
  
      admobNativeAdView.setNativeAd(nativeAd);
  
      if(nativeAd.getExtras().getSerializable(TrekAdmobDataKey.AD_DATA) != null){

        AdData adData = (AdData)nativeAd.getExtras().getSerializable(TrekAdmobDataKey.AD_DATA);
  
        TrekAdmobAdViewBinder.INSTANCE.bindingAdView(adData,admobNativeAdView);
  
      }
  
      //      

    }
})

.....
```
</code-block>
</code-group>

### **Step 4: Create `AdRequest`**

<code-group>
<code-block title="Kotlin" active>
```kotlin
val adRequest = AdRequest
    .Builder()
    .build()

//or you can bundle a category

val bundle = Bundle()

bundle.putString(TrekAdmobDataKey.CATEGORY, "YOU_CATEGORY")//ex."news"

val adRequest = AdRequest
    .Builder()
    .addCustomEventExtrasBundle(TrekAdmobCustomEventNative::class.java, bundle)
    .build()
```
</code-block>

<code-block title="Java">
```java
AdRequest adRequest = new AdRequest
    .Builder()
    .build();

//or you can bundle a category

Bundle bundle = new Bundle();

bundle.putString(TrekAdmobDataKey.CATEGORY, "YOU_CATEGORY");//ex."news"

AdRequest adRequest = new AdRequest
    .Builder()
    .addCustomEventExtrasBundle(TrekAdmobCustomEventNative.class, bundle)
    .build();
```
</code-block>
</code-group>


### **Step 5: Request an Ad**

<code-group>
<code-block title="Kotlin" active>
```kotlin
adLoader.loadAd(adRequest)
```
</code-block>

<code-block title="Java">
```java
adLoader.loadAd(adRequest);
```
</code-block>
</code-group>

