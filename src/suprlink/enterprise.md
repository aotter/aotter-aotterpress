# SuprLink 企業版 API 文件 - https://bean.fun

[[toc]]

## Authentication
APIkey-based Basic Auth
  - username: `{your username}`
  - password: `{your password token}`

## Create link if Missing
### `POST` `https://bean.fun/api/link/create_if_missing`
 - Content-Type: application/json
 - api 業務邏輯說明
  - 會檢查 `defaultLink` 的值，若相同的 `defaultLink` 已存在，會以本 request payload 內容更新之，若不存在則新增一組資料
  - 同時兩個 request 帶有相同的 `defaultLink` 時，可能會建立重複的資料而回應不同的縮址代碼。
 - request payload 詳細說明
    - `seo`: 社群分享 SEO 標籤
      - `seo.title`: 社群分享標題
      - `seo.description`: 社群分享內文
      - `seo.image`: 社群分享代表圖片網址
    - `defaultLink`: 預設目標網址，必填
    - `criteria`: 裝置條件與分流網址
      - `criteria.filters.os_name`: 篩選使用者的裝置作業系統，支援的值為 `ios`, `android`, `macos` 與 `windows`
      - `criteria.links`: 符合這個 criteria 的使用者，可能被導向的目標網址
      - `criteria.links.link`: 導向的目標網址
      - `criteria.links.weight`: 這個導向的目標網址被系統抽中的權重
    - `tracker`: 數據追蹤: 系統會幫忙代送數據給客戶提供的追蹤工具
      - `tracker.ga.clientId`: google analytics id e.g. `UA-34664897-17`
      - `tracker.gtm.clientId`: google tag manager id e.g. `GTM-5FJ556`
      - `tracker.fbPixel.clientId`: fb pixel id id e.g. `646573342519219`
     
 - Example request
```json
{  
   "seo":{  
      "title":"beanfun! 串聯你的專屬生活圈",
      "description":"交友聊天、分享生活點滴，讓您結交更多相同興趣的夥伴，現在即刻下載體驗！",
      "image":"https://beanfunwebsite.blob.core.windows.net/beanfunwebsite/fda81c9e-9fa8-4470-8d5f-4eefbfdbc147.png"
   },
   "defaultLink":"https://beanfun.com",
   "criteria":[  
      {  
         "filters":{  
            "os_name":[  
               "ios"
            ]
         },
         "links":[  
            {  
               "link":"https://apps.apple.com/us/app/beanfun/id1108282446"
            }
         ]
      },
      {  
         "filters":{  
            "os_name":[  
               "android"
            ]
         },
         "links":[  
            {  
               "link":"https://play.google.com/store/apps/details?id=com.gamania.beanfun"
            }
         ]
      },
      {  
         "filters":{  
            "os_name":[  
               "windows"
            ]
         },
         "links":[  
            {  
               "link":"https://im.beanfun.com"
            }
         ]
      },
      {  
         "filters":{  
            "os_name":[  
               "macos"
            ]
         },
         "links":[  
            {  
               "link":"https://im.beanfun.com"
            }
         ]
      }
   ],
   "tracker":{  
      "ga":{  
         "clientId":"YOUR_GOOGLE_ANALYTICS_ID"
      },
      "gtm":{  
         "clientId":"YOUR_GOOGLE_TAG_MANAGER_ID"
      },
      "fbPixel":{  
         "clientId":"YOUR_FB_PIXEL_ID"
      }
   }
}
```
  - Example response
  - 回傳為一個完整的縮址資料物件，另外多一個 `_id` 即為此短網址的縮址代碼
```json
{
  "_id":"JHQEu",
  ...
}
```
  - 此時 `https://bean.fun/JHQEu` 連結已可使用

## Create link
### `POST` `https://bean.fun/api/link`

 - request 格式與 Create Link if Missing 完全相同
 - 系統一定會新增一筆資料，回傳一個新的縮址代碼。


## Update link
### `PUT` `https://bean.fun/api/link/:code`

 - request 格式與 Create Link 完全相同
 - 系統會直接以新資料取代舊的資料

## Delete link
### `DELETE` `https://bean.fun/api/link/:code`

