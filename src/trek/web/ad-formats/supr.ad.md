# Supr.Ad

Follow these steps to build a Supr.Ad layout and then requests it.

Step 1: [Insert `<div>` tag ](supr.ad.md#step-1-insert-less-than-div-greater-than-tag)\
Step 2: [Execute Ad Request](supr.ad.md#step-2-execute-ad-request)

### Step 1: Insert `<div>` tag&#x20;

You can insert the following line to where you want to show the ad.\
Please replace`placement_UUID` with your ad place UUID.

```markup
<div id="suprAdContainer" data-place="placement_UUID"></div>
```

### Step 2: Execute Ad Request

```markup
<script>
  AotterTrek('suprAd', {
    selector: '#suprAdContainer',
    onAdLoad: () => {
        // Ad shows. Do something.
    },
    onAdFail: () => {
        // Ad fail. Do something.
    }
  })
</script>
```

### Done! 👏🏼

![](https://previews.dropbox.com/p/thumb/ABZiAyS0fv8okJ0vS8FZMP5MRB-Mner5PGTarUnoQ9P1d8EZzHtz0qEuZ2ZRTmjSFU-ZUI3G5hxC1sz17e4gbaonud-cP-v2uQtwurSIdln1X3HGbKfasyHesFPhVyzVJlhnG7_dH1AvYBM-1RPo4b8fB-oUZNJ1KuGTdT1EqvVFemGtSKWx_jgvsX5zpgY0YJ_IE_KDi75xttiii-PjRhvPnfoWxgSnFGV26MkdzeQbElogxKwJtT8GSYbVDgj_30t_LNiW3mlVFSIP9H0D15xvJ0PReGKASdM8HwrjgnMy5ZOb9do5GXitZsfvxY0xfKCtqXpLDQ_zxZ9xtjLv8fzaJPdKLaK-ZLmnX-x-bAbOww/p.png)
