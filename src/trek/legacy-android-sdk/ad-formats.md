# Ad Formats

We provide **three different kinds of ad**. Checkout the following tabs for more information.

::: tip TIPS:
🧙🏼‍♂️ : You need to build a ad unit in AotterTrek UI console. Enter app list and manage ad-slot, choose an ad type and size.
:::

::: details Banner Ad
## Banner Ad 

### Create Ad slot 

Enter the slot management of [Application List](https://trek.aotter.net/publisher/list/app) , create slot name and choose a type.

![Click ad-slot management](https://previews.dropbox.com/p/thumb/ABZs9FcFxDB_pYeRg071ki7r2SjPOaGnzDCQOODEszrXfs7cWla0R0CaT7_W-hj87xhvP-O5WWlr1HpqW0P5VwHhQ3D24Mrb9URqi2B5G_aCHxsJi6-WLJm712PusvjFlwGc2UAmE1-rHoRdS1zZ7yX1vWZjZ7-JDSao3Rd8uwjOeLJTxNgTfXdfSOLGJHYuJM3uj53bOuKQC1f5mjc1jQ04K3H1mnSNfPYTjZjBhNlLZ_968bcfoRvo6aaOpjCYTlUY4S56oqKcR5TSDNq5v0qkbkOcPW2v6Iw2yHrEZnQGqsh1qz2A97axApaXDMlPRdDondmREX9bnBKqSqv6BQFZ_3yTtlgFB1VPn5LdLsxzRA/p.jpeg)

![](https://previews.dropbox.com/p/thumb/ABaX7SK_THPYgcHO6RIda0G22SuYMdTxqRE80SFTAjMabFHMPBi6yU7pe9C_9kW7HRpKqRnGbiNx3m0U8ui2y0kF_EOT7HkB4ba98ZbT8SYwOJ0Iuzmd_bCBsurN3Y9RZyvWb6Oa_bKnGwuOXspb5Rj1Frb_g3LqN_a_gl5Knwil4eUn800tS1Xit8KUyzjkx6WycuJHp5rY3cc6wTBhQ2qa0cBwYS1Z2ouomIYwEFoOtIy_4Kv_XI0avDbtil03aRGB0hPRGP-O4VKOPdaA3Db7vs2VZ35TSt94huLiSkRVuMpxVd_L6-gEgsKUvAk_u4IltcJ5LNSvmFNALH7MKHgV9zXMeuHoL9zWzV0wWemA8Q/p.png)

### Example APP form [Aotter GitHub](https://github.com/aotter/AotterTrek-Android-SDK/blob/master/android-sample/app/src/main/java/com/aotter/net/treksampleapp/activity/BannerAdListViewActivity.java)  

```java
@BindView(R.id.listview)
ListView mListView;

@BindView(R.id.ad_banner)
TKMediaView mTkMediaView;

@BindView(R.id.ad_content_layout)
LinearLayout mAd_content_layout;

private TKAdN tkAdN;

// "banner" is custom payload place name
//  place name will show on Trek Consloe , please define it.
//  tkAdN = new TKAdN(this, "banner", "NATIVE"); if don't have category, you can without it.
tkAdN = new TKAdN(this, "banner", "category_name", "SUPR_AD");
tkAdN.setAdListener(new TKAdListener() {

  @Override
  public void onAdLoaded(TKAdNative nativeAd) {
    ...
  }

  @Override
  public void onAdError(TKError tkError) {
    ...
  }

  @Override
  public void onAdClicked(TKAdNative nativeAd) {
    ...
  }

  @Override
  public void onAdImpression(TKAdNative nativeAd) {
    ...
  }
});
```

```java
@Override
public void onAdLoaded(TKAdNative nativeAd) {

    tkAdN.registerAdView(activity, mAd_content_layout, mTkMediaView, nativeAd);
}
```

### Lifecycle 

```java
@Override
public void onPause() {
  super.onPause();

  if (tkAdN != null) {
    tkAdN.pause();
  }
}

@Override
public void onResume() {
  super.onResume();

  if (tkAdN != null) {
    tkAdN.resume();
  }
}


@Override
public void onDestroy() {
  super.onDestroy();

  if (tkAdN != null) {
    tkAdN.destroy();
  }
}
```

#### isExpired 

Check the ad is expired or not.

```java
nativeAd.isExpired();
```
:::

::: details Native Ad
## Native Ad 

### Create Ad slot

Enter the slot management of [Application List](https://trek.aotter.net/publisher/list/app) , create slot name and choose a type.

![Click ad-slot management](https://previews.dropbox.com/p/thumb/ABZ5KzXK03Kpb_Nh-GB015ZUcY1YlnZFWRvZrS_Pk_NFLGx6NFOVGE21WVoOW8dS9q6XW9LifzAtyzsrG4JwT0XrhCXqMCXRZLvGc1exd72_MGRehlUCuFvq1SPP3lJQbVFiYS2qwQbBt7Yf8fsFpeSCdOg34yJbIo0NRVFi0V8KfIIe5wEbXzepp_ztdfYsDEw34wNzTzKhG_utkQo79VIAwfM62QUiLRmAMjQNDC_ndcCPW-xhbNG_Evd_2Q46J4bHBtrsl5PSwVV0319WuMiacZNJopZXn2CgUbf_XnO08SxVTZJmSlf2yJLF3Bc4X6D7E1bAQmsXPeiiUSjZ1bxQEPVeXbTfiAW7ymM6uSfOzA/p.jpeg)

![Choose native ad](https://previews.dropbox.com/p/thumb/ABaHD3ZCH5DVApNbdGQ4flcb71Lf8Zf-ndTMQL4ngtHsvpIlCyX0CDlOqyZoqer_drh3YCWOyuTI1wwDiPS9IGFAqAwqFLBMtzSF9ptCd7yL1u3OJVrbB-etbEHvqPlaCKa3DX_IJvP-dSFQCPAvpB_U_2EumoN1lcC74Z6gJcpbvTObOIzDIcFMFLPbHTKbb25hjSJmWglXfv6XwzszBQq1t60dZToehLObmjysHxEs0Q0i9NPP1sAZvcZo-Ce9xZFq35hbWaGLl6klMBKlLudaZ75-VWwL3wJGhcOxTg3BnvUZg3oUWnLOzgiWY-FWnZaa94IPVBS_D-tkhxDktSUQjZ728zbwknPipum7gib2Ug/p.png)

測試key->名稱"banner" / "supr\_Ad" / "native"

正式key -> 名稱要換成自己建造的版位名稱



### Sample Code&#x20;

```java
@Bind(R.id.native_ad_container)
LinearLayout mNative_ad_container;

@Bind(R.id.native_ad_title)
TextView mNative_ad_title;

@Bind(R.id.native_ad_body)
TextView mNative_ad_body;

private TKAdN tkAdN;

// "native" is custom payload place name
//  place name will show on Trek Consloe , please define it.
//  tkAdN = new TKAdN(this, "native", "NATIVE"); if don't have category, you can without it.
tkAdN = new TKAdN(this, "native", "category_name", "NATIVE");
tkAdN.setAdListener(new TKAdListener() {

  @Override
  public void onAdLoaded(TKAdNative nativeAd) {
    ...
  }

  @Override
  public void onAdError(TKError tkError) {
    ...
  }

  @Override
  public void onAdClicked(TKAdNative nativeAd) {
    ...
  }

  @Override
  public void onAdImpression(TKAdNative nativeAd) {
    ...
  }
});
```

```java
@Override
public void onAdLoaded(TKAdNative nativeAd) {

  String adTitle = nativeAd.getAdTitle();
  String adText = nativeAd.getAdText();
  String adActionText = nativeAd.getActionText();
  String adSponser = nativeAd.getAdSponsor();
  String adVertiserName = nativeAd.getAdAdvertiserName();
  String adimg_icon_url = nativeAd.getAdImgIcon(); //82x82
  String adimg_icon_hd_url = nativeAd.getAdImgIconHd(); //300x300
  String adimg_main_url = nativeAd.getAdImgMain(); //1200x627

  mNative_ad_title.setText(adTitle);
  mNative_ad_body.setText(adText);

  tkAdN.registerAdView(activity, mNative_ad_container, nativeAd);
}
```

### Lifecycle

```java
@Override
public void onPause() {
  super.onPause();

  if (tkAdN != null) {
    tkAdN.pause();
  }
}

@Override
public void onResume() {
  super.onResume();

  if (tkAdN != null) {
    tkAdN.resume();
  }
}


@Override
public void onDestroy() {
  super.onDestroy();

  if (tkAdN != null) {
    tkAdN.destroy();
  }
}
```

#### isExpired 

Check the ad is expired or not.

```java
nativeAd.isExpired();
```
:::

::: details Supr.Ad
## Supr.Ad 

### Create Ad slot 

Enter the slot management of [Application List](https://trek.aotter.net/publisher/list/app) , create slot name and choose a type.

![Click ad-slot management](https://previews.dropbox.com/p/thumb/ABaJwOPtmJpU4u1fm_s1DlmFKf70jIInY0jfNltzHo2VNdTs3Sa_L7NCD_2ZuBYqIhRyBxKGVBmz0oA0lv9Z1nQqs1nwjRzrgEm2s4WWTTVy8hqEi4SfwD3aNqZITjkdTSgN5a7AL2GdEeATs4VfOY4gHZhdBDyts1rV0auJNgpVOlpVtAtMsvysuOu8b-4e897_ZmCKBhvpr2pmu0kq9ZsFe1Gu26PHAo46c9IePdBfkBis8Qbs6LimyuBkHB_lIgxL9tynHwqjZkiNZl5RNjtxN5TPPEuliLGMNroByw5wMVnoISvxz_VBYQTTrq4oTyG7Fy7BVmm8xd8NnqY0se4Cv-jvp2Uej2aulEuRVLojdA/p.jpeg)

![Choose Supr ad and size](https://previews.dropbox.com/p/thumb/ABbCkjQQPbRRIYUAfxkYYHmwLn9U6bERrzAoq1wclM0uRCDTThZ5Ffl0SVzuShg2AYVsUSqjkWsZ8KqzxQ3J2XpLbrBzcHYobYXMmJPZ6iS8IcbSNy8ZTYR-bCRfTiT6WlLcu28S_UhwPdGzUeAW9uGWdmC4oYnCbl34dU15QrFsz92wRqNrCrturLUVG0Qbl3SGjv48aXt7RiyTnBiQrntGjEDJsslotVmTYVDNboStx13KQ4kAWG--C36RvRYZWtGlNWgfgryLRAnhzxFyiJSOOidTaJApPxfgydJL1Hbc76jtBeloBYP7no_T11gRQF8t8xpjv_D0i8_mq4tmxyhbKdfcxRJbTnMYS6WyyLz0Tw/p.png)

### Simple Code

```markup
<LinearLayout
    android:id="@+id/ad_container"
    android:layout_width="wrap_content"
    android:layout_height="wrap_content"
    android:orientation="vertical"
    android:padding="10dp">

    <com.aotter.net.trek.ads.view.TKMediaView
        android:id="@+id/ad_view"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
    />
</LinearLayout>
```

```java
@Bind(R.id.ad_container)
LinearLayout mAdContainer;

@BindView(R.id.ad_view)
TKMediaView mTKMediaView;

private TKAdN tkAdN;

// "suprad" is custom payload place name
//  place name will show on Trek Consloe , please define it.
//  tkAdN = new TKAdN(this, "suprad", "SUPR_AD"); if don't have category, you can without it.
tkAdN = new TKAdN(this, "suprad", "category_name", "SUPR_AD");
tkAdN.setAdListener(new TKAdListener() {

  @Override
  public void onAdLoaded(TKAdNative nativeAd) {
    ...
  }

  @Override
  public void onAdError(TKError tkError) {
    ...
  }

  @Override
  public void onAdClicked(TKAdNative nativeAd) {
    ...
  }

  @Override
  public void onAdImpression(TKAdNative nativeAd) {
    ...
  }
});
```

```java
@Override
public void onAdLoaded(NativeAd nativeAd) {
  ...

  tkAdN.registerAdView(activity, mAdContainer, mTKMediaView, nativeAd);
}
```

### Lifecycle 

```java
@Override
public void onPause() {
  super.onPause();

  if (tkAdN != null) {
    tkAdN.pause();
  }
}

@Override
public void onResume() {
  super.onResume();

  if (tkAdN != null) {
    tkAdN.resume();
  }
}


@Override
public void onDestroy() {
  super.onDestroy();

  if (tkAdN != null) {
    tkAdN.destroy();
  }
}
```

#### isExpired 

Check the ad is expired or not.

```java
nativeAd.isExpired();
```

#### isVideoAd 

Check the ad is video or not.

```java
nativeAd.isVideoAd();
```
:::