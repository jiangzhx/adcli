---
title: 创建搜索动态创意 全部接口
platform: tencent_ads
source_url: https://developers.e.qq.com/v3.0/docs/api/search_dynamic_creatives/add
doc_id: tencent_ads_v3_0_docs_api_search_dynamic_creatives_add
source_id: tencent_ads_v3_0_docs_api_search_dynamic_creatives_add
---
# 创建搜索动态创意 [全部接口](https://developers.e.qq.com/v3.0/docs/apilist)

| 所属权限 | ads_management |
| --- | --- |
| 请求地址 | search_dynamic_creatives/add |
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
| adgroup_id* | int64 | 广告 id |
| dynamic_creative_name* | string | 广告创意名称，同一帐号下的广告创意名称不允许重复（字段长度最小 1 个等宽字符，长度最大 60 等宽字符（即字段最大长度为 60 个中文字或全角标点，120 个英文字或半角标点。一个等宽字符等价于一个中文，等价于两个英文。） 字段长度最小 1 字节，长度最大 180 字节 |
| creative_template_id | integer | 创意形式 id，具体请咨询您的运营接口人 |
| delivery_mode | enum | 投放模式，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#delivery_mode) 可选值：{ DELIVERY_MODE_COMPONENT, DELIVERY_MODE_CUSTOMIZE } |
| creative_components* | struct | 创意组件 |
| title | struct[] | 文本组件 数组最小长度 0，最大长度 100 |
| component_id | integer | 创意组件 id |
| value | struct | 标题组件 |
| content | string | 标题组件文本信息，文本长度限制请通过 [\[创意形式详情\]](https://developers.e.qq.com/v3.0/docs/api/creative_template/get) 接口获取 |
| is_deleted | boolean | 是否已删除，读取接口字段有效，true：是，false：否 可选值：{ true, false } |
| description | struct[] | 文本组件 数组最小长度 0，最大长度 100 |
| component_id | integer | 创意组件 id |
| value | struct | 文本组件 |
| content | string | 文本组件文本信息，文本长度限制请通过 [\[创意形式详情\]](https://developers.e.qq.com/v3.0/docs/api/creative_template/get) 接口获取 |
| is_deleted | boolean | 是否已删除，读取接口字段有效，true：是，false：否 可选值：{ true, false } |
| image | struct[] | 单图组件 数组最小长度 0，最大长度 100 |
| component_id | integer | 创意组件 id |
| value | struct | 图片结构 |
| image_id* | string | 素材图片 id，通过 [\[images 模块\]](https://developers.e.qq.com/docs/api/business_assets/image/images_add) 上传图片后获得，仅在规格支持时传入，详见规格详情 字段长度最小 1 字节，长度最大 64 字节 |
| image_url | string | 素材图片的 url，仅在规格支持时传入 字段长度最小 1 字节，长度最大 1024 字节 |
| jump_info | struct | 落地页内容结构定义，落地页组件内容结构定义,jump_info 结构单独显示,详见 [\[落地页内容结构详细定义\]](https://developers.e.qq.com/v3.0/docs/api/search_dynamic_creatives/add#jump_info_struct_href) |
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
| jump_info | struct | 落地页内容结构定义，落地页组件内容结构定义,jump_info 结构单独显示,详见 [\[落地页内容结构详细定义\]](https://developers.e.qq.com/v3.0/docs/api/search_dynamic_creatives/add#jump_info_struct_href) |
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
| backups | struct[] | 兜底落地页内容列表，仅可在 page_type 为 PAGE_TYPE_APP_DEEP_LINK、PAGE_TYPE_APP_MARKET、PAGE_TYPE_WECHAT_MINI_PROGRAM、PAGE_TYPE_WECHAT_MINI_GAME 时使用 数组最小长度 0，最大长度 10 |
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
| jump_info | struct | 落地页内容结构定义，落地页组件内容结构定义,jump_info 结构单独显示,详见 [\[落地页内容结构详细定义\]](https://developers.e.qq.com/v3.0/docs/api/search_dynamic_creatives/add#jump_info_struct_href) |
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
| jumpinfo_account_id | integer | 推广帐号 id，落地页资产归属的账号 id |
| platform_type | enum | 落地页媒体平台类型，落地页媒体平台，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#landing_page_platform_type) 可选值：{ DEFAULT, ALL, SCREEN_PC, SCREEN_PHONE, OS_ANDROID, OS_IOS } |
| is_deleted | boolean | 是否已删除，读取接口字段有效，true：是，false：否 可选值：{ true, false } |
| image_list | struct[] | 图集组件 数组最小长度 0，最大长度 100 |
| component_id | integer | 创意组件 id |
| value | struct | 图集 |
| jump_info | struct | 落地页内容结构定义，落地页组件内容结构定义,jump_info 结构单独显示,详见 [\[落地页内容结构详细定义\]](https://developers.e.qq.com/v3.0/docs/api/search_dynamic_creatives/add#jump_info_struct_href) |
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
| jump_info | struct | 落地页内容结构定义，落地页组件内容结构定义,jump_info 结构单独显示,详见 [\[落地页内容结构详细定义\]](https://developers.e.qq.com/v3.0/docs/api/search_dynamic_creatives/add#jump_info_struct_href) |
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
| backups | struct[] | 兜底落地页内容列表，仅可在 page_type 为 PAGE_TYPE_APP_DEEP_LINK、PAGE_TYPE_APP_MARKET、PAGE_TYPE_WECHAT_MINI_PROGRAM、PAGE_TYPE_WECHAT_MINI_GAME 时使用 数组最小长度 0，最大长度 10 |
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
| jump_info | struct | 落地页内容结构定义，落地页组件内容结构定义,jump_info 结构单独显示,详见 [\[落地页内容结构详细定义\]](https://developers.e.qq.com/v3.0/docs/api/search_dynamic_creatives/add#jump_info_struct_href) |
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
| jumpinfo_account_id | integer | 推广帐号 id，落地页资产归属的账号 id |
| platform_type | enum | 落地页媒体平台类型，落地页媒体平台，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#landing_page_platform_type) 可选值：{ DEFAULT, ALL, SCREEN_PC, SCREEN_PHONE, OS_ANDROID, OS_IOS } |
| list | struct[] | 图集 |
| image_id* | string | 素材图片 id，通过 [\[images 模块\]](https://developers.e.qq.com/docs/api/business_assets/image/images_add) 上传图片后获得，仅在规格支持时传入，详见规格详情 字段长度最小 1 字节，长度最大 64 字节 |
| image_url | string | 素材图片的 url，仅在规格支持时传入 字段长度最小 1 字节，长度最大 1024 字节 |
| jump_info | struct | 落地页内容结构定义，落地页组件内容结构定义,jump_info 结构单独显示,详见 [\[落地页内容结构详细定义\]](https://developers.e.qq.com/v3.0/docs/api/search_dynamic_creatives/add#jump_info_struct_href) |
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
| jump_info | struct | 落地页内容结构定义，落地页组件内容结构定义,jump_info 结构单独显示,详见 [\[落地页内容结构详细定义\]](https://developers.e.qq.com/v3.0/docs/api/search_dynamic_creatives/add#jump_info_struct_href) |
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
| backups | struct[] | 兜底落地页内容列表，仅可在 page_type 为 PAGE_TYPE_APP_DEEP_LINK、PAGE_TYPE_APP_MARKET、PAGE_TYPE_WECHAT_MINI_PROGRAM、PAGE_TYPE_WECHAT_MINI_GAME 时使用 数组最小长度 0，最大长度 10 |
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
| jump_info | struct | 落地页内容结构定义，落地页组件内容结构定义,jump_info 结构单独显示,详见 [\[落地页内容结构详细定义\]](https://developers.e.qq.com/v3.0/docs/api/search_dynamic_creatives/add#jump_info_struct_href) |
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
| jumpinfo_account_id | integer | 推广帐号 id，落地页资产归属的账号 id |
| platform_type | enum | 落地页媒体平台类型，落地页媒体平台，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#landing_page_platform_type) 可选值：{ DEFAULT, ALL, SCREEN_PC, SCREEN_PHONE, OS_ANDROID, OS_IOS } |
| original_image_id | string | 素材图片 id，通过 [\[images 模块\]](https://developers.e.qq.com/docs/api/business_assets/image/images_add) 上传图片后获得，仅在规格支持时传入，详见规格详情 字段长度最小 1 字节，长度最大 64 字节 |
| display_mode | enum | 素材在创意上的播放样式，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#display_mode) 可选值：{ DEFAULT, CAROUSEL } |
| is_deleted | boolean | 是否已删除，读取接口字段有效，true：是，false：否 可选值：{ true, false } |
| video | struct[] | 视频组件 数组最小长度 0，最大长度 100 |
| component_id | integer | 创意组件 id |
| value | struct | 视频组件 |
| video_id* | string | 字段长度最小 1 字节，长度最大 64 字节 |
| cover_id | string | 素材图片 id，通过 [\[images 模块\]](https://developers.e.qq.com/docs/api/business_assets/image/images_add) 上传图片后获得，仅在规格支持时传入，详见规格详情 字段长度最小 1 字节，长度最大 64 字节 |
| jump_info | struct | 落地页内容结构定义，落地页组件内容结构定义,jump_info 结构单独显示,详见 [\[落地页内容结构详细定义\]](https://developers.e.qq.com/v3.0/docs/api/search_dynamic_creatives/add#jump_info_struct_href) |
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
| jump_info | struct | 落地页内容结构定义，落地页组件内容结构定义,jump_info 结构单独显示,详见 [\[落地页内容结构详细定义\]](https://developers.e.qq.com/v3.0/docs/api/search_dynamic_creatives/add#jump_info_struct_href) |
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
| backups | struct[] | 兜底落地页内容列表，仅可在 page_type 为 PAGE_TYPE_APP_DEEP_LINK、PAGE_TYPE_APP_MARKET、PAGE_TYPE_WECHAT_MINI_PROGRAM、PAGE_TYPE_WECHAT_MINI_GAME 时使用 数组最小长度 0，最大长度 10 |
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
| jump_info | struct | 落地页内容结构定义，落地页组件内容结构定义,jump_info 结构单独显示,详见 [\[落地页内容结构详细定义\]](https://developers.e.qq.com/v3.0/docs/api/search_dynamic_creatives/add#jump_info_struct_href) |
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
| jumpinfo_account_id | integer | 推广帐号 id，落地页资产归属的账号 id |
| platform_type | enum | 落地页媒体平台类型，落地页媒体平台，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#landing_page_platform_type) 可选值：{ DEFAULT, ALL, SCREEN_PC, SCREEN_PHONE, OS_ANDROID, OS_IOS } |
| is_deleted | boolean | 是否已删除，读取接口字段有效，true：是，false：否 可选值：{ true, false } |
| brand | struct[] | 品牌形象组件，投放版位包含视频号时，必须选择视频号作为品牌形象，广告才可在视频号版位正常播放 数组最小长度 0，最大长度 100 |
| component_id | integer | 创意组件 id |
| value | struct | 品牌形象结构 |
| brand_name | string | 品牌名称 字段长度最小 0 字节，长度最大 250 字节 |
| brand_image_id | string | 品牌形象图片 id，通过 [\[images 模块\]](https://developers.e.qq.com/docs/api/business_assets/image/images_add) 上传图片后获得，仅在规格支持时传入，详见规格详情 字段长度最小 1 字节，长度最大 64 字节 |
| jump_info | struct | 落地页内容结构定义，落地页组件内容结构定义,jump_info 结构单独显示,详见 [\[落地页内容结构详细定义\]](https://developers.e.qq.com/v3.0/docs/api/search_dynamic_creatives/add#jump_info_struct_href) |
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
| jump_info | struct | 落地页内容结构定义，落地页组件内容结构定义,jump_info 结构单独显示,详见 [\[落地页内容结构详细定义\]](https://developers.e.qq.com/v3.0/docs/api/search_dynamic_creatives/add#jump_info_struct_href) |
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
| backups | struct[] | 兜底落地页内容列表，仅可在 page_type 为 PAGE_TYPE_APP_DEEP_LINK、PAGE_TYPE_APP_MARKET、PAGE_TYPE_WECHAT_MINI_PROGRAM、PAGE_TYPE_WECHAT_MINI_GAME 时使用 数组最小长度 0，最大长度 10 |
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
| jump_info | struct | 落地页内容结构定义，落地页组件内容结构定义,jump_info 结构单独显示,详见 [\[落地页内容结构详细定义\]](https://developers.e.qq.com/v3.0/docs/api/search_dynamic_creatives/add#jump_info_struct_href) |
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
| jumpinfo_account_id | integer | 推广帐号 id，落地页资产归属的账号 id |
| platform_type | enum | 落地页媒体平台类型，落地页媒体平台，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#landing_page_platform_type) 可选值：{ DEFAULT, ALL, SCREEN_PC, SCREEN_PHONE, OS_ANDROID, OS_IOS } |
| is_deleted | boolean | 是否已删除，读取接口字段有效，true：是，false：否 可选值：{ true, false } |
| consult | struct[] | 咨询组件 数组最小长度 0，最大长度 100 |
| component_id | integer | 创意组件 id |
| value | struct | 咨询组件 |
| id | integer | 咨询组件值 最小值 0，最大值 4294967295 |
| jump_info_list | struct[] | 兜底落地页内容列表，仅可在 page_type 为 PAGE_TYPE_APP_DEEP_LINK、PAGE_TYPE_APP_MARKET、PAGE_TYPE_WECHAT_MINI_PROGRAM、PAGE_TYPE_WECHAT_MINI_GAME 时使用 数组最小长度 0，最大长度 10 |
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
| jump_info | struct | 落地页内容结构定义，落地页组件内容结构定义,jump_info 结构单独显示,详见 [\[落地页内容结构详细定义\]](https://developers.e.qq.com/v3.0/docs/api/search_dynamic_creatives/add#jump_info_struct_href) |
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
| is_deleted | boolean | 是否已删除，读取接口字段有效，true：是，false：否 可选值：{ true, false } |
| phone | struct[] | 电话组件 数组最小长度 0，最大长度 100 |
| component_id | integer | 创意组件 id |
| value | struct | 电话组件 |
| id | integer | 电话件值，电话组件值 最小值 1，最大值 4294967295 |
| is_deleted | boolean | 是否已删除，读取接口字段有效，true：是，false：否 可选值：{ true, false } |
| form | struct[] | 表单组件 数组最小长度 0，最大长度 100 |
| component_id | integer | 创意组件 id |
| value | struct | 表单组件 |
| id | integer | 表单组件值 最小值 1，最大值 4294967295 |
| is_deleted | boolean | 是否已删除，读取接口字段有效，true：是，false：否 可选值：{ true, false } |
| action_button | struct[] | 行动按钮组件 数组最小长度 0，最大长度 100 |
| component_id | integer | 创意组件 id |
| value | struct | 行动按钮结构 |
| button_text | string | action_button button_text 字段长度最小 0 字节，长度最大 100 字节 |
| jump_info | struct | 落地页内容结构定义，落地页组件内容结构定义,jump_info 结构单独显示,详见 [\[落地页内容结构详细定义\]](https://developers.e.qq.com/v3.0/docs/api/search_dynamic_creatives/add#jump_info_struct_href) |
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
| jump_info | struct | 落地页内容结构定义，落地页组件内容结构定义,jump_info 结构单独显示,详见 [\[落地页内容结构详细定义\]](https://developers.e.qq.com/v3.0/docs/api/search_dynamic_creatives/add#jump_info_struct_href) |
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
| backups | struct[] | 兜底落地页内容列表，仅可在 page_type 为 PAGE_TYPE_APP_DEEP_LINK、PAGE_TYPE_APP_MARKET、PAGE_TYPE_WECHAT_MINI_PROGRAM、PAGE_TYPE_WECHAT_MINI_GAME 时使用 数组最小长度 0，最大长度 10 |
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
| jump_info | struct | 落地页内容结构定义，落地页组件内容结构定义,jump_info 结构单独显示,详见 [\[落地页内容结构详细定义\]](https://developers.e.qq.com/v3.0/docs/api/search_dynamic_creatives/add#jump_info_struct_href) |
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
| jumpinfo_account_id | integer | 推广帐号 id，落地页资产归属的账号 id |
| platform_type | enum | 落地页媒体平台类型，落地页媒体平台，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#landing_page_platform_type) 可选值：{ DEFAULT, ALL, SCREEN_PC, SCREEN_PHONE, OS_ANDROID, OS_IOS } |
| is_deleted | boolean | 是否已删除，读取接口字段有效，true：是，false：否 可选值：{ true, false } |
| chosen_button | struct[] | 选择按钮组件 数组最小长度 0，最大长度 100 |
| component_id | integer | 创意组件 id |
| value | struct | 选择按钮结构 |
| left_button | struct | 选择按钮结构 |
| text | string | chosen_button_text 字段长度最小 0 字节，长度最大 100 字节 |
| jump_info | struct | 落地页内容结构定义，落地页组件内容结构定义,jump_info 结构单独显示,详见 [\[落地页内容结构详细定义\]](https://developers.e.qq.com/v3.0/docs/api/search_dynamic_creatives/add#jump_info_struct_href) |
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
| jump_info | struct | 落地页内容结构定义，落地页组件内容结构定义,jump_info 结构单独显示,详见 [\[落地页内容结构详细定义\]](https://developers.e.qq.com/v3.0/docs/api/search_dynamic_creatives/add#jump_info_struct_href) |
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
| backups | struct[] | 兜底落地页内容列表，仅可在 page_type 为 PAGE_TYPE_APP_DEEP_LINK、PAGE_TYPE_APP_MARKET、PAGE_TYPE_WECHAT_MINI_PROGRAM、PAGE_TYPE_WECHAT_MINI_GAME 时使用 数组最小长度 0，最大长度 10 |
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
| jump_info | struct | 落地页内容结构定义，落地页组件内容结构定义,jump_info 结构单独显示,详见 [\[落地页内容结构详细定义\]](https://developers.e.qq.com/v3.0/docs/api/search_dynamic_creatives/add#jump_info_struct_href) |
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
| jumpinfo_account_id | integer | 推广帐号 id，落地页资产归属的账号 id |
| platform_type | enum | 落地页媒体平台类型，落地页媒体平台，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#landing_page_platform_type) 可选值：{ DEFAULT, ALL, SCREEN_PC, SCREEN_PHONE, OS_ANDROID, OS_IOS } |
| right_button | struct | 选择按钮结构 |
| text | string | chosen_button_text 字段长度最小 0 字节，长度最大 100 字节 |
| jump_info | struct | 落地页内容结构定义，落地页组件内容结构定义,jump_info 结构单独显示,详见 [\[落地页内容结构详细定义\]](https://developers.e.qq.com/v3.0/docs/api/search_dynamic_creatives/add#jump_info_struct_href) |
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
| jump_info | struct | 落地页内容结构定义，落地页组件内容结构定义,jump_info 结构单独显示,详见 [\[落地页内容结构详细定义\]](https://developers.e.qq.com/v3.0/docs/api/search_dynamic_creatives/add#jump_info_struct_href) |
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
| backups | struct[] | 兜底落地页内容列表，仅可在 page_type 为 PAGE_TYPE_APP_DEEP_LINK、PAGE_TYPE_APP_MARKET、PAGE_TYPE_WECHAT_MINI_PROGRAM、PAGE_TYPE_WECHAT_MINI_GAME 时使用 数组最小长度 0，最大长度 10 |
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
| jump_info | struct | 落地页内容结构定义，落地页组件内容结构定义,jump_info 结构单独显示,详见 [\[落地页内容结构详细定义\]](https://developers.e.qq.com/v3.0/docs/api/search_dynamic_creatives/add#jump_info_struct_href) |
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
| jumpinfo_account_id | integer | 推广帐号 id，落地页资产归属的账号 id |
| platform_type | enum | 落地页媒体平台类型，落地页媒体平台，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#landing_page_platform_type) 可选值：{ DEFAULT, ALL, SCREEN_PC, SCREEN_PHONE, OS_ANDROID, OS_IOS } |
| is_deleted | boolean | 是否已删除，读取接口字段有效，true：是，false：否 可选值：{ true, false } |
| label | struct[] | 标签组件 数组最小长度 0，最大长度 100 |
| component_id | integer | 创意组件 id |
| value | struct | 标签组件 |
| list | struct[] | 标签列表 数组最小长度 0，最大长度 100 |
| content | string | 标签内容，文本长度限制请通过 [\[创意形式详情\]](https://developers.e.qq.com/v3.0/docs/api/creative_template/get) 接口获取 |
| type | enum | 创意标签类型，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#label_type) 可选值：{ LABEL_TYPE_UNKNOWN, LABEL_TYPE_COMMON, LABEL_TYPE_PROMOTIONAL, LABEL_TYPE_CUSTOMIZETEXT, LABEL_TYPE_ICON } |
| display_content | string | 标签显示内容 字段长度最小 0 字节，长度最大 100 字节 |
| is_deleted | boolean | 是否已删除，读取接口字段有效，true：是，false：否 可选值：{ true, false } |
| show_data | struct[] | 数据外显 数组最小长度 1，最大长度 100 |
| component_id | integer | 创意组件 id |
| value | struct | 数据外显组件 |
| conversion_data_type | enum | 数据外显转换数据类型，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#conversion_data_type) 可选值：{ CONVERSION_DATA_DEFAULT, CONVERSION_DATA_FRIEND_PLAY, CONVERSION_DATA_APP_DOWNLOAD, CONVERSION_DATA_ONSHOP, CONVERSION_DATA_ADMETRIC, CONVERSION_DATA_FRIEND_FOLLOW, CONVERSION_DATA_PRODUCT_DATA } |
| conversion_target_type | enum | 数据外显转化目标量类型，仅投朋友圈流量且 conversion_data_type 为 CONVERSION_DATA_ADMETRIC 时可设置，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#conversion_target_type) 可选值：{ CONVERSION_TARGET_DEFAULT, CONVERSION_TARGET_GET, CONVERSION_TARGET_RESERVE, CONVERSION_TARGET_BOOK, CONVERSION_TARGET_BUY, CONVERSION_TARGET_APPLY, CONVERSION_TARGET_CONSULT, CONVERSION_TARGET_DOWNLOAD, CONVERSION_TARGET_PLAYING, CONVERSION_TARGET_CLICK, CONVERSION_TARGET_SEE, CONVERSION_TARGET_INVOLVE, CONVERSION_TARGET_OPEN, CONVERSION_TARGET_PURCHASE, CONVERSION_TARGET_BROWSE, CONVERSION_TARGET_TRY, CONVERSION_TARGET_DRIVE, CONVERSION_TARGET_ENTER, CONVERSION_TARGET_READ, CONVERSION_TARGET_FOLLOW, CONVERSION_TARGET_USE, CONVERSION_TARGET_EXPERIENCE, CONVERSION_TARGET_SETUP, CONVERSION_TARGET_SECKILL, CONVERSION_TARGET_ADD_WECOM, CONVERSION_TARGET_LIKE, CONVERSION_TARGET_DONATION, CONVERSION_TARGET_GOOD_DEED, CONVERSION_TARGET_MEITUAN_RANK } |
| is_deleted | boolean | 是否已删除，读取接口字段有效，true：是，false：否 可选值：{ true, false } |
| marketing_pendant | struct[] | 营销挂件组件 数组最小长度 1，最大长度 100 |
| component_id | integer | 创意组件 id |
| value | struct | 营销挂件组件 |
| image_id | string | 挂件图，悬浮展示在竖版视频上以展示营销卖点。，通过 [\[images 模块\]](https://developers.e.qq.com/docs/api/business_assets/image/images_add) 上传图片后获得，仅在规格支持时传入，详见规格详情 字段长度最小 1 字节，长度最大 64 字节 |
| is_deleted | boolean | 是否已删除，读取接口字段有效，true：是，false：否 可选值：{ true, false } |
| app_gift_pack_code | struct[] | 礼包码组件 数组最小长度 1，最大长度 100 |
| component_id | integer | 创意组件 id |
| value | struct | 礼包码组件 |
| code | string | 礼包码，微信朋友圈广告创意形式需要填写，礼包码 字段长度最小 0 字节，长度最大 450 字节 |
| tips | string | 礼包码提示，微信朋友圈广告创意形式需要填写，礼包码提示 |
| description | string | 礼包描述 字段长度最小 0 字节，长度最大 36 字节 |
| game_gift_id | string | 游戏圈礼包 id 字段长度最小 0 字节，长度最大 450 字节 |
| game_act_id | string | 游戏圈活动 id 字段长度最小 0 字节，长度最大 450 字节 |
| game_gift_image_id | string | 游戏圈礼包图片 字段长度最小 0 字节，长度最大 450 字节 |
| is_deleted | boolean | 是否已删除，读取接口字段有效，true：是，false：否 可选值：{ true, false } |
| shop_image | struct[] | 卖点图组件 数组最小长度 1，最大长度 100 |
| component_id | integer | 创意组件 id |
| value | struct | 卖点图组件 |
| shop_image_switch | boolean | 卖点图开关 可选值：{ true, false } |
| dynamic_shop_image_switch | boolean | 卖点图轮播开关 可选值：{ true, false } |
| shop_image_id | string | 卖点图片 id 字段长度最小 1 字节，长度最大 2048 字节 |
| shop_image_title | string | 卖点图标题 字段长度最小 1 字节，长度最大 2048 字节 |
| shop_image_description | string | 卖点图文案 字段长度最小 1 字节，长度最大 2048 字节 |
| is_deleted | boolean | 是否已删除，读取接口字段有效，true：是，false：否 可选值：{ true, false } |
| count_down | struct[] | 倒计时组件 数组最小长度 1，最大长度 100 |
| component_id | integer | 创意组件 id |
| value | struct | 倒计时组件 |
| price | string | 倒计时价格，单位：分 字段长度最小 0 字节，长度最大 192 字节 |
| time_type | enum | 倒计时时间类型 0:距离活动开始 1:距离活动结束，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#ad_creative_countdown_time_type) 可选值：{ COUNTDOWN_TIME_START, COUNTDOWN_TIME_END } |
| expiring_timestamp | integer | 倒计时时间锚点，unix 时间戳，单位秒 最小值 1000000000，最大值 9999999999 |
| is_deleted | boolean | 是否已删除，读取接口字段有效，true：是，false：否 可选值：{ true, false } |
| barrage | struct[] | 弹幕组件 数组最小长度 0，最大长度 100 |
| component_id | integer | 创意组件 id |
| value | struct | 弹幕组件 |
| list | struct[] | 列表子链 数组最小长度 0，最大长度 100 |
| id | integer | 弹幕 id 最小值 0，最大值 4294967295 |
| text | string | 弹幕文案，1~12 个字 字段长度最小 1 字节，长度最大 36 字节 |
| is_deleted | boolean | 是否已删除，读取接口字段有效，true：是，false：否 可选值：{ true, false } |
| floating_zone | struct[] | 浮层卡片组件，投放版位包含视频号时，必须包含浮层卡片或多卡轮播组件，广告才可在视频号版位正常播放 数组最小长度 0，最大长度 100 |
| component_id | integer | 创意组件 id |
| value | struct | 浮层卡片结构 |
| floating_zone_switch | boolean | 浮层卡片开关 可选值：{ true, false } |
| floating_zone_image_id | string | 尺寸：512*512，大小：不超过 50 KB，格式：*.jpg\|*.jpeg\|*.png ；通过 [\[images 模块\]](https://developers.e.qq.com/docs/apilist/business_assets/image) 上传图片后获得 |
| floating_zone_name | string | 文案一，字段长度最小 1 个等宽字符，长度最大 10 等宽字符（即字段最大长度为 10 个中文字或全角标点，20 个英文字或半角标点。一个等宽字符等价于一个中文，等价于两个英文。） |
| floating_zone_desc | string | 文案二，字段长度最小 1 个等宽字符，长度最大 14 等宽字符（即字段最大长度为 14 个中文字或全角标点，28 个英文字或半角标点。一个等宽字符等价于一个中文，等价于两个英文。） |
| floating_zone_button_text | string | 按钮文案，字段长度最小 1 个等宽字符，长度最大 10 等宽字符（即字段最大长度为 10 个中文字或全角标点，20 个英文字或半角标点。一个等宽字符等价于一个中文，等价于两个英文。） |
| floating_zone_show_app_property_switch | boolean | 显示已下载人数及评分开关，显示已下载人数及评分开关(仅限应用下载类广告） 可选值：{ true, false } |
| floating_zone_type | enum | 浮层卡片类型，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#creative_floating_zone_type) 可选值：{ FLOATING_ZONE_TYPE_UNKNOWN, FLOATING_ZONE_TYPE_IMAGE_TEXT, FLOATING_ZONE_TYPE_SINGLE_IMAGE, FLOATING_ZONE_TYPE_MULTI_BUTTON, FLOATING_ZONE_TYPE_SLIDER_CARD } |
| floating_zone_single_image_id | string | 尺寸：482*270`，大小：不超过 50 KB，格式：*.jpg\|*.jpeg\|*.png ；通过 [\[images 模块\]](https://developers.e.qq.com/docs/apilist/business_assets/image) 上传图片后获得 |
| button_base_text | string | 视频号基础态文案内容 字段长度最小 0 字节，长度最大 10 字节 |
| jump_info | struct | 落地页内容结构定义，落地页组件内容结构定义,jump_info 结构单独显示,详见 [\[落地页内容结构详细定义\]](https://developers.e.qq.com/v3.0/docs/api/search_dynamic_creatives/add#jump_info_struct_href) |
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
| jump_info | struct | 落地页内容结构定义，落地页组件内容结构定义,jump_info 结构单独显示,详见 [\[落地页内容结构详细定义\]](https://developers.e.qq.com/v3.0/docs/api/search_dynamic_creatives/add#jump_info_struct_href) |
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
| backups | struct[] | 兜底落地页内容列表，仅可在 page_type 为 PAGE_TYPE_APP_DEEP_LINK、PAGE_TYPE_APP_MARKET、PAGE_TYPE_WECHAT_MINI_PROGRAM、PAGE_TYPE_WECHAT_MINI_GAME 时使用 数组最小长度 0，最大长度 10 |
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
| jump_info | struct | 落地页内容结构定义，落地页组件内容结构定义,jump_info 结构单独显示,详见 [\[落地页内容结构详细定义\]](https://developers.e.qq.com/v3.0/docs/api/search_dynamic_creatives/add#jump_info_struct_href) |
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
| jumpinfo_account_id | integer | 推广帐号 id，落地页资产归属的账号 id |
| platform_type | enum | 落地页媒体平台类型，落地页媒体平台，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#landing_page_platform_type) 可选值：{ DEFAULT, ALL, SCREEN_PC, SCREEN_PHONE, OS_ANDROID, OS_IOS } |
| floating_zone_info_type | enum | 浮层卡片外显类型，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#floating_zone_info_type) 可选值：{ FLOATING_ZONE_INFO_DEFAULT, FLOATING_ZONE_INFO_TYPE_NORMAL, FLOATING_ZONE_INFO_TYPE_PRODUCT } |
| is_deleted | boolean | 是否已删除，读取接口字段有效，true：是，false：否 可选值：{ true, false } |
| text_link | struct[] | 文字链组件 数组最小长度 0，最大长度 100 |
| component_id | integer | 创意组件 id |
| value | struct | 文字链组件 |
| link_name_type | enum | 链接名称类型，若不填写，则默认显示【查看详情】，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#link_url_link_name_type) 可选值：{ NOT_USED, VIEW_DETAILS, GET_COUPONS, MAKE_AN_APPOINTMENT, BUY_NOW, GO_SHOPPING, ENTER_MINI_PROGRAM, ENTER_MINI_GAME, APPLY_NOW, BOOK_NOW, RESERVATION_BUY, CONSULT_NOW, BOOK_DRIVE, ENTER_OFFICIAL_ACCOUNTS, PLAY_NOW, OPEN_MINI_GAME, DOWNLOAD_APP, DOWNLOAD_GAME, CHECK_IT_OUT, GET_SAMPLES, TRY_NOW, GET_IT_NOW, BUY_ASAP, DOWNLOAD_NOW, VIEW_APPS, MORE_INFO, GET_VOUCHERS, FOLLOW_OFFICIAL_ACCOUNT, READ_NOVELS, WATCH_LIVE, RESERVE_NOW, OPEN_APP, ALREADY_INSTALL, SETUP_NOW, SECKILL_NOW, TRY_PLAY_NOW, INSTALL_NOW, MORE_ABOUT_OFFICIAL_ACCOUNT_CHT, FOLLOW_OFFICIAL_ACCOUNT_CHT, GET_FOR_FREE, WATCH_VIDEO, CARNIVAL_618, SURPRISE_618, DISCOUNT_618, GO_618_VENUE, GET_618_WELFARE, CONTACT_CUSTOMER_SERVICE, CONTACT_BUSINESS, GO_SCAN, PICK_GIFT, SELECT_GIFT, GIVING_GIFT, GIVE_FRIEND, LINK_NAME_TEXT_TEMPLATE } |
| link_name_text | string | 文字链文案 |
| jump_info | struct | 落地页内容结构定义，落地页组件内容结构定义,jump_info 结构单独显示,详见 [\[落地页内容结构详细定义\]](https://developers.e.qq.com/v3.0/docs/api/search_dynamic_creatives/add#jump_info_struct_href) |
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
| jump_info | struct | 落地页内容结构定义，落地页组件内容结构定义,jump_info 结构单独显示,详见 [\[落地页内容结构详细定义\]](https://developers.e.qq.com/v3.0/docs/api/search_dynamic_creatives/add#jump_info_struct_href) |
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
| backups | struct[] | 兜底落地页内容列表，仅可在 page_type 为 PAGE_TYPE_APP_DEEP_LINK、PAGE_TYPE_APP_MARKET、PAGE_TYPE_WECHAT_MINI_PROGRAM、PAGE_TYPE_WECHAT_MINI_GAME 时使用 数组最小长度 0，最大长度 10 |
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
| jump_info | struct | 落地页内容结构定义，落地页组件内容结构定义,jump_info 结构单独显示,详见 [\[落地页内容结构详细定义\]](https://developers.e.qq.com/v3.0/docs/api/search_dynamic_creatives/add#jump_info_struct_href) |
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
| jumpinfo_account_id | integer | 推广帐号 id，落地页资产归属的账号 id |
| platform_type | enum | 落地页媒体平台类型，落地页媒体平台，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#landing_page_platform_type) 可选值：{ DEFAULT, ALL, SCREEN_PC, SCREEN_PHONE, OS_ANDROID, OS_IOS } |
| is_deleted | boolean | 是否已删除，读取接口字段有效，true：是，false：否 可选值：{ true, false } |
| end_page | struct[] | 视频结束页 数组最小长度 1，最大长度 100 |
| component_id | integer | 创意组件 id |
| value | struct | 视频结束页组件 |
| end_page_type | enum | 结束页类型，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#end_page_type) 可选值：{ END_PAGE_AVATAR_NICKNAME_HIGHLIGHT, END_PAGE_DESCRIPTION_HIGHLIGHT } |
| end_page_desc | string | 结束页文案 字段长度最小 1 字节，长度最大 192 字节 |
| is_deleted | boolean | 是否已删除，读取接口字段有效，true：是，false：否 可选值：{ true, false } |
| living_desc | struct[] | 轮播文案 数组最小长度 1，最大长度 100 |
| component_id | integer | 创意组件 id |
| value | struct | 轮播文案组件 |
| living_desc_switch | boolean | 轮播组件开关 可选值：{ true, false } |
| desc_list | string[] | 轮播文案 数组最小长度 2，最大长度 5 字段长度最小 1 字节，长度最大 1024 字节 |
| is_deleted | boolean | 是否已删除，读取接口字段有效，true：是，false：否 可选值：{ true, false } |
| wechat_channels | struct[] | 视频号信息组件 数组最小长度 1，最大长度 100 |
| component_id | integer | 创意组件 id |
| value | struct | 视频号信息组件 |
| live_promoted_type | enum | 视频号直播推广形式，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#live_promoted_type) 可选值：{ LIVE_PROMOTED_TYPE_NATIVE_VIDEO, LIVE_PROMOTED_TYPE_SHORT_VIDEO } |
| username | string | 视频号 username 字段长度最小 0 字节，长度最大 1024 字节 |
| finder_object_visibility | boolean | 是否保存至视频号 可选值：{ true, false } |
| is_deleted | boolean | 是否已删除，读取接口字段有效，true：是，false：否 可选值：{ true, false } |
| short_video | struct[] | 短视频组件 数组最小长度 1，最大长度 100 |
| component_id | integer | 创意组件 id |
| value | struct | 视频结束页组件 |
| short_video1 | string | 视频 id，通过 [\[videos 模块\]](https://developers.e.qq.com/docs/apilist/business_assets/video?version=1.1) 上传视频后获得 |
| short_video2 | string | 视频 id，通过 [\[videos 模块\]](https://developers.e.qq.com/docs/apilist/business_assets/video?version=1.1) 上传视频后获得 |
| is_deleted | boolean | 是否已删除，读取接口字段有效，true：是，false：否 可选值：{ true, false } |
| element_story | struct[] | 集装箱创意组合组件 数组最小长度 0，最大长度 100 |
| component_id | integer | 创意组件 id |
| value | struct | 集装箱创意组合 |
| list | struct[] | 集装箱创意组合，具体请咨询你的运营接口人，集装箱创意组合 数组最小长度 1，最大长度 14 |
| image | string | 图片 id，通过 [\[images 模块\]](https://developers.e.qq.com/docs/api/business_assets/image/images_add) 上传图片后获得，图片 id 字段长度最小 1 字节，长度最大 192 字节 |
| image2 | string | 素材图片 2 的 id，通过 [\[images 模块\]](https://developers.e.qq.com/docs/api/business_assets/image/images_add) 上传图片后获得，素材图片 2 的 id 字段长度最小 1 字节，长度最大 192 字节 |
| description | string | 广告描述 字段长度最小 1 字节，长度最大 10240 字节 |
| url | string | 跳转链接 字段长度最小 1 字节，长度最大 1536 字节 |
| title | string | 广告文案 字段长度最小 1 字节，长度最大 10240 字节 |
| is_deleted | boolean | 是否已删除，读取接口字段有效，true：是，false：否 可选值：{ true, false } |
| wxgame_playable_page | struct[] | 小游戏试玩页组件 数组最小长度 1，最大长度 100 |
| component_id | integer | 创意组件 id |
| value | struct | 小游戏试玩页组件 |
| wxgame_playable_page_switch | boolean | 小游戏试玩页组件开关 可选值：{ true, false } |
| wxgame_playable_page_path | string | 小游戏试玩页 字段长度最小 0 字节，长度最大 1024 字节 |
| wxgame_playable_page_end_cover_img | string | 结束页图片 id 字段长度最小 0 字节，长度最大 64 字节 |
| wxgame_playable_page_end_desc | string | 小游戏试玩页结束页文案 字段长度最小 0 字节，长度最大 200 字节 |
| wxgame_playable_page_trigger_types | string[] | 小游戏试玩页组件开启方式 数组最小长度 1，最大长度 100 |
| wxgame_playable_page_trigger_text | string | 小游戏试玩页组件开启文案，可用文案请通过 [\[创意规格详情\]](https://developers.e.qq.com/v3.0/docs/api/creative_template/get) 接口获取 |
| wxgame_playable_page_card_link_image | string | 小游戏试玩页组件图文链接图片 id 字段长度最小 0 字节，长度最大 64 字节 |
| wxgame_playable_page_card_link_description | string | 小游戏试玩页组件图文链接描述文案，文本长度限制通过 [\[创意规格详情\]](https://developers.e.qq.com/v3.0/docs/api/creative_template/get) 接口获取 |
| wxgame_playable_page_end_time_type | enum | 小游戏试玩页组件结束时间类型，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#wxgame_playable_page_end_time_type) 可选值：{ WXGAME_PLAYABLE_PAGE_END_TYPE_UNKNOWN, WXGAME_PLAYABLE_PAGE_END_TIME_30, WXGAME_PLAYABLE_PAGE_END_TIME_COMPLETE } |
| is_deleted | boolean | 是否已删除，读取接口字段有效，true：是，false：否 可选值：{ true, false } |
| main_jump_info | struct[] | 主跳转组件 数组最小长度 0，最大长度 100 |
| component_id | integer | 创意组件 id |
| value | struct | 落地页内容结构定义，落地页组件内容结构定义,jump_info 结构单独显示,详见 [\[落地页内容结构详细定义\]](https://developers.e.qq.com/v3.0/docs/api/search_dynamic_creatives/add#jump_info_struct_href) |
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
| jump_info | struct | 落地页内容结构定义，落地页组件内容结构定义,jump_info 结构单独显示,详见 [\[落地页内容结构详细定义\]](https://developers.e.qq.com/v3.0/docs/api/search_dynamic_creatives/add#jump_info_struct_href) |
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
| backups | struct[] | 兜底落地页内容列表，仅可在 page_type 为 PAGE_TYPE_APP_DEEP_LINK、PAGE_TYPE_APP_MARKET、PAGE_TYPE_WECHAT_MINI_PROGRAM、PAGE_TYPE_WECHAT_MINI_GAME 时使用 数组最小长度 0，最大长度 10 |
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
| jump_info | struct | 落地页内容结构定义，落地页组件内容结构定义,jump_info 结构单独显示,详见 [\[落地页内容结构详细定义\]](https://developers.e.qq.com/v3.0/docs/api/search_dynamic_creatives/add#jump_info_struct_href) |
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
| jumpinfo_account_id | integer | 推广帐号 id，落地页资产归属的账号 id |
| platform_type | enum | 落地页媒体平台类型，落地页媒体平台，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#landing_page_platform_type) 可选值：{ DEFAULT, ALL, SCREEN_PC, SCREEN_PHONE, OS_ANDROID, OS_IOS } |
| is_deleted | boolean | 是否已删除，读取接口字段有效，true：是，false：否 可选值：{ true, false } |
| app_promotion_video | struct[] | ott 视频 数组最小长度 1，最大长度 100 |
| component_id | integer | 创意组件 id |
| value | struct | ott 视频组件 |
| video | string | 视频 id，通过 [\[videos 模块\]](https://developers.e.qq.com/docs/apilist/business_assets/video?version=1.1) 上传视频后获得 |
| video2 | string | 视频 id，通过 [\[videos 模块\]](https://developers.e.qq.com/docs/apilist/business_assets/video?version=1.1) 上传视频后获得 |
| video3 | string | 视频 id，通过 [\[videos 模块\]](https://developers.e.qq.com/docs/apilist/business_assets/video?version=1.1) 上传视频后获得 |
| allow_tv_qrcode | boolean | 支持 TV 二维码 可选值：{ true, false } |
| qrcode_position | struct | 应用推广二唯码坐标信息 |
| position_x | string | 点 x 坐标 字段长度最小 0 字节，长度最大 10240 字节 |
| position_y | string | 点 y 坐标 字段长度最小 0 字节，长度最大 10240 字节 |
| qrcode_width | integer | 应用推广二维码边长 |
| is_deleted | boolean | 是否已删除，读取接口字段有效，true：是，false：否 可选值：{ true, false } |
| video_showcase | struct[] | 橱窗视频组件 数组最小长度 0，最大长度 100 |
| component_id | integer | 创意组件 id |
| value | struct | 橱窗视频结构 |
| video* | struct | 视频组件 |
| video_id* | string | 字段长度最小 1 字节，长度最大 64 字节 |
| cover_id | string | 素材图片 id，通过 [\[images 模块\]](https://developers.e.qq.com/docs/api/business_assets/image/images_add) 上传图片后获得，仅在规格支持时传入，详见规格详情 字段长度最小 1 字节，长度最大 64 字节 |
| jump_info | struct | 落地页内容结构定义，落地页组件内容结构定义,jump_info 结构单独显示,详见 [\[落地页内容结构详细定义\]](https://developers.e.qq.com/v3.0/docs/api/search_dynamic_creatives/add#jump_info_struct_href) |
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
| jump_info | struct | 落地页内容结构定义，落地页组件内容结构定义,jump_info 结构单独显示,详见 [\[落地页内容结构详细定义\]](https://developers.e.qq.com/v3.0/docs/api/search_dynamic_creatives/add#jump_info_struct_href) |
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
| backups | struct[] | 兜底落地页内容列表，仅可在 page_type 为 PAGE_TYPE_APP_DEEP_LINK、PAGE_TYPE_APP_MARKET、PAGE_TYPE_WECHAT_MINI_PROGRAM、PAGE_TYPE_WECHAT_MINI_GAME 时使用 数组最小长度 0，最大长度 10 |
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
| jump_info | struct | 落地页内容结构定义，落地页组件内容结构定义,jump_info 结构单独显示,详见 [\[落地页内容结构详细定义\]](https://developers.e.qq.com/v3.0/docs/api/search_dynamic_creatives/add#jump_info_struct_href) |
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
| jumpinfo_account_id | integer | 推广帐号 id，落地页资产归属的账号 id |
| platform_type | enum | 落地页媒体平台类型，落地页媒体平台，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#landing_page_platform_type) 可选值：{ DEFAULT, ALL, SCREEN_PC, SCREEN_PHONE, OS_ANDROID, OS_IOS } |
| image_list | struct | 图集 |
| jump_info | struct | 落地页内容结构定义，落地页组件内容结构定义,jump_info 结构单独显示,详见 [\[落地页内容结构详细定义\]](https://developers.e.qq.com/v3.0/docs/api/search_dynamic_creatives/add#jump_info_struct_href) |
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
| jump_info | struct | 落地页内容结构定义，落地页组件内容结构定义,jump_info 结构单独显示,详见 [\[落地页内容结构详细定义\]](https://developers.e.qq.com/v3.0/docs/api/search_dynamic_creatives/add#jump_info_struct_href) |
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
| backups | struct[] | 兜底落地页内容列表，仅可在 page_type 为 PAGE_TYPE_APP_DEEP_LINK、PAGE_TYPE_APP_MARKET、PAGE_TYPE_WECHAT_MINI_PROGRAM、PAGE_TYPE_WECHAT_MINI_GAME 时使用 数组最小长度 0，最大长度 10 |
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
| jump_info | struct | 落地页内容结构定义，落地页组件内容结构定义,jump_info 结构单独显示,详见 [\[落地页内容结构详细定义\]](https://developers.e.qq.com/v3.0/docs/api/search_dynamic_creatives/add#jump_info_struct_href) |
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
| jumpinfo_account_id | integer | 推广帐号 id，落地页资产归属的账号 id |
| platform_type | enum | 落地页媒体平台类型，落地页媒体平台，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#landing_page_platform_type) 可选值：{ DEFAULT, ALL, SCREEN_PC, SCREEN_PHONE, OS_ANDROID, OS_IOS } |
| list | struct[] | 图集 |
| image_id* | string | 素材图片 id，通过 [\[images 模块\]](https://developers.e.qq.com/docs/api/business_assets/image/images_add) 上传图片后获得，仅在规格支持时传入，详见规格详情 字段长度最小 1 字节，长度最大 64 字节 |
| image_url | string | 素材图片的 url，仅在规格支持时传入 字段长度最小 1 字节，长度最大 1024 字节 |
| jump_info | struct | 落地页内容结构定义，落地页组件内容结构定义,jump_info 结构单独显示,详见 [\[落地页内容结构详细定义\]](https://developers.e.qq.com/v3.0/docs/api/search_dynamic_creatives/add#jump_info_struct_href) |
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
| jump_info | struct | 落地页内容结构定义，落地页组件内容结构定义,jump_info 结构单独显示,详见 [\[落地页内容结构详细定义\]](https://developers.e.qq.com/v3.0/docs/api/search_dynamic_creatives/add#jump_info_struct_href) |
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
| backups | struct[] | 兜底落地页内容列表，仅可在 page_type 为 PAGE_TYPE_APP_DEEP_LINK、PAGE_TYPE_APP_MARKET、PAGE_TYPE_WECHAT_MINI_PROGRAM、PAGE_TYPE_WECHAT_MINI_GAME 时使用 数组最小长度 0，最大长度 10 |
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
| jump_info | struct | 落地页内容结构定义，落地页组件内容结构定义,jump_info 结构单独显示,详见 [\[落地页内容结构详细定义\]](https://developers.e.qq.com/v3.0/docs/api/search_dynamic_creatives/add#jump_info_struct_href) |
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
| jumpinfo_account_id | integer | 推广帐号 id，落地页资产归属的账号 id |
| platform_type | enum | 落地页媒体平台类型，落地页媒体平台，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#landing_page_platform_type) 可选值：{ DEFAULT, ALL, SCREEN_PC, SCREEN_PHONE, OS_ANDROID, OS_IOS } |
| original_image_id | string | 素材图片 id，通过 [\[images 模块\]](https://developers.e.qq.com/docs/api/business_assets/image/images_add) 上传图片后获得，仅在规格支持时传入，详见规格详情 字段长度最小 1 字节，长度最大 64 字节 |
| display_mode | enum | 素材在创意上的播放样式，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#display_mode) 可选值：{ DEFAULT, CAROUSEL } |
| is_deleted | boolean | 是否已删除，读取接口字段有效，true：是，false：否 可选值：{ true, false } |
| image_showcase | struct[] | 橱窗图片组件 数组最小长度 0，最大长度 100 |
| component_id | integer | 创意组件 id |
| value | struct | 橱窗图片结构 |
| image* | struct | 图片结构 |
| image_id* | string | 素材图片 id，通过 [\[images 模块\]](https://developers.e.qq.com/docs/api/business_assets/image/images_add) 上传图片后获得，仅在规格支持时传入，详见规格详情 字段长度最小 1 字节，长度最大 64 字节 |
| image_url | string | 素材图片的 url，仅在规格支持时传入 字段长度最小 1 字节，长度最大 1024 字节 |
| jump_info | struct | 落地页内容结构定义，落地页组件内容结构定义,jump_info 结构单独显示,详见 [\[落地页内容结构详细定义\]](https://developers.e.qq.com/v3.0/docs/api/search_dynamic_creatives/add#jump_info_struct_href) |
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
| jump_info | struct | 落地页内容结构定义，落地页组件内容结构定义,jump_info 结构单独显示,详见 [\[落地页内容结构详细定义\]](https://developers.e.qq.com/v3.0/docs/api/search_dynamic_creatives/add#jump_info_struct_href) |
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
| backups | struct[] | 兜底落地页内容列表，仅可在 page_type 为 PAGE_TYPE_APP_DEEP_LINK、PAGE_TYPE_APP_MARKET、PAGE_TYPE_WECHAT_MINI_PROGRAM、PAGE_TYPE_WECHAT_MINI_GAME 时使用 数组最小长度 0，最大长度 10 |
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
| jump_info | struct | 落地页内容结构定义，落地页组件内容结构定义,jump_info 结构单独显示,详见 [\[落地页内容结构详细定义\]](https://developers.e.qq.com/v3.0/docs/api/search_dynamic_creatives/add#jump_info_struct_href) |
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
| jumpinfo_account_id | integer | 推广帐号 id，落地页资产归属的账号 id |
| platform_type | enum | 落地页媒体平台类型，落地页媒体平台，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#landing_page_platform_type) 可选值：{ DEFAULT, ALL, SCREEN_PC, SCREEN_PHONE, OS_ANDROID, OS_IOS } |
| image_list | struct | 图集 |
| jump_info | struct | 落地页内容结构定义，落地页组件内容结构定义,jump_info 结构单独显示,详见 [\[落地页内容结构详细定义\]](https://developers.e.qq.com/v3.0/docs/api/search_dynamic_creatives/add#jump_info_struct_href) |
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
| jump_info | struct | 落地页内容结构定义，落地页组件内容结构定义,jump_info 结构单独显示,详见 [\[落地页内容结构详细定义\]](https://developers.e.qq.com/v3.0/docs/api/search_dynamic_creatives/add#jump_info_struct_href) |
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
| backups | struct[] | 兜底落地页内容列表，仅可在 page_type 为 PAGE_TYPE_APP_DEEP_LINK、PAGE_TYPE_APP_MARKET、PAGE_TYPE_WECHAT_MINI_PROGRAM、PAGE_TYPE_WECHAT_MINI_GAME 时使用 数组最小长度 0，最大长度 10 |
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
| jump_info | struct | 落地页内容结构定义，落地页组件内容结构定义,jump_info 结构单独显示,详见 [\[落地页内容结构详细定义\]](https://developers.e.qq.com/v3.0/docs/api/search_dynamic_creatives/add#jump_info_struct_href) |
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
| jumpinfo_account_id | integer | 推广帐号 id，落地页资产归属的账号 id |
| platform_type | enum | 落地页媒体平台类型，落地页媒体平台，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#landing_page_platform_type) 可选值：{ DEFAULT, ALL, SCREEN_PC, SCREEN_PHONE, OS_ANDROID, OS_IOS } |
| list | struct[] | 图集 |
| image_id* | string | 素材图片 id，通过 [\[images 模块\]](https://developers.e.qq.com/docs/api/business_assets/image/images_add) 上传图片后获得，仅在规格支持时传入，详见规格详情 字段长度最小 1 字节，长度最大 64 字节 |
| image_url | string | 素材图片的 url，仅在规格支持时传入 字段长度最小 1 字节，长度最大 1024 字节 |
| jump_info | struct | 落地页内容结构定义，落地页组件内容结构定义,jump_info 结构单独显示,详见 [\[落地页内容结构详细定义\]](https://developers.e.qq.com/v3.0/docs/api/search_dynamic_creatives/add#jump_info_struct_href) |
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
| jump_info | struct | 落地页内容结构定义，落地页组件内容结构定义,jump_info 结构单独显示,详见 [\[落地页内容结构详细定义\]](https://developers.e.qq.com/v3.0/docs/api/search_dynamic_creatives/add#jump_info_struct_href) |
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
| backups | struct[] | 兜底落地页内容列表，仅可在 page_type 为 PAGE_TYPE_APP_DEEP_LINK、PAGE_TYPE_APP_MARKET、PAGE_TYPE_WECHAT_MINI_PROGRAM、PAGE_TYPE_WECHAT_MINI_GAME 时使用 数组最小长度 0，最大长度 10 |
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
| jump_info | struct | 落地页内容结构定义，落地页组件内容结构定义,jump_info 结构单独显示,详见 [\[落地页内容结构详细定义\]](https://developers.e.qq.com/v3.0/docs/api/search_dynamic_creatives/add#jump_info_struct_href) |
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
| jumpinfo_account_id | integer | 推广帐号 id，落地页资产归属的账号 id |
| platform_type | enum | 落地页媒体平台类型，落地页媒体平台，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#landing_page_platform_type) 可选值：{ DEFAULT, ALL, SCREEN_PC, SCREEN_PHONE, OS_ANDROID, OS_IOS } |
| original_image_id | string | 素材图片 id，通过 [\[images 模块\]](https://developers.e.qq.com/docs/api/business_assets/image/images_add) 上传图片后获得，仅在规格支持时传入，详见规格详情 字段长度最小 1 字节，长度最大 64 字节 |
| display_mode | enum | 素材在创意上的播放样式，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#display_mode) 可选值：{ DEFAULT, CAROUSEL } |
| is_deleted | boolean | 是否已删除，读取接口字段有效，true：是，false：否 可选值：{ true, false } |
| social_skill | struct[] | 首评回复组件 数组长度为 1 |
| component_id | integer | 创意组件 id |
| value | struct | 社交能力 |
| social_skill_first_comment_switch | boolean | 首条评论开关 可选值：{ true, false } |
| social_skill_first_comment | string | 首条评论内容 字段长度最小 0 字节，长度最大 200 字节 |
| is_deleted | boolean | 是否已删除，读取接口字段有效，true：是，false：否 可选值：{ true, false } |
| mini_card_link | struct[] | 图文链接组件 数组最小长度 0，最大长度 100 |
| component_id | integer | 创意组件 id |
| value | struct | 图文链接结构 |
| mini_card_link_description | string | 图文链接描述文案，文本长度限制通过 [\[创意形式详情\]](https://developers.e.qq.com/v3.0/docs/api/creative_template/get) 接口获取 |
| mini_card_link_image | string | 图文链接图片 字段长度最小 0 字节，长度最大 384 字节 |
| mini_card_link_button_text | string | 图文链接按钮文案，可用文案请通过 [\[创意形式详情\]](https://developers.e.qq.com/v3.0/docs/api/creative_template/get) 接口获取 |
| jump_info | struct | 落地页内容结构定义，落地页组件内容结构定义,jump_info 结构单独显示,详见 [\[落地页内容结构详细定义\]](https://developers.e.qq.com/v3.0/docs/api/search_dynamic_creatives/add#jump_info_struct_href) |
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
| jump_info | struct | 落地页内容结构定义，落地页组件内容结构定义,jump_info 结构单独显示,详见 [\[落地页内容结构详细定义\]](https://developers.e.qq.com/v3.0/docs/api/search_dynamic_creatives/add#jump_info_struct_href) |
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
| backups | struct[] | 兜底落地页内容列表，仅可在 page_type 为 PAGE_TYPE_APP_DEEP_LINK、PAGE_TYPE_APP_MARKET、PAGE_TYPE_WECHAT_MINI_PROGRAM、PAGE_TYPE_WECHAT_MINI_GAME 时使用 数组最小长度 0，最大长度 10 |
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
| jump_info | struct | 落地页内容结构定义，落地页组件内容结构定义,jump_info 结构单独显示,详见 [\[落地页内容结构详细定义\]](https://developers.e.qq.com/v3.0/docs/api/search_dynamic_creatives/add#jump_info_struct_href) |
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
| jumpinfo_account_id | integer | 推广帐号 id，落地页资产归属的账号 id |
| platform_type | enum | 落地页媒体平台类型，落地页媒体平台，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#landing_page_platform_type) 可选值：{ DEFAULT, ALL, SCREEN_PC, SCREEN_PHONE, OS_ANDROID, OS_IOS } |
| is_deleted | boolean | 是否已删除，读取接口字段有效，true：是，false：否 可选值：{ true, false } |
| floating_zone_list | struct[] | 多卡轮播组件，投放版位包含视频号时，必须包含浮层卡片或多卡轮播组件，广告才可在视频号版位正常播放 数组最小长度 0，最大长度 100 |
| component_id | integer | 创意组件 id |
| value | struct | 多卡轮播结构 |
| list | struct[] | 多卡轮播 |
| floating_zone_switch | boolean | 浮层卡片开关 可选值：{ true, false } |
| floating_zone_image_id | string | 尺寸：512*512，大小：不超过 50 KB，格式：*.jpg\|*.jpeg\|*.png ；通过 [\[images 模块\]](https://developers.e.qq.com/docs/apilist/business_assets/image) 上传图片后获得 |
| floating_zone_name | string | 文案一，字段长度最小 1 个等宽字符，长度最大 10 等宽字符（即字段最大长度为 10 个中文字或全角标点，20 个英文字或半角标点。一个等宽字符等价于一个中文，等价于两个英文。） |
| floating_zone_desc | string | 文案二，字段长度最小 1 个等宽字符，长度最大 14 等宽字符（即字段最大长度为 14 个中文字或全角标点，28 个英文字或半角标点。一个等宽字符等价于一个中文，等价于两个英文。） |
| floating_zone_button_text | string | 按钮文案，字段长度最小 1 个等宽字符，长度最大 10 等宽字符（即字段最大长度为 10 个中文字或全角标点，20 个英文字或半角标点。一个等宽字符等价于一个中文，等价于两个英文。） |
| floating_zone_show_app_property_switch | boolean | 显示已下载人数及评分开关，显示已下载人数及评分开关(仅限应用下载类广告） 可选值：{ true, false } |
| floating_zone_type | enum | 浮层卡片类型，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#creative_floating_zone_type) 可选值：{ FLOATING_ZONE_TYPE_UNKNOWN, FLOATING_ZONE_TYPE_IMAGE_TEXT, FLOATING_ZONE_TYPE_SINGLE_IMAGE, FLOATING_ZONE_TYPE_MULTI_BUTTON, FLOATING_ZONE_TYPE_SLIDER_CARD } |
| floating_zone_single_image_id | string | 尺寸：482*270`，大小：不超过 50 KB，格式：*.jpg\|*.jpeg\|*.png ；通过 [\[images 模块\]](https://developers.e.qq.com/docs/apilist/business_assets/image) 上传图片后获得 |
| button_base_text | string | 视频号基础态文案内容 字段长度最小 0 字节，长度最大 10 字节 |
| jump_info | struct | 落地页内容结构定义，落地页组件内容结构定义,jump_info 结构单独显示,详见 [\[落地页内容结构详细定义\]](https://developers.e.qq.com/v3.0/docs/api/search_dynamic_creatives/add#jump_info_struct_href) |
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
| jump_info | struct | 落地页内容结构定义，落地页组件内容结构定义,jump_info 结构单独显示,详见 [\[落地页内容结构详细定义\]](https://developers.e.qq.com/v3.0/docs/api/search_dynamic_creatives/add#jump_info_struct_href) |
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
| backups | struct[] | 兜底落地页内容列表，仅可在 page_type 为 PAGE_TYPE_APP_DEEP_LINK、PAGE_TYPE_APP_MARKET、PAGE_TYPE_WECHAT_MINI_PROGRAM、PAGE_TYPE_WECHAT_MINI_GAME 时使用 数组最小长度 0，最大长度 10 |
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
| jump_info | struct | 落地页内容结构定义，落地页组件内容结构定义,jump_info 结构单独显示,详见 [\[落地页内容结构详细定义\]](https://developers.e.qq.com/v3.0/docs/api/search_dynamic_creatives/add#jump_info_struct_href) |
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
| jumpinfo_account_id | integer | 推广帐号 id，落地页资产归属的账号 id |
| platform_type | enum | 落地页媒体平台类型，落地页媒体平台，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#landing_page_platform_type) 可选值：{ DEFAULT, ALL, SCREEN_PC, SCREEN_PHONE, OS_ANDROID, OS_IOS } |
| floating_zone_info_type | enum | 浮层卡片外显类型，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#floating_zone_info_type) 可选值：{ FLOATING_ZONE_INFO_DEFAULT, FLOATING_ZONE_INFO_TYPE_NORMAL, FLOATING_ZONE_INFO_TYPE_PRODUCT } |
| is_deleted | boolean | 是否已删除，读取接口字段有效，true：是，false：否 可选值：{ true, false } |
| video_channels_content | struct[] | 视频号主页视频组件 数组最小长度 1，最大长度 100 |
| component_id | integer | 创意组件 id |
| value | struct | 视频号主页视频组件，mini_game_tracking_parameter 字段仅在推广产品是微信小游戏时允许使用 |
| ad_export_id* | string | 视频号 id 字段长度最小 0 字节，长度最大 1024 字节 |
| wechat_channels_account_id* | string | 视频号账号 id 字段长度最小 1 字节，长度最大 1024 字节 |
| mini_game_tracking_parameter | string | 小游戏监控参数，需以英文字符?开头，如：?channel=xxxx，字段长度最小 1 个等宽字符，长度最大 250 个等宽字符（即字段最大长度为 250 个中文字或全角标点，500 个英文字或半角标点。一个等宽字符等价于一个中文，等价于两个英文。） 字段长度最小 0 字节，长度最大 750 字节 |
| is_deleted | boolean | 是否已删除，读取接口字段有效，true：是，false：否 可选值：{ true, false } |
| audio | struct[] | 音频组件 数组最小长度 0，最大长度 100 |
| component_id | integer | 创意组件 id |
| value | struct | 音频组件 |
| audio_id* | string | 字段长度最小 1 字节，长度最大 64 字节 |
| is_deleted | boolean | 是否已删除，读取接口字段有效，true：是，false：否 可选值：{ true, false } |
| wxgame_direct_page | struct[] | 小游戏直玩组件 数组最小长度 0，最大长度 100 |
| component_id | integer | 创意组件 id |
| value | struct | 图文链接结构 |
| wxgame_direct_page_description | string | 小游戏直玩组件文案，文本长度限制通过 [\[创意形式详情\]](https://developers.e.qq.com/v3.0/docs/api/creative_template/get) 接口获取 |
| is_deleted | boolean | 是否已删除，读取接口字段有效，true：是，false：否 可选值：{ true, false } |
| video_list | struct[] | 视频列表组件 数组最小长度 0，最大长度 100 |
| component_id | integer | 创意组件 id |
| value | struct | 视频列表 |
| list | struct[] | 视频列表 数组最小长度 1，最大长度 20 |
| video_id | string | 投放端视频素材 id 字段长度最小 0 字节，长度最大 256 字节 |
| cover_id | string | 素材图片 id，通过 [\[images 模块\]](https://developers.e.qq.com/docs/api/business_assets/image/images_add) 上传图片后获得，仅在规格支持时传入，详见规格详情 字段长度最小 1 字节，长度最大 64 字节 |
| is_deleted | boolean | 是否已删除，读取接口字段有效，true：是，false：否 可选值：{ true, false } |
| search_intelligent_extension | enum | 智能拓流开关，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#search_intelligent_extension) 可选值：{ CLOSE, OPEN } |
| sublink_switch | enum | 衍生子链开关，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#advertiser_sublink_switch) 可选值：{ ADVERTISER_SUBLINK_SWITCH_CLOSE, ADVERTISER_SUBLINK_SWITCH_OPEN } |
| pic_material_switch | enum | 图片素材衍生开关，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#advertiser_pic_material_switch) 可选值：{ ADVERTISER_PIC_MATERIAL_SWITCH_CLOSE, ADVERTISER_PIC_MATERIAL_SWITCH_OPEN } |

使用说明

## 请求示例

```
curl 'https://api.e.qq.com/v3.0/search_dynamic_creatives/add?access_token=<ACCESS_TOKEN>&timestamp=<TIMESTAMP>&nonce=<NONCE>' \
-H 'Content-Type: application/json' \
-d '{
    "account_id": "<ACCOUNT_ID>",
    "adgroup_id": "<ADGROUP_ID>",
    "dynamic_creative_name": "175568743916706791",
    "creative_template_id": 2083,
    "delivery_mode": "DELIVERY_MODE_COMPONENT",
    "creative_components": {
        "title": [
            {
                "component_id": 0,
                "component_type": "V2_TITLE",
                "value": {
                    "content": "优选联盟商品测试广告"
                }
            }
        ],
        "image": [
            {
                "component_id": 0,
                "component_type": "V2_IMAGE_1X1",
                "value": {
                    "image_id": "3173808103"
                }
            }
        ],
        "brand": [
            {
                "component_id": 0,
                "component_type": "V2_BRAND",
                "value": {
                    "brand_name": "测试广告",
                    "brand_image_id": "3173492747"
                }
            }
        ],
        "main_jump_info": [
            {
                "component_id": 0,
                "value": {
                    "page_type": "PAGE_TYPE_WECHAT_CHANNELS_SHOP_PRODUCT",
                    "page_spec": {
                        "wechat_channels_shop_product_spec": {
                            "product_id": 10000234715070,
                            "shop_id": "wx6be1170db604182d"
                        }
                    }
                }
            }
        ]
    }
}'
curl 'https://api.e.qq.com/v3.0/search_dynamic_creatives/add?access_token=<ACCESS_TOKEN>&timestamp=<TIMESTAMP>&nonce=<NONCE>' \
-H 'Content-Type: application/json' \
-d '{
    "account_id": "<ACCOUNT_ID>",
    "adgroup_id": "<ADGROUP_ID>",
    "dynamic_creative_name": "175568743916706791",
    "creative_template_id": 2083,
    "delivery_mode": "DELIVERY_MODE_COMPONENT",
    "creative_components": {
        "title": [
            {
                "component_id": 0,
                "component_type": "V2_TITLE",
                "value": {
                    "content": "优选联盟商品测试广告"
                }
            }
        ],
        "image": [
            {
                "component_id": 0,
                "component_type": "V2_IMAGE_1X1",
                "value": {
                    "image_id": "3173808103"
                }
            }
        ],
        "brand": [
            {
                "component_id": 0,
                "component_type": "V2_BRAND",
                "value": {
                    "brand_name": "测试广告",
                    "brand_image_id": "3173492747"
                }
            }
        ],
        "main_jump_info": [
            {
                "component_id": 0,
                "value": {
                    "page_type": "PAGE_TYPE_WECHAT_CHANNELS_SHOP_PRODUCT",
                    "page_spec": {
                        "wechat_channels_shop_product_spec": {
                            "product_id": 10000234715070,
                            "shop_id": "wx6be1170db604182d"
                        }
                    }
                }
            }
        ]
    }
}'
```

## 应答字段

| 名称 | 类型 | 描述 |
| --- | --- | --- |
| dynamic_creative_id | integer | 广告创意 id |

## 应答示例

```
{
    "code": 0,
    "message": "",
    "message_cn": "",
    "data": {
        "dynamic_creative_id": 666666
    }
}
```

## 可视化调试工具

问题仍未解决？

请前往腾讯广告反馈中心在线提交问题，我们的人工客服将为你服务
