# Installation

Follow these steps to download and include SDK in your project:

**Step 1: [**Including the SDK**](installation.md#including)**\
**Step 2: [**Initialization**](installation.md#step-2-initialization)**

### Step 1: Including the SDK <a href="including" id="including"></a>

**Using Gradle**

![](https://previews.dropbox.com/p/thumb/ABbMLYwIfP5o2XBqEvbwaHob1ZUOLai0iEwnzODdReEC1BgU2kUcivKDSIxLJTDYRuont_6vvyhu8tOJE9txAddaLJPq3uTGrQ8gb1_xIOtxcAXM69ZNI9ddMdmVsodGeyHpB4a1Y5cWviLbpWYqZ29qUpY9agKrAZ96kCq4KkGp37BabHk7K6iFt3Cvaxf8FyVsTAkl6nArNUvCYdqD1tPm5SNK_BXA3eHkvmQmL0XM1VVsPBYunUNp-_bNBjYDFxueozp6TXlNy9iT_CqqNL4-0QFgU1QCY-VTNtClJSq0Q5GBHtFsqDxLMyXOz0VOkS3iqE2FfcplD5WjqTnbyUJDjgn_0GNbXpK6fLHTLNr2Lw/p.jpeg)

Add the following dependencies to your **app-level** build.gradle (not project!), to use the latest AotterTrek SDK:

```kotlin
dependencies {
    implementation 'com.google.code.gson:gson:2.8.6'
    implementation 'com.aotter.net:trek-sdk-android-kotlin:4.3.1'
}
```

Please add the following code snippet in your **project-level** build.gradle.

```kotlin
allprojects {
    repositories {
        google()
        mavenCentral()
        
        // Add this 
        maven { url 'https://deps.aotter.net/artifactory/libs-release-local' }
        
    }
}
```

**AndroidManifest.XML**

Please add the following code snippet in your AndroidManifest.XML

```XML
<uses-permission android:name="com.google.android.gms.permission.AD_ID" />
```

### Step 2: Initialization

After including SDK in your project, you will also need to implement the following line of code to initialize SDK. If you have implemented extensions to the application class, it is recommended to initialize the AotterTrek service in `onCreate()` method. In the following example, the `context` variable represents an `Application` or `Activity`.

<code-group>
<code-block title="Kotlin" active>
```kotlin
class MyApplication:Application {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        
        //AotterService is a singleton pattren, please just initialize once.
        AotterTrek.initAotterService(context,"YOUR_CLIENT_ID"){
            //aotter service init finshed callback.
        }
                   
    }
}
```
</code-block>

<code-block title="Java">
```java
public class MyApplication extends Application {
    @Override
    public void onCreate() {
        super.onCreate();
       
        //AotterService is a singleton pattren, please just initialize once.
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
        
    }
}
```
</code-block>
</code-group>

Please use **your client id** for initialization which can be found in the [application list](https://trek.aotter.net/publisher/list/app). \
We also provide test client id for receiving test ads only.

* **Test Client ID : `DNgNhOwfbUkOqcQFI+uD`**

::: tip TIPS
You can switch **test / production** mode by changing **test client id to your own client id.**
:::

### Next Steps

* Follow our guides for integrating different Ad Formats in your app:
  * <link-component title="Native Ad" link="../ad-formats/native-ad"/>
  * <link-component title="Supr.Ad" link="../ad-formats/supr.ad"/>
  * <link-component title="Banner Ad" link="../ad-formats/banner-ad"/>
* Or you would like to check out the demo app:
  * <link-component title="Demo" link="../sdk-integration/trek-example-app-demo"/>
