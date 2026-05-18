---
title: 获取微信落地页列表 全部接口
platform: tencent_ads
source_url: https://developers.e.qq.com/v3.0/docs/api/wechat_pages/get
doc_id: tencent_ads_v3_0_docs_api_wechat_pages_get
source_id: tencent_ads_v3_0_docs_api_wechat_pages_get
---
# 获取微信落地页列表 [全部接口](https://developers.e.qq.com/v3.0/docs/apilist)

| 所属权限 | ads_management |
| --- | --- |
| 请求地址 | wechat_pages/get |
| 请求方法 | GET |

## 全局参数

全局参数是指每一个接口都需要使用到的参数。详情[参考](https://developers.e.qq.com/v3.0/pages/send_request)，代码案例[参考](https://developers.e.qq.com/v3.0/pages/send_request)。

| 参数名称 | 参数类型 |
| --- | --- |
| access_token | 授权令牌，完成 OAuth 2.0 授权后获得，参考[授权认证](https://developers.e.qq.com/docs/start/authorization)章节 |
| timestamp | 当前的时间戳，单位为秒，允许客户端请求最大时间误差为 300 秒。 MarketingAPI 所使用的时间戳，若无特殊说明，均为秒级时间戳 MarketingAPI 所使用的时区为 GMT+8，例如当时间戳为 1494840119 时，表示 2017-05-15 17:21:59 |
| nonce | 随机字串标识，不超过 32 个字符，由调用方自行生成，需保证全局唯一性 |

## 请求参数

标有*的参数为必填项

| 名称 | 类型 | 描述 |
| --- | --- | --- |
| account_id* | integer | 广告主帐号 id，有操作权限的帐号 id，不支持代理商 id |
| owner_uid | integer | 原生页授权方 uid，[\[获取原生页授权方信息\]](https://developers.e.qq.com/docs/api/tools/wechat_pages/wechat_pages_grantinfo_get) 默认值：该字段默认值为 0, 表示拉取当前广告主帐号下的原生页 |
| filtering | struct[] | 过滤条件，若此字段不传，或传空则视为无限制条件，marketing_carrier_id 必须和 marketing_goal、marketing_sub_goal、marketing_target_type、marketing_carrier_type 同时使用，详见 [\[过滤条件\]](https://developers.e.qq.com/docs/reference/illustration#filtering) 数组最小长度 1，最大长度 10 |
| field* | string | 过滤字段 可选值：{ page_id, page_name, adcreative_template_id, marketing_goal、marketing_sub_goal、marketing_target_type、marketing_carrier_type, page_type, marketing_carrier_id, canvas_type, page_status, site_set, marketing_scene, source_type, live_video_mode, live_video_sub_mode, live_notice_id, product_catalog_id, product_source, raw_adcreative_template_id, buying_type, product_mode } |
| operator* | enum | 操作符，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#api_filter_operator) 当 field 取值 page_id 时，可选值：{ EQUALS, IN } 当 field 取值 page_name 时，可选值：{ EQUALS, CONTAINS } 当 field 取值 adcreative_template_id 时，可选值：{ EQUALS } 当 field 取值 marketing_goal 时，可选值：{ EQUALS } 当 field 取值 marketing_sub_goal 时，可选值：{ EQUALS } 当 field 取值 marketing_target_type 时，可选值：{ EQUALS } 当 field 取值 marketing_carrier_type 时，可选值：{ EQUALS } 当 field 取值 page_type 时，可选值：{ EQUALS, IN } 当 field 取值 canvas_type 时，可选值：{ EQUALS, IN } 当 field 取值 marketing_carrier_id 时，可选值：{ EQUALS } 当 field 取值 page_status 时，可选值：{ IN } 当 field 取值 site_set 时，可选值：{ IN } 当 field 取值 marketing_scene 时，可选值：{ EQUALS } 当 field 取值 source_type 时，可选值：{ EQUALS } 当 field 取值 live_video_mode 时，可选值：{ EQUALS } 当 field 取值 live_video_sub_mode 时，可选值：{ EQUALS } 当 field 取值 live_notice_id 时，可选值：{ EQUALS } 当 field 取值 product_catalog_id 时，可选值：{ EQUALS } 当 field 取值 product_source 时，可选值：{ EQUALS } 当 field 取值 raw_adcreative_template_id 时，可选值：{ EQUALS } 当 field 取值 buying_type 时，可选值：{ EQUALS } 当 field 取值 product_mode 时，可选值：{ EQUALS } |
| values* | string[] | 字段取值 当 field 取值 page_id 且 operator 取值 EQUALS 时， 数组长度为 1 当 field 取值 page_id 且 operator 取值 IN 时， 数组最小长度 1，最大长度 100 当 field 取值 page_name 时，数组长度为 1 字段长度最小 1 字节，长度最大 120 字节 当 field 取值 adcreative_template_id 时，数组长度为 1 当 field 取值 marketing_goal 时，数组长度为 1 可选值：{ MARKETING_GOAL_UNKNOWN, MARKETING_GOAL_USER_GROWTH, MARKETING_GOAL_PRODUCT_SALES, MARKETING_GOAL_LEAD_RETENTION, MARKETING_GOAL_BRAND_PROMOTION, MARKETING_GOAL_INCREASE_FANS_INTERACTION } 当 field 取值 marketing_sub_goal 时，数组长度为 1 可选值：{ MARKETING_SUB_GOAL_UNKNOWN, MARKETING_SUB_GOAL_NEW_GAME_RESERVE, MARKETING_SUB_GOAL_NEW_GAME_TEST, MARKETING_SUB_GOAL_NEW_GAME_LAUNCH, MARKETING_SUB_GOAL_PLATEAU_PHASE_LAUNCH, MARKETING_SUB_GOAL_MINI_GAME_NEW_CUSTOMER_GROWTH, MARKETING_SUB_GOAL_MINI_GAME_RETURN_CUSTOMER_ENGAGEMENT, MARKETING_SUB_GOAL_APP_ACQUISITION, MARKETING_SUB_GOAL_APP_ACTIVATION, MARKETING_SUB_GOAL_NOT_INSTALL_USER, MARKETING_SUB_GOAL_PRE_INSTALL_USER, MARKETING_SUB_GOAL_UNLOADED_USER, MARKETING_SUB_GOAL_SHORT_INACTIVE_USER, MARKETING_SUB_GOAL_LONG_INACTIVE_USER, MARKETING_SUB_GOAL_GAME_VERSION_UPGRADE, MARKETING_SUB_GOAL_NEW_STORE_OPENING, MARKETING_SUB_GOAL_EVENING_PROMOTION, MARKETING_SUB_GOAL_SPECIAL_RELEASE } 当 field 取值 marketing_target_type 时，数组长度为 1 可选值：{ MARKETING_TARGET_TYPE_APP_ANDROID, MARKETING_TARGET_TYPE_APP_IOS, MARKETING_TARGET_TYPE_WECHAT_OFFICIAL_ACCOUNT, MARKETING_TARGET_TYPE_PRODUCT, MARKETING_TARGET_TYPE_TRAFFIC, MARKETING_TARGET_TYPE_LOCAL_STORE, MARKETING_TARGET_TYPE_WECHAT_MINI_GAME, MARKETING_TARGET_TYPE_CONSUMER_PRODUCT, MARKETING_TARGET_TYPE_WECHAT_CHANNELS, MARKETING_TARGET_TYPE_WECHAT_CHANNELS_LIVE, MARKETING_TARGET_TYPE_WECHAT_CHANNELS_LIVE_RESERVATION, MARKETING_TARGET_TYPE_MINI_PROGRAM_WECHAT, MARKETING_TARGET_TYPE_APP_QUICK_APP, MARKETING_TARGET_TYPE_CONSUME_MEDICAL, MARKETING_TARGET_TYPE_COMPREHENSIVE_HOUSEKEEPING, MARKETING_TARGET_TYPE_FICTION, MARKETING_TARGET_TYPE_SHORT_DRAMA, MARKETING_TARGET_TYPE_AUDIOVISUAL_ENTERTAINMENT, MARKETING_TARGET_TYPE_BEAUTY_AND_PERSONAL_CARE, MARKETING_TARGET_TYPE_WEDDING_AND_PORTRAIT_PHOTOGRAPHY, MARKETING_TARGET_TYPE_FRANCHISE_BRAND, MARKETING_TARGET_TYPE_ENTERPRISE_SERVICES, MARKETING_TARGET_TYPE_EXHIBITION_BOOTH_DESIGN, MARKETING_TARGET_TYPE_INSURANCE, MARKETING_TARGET_TYPE_BANK, MARKETING_TARGET_TYPE_CREDIT, MARKETING_TARGET_TYPE_INVESTMENT_CONSULTING, MARKETING_TARGET_TYPE_REAL_ESTATE, MARKETING_TARGET_TYPE_TELECOMMUNICATIONS_OPERATOR, MARKETING_TARGET_TYPE_TOURIST_ATTRACTIONS_TICKETS, MARKETING_TARGET_TYPE_RENOVATION_SERVICES, MARKETING_TARGET_TYPE_FURNITURE_AND_BUILDING_MATERIALS, MARKETING_TARGET_TYPE_EXHIBITION_SALES, MARKETING_TARGET_TYPE_MEDICINE_INDUSTRY_COMMERCIAL, MARKETING_TARGET_TYPE_FINANCE, MARKETING_TARGET_TYPE_LOCAL_STORE_PACKAGE, MARKETING_TARGET_TYPE_CATERING_AND_LEISURE, MARKETING_TARGET_TYPE_CHAIN_RESTAURANT, MARKETING_TARGET_TYPE_COMMODITY_SET, MARKETING_TARGET_TYPE_TOURIST_TRAVEL_ROUTE, MARKETING_TARGET_TYPE_TOURIST_CRUISE_LINE, MARKETING_TARGET_TYPE_TOURIST_HOTEL_SERVICE, MARKETING_TARGET_TYPE_TOURIST_AIRLINE_TICKETS, MARKETING_TARGET_TYPE_LOCAL_STORE_COMBINE_WITH_PRODUCT, MARKETING_TARGET_TYPE_ACTIVITY, MARKETING_TARGET_TYPE_STORE, MARKETING_TARGET_TYPE_MINI_GAME_QQ, MARKETING_TARGET_TYPE_PC_GAME, MARKETING_TARGET_TYPE_WECHAT_WORK, MARKETING_TARGET_TYPE_LIVE_STREAM_ROOM, MARKETING_TARGET_TYPE_PERSONAL_STORE, MARKETING_TARGET_TYPE_PLATFORM_CHANNEL, MARKETING_TARGET_TYPE_TWO_WHEEL_VEHICLE, MARKETING_TARGET_TYPE_GOVERNMENT_AFFAIRS, MARKETING_TARGET_TYPE_CAR_ECOLOGY, MARKETING_TARGET_TYPE_WECHAT_STORE_PRODUCT, MARKETING_TARGET_TYPE_APP_HARMONY, MARKETING_TARGET_TYPE_WECHAT_STORE_PRODUCT_SET, MARKETING_TARGET_TYPE_PRODUCT_AGGREGATION_PAGE, MARKETING_TARGET_TYPE_WECHAT_STORE, MARKETING_TARGET_TYPE_RESALE_AND_COMMERCIAL_LAND, MARKETING_TARGET_TYPE_VIDEO_PROGRAM, MARKETING_TARGET_TYPE_FUN_TEST, MARKETING_TARGET_TYPE_MATERNITY_PARENTING, MARKETING_TARGET_TYPE_LEISURE_ENTERTAINMENT, MARKETING_TARGET_TYPE_MEDICAL_INSTITUTION, MARKETING_TARGET_TYPE_WECHAT_CHANNELS_ACTIVITY } 当 field 取值 marketing_carrier_type 时，数组长度为 1 可选值：{ MARKETING_CARRIER_TYPE_UNKNOWN, MARKETING_CARRIER_TYPE_APP_ANDROID, MARKETING_CARRIER_TYPE_APP_IOS, MARKETING_CARRIER_TYPE_WECHAT_OFFICIAL_ACCOUNT, MARKETING_CARRIER_TYPE_JUMP_PAGE, MARKETING_CARRIER_TYPE_WECHAT_MINI_GAME, MARKETING_CARRIER_TYPE_WECHAT_CHANNELS_LIVE, MARKETING_CARRIER_TYPE_WECHAT_CHANNELS, MARKETING_CARRIER_TYPE_WECHAT_CHANNELS_LIVE_RESERVATION, MARKETING_CARRIER_TYPE_MINI_PROGRAM_WECHAT, MARKETING_CARRIER_TYPE_APP_QUICK_APP, MARKETING_CARRIER_TYPE_PC_GAME, MARKETING_CARRIER_TYPE_QQ_MINI_GAME, MARKETING_CARRIER_TYPE_APP_HARMONY } 当 field 取值 page_type 且 operator 取值 EQUALS 时， 数组长度为 1 可选值：{ PAGE_TYPE_WECHAT_CANVAS, PAGE_TYPE_WECHAT_CANVAS_MINI_PROGRAM } 当 field 取值 page_type 且 operator 取值 IN 时， 数组最小长度 1，最大长度 100 可选值：{ PAGE_TYPE_WECHAT_CANVAS, PAGE_TYPE_WECHAT_CANVAS_MINI_PROGRAM } 当 field 取值 canvas_type 时，数组最小长度 1，最大长度 100 可选值：{ CANVAS_TYPE_COMMON_PAGE } 当 field 取值 page_status 时，数组最小长度 1，最大长度 2 可选值：{ NORMAL, DELETED, PENDING } 当 field 取值 site_set 时，数组最小长度 1，最大长度 32 可选值：{ SITE_SET_MOBILE_UNION, SITE_SET_WECHAT, SITE_SET_TENCENT_NEWS, SITE_SET_TENCENT_VIDEO, SITE_SET_MOBILE_YYB, SITE_SET_PCQQ, SITE_SET_KANDIAN, SITE_SET_QQ_MUSIC_GAME, SITE_SET_MOMENTS, SITE_SET_CHANNELS, SITE_SET_WECHAT_SEARCH, SITE_SET_WECHAT_PLUGIN, SITE_SET_QBSEARCH, SITE_SET_SEARCH_SCENE, SITE_SET_SEARCH_MOBILE_UNION, SITE_SET_SMART } 当 field 取值 marketing_scene 时，数组长度为 1 可选值：{ DEFAULT, GAME_RESERVATION, GAME_PROMOTION, GAME_CLOSED_BETA_TEST, ECOMMERCE_GOODS_DIRECT_PURCHASE_DAILY, ECOMMERCE_GOODS_LIVE_PURCHASE_DAILY, ECOMMERCE_CONSUMER_COLLECT_CLUES_DAILY, ECOMMERCE_CONSUMER_ADD_FOLLOWERS_DAILY, ECOMMERCE_CONSUMER_OFFICIAL_ACCOUNTS_DAILY, ECOMMERCE_CONSUMER_CHANNELS_DAILY, ECOMMERCE_CONSUMER_ANDROID_NEW_DAILY, ECOMMERCE_CONSUMER_IOS_NEW_DAILY, ECOMMERCE_CONTENT_BRAND_DAILY } 当 field 取值 source_type 时，数组长度为 1 可选值：{ SOURCE_TYPE_EQQ, SOURCE_TYPE_MP } 当 field 取值 live_video_mode 时，数组长度为 1 可选值：{ LIVE_VIDEO_MODE_LIVE } 当 field 取值 live_video_sub_mode 时，数组长度为 1 可选值：{ LIVE_VIDEO_SUBMODE_LIVE_RESERVATION } 当 field 取值 live_notice_id 时，数组长度为 1 字段长度最小 1 字节，长度最大 1024 字节 当 field 取值 product_source 时，数组长度为 1 字段长度最小 1 字节，长度最大 128 字节 当 field 取值 raw_adcreative_template_id 时，数组长度为 1 当 field 取值 buying_type 时，数组长度为 1 可选值：{ BUYINGTYPE_AUCTION, BUYINGTYPE_CONTRACT, BUYINGTYPE_RESERVED, BUYINGTYPE_FIXED_PRICE } 当 field 取值 product_mode 时，数组长度为 1 可选值：{ SINGLE, MULTIPLE } |
| page | integer | 搜索页码 最小值 1，最大值 99999 默认值：1 |
| page_size | integer | 一页显示的数据条数 最小值 1，最大值 100 默认值：10 |

使用说明

page_status 参数在灰度中，目前仅支持[NORMAL]或[NORMAL,DELETED]两种组合

## 请求示例

```
curl -v -G 'https://api.e.qq.com/v3.0/wechat_pages/get?access_token=<ACCESS_TOKEN>&timestamp=<TIMESTAMP>&nonce=<NONCE>' \
-d 'account_id=111111111' \
-d 'filtering=[{"field":"page_id","operator":"EQUALS","values":[1]},{"field":"page_name","operator":"EQUALS","values":["test name"]},{"field":"adcreative_template_id","operator":"EQUALS","values":["263"]},{"field":"promoted_object_type","operator":"EQUALS","values":["PROMOTED_OBJECT_TYPE_LINK_WECHAT"]}]' \
-d 'page=1' \
-d 'page_size=10'
curl -v -G 'https://api.e.qq.com/v3.0/wechat_pages/get?access_token=<ACCESS_TOKEN>&timestamp=<TIMESTAMP>&nonce=<NONCE>' \
-d 'account_id=111111111' \
-d 'filtering=[{"field":"page_id","operator":"EQUALS","values":[1]},{"field":"page_name","operator":"EQUALS","values":["test name"]},{"field":"adcreative_template_id","operator":"EQUALS","values":["263"]},{"field":"promoted_object_type","operator":"EQUALS","values":["PROMOTED_OBJECT_TYPE_LINK_WECHAT"]}]' \
-d 'page=1' \
-d 'page_size=10'
```

## 应答字段

| 名称 | 类型 | 描述 |
| --- | --- | --- |
| list | struct[] | 返回信息列表 |
| page_id | int64 | 落地页 id |
| page_name | string | 落地页名称 |
| created_time | integer | 创建时间戳，（Unix 时间戳，单位为秒） |
| last_modified_time | integer | 最后修改时间戳，（Unix 时间戳，单位为秒） |
| page_template_id | integer | 落地页模板 id |
| page_elements_spec_list | struct[] | 组件素材内容，组件的同步顺序与原生页的展示顺序一致，即第一个同步组件为顶部展示元素 |
| element_type | enum | 原生页中组件类型，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#api_page_elements_type) |
| image_spec | struct | 图片组件元素 |
| image_id_list | string[] | 图片 id 列表 |
| video_spec | struct | 视频组件元素 |
| video_id | integer | 视频 id，通过 [\[videos 模块\]](https://developers.e.qq.com/v3.0/docs/api/videos/add) 上传视频后获得 |
| text_spec | struct | 文本组件元素 |
| text | string | 文本内容 |
| button_spec | struct | 按钮组件元素 |
| title | string | 按钮文案，具体长度以线下模板文档为主审核规范：原生页当含有 app_android_spec 或 app_ios_spec 元素时， 下载按钮文案必须含有“安装”或“下载”才允许使用 |
| url | string | 跳转链接的 url，按钮组件元素时传入，支持通配符形式%%target_url_mobile%% |
| link_spec | struct | 外链信息 |
| title | string | 按钮文案 |
| url | string | 跳转链接的 url，按钮组件元素时传入，支持通配符形式%%target_url_mobile%% |
| deep_link_android_spec | struct | Android 应用信息元素 |
| deep_link_url | string | 应用直达页 url |
| app_android_id | string | Android 应用 id |
| deep_link_ios_spec | struct | iOS 应用信息元素 |
| deep_link_url | string | 应用直达页 url |
| app_ios_id | string | iOS 应用 id |
| mini_program_spec | struct | 小程序信息，微信小程序信息 |
| mini_program_id | string | 小程序 id |
| mini_program_path | string | 小程序路径 |
| app_ios_spec | struct | iOS 应用信息元素 |
| deep_link_url | string | 应用直达页 url，支持通配符形式%%target_url_ios%% |
| app_ios_id | string | iOS 应用 id |
| app_android_spec | struct | Android 应用信息元素 |
| deep_link_url | string | 应用直达页 url，支持通配符形式%%target_url_android%% |
| app_android_id | string | Android 应用 id |
| app_android_channel_package_id | string | Android 应用渠道包 id，当前特指投放腾讯开放平台安卓应用的渠道包 id，从推广目标模块的读取接口可以获取 |
| app_market_package | string | 厂商应用商店包名，不为空则开启厂商应用商店下载 |
| mini_program_spec | struct | 小程序信息，微信小程序信息 |
| title | string | 按钮文案 |
| mini_program_id | string | 小程序 id |
| mini_program_path | string | 小程序路径 |
| mini_program_paths | string[] | 小程序落地页 path 列表 |
| mini_game_program_spec | struct | 小游戏信息，微信小游戏信息 |
| title | string | 按钮文案 |
| mini_game_program_id | string | 小程序 id |
| mini_game_program_path | string | 小游戏监控参数，需以英文字符?开头，如：?channel=xxxx，字段长度最小 1 个等宽字符，长度最大 250 个等宽字符（即字段最大长度为 250 个中文字或全角标点，500 个英文字或半角标点。一个等宽字符等价于一个中文，等价于两个英文。） |
| fengye_spec | struct | 枫叶信息 |
| title | string | 按钮文案 |
| fengye_id | string | 枫叶落地页 id |
| card_spec | struct | 卡券信息 |
| title | string | 按钮文案 |
| card_id | string | 微信卡券 id |
| follow_spec | struct | 关注公众号信息 |
| title | string | 按钮文案 |
| service_spec | struct | 客服组建信息 |
| title | string | 按钮文案 |
| wecom_spec | struct | 企业微信组件信息 |
| title | string | 企业微信组件，标题字段长度最小 1 个等宽字符，长度最大 10 个等宽字符（即字段最大长度为 10 个中文字或全角标点，20 个英文字或半角标点。） |
| groupid | integer | 企业微信组件客服组 id，[\[获取企业微信组件客服组\]](https://developers.e.qq.com/docs/api/tools/wechat_pages/wechat_pages_csgrouplist_get) |
| setid | integer | 地理位置集 id，groupid 或 setid 必填一个 |
| use_icon | integer | 是否在 button 组件下开启 icon 图标，（0：不使用； 1：使用），灰度开放中 |
| tel_spec | struct | 电话组件信息 |
| title | string | 电话组件标题，字段长度最小 1 个等宽字符，长度最大 10 个等宽字符（即字段最大长度为 10 个中文字或全角标点，20 个英文字或半角标点。） |
| phone_num | string | 电话组件标题，字段长度最小 1 个等宽字符，长度最大 12 个等宽字符（即字段最大长度为 10 个中文字或全角标点，20 个英文字或半角标点。） |
| video_channel_spec | struct | 关注视频号信息元素 |
| title | string | 按钮文案 |
| finder_nickname | string | 视频号昵称 默认值：以模板为准 |
| fast_follow | integer | 是否开启一键关注，0: 关闭, 1: 开启 默认值：以模板为准 |
| form_spec | struct | 表单组件元素 |
| title | string | 按钮文案，具体长度以线下模板文档为主 |
| element_shelf | struct | 图文复合组件 |
| shelf_spec | struct[] | 图文复合组件按钮信息，支持一行一个和一行两个 |
| shelf_button_spec | struct | 按钮信息 |
| link_spec | struct | 外链信息 |
| title | string | 按钮文案 |
| url | string | 跳转链接的 url，按钮组件元素时传入，支持通配符形式%%target_url_mobile%% |
| deep_link_android_spec | struct | Android 应用信息元素 |
| deep_link_url | string | 应用直达页 url |
| app_android_id | string | Android 应用 id |
| deep_link_ios_spec | struct | iOS 应用信息元素 |
| deep_link_url | string | 应用直达页 url |
| app_ios_id | string | iOS 应用 id |
| app_download_spec | struct | 应用下载信息 |
| title | string | 按钮文案，审核规范：原生页当含有 app_android_spec 或 app_ios_spec 元素时， 下载按钮文案必须含有“安装”或“下载”才允许使用 |
| app_ios_spec | struct | iOS 应用信息元素 |
| deep_link_url | string | 应用直达页 url，支持通配符形式%%target_url_ios%% |
| app_ios_id | string | iOS 应用 id |
| app_android_spec | struct | Android 应用信息元素 |
| deep_link_url | string | 应用直达页 url，支持通配符形式%%target_url_android%% |
| app_android_id | string | Android 应用 id |
| app_android_channel_package_id | string | Android 应用渠道包 id，当前特指投放腾讯开放平台安卓应用的渠道包 id，从推广目标模块的读取接口可以获取 |
| app_market_package | string | 厂商应用商店包名，不为空则开启厂商应用商店下载 |
| mini_program_spec | struct | 小程序信息，微信小程序信息 |
| title | string | 按钮文案 |
| mini_program_id | string | 小程序 id |
| mini_program_path | string | 小程序路径 |
| mini_program_paths | string[] | 小程序落地页 path 列表 |
| wecom_spec | struct | 企业微信组件信息 |
| title | string | 企业微信组件，标题字段长度最小 1 个等宽字符，长度最大 10 个等宽字符（即字段最大长度为 10 个中文字或全角标点，20 个英文字或半角标点。） |
| groupid | integer | 企业微信组件客服组 id，[\[获取企业微信组件客服组\]](https://developers.e.qq.com/docs/api/tools/wechat_pages/wechat_pages_csgrouplist_get) |
| setid | integer | 地理位置集 id，groupid 或 setid 必填一个 |
| image_id_list | string | 图片 id，通过 [\[images 模块\]](https://developers.e.qq.com/docs/api/business_assets/image/images_add) 上传图片后获得 |
| title | string | 图文复合标题文案， 悬浮组件：字段长度最小 1 个等宽字符，长度最大 10 个等宽字符（即字段最大长度为 10 个中文字或全角标点，20 个英文字或半角标点。） 单排货架组件：字段长度最小 1 个等宽字符，长度最大 12 个等宽字符（即字段最大长度为 12 个中文字或全角标点，24 个英文字或半角标点。） 双排货架组件：字段长度最小 1 个等宽字符，长度最大 10 个等宽字符（即字段最大长度为 10 个中文字或全角标点，20 个英文字或半角标点。） |
| desc | string | 图文复合描述文案， 悬浮组件：字段长度最小 1 个等宽字符，长度最大 14 个等宽字符（即字段最大长度为 14 个中文字或全角标点，28 个英文字或半角标点。） 单排货架组件：字段长度最小 1 个等宽字符，长度最大 15 个等宽字符（即字段最大长度为 15 个中文字或全角标点，30 个英文字或半角标点。） 双排货架组件：字段长度最小 1 个等宽字符，长度最大 12 个等宽字符（即字段最大长度为 12 个中文字或全角标点，24 个英文字或半角标点。） |
| element_float | struct | 悬浮组件 |
| image_id_list | string | 图片 id，通过 [\[images 模块\]](https://developers.e.qq.com/docs/api/business_assets/image/images_add) 上传图片后获得 |
| title | string | 图文复合标题文案， 悬浮组件：字段长度最小 1 个等宽字符，长度最大 10 个等宽字符（即字段最大长度为 10 个中文字或全角标点，20 个英文字或半角标点。） 单排货架组件：字段长度最小 1 个等宽字符，长度最大 12 个等宽字符（即字段最大长度为 12 个中文字或全角标点，24 个英文字或半角标点。） 双排货架组件：字段长度最小 1 个等宽字符，长度最大 10 个等宽字符（即字段最大长度为 10 个中文字或全角标点，20 个英文字或半角标点。） |
| desc | string | 图文复合描述文案， 悬浮组件：字段长度最小 1 个等宽字符，长度最大 14 个等宽字符（即字段最大长度为 14 个中文字或全角标点，28 个英文字或半角标点。） 单排货架组件：字段长度最小 1 个等宽字符，长度最大 15 个等宽字符（即字段最大长度为 15 个中文字或全角标点，30 个英文字或半角标点。） 双排货架组件：字段长度最小 1 个等宽字符，长度最大 12 个等宽字符（即字段最大长度为 12 个中文字或全角标点，24 个英文字或半角标点。） |
| float_button_spec | struct | 悬浮组件按钮 |
| link_spec | struct | 外链信息 |
| title | string | 按钮文案 |
| url | string | 跳转链接的 url，按钮组件元素时传入，支持通配符形式%%target_url_mobile%% |
| deep_link_android_spec | struct | Android 应用信息元素 |
| deep_link_url | string | 应用直达页 url |
| app_android_id | string | Android 应用 id |
| deep_link_ios_spec | struct | iOS 应用信息元素 |
| deep_link_url | string | 应用直达页 url |
| app_ios_id | string | iOS 应用 id |
| app_download_spec | struct | 应用下载信息 |
| title | string | 按钮文案，审核规范：原生页当含有 app_android_spec 或 app_ios_spec 元素时， 下载按钮文案必须含有“安装”或“下载”才允许使用 |
| app_ios_spec | struct | iOS 应用信息元素 |
| deep_link_url | string | 应用直达页 url，支持通配符形式%%target_url_ios%% |
| app_ios_id | string | iOS 应用 id |
| app_android_spec | struct | Android 应用信息元素 |
| deep_link_url | string | 应用直达页 url，支持通配符形式%%target_url_android%% |
| app_android_id | string | Android 应用 id |
| app_android_channel_package_id | string | Android 应用渠道包 id，当前特指投放腾讯开放平台安卓应用的渠道包 id，从推广目标模块的读取接口可以获取 |
| app_market_package | string | 厂商应用商店包名，不为空则开启厂商应用商店下载 |
| mini_program_spec | struct | 小程序信息，微信小程序信息 |
| title | string | 按钮文案 |
| mini_program_id | string | 小程序 id |
| mini_program_path | string | 小程序路径 |
| mini_program_paths | string[] | 小程序落地页 path 列表 |
| mini_game_program_spec | struct | 小游戏信息，微信小游戏信息 |
| title | string | 按钮文案 |
| mini_game_program_id | string | 小程序 id |
| mini_game_program_path | string | 小游戏监控参数，需以英文字符?开头，如：?channel=xxxx，字段长度最小 1 个等宽字符，长度最大 250 个等宽字符（即字段最大长度为 250 个中文字或全角标点，500 个英文字或半角标点。一个等宽字符等价于一个中文，等价于两个英文。） |
| fengye_spec | struct | 枫叶信息 |
| title | string | 按钮文案 |
| fengye_id | string | 枫叶落地页 id |
| card_spec | struct | 卡券信息 |
| title | string | 按钮文案 |
| card_id | string | 微信卡券 id |
| follow_spec | struct | 关注公众号信息 |
| title | string | 按钮文案 |
| service_spec | struct | 客服组建信息 |
| title | string | 按钮文案 |
| wecom_spec | struct | 企业微信组件信息 |
| title | string | 企业微信组件，标题字段长度最小 1 个等宽字符，长度最大 10 个等宽字符（即字段最大长度为 10 个中文字或全角标点，20 个英文字或半角标点。） |
| groupid | integer | 企业微信组件客服组 id，[\[获取企业微信组件客服组\]](https://developers.e.qq.com/docs/api/tools/wechat_pages/wechat_pages_csgrouplist_get) |
| setid | integer | 地理位置集 id，groupid 或 setid 必填一个 |
| element_goods | struct | 商品组件 |
| goods_button_spec | struct | 商品按钮 |
| title | string | 按钮文案 |
| element_swipe | struct | 上划组件元素 |
| jump_url | string | 上划组件跳转链接 |
| swipe_text | string | 上划组件文案，字段长度最小 1 个等宽字符，长度最大 10 等宽字符（即字段最大长度为 10 个中文字或全角标点，20 个英文字或半角标点。一个等宽字符等价于一个中文，等价于两个英文。） |
| element_webview | struct | webview 组件元素 |
| url | string | webview 链接 |
| element_animate_float | struct | 动画悬浮组件，灰度开放中 |
| image_id_list | string | 图片 id，通过 [\[images 模块\]](https://developers.e.qq.com/docs/api/business_assets/image/images_add) 上传图片后获得 |
| title | string | 图文复合标题文案， 悬浮组件：字段长度最小 1 个等宽字符，长度最大 10 个等宽字符（即字段最大长度为 10 个中文字或全角标点，20 个英文字或半角标点。） 单排货架组件：字段长度最小 1 个等宽字符，长度最大 12 个等宽字符（即字段最大长度为 12 个中文字或全角标点，24 个英文字或半角标点。） 双排货架组件：字段长度最小 1 个等宽字符，长度最大 10 个等宽字符（即字段最大长度为 10 个中文字或全角标点，20 个英文字或半角标点。） |
| desc | string | 图文复合描述文案， 悬浮组件：字段长度最小 1 个等宽字符，长度最大 14 个等宽字符（即字段最大长度为 14 个中文字或全角标点，28 个英文字或半角标点。） 单排货架组件：字段长度最小 1 个等宽字符，长度最大 15 个等宽字符（即字段最大长度为 15 个中文字或全角标点，30 个英文字或半角标点。） 双排货架组件：字段长度最小 1 个等宽字符，长度最大 12 个等宽字符（即字段最大长度为 12 个中文字或全角标点，24 个英文字或半角标点。） |
| animate_float_button_spec | struct | 动画悬浮组件按钮 |
| link_spec | struct | 外链信息 |
| title | string | 按钮文案 |
| url | string | 跳转链接的 url，按钮组件元素时传入，支持通配符形式%%target_url_mobile%% |
| deep_link_android_spec | struct | Android 应用信息元素 |
| deep_link_url | string | 应用直达页 url |
| app_android_id | string | Android 应用 id |
| deep_link_ios_spec | struct | iOS 应用信息元素 |
| deep_link_url | string | 应用直达页 url |
| app_ios_id | string | iOS 应用 id |
| app_download_spec | struct | 应用下载信息 |
| title | string | 按钮文案，审核规范：原生页当含有 app_android_spec 或 app_ios_spec 元素时， 下载按钮文案必须含有“安装”或“下载”才允许使用 |
| app_ios_spec | struct | iOS 应用信息元素 |
| deep_link_url | string | 应用直达页 url，支持通配符形式%%target_url_ios%% |
| app_ios_id | string | iOS 应用 id |
| app_android_spec | struct | Android 应用信息元素 |
| deep_link_url | string | 应用直达页 url，支持通配符形式%%target_url_android%% |
| app_android_id | string | Android 应用 id |
| app_android_channel_package_id | string | Android 应用渠道包 id，当前特指投放腾讯开放平台安卓应用的渠道包 id，从推广目标模块的读取接口可以获取 |
| app_market_package | string | 厂商应用商店包名，不为空则开启厂商应用商店下载 |
| follow_spec | struct | 关注公众号信息 |
| title | string | 按钮文案 |
| mini_program_spec | struct | 小程序信息，微信小程序信息 |
| title | string | 按钮文案 |
| mini_program_id | string | 小程序 id |
| mini_program_path | string | 小程序路径 |
| mini_program_paths | string[] | 小程序落地页 path 列表 |
| mini_game_program_spec | struct | 小游戏信息，微信小游戏信息 |
| title | string | 按钮文案 |
| mini_game_program_id | string | 小程序 id |
| mini_game_program_path | string | 小游戏监控参数，需以英文字符?开头，如：?channel=xxxx，字段长度最小 1 个等宽字符，长度最大 250 个等宽字符（即字段最大长度为 250 个中文字或全角标点，500 个英文字或半角标点。一个等宽字符等价于一个中文，等价于两个英文。） |
| fengye_spec | struct | 枫叶信息 |
| title | string | 按钮文案 |
| fengye_id | string | 枫叶落地页 id |
| card_spec | struct | 卡券信息 |
| title | string | 按钮文案 |
| card_id | string | 微信卡券 id |
| service_spec | struct | 客服组建信息 |
| title | string | 按钮文案 |
| wecom_spec | struct | 企业微信组件信息 |
| title | string | 企业微信组件，标题字段长度最小 1 个等宽字符，长度最大 10 个等宽字符（即字段最大长度为 10 个中文字或全角标点，20 个英文字或半角标点。） |
| groupid | integer | 企业微信组件客服组 id，[\[获取企业微信组件客服组\]](https://developers.e.qq.com/docs/api/tools/wechat_pages/wechat_pages_csgrouplist_get) |
| setid | integer | 地理位置集 id，groupid 或 setid 必填一个 |
| share_content_spec | struct | 微信原生页分享信息 |
| share_title | string | ，分享标题 |
| share_description | string | ，分享描述 |
| preview_url | string | 微信原生页的预览地址，1 小时内有效 |
| page_type | enum | 落地页类型，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#page_type) |
| source_type | enum | 视频/图片/原生页等素材的创建来源类型，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#api_wechat_page_source_type) |
| video_resource_status | enum | 微信原生页视频资源状态，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#api_wechat_page_resource_status) |
| canvas_type | enum | 原生页类型，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#api_canvas_type) |
| owner_uid | integer | 原生页授权方 uid，[\[获取原生页授权方信息\]](https://developers.e.qq.com/docs/api/tools/wechat_pages/wechat_pages_grantinfo_get) 默认值：该字段默认值为 0, 表示拉取当前广告主帐号下的原生页 |
| page_status | enum | 状态，状态定义，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#page_status) |
| page_info | struct | 分页配置信息 |
| page | integer | 搜索页码 默认值：1 |
| page_size | integer | 一页显示的数据条数 默认值：10 |
| total_number | integer | 总条数 |
| total_page | integer | 总页数 |

## 应答示例

```
{
    "code": 0,
    "message": "",
    "message_cn": "",
    "data": {
        "list": [
            {
                "page_id": 1,
                "page_name": "test name",
                "created_time": 1491019858,
                "last_modified_time": 1491098468,
                "page_template_id": "<PAGE_TEMPLATE_ID>",
                "page_elements_spec_list": [
                    {
                        "element_type": "IMAGE",
                        "image_spec": {
                            "image_id_list": [
                                "4152626:583dfc8e7f53a58db8293622b78a3c7f"
                            ]
                        }
                    },
                    {
                        "element_type": "BUTTON",
                        "button_spec": {
                            "title": "拼多多模板 1",
                            "url": "http%3a%2f%2fjd.com",
                            "app_ios_spec": {
                                "deep_link_url": "pinduoduo%3a%2f%2fcom.xunmeng.pinduoduo%2fgoods.html%3fgoods_id%3d3163709495%26_p_ads_channel%3dweixin%26_p_launch_type%3dadv%26_p_ads_set%3dshangxiang%26account_id%3dwx95c952f67a727090",
                                "app_ios_id": "1044283059"
                            },
                            "app_android_spec": {
                                "deep_link_url": "pinduoduo%3a%2f%2fcom.xunmeng.pinduoduo%2fgoods.html%3fgoods_id%3d3163709495%26_p_ads_channel%3dweixin%26_p_launch_type%3dadv%26_p_ads_set%3dshangxiang%26account_id%3dwx95c952f67a727090",
                                "app_android_id": "1104790111",
                                "app_android_channel_package_id": "72243366;000116083635303838333533"
                            }
                        }
                    },
                    {
                        "element_type": "IMAGE",
                        "image_spec": {
                            "image_id_list": [
                                "1613822"
                            ]
                        }
                    },
                    {
                        "element_type": "IMAGE",
                        "image_spec": {
                            "image_id_list": [
                                "1613374"
                            ]
                        }
                    },
                    {
                        "element_type": "BUTTON",
                        "button_spec": {
                            "title": "拼多多模板 1",
                            "url": "http%3a%2f%2fjd.com",
                            "app_ios_spec": {
                                "deep_link_url": "pinduoduo%3a%2f%2fcom.xunmeng.pinduoduo%2fgoods.html%3fgoods_id%3d3163709495%26_p_ads_channel%3dweixin%26_p_launch_type%3dadv%26_p_ads_set%3dshangxiang%26account_id%3dwx95c952f67a727090",
                                "app_ios_id": "1044283059"
                            },
                            "app_android_spec": {
                                "deep_link_url": "pinduoduo%3a%2f%2fcom.xunmeng.pinduoduo%2fgoods.html%3fgoods_id%3d3163709495%26_p_ads_channel%3dweixin%26_p_launch_type%3dadv%26_p_ads_set%3dshangxiang%26account_id%3dwx95c952f67a727090",
                                "app_android_id": "1104790111",
                                "app_android_channel_package_id": "72243366;000116083635303838333533"
                            }
                        }
                    },
                    {
                        "element_type": "IMAGE",
                        "image_spec": {
                            "image_id_list": [
                                "1613374"
                            ]
                        }
                    },
                    {
                        "element_type": "BUTTON",
                        "button_spec": {
                            "title": "拼多多模板 1",
                            "url": "http%3a%2f%2fjd.com",
                            "app_ios_spec": {
                                "deep_link_url": "pinduoduo%3a%2f%2fcom.xunmeng.pinduoduo%2fgoods.html%3fgoods_id%3d3163709495%26_p_ads_channel%3dweixin%26_p_launch_type%3dadv%26_p_ads_set%3dshangxiang%26account_id%3dwx95c952f67a727090",
                                "app_ios_id": "1044283059"
                            },
                            "app_android_spec": {
                                "deep_link_url": "pinduoduo%3a%2f%2fcom.xunmeng.pinduoduo%2fgoods.html%3fgoods_id%3d3163709495%26_p_ads_channel%3dweixin%26_p_launch_type%3dadv%26_p_ads_set%3dshangxiang%26account_id%3dwx95c952f67a727090",
                                "app_android_id": "1104790111",
                                "app_android_channel_package_id": "72243366;000116083635303838333533"
                            }
                        }
                    }
                ],
                "share_content_spec": {
                    "share_title": "分享标题",
                    "share_description": "分享描述信息"
                }
            }
        ],
        "page_info": {
            "page": 1,
            "page_size": 10,
            "total_number": 1,
            "total_page": 1
        }
    }
}
```

## 可视化调试工具

问题仍未解决？

请前往腾讯广告反馈中心在线提交问题，我们的人工客服将为你服务
