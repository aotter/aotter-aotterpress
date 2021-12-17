# Prerequisites

Before you can integrate mediation that **AotterTrek Network as a third-party ad network** for an ad format, you need to integrate that ad format into your AdMob app:

* **[**AdMob Native Ads**](https://developers.google.com/admob/android/native/start)**
* [**AdMob Banner Ads**](https://developers.google.com/admob/android/banner)

If you don't familiar with AdMob, please refer to the links below:

* **New to Google AdMob? Read** [**Admob - Get Started**](https://developers.google.com/admob/android/quick-start)
* **New to mediation? Read** [**AdMob mediation - Overview**](https://developers.google.com/admob/android/mediate)

### Configure AdMob Ad Units

Add `adUnit` in your mediation group and fill in `Class Name`, `Parameter`.

* Class Name&#x20;
  * Native Ads: _com.admob.mediation.kotlin.ads.TrekAdmobCustomEventNative_
  * Banner Ads: _com.admob.mediation.kotlin.ads.TrekAdmobCustomEventBanner_
* Parameter
  * {"clientId":"**YOUR\_TREK\_CLIENT\_ID**","placeUid":"**YOUR\_TREK\_PLACE\_UUID**"}

![](https://previews.dropbox.com/p/thumb/ABaVc6-wS5fTT5n5x9HxomQ-4s751ql1ljgNbFZiu3FsFz_w2SYVJ2_vbUCx7kaPaRa0uNhQ0_VKe9DpIYB60-w8ZpwQuqz_MigRY_u5iVcEmSC9lN6mojsm4WdYYuTp26Wt7DNQKZ7ALQVl6vA4RxnAcaBieFSrV7QKyOVzWksO4khuMLCRK0yWBQ3yHn2QNAQFbpOFAw9FRm_nLSXP97yn60ydSrx9Gyene_5bLv2TNyb8CuDASRTCVAP49WASv6pZMoqFFQfSjUxzEr3f6jTq0RgZk-q1c_vbXIIwJdZdgtGci7qeHGcd8HzoGABYoovrYPY8gloYOygVo83-OiGWvVPLdbffsfX4tAH32Oqj9w/p.png)
