# Prerequisites

### Configure AdMob Ad Units

Add `adUnit` in your mediation group and fill in `Class Name`, `Parameter`.

* Class Name

It must be the same name as your "**Custom Event**" class file name, for example:

\- Native Ad:  `AotterTrekGADCustomEvenNativeAd` \
\- Supr.Ad: `AotterTrekGADCustomEvenNativeAd`\
\- Banner Ad: `AotterTrekGADCustomEventBannerAd`

* Parameter

Please follow the format: `{"adType":"xxx", "adPlace":"xxx"}`&#x20;

|           | adType     | adPlace                      |
| --------- | ---------- | ---------------------------- |
| Native Ad | `nativeAd` | **AotterTrek Ad Place UUID** |
| Supr.Ad   | `suprAd`   | **AotterTrek Ad Place UUID** |
| Banner Ad | `suprAd`   | **AotterTrek Ad Place UUID** |

Take native ad as an example, its configuring will be set like below:

![](https://previews.dropbox.com/p/thumb/ABZkzFDgbvznl7XkGIDayL1cMnMgFtqsiBntj6ALON8PSqlmN0iLo9xFk9q_ZhvjHpPNPf2r58MoCZUWlUlo_tES6sIuoSbogaKEO1G1zoQZ5hLu9TPrqDaXpqLZIG7RI3OmppdVMMeKy9DdToTiSDHkaerbuWa2oOGfovzTKd_JQz3nhhqOuFyhhjEPl8lmGrlGJJvSKPEYT0gB6xYBKfD6HDDj6-o5R7CSqCUhkIttlKPlVlBtG-2c3-x8pxUnY_KJY6_iR4KoIHM-TuIdusm9O4toSWXNEQqvMyXZPuYo9JvWlmPxN2Ev9G9QLOFAx7a08Sc54ajtdV26BN9f3Dby68V2akMqZdbPCzjZ6i6Aig/p.png)
