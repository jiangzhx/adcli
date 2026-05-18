---
title: 创建关键词 全部接口
platform: tencent_ads
source_url: https://developers.e.qq.com/v3.0/docs/api/bidword/add
doc_id: tencent_ads_v3_0_docs_api_bidword_add
source_id: tencent_ads_v3_0_docs_api_bidword_add
---
# 创建关键词 [全部接口](https://developers.e.qq.com/v3.0/docs/apilist)

| 所属权限 | ads_management |
| --- | --- |
| 请求地址 | bidword/add |
| 请求方法 | POST |
| Content-Type | application/json |

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
| list* | struct[] | 关键词列表 数组最小长度 1，最大长度 1000 |
| adgroup_id* | int64 | 广告 id |
| bidword* | string | 关键词词面，字段长度最小 1 个等宽字符，长度最大 20 等宽字符（即字段最大长度为 20 个中文字或全角标点，40 个英文字或半角标点。一个等宽字符等价于一个中文，等价于两个英文。），同一广告下的关键词词面不允许重复 字段长度最小 1 字节，长度最大 60 字节 |
| bid_price | integer | 关键词出价，单位为分，关键词出价规则待补充 最小值 1，最大值 99999 |
| use_group_price | enum | 是否使用组出价，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#use_group_price_type) 可选值：{ USE_GROUP_PRICE, NOT_USE_GROUP_PRICE } |
| match_type* | enum | 关键词匹配方式，关键词匹配方式包括短语、精确、广泛匹配，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#bidword_match_type) 可选值：{ EXACT_MATCH, WIDE_MATCH, WORD_MATCH, PHRASE_MATCH } |
| configured_status | enum | 暂停状态，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#bidword_pause_type) 可选值：{ KEYWORD_STATUS_NORMAL, KEYWORD_STATUS_SUSPEND } |
| dynamic_creative_id | integer | 广告创意 id |
| pc_landing_page_info | struct | 关键词落地页信息 |
| landing_page_list | struct[] | 兜底落地页内容列表，仅可在 page_type 为 PAGE_TYPE_APP_DEEP_LINK、PAGE_TYPE_APP_MARKET、PAGE_TYPE_WECHAT_MINI_PROGRAM、PAGE_TYPE_WECHAT_MINI_GAME 时使用 数组最小长度 0，最大长度 10 |
| page_type* | enum | 落地页类型，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#page_type) 可选值：{ PAGE_TYPE_UNKNOWN, PAGE_TYPE_ANDROID_APP, PAGE_TYPE_IOS_APP, PAGE_TYPE_XJ_ANDROID_APP_H5, PAGE_TYPE_XJ_IOS_APP_H5, PAGE_TYPE_XJ_WEB_H5, PAGE_TYPE_FENGYE_ECOMMERCE, PAGE_TYPE_XJ_QUICK, PAGE_TYPE_QQ_APP_MINI_PROGRAM, PAGE_TYPE_QQ_MINI_GAME, PAGE_TYPE_APP_DEEP_LINK, PAGE_TYPE_APP_MARKET, PAGE_TYPE_ANDROID_QUICK_APP, PAGE_TYPE_WECHAT_CANVAS, PAGE_TYPE_WECHAT_OFFICIAL_ACCOUNT_DETAIL, PAGE_TYPE_WECHAT_SIMPLE_CANVAS, PAGE_TYPE_WECHAT_MINI_GAME, PAGE_TYPE_WECHAT_CANVAS_MINI_PROGRAM, PAGE_TYPE_WECHAT_FOCUS_DAILOG, PAGE_TYPE_WECHAT_MINI_PROGRAM, PAGE_TYPE_WECHAT_CHANNELS_FEED, PAGE_TYPE_WECHAT_CHANNELS_WATCH_LIVE, PAGE_TYPE_WECHAT_CHANNELS_RESERVE_LIVE, PAGE_TYPE_WECHAT_APPOINTMENT_CARD, PAGE_TYPE_WECHAT_CONSULT, PAGE_TYPE_WECOM_CONSULT, PAGE_TYPE_ANDROID_DIRECT_DOWNLOAD, PAGE_TYPE_H5_PROFILE, PAGE_TYPE_SEARCH_BRAND_AREA, PAGE_TYPE_WECHAT_CHANNELS_PROFILE, PAGE_TYPE_H5, PAGE_TYPE_WECHAT_CHANNELS_FOLLOW_ACCOUNT, PAGE_TYPE_WECHAT_CHANNELS_SHOP_PRODUCT, PAGE_TYPE_APP_HARMONY, PAGE_TYPE_WECHAT_SHOP, PAGE_TYPE_OFFICIAL } |
| page_spec | struct | 落地页内容 |
| android_app_spec | struct | android 默认落地页内容，通常情况下不需要额外数据；在视频号动态落地页内部按钮跳转时，需要额外传入 android_app_id、wechat_canvas_page_id 字段。 |
| android_app_id | string | 安卓应用直达 AppId 字段长度最小 0 字节，长度最大 128 字节 |
| wechat_canvas_page_id | integer | 落地页 id |
| android_channel_id | string | 安卓应用渠道包 id 字段长度最小 1 字节，长度最大 64 字节 |
| ios_app_spec | struct | android 默认落地页内容，通常情况下不需要额外数据；在视频号动态落地页内部按钮跳转时，需要额外传入 ios_app_id。 |
| ios_app_id | string | IOS 应用直达 AppId 字段长度最小 0 字节，长度最大 128 字节 |
| xj_android_app_h5_spec | struct | 蹊径落地页数据，当营销载体类型为视频号直播预约时，需要额外传入 wechat_channels_live_reserve_id |
| page_id* | int64 | 落地页 id |
| wechat_channels_live_reserve_id | string | 视频号直播预约 id 字段长度最小 1 字节，长度最大 1024 字节 |
| custom_param | string | 官方落地页自定义参数 字段长度最小 0 字节，长度最大 512 字节 |
| xj_ios_app_h5_spec | struct | 蹊径落地页数据，当营销载体类型为视频号直播预约时，需要额外传入 wechat_channels_live_reserve_id |
| page_id* | int64 | 落地页 id |
| wechat_channels_live_reserve_id | string | 视频号直播预约 id 字段长度最小 1 字节，长度最大 1024 字节 |
| custom_param | string | 官方落地页自定义参数 字段长度最小 0 字节，长度最大 512 字节 |
| xj_web_h5_spec | struct | 蹊径落地页数据，当营销载体类型为视频号直播预约时，需要额外传入 wechat_channels_live_reserve_id |
| page_id* | int64 | 落地页 id |
| wechat_channels_live_reserve_id | string | 视频号直播预约 id 字段长度最小 1 字节，长度最大 1024 字节 |
| custom_param | string | 官方落地页自定义参数 字段长度最小 0 字节，长度最大 512 字节 |
| xj_quick_spec | struct | 蹊径落地页数据，当营销载体类型为视频号直播预约时，需要额外传入 wechat_channels_live_reserve_id |
| page_id* | int64 | 落地页 id |
| wechat_channels_live_reserve_id | string | 视频号直播预约 id 字段长度最小 1 字节，长度最大 1024 字节 |
| custom_param | string | 官方落地页自定义参数 字段长度最小 0 字节，长度最大 512 字节 |
| fengye_ecommmerce_spec | struct | 枫叶落地页数据 |
| page_id* | int64 | 落地页 id |
| wechat_canvas_spec | struct | 微信原生页数据，当营销载体类型为视频号直播预约时，需要额外传入 wechat_channels_live_reserve_id |
| page_id* | int64 | 落地页 id |
| override_canvas_head_option | enum | 原生推广页顶部素材和广告创意素材之间的替换关系，（仅在朋友圈广告使用原生推广页情况下有效），[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#override_canvas_head_option) 可选值：{ OPTION_CANVAS_OVERRIDE_CREATIVE, OPTION_CREATIVE_OVERRIDE_CANVAS, OPTION_KEEP_DIFFERENT, OPTION_CREATIVE_OVERRIDE_CANVAS_DYNAMIC } |
| wechat_channels_live_reserve_id | string | 视频号直播预约 id 字段长度最小 1 字节，长度最大 1024 字节 |
| wechat_mini_program_spec | struct | 小程序落地页，mini_program_id 和 mini_program_path 要同时填写 |
| mini_program_id | string | 小程序 id 字段长度最小 1 字节，长度最大 384 字节 |
| mini_program_path | string | 小程序路径 字段长度最小 1 字节，长度最大 2048 字节 |
| mini_program_paths | string[] | 小程序落地页 path 列表 数组最小长度 1，最大长度 255 字段长度最小 1 字节，长度最大 2048 字节 |
| mpa_mini_program_wildcard_url | string | mpa/dca 落地页通配符 字段长度最小 5 字节，长度最大 1023 字节 |
| wechat_canvas_mini_program_spec | struct | 微信原生页数据，当营销载体类型为视频号直播预约时，需要额外传入 wechat_channels_live_reserve_id |
| page_id* | int64 | 落地页 id |
| override_canvas_head_option | enum | 原生推广页顶部素材和广告创意素材之间的替换关系，（仅在朋友圈广告使用原生推广页情况下有效），[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#override_canvas_head_option) 可选值：{ OPTION_CANVAS_OVERRIDE_CREATIVE, OPTION_CREATIVE_OVERRIDE_CANVAS, OPTION_KEEP_DIFFERENT, OPTION_CREATIVE_OVERRIDE_CANVAS_DYNAMIC } |
| wechat_channels_live_reserve_id | string | 视频号直播预约 id 字段长度最小 1 字节，长度最大 1024 字节 |
| qq_app_mini_program_spec | struct | 小程序落地页，mini_program_id 和 mini_program_path 要同时填写 |
| mini_program_id* | string | 小程序 id 字段长度最小 1 字节，长度最大 384 字节 |
| mini_program_path | string | 小程序路径 字段长度最小 1 字节，长度最大 2048 字节 |
| qq_mini_game_spec | struct | QQ 小游戏落地页信息 |
| mini_game_tracking_parameter | string | QQ 小游戏监控参数 字段长度最小 0 字节，长度最大 2048 字节 |
| mini_game_id | string | QQ 小游戏 id 字段长度最小 1 字节，长度最大 384 字节 |
| simple_wechat_canvas_spec | struct | 简版原生页相关信息，当营销载体类型为视频号直播预约时，需要额外传入 wechat_channels_live_reserve_id |
| simple_canvas_webview_type | enum | 简版原生页内嵌落地页类型，不大于 1024 个英文字符或数字，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#simple_canvas_webview_type) 可选值：{ SIMPLE_CANVAS_WEBVIEW_TYPE_XJ_ANDROID_APP_H5, SIMPLE_CANVAS_WEBVIEW_TYPE_XJ_IOS_APP_H5, SIMPLE_CANVAS_WEBVIEW_TYPE_XJ_WEBSITE_H5 } |
| simple_canvas_webview_page_id | string | 简版原生页内嵌落地页的 id，小于 128 个英文字符 字段长度最小 0 字节，长度最大 128 字节 |
| simple_canvas_sub_type* | enum | 简版原生页子类型，灰度中，仅在简版原生页下生效，其他情况改字段内容会被忽略，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#simple_canvas_sub_type) 可选值：{ SIMPLE_CANVAS_SUB_TYPE_UNKNOWN, SIMPLE_CANVAS_SUB_TYPE_DEFAULT, SIMPLE_CANVAS_SUB_TYPE_URL, SIMPLE_CANVAS_SUB_TYPE_SLIDE_UP, SIMPLE_CANVAS_SUB_TYPE_WEB_STORE, SIMPLE_CANVAS_SUB_TYPE_CHOOSE } |
| simple_canvas_share_title | string | 简版原生页分享标题，字段长度最小 1 个等宽字符，长度最大 14 个等宽字符（即字段最大长度为 14 个中文字或全角标点，28 个英文字或半角标点。一个等宽字符等价于一个中文，等价于两个英文。） |
| simple_canvas_share_desc | string | 简版原生页分享描述，字段长度最小 1 个等宽字符，长度最大 20 个等宽字符（即字段最大长度为 20 个中文字或全角标点，40 个英文字或半角标点。一个等宽字符等价于一个中文，等价于两个英文。） |
| simple_canvas_webview_url | string | 简易原生页嵌入 Webview url，和 simple_canvas_sub_type(灰度) 配合使用，关系如下:SIMPLE_CANVAS_SUB_TYPE_URL,SIMPLE_CANVAS_SUB_TYPE_SLIDE_UP 时必填，SIMPLE_CANVAS_SUB_TYPE_WEB_STORE 时系统其他填充为 web store 地址，其他情况无效。 字段长度最小 0 字节，长度最大 1023 字节 |
| wechat_channels_live_reserve_id | string | 视频号直播预约 id 字段长度最小 1 字节，长度最大 1024 字节 |
| mpa_simple_canvas_webview_wildcard_url | string | mpa/dca 落地页通配符 字段长度最小 5 字节，长度最大 1023 字节 |
| wechat_focus_dialog_spec | struct | 微信一键关注页 |
| wechat_consult_spec | struct | 微信客服落地页 |
| page_url* | string | 落地页 url 字段长度最小 1 字节，长度最大 1500 字节 |
| wecom_consult_spec | struct | 企业微信客服落地页 |
| page_id* | int64 | 落地页 id |
| group_type | enum | 企微客服集类型，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#group_type) 可选值：{ GROUP_TYPE_DEFAULT, GROUP_TYPE_GROUP_LBS, GROUP_TYPE_GROUP_RANDOM } |
| wechat_official_account_detail_spec | struct | 微信公众号详情数据 |
| app_id | string | 公众号 appId 字段长度最小 1 字节，长度最大 2048 字节 |
| app_deep_link_spec | struct | 应用直达数据 |
| android_deep_link_app_id | string | 安卓应用直达 AppId 字段长度最小 0 字节，长度最大 128 字节 |
| android_deep_link_url | string | 应用直达 schema，大于 0 个并小于 4200 个字符 字段长度最小 0 字节，长度最大 5000 字节 |
| ios_deep_link_app_id | string | IOS 应用直达 AppId 字段长度最小 0 字节，长度最大 128 字节 |
| ios_deep_link_url | string | 应用直达 schema，大于 0 个并小于 4200 个字符 字段长度最小 0 字节，长度最大 5000 字节 |
| universal_link_url | string | 通用链接页 URL 字段长度最小 0 字节，长度最大 5000 字节 |
| mpa_android_deep_link_wildcard_url | string | deeplink 和 ulink 落地页通配符 字段长度最小 1 字节，长度最大 1023 字节 |
| mpa_ios_deep_link_wildcard_url | string | deeplink 和 ulink 落地页通配符 字段长度最小 1 字节，长度最大 1023 字节 |
| mpa_universal_link_wildcard_url | string | deeplink 和 ulink 落地页通配符 字段长度最小 1 字节，长度最大 1023 字节 |
| deep_link_url | string | 应用直达 schema，大于 0 个并小于 4200 个字符 字段长度最小 0 字节，长度最大 5000 字节 |
| app_market_spec | struct | 厂商下载 |
| android_app_id | string | 厂商下载应用 AppId 字段长度最小 0 字节，长度最大 128 字节 |
| android_channel_id | string | 安卓应用渠道包 id 字段长度最小 1 字节，长度最大 64 字节 |
| android_direct_download_spec | struct | Android 一键下载落地页 |
| android_app_id | string | 安卓下载应用 AppId 字段长度最小 0 字节，长度最大 128 字节 |
| android_channel_id | string | 安卓应用渠道包 id 字段长度最小 1 字节，长度最大 64 字节 |
| official_spec | struct | 蹊径落地页数据，当营销载体类型为视频号直播预约时，需要额外传入 wechat_channels_live_reserve_id |
| page_id* | int64 | 落地页 id |
| wechat_channels_live_reserve_id | string | 视频号直播预约 id 字段长度最小 1 字节，长度最大 1024 字节 |
| custom_param | string | 官方落地页自定义参数 字段长度最小 0 字节，长度最大 512 字节 |
| h5_profile_spec | struct | 品牌形象页 |
| page_id* | int64 | 落地页 id |
| hide_company_info | boolean | 是否隐藏商家主体信息 可选值：{ true, false } |
| search_area_brand_spec | struct | 超级品专头像页 |
| search_brand_area_keyword* | string | 跳转超级品专搜索关键词 字段长度最小 0 字节，长度最大 2048 字节 |
| wechat_channels_profile_spec | struct | 视频号落地页 |
| username | string | 视频号 username 字段长度最小 0 字节，长度最大 1024 字节 |
| h5_spec | struct | 自定义落地页 |
| page_url | string | 落地页 url 字段长度最小 1 字节，长度最大 1500 字节 |
| mpa_h5_wildcard_url | string | mpa/dca 落地页通配符 字段长度最小 5 字节，长度最大 1023 字节 |
| wechat_mini_game_spec | struct | 小游戏落地页信息，视频号动态落地页内部按钮跳转时，需要额外传入 mini_game_id |
| mini_game_tracking_parameter | string | 小游戏监控参数，需以英文字符?开头，如：?channel=xxxx，字段长度最小 1 个等宽字符，长度最大 250 个等宽字符（即字段最大长度为 250 个中文字或全角标点，500 个英文字或半角标点。一个等宽字符等价于一个中文，等价于两个英文。） 字段长度最小 0 字节，长度最大 750 字节 |
| mini_game_id | string | 小游戏 id 字段长度最小 1 字节，长度最大 384 字节 |
| wechat_channels_feed_spec | struct | 视频号动态落地页信息 |
| feed_id* | string | 视频号动态 id 字段长度最小 1 字节，长度最大 1024 字节 |
| action_button | struct | 行动按钮结构 |
| button_text | string | action_button button_text 字段长度最小 0 字节，长度最大 100 字节 |
| jump_info | struct | 落地页内容结构定义，落地页组件内容结构定义,jump_info 结构单独显示,详见 [\[落地页内容结构详细定义\]](https://developers.e.qq.com/v3.0/docs/api/bidword/add#jump_info_struct_href) |
| page_type* | enum | 落地页类型，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#page_type) 可选值：{ PAGE_TYPE_UNKNOWN, PAGE_TYPE_ANDROID_APP, PAGE_TYPE_IOS_APP, PAGE_TYPE_XJ_ANDROID_APP_H5, PAGE_TYPE_XJ_IOS_APP_H5, PAGE_TYPE_XJ_WEB_H5, PAGE_TYPE_FENGYE_ECOMMERCE, PAGE_TYPE_XJ_QUICK, PAGE_TYPE_QQ_APP_MINI_PROGRAM, PAGE_TYPE_QQ_MINI_GAME, PAGE_TYPE_APP_DEEP_LINK, PAGE_TYPE_APP_MARKET, PAGE_TYPE_ANDROID_QUICK_APP, PAGE_TYPE_WECHAT_CANVAS, PAGE_TYPE_WECHAT_OFFICIAL_ACCOUNT_DETAIL, PAGE_TYPE_WECHAT_SIMPLE_CANVAS, PAGE_TYPE_WECHAT_MINI_GAME, PAGE_TYPE_WECHAT_CANVAS_MINI_PROGRAM, PAGE_TYPE_WECHAT_FOCUS_DAILOG, PAGE_TYPE_WECHAT_MINI_PROGRAM, PAGE_TYPE_WECHAT_CHANNELS_FEED, PAGE_TYPE_WECHAT_CHANNELS_WATCH_LIVE, PAGE_TYPE_WECHAT_CHANNELS_RESERVE_LIVE, PAGE_TYPE_WECHAT_APPOINTMENT_CARD, PAGE_TYPE_WECHAT_CONSULT, PAGE_TYPE_WECOM_CONSULT, PAGE_TYPE_ANDROID_DIRECT_DOWNLOAD, PAGE_TYPE_H5_PROFILE, PAGE_TYPE_SEARCH_BRAND_AREA, PAGE_TYPE_WECHAT_CHANNELS_PROFILE, PAGE_TYPE_H5, PAGE_TYPE_WECHAT_CHANNELS_FOLLOW_ACCOUNT, PAGE_TYPE_WECHAT_CHANNELS_SHOP_PRODUCT, PAGE_TYPE_APP_HARMONY, PAGE_TYPE_WECHAT_SHOP, PAGE_TYPE_OFFICIAL } |
| page_spec | struct | 落地页内容 |
| android_app_spec | struct | android 默认落地页内容，通常情况下不需要额外数据；在视频号动态落地页内部按钮跳转时，需要额外传入 android_app_id、wechat_canvas_page_id 字段。 |
| android_app_id | string | 安卓应用直达 AppId 字段长度最小 0 字节，长度最大 128 字节 |
| wechat_canvas_page_id | integer | 落地页 id |
| android_channel_id | string | 安卓应用渠道包 id 字段长度最小 1 字节，长度最大 64 字节 |
| ios_app_spec | struct | android 默认落地页内容，通常情况下不需要额外数据；在视频号动态落地页内部按钮跳转时，需要额外传入 ios_app_id。 |
| ios_app_id | string | IOS 应用直达 AppId 字段长度最小 0 字节，长度最大 128 字节 |
| xj_android_app_h5_spec | struct | 蹊径落地页数据，当营销载体类型为视频号直播预约时，需要额外传入 wechat_channels_live_reserve_id |
| page_id* | int64 | 落地页 id |
| wechat_channels_live_reserve_id | string | 视频号直播预约 id 字段长度最小 1 字节，长度最大 1024 字节 |
| custom_param | string | 官方落地页自定义参数 字段长度最小 0 字节，长度最大 512 字节 |
| xj_ios_app_h5_spec | struct | 蹊径落地页数据，当营销载体类型为视频号直播预约时，需要额外传入 wechat_channels_live_reserve_id |
| page_id* | int64 | 落地页 id |
| wechat_channels_live_reserve_id | string | 视频号直播预约 id 字段长度最小 1 字节，长度最大 1024 字节 |
| custom_param | string | 官方落地页自定义参数 字段长度最小 0 字节，长度最大 512 字节 |
| xj_web_h5_spec | struct | 蹊径落地页数据，当营销载体类型为视频号直播预约时，需要额外传入 wechat_channels_live_reserve_id |
| page_id* | int64 | 落地页 id |
| wechat_channels_live_reserve_id | string | 视频号直播预约 id 字段长度最小 1 字节，长度最大 1024 字节 |
| custom_param | string | 官方落地页自定义参数 字段长度最小 0 字节，长度最大 512 字节 |
| xj_quick_spec | struct | 蹊径落地页数据，当营销载体类型为视频号直播预约时，需要额外传入 wechat_channels_live_reserve_id |
| page_id* | int64 | 落地页 id |
| wechat_channels_live_reserve_id | string | 视频号直播预约 id 字段长度最小 1 字节，长度最大 1024 字节 |
| custom_param | string | 官方落地页自定义参数 字段长度最小 0 字节，长度最大 512 字节 |
| fengye_ecommmerce_spec | struct | 枫叶落地页数据 |
| page_id* | int64 | 落地页 id |
| wechat_canvas_spec | struct | 微信原生页数据，当营销载体类型为视频号直播预约时，需要额外传入 wechat_channels_live_reserve_id |
| page_id* | int64 | 落地页 id |
| override_canvas_head_option | enum | 原生推广页顶部素材和广告创意素材之间的替换关系，（仅在朋友圈广告使用原生推广页情况下有效），[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#override_canvas_head_option) 可选值：{ OPTION_CANVAS_OVERRIDE_CREATIVE, OPTION_CREATIVE_OVERRIDE_CANVAS, OPTION_KEEP_DIFFERENT, OPTION_CREATIVE_OVERRIDE_CANVAS_DYNAMIC } |
| wechat_channels_live_reserve_id | string | 视频号直播预约 id 字段长度最小 1 字节，长度最大 1024 字节 |
| wechat_mini_program_spec | struct | 小程序落地页，mini_program_id 和 mini_program_path 要同时填写 |
| mini_program_id | string | 小程序 id 字段长度最小 1 字节，长度最大 384 字节 |
| mini_program_path | string | 小程序路径 字段长度最小 1 字节，长度最大 2048 字节 |
| mini_program_paths | string[] | 小程序落地页 path 列表 数组最小长度 1，最大长度 255 字段长度最小 1 字节，长度最大 2048 字节 |
| mpa_mini_program_wildcard_url | string | mpa/dca 落地页通配符 字段长度最小 5 字节，长度最大 1023 字节 |
| wechat_canvas_mini_program_spec | struct | 微信原生页数据，当营销载体类型为视频号直播预约时，需要额外传入 wechat_channels_live_reserve_id |
| page_id* | int64 | 落地页 id |
| override_canvas_head_option | enum | 原生推广页顶部素材和广告创意素材之间的替换关系，（仅在朋友圈广告使用原生推广页情况下有效），[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#override_canvas_head_option) 可选值：{ OPTION_CANVAS_OVERRIDE_CREATIVE, OPTION_CREATIVE_OVERRIDE_CANVAS, OPTION_KEEP_DIFFERENT, OPTION_CREATIVE_OVERRIDE_CANVAS_DYNAMIC } |
| wechat_channels_live_reserve_id | string | 视频号直播预约 id 字段长度最小 1 字节，长度最大 1024 字节 |
| qq_app_mini_program_spec | struct | 小程序落地页，mini_program_id 和 mini_program_path 要同时填写 |
| mini_program_id* | string | 小程序 id 字段长度最小 1 字节，长度最大 384 字节 |
| mini_program_path | string | 小程序路径 字段长度最小 1 字节，长度最大 2048 字节 |
| simple_wechat_canvas_spec | struct | 简版原生页相关信息，当营销载体类型为视频号直播预约时，需要额外传入 wechat_channels_live_reserve_id |
| simple_canvas_webview_type | enum | 简版原生页内嵌落地页类型，不大于 1024 个英文字符或数字，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#simple_canvas_webview_type) 可选值：{ SIMPLE_CANVAS_WEBVIEW_TYPE_XJ_ANDROID_APP_H5, SIMPLE_CANVAS_WEBVIEW_TYPE_XJ_IOS_APP_H5, SIMPLE_CANVAS_WEBVIEW_TYPE_XJ_WEBSITE_H5 } |
| simple_canvas_webview_page_id | string | 简版原生页内嵌落地页的 id，小于 128 个英文字符 字段长度最小 0 字节，长度最大 128 字节 |
| simple_canvas_sub_type* | enum | 简版原生页子类型，灰度中，仅在简版原生页下生效，其他情况改字段内容会被忽略，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#simple_canvas_sub_type) 可选值：{ SIMPLE_CANVAS_SUB_TYPE_UNKNOWN, SIMPLE_CANVAS_SUB_TYPE_DEFAULT, SIMPLE_CANVAS_SUB_TYPE_URL, SIMPLE_CANVAS_SUB_TYPE_SLIDE_UP, SIMPLE_CANVAS_SUB_TYPE_WEB_STORE, SIMPLE_CANVAS_SUB_TYPE_CHOOSE } |
| simple_canvas_share_title | string | 简版原生页分享标题，字段长度最小 1 个等宽字符，长度最大 14 个等宽字符（即字段最大长度为 14 个中文字或全角标点，28 个英文字或半角标点。一个等宽字符等价于一个中文，等价于两个英文。） |
| simple_canvas_share_desc | string | 简版原生页分享描述，字段长度最小 1 个等宽字符，长度最大 20 个等宽字符（即字段最大长度为 20 个中文字或全角标点，40 个英文字或半角标点。一个等宽字符等价于一个中文，等价于两个英文。） |
| simple_canvas_webview_url | string | 简易原生页嵌入 Webview url，和 simple_canvas_sub_type(灰度) 配合使用，关系如下:SIMPLE_CANVAS_SUB_TYPE_URL,SIMPLE_CANVAS_SUB_TYPE_SLIDE_UP 时必填，SIMPLE_CANVAS_SUB_TYPE_WEB_STORE 时系统其他填充为 web store 地址，其他情况无效。 字段长度最小 0 字节，长度最大 1023 字节 |
| wechat_channels_live_reserve_id | string | 视频号直播预约 id 字段长度最小 1 字节，长度最大 1024 字节 |
| mpa_simple_canvas_webview_wildcard_url | string | mpa/dca 落地页通配符 字段长度最小 5 字节，长度最大 1023 字节 |
| wechat_focus_dialog_spec | struct | 微信一键关注页 |
| wechat_consult_spec | struct | 微信客服落地页 |
| page_url* | string | 落地页 url 字段长度最小 1 字节，长度最大 1500 字节 |
| wecom_consult_spec | struct | 企业微信客服落地页 |
| page_id* | int64 | 落地页 id |
| group_type | enum | 企微客服集类型，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#group_type) 可选值：{ GROUP_TYPE_DEFAULT, GROUP_TYPE_GROUP_LBS, GROUP_TYPE_GROUP_RANDOM } |
| wechat_official_account_detail_spec | struct | 微信公众号详情数据 |
| app_id | string | 公众号 appId 字段长度最小 1 字节，长度最大 2048 字节 |
| app_deep_link_spec | struct | 应用直达数据 |
| android_deep_link_app_id | string | 安卓应用直达 AppId 字段长度最小 0 字节，长度最大 128 字节 |
| android_deep_link_url | string | 应用直达 schema，大于 0 个并小于 4200 个字符 字段长度最小 0 字节，长度最大 5000 字节 |
| ios_deep_link_app_id | string | IOS 应用直达 AppId 字段长度最小 0 字节，长度最大 128 字节 |
| ios_deep_link_url | string | 应用直达 schema，大于 0 个并小于 4200 个字符 字段长度最小 0 字节，长度最大 5000 字节 |
| universal_link_url | string | 通用链接页 URL 字段长度最小 0 字节，长度最大 5000 字节 |
| mpa_android_deep_link_wildcard_url | string | deeplink 和 ulink 落地页通配符 字段长度最小 1 字节，长度最大 1023 字节 |
| mpa_ios_deep_link_wildcard_url | string | deeplink 和 ulink 落地页通配符 字段长度最小 1 字节，长度最大 1023 字节 |
| mpa_universal_link_wildcard_url | string | deeplink 和 ulink 落地页通配符 字段长度最小 1 字节，长度最大 1023 字节 |
| deep_link_url | string | 应用直达 schema，大于 0 个并小于 4200 个字符 字段长度最小 0 字节，长度最大 5000 字节 |
| app_market_spec | struct | 厂商下载 |
| android_app_id | string | 厂商下载应用 AppId 字段长度最小 0 字节，长度最大 128 字节 |
| android_channel_id | string | 安卓应用渠道包 id 字段长度最小 1 字节，长度最大 64 字节 |
| android_direct_download_spec | struct | Android 一键下载落地页 |
| android_app_id | string | 安卓下载应用 AppId 字段长度最小 0 字节，长度最大 128 字节 |
| android_channel_id | string | 安卓应用渠道包 id 字段长度最小 1 字节，长度最大 64 字节 |
| official_spec | struct | 蹊径落地页数据，当营销载体类型为视频号直播预约时，需要额外传入 wechat_channels_live_reserve_id |
| page_id* | int64 | 落地页 id |
| wechat_channels_live_reserve_id | string | 视频号直播预约 id 字段长度最小 1 字节，长度最大 1024 字节 |
| custom_param | string | 官方落地页自定义参数 字段长度最小 0 字节，长度最大 512 字节 |
| h5_profile_spec | struct | 品牌形象页 |
| page_id* | int64 | 落地页 id |
| hide_company_info | boolean | 是否隐藏商家主体信息 可选值：{ true, false } |
| search_area_brand_spec | struct | 超级品专头像页 |
| search_brand_area_keyword* | string | 跳转超级品专搜索关键词 字段长度最小 0 字节，长度最大 2048 字节 |
| wechat_channels_profile_spec | struct | 视频号落地页 |
| username | string | 视频号 username 字段长度最小 0 字节，长度最大 1024 字节 |
| h5_spec | struct | 自定义落地页 |
| page_url | string | 落地页 url 字段长度最小 1 字节，长度最大 1500 字节 |
| mpa_h5_wildcard_url | string | mpa/dca 落地页通配符 字段长度最小 5 字节，长度最大 1023 字节 |
| wechat_mini_game_spec | struct | 小游戏落地页信息，视频号动态落地页内部按钮跳转时，需要额外传入 mini_game_id |
| mini_game_tracking_parameter | string | 小游戏监控参数，需以英文字符?开头，如：?channel=xxxx，字段长度最小 1 个等宽字符，长度最大 250 个等宽字符（即字段最大长度为 250 个中文字或全角标点，500 个英文字或半角标点。一个等宽字符等价于一个中文，等价于两个英文。） 字段长度最小 0 字节，长度最大 750 字节 |
| mini_game_id | string | 小游戏 id 字段长度最小 1 字节，长度最大 384 字节 |
| wechat_channels_reserve_spec | struct | 视频号直播预约落地页信息 |
| reserve_id | string | 视频号直播预约 id 字段长度最小 1 字节，长度最大 1024 字节 |
| wechat_channels_account_id | string | 视频号账号 id 字段长度最小 1 字节，长度最大 1024 字节 |
| android_quick_app_spec | struct | 安卓快应用落地页信息 |
| jump_url* | string | 应用直达 schema，大于 0 个并小于 4200 个字符 字段长度最小 0 字节，长度最大 5000 字节 |
| wechat_channels_shop_product_spec | struct | 小店商品详情页落地页信息 |
| product_id | integer | 微信小店商品 id |
| shop_id | string | 微信小店 id 字段长度最小 0 字节，长度最大 1280 字节 |
| catalog_id | string | 微信小店商品库 id 字段长度最小 0 字节，长度最大 256 字节 |
| set_id | string | 微信小店商品集合 id 字段长度最小 0 字节，长度最大 256 字节 |
| wechat_channels_account_id | string | 视频号账号 id 字段长度最小 1 字节，长度最大 1024 字节 |
| wechat_channels_reserve_spec | struct | 视频号直播预约落地页信息 |
| reserve_id | string | 视频号直播预约 id 字段长度最小 1 字节，长度最大 1024 字节 |
| wechat_channels_account_id | string | 视频号账号 id 字段长度最小 1 字节，长度最大 1024 字节 |
| android_quick_app_spec | struct | 安卓快应用落地页信息 |
| jump_url* | string | 应用直达 schema，大于 0 个并小于 4200 个字符 字段长度最小 0 字节，长度最大 5000 字节 |
| wechat_channels_shop_product_spec | struct | 小店商品详情页落地页信息 |
| product_id | integer | 微信小店商品 id |
| shop_id | string | 微信小店 id 字段长度最小 0 字节，长度最大 1280 字节 |
| catalog_id | string | 微信小店商品库 id 字段长度最小 0 字节，长度最大 256 字节 |
| set_id | string | 微信小店商品集合 id 字段长度最小 0 字节，长度最大 256 字节 |
| wechat_shop_spec | struct | 小店店铺页落地页信息 |
| shop_id* | string | 微信小店 id 字段长度最小 0 字节，长度最大 1280 字节 |
| wechat_channels_watch_live_spec | struct | 视频号观看直播落地页信息 |
| wechat_channels_account_id | string | 视频号账号 id 字段长度最小 1 字节，长度最大 1024 字节 |
| harmony_app_spec | struct | 鸿蒙落地页信息 |
| harmony_app_id | string | 鸿蒙应用 AppId 字段长度最小 0 字节，长度最大 128 字节 |
| wechat_channels_activity_spec | struct | 视频号活动页落地页信息 |
| activity_id* | string | 视频号活动加密 id 字段长度最小 1 字节，长度最大 256 字节 |
| jumpinfo_account_id | integer | 推广帐号 id，落地页资产归属的账号 id |
| platform_type | enum | 落地页媒体平台类型，落地页媒体平台，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#landing_page_platform_type) 可选值：{ DEFAULT, ALL, SCREEN_PC, SCREEN_PHONE, OS_ANDROID, OS_IOS } |
| mobile_landing_page_info | struct | 关键词落地页信息 |
| landing_page_list | struct[] | 兜底落地页内容列表，仅可在 page_type 为 PAGE_TYPE_APP_DEEP_LINK、PAGE_TYPE_APP_MARKET、PAGE_TYPE_WECHAT_MINI_PROGRAM、PAGE_TYPE_WECHAT_MINI_GAME 时使用 数组最小长度 0，最大长度 10 |
| page_type* | enum | 落地页类型，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#page_type) 可选值：{ PAGE_TYPE_UNKNOWN, PAGE_TYPE_ANDROID_APP, PAGE_TYPE_IOS_APP, PAGE_TYPE_XJ_ANDROID_APP_H5, PAGE_TYPE_XJ_IOS_APP_H5, PAGE_TYPE_XJ_WEB_H5, PAGE_TYPE_FENGYE_ECOMMERCE, PAGE_TYPE_XJ_QUICK, PAGE_TYPE_QQ_APP_MINI_PROGRAM, PAGE_TYPE_QQ_MINI_GAME, PAGE_TYPE_APP_DEEP_LINK, PAGE_TYPE_APP_MARKET, PAGE_TYPE_ANDROID_QUICK_APP, PAGE_TYPE_WECHAT_CANVAS, PAGE_TYPE_WECHAT_OFFICIAL_ACCOUNT_DETAIL, PAGE_TYPE_WECHAT_SIMPLE_CANVAS, PAGE_TYPE_WECHAT_MINI_GAME, PAGE_TYPE_WECHAT_CANVAS_MINI_PROGRAM, PAGE_TYPE_WECHAT_FOCUS_DAILOG, PAGE_TYPE_WECHAT_MINI_PROGRAM, PAGE_TYPE_WECHAT_CHANNELS_FEED, PAGE_TYPE_WECHAT_CHANNELS_WATCH_LIVE, PAGE_TYPE_WECHAT_CHANNELS_RESERVE_LIVE, PAGE_TYPE_WECHAT_APPOINTMENT_CARD, PAGE_TYPE_WECHAT_CONSULT, PAGE_TYPE_WECOM_CONSULT, PAGE_TYPE_ANDROID_DIRECT_DOWNLOAD, PAGE_TYPE_H5_PROFILE, PAGE_TYPE_SEARCH_BRAND_AREA, PAGE_TYPE_WECHAT_CHANNELS_PROFILE, PAGE_TYPE_H5, PAGE_TYPE_WECHAT_CHANNELS_FOLLOW_ACCOUNT, PAGE_TYPE_WECHAT_CHANNELS_SHOP_PRODUCT, PAGE_TYPE_APP_HARMONY, PAGE_TYPE_WECHAT_SHOP, PAGE_TYPE_OFFICIAL } |
| page_spec | struct | 落地页内容 |
| android_app_spec | struct | android 默认落地页内容，通常情况下不需要额外数据；在视频号动态落地页内部按钮跳转时，需要额外传入 android_app_id、wechat_canvas_page_id 字段。 |
| android_app_id | string | 安卓应用直达 AppId 字段长度最小 0 字节，长度最大 128 字节 |
| wechat_canvas_page_id | integer | 落地页 id |
| android_channel_id | string | 安卓应用渠道包 id 字段长度最小 1 字节，长度最大 64 字节 |
| ios_app_spec | struct | android 默认落地页内容，通常情况下不需要额外数据；在视频号动态落地页内部按钮跳转时，需要额外传入 ios_app_id。 |
| ios_app_id | string | IOS 应用直达 AppId 字段长度最小 0 字节，长度最大 128 字节 |
| xj_android_app_h5_spec | struct | 蹊径落地页数据，当营销载体类型为视频号直播预约时，需要额外传入 wechat_channels_live_reserve_id |
| page_id* | int64 | 落地页 id |
| wechat_channels_live_reserve_id | string | 视频号直播预约 id 字段长度最小 1 字节，长度最大 1024 字节 |
| custom_param | string | 官方落地页自定义参数 字段长度最小 0 字节，长度最大 512 字节 |
| xj_ios_app_h5_spec | struct | 蹊径落地页数据，当营销载体类型为视频号直播预约时，需要额外传入 wechat_channels_live_reserve_id |
| page_id* | int64 | 落地页 id |
| wechat_channels_live_reserve_id | string | 视频号直播预约 id 字段长度最小 1 字节，长度最大 1024 字节 |
| custom_param | string | 官方落地页自定义参数 字段长度最小 0 字节，长度最大 512 字节 |
| xj_web_h5_spec | struct | 蹊径落地页数据，当营销载体类型为视频号直播预约时，需要额外传入 wechat_channels_live_reserve_id |
| page_id* | int64 | 落地页 id |
| wechat_channels_live_reserve_id | string | 视频号直播预约 id 字段长度最小 1 字节，长度最大 1024 字节 |
| custom_param | string | 官方落地页自定义参数 字段长度最小 0 字节，长度最大 512 字节 |
| xj_quick_spec | struct | 蹊径落地页数据，当营销载体类型为视频号直播预约时，需要额外传入 wechat_channels_live_reserve_id |
| page_id* | int64 | 落地页 id |
| wechat_channels_live_reserve_id | string | 视频号直播预约 id 字段长度最小 1 字节，长度最大 1024 字节 |
| custom_param | string | 官方落地页自定义参数 字段长度最小 0 字节，长度最大 512 字节 |
| fengye_ecommmerce_spec | struct | 枫叶落地页数据 |
| page_id* | int64 | 落地页 id |
| wechat_canvas_spec | struct | 微信原生页数据，当营销载体类型为视频号直播预约时，需要额外传入 wechat_channels_live_reserve_id |
| page_id* | int64 | 落地页 id |
| override_canvas_head_option | enum | 原生推广页顶部素材和广告创意素材之间的替换关系，（仅在朋友圈广告使用原生推广页情况下有效），[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#override_canvas_head_option) 可选值：{ OPTION_CANVAS_OVERRIDE_CREATIVE, OPTION_CREATIVE_OVERRIDE_CANVAS, OPTION_KEEP_DIFFERENT, OPTION_CREATIVE_OVERRIDE_CANVAS_DYNAMIC } |
| wechat_channels_live_reserve_id | string | 视频号直播预约 id 字段长度最小 1 字节，长度最大 1024 字节 |
| wechat_mini_program_spec | struct | 小程序落地页，mini_program_id 和 mini_program_path 要同时填写 |
| mini_program_id | string | 小程序 id 字段长度最小 1 字节，长度最大 384 字节 |
| mini_program_path | string | 小程序路径 字段长度最小 1 字节，长度最大 2048 字节 |
| mini_program_paths | string[] | 小程序落地页 path 列表 数组最小长度 1，最大长度 255 字段长度最小 1 字节，长度最大 2048 字节 |
| mpa_mini_program_wildcard_url | string | mpa/dca 落地页通配符 字段长度最小 5 字节，长度最大 1023 字节 |
| wechat_canvas_mini_program_spec | struct | 微信原生页数据，当营销载体类型为视频号直播预约时，需要额外传入 wechat_channels_live_reserve_id |
| page_id* | int64 | 落地页 id |
| override_canvas_head_option | enum | 原生推广页顶部素材和广告创意素材之间的替换关系，（仅在朋友圈广告使用原生推广页情况下有效），[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#override_canvas_head_option) 可选值：{ OPTION_CANVAS_OVERRIDE_CREATIVE, OPTION_CREATIVE_OVERRIDE_CANVAS, OPTION_KEEP_DIFFERENT, OPTION_CREATIVE_OVERRIDE_CANVAS_DYNAMIC } |
| wechat_channels_live_reserve_id | string | 视频号直播预约 id 字段长度最小 1 字节，长度最大 1024 字节 |
| qq_app_mini_program_spec | struct | 小程序落地页，mini_program_id 和 mini_program_path 要同时填写 |
| mini_program_id* | string | 小程序 id 字段长度最小 1 字节，长度最大 384 字节 |
| mini_program_path | string | 小程序路径 字段长度最小 1 字节，长度最大 2048 字节 |
| qq_mini_game_spec | struct | QQ 小游戏落地页信息 |
| mini_game_tracking_parameter | string | QQ 小游戏监控参数 字段长度最小 0 字节，长度最大 2048 字节 |
| mini_game_id | string | QQ 小游戏 id 字段长度最小 1 字节，长度最大 384 字节 |
| simple_wechat_canvas_spec | struct | 简版原生页相关信息，当营销载体类型为视频号直播预约时，需要额外传入 wechat_channels_live_reserve_id |
| simple_canvas_webview_type | enum | 简版原生页内嵌落地页类型，不大于 1024 个英文字符或数字，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#simple_canvas_webview_type) 可选值：{ SIMPLE_CANVAS_WEBVIEW_TYPE_XJ_ANDROID_APP_H5, SIMPLE_CANVAS_WEBVIEW_TYPE_XJ_IOS_APP_H5, SIMPLE_CANVAS_WEBVIEW_TYPE_XJ_WEBSITE_H5 } |
| simple_canvas_webview_page_id | string | 简版原生页内嵌落地页的 id，小于 128 个英文字符 字段长度最小 0 字节，长度最大 128 字节 |
| simple_canvas_sub_type* | enum | 简版原生页子类型，灰度中，仅在简版原生页下生效，其他情况改字段内容会被忽略，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#simple_canvas_sub_type) 可选值：{ SIMPLE_CANVAS_SUB_TYPE_UNKNOWN, SIMPLE_CANVAS_SUB_TYPE_DEFAULT, SIMPLE_CANVAS_SUB_TYPE_URL, SIMPLE_CANVAS_SUB_TYPE_SLIDE_UP, SIMPLE_CANVAS_SUB_TYPE_WEB_STORE, SIMPLE_CANVAS_SUB_TYPE_CHOOSE } |
| simple_canvas_share_title | string | 简版原生页分享标题，字段长度最小 1 个等宽字符，长度最大 14 个等宽字符（即字段最大长度为 14 个中文字或全角标点，28 个英文字或半角标点。一个等宽字符等价于一个中文，等价于两个英文。） |
| simple_canvas_share_desc | string | 简版原生页分享描述，字段长度最小 1 个等宽字符，长度最大 20 个等宽字符（即字段最大长度为 20 个中文字或全角标点，40 个英文字或半角标点。一个等宽字符等价于一个中文，等价于两个英文。） |
| simple_canvas_webview_url | string | 简易原生页嵌入 Webview url，和 simple_canvas_sub_type(灰度) 配合使用，关系如下:SIMPLE_CANVAS_SUB_TYPE_URL,SIMPLE_CANVAS_SUB_TYPE_SLIDE_UP 时必填，SIMPLE_CANVAS_SUB_TYPE_WEB_STORE 时系统其他填充为 web store 地址，其他情况无效。 字段长度最小 0 字节，长度最大 1023 字节 |
| wechat_channels_live_reserve_id | string | 视频号直播预约 id 字段长度最小 1 字节，长度最大 1024 字节 |
| mpa_simple_canvas_webview_wildcard_url | string | mpa/dca 落地页通配符 字段长度最小 5 字节，长度最大 1023 字节 |
| wechat_focus_dialog_spec | struct | 微信一键关注页 |
| wechat_consult_spec | struct | 微信客服落地页 |
| page_url* | string | 落地页 url 字段长度最小 1 字节，长度最大 1500 字节 |
| wecom_consult_spec | struct | 企业微信客服落地页 |
| page_id* | int64 | 落地页 id |
| group_type | enum | 企微客服集类型，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#group_type) 可选值：{ GROUP_TYPE_DEFAULT, GROUP_TYPE_GROUP_LBS, GROUP_TYPE_GROUP_RANDOM } |
| wechat_official_account_detail_spec | struct | 微信公众号详情数据 |
| app_id | string | 公众号 appId 字段长度最小 1 字节，长度最大 2048 字节 |
| app_deep_link_spec | struct | 应用直达数据 |
| android_deep_link_app_id | string | 安卓应用直达 AppId 字段长度最小 0 字节，长度最大 128 字节 |
| android_deep_link_url | string | 应用直达 schema，大于 0 个并小于 4200 个字符 字段长度最小 0 字节，长度最大 5000 字节 |
| ios_deep_link_app_id | string | IOS 应用直达 AppId 字段长度最小 0 字节，长度最大 128 字节 |
| ios_deep_link_url | string | 应用直达 schema，大于 0 个并小于 4200 个字符 字段长度最小 0 字节，长度最大 5000 字节 |
| universal_link_url | string | 通用链接页 URL 字段长度最小 0 字节，长度最大 5000 字节 |
| mpa_android_deep_link_wildcard_url | string | deeplink 和 ulink 落地页通配符 字段长度最小 1 字节，长度最大 1023 字节 |
| mpa_ios_deep_link_wildcard_url | string | deeplink 和 ulink 落地页通配符 字段长度最小 1 字节，长度最大 1023 字节 |
| mpa_universal_link_wildcard_url | string | deeplink 和 ulink 落地页通配符 字段长度最小 1 字节，长度最大 1023 字节 |
| deep_link_url | string | 应用直达 schema，大于 0 个并小于 4200 个字符 字段长度最小 0 字节，长度最大 5000 字节 |
| app_market_spec | struct | 厂商下载 |
| android_app_id | string | 厂商下载应用 AppId 字段长度最小 0 字节，长度最大 128 字节 |
| android_channel_id | string | 安卓应用渠道包 id 字段长度最小 1 字节，长度最大 64 字节 |
| android_direct_download_spec | struct | Android 一键下载落地页 |
| android_app_id | string | 安卓下载应用 AppId 字段长度最小 0 字节，长度最大 128 字节 |
| android_channel_id | string | 安卓应用渠道包 id 字段长度最小 1 字节，长度最大 64 字节 |
| official_spec | struct | 蹊径落地页数据，当营销载体类型为视频号直播预约时，需要额外传入 wechat_channels_live_reserve_id |
| page_id* | int64 | 落地页 id |
| wechat_channels_live_reserve_id | string | 视频号直播预约 id 字段长度最小 1 字节，长度最大 1024 字节 |
| custom_param | string | 官方落地页自定义参数 字段长度最小 0 字节，长度最大 512 字节 |
| h5_profile_spec | struct | 品牌形象页 |
| page_id* | int64 | 落地页 id |
| hide_company_info | boolean | 是否隐藏商家主体信息 可选值：{ true, false } |
| search_area_brand_spec | struct | 超级品专头像页 |
| search_brand_area_keyword* | string | 跳转超级品专搜索关键词 字段长度最小 0 字节，长度最大 2048 字节 |
| wechat_channels_profile_spec | struct | 视频号落地页 |
| username | string | 视频号 username 字段长度最小 0 字节，长度最大 1024 字节 |
| h5_spec | struct | 自定义落地页 |
| page_url | string | 落地页 url 字段长度最小 1 字节，长度最大 1500 字节 |
| mpa_h5_wildcard_url | string | mpa/dca 落地页通配符 字段长度最小 5 字节，长度最大 1023 字节 |
| wechat_mini_game_spec | struct | 小游戏落地页信息，视频号动态落地页内部按钮跳转时，需要额外传入 mini_game_id |
| mini_game_tracking_parameter | string | 小游戏监控参数，需以英文字符?开头，如：?channel=xxxx，字段长度最小 1 个等宽字符，长度最大 250 个等宽字符（即字段最大长度为 250 个中文字或全角标点，500 个英文字或半角标点。一个等宽字符等价于一个中文，等价于两个英文。） 字段长度最小 0 字节，长度最大 750 字节 |
| mini_game_id | string | 小游戏 id 字段长度最小 1 字节，长度最大 384 字节 |
| wechat_channels_feed_spec | struct | 视频号动态落地页信息 |
| feed_id* | string | 视频号动态 id 字段长度最小 1 字节，长度最大 1024 字节 |
| action_button | struct | 行动按钮结构 |
| button_text | string | action_button button_text 字段长度最小 0 字节，长度最大 100 字节 |
| jump_info | struct | 落地页内容结构定义，落地页组件内容结构定义,jump_info 结构单独显示,详见 [\[落地页内容结构详细定义\]](https://developers.e.qq.com/v3.0/docs/api/bidword/add#jump_info_struct_href) |
| page_type* | enum | 落地页类型，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#page_type) 可选值：{ PAGE_TYPE_UNKNOWN, PAGE_TYPE_ANDROID_APP, PAGE_TYPE_IOS_APP, PAGE_TYPE_XJ_ANDROID_APP_H5, PAGE_TYPE_XJ_IOS_APP_H5, PAGE_TYPE_XJ_WEB_H5, PAGE_TYPE_FENGYE_ECOMMERCE, PAGE_TYPE_XJ_QUICK, PAGE_TYPE_QQ_APP_MINI_PROGRAM, PAGE_TYPE_QQ_MINI_GAME, PAGE_TYPE_APP_DEEP_LINK, PAGE_TYPE_APP_MARKET, PAGE_TYPE_ANDROID_QUICK_APP, PAGE_TYPE_WECHAT_CANVAS, PAGE_TYPE_WECHAT_OFFICIAL_ACCOUNT_DETAIL, PAGE_TYPE_WECHAT_SIMPLE_CANVAS, PAGE_TYPE_WECHAT_MINI_GAME, PAGE_TYPE_WECHAT_CANVAS_MINI_PROGRAM, PAGE_TYPE_WECHAT_FOCUS_DAILOG, PAGE_TYPE_WECHAT_MINI_PROGRAM, PAGE_TYPE_WECHAT_CHANNELS_FEED, PAGE_TYPE_WECHAT_CHANNELS_WATCH_LIVE, PAGE_TYPE_WECHAT_CHANNELS_RESERVE_LIVE, PAGE_TYPE_WECHAT_APPOINTMENT_CARD, PAGE_TYPE_WECHAT_CONSULT, PAGE_TYPE_WECOM_CONSULT, PAGE_TYPE_ANDROID_DIRECT_DOWNLOAD, PAGE_TYPE_H5_PROFILE, PAGE_TYPE_SEARCH_BRAND_AREA, PAGE_TYPE_WECHAT_CHANNELS_PROFILE, PAGE_TYPE_H5, PAGE_TYPE_WECHAT_CHANNELS_FOLLOW_ACCOUNT, PAGE_TYPE_WECHAT_CHANNELS_SHOP_PRODUCT, PAGE_TYPE_APP_HARMONY, PAGE_TYPE_WECHAT_SHOP, PAGE_TYPE_OFFICIAL } |
| page_spec | struct | 落地页内容 |
| android_app_spec | struct | android 默认落地页内容，通常情况下不需要额外数据；在视频号动态落地页内部按钮跳转时，需要额外传入 android_app_id、wechat_canvas_page_id 字段。 |
| android_app_id | string | 安卓应用直达 AppId 字段长度最小 0 字节，长度最大 128 字节 |
| wechat_canvas_page_id | integer | 落地页 id |
| android_channel_id | string | 安卓应用渠道包 id 字段长度最小 1 字节，长度最大 64 字节 |
| ios_app_spec | struct | android 默认落地页内容，通常情况下不需要额外数据；在视频号动态落地页内部按钮跳转时，需要额外传入 ios_app_id。 |
| ios_app_id | string | IOS 应用直达 AppId 字段长度最小 0 字节，长度最大 128 字节 |
| xj_android_app_h5_spec | struct | 蹊径落地页数据，当营销载体类型为视频号直播预约时，需要额外传入 wechat_channels_live_reserve_id |
| page_id* | int64 | 落地页 id |
| wechat_channels_live_reserve_id | string | 视频号直播预约 id 字段长度最小 1 字节，长度最大 1024 字节 |
| custom_param | string | 官方落地页自定义参数 字段长度最小 0 字节，长度最大 512 字节 |
| xj_ios_app_h5_spec | struct | 蹊径落地页数据，当营销载体类型为视频号直播预约时，需要额外传入 wechat_channels_live_reserve_id |
| page_id* | int64 | 落地页 id |
| wechat_channels_live_reserve_id | string | 视频号直播预约 id 字段长度最小 1 字节，长度最大 1024 字节 |
| custom_param | string | 官方落地页自定义参数 字段长度最小 0 字节，长度最大 512 字节 |
| xj_web_h5_spec | struct | 蹊径落地页数据，当营销载体类型为视频号直播预约时，需要额外传入 wechat_channels_live_reserve_id |
| page_id* | int64 | 落地页 id |
| wechat_channels_live_reserve_id | string | 视频号直播预约 id 字段长度最小 1 字节，长度最大 1024 字节 |
| custom_param | string | 官方落地页自定义参数 字段长度最小 0 字节，长度最大 512 字节 |
| xj_quick_spec | struct | 蹊径落地页数据，当营销载体类型为视频号直播预约时，需要额外传入 wechat_channels_live_reserve_id |
| page_id* | int64 | 落地页 id |
| wechat_channels_live_reserve_id | string | 视频号直播预约 id 字段长度最小 1 字节，长度最大 1024 字节 |
| custom_param | string | 官方落地页自定义参数 字段长度最小 0 字节，长度最大 512 字节 |
| fengye_ecommmerce_spec | struct | 枫叶落地页数据 |
| page_id* | int64 | 落地页 id |
| wechat_canvas_spec | struct | 微信原生页数据，当营销载体类型为视频号直播预约时，需要额外传入 wechat_channels_live_reserve_id |
| page_id* | int64 | 落地页 id |
| override_canvas_head_option | enum | 原生推广页顶部素材和广告创意素材之间的替换关系，（仅在朋友圈广告使用原生推广页情况下有效），[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#override_canvas_head_option) 可选值：{ OPTION_CANVAS_OVERRIDE_CREATIVE, OPTION_CREATIVE_OVERRIDE_CANVAS, OPTION_KEEP_DIFFERENT, OPTION_CREATIVE_OVERRIDE_CANVAS_DYNAMIC } |
| wechat_channels_live_reserve_id | string | 视频号直播预约 id 字段长度最小 1 字节，长度最大 1024 字节 |
| wechat_mini_program_spec | struct | 小程序落地页，mini_program_id 和 mini_program_path 要同时填写 |
| mini_program_id | string | 小程序 id 字段长度最小 1 字节，长度最大 384 字节 |
| mini_program_path | string | 小程序路径 字段长度最小 1 字节，长度最大 2048 字节 |
| mini_program_paths | string[] | 小程序落地页 path 列表 数组最小长度 1，最大长度 255 字段长度最小 1 字节，长度最大 2048 字节 |
| mpa_mini_program_wildcard_url | string | mpa/dca 落地页通配符 字段长度最小 5 字节，长度最大 1023 字节 |
| wechat_canvas_mini_program_spec | struct | 微信原生页数据，当营销载体类型为视频号直播预约时，需要额外传入 wechat_channels_live_reserve_id |
| page_id* | int64 | 落地页 id |
| override_canvas_head_option | enum | 原生推广页顶部素材和广告创意素材之间的替换关系，（仅在朋友圈广告使用原生推广页情况下有效），[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#override_canvas_head_option) 可选值：{ OPTION_CANVAS_OVERRIDE_CREATIVE, OPTION_CREATIVE_OVERRIDE_CANVAS, OPTION_KEEP_DIFFERENT, OPTION_CREATIVE_OVERRIDE_CANVAS_DYNAMIC } |
| wechat_channels_live_reserve_id | string | 视频号直播预约 id 字段长度最小 1 字节，长度最大 1024 字节 |
| qq_app_mini_program_spec | struct | 小程序落地页，mini_program_id 和 mini_program_path 要同时填写 |
| mini_program_id* | string | 小程序 id 字段长度最小 1 字节，长度最大 384 字节 |
| mini_program_path | string | 小程序路径 字段长度最小 1 字节，长度最大 2048 字节 |
| simple_wechat_canvas_spec | struct | 简版原生页相关信息，当营销载体类型为视频号直播预约时，需要额外传入 wechat_channels_live_reserve_id |
| simple_canvas_webview_type | enum | 简版原生页内嵌落地页类型，不大于 1024 个英文字符或数字，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#simple_canvas_webview_type) 可选值：{ SIMPLE_CANVAS_WEBVIEW_TYPE_XJ_ANDROID_APP_H5, SIMPLE_CANVAS_WEBVIEW_TYPE_XJ_IOS_APP_H5, SIMPLE_CANVAS_WEBVIEW_TYPE_XJ_WEBSITE_H5 } |
| simple_canvas_webview_page_id | string | 简版原生页内嵌落地页的 id，小于 128 个英文字符 字段长度最小 0 字节，长度最大 128 字节 |
| simple_canvas_sub_type* | enum | 简版原生页子类型，灰度中，仅在简版原生页下生效，其他情况改字段内容会被忽略，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#simple_canvas_sub_type) 可选值：{ SIMPLE_CANVAS_SUB_TYPE_UNKNOWN, SIMPLE_CANVAS_SUB_TYPE_DEFAULT, SIMPLE_CANVAS_SUB_TYPE_URL, SIMPLE_CANVAS_SUB_TYPE_SLIDE_UP, SIMPLE_CANVAS_SUB_TYPE_WEB_STORE, SIMPLE_CANVAS_SUB_TYPE_CHOOSE } |
| simple_canvas_share_title | string | 简版原生页分享标题，字段长度最小 1 个等宽字符，长度最大 14 个等宽字符（即字段最大长度为 14 个中文字或全角标点，28 个英文字或半角标点。一个等宽字符等价于一个中文，等价于两个英文。） |
| simple_canvas_share_desc | string | 简版原生页分享描述，字段长度最小 1 个等宽字符，长度最大 20 个等宽字符（即字段最大长度为 20 个中文字或全角标点，40 个英文字或半角标点。一个等宽字符等价于一个中文，等价于两个英文。） |
| simple_canvas_webview_url | string | 简易原生页嵌入 Webview url，和 simple_canvas_sub_type(灰度) 配合使用，关系如下:SIMPLE_CANVAS_SUB_TYPE_URL,SIMPLE_CANVAS_SUB_TYPE_SLIDE_UP 时必填，SIMPLE_CANVAS_SUB_TYPE_WEB_STORE 时系统其他填充为 web store 地址，其他情况无效。 字段长度最小 0 字节，长度最大 1023 字节 |
| wechat_channels_live_reserve_id | string | 视频号直播预约 id 字段长度最小 1 字节，长度最大 1024 字节 |
| mpa_simple_canvas_webview_wildcard_url | string | mpa/dca 落地页通配符 字段长度最小 5 字节，长度最大 1023 字节 |
| wechat_focus_dialog_spec | struct | 微信一键关注页 |
| wechat_consult_spec | struct | 微信客服落地页 |
| page_url* | string | 落地页 url 字段长度最小 1 字节，长度最大 1500 字节 |
| wecom_consult_spec | struct | 企业微信客服落地页 |
| page_id* | int64 | 落地页 id |
| group_type | enum | 企微客服集类型，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#group_type) 可选值：{ GROUP_TYPE_DEFAULT, GROUP_TYPE_GROUP_LBS, GROUP_TYPE_GROUP_RANDOM } |
| wechat_official_account_detail_spec | struct | 微信公众号详情数据 |
| app_id | string | 公众号 appId 字段长度最小 1 字节，长度最大 2048 字节 |
| app_deep_link_spec | struct | 应用直达数据 |
| android_deep_link_app_id | string | 安卓应用直达 AppId 字段长度最小 0 字节，长度最大 128 字节 |
| android_deep_link_url | string | 应用直达 schema，大于 0 个并小于 4200 个字符 字段长度最小 0 字节，长度最大 5000 字节 |
| ios_deep_link_app_id | string | IOS 应用直达 AppId 字段长度最小 0 字节，长度最大 128 字节 |
| ios_deep_link_url | string | 应用直达 schema，大于 0 个并小于 4200 个字符 字段长度最小 0 字节，长度最大 5000 字节 |
| universal_link_url | string | 通用链接页 URL 字段长度最小 0 字节，长度最大 5000 字节 |
| mpa_android_deep_link_wildcard_url | string | deeplink 和 ulink 落地页通配符 字段长度最小 1 字节，长度最大 1023 字节 |
| mpa_ios_deep_link_wildcard_url | string | deeplink 和 ulink 落地页通配符 字段长度最小 1 字节，长度最大 1023 字节 |
| mpa_universal_link_wildcard_url | string | deeplink 和 ulink 落地页通配符 字段长度最小 1 字节，长度最大 1023 字节 |
| deep_link_url | string | 应用直达 schema，大于 0 个并小于 4200 个字符 字段长度最小 0 字节，长度最大 5000 字节 |
| app_market_spec | struct | 厂商下载 |
| android_app_id | string | 厂商下载应用 AppId 字段长度最小 0 字节，长度最大 128 字节 |
| android_channel_id | string | 安卓应用渠道包 id 字段长度最小 1 字节，长度最大 64 字节 |
| android_direct_download_spec | struct | Android 一键下载落地页 |
| android_app_id | string | 安卓下载应用 AppId 字段长度最小 0 字节，长度最大 128 字节 |
| android_channel_id | string | 安卓应用渠道包 id 字段长度最小 1 字节，长度最大 64 字节 |
| official_spec | struct | 蹊径落地页数据，当营销载体类型为视频号直播预约时，需要额外传入 wechat_channels_live_reserve_id |
| page_id* | int64 | 落地页 id |
| wechat_channels_live_reserve_id | string | 视频号直播预约 id 字段长度最小 1 字节，长度最大 1024 字节 |
| custom_param | string | 官方落地页自定义参数 字段长度最小 0 字节，长度最大 512 字节 |
| h5_profile_spec | struct | 品牌形象页 |
| page_id* | int64 | 落地页 id |
| hide_company_info | boolean | 是否隐藏商家主体信息 可选值：{ true, false } |
| search_area_brand_spec | struct | 超级品专头像页 |
| search_brand_area_keyword* | string | 跳转超级品专搜索关键词 字段长度最小 0 字节，长度最大 2048 字节 |
| wechat_channels_profile_spec | struct | 视频号落地页 |
| username | string | 视频号 username 字段长度最小 0 字节，长度最大 1024 字节 |
| h5_spec | struct | 自定义落地页 |
| page_url | string | 落地页 url 字段长度最小 1 字节，长度最大 1500 字节 |
| mpa_h5_wildcard_url | string | mpa/dca 落地页通配符 字段长度最小 5 字节，长度最大 1023 字节 |
| wechat_mini_game_spec | struct | 小游戏落地页信息，视频号动态落地页内部按钮跳转时，需要额外传入 mini_game_id |
| mini_game_tracking_parameter | string | 小游戏监控参数，需以英文字符?开头，如：?channel=xxxx，字段长度最小 1 个等宽字符，长度最大 250 个等宽字符（即字段最大长度为 250 个中文字或全角标点，500 个英文字或半角标点。一个等宽字符等价于一个中文，等价于两个英文。） 字段长度最小 0 字节，长度最大 750 字节 |
| mini_game_id | string | 小游戏 id 字段长度最小 1 字节，长度最大 384 字节 |
| wechat_channels_reserve_spec | struct | 视频号直播预约落地页信息 |
| reserve_id | string | 视频号直播预约 id 字段长度最小 1 字节，长度最大 1024 字节 |
| wechat_channels_account_id | string | 视频号账号 id 字段长度最小 1 字节，长度最大 1024 字节 |
| android_quick_app_spec | struct | 安卓快应用落地页信息 |
| jump_url* | string | 应用直达 schema，大于 0 个并小于 4200 个字符 字段长度最小 0 字节，长度最大 5000 字节 |
| wechat_channels_shop_product_spec | struct | 小店商品详情页落地页信息 |
| product_id | integer | 微信小店商品 id |
| shop_id | string | 微信小店 id 字段长度最小 0 字节，长度最大 1280 字节 |
| catalog_id | string | 微信小店商品库 id 字段长度最小 0 字节，长度最大 256 字节 |
| set_id | string | 微信小店商品集合 id 字段长度最小 0 字节，长度最大 256 字节 |
| wechat_channels_account_id | string | 视频号账号 id 字段长度最小 1 字节，长度最大 1024 字节 |
| wechat_channels_reserve_spec | struct | 视频号直播预约落地页信息 |
| reserve_id | string | 视频号直播预约 id 字段长度最小 1 字节，长度最大 1024 字节 |
| wechat_channels_account_id | string | 视频号账号 id 字段长度最小 1 字节，长度最大 1024 字节 |
| android_quick_app_spec | struct | 安卓快应用落地页信息 |
| jump_url* | string | 应用直达 schema，大于 0 个并小于 4200 个字符 字段长度最小 0 字节，长度最大 5000 字节 |
| wechat_channels_shop_product_spec | struct | 小店商品详情页落地页信息 |
| product_id | integer | 微信小店商品 id |
| shop_id | string | 微信小店 id 字段长度最小 0 字节，长度最大 1280 字节 |
| catalog_id | string | 微信小店商品库 id 字段长度最小 0 字节，长度最大 256 字节 |
| set_id | string | 微信小店商品集合 id 字段长度最小 0 字节，长度最大 256 字节 |
| wechat_shop_spec | struct | 小店店铺页落地页信息 |
| shop_id* | string | 微信小店 id 字段长度最小 0 字节，长度最大 1280 字节 |
| wechat_channels_watch_live_spec | struct | 视频号观看直播落地页信息 |
| wechat_channels_account_id | string | 视频号账号 id 字段长度最小 1 字节，长度最大 1024 字节 |
| harmony_app_spec | struct | 鸿蒙落地页信息 |
| harmony_app_id | string | 鸿蒙应用 AppId 字段长度最小 0 字节，长度最大 128 字节 |
| wechat_channels_activity_spec | struct | 视频号活动页落地页信息 |
| activity_id* | string | 视频号活动加密 id 字段长度最小 1 字节，长度最大 256 字节 |
| jumpinfo_account_id | integer | 推广帐号 id，落地页资产归属的账号 id |
| platform_type | enum | 落地页媒体平台类型，落地页媒体平台，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#landing_page_platform_type) 可选值：{ DEFAULT, ALL, SCREEN_PC, SCREEN_PHONE, OS_ANDROID, OS_IOS } |

## 请求示例

```
curl 'https://api.e.qq.com/v3.0/bidword/add?access_token=<ACCESS_TOKEN>&timestamp=<TIMESTAMP>&nonce=<NONCE>' \
-H 'Content-Type: application/json' \
-d '{
    "account_id": "<ACCOUNT_ID>",
    "list": [
        {
            "campaign_id": 0,
            "adgroup_id": 5076018008,
            "bidword": "推荐关键词",
            "bid_price": 1,
            "use_group_price": 1,
            "match_type": 2,
            "source_type": "RECOMMEND_BY_WORD",
            "configured_status": "KEYWORD_STATUS_SUSPEND"
        }
    ]
}'
curl 'https://api.e.qq.com/v3.0/bidword/add?access_token=<ACCESS_TOKEN>&timestamp=<TIMESTAMP>&nonce=<NONCE>' \
-H 'Content-Type: application/json' \
-d '{
    "account_id": "<ACCOUNT_ID>",
    "list": [
        {
            "campaign_id": 0,
            "adgroup_id": 5076018008,
            "bidword": "推荐关键词",
            "bid_price": 1,
            "use_group_price": 1,
            "match_type": 2,
            "source_type": "RECOMMEND_BY_WORD",
            "configured_status": "KEYWORD_STATUS_SUSPEND"
        }
    ]
}'
```

## 应答字段

| 名称 | 类型 | 描述 |
| --- | --- | --- |
| success_list | struct[] | 返回成功的关键词列表 |
| index | number | 整数 |
| bidword_id | integer | 关键词 id |
| bidword | string | 关键词词面，字段长度最小 1 个等宽字符，长度最大 20 等宽字符（即字段最大长度为 20 个中文字或全角标点，40 个英文字或半角标点。一个等宽字符等价于一个中文，等价于两个英文。），同一广告下的关键词词面不允许重复 |
| bid_price | integer | 关键词出价，单位为分，关键词出价规则待补充 |
| match_type | enum | 关键词匹配方式，关键词匹配方式包括短语、精确、广泛匹配，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#bidword_match_type) |
| configured_status | enum | 暂停状态，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#bidword_pause_type) |
| error_msg | string | 错误信息 |
| approval_status | integer | 审核状态 |
| dynamic_creative_id | integer | 广告创意 id |
| error_list | struct[] | 返回失败的关键词列表 |
| index | number | 整数 |
| bidword_id | integer | 关键词 id |
| bidword | string | 关键词词面，字段长度最小 1 个等宽字符，长度最大 20 等宽字符（即字段最大长度为 20 个中文字或全角标点，40 个英文字或半角标点。一个等宽字符等价于一个中文，等价于两个英文。），同一广告下的关键词词面不允许重复 |
| bid_price | integer | 关键词出价，单位为分，关键词出价规则待补充 |
| match_type | enum | 关键词匹配方式，关键词匹配方式包括短语、精确、广泛匹配，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#bidword_match_type) |
| configured_status | enum | 暂停状态，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#bidword_pause_type) |
| error_msg | string | 错误信息 |
| approval_status | integer | 审核状态 |
| dynamic_creative_id | integer | 广告创意 id |

## 应答示例

```
{
    "code": 0,
    "message": "",
    "message_cn": "",
    "data": {
        "success_list": [
            {
                "index": 0,
                "bidword_id": 2502868,
                "bidword": "推荐关键词",
                "bid_price": 0,
                "match_type": "WIDE_MATCH",
                "configured_status": "KEYWORD_STATUS_SUSPEND",
                "error_msg": "",
                "approval_status": 2
            }
        ],
        "error_list": []
    }
}
```

## 可视化调试工具

问题仍未解决？

请前往腾讯广告反馈中心在线提交问题，我们的人工客服将为你服务
