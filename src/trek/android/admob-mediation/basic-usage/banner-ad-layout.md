# Banner Ad

Follow these steps to build a banner ad layout and then requests it.

Step 1: [Create Banner Ad Layout](banner-ad-layout.md#step-1-create-banner-ad-layout)\
Step 2: [Create `AdView`](banner-ad-layout.md#step-2-create-adview)\
Step 3: [Set Ad Listener](banner-ad-layout.md#step-3-set-ad-listener)\
Step 4: [Set Ad Layout](banner-ad-layout.md#step-4-set-ad-layout)\
Step 5: [Create `AdRequest`](banner-ad-layout.md#step-5-create-adrequest)\
Step 6: [Request an Ad](banner-ad-layout.md#step-6-request-an-ad)

### Step 1: Create Banner Ad Layout

#### **Example Banner ad layout**

```kotlin
<LinearLayout
        android:id="@+id/linearLayout"
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:orientation="vertical"
/>
```

### **Step 2: Create `AdView`**

<code-group>
<code-block title="Kotlin" active>
```kotlin
val bannerAdView = AdView(context)

bannerAdView.adSize = AdSize.BANNER

bannerAdView.adUnitId = "YOUR_ADUNID"
```
</code-block>

<code-block title="Java">
```java
AdView bannerAdView = new AdView(context);

bannerAdView.setAdSize(AdSize.BANNER); 

bannerAdView.setAdUnitId("YOUR_ADUNID"); 
```
</code-block>
</code-group>


### Step 3: Set Ad Listener

<code-group>
<code-block title="Kotlin" active>
```kotlin
bannerAdView.adListener = object : AdListener() {
            override fun onAdLoaded() {
                super.onAdLoaded()
                //load ad success
            }

            override fun onAdFailedToLoad(loadAdError: LoadAdError) {
                super.onAdFailedToLoad(loadAdError)
                //load ad Failed
            }
        }
```
</code-block>

<code-block title="Java">
```java
bannerAdView.setAdListener(new AdListener() {

            @Override
            public void onAdLoaded() {
                super.onAdLoaded();    
                //load ad success 
            }

            @Override
            public void onAdFailedToLoad(@NonNull LoadAdError loadAdError) {
                super.onAdFailedToLoad(loadAdError); 
                 //load ad Failed           
            }
            
        });
```
</code-block>
</code-group>


### Step 4: Set Ad Layout

Set layout in the callback function of `onAdLoaded`.

<code-group>
<code-block title="Kotlin" active>
```kotlin
.....

override fun onAdLoaded() {
    super.onAdLoaded()
    linearLayout.addView(bannerAdView)
}

.....
```
</code-block>

<code-block title="Java">
```java
.....

@Override
public void onAdLoaded() {
    super.onAdLoaded();           
    linearLayout.addView(bannerAdView);          
}

.....
```
</code-block>
</code-group>


### **Step 5: Create `AdRequest`**

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
    .addCustomEventExtrasBundle(TrekAdmobCustomEventBanner::class.java, bundle)
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
    .addCustomEventExtrasBundle(TrekAdmobCustomEventBanner.class, bundle)
    .build();
```
</code-block>
</code-group>


### Step 6: Request an Ad

<code-group>
<code-block title="Kotlin" active>
```kotlin
bannerAdView.loadAd(adRequest)
```
</code-block>

<code-block title="Java">
```java
bannerAdView.loadAd(adRequest);
```
</code-block>
</code-group>
