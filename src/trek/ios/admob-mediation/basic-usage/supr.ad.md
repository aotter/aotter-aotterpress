# Supr.Ad

Follow these steps to build a Supr.Ad layout and then requests it.

Step 1: [Initialize AotterTrek SDK ](supr.ad.md#step-1-initialize-aottertrek-sdk)\
Step 2: [Customize _TableViewCell_ / _CollectionViewCell_ / _ViewController_](supr.ad.md#step-2-customize-tableviewcell-collectionviewcell-viewcontroller)

::: warning Notice:
If your project is based on Swift, please import_ Aotter-iOS-SDK.h_ in the bridge file.
:::

```swift
#import <AotterTrek-iOS-SDK/AotterTrek-iOS-SDK.h>
```

### Step 1: Initialize AotterTrek SDK&#x20;

_File: AppDelegate.m_

```swift
/// Need to import Lib
#import <AotterTrek-iOS-SDK/AotterTrek-iOS-SDK.h>
#import <GoogleMobileAds/GoogleMobileAds.h>
.
.
.

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {
    // Override point for customization after application launch.
    
    [[GADMobileAds sharedInstance] startWithCompletionHandler:nil];
    
    [[AotterTrek sharedAPI] initTrekServiceWithClientId:@"Your Client ID"
                                                   secret:@"Your Client Secret"];
    
    // Open Log
    //[[AotterTrek sharedAPI] performSelector:@selector(enableLoggerLevelDevDetail)];
    
    return YES;
}
```

### Step 2: Customize TableViewCell / CollectionViewCell / ViewController

Here we customize **TableViewCell** : `TrekNativeAdTableViewCell`

::: warning Notice:
**View Class** depends on the GoogleMobileAds SDK version\
GoogleMobileAds SDK version 8 and above: `GADNativeAdView`&#x20;
:::

![](https://previews.dropbox.com/p/thumb/ABZvB9M6HNku5Yi9t_goFeoAT1PjK168ecDM3svsimoEFheCWzxy1mwJqcNGjINp4SeBLr-GzSYk-bhMUVSc9AGBxtRDNHTxpj5Gn1_1_mSLWWyGGI3Sf1eauXKFke5BMLmY3sKPr_y21ACSDpRjaCvQlMliMsigLlJh5n30lYkf8mKy8LgGffc7H1AyjittNC58SOsQmtK_7mfIwO0hJlnLuZWdtyp1iESF4IlXqlWbmt29zPEGivKFQNdFePYDmdK-ymzdYLfKkK4cGaCt6fVL77T_dY7K5kczwOH222wQ087VEpGY_GNWOP9xf775htSIo4LCDQlpRfYLxG8coM7rJWVpSUUEaA_BkQ8uoSte5g/p.png)

**- TrekNativeAdTableViewCell**

::: details TrekNativeAdTableViewCell.h
\- **GoogleMobileAds SDK version 8 and above**

```swift
#import <UIKit/UIKit.h>
#import <AotterTrek-iOS-SDK/AotterTrek-iOS-SDK.h>
#import <GoogleMobileAds/GoogleMobileAds.h>
#import <SDWebImage/SDWebImage.h>

NS_ASSUME_NONNULL_BEGIN

@interface TrekNativeAdTableViewCell : UITableViewCell
@property(nonatomic, strong) GADNativeAdView *nativeAdView; 

- (void)setGADNativeAdData:(GADNativeAd *)nativeAd withViewSize:(CGSize)size;

@end

NS_ASSUME_NONNULL_END
```
:::

::: details TrekNativeAdTableViewCell.m
### Declare data method

#### - **GoogleMobileAds SDK version 8 and above** 

```swift
- (void)setGADNativeAdData:(GADNativeAd *)nativeAd withViewSize:(CGSize)size {
    
    for (UIView *subView in self.contentView.subviews) {
        [subView removeFromSuperview];
    }

    CGRect rect = CGRectMake(0, 0, size.width, size.height);
    GADMediaView *gADMediaView = [[GADMediaView alloc]initWithFrame:rect];
    gADMediaView.mediaContent = nativeAd.mediaContent;
    [self.contentView addSubview:gADMediaView];

    [gADMediaView setTranslatesAutoresizingMaskIntoConstraints:NO];

    [gADMediaView setTranslatesAutoresizingMaskIntoConstraints:NO];
    [gADMediaView.leadingAnchor constraintEqualToAnchor:self.contentView.leadingAnchor].active = YES;
    [gADMediaView.trailingAnchor constraintEqualToAnchor:self.contentView.trailingAnchor].active = YES;
    [gADMediaView.topAnchor constraintEqualToAnchor:self.contentView.topAnchor].active = YES;
    [gADMediaView.bottomAnchor constraintEqualToAnchor:self.contentView.bottomAnchor].active = YES;
}
```
:::

::: details TrekNativeAdTableViewCell.xib
![TrekNativeAdTableViewCell](https://previews.dropbox.com/p/thumb/ABYfxVsZ86MKin-JJ5_U3Pd7jmtEkpLZNWRVRAjys3NtPmBHRC0GbfeAMIqPmJYTERIERqJHTHSEKsYBbbZBTSAj1Q1sj8dfuhJ_4KW8fvvj5UHkjfghPRGO-IV4-CBhH0sqemAeRX6xgAu5t4m6ek2OWaLvyqV4Wcp4pmEjqYqTjAf8ec-68mmDAkuwH6v4M2PrNRypmY6ZiUwy1Hw8dbBiQ9xHCsAj3uuJdSIau4jUNzzU6Wyl5FkYZB-qa0gt7rexvPVN7kLJMglV9h0XSP0h2ianxhznwJstM51rmP1EzmDdofCusyvXMcb3Nadz3em4pbizxBUosb7XW_3qmlYQZSLKruBwC9YX6JyWYGHO0A/p.png)
:::

\- **YourViewController**

::: details YourViewController.m
\- **GoogleMobileAds SDK version 8 and above**

```swift
// Define the display position of the ad in the TableView
static NSInteger googleMediationSuprAdPosition = 8;
.
.
.
@interface SuprAdViewController ()<GADNativeAdLoaderDelegate, UITableViewDataSource, UITableViewDelegate> {
    
    GADNativeAd *_gADUnifiedSuprAd;
    UIView *_suprAdView;
}

@property UIRefreshControl *refreshControl;
@property (atomic, strong) GADAdLoader *adLoader;
@property (weak, nonatomic) IBOutlet UITableView *suprAdTableView;

@end

@implementation YourViewController

- (void)viewDidLoad {
    [super viewDidLoad];
  
    [self setupTableVie];
    [self setupRefreshControl];
    [self setupGADAdLoader];
}

#pragma mark : Setup TableView

- (void)setupTableVie {
    self.suprAdTableView.dataSource = self;
    self.suprAdTableView.delegate = self;
    
    
    [self.suprAdTableView registerClass:UITableViewCell.class forCellReuseIdentifier:@"Cell"];
    
    [self.suprAdTableView registerNib:[UINib nibWithNibName:@"TrekSuprAdTableViewCell" bundle:nil] forCellReuseIdentifier:@"TrekSuprAdTableViewCell"];
}

- (void)setupRefreshControl {
    self.refreshControl = [[UIRefreshControl alloc]init];
    
    [self.refreshControl addTarget:self action:@selector(onRefreshTable) forControlEvents:UIControlEventValueChanged];
    [self.suprAdTableView addSubview:self.refreshControl];
}

#pragma mark : Setup GADAdLoader

- (void)setupGADAdLoader {
    
    // GoogleMobileAds version 8 above
    self.adLoader = [[GADAdLoader alloc]initWithAdUnitID: @"<Your adUnit Id>"
                                      rootViewController: self
                                                 adTypes: @[kGADAdLoaderAdTypeNative]
                                                 options: @[]];
    
    self.adLoader.delegate = self;

    [self adLoaderLoadRequest];
}

- (void)adLoaderLoadRequest {
    GADRequest *request = [GADRequest request];
    GADCustomEventExtras *extra = [[GADCustomEventExtras alloc] init];
    // FIll in categories like "news"、"movie" at CATEGORIES
    [extra setExtras:@{@"category":@"CATEGORIES"} forLabel:@"AotterTrekGADCustomEventNativeAd"];
    [request registerAdNetworkExtras:extra];
}

#pragma mark - UITableViewDataSource

- (NSInteger)numberOfSectionsInTableView:(UITableView *)tableView {
    return 1;
}

- (NSInteger)tableView:(UITableView *)tableView numberOfRowsInSection:(NSInteger)section {
    return 30;
}

- (UITableViewCell *)tableView:(UITableView *)tableView cellForRowAtIndexPath:(NSIndexPath *)indexPath {
    if (indexPath.row == googleMediationSuprAdPosition) {
        if(_gADUnifiedSuprAd != nil) {
            TrekSuprAdTableViewCell *trekSuprAdTableViewCell = [tableView dequeueReusableCellWithIdentifier:@"TrekSuprAdTableViewCell" forIndexPath:indexPath];
            
            if ([[_gADUnifiedSuprAd.extraAssets allKeys]containsObject:@"adSizeWidth"] &&
                [[_gADUnifiedSuprAd.extraAssets allKeys]containsObject:@"adSizeHeight"]) {
                
                // get ad prefered AdSize
                NSString *width = _gADUnifiedSuprAd.extraAssets[@"adSizeWidth"];
                NSString *height = _gADUnifiedSuprAd.extraAssets[@"adSizeHeight"];
                double adSizeWidth = [width doubleValue];
                double adSizeHeight = [height doubleValue];

                CGFloat viewWidth = UIScreen.mainScreen.bounds.size.width;
                CGFloat viewHeight = viewWidth * adSizeHeight/adSizeWidth;
                int adheight = (int)viewHeight;
                CGSize preferedMediaViewSize = CGSizeMake(viewWidth, adheight);
                
                [trekSuprAdTableViewCell setGADNativeAdData:_gADUnifiedSuprAd withViewSize:preferedMediaViewSize];
            }
            
            return trekSuprAdTableViewCell;
        }
    }
    
    
    UITableViewCell *cell = [tableView dequeueReusableCellWithIdentifier:@"Cell" forIndexPath:indexPath];
    cell.textLabel.text = [[NSString alloc]initWithFormat:@"index:%ld",(long)indexPath.row];
    return  cell;
}

#pragma mark - UITableViewDelegate

- (CGFloat)tableView:(UITableView *)tableView heightForRowAtIndexPath:(NSIndexPath *)indexPath {

    if (indexPath.row == googleMediationSuprAdPosition) {
        if ([[_gADUnifiedSuprAd.extraAssets allKeys]containsObject:@"adSizeWidth"] &&
            [[_gADUnifiedSuprAd.extraAssets allKeys]containsObject:@"adSizeHeight"]) {
            
            // get ad prefered AdSize
            NSString *width = _gADUnifiedSuprAd.extraAssets[@"adSizeWidth"];
            NSString *height = _gADUnifiedSuprAd.extraAssets[@"adSizeHeight"];
            double adSizeWidth = [width doubleValue];
            double adSizeHeight = [height doubleValue];

            CGFloat viewWidth = UIScreen.mainScreen.bounds.size.width;
            CGFloat viewHeight = viewWidth * adSizeHeight/adSizeWidth;
            
            return _gADUnifiedSuprAd == nil ? 0:viewHeight;
        }
    }
    
    return 80;
}

// Supr.Ad need to be notified when the ad view is scrolled, 
// you should always add this method:
#pragma mark : ScrlloView delegate

- (void)scrollViewDidScroll:(UIScrollView *)scrollView {
    if (_gADUnifiedSuprAd != nil) {
        [[NSNotificationCenter defaultCenter]postNotificationName:@"SuprAdScrolled"
                                                           object:self
                                                         userInfo:nil];
    }
}


#pragma mark - GADNativeAdLoaderDelegate

- (void)adLoader:(GADAdLoader *)adLoader didReceiveNativeAd:(GADNativeAd *)nativeAd {

    // Delegated nativeAd are able to receive its Custom Ad View，
    // This part can put nativeAd into CustomTableViewCell to get data.

    if (nativeAd != nil) {

        if ([[nativeAd.extraAssets allKeys]containsObject:@"trekAd"]) {
            NSString *adType = nativeAd.extraAssets[@"trekAd"];

            if ([adType isEqualToString:@"suprAd"]) {
                _gADUnifiedSuprAd = nativeAd;
            }
        }
    }

    [self.suprAdTableView reloadData];
}

- (void)adLoader:(GADAdLoader *)adLoader didFailToReceiveAdWithError:(NSError *)error {
    NSLog(@"Error Message:%@",error.description);
}


@end
```
:::

::: warning Notice:
In`YourViewController.m` - `adLoaderLoadRequest`\
When requesting ads, the label parameter should be corresponding to the label set in the AdMob dashboard.
:::

![](https://previews.dropbox.com/p/thumb/ABZgZQDNItaU9dkRuRdG3M3HEEMPm1BvtCGkE4mcfT6k9UMlt8TNv17cKRiH2iH4_xSQJSL0-ofSa-un7DlA0m8ZBATwVuEGZKSjIkPH2i6JlgBRsNzyic4Ci_BItHh73n19aQ9cdELtt1ZZwGcMq5FgmYkn2HYLbl3hq1ZvrEFi9iM1M46I8yTGsSJz9qT-aosZYwgkNLLDtaLa6QfWZ8Ks8Xug5o-eqVKW0sS2LGm7XegTxOe9ilC__KOsPnsyRUfdncnVeCe0ewnGgL5L7y1IkKkdLlHEdxfkqsvQ-YGNll07DQWGlRqAHVpRkczExLiCDsufodp9m9jDqenhzhlwu857AZ_561cZhhPh-WeM7g/p.png)

![](https://previews.dropbox.com/p/thumb/ABbbKjdlVdpVaFaMii3rbYfQsEH1Z9T8bpF6m79-7qFSmS3t4f2Ypuwo6w7V3pMT1syqRyy2-6lClE10yW2mPLF489Ygj62rsUahigwkcL6gmmNDZMH8IoBOGGVuWmetf9Mfmgm75-v84Zfs7ibdEzf7ocUV7gW9QzagudoeJOFG4jB1SRjVA0blRZoseijKBWLYGefQ2-y4SCVENEOuzAThjBLGlrv67DaeEhquT7994IHT7g5bKP7sm4wrAw3J53mG3FRQ3A7ee9qlIboR5bx7PawXh6aH2-FjgFF7_yKrnTGDKtaDljWdM0OsZgMPx3A3QRwjBN09AD2rJc_689uVVa_gGpe546AR4JAoUJEBDw/p.png)


### Special Cases

There are some special cases when implementing Supr.Ad in your app. \
Please read the section [Special Cases](../../ad-formats/supr.ad.md#special-cases)

