---
title: 获取创意组件 全部接口
platform: tencent_ads
source_url: https://developers.e.qq.com/v3.0/docs/api/components/get
doc_id: tencent_ads_v3_0_docs_api_components_get
source_id: tencent_ads_v3_0_docs_api_components_get
---
# 获取创意组件 [全部接口](https://developers.e.qq.com/v3.0/docs/apilist)

| 所属权限 | ads_management,ads_insights |
| --- | --- |
| 请求地址 | components/get |
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
| account_id | integer | 广告主帐号 id，有操作权限的帐号 id，不支持代理商 id |
| organization_id | integer | 业务单元 id 最小值 0，最大值 9999999999 |
| filtering | struct[] | 过滤条件，若此字段不传，或传空则视为无限制条件，详见 [\[过滤条件\]](https://developers.e.qq.com/docs/reference/illustration#filtering) 数组最小长度 0，最大长度 10 |
| field* | string | 过滤字段 可选值：{ component_id, component_type, component_sub_type, created_time, last_modified_time, generation_type, potential_status, video_id, image_id, video_signature, image_signature, first_publication_status, similarity_status, scene } |
| operator* | enum | 操作符，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#api_filter_operator) 当 field 取值 component_id 时，可选值：{ EQUALS, IN } 当 field 取值 component_type 时，可选值：{ EQUALS, IN } 当 field 取值 component_sub_type 时，可选值：{ EQUALS, IN } 当 field 取值 created_time 时，可选值：{ EQUALS, LESS_EQUALS, LESS, GREATER_EQUALS, GREATER } 当 field 取值 last_modified_time 时，可选值：{ EQUALS, LESS_EQUALS, LESS, GREATER_EQUALS, GREATER } 当 field 取值 generation_type 时，可选值：{ EQUALS, IN } 当 field 取值 potential_status 时，可选值：{ EQUALS, IN } 当 field 取值 video_id 时，可选值：{ EQUALS, IN } 当 field 取值 image_id 时，可选值：{ EQUALS, IN } 当 field 取值 video_signature 时，可选值：{ EQUALS, IN } 当 field 取值 image_signature 时，可选值：{ EQUALS, IN } 当 field 取值 first_publication_status 时，可选值：{ EQUALS, IN } 当 field 取值 similarity_status 时，可选值：{ EQUALS, IN } 当 field 取值 scene 时，可选值：{ EQUALS, IN } |
| values* | string[] | 字段取值，values 数组的个数限制与 operator 的取值相关，详见 [\[过滤条件\]](https://developers.e.qq.com/docs/reference/illustration#filtering) 当 field 取值 component_id 时，数组最小长度 1，最大长度 100 当 field 取值 component_type 且 operator 取值 EQUALS 时， 数组长度为 1 字段长度最小 1 字节，长度最大 180 字节 当 field 取值 component_type 且 operator 取值 IN 时， 数组最小长度 1，最大长度 100 字段长度最小 1 字节，长度最大 180 字节 当 field 取值 component_sub_type 且 operator 取值 EQUALS 时， 数组长度为 1 字段长度最小 1 字节，长度最大 180 字节 当 field 取值 component_sub_type 且 operator 取值 IN 时， 数组最小长度 1，最大长度 100 字段长度最小 1 字节，长度最大 180 字节 当 field 取值 created_time 时，数组长度为 1 字段长度为 10 字节 当 field 取值 last_modified_time 时，数组长度为 1 字段长度为 10 字节 当 field 取值 generation_type 且 operator 取值 EQUALS 时， 数组长度为 1 字段长度最小 1 字节，长度最大 180 字节 当 field 取值 generation_type 且 operator 取值 IN 时， 数组最小长度 1，最大长度 100 字段长度最小 1 字节，长度最大 180 字节 当 field 取值 potential_status 且 operator 取值 EQUALS 时， 数组长度为 1 字段长度最小 1 字节，长度最大 180 字节 当 field 取值 potential_status 且 operator 取值 IN 时， 数组最小长度 1，最大长度 100 字段长度最小 1 字节，长度最大 180 字节 当 field 取值 first_publication_status 且 operator 取值 EQUALS 时， 数组长度为 1 字段长度最小 1 字节，长度最大 180 字节 当 field 取值 first_publication_status 且 operator 取值 IN 时， 数组最小长度 1，最大长度 100 字段长度最小 1 字节，长度最大 180 字节 当 field 取值 quality_status 且 operator 取值 EQUALS 时， 数组长度为 1 字段长度最小 1 字节，长度最大 180 字节 当 field 取值 quality_status 且 operator 取值 IN 时， 数组最小长度 1，最大长度 100 字段长度最小 1 字节，长度最大 180 字节 当 field 取值 video_id 且 operator 取值 EQUALS 时， 数组长度为 1 字段长度最小 1 字节，长度最大 180 字节 当 field 取值 video_id 且 operator 取值 IN 时， 数组最小长度 1，最大长度 10 字段长度最小 1 字节，长度最大 180 字节 当 field 取值 image_id 且 operator 取值 EQUALS 时， 数组长度为 1 字段长度最小 1 字节，长度最大 180 字节 当 field 取值 image_id 且 operator 取值 IN 时， 数组最小长度 1，最大长度 10 字段长度最小 1 字节，长度最大 180 字节 当 field 取值 video_signature 且 operator 取值 EQUALS 时， 数组长度为 1 字段长度最小 1 字节，长度最大 180 字节 当 field 取值 video_signature 且 operator 取值 IN 时， 数组最小长度 1，最大长度 100 字段长度最小 1 字节，长度最大 180 字节 当 field 取值 image_signature 且 operator 取值 EQUALS 时， 数组长度为 1 字段长度最小 1 字节，长度最大 180 字节 当 field 取值 image_signature 且 operator 取值 IN 时， 数组最小长度 1，最大长度 100 字段长度最小 1 字节，长度最大 180 字节 当 field 取值 component_custom_name 且 operator 取值 CONTAINS 时， 数组长度为 1 字段长度最小 1 字节，长度最大 512 字节 当 field 取值 similarity_status 且 operator 取值 EQUALS 时， 数组长度为 1 字段长度最小 1 字节，长度最大 180 字节 当 field 取值 similarity_status 且 operator 取值 IN 时， 数组最小长度 1，最大长度 100 字段长度最小 1 字节，长度最大 180 字节 当 field 取值 scene 且 operator 取值 EQUALS 时， 数组长度为 1 字段长度最小 1 字节，长度最大 180 字节 当 field 取值 scene 且 operator 取值 IN 时， 数组最小长度 1，最大长度 100 字段长度最小 1 字节，长度最大 180 字节 |
| page | integer | 搜索页码 最小值 1，最大值 100 默认值：1 |
| page_size | integer | 一页显示的数据条数 最小值 1，最大值 100000 默认值：10 |
| is_deleted | boolean | 是否已删除，true：是，false：否 可选值：{ true, false } |
| fields | string[] | 指定返回的字段列表 数组最小长度 1，最大长度 1024 字段长度最小 1 字节，长度最大 64 字节 |
| component_id_filtering_mode | enum | 被共享组件读取方式，仅当使用 account_id 时，获取该 account_id 在业务单元下被共享的组件，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#component_id_filtering_mode) 可选值：{ SHARING_BY_AGENCY_BUSINESS_UNIT, SHARING_BY_CUSTOMER_BUSINESS_UNIT } |

使用说明

## 请求示例

```
curl -v -G 'https://api.e.qq.com/v3.0/components/get?access_token=<ACCESS_TOKEN>&timestamp=<TIMESTAMP>&nonce=<NONCE>' \
-d 'account_id=<ACCOUNT_ID>' \
-d 'filtering=[
    {
        "values": []
    }
]' \
-d 'page=1' \
-d 'page_size=10' \
-d 'is_deleted=false' \
-d 'fields=[]'
curl -v -G 'https://api.e.qq.com/v3.0/components/get?access_token=<ACCESS_TOKEN>&timestamp=<TIMESTAMP>&nonce=<NONCE>' \
-d 'account_id=<ACCOUNT_ID>' \
-d 'filtering=[
    {
        "values": []
    }
]' \
-d 'page=1' \
-d 'page_size=10' \
-d 'is_deleted=false' \
-d 'fields=[]'
```

## 应答字段

| 名称 | 类型 | 描述 |
| --- | --- | --- |
| list | struct[] | 返回信息列表 |
| account_id | integer | 广告主帐号 id，有操作权限的帐号 id，不支持代理商 id |
| organization_id | integer | 业务单元 id |
| component_id | integer | 创意组件 id |
| component_value | struct | 创意组件内容 |
| title | struct | 标题组件 |
| component_id | integer | 创意组件 id |
| value | struct | 标题组件 |
| content | string |  |
| is_deleted | boolean | 是否已删除，读取接口字段有效，true：是，false：否 |
| description | struct | 文本组件 |
| component_id | integer | 创意组件 id |
| value | struct | 文本组件 |
| content | string |  |
| is_deleted | boolean | 是否已删除，读取接口字段有效，true：是，false：否 |
| image | struct | 单图组件 |
| component_id | integer | 创意组件 id |
| value | struct | 图片结构 |
| image_id | string | 素材图片 id，通过 [\[images 模块\]](https://developers.e.qq.com/docs/api/business_assets/image/images_add) 上传图片后获得，仅在规格支持时传入，详见规格详情 |
| image_url | string | 素材图片的 url，仅在规格支持时传入 |
| jump_info | struct | 落地页内容结构定义，落地页组件内容结构定义,jump_info 结构单独显示,详见 [\[落地页内容结构详细定义\]](https://developers.e.qq.com/v3.0/docs/api/components/get#jump_info_struct_href) |
| is_deleted | boolean | 是否已删除，读取接口字段有效，true：是，false：否 |
| image_list | struct | 图集组件 |
| component_id | integer | 创意组件 id |
| value | struct | 图集 |
| jump_info | struct | 落地页内容结构定义，落地页组件内容结构定义,jump_info 结构单独显示,详见 [\[落地页内容结构详细定义\]](https://developers.e.qq.com/v3.0/docs/api/components/get#jump_info_struct_href) |
| list | struct[] | 图集 |
| image_id | string | 素材图片 id，通过 [\[images 模块\]](https://developers.e.qq.com/docs/api/business_assets/image/images_add) 上传图片后获得，仅在规格支持时传入，详见规格详情 |
| image_url | string | 素材图片的 url，仅在规格支持时传入 |
| jump_info | struct | 落地页内容结构定义，落地页组件内容结构定义,jump_info 结构单独显示,详见 [\[落地页内容结构详细定义\]](https://developers.e.qq.com/v3.0/docs/api/components/get#jump_info_struct_href) |
| original_image_id | string | 素材图片 id，通过 [\[images 模块\]](https://developers.e.qq.com/docs/api/business_assets/image/images_add) 上传图片后获得，仅在规格支持时传入，详见规格详情 |
| display_mode | enum | 素材在创意上的播放样式，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#display_mode) |
| is_deleted | boolean | 是否已删除，读取接口字段有效，true：是，false：否 |
| video | struct | 视频组件 |
| component_id | integer | 创意组件 id |
| value | struct | 视频组件 |
| video_id | string |  |
| cover_id | string | 素材图片 id，通过 [\[images 模块\]](https://developers.e.qq.com/docs/api/business_assets/image/images_add) 上传图片后获得，仅在规格支持时传入，详见规格详情 |
| jump_info | struct | 落地页内容结构定义，落地页组件内容结构定义,jump_info 结构单独显示,详见 [\[落地页内容结构详细定义\]](https://developers.e.qq.com/v3.0/docs/api/components/get#jump_info_struct_href) |
| is_deleted | boolean | 是否已删除，读取接口字段有效，true：是，false：否 |
| brand | struct | 品牌形象组件 |
| component_id | integer | 创意组件 id |
| value | struct | 品牌形象结构 |
| brand_name | string | 品牌名称 |
| brand_image_id | string | 品牌形象图片 id，通过 [\[images 模块\]](https://developers.e.qq.com/docs/api/business_assets/image/images_add) 上传图片后获得，仅在规格支持时传入，详见规格详情 |
| jump_info | struct | 落地页内容结构定义，落地页组件内容结构定义,jump_info 结构单独显示,详见 [\[落地页内容结构详细定义\]](https://developers.e.qq.com/v3.0/docs/api/components/get#jump_info_struct_href) |
| is_deleted | boolean | 是否已删除，读取接口字段有效，true：是，false：否 |
| consult | struct | 咨询组件 |
| component_id | integer | 创意组件 id |
| value | struct | 咨询组件 |
| id | integer | 咨询组件值 |
| jump_info_list | struct[] | 兜底落地页内容列表，仅可在 page_type 为 PAGE_TYPE_APP_DEEP_LINK、PAGE_TYPE_APP_MARKET、PAGE_TYPE_WECHAT_MINI_PROGRAM、PAGE_TYPE_WECHAT_MINI_GAME 时使用 |
| page_type | enum | 落地页类型，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#page_type) |
| page_spec | struct | 落地页内容 |
| android_app_spec | struct | android 默认落地页内容，通常情况下不需要额外数据；在视频号动态落地页内部按钮跳转时，需要额外传入 android_app_id、wechat_canvas_page_id 字段。 |
| android_app_id | string | 安卓应用直达 AppId |
| wechat_canvas_page_id | integer | 落地页 id |
| android_channel_id | string | 安卓应用渠道包 id |
| ios_app_spec | struct | android 默认落地页内容，通常情况下不需要额外数据；在视频号动态落地页内部按钮跳转时，需要额外传入 ios_app_id。 |
| ios_app_id | string | IOS 应用直达 AppId |
| xj_android_app_h5_spec | struct | 蹊径落地页数据，当营销载体类型为视频号直播预约时，需要额外传入 wechat_channels_live_reserve_id |
| page_id | int64 | 落地页 id |
| wechat_channels_live_reserve_id | string | 视频号直播预约 id |
| custom_param | string | 官方落地页自定义参数 |
| xj_ios_app_h5_spec | struct | 蹊径落地页数据，当营销载体类型为视频号直播预约时，需要额外传入 wechat_channels_live_reserve_id |
| page_id | int64 | 落地页 id |
| wechat_channels_live_reserve_id | string | 视频号直播预约 id |
| custom_param | string | 官方落地页自定义参数 |
| xj_web_h5_spec | struct | 蹊径落地页数据，当营销载体类型为视频号直播预约时，需要额外传入 wechat_channels_live_reserve_id |
| page_id | int64 | 落地页 id |
| wechat_channels_live_reserve_id | string | 视频号直播预约 id |
| custom_param | string | 官方落地页自定义参数 |
| xj_quick_spec | struct | 蹊径落地页数据，当营销载体类型为视频号直播预约时，需要额外传入 wechat_channels_live_reserve_id |
| page_id | int64 | 落地页 id |
| wechat_channels_live_reserve_id | string | 视频号直播预约 id |
| custom_param | string | 官方落地页自定义参数 |
| fengye_ecommmerce_spec | struct | 枫叶落地页数据 |
| page_id | int64 | 落地页 id |
| wechat_canvas_spec | struct | 微信原生页数据，当营销载体类型为视频号直播预约时，需要额外传入 wechat_channels_live_reserve_id |
| page_id | int64 | 落地页 id |
| override_canvas_head_option | enum | 原生推广页顶部素材和广告创意素材之间的替换关系，（仅在朋友圈广告使用原生推广页情况下有效），[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#override_canvas_head_option) |
| wechat_channels_live_reserve_id | string | 视频号直播预约 id |
| wechat_mini_program_spec | struct | 小程序落地页，mini_program_id 和 mini_program_path 要同时填写 |
| mini_program_id | string | 小程序 id |
| mini_program_path | string | 小程序路径 |
| mini_program_paths | string[] | 小程序落地页 path 列表 |
| mpa_mini_program_wildcard_url | string | mpa/dca 落地页通配符 |
| wechat_canvas_mini_program_spec | struct | 微信原生页数据，当营销载体类型为视频号直播预约时，需要额外传入 wechat_channels_live_reserve_id |
| page_id | int64 | 落地页 id |
| override_canvas_head_option | enum | 原生推广页顶部素材和广告创意素材之间的替换关系，（仅在朋友圈广告使用原生推广页情况下有效），[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#override_canvas_head_option) |
| wechat_channels_live_reserve_id | string | 视频号直播预约 id |
| qq_app_mini_program_spec | struct | 小程序落地页，mini_program_id 和 mini_program_path 要同时填写 |
| mini_program_id | string | 小程序 id |
| mini_program_path | string | 小程序路径 |
| qq_mini_game_spec | struct | QQ 小游戏落地页信息 |
| mini_game_tracking_parameter | string | QQ 小游戏监控参数 |
| mini_game_id | string | QQ 小游戏 id |
| simple_wechat_canvas_spec | struct | 简版原生页相关信息，当营销载体类型为视频号直播预约时，需要额外传入 wechat_channels_live_reserve_id |
| simple_canvas_webview_type | enum | 简版原生页内嵌落地页类型，不大于 1024 个英文字符或数字，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#simple_canvas_webview_type) |
| simple_canvas_webview_page_id | string | 简版原生页内嵌落地页的 id，小于 128 个英文字符 |
| simple_canvas_sub_type | enum | 简版原生页子类型，灰度中，仅在简版原生页下生效，其他情况改字段内容会被忽略，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#simple_canvas_sub_type) |
| simple_canvas_share_title | string | ，分享标题 |
| simple_canvas_share_desc | string | ，分享描述 |
| simple_canvas_webview_url | string | 简易原生页嵌入 Webview url，和 simple_canvas_sub_type(灰度) 配合使用，关系如下:SIMPLE_CANVAS_SUB_TYPE_URL,SIMPLE_CANVAS_SUB_TYPE_SLIDE_UP 时必填，SIMPLE_CANVAS_SUB_TYPE_WEB_STORE 时系统其他填充为 web store 地址，其他情况无效。 |
| wechat_channels_live_reserve_id | string | 视频号直播预约 id |
| mpa_simple_canvas_webview_wildcard_url | string | mpa/dca 落地页通配符 |
| wechat_focus_dialog_spec | struct | 微信一键关注页 |
| wechat_consult_spec | struct | 微信客服落地页 |
| page_url | string | 落地页 url |
| wecom_consult_spec | struct | 企业微信客服落地页 |
| page_id | int64 | 落地页 id |
| group_type | enum | 企微客服集类型，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#group_type) |
| wechat_official_account_detail_spec | struct | 微信公众号详情数据 |
| app_id | string | 公众号 appId |
| app_deep_link_spec | struct | 应用直达数据 |
| android_deep_link_app_id | string | 安卓应用直达 AppId |
| android_deep_link_url | string | 应用直达 schema，大于 0 个并小于 4200 个字符 |
| ios_deep_link_app_id | string | IOS 应用直达 AppId |
| ios_deep_link_url | string | 应用直达 schema，大于 0 个并小于 4200 个字符 |
| universal_link_url | string | 通用链接页 URL |
| mpa_android_deep_link_wildcard_url | string | deeplink 和 ulink 落地页通配符 |
| mpa_ios_deep_link_wildcard_url | string | deeplink 和 ulink 落地页通配符 |
| mpa_universal_link_wildcard_url | string | deeplink 和 ulink 落地页通配符 |
| deep_link_url | string | 应用直达 schema，大于 0 个并小于 4200 个字符 |
| app_market_spec | struct | 厂商下载 |
| android_app_id | string | 厂商下载应用 AppId |
| android_channel_id | string | 安卓应用渠道包 id |
| android_direct_download_spec | struct | Android 一键下载落地页 |
| android_app_id | string | 安卓下载应用 AppId |
| android_channel_id | string | 安卓应用渠道包 id |
| official_spec | struct | 蹊径落地页数据，当营销载体类型为视频号直播预约时，需要额外传入 wechat_channels_live_reserve_id |
| page_id | int64 | 落地页 id |
| wechat_channels_live_reserve_id | string | 视频号直播预约 id |
| custom_param | string | 官方落地页自定义参数 |
| h5_profile_spec | struct | 品牌形象页 |
| page_id | int64 | 落地页 id |
| hide_company_info | boolean | 是否隐藏商家主体信息 |
| search_area_brand_spec | struct | 超级品专头像页 |
| search_brand_area_keyword | string | 跳转超级品专搜索关键词 |
| wechat_channels_profile_spec | struct | 视频号落地页 |
| username | string | 视频号 username |
| h5_spec | struct | 自定义落地页 |
| page_url | string | 落地页 url |
| mpa_h5_wildcard_url | string | mpa/dca 落地页通配符 |
| wechat_mini_game_spec | struct | 小游戏落地页信息，视频号动态落地页内部按钮跳转时，需要额外传入 mini_game_id |
| mini_game_tracking_parameter | string | 小游戏监控参数，需以英文字符?开头，如：?channel=xxxx，字段长度最小 1 个等宽字符，长度最大 250 个等宽字符（即字段最大长度为 250 个中文字或全角标点，500 个英文字或半角标点。一个等宽字符等价于一个中文，等价于两个英文。） |
| mini_game_id | string | 小游戏 id |
| wechat_channels_feed_spec | struct | 视频号动态落地页信息 |
| feed_id | string | 视频号动态 id |
| action_button | struct | 行动按钮结构 |
| button_text | string | action_button button_text |
| jump_info | struct | 落地页内容结构定义，落地页组件内容结构定义,jump_info 结构单独显示,详见 [\[落地页内容结构详细定义\]](https://developers.e.qq.com/v3.0/docs/api/components/get#jump_info_struct_href) |
| wechat_channels_account_id | string | 视频号账号 id |
| wechat_channels_reserve_spec | struct | 视频号直播预约落地页信息 |
| reserve_id | string | 视频号直播预约 id |
| wechat_channels_account_id | string | 视频号账号 id |
| android_quick_app_spec | struct | 安卓快应用落地页信息 |
| jump_url | string | 应用直达 schema，大于 0 个并小于 4200 个字符 |
| wechat_channels_shop_product_spec | struct | 小店商品详情页落地页信息 |
| product_id | integer | 微信小店商品 id |
| shop_id | string | 微信小店 id |
| catalog_id | string | 微信小店商品库 id |
| set_id | string | 微信小店商品集合 id |
| wechat_shop_spec | struct | 小店店铺页落地页信息 |
| shop_id | string | 微信小店 id |
| wechat_channels_watch_live_spec | struct | 视频号观看直播落地页信息 |
| wechat_channels_account_id | string | 视频号账号 id |
| harmony_app_spec | struct | 鸿蒙落地页信息 |
| harmony_app_id | string | 鸿蒙应用 AppId |
| wechat_channels_activity_spec | struct | 视频号活动页落地页信息 |
| activity_id | string | 视频号活动加密 id |
| jumpinfo_account_id | integer | 推广帐号 id，落地页资产归属的账号 id |
| platform_type | enum | 落地页媒体平台类型，落地页媒体平台，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#landing_page_platform_type) |
| is_deleted | boolean | 是否已删除，读取接口字段有效，true：是，false：否 |
| phone | struct | 电话组件 |
| component_id | integer | 创意组件 id |
| value | struct | 电话组件 |
| id | integer | 电话件值，电话组件值 |
| is_deleted | boolean | 是否已删除，读取接口字段有效，true：是，false：否 |
| form | struct | 表单组件 |
| component_id | integer | 创意组件 id |
| value | struct | 表单组件 |
| id | integer | 表单组件值 |
| is_deleted | boolean | 是否已删除，读取接口字段有效，true：是，false：否 |
| action_button | struct | 行动按钮组件 |
| component_id | integer | 创意组件 id |
| value | struct | 行动按钮结构 |
| button_text | string | action_button button_text |
| jump_info | struct | 落地页内容结构定义，落地页组件内容结构定义,jump_info 结构单独显示,详见 [\[落地页内容结构详细定义\]](https://developers.e.qq.com/v3.0/docs/api/components/get#jump_info_struct_href) |
| is_deleted | boolean | 是否已删除，读取接口字段有效，true：是，false：否 |
| chosen_button | struct | 选择按钮组件 |
| component_id | integer | 创意组件 id |
| value | struct | 选择按钮结构 |
| left_button | struct | 选择按钮结构 |
| text | string | chosen_button_text |
| jump_info | struct | 落地页内容结构定义，落地页组件内容结构定义,jump_info 结构单独显示,详见 [\[落地页内容结构详细定义\]](https://developers.e.qq.com/v3.0/docs/api/components/get#jump_info_struct_href) |
| right_button | struct | 选择按钮结构 |
| text | string | chosen_button_text |
| jump_info | struct | 落地页内容结构定义，落地页组件内容结构定义,jump_info 结构单独显示,详见 [\[落地页内容结构详细定义\]](https://developers.e.qq.com/v3.0/docs/api/components/get#jump_info_struct_href) |
| is_deleted | boolean | 是否已删除，读取接口字段有效，true：是，false：否 |
| label | struct | 标签组件 |
| component_id | integer | 创意组件 id |
| value | struct | 标签组件 |
| list | struct[] | 标签列表 |
| content | string |  |
| type | enum | 创意标签类型，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#label_type) |
| display_content | string | 标签显示内容 |
| is_deleted | boolean | 是否已删除，读取接口字段有效，true：是，false：否 |
| show_data | struct | 数据外显组件 |
| component_id | integer | 创意组件 id |
| value | struct | 数据外显组件 |
| conversion_data_type | enum | 数据外显转换数据类型，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#conversion_data_type) |
| conversion_target_type | enum | 数据外显转化目标量类型，仅投朋友圈流量且 conversion_data_type 为 CONVERSION_DATA_ADMETRIC 时可设置，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#conversion_target_type) |
| is_deleted | boolean | 是否已删除，读取接口字段有效，true：是，false：否 |
| marketing_pendant | struct | 营销挂件组件 |
| component_id | integer | 创意组件 id |
| value | struct | 营销挂件组件 |
| image_id | string | 挂件图，悬浮展示在竖版视频上以展示营销卖点。，通过 [\[images 模块\]](https://developers.e.qq.com/docs/api/business_assets/image/images_add) 上传图片后获得，仅在规格支持时传入，详见规格详情 |
| is_deleted | boolean | 是否已删除，读取接口字段有效，true：是，false：否 |
| app_gift_pack_code | struct | 礼包码组件 |
| component_id | integer | 创意组件 id |
| value | struct | 礼包码组件 |
| code | string | 礼包码，微信朋友圈广告创意形式需要填写，礼包码 |
| tips | string | 礼包码提示，微信朋友圈广告创意形式需要填写，礼包码提示 |
| description | string | 礼包描述 |
| game_gift_id | string | 游戏圈礼包 id |
| game_act_id | string | 游戏圈活动 id |
| game_gift_image_id | string | 游戏圈礼包图片 |
| is_deleted | boolean | 是否已删除，读取接口字段有效，true：是，false：否 |
| shop_image | struct | 卖点图组件 |
| component_id | integer | 创意组件 id |
| value | struct | 卖点图组件 |
| shop_image_switch | boolean | 卖点图开关 |
| dynamic_shop_image_switch | boolean | 卖点图轮播开关 |
| shop_image_id | string | 卖点图片 id |
| shop_image_title | string | 卖点图标题 |
| shop_image_description | string | 卖点图文案 |
| is_deleted | boolean | 是否已删除，读取接口字段有效，true：是，false：否 |
| count_down | struct | 倒计时组件 |
| component_id | integer | 创意组件 id |
| value | struct | 倒计时组件 |
| price | string | 倒计时价格，单位：分 |
| time_type | enum | 倒计时时间类型 0:距离活动开始 1:距离活动结束，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#ad_creative_countdown_time_type) |
| expiring_timestamp | integer | 倒计时时间锚点，unix 时间戳，单位秒 |
| is_deleted | boolean | 是否已删除，读取接口字段有效，true：是，false：否 |
| barrage | struct | 弹幕组件 |
| component_id | integer | 创意组件 id |
| value | struct | 弹幕组件 |
| list | struct[] | 列表子链 |
| id | integer | 弹幕 id |
| text | string | 弹幕文案，1~12 个字 |
| is_deleted | boolean | 是否已删除，读取接口字段有效，true：是，false：否 |
| floating_zone | struct | 浮层卡片组件 |
| component_id | integer | 创意组件 id |
| value | struct | 浮层卡片结构 |
| floating_zone_switch | boolean | 浮层卡片开关 |
| floating_zone_image_id | string | 卡片图片 |
| floating_zone_name | string |  |
| floating_zone_desc | string |  |
| floating_zone_button_text | string |  |
| floating_zone_show_app_property_switch | boolean | 显示已下载人数及评分开关，显示已下载人数及评分开关(仅限应用下载类广告） |
| floating_zone_type | enum | 浮层卡片类型，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#creative_floating_zone_type) |
| floating_zone_single_image_id | string | 卡片单图 |
| button_base_text | string | 视频号基础态文案内容 |
| jump_info | struct | 落地页内容结构定义，落地页组件内容结构定义,jump_info 结构单独显示,详见 [\[落地页内容结构详细定义\]](https://developers.e.qq.com/v3.0/docs/api/components/get#jump_info_struct_href) |
| floating_zone_info_type | enum | 浮层卡片外显类型，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#floating_zone_info_type) |
| is_deleted | boolean | 是否已删除，读取接口字段有效，true：是，false：否 |
| text_link | struct | 文字链组件 |
| component_id | integer | 创意组件 id |
| value | struct | 文字链组件 |
| link_name_type | enum | 链接名称类型，若不填写，则默认显示【查看详情】，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#link_url_link_name_type) |
| link_name_text | string | ，文字链文案 |
| jump_info | struct | 落地页内容结构定义，落地页组件内容结构定义,jump_info 结构单独显示,详见 [\[落地页内容结构详细定义\]](https://developers.e.qq.com/v3.0/docs/api/components/get#jump_info_struct_href) |
| is_deleted | boolean | 是否已删除，读取接口字段有效，true：是，false：否 |
| jump_info | struct | 主跳转组件，文本组件 |
| end_page | struct | 视频结束页组件 |
| component_id | integer | 创意组件 id |
| value | struct | 视频结束页组件 |
| end_page_type | enum | 结束页类型，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#end_page_type) |
| end_page_desc | string | 结束页文案 |
| is_deleted | boolean | 是否已删除，读取接口字段有效，true：是，false：否 |
| living_desc | struct | 轮播文案组件 |
| component_id | integer | 创意组件 id |
| value | struct | 轮播文案组件 |
| living_desc_switch | boolean | 轮播组件开关 |
| desc_list | string[] | 轮播文案 |
| is_deleted | boolean | 是否已删除，读取接口字段有效，true：是，false：否 |
| wechat_channels | struct | 视频号信息组件 |
| component_id | integer | 创意组件 id |
| value | struct | 视频号信息组件 |
| live_promoted_type | enum | 视频号直播推广形式，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#live_promoted_type) |
| username | string | 视频号 username |
| finder_object_visibility | boolean | 是否保存至视频号 |
| is_deleted | boolean | 是否已删除，读取接口字段有效，true：是，false：否 |
| short_video | struct | 短视频组件 |
| component_id | integer | 创意组件 id |
| value | struct | 视频结束页组件 |
| short_video1 | string | 视频 id，通过 [\[videos 模块\]](https://developers.e.qq.com/docs/apilist/business_assets/video?version=1.1) 上传视频后获得 |
| short_video2 | string | 视频 id，通过 [\[videos 模块\]](https://developers.e.qq.com/docs/apilist/business_assets/video?version=1.1) 上传视频后获得 |
| is_deleted | boolean | 是否已删除，读取接口字段有效，true：是，false：否 |
| element_story | struct | 集装箱创意组合组件 |
| component_id | integer | 创意组件 id |
| value | struct | 集装箱创意组合 |
| list | struct[] | 集装箱创意组合，具体请咨询你的运营接口人，集装箱创意组合 |
| image | string | 图片 id，通过 [\[images 模块\]](https://developers.e.qq.com/docs/api/business_assets/image/images_add) 上传图片后获得，图片 id |
| image2 | string | 素材图片 2 的 id，通过 [\[images 模块\]](https://developers.e.qq.com/docs/api/business_assets/image/images_add) 上传图片后获得，素材图片 2 的 id |
| description | string | 广告描述 |
| url | string | 跳转链接 |
| title | string | 广告文案 |
| is_deleted | boolean | 是否已删除，读取接口字段有效，true：是，false：否 |
| wxgame_playable_page | struct | 小游戏试玩页组件 |
| component_id | integer | 创意组件 id |
| value | struct | 小游戏试玩页组件 |
| wxgame_playable_page_switch | boolean | 小游戏试玩页组件开关 |
| wxgame_playable_page_path | string | 小游戏试玩页 |
| wxgame_playable_page_end_cover_img | string | 结束页图片 id |
| wxgame_playable_page_end_desc | string | 小游戏试玩页结束页文案 |
| wxgame_playable_page_trigger_types | string[] | 小游戏试玩页组件开启方式 |
| wxgame_playable_page_trigger_text | string | 小游戏试玩页组件开启文案 |
| wxgame_playable_page_card_link_image | string | 小游戏试玩页组件图文链接图片 id |
| wxgame_playable_page_card_link_description | string | 小游戏试玩页组件图文链接描述文案 |
| wxgame_playable_page_end_time_type | enum | 小游戏试玩页组件结束时间类型，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#wxgame_playable_page_end_time_type) |
| is_deleted | boolean | 是否已删除，读取接口字段有效，true：是，false：否 |
| app_promotion_video | struct | ott 视频组件 |
| component_id | integer | 创意组件 id |
| value | struct | ott 视频组件 |
| video | string | 视频 id，通过 [\[videos 模块\]](https://developers.e.qq.com/docs/apilist/business_assets/video?version=1.1) 上传视频后获得 |
| video2 | string | 视频 id，通过 [\[videos 模块\]](https://developers.e.qq.com/docs/apilist/business_assets/video?version=1.1) 上传视频后获得 |
| video3 | string | 视频 id，通过 [\[videos 模块\]](https://developers.e.qq.com/docs/apilist/business_assets/video?version=1.1) 上传视频后获得 |
| allow_tv_qrcode | boolean | 支持 TV 二维码 |
| qrcode_position | struct | 应用推广二唯码坐标信息 |
| position_x | string | 点 x 坐标 |
| position_y | string | 点 y 坐标 |
| qrcode_width | integer | 应用推广二维码边长 |
| is_deleted | boolean | 是否已删除，读取接口字段有效，true：是，false：否 |
| video_showcase | struct | 橱窗视频组件 |
| component_id | integer | 创意组件 id |
| value | struct | 橱窗视频结构 |
| video | struct | 视频组件 |
| video_id | string |  |
| cover_id | string | 素材图片 id，通过 [\[images 模块\]](https://developers.e.qq.com/docs/api/business_assets/image/images_add) 上传图片后获得，仅在规格支持时传入，详见规格详情 |
| jump_info | struct | 落地页内容结构定义，落地页组件内容结构定义,jump_info 结构单独显示,详见 [\[落地页内容结构详细定义\]](https://developers.e.qq.com/v3.0/docs/api/components/get#jump_info_struct_href) |
| image_list | struct | 图集 |
| jump_info | struct | 落地页内容结构定义，落地页组件内容结构定义,jump_info 结构单独显示,详见 [\[落地页内容结构详细定义\]](https://developers.e.qq.com/v3.0/docs/api/components/get#jump_info_struct_href) |
| list | struct[] | 图集 |
| image_id | string | 素材图片 id，通过 [\[images 模块\]](https://developers.e.qq.com/docs/api/business_assets/image/images_add) 上传图片后获得，仅在规格支持时传入，详见规格详情 |
| image_url | string | 素材图片的 url，仅在规格支持时传入 |
| jump_info | struct | 落地页内容结构定义，落地页组件内容结构定义,jump_info 结构单独显示,详见 [\[落地页内容结构详细定义\]](https://developers.e.qq.com/v3.0/docs/api/components/get#jump_info_struct_href) |
| original_image_id | string | 素材图片 id，通过 [\[images 模块\]](https://developers.e.qq.com/docs/api/business_assets/image/images_add) 上传图片后获得，仅在规格支持时传入，详见规格详情 |
| display_mode | enum | 素材在创意上的播放样式，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#display_mode) |
| is_deleted | boolean | 是否已删除，读取接口字段有效，true：是，false：否 |
| image_showcase | struct | 橱窗图片组件 |
| component_id | integer | 创意组件 id |
| value | struct | 橱窗图片结构 |
| image | struct | 图片结构 |
| image_id | string | 素材图片 id，通过 [\[images 模块\]](https://developers.e.qq.com/docs/api/business_assets/image/images_add) 上传图片后获得，仅在规格支持时传入，详见规格详情 |
| image_url | string | 素材图片的 url，仅在规格支持时传入 |
| jump_info | struct | 落地页内容结构定义，落地页组件内容结构定义,jump_info 结构单独显示,详见 [\[落地页内容结构详细定义\]](https://developers.e.qq.com/v3.0/docs/api/components/get#jump_info_struct_href) |
| image_list | struct | 图集 |
| jump_info | struct | 落地页内容结构定义，落地页组件内容结构定义,jump_info 结构单独显示,详见 [\[落地页内容结构详细定义\]](https://developers.e.qq.com/v3.0/docs/api/components/get#jump_info_struct_href) |
| list | struct[] | 图集 |
| image_id | string | 素材图片 id，通过 [\[images 模块\]](https://developers.e.qq.com/docs/api/business_assets/image/images_add) 上传图片后获得，仅在规格支持时传入，详见规格详情 |
| image_url | string | 素材图片的 url，仅在规格支持时传入 |
| jump_info | struct | 落地页内容结构定义，落地页组件内容结构定义,jump_info 结构单独显示,详见 [\[落地页内容结构详细定义\]](https://developers.e.qq.com/v3.0/docs/api/components/get#jump_info_struct_href) |
| original_image_id | string | 素材图片 id，通过 [\[images 模块\]](https://developers.e.qq.com/docs/api/business_assets/image/images_add) 上传图片后获得，仅在规格支持时传入，详见规格详情 |
| display_mode | enum | 素材在创意上的播放样式，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#display_mode) |
| is_deleted | boolean | 是否已删除，读取接口字段有效，true：是，false：否 |
| social_skill | struct | 首评回复组件 |
| component_id | integer | 创意组件 id |
| value | struct | 社交能力 |
| social_skill_first_comment_switch | boolean | 首条评论开关 |
| social_skill_first_comment | string | 首条评论内容 |
| is_deleted | boolean | 是否已删除，读取接口字段有效，true：是，false：否 |
| mini_card_link | struct | 图文链接组件 |
| component_id | integer | 创意组件 id |
| value | struct | 图文链接结构 |
| mini_card_link_description | string |  |
| mini_card_link_image | string | 图文链接图片 |
| mini_card_link_button_text | string |  |
| jump_info | struct | 落地页内容结构定义，落地页组件内容结构定义,jump_info 结构单独显示,详见 [\[落地页内容结构详细定义\]](https://developers.e.qq.com/v3.0/docs/api/components/get#jump_info_struct_href) |
| is_deleted | boolean | 是否已删除，读取接口字段有效，true：是，false：否 |
| floating_zone_list | struct | 多卡轮播组件 |
| component_id | integer | 创意组件 id |
| value | struct | 多卡轮播结构 |
| list | struct[] | 多卡轮播 |
| floating_zone_switch | boolean | 浮层卡片开关 |
| floating_zone_image_id | string | 卡片图片 |
| floating_zone_name | string |  |
| floating_zone_desc | string |  |
| floating_zone_button_text | string |  |
| floating_zone_show_app_property_switch | boolean | 显示已下载人数及评分开关，显示已下载人数及评分开关(仅限应用下载类广告） |
| floating_zone_type | enum | 浮层卡片类型，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#creative_floating_zone_type) |
| floating_zone_single_image_id | string | 卡片单图 |
| button_base_text | string | 视频号基础态文案内容 |
| jump_info | struct | 落地页内容结构定义，落地页组件内容结构定义,jump_info 结构单独显示,详见 [\[落地页内容结构详细定义\]](https://developers.e.qq.com/v3.0/docs/api/components/get#jump_info_struct_href) |
| floating_zone_info_type | enum | 浮层卡片外显类型，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#floating_zone_info_type) |
| is_deleted | boolean | 是否已删除，读取接口字段有效，true：是，false：否 |
| video_channels_content | struct | 视频号主页视频组件 |
| component_id | integer | 创意组件 id |
| value | struct | 视频号主页视频组件，mini_game_tracking_parameter 字段仅在推广产品是微信小游戏时允许使用 |
| ad_export_id | string | 视频号 id |
| wechat_channels_account_id | string | 视频号账号 id |
| mini_game_tracking_parameter | string | 小游戏监控参数，需以英文字符?开头，如：?channel=xxxx，字段长度最小 1 个等宽字符，长度最大 250 个等宽字符（即字段最大长度为 250 个中文字或全角标点，500 个英文字或半角标点。一个等宽字符等价于一个中文，等价于两个英文。） |
| is_deleted | boolean | 是否已删除，读取接口字段有效，true：是，false：否 |
| wxgame_direct_page | struct | 小游戏直玩组件 |
| component_id | integer | 创意组件 id |
| value | struct | 图文链接结构 |
| wxgame_direct_page_description | string |  |
| is_deleted | boolean | 是否已删除，读取接口字段有效，true：是，false：否 |
| video_list | struct | 视频列表组件 |
| component_id | integer | 创意组件 id |
| value | struct | 视频列表 |
| list | struct[] | 视频列表 |
| video_id | string | 投放端视频素材 id |
| cover_id | string | 素材图片 id，通过 [\[images 模块\]](https://developers.e.qq.com/docs/api/business_assets/image/images_add) 上传图片后获得，仅在规格支持时传入，详见规格详情 |
| is_deleted | boolean | 是否已删除，读取接口字段有效，true：是，false：否 |
| created_time | integer | 创建时间，时间戳 |
| last_modified_time | integer | 最后修改时间，时间戳 |
| component_sub_type | enum | 创意组件子类型，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#component_sub_type) |
| component_custom_name | string | 创意组件自定义名称 |
| generation_type | enum | 创意组件产生类型，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#component_generation_type) |
| is_deleted | boolean | 是否已删除，true：是，false：否 |
| similarity_status | enum | 相似度检测状态，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#similarity_status) |
| potential_status | enum | 组件潜力，“低潜”意为系统预估组件将来不起量，建议不再投放并删除；“高潜”意为系统预估组件有很大跑量潜力，建议可以提高出价；“暂无判断”意为系统对创意潜力预测为一般/暂无判断/判断中，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#common_potential_status) |
| disable_message | string | 不可用错误信息 |
| first_publication_status | enum | 组件首发状态，“首发”意为系统判断组件历史上没有相似组件，建议您更多使用首发组件进行投放。，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#first_publication_status) |
| scene | enum | 创意组件适用场景，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#component_scene) |
| page_info | struct | 分页配置信息 |
| page | integer | 搜索页码 默认值：1 |
| page_size | integer | 一页显示的数据条数 默认值：10 |
| total_number | integer | 总条数 |
| total_page | integer | 总页数 |

## 落地页内容结构详细定义

| 名称 | 类型 | 描述 |
| --- | --- | --- |
| page_type | enum | 落地页类型，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#page_type) |
| page_spec | struct | 落地页内容 |
| android_app_spec | struct | android 默认落地页内容，通常情况下不需要额外数据；在视频号动态落地页内部按钮跳转时，需要额外传入 android_app_id、wechat_canvas_page_id 字段。 |
| android_app_id | string | 安卓应用直达 AppId |
| wechat_canvas_page_id | integer | 落地页 id |
| android_channel_id | string | 安卓应用渠道包 id |
| ios_app_spec | struct | android 默认落地页内容，通常情况下不需要额外数据；在视频号动态落地页内部按钮跳转时，需要额外传入 ios_app_id。 |
| ios_app_id | string | IOS 应用直达 AppId |
| xj_android_app_h5_spec | struct | 蹊径落地页数据，当营销载体类型为视频号直播预约时，需要额外传入 wechat_channels_live_reserve_id |
| page_id | int64 | 落地页 id |
| wechat_channels_live_reserve_id | string | 视频号直播预约 id |
| custom_param | string | 官方落地页自定义参数 |
| xj_ios_app_h5_spec | struct | 蹊径落地页数据，当营销载体类型为视频号直播预约时，需要额外传入 wechat_channels_live_reserve_id |
| page_id | int64 | 落地页 id |
| wechat_channels_live_reserve_id | string | 视频号直播预约 id |
| custom_param | string | 官方落地页自定义参数 |
| xj_web_h5_spec | struct | 蹊径落地页数据，当营销载体类型为视频号直播预约时，需要额外传入 wechat_channels_live_reserve_id |
| page_id | int64 | 落地页 id |
| wechat_channels_live_reserve_id | string | 视频号直播预约 id |
| custom_param | string | 官方落地页自定义参数 |
| xj_quick_spec | struct | 蹊径落地页数据，当营销载体类型为视频号直播预约时，需要额外传入 wechat_channels_live_reserve_id |
| page_id | int64 | 落地页 id |
| wechat_channels_live_reserve_id | string | 视频号直播预约 id |
| custom_param | string | 官方落地页自定义参数 |
| fengye_ecommmerce_spec | struct | 枫叶落地页数据 |
| page_id | int64 | 落地页 id |
| wechat_canvas_spec | struct | 微信原生页数据，当营销载体类型为视频号直播预约时，需要额外传入 wechat_channels_live_reserve_id |
| page_id | int64 | 落地页 id |
| override_canvas_head_option | enum | 原生推广页顶部素材和广告创意素材之间的替换关系，（仅在朋友圈广告使用原生推广页情况下有效），[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#override_canvas_head_option) |
| wechat_channels_live_reserve_id | string | 视频号直播预约 id |
| wechat_mini_program_spec | struct | 小程序落地页，mini_program_id 和 mini_program_path 要同时填写 |
| mini_program_id | string | 小程序 id |
| mini_program_path | string | 小程序路径 |
| mini_program_paths | string[] | 小程序落地页 path 列表 |
| mpa_mini_program_wildcard_url | string | mpa/dca 落地页通配符 |
| wechat_canvas_mini_program_spec | struct | 微信原生页数据，当营销载体类型为视频号直播预约时，需要额外传入 wechat_channels_live_reserve_id |
| page_id | int64 | 落地页 id |
| override_canvas_head_option | enum | 原生推广页顶部素材和广告创意素材之间的替换关系，（仅在朋友圈广告使用原生推广页情况下有效），[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#override_canvas_head_option) |
| wechat_channels_live_reserve_id | string | 视频号直播预约 id |
| qq_app_mini_program_spec | struct | 小程序落地页，mini_program_id 和 mini_program_path 要同时填写 |
| mini_program_id | string | 小程序 id |
| mini_program_path | string | 小程序路径 |
| qq_mini_game_spec | struct | QQ 小游戏落地页信息 |
| mini_game_tracking_parameter | string | QQ 小游戏监控参数 |
| mini_game_id | string | QQ 小游戏 id |
| simple_wechat_canvas_spec | struct | 简版原生页相关信息，当营销载体类型为视频号直播预约时，需要额外传入 wechat_channels_live_reserve_id |
| simple_canvas_webview_type | enum | 简版原生页内嵌落地页类型，不大于 1024 个英文字符或数字，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#simple_canvas_webview_type) |
| simple_canvas_webview_page_id | string | 简版原生页内嵌落地页的 id，小于 128 个英文字符 |
| simple_canvas_sub_type | enum | 简版原生页子类型，灰度中，仅在简版原生页下生效，其他情况改字段内容会被忽略，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#simple_canvas_sub_type) |
| simple_canvas_share_title | string | ，分享标题 |
| simple_canvas_share_desc | string | ，分享描述 |
| simple_canvas_webview_url | string | 简易原生页嵌入 Webview url，和 simple_canvas_sub_type(灰度) 配合使用，关系如下:SIMPLE_CANVAS_SUB_TYPE_URL,SIMPLE_CANVAS_SUB_TYPE_SLIDE_UP 时必填，SIMPLE_CANVAS_SUB_TYPE_WEB_STORE 时系统其他填充为 web store 地址，其他情况无效。 |
| wechat_channels_live_reserve_id | string | 视频号直播预约 id |
| mpa_simple_canvas_webview_wildcard_url | string | mpa/dca 落地页通配符 |
| wechat_focus_dialog_spec | struct | 微信一键关注页 |
| wechat_consult_spec | struct | 微信客服落地页 |
| page_url | string | 落地页 url |
| wecom_consult_spec | struct | 企业微信客服落地页 |
| page_id | int64 | 落地页 id |
| group_type | enum | 企微客服集类型，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#group_type) |
| wechat_official_account_detail_spec | struct | 微信公众号详情数据 |
| app_id | string | 公众号 appId |
| app_deep_link_spec | struct | 应用直达数据 |
| android_deep_link_app_id | string | 安卓应用直达 AppId |
| android_deep_link_url | string | 应用直达 schema，大于 0 个并小于 4200 个字符 |
| ios_deep_link_app_id | string | IOS 应用直达 AppId |
| ios_deep_link_url | string | 应用直达 schema，大于 0 个并小于 4200 个字符 |
| universal_link_url | string | 通用链接页 URL |
| mpa_android_deep_link_wildcard_url | string | deeplink 和 ulink 落地页通配符 |
| mpa_ios_deep_link_wildcard_url | string | deeplink 和 ulink 落地页通配符 |
| mpa_universal_link_wildcard_url | string | deeplink 和 ulink 落地页通配符 |
| deep_link_url | string | 应用直达 schema，大于 0 个并小于 4200 个字符 |
| app_market_spec | struct | 厂商下载 |
| android_app_id | string | 厂商下载应用 AppId |
| android_channel_id | string | 安卓应用渠道包 id |
| android_direct_download_spec | struct | Android 一键下载落地页 |
| android_app_id | string | 安卓下载应用 AppId |
| android_channel_id | string | 安卓应用渠道包 id |
| official_spec | struct | 蹊径落地页数据，当营销载体类型为视频号直播预约时，需要额外传入 wechat_channels_live_reserve_id |
| page_id | int64 | 落地页 id |
| wechat_channels_live_reserve_id | string | 视频号直播预约 id |
| custom_param | string | 官方落地页自定义参数 |
| h5_profile_spec | struct | 品牌形象页 |
| page_id | int64 | 落地页 id |
| hide_company_info | boolean | 是否隐藏商家主体信息 |
| search_area_brand_spec | struct | 超级品专头像页 |
| search_brand_area_keyword | string | 跳转超级品专搜索关键词 |
| wechat_channels_profile_spec | struct | 视频号落地页 |
| username | string | 视频号 username |
| h5_spec | struct | 自定义落地页 |
| page_url | string | 落地页 url |
| mpa_h5_wildcard_url | string | mpa/dca 落地页通配符 |
| wechat_mini_game_spec | struct | 小游戏落地页信息，视频号动态落地页内部按钮跳转时，需要额外传入 mini_game_id |
| mini_game_tracking_parameter | string | 小游戏监控参数，需以英文字符?开头，如：?channel=xxxx，字段长度最小 1 个等宽字符，长度最大 250 个等宽字符（即字段最大长度为 250 个中文字或全角标点，500 个英文字或半角标点。一个等宽字符等价于一个中文，等价于两个英文。） |
| mini_game_id | string | 小游戏 id |
| wechat_channels_feed_spec | struct | 视频号动态落地页信息 |
| feed_id | string | 视频号动态 id |
| action_button | struct | 行动按钮结构 |
| button_text | string | action_button button_text |
| jump_info | struct | 落地页内容结构定义，落地页组件内容结构定义,jump_info 结构单独显示,详见 [\[落地页内容结构详细定义\]](https://developers.e.qq.com/v3.0/docs/api/components/get#jump_info_struct_href) |
| page_type | enum | 落地页类型，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#page_type) |
| page_spec | struct | 落地页内容 |
| android_app_spec | struct | android 默认落地页内容，通常情况下不需要额外数据；在视频号动态落地页内部按钮跳转时，需要额外传入 android_app_id、wechat_canvas_page_id 字段。 |
| android_app_id | string | 安卓应用直达 AppId |
| wechat_canvas_page_id | integer | 落地页 id |
| android_channel_id | string | 安卓应用渠道包 id |
| ios_app_spec | struct | android 默认落地页内容，通常情况下不需要额外数据；在视频号动态落地页内部按钮跳转时，需要额外传入 ios_app_id。 |
| ios_app_id | string | IOS 应用直达 AppId |
| xj_android_app_h5_spec | struct | 蹊径落地页数据，当营销载体类型为视频号直播预约时，需要额外传入 wechat_channels_live_reserve_id |
| page_id | int64 | 落地页 id |
| wechat_channels_live_reserve_id | string | 视频号直播预约 id |
| custom_param | string | 官方落地页自定义参数 |
| xj_ios_app_h5_spec | struct | 蹊径落地页数据，当营销载体类型为视频号直播预约时，需要额外传入 wechat_channels_live_reserve_id |
| page_id | int64 | 落地页 id |
| wechat_channels_live_reserve_id | string | 视频号直播预约 id |
| custom_param | string | 官方落地页自定义参数 |
| xj_web_h5_spec | struct | 蹊径落地页数据，当营销载体类型为视频号直播预约时，需要额外传入 wechat_channels_live_reserve_id |
| page_id | int64 | 落地页 id |
| wechat_channels_live_reserve_id | string | 视频号直播预约 id |
| custom_param | string | 官方落地页自定义参数 |
| xj_quick_spec | struct | 蹊径落地页数据，当营销载体类型为视频号直播预约时，需要额外传入 wechat_channels_live_reserve_id |
| page_id | int64 | 落地页 id |
| wechat_channels_live_reserve_id | string | 视频号直播预约 id |
| custom_param | string | 官方落地页自定义参数 |
| fengye_ecommmerce_spec | struct | 枫叶落地页数据 |
| page_id | int64 | 落地页 id |
| wechat_canvas_spec | struct | 微信原生页数据，当营销载体类型为视频号直播预约时，需要额外传入 wechat_channels_live_reserve_id |
| page_id | int64 | 落地页 id |
| override_canvas_head_option | enum | 原生推广页顶部素材和广告创意素材之间的替换关系，（仅在朋友圈广告使用原生推广页情况下有效），[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#override_canvas_head_option) |
| wechat_channels_live_reserve_id | string | 视频号直播预约 id |
| wechat_mini_program_spec | struct | 小程序落地页，mini_program_id 和 mini_program_path 要同时填写 |
| mini_program_id | string | 小程序 id |
| mini_program_path | string | 小程序路径 |
| mini_program_paths | string[] | 小程序落地页 path 列表 |
| mpa_mini_program_wildcard_url | string | mpa/dca 落地页通配符 |
| wechat_canvas_mini_program_spec | struct | 微信原生页数据，当营销载体类型为视频号直播预约时，需要额外传入 wechat_channels_live_reserve_id |
| page_id | int64 | 落地页 id |
| override_canvas_head_option | enum | 原生推广页顶部素材和广告创意素材之间的替换关系，（仅在朋友圈广告使用原生推广页情况下有效），[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#override_canvas_head_option) |
| wechat_channels_live_reserve_id | string | 视频号直播预约 id |
| qq_app_mini_program_spec | struct | 小程序落地页，mini_program_id 和 mini_program_path 要同时填写 |
| mini_program_id | string | 小程序 id |
| mini_program_path | string | 小程序路径 |
| simple_wechat_canvas_spec | struct | 简版原生页相关信息，当营销载体类型为视频号直播预约时，需要额外传入 wechat_channels_live_reserve_id |
| simple_canvas_webview_type | enum | 简版原生页内嵌落地页类型，不大于 1024 个英文字符或数字，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#simple_canvas_webview_type) |
| simple_canvas_webview_page_id | string | 简版原生页内嵌落地页的 id，小于 128 个英文字符 |
| simple_canvas_sub_type | enum | 简版原生页子类型，灰度中，仅在简版原生页下生效，其他情况改字段内容会被忽略，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#simple_canvas_sub_type) |
| simple_canvas_share_title | string | ，分享标题 |
| simple_canvas_share_desc | string | ，分享描述 |
| simple_canvas_webview_url | string | 简易原生页嵌入 Webview url，和 simple_canvas_sub_type(灰度) 配合使用，关系如下:SIMPLE_CANVAS_SUB_TYPE_URL,SIMPLE_CANVAS_SUB_TYPE_SLIDE_UP 时必填，SIMPLE_CANVAS_SUB_TYPE_WEB_STORE 时系统其他填充为 web store 地址，其他情况无效。 |
| wechat_channels_live_reserve_id | string | 视频号直播预约 id |
| mpa_simple_canvas_webview_wildcard_url | string | mpa/dca 落地页通配符 |
| wechat_focus_dialog_spec | struct | 微信一键关注页 |
| wechat_consult_spec | struct | 微信客服落地页 |
| page_url | string | 落地页 url |
| wecom_consult_spec | struct | 企业微信客服落地页 |
| page_id | int64 | 落地页 id |
| group_type | enum | 企微客服集类型，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#group_type) |
| wechat_official_account_detail_spec | struct | 微信公众号详情数据 |
| app_id | string | 公众号 appId |
| app_deep_link_spec | struct | 应用直达数据 |
| android_deep_link_app_id | string | 安卓应用直达 AppId |
| android_deep_link_url | string | 应用直达 schema，大于 0 个并小于 4200 个字符 |
| ios_deep_link_app_id | string | IOS 应用直达 AppId |
| ios_deep_link_url | string | 应用直达 schema，大于 0 个并小于 4200 个字符 |
| universal_link_url | string | 通用链接页 URL |
| mpa_android_deep_link_wildcard_url | string | deeplink 和 ulink 落地页通配符 |
| mpa_ios_deep_link_wildcard_url | string | deeplink 和 ulink 落地页通配符 |
| mpa_universal_link_wildcard_url | string | deeplink 和 ulink 落地页通配符 |
| deep_link_url | string | 应用直达 schema，大于 0 个并小于 4200 个字符 |
| app_market_spec | struct | 厂商下载 |
| android_app_id | string | 厂商下载应用 AppId |
| android_channel_id | string | 安卓应用渠道包 id |
| android_direct_download_spec | struct | Android 一键下载落地页 |
| android_app_id | string | 安卓下载应用 AppId |
| android_channel_id | string | 安卓应用渠道包 id |
| official_spec | struct | 蹊径落地页数据，当营销载体类型为视频号直播预约时，需要额外传入 wechat_channels_live_reserve_id |
| page_id | int64 | 落地页 id |
| wechat_channels_live_reserve_id | string | 视频号直播预约 id |
| custom_param | string | 官方落地页自定义参数 |
| h5_profile_spec | struct | 品牌形象页 |
| page_id | int64 | 落地页 id |
| hide_company_info | boolean | 是否隐藏商家主体信息 |
| search_area_brand_spec | struct | 超级品专头像页 |
| search_brand_area_keyword | string | 跳转超级品专搜索关键词 |
| wechat_channels_profile_spec | struct | 视频号落地页 |
| username | string | 视频号 username |
| h5_spec | struct | 自定义落地页 |
| page_url | string | 落地页 url |
| mpa_h5_wildcard_url | string | mpa/dca 落地页通配符 |
| wechat_mini_game_spec | struct | 小游戏落地页信息，视频号动态落地页内部按钮跳转时，需要额外传入 mini_game_id |
| mini_game_tracking_parameter | string | 小游戏监控参数，需以英文字符?开头，如：?channel=xxxx，字段长度最小 1 个等宽字符，长度最大 250 个等宽字符（即字段最大长度为 250 个中文字或全角标点，500 个英文字或半角标点。一个等宽字符等价于一个中文，等价于两个英文。） |
| mini_game_id | string | 小游戏 id |
| wechat_channels_reserve_spec | struct | 视频号直播预约落地页信息 |
| reserve_id | string | 视频号直播预约 id |
| wechat_channels_account_id | string | 视频号账号 id |
| android_quick_app_spec | struct | 安卓快应用落地页信息 |
| jump_url | string | 应用直达 schema，大于 0 个并小于 4200 个字符 |
| wechat_channels_shop_product_spec | struct | 小店商品详情页落地页信息 |
| product_id | integer | 微信小店商品 id |
| shop_id | string | 微信小店 id |
| catalog_id | string | 微信小店商品库 id |
| set_id | string | 微信小店商品集合 id |
| wechat_channels_account_id | string | 视频号账号 id |
| wechat_channels_reserve_spec | struct | 视频号直播预约落地页信息 |
| reserve_id | string | 视频号直播预约 id |
| wechat_channels_account_id | string | 视频号账号 id |
| android_quick_app_spec | struct | 安卓快应用落地页信息 |
| jump_url | string | 应用直达 schema，大于 0 个并小于 4200 个字符 |
| wechat_channels_shop_product_spec | struct | 小店商品详情页落地页信息 |
| product_id | integer | 微信小店商品 id |
| shop_id | string | 微信小店 id |
| catalog_id | string | 微信小店商品库 id |
| set_id | string | 微信小店商品集合 id |
| wechat_shop_spec | struct | 小店店铺页落地页信息 |
| shop_id | string | 微信小店 id |
| wechat_channels_watch_live_spec | struct | 视频号观看直播落地页信息 |
| wechat_channels_account_id | string | 视频号账号 id |
| harmony_app_spec | struct | 鸿蒙落地页信息 |
| harmony_app_id | string | 鸿蒙应用 AppId |
| wechat_channels_activity_spec | struct | 视频号活动页落地页信息 |
| activity_id | string | 视频号活动加密 id |
| backups | struct[] | 兜底落地页内容列表，仅可在 page_type 为 PAGE_TYPE_APP_DEEP_LINK、PAGE_TYPE_APP_MARKET、PAGE_TYPE_WECHAT_MINI_PROGRAM、PAGE_TYPE_WECHAT_MINI_GAME 时使用 |
| page_type | enum | 落地页类型，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#page_type) |
| page_spec | struct | 落地页内容 |
| android_app_spec | struct | android 默认落地页内容，通常情况下不需要额外数据；在视频号动态落地页内部按钮跳转时，需要额外传入 android_app_id、wechat_canvas_page_id 字段。 |
| android_app_id | string | 安卓应用直达 AppId |
| wechat_canvas_page_id | integer | 落地页 id |
| android_channel_id | string | 安卓应用渠道包 id |
| ios_app_spec | struct | android 默认落地页内容，通常情况下不需要额外数据；在视频号动态落地页内部按钮跳转时，需要额外传入 ios_app_id。 |
| ios_app_id | string | IOS 应用直达 AppId |
| xj_android_app_h5_spec | struct | 蹊径落地页数据，当营销载体类型为视频号直播预约时，需要额外传入 wechat_channels_live_reserve_id |
| page_id | int64 | 落地页 id |
| wechat_channels_live_reserve_id | string | 视频号直播预约 id |
| custom_param | string | 官方落地页自定义参数 |
| xj_ios_app_h5_spec | struct | 蹊径落地页数据，当营销载体类型为视频号直播预约时，需要额外传入 wechat_channels_live_reserve_id |
| page_id | int64 | 落地页 id |
| wechat_channels_live_reserve_id | string | 视频号直播预约 id |
| custom_param | string | 官方落地页自定义参数 |
| xj_web_h5_spec | struct | 蹊径落地页数据，当营销载体类型为视频号直播预约时，需要额外传入 wechat_channels_live_reserve_id |
| page_id | int64 | 落地页 id |
| wechat_channels_live_reserve_id | string | 视频号直播预约 id |
| custom_param | string | 官方落地页自定义参数 |
| xj_quick_spec | struct | 蹊径落地页数据，当营销载体类型为视频号直播预约时，需要额外传入 wechat_channels_live_reserve_id |
| page_id | int64 | 落地页 id |
| wechat_channels_live_reserve_id | string | 视频号直播预约 id |
| custom_param | string | 官方落地页自定义参数 |
| fengye_ecommmerce_spec | struct | 枫叶落地页数据 |
| page_id | int64 | 落地页 id |
| wechat_canvas_spec | struct | 微信原生页数据，当营销载体类型为视频号直播预约时，需要额外传入 wechat_channels_live_reserve_id |
| page_id | int64 | 落地页 id |
| override_canvas_head_option | enum | 原生推广页顶部素材和广告创意素材之间的替换关系，（仅在朋友圈广告使用原生推广页情况下有效），[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#override_canvas_head_option) |
| wechat_channels_live_reserve_id | string | 视频号直播预约 id |
| wechat_mini_program_spec | struct | 小程序落地页，mini_program_id 和 mini_program_path 要同时填写 |
| mini_program_id | string | 小程序 id |
| mini_program_path | string | 小程序路径 |
| mini_program_paths | string[] | 小程序落地页 path 列表 |
| mpa_mini_program_wildcard_url | string | mpa/dca 落地页通配符 |
| wechat_canvas_mini_program_spec | struct | 微信原生页数据，当营销载体类型为视频号直播预约时，需要额外传入 wechat_channels_live_reserve_id |
| page_id | int64 | 落地页 id |
| override_canvas_head_option | enum | 原生推广页顶部素材和广告创意素材之间的替换关系，（仅在朋友圈广告使用原生推广页情况下有效），[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#override_canvas_head_option) |
| wechat_channels_live_reserve_id | string | 视频号直播预约 id |
| qq_app_mini_program_spec | struct | 小程序落地页，mini_program_id 和 mini_program_path 要同时填写 |
| mini_program_id | string | 小程序 id |
| mini_program_path | string | 小程序路径 |
| qq_mini_game_spec | struct | QQ 小游戏落地页信息 |
| mini_game_tracking_parameter | string | QQ 小游戏监控参数 |
| mini_game_id | string | QQ 小游戏 id |
| simple_wechat_canvas_spec | struct | 简版原生页相关信息，当营销载体类型为视频号直播预约时，需要额外传入 wechat_channels_live_reserve_id |
| simple_canvas_webview_type | enum | 简版原生页内嵌落地页类型，不大于 1024 个英文字符或数字，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#simple_canvas_webview_type) |
| simple_canvas_webview_page_id | string | 简版原生页内嵌落地页的 id，小于 128 个英文字符 |
| simple_canvas_sub_type | enum | 简版原生页子类型，灰度中，仅在简版原生页下生效，其他情况改字段内容会被忽略，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#simple_canvas_sub_type) |
| simple_canvas_share_title | string | ，分享标题 |
| simple_canvas_share_desc | string | ，分享描述 |
| simple_canvas_webview_url | string | 简易原生页嵌入 Webview url，和 simple_canvas_sub_type(灰度) 配合使用，关系如下:SIMPLE_CANVAS_SUB_TYPE_URL,SIMPLE_CANVAS_SUB_TYPE_SLIDE_UP 时必填，SIMPLE_CANVAS_SUB_TYPE_WEB_STORE 时系统其他填充为 web store 地址，其他情况无效。 |
| wechat_channels_live_reserve_id | string | 视频号直播预约 id |
| mpa_simple_canvas_webview_wildcard_url | string | mpa/dca 落地页通配符 |
| wechat_focus_dialog_spec | struct | 微信一键关注页 |
| wechat_consult_spec | struct | 微信客服落地页 |
| page_url | string | 落地页 url |
| wecom_consult_spec | struct | 企业微信客服落地页 |
| page_id | int64 | 落地页 id |
| group_type | enum | 企微客服集类型，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#group_type) |
| wechat_official_account_detail_spec | struct | 微信公众号详情数据 |
| app_id | string | 公众号 appId |
| app_deep_link_spec | struct | 应用直达数据 |
| android_deep_link_app_id | string | 安卓应用直达 AppId |
| android_deep_link_url | string | 应用直达 schema，大于 0 个并小于 4200 个字符 |
| ios_deep_link_app_id | string | IOS 应用直达 AppId |
| ios_deep_link_url | string | 应用直达 schema，大于 0 个并小于 4200 个字符 |
| universal_link_url | string | 通用链接页 URL |
| mpa_android_deep_link_wildcard_url | string | deeplink 和 ulink 落地页通配符 |
| mpa_ios_deep_link_wildcard_url | string | deeplink 和 ulink 落地页通配符 |
| mpa_universal_link_wildcard_url | string | deeplink 和 ulink 落地页通配符 |
| deep_link_url | string | 应用直达 schema，大于 0 个并小于 4200 个字符 |
| app_market_spec | struct | 厂商下载 |
| android_app_id | string | 厂商下载应用 AppId |
| android_channel_id | string | 安卓应用渠道包 id |
| android_direct_download_spec | struct | Android 一键下载落地页 |
| android_app_id | string | 安卓下载应用 AppId |
| android_channel_id | string | 安卓应用渠道包 id |
| official_spec | struct | 蹊径落地页数据，当营销载体类型为视频号直播预约时，需要额外传入 wechat_channels_live_reserve_id |
| page_id | int64 | 落地页 id |
| wechat_channels_live_reserve_id | string | 视频号直播预约 id |
| custom_param | string | 官方落地页自定义参数 |
| h5_profile_spec | struct | 品牌形象页 |
| page_id | int64 | 落地页 id |
| hide_company_info | boolean | 是否隐藏商家主体信息 |
| search_area_brand_spec | struct | 超级品专头像页 |
| search_brand_area_keyword | string | 跳转超级品专搜索关键词 |
| wechat_channels_profile_spec | struct | 视频号落地页 |
| username | string | 视频号 username |
| h5_spec | struct | 自定义落地页 |
| page_url | string | 落地页 url |
| mpa_h5_wildcard_url | string | mpa/dca 落地页通配符 |
| wechat_mini_game_spec | struct | 小游戏落地页信息，视频号动态落地页内部按钮跳转时，需要额外传入 mini_game_id |
| mini_game_tracking_parameter | string | 小游戏监控参数，需以英文字符?开头，如：?channel=xxxx，字段长度最小 1 个等宽字符，长度最大 250 个等宽字符（即字段最大长度为 250 个中文字或全角标点，500 个英文字或半角标点。一个等宽字符等价于一个中文，等价于两个英文。） |
| mini_game_id | string | 小游戏 id |
| wechat_channels_feed_spec | struct | 视频号动态落地页信息 |
| feed_id | string | 视频号动态 id |
| action_button | struct | 行动按钮结构 |
| button_text | string | action_button button_text |
| jump_info | struct | 落地页内容结构定义，落地页组件内容结构定义,jump_info 结构单独显示,详见 [\[落地页内容结构详细定义\]](https://developers.e.qq.com/v3.0/docs/api/components/get#jump_info_struct_href) |
| page_type | enum | 落地页类型，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#page_type) |
| page_spec | struct | 落地页内容 |
| android_app_spec | struct | android 默认落地页内容，通常情况下不需要额外数据；在视频号动态落地页内部按钮跳转时，需要额外传入 android_app_id、wechat_canvas_page_id 字段。 |
| android_app_id | string | 安卓应用直达 AppId |
| wechat_canvas_page_id | integer | 落地页 id |
| android_channel_id | string | 安卓应用渠道包 id |
| ios_app_spec | struct | android 默认落地页内容，通常情况下不需要额外数据；在视频号动态落地页内部按钮跳转时，需要额外传入 ios_app_id。 |
| ios_app_id | string | IOS 应用直达 AppId |
| xj_android_app_h5_spec | struct | 蹊径落地页数据，当营销载体类型为视频号直播预约时，需要额外传入 wechat_channels_live_reserve_id |
| page_id | int64 | 落地页 id |
| wechat_channels_live_reserve_id | string | 视频号直播预约 id |
| custom_param | string | 官方落地页自定义参数 |
| xj_ios_app_h5_spec | struct | 蹊径落地页数据，当营销载体类型为视频号直播预约时，需要额外传入 wechat_channels_live_reserve_id |
| page_id | int64 | 落地页 id |
| wechat_channels_live_reserve_id | string | 视频号直播预约 id |
| custom_param | string | 官方落地页自定义参数 |
| xj_web_h5_spec | struct | 蹊径落地页数据，当营销载体类型为视频号直播预约时，需要额外传入 wechat_channels_live_reserve_id |
| page_id | int64 | 落地页 id |
| wechat_channels_live_reserve_id | string | 视频号直播预约 id |
| custom_param | string | 官方落地页自定义参数 |
| xj_quick_spec | struct | 蹊径落地页数据，当营销载体类型为视频号直播预约时，需要额外传入 wechat_channels_live_reserve_id |
| page_id | int64 | 落地页 id |
| wechat_channels_live_reserve_id | string | 视频号直播预约 id |
| custom_param | string | 官方落地页自定义参数 |
| fengye_ecommmerce_spec | struct | 枫叶落地页数据 |
| page_id | int64 | 落地页 id |
| wechat_canvas_spec | struct | 微信原生页数据，当营销载体类型为视频号直播预约时，需要额外传入 wechat_channels_live_reserve_id |
| page_id | int64 | 落地页 id |
| override_canvas_head_option | enum | 原生推广页顶部素材和广告创意素材之间的替换关系，（仅在朋友圈广告使用原生推广页情况下有效），[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#override_canvas_head_option) |
| wechat_channels_live_reserve_id | string | 视频号直播预约 id |
| wechat_mini_program_spec | struct | 小程序落地页，mini_program_id 和 mini_program_path 要同时填写 |
| mini_program_id | string | 小程序 id |
| mini_program_path | string | 小程序路径 |
| mini_program_paths | string[] | 小程序落地页 path 列表 |
| mpa_mini_program_wildcard_url | string | mpa/dca 落地页通配符 |
| wechat_canvas_mini_program_spec | struct | 微信原生页数据，当营销载体类型为视频号直播预约时，需要额外传入 wechat_channels_live_reserve_id |
| page_id | int64 | 落地页 id |
| override_canvas_head_option | enum | 原生推广页顶部素材和广告创意素材之间的替换关系，（仅在朋友圈广告使用原生推广页情况下有效），[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#override_canvas_head_option) |
| wechat_channels_live_reserve_id | string | 视频号直播预约 id |
| qq_app_mini_program_spec | struct | 小程序落地页，mini_program_id 和 mini_program_path 要同时填写 |
| mini_program_id | string | 小程序 id |
| mini_program_path | string | 小程序路径 |
| simple_wechat_canvas_spec | struct | 简版原生页相关信息，当营销载体类型为视频号直播预约时，需要额外传入 wechat_channels_live_reserve_id |
| simple_canvas_webview_type | enum | 简版原生页内嵌落地页类型，不大于 1024 个英文字符或数字，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#simple_canvas_webview_type) |
| simple_canvas_webview_page_id | string | 简版原生页内嵌落地页的 id，小于 128 个英文字符 |
| simple_canvas_sub_type | enum | 简版原生页子类型，灰度中，仅在简版原生页下生效，其他情况改字段内容会被忽略，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#simple_canvas_sub_type) |
| simple_canvas_share_title | string | ，分享标题 |
| simple_canvas_share_desc | string | ，分享描述 |
| simple_canvas_webview_url | string | 简易原生页嵌入 Webview url，和 simple_canvas_sub_type(灰度) 配合使用，关系如下:SIMPLE_CANVAS_SUB_TYPE_URL,SIMPLE_CANVAS_SUB_TYPE_SLIDE_UP 时必填，SIMPLE_CANVAS_SUB_TYPE_WEB_STORE 时系统其他填充为 web store 地址，其他情况无效。 |
| wechat_channels_live_reserve_id | string | 视频号直播预约 id |
| mpa_simple_canvas_webview_wildcard_url | string | mpa/dca 落地页通配符 |
| wechat_focus_dialog_spec | struct | 微信一键关注页 |
| wechat_consult_spec | struct | 微信客服落地页 |
| page_url | string | 落地页 url |
| wecom_consult_spec | struct | 企业微信客服落地页 |
| page_id | int64 | 落地页 id |
| group_type | enum | 企微客服集类型，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#group_type) |
| wechat_official_account_detail_spec | struct | 微信公众号详情数据 |
| app_id | string | 公众号 appId |
| app_deep_link_spec | struct | 应用直达数据 |
| android_deep_link_app_id | string | 安卓应用直达 AppId |
| android_deep_link_url | string | 应用直达 schema，大于 0 个并小于 4200 个字符 |
| ios_deep_link_app_id | string | IOS 应用直达 AppId |
| ios_deep_link_url | string | 应用直达 schema，大于 0 个并小于 4200 个字符 |
| universal_link_url | string | 通用链接页 URL |
| mpa_android_deep_link_wildcard_url | string | deeplink 和 ulink 落地页通配符 |
| mpa_ios_deep_link_wildcard_url | string | deeplink 和 ulink 落地页通配符 |
| mpa_universal_link_wildcard_url | string | deeplink 和 ulink 落地页通配符 |
| deep_link_url | string | 应用直达 schema，大于 0 个并小于 4200 个字符 |
| app_market_spec | struct | 厂商下载 |
| android_app_id | string | 厂商下载应用 AppId |
| android_channel_id | string | 安卓应用渠道包 id |
| android_direct_download_spec | struct | Android 一键下载落地页 |
| android_app_id | string | 安卓下载应用 AppId |
| android_channel_id | string | 安卓应用渠道包 id |
| official_spec | struct | 蹊径落地页数据，当营销载体类型为视频号直播预约时，需要额外传入 wechat_channels_live_reserve_id |
| page_id | int64 | 落地页 id |
| wechat_channels_live_reserve_id | string | 视频号直播预约 id |
| custom_param | string | 官方落地页自定义参数 |
| h5_profile_spec | struct | 品牌形象页 |
| page_id | int64 | 落地页 id |
| hide_company_info | boolean | 是否隐藏商家主体信息 |
| search_area_brand_spec | struct | 超级品专头像页 |
| search_brand_area_keyword | string | 跳转超级品专搜索关键词 |
| wechat_channels_profile_spec | struct | 视频号落地页 |
| username | string | 视频号 username |
| h5_spec | struct | 自定义落地页 |
| page_url | string | 落地页 url |
| mpa_h5_wildcard_url | string | mpa/dca 落地页通配符 |
| wechat_mini_game_spec | struct | 小游戏落地页信息，视频号动态落地页内部按钮跳转时，需要额外传入 mini_game_id |
| mini_game_tracking_parameter | string | 小游戏监控参数，需以英文字符?开头，如：?channel=xxxx，字段长度最小 1 个等宽字符，长度最大 250 个等宽字符（即字段最大长度为 250 个中文字或全角标点，500 个英文字或半角标点。一个等宽字符等价于一个中文，等价于两个英文。） |
| mini_game_id | string | 小游戏 id |
| wechat_channels_reserve_spec | struct | 视频号直播预约落地页信息 |
| reserve_id | string | 视频号直播预约 id |
| wechat_channels_account_id | string | 视频号账号 id |
| android_quick_app_spec | struct | 安卓快应用落地页信息 |
| jump_url | string | 应用直达 schema，大于 0 个并小于 4200 个字符 |
| wechat_channels_shop_product_spec | struct | 小店商品详情页落地页信息 |
| product_id | integer | 微信小店商品 id |
| shop_id | string | 微信小店 id |
| catalog_id | string | 微信小店商品库 id |
| set_id | string | 微信小店商品集合 id |
| wechat_channels_account_id | string | 视频号账号 id |
| wechat_channels_reserve_spec | struct | 视频号直播预约落地页信息 |
| reserve_id | string | 视频号直播预约 id |
| wechat_channels_account_id | string | 视频号账号 id |
| android_quick_app_spec | struct | 安卓快应用落地页信息 |
| jump_url | string | 应用直达 schema，大于 0 个并小于 4200 个字符 |
| wechat_channels_shop_product_spec | struct | 小店商品详情页落地页信息 |
| product_id | integer | 微信小店商品 id |
| shop_id | string | 微信小店 id |
| catalog_id | string | 微信小店商品库 id |
| set_id | string | 微信小店商品集合 id |
| wechat_shop_spec | struct | 小店店铺页落地页信息 |
| shop_id | string | 微信小店 id |
| wechat_channels_watch_live_spec | struct | 视频号观看直播落地页信息 |
| wechat_channels_account_id | string | 视频号账号 id |
| harmony_app_spec | struct | 鸿蒙落地页信息 |
| harmony_app_id | string | 鸿蒙应用 AppId |
| wechat_channels_activity_spec | struct | 视频号活动页落地页信息 |
| activity_id | string | 视频号活动加密 id |
| jumpinfo_account_id | integer | 推广帐号 id，落地页资产归属的账号 id |
| platform_type | enum | 落地页媒体平台类型，落地页媒体平台，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#landing_page_platform_type) |
| jumpinfo_account_id | integer | 推广帐号 id，落地页资产归属的账号 id |
| platform_type | enum | 落地页媒体平台类型，落地页媒体平台，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#landing_page_platform_type) |

## 应答示例

```
{
    "code": 0,
    "message": "",
    "message_cn": "",
    "data": {
        "list": [
            {
                "account_id": "<ACCOUNT_ID>",
                "component_value": {
                    "title": {
                        "value": [],
                        "is_deleted": false
                    },
                    "description": {
                        "value": [],
                        "is_deleted": false
                    },
                    "image": {
                        "value": {
                            "jump_info": {
                                "page_spec": {
                                    "android_app_spec": [],
                                    "ios_app_spec": [],
                                    "xj_android_app_h5_spec": [],
                                    "xj_ios_app_h5_spec": [],
                                    "xj_web_h5_spec": [],
                                    "xj_quick_spec": [],
                                    "fengye_ecommmerce_spec": [],
                                    "wechat_canvas_spec": [],
                                    "wechat_mini_program_spec": {
                                        "mini_program_paths": []
                                    },
                                    "wechat_canvas_mini_program_spec": [],
                                    "qq_app_mini_program_spec": [],
                                    "qq_mini_game_spec": [],
                                    "simple_wechat_canvas_spec": [],
                                    "wechat_consult_spec": [],
                                    "wecom_consult_spec": [],
                                    "wechat_official_account_detail_spec": [],
                                    "app_deep_link_spec": [],
                                    "app_market_spec": [],
                                    "android_direct_download_spec": [],
                                    "official_spec": [],
                                    "h5_profile_spec": [],
                                    "search_area_brand_spec": [],
                                    "wechat_channels_profile_spec": [],
                                    "h5_spec": [],
                                    "wechat_mini_game_spec": [],
                                    "wechat_channels_feed_spec": {
                                        "action_button": {
                                            "jump_info": {
                                                "page_spec": {
                                                    "android_app_spec": [],
                                                    "ios_app_spec": [],
                                                    "xj_android_app_h5_spec": [],
                                                    "xj_ios_app_h5_spec": [],
                                                    "xj_web_h5_spec": [],
                                                    "xj_quick_spec": [],
                                                    "fengye_ecommmerce_spec": [],
                                                    "wechat_canvas_spec": [],
                                                    "wechat_mini_program_spec": {
                                                        "mini_program_paths": []
                                                    },
                                                    "wechat_canvas_mini_program_spec": [],
                                                    "qq_app_mini_program_spec": [],
                                                    "simple_wechat_canvas_spec": [],
                                                    "wechat_consult_spec": [],
                                                    "wecom_consult_spec": [],
                                                    "wechat_official_account_detail_spec": [],
                                                    "app_deep_link_spec": [],
                                                    "app_market_spec": [],
                                                    "android_direct_download_spec": [],
                                                    "official_spec": [],
                                                    "h5_profile_spec": [],
                                                    "search_area_brand_spec": [],
                                                    "wechat_channels_profile_spec": [],
                                                    "h5_spec": [],
                                                    "wechat_mini_game_spec": [],
                                                    "wechat_channels_reserve_spec": [],
                                                    "android_quick_app_spec": [],
                                                    "wechat_channels_shop_product_spec": []
                                                }
                                            }
                                        }
                                    },
                                    "wechat_channels_reserve_spec": [],
                                    "android_quick_app_spec": [],
                                    "wechat_channels_shop_product_spec": [],
                                    "wechat_shop_spec": [],
                                    "wechat_channels_watch_live_spec": [],
                                    "harmony_app_spec": [],
                                    "wechat_channels_activity_spec": []
                                },
                                "backups": [
                                    {
                                        "page_spec": {
                                            "android_app_spec": [],
                                            "ios_app_spec": [],
                                            "xj_android_app_h5_spec": [],
                                            "xj_ios_app_h5_spec": [],
                                            "xj_web_h5_spec": [],
                                            "xj_quick_spec": [],
                                            "fengye_ecommmerce_spec": [],
                                            "wechat_canvas_spec": [],
                                            "wechat_mini_program_spec": {
                                                "mini_program_paths": []
                                            },
                                            "wechat_canvas_mini_program_spec": [],
                                            "qq_app_mini_program_spec": [],
                                            "qq_mini_game_spec": [],
                                            "simple_wechat_canvas_spec": [],
                                            "wechat_consult_spec": [],
                                            "wecom_consult_spec": [],
                                            "wechat_official_account_detail_spec": [],
                                            "app_deep_link_spec": [],
                                            "app_market_spec": [],
                                            "android_direct_download_spec": [],
                                            "official_spec": [],
                                            "h5_profile_spec": [],
                                            "search_area_brand_spec": [],
                                            "wechat_channels_profile_spec": [],
                                            "h5_spec": [],
                                            "wechat_mini_game_spec": [],
                                            "wechat_channels_feed_spec": {
                                                "action_button": {
                                                    "jump_info": {
                                                        "page_spec": {
                                                            "android_app_spec": [],
                                                            "ios_app_spec": [],
                                                            "xj_android_app_h5_spec": [],
                                                            "xj_ios_app_h5_spec": [],
                                                            "xj_web_h5_spec": [],
                                                            "xj_quick_spec": [],
                                                            "fengye_ecommmerce_spec": [],
                                                            "wechat_canvas_spec": [],
                                                            "wechat_mini_program_spec": {
                                                                "mini_program_paths": []
                                                            },
                                                            "wechat_canvas_mini_program_spec": [],
                                                            "qq_app_mini_program_spec": [],
                                                            "simple_wechat_canvas_spec": [],
                                                            "wechat_consult_spec": [],
                                                            "wecom_consult_spec": [],
                                                            "wechat_official_account_detail_spec": [],
                                                            "app_deep_link_spec": [],
                                                            "app_market_spec": [],
                                                            "android_direct_download_spec": [],
                                                            "official_spec": [],
                                                            "h5_profile_spec": [],
                                                            "search_area_brand_spec": [],
                                                            "wechat_channels_profile_spec": [],
                                                            "h5_spec": [],
                                                            "wechat_mini_game_spec": [],
                                                            "wechat_channels_reserve_spec": [],
                                                            "android_quick_app_spec": [],
                                                            "wechat_channels_shop_product_spec": []
                                                        }
                                                    }
                                                }
                                            },
                                            "wechat_channels_reserve_spec": [],
                                            "android_quick_app_spec": [],
                                            "wechat_channels_shop_product_spec": [],
                                            "wechat_shop_spec": [],
                                            "wechat_channels_watch_live_spec": [],
                                            "harmony_app_spec": [],
                                            "wechat_channels_activity_spec": []
                                        }
                                    }
                                ]
                            }
                        },
                        "is_deleted": false
                    },
                    "image_list": {
                        "value": {
                            "jump_info": {
                                "page_spec": {
                                    "android_app_spec": [],
                                    "ios_app_spec": [],
                                    "xj_android_app_h5_spec": [],
                                    "xj_ios_app_h5_spec": [],
                                    "xj_web_h5_spec": [],
                                    "xj_quick_spec": [],
                                    "fengye_ecommmerce_spec": [],
                                    "wechat_canvas_spec": [],
                                    "wechat_mini_program_spec": {
                                        "mini_program_paths": []
                                    },
                                    "wechat_canvas_mini_program_spec": [],
                                    "qq_app_mini_program_spec": [],
                                    "qq_mini_game_spec": [],
                                    "simple_wechat_canvas_spec": [],
                                    "wechat_consult_spec": [],
                                    "wecom_consult_spec": [],
                                    "wechat_official_account_detail_spec": [],
                                    "app_deep_link_spec": [],
                                    "app_market_spec": [],
                                    "android_direct_download_spec": [],
                                    "official_spec": [],
                                    "h5_profile_spec": [],
                                    "search_area_brand_spec": [],
                                    "wechat_channels_profile_spec": [],
                                    "h5_spec": [],
                                    "wechat_mini_game_spec": [],
                                    "wechat_channels_feed_spec": {
                                        "action_button": {
                                            "jump_info": {
                                                "page_spec": {
                                                    "android_app_spec": [],
                                                    "ios_app_spec": [],
                                                    "xj_android_app_h5_spec": [],
                                                    "xj_ios_app_h5_spec": [],
                                                    "xj_web_h5_spec": [],
                                                    "xj_quick_spec": [],
                                                    "fengye_ecommmerce_spec": [],
                                                    "wechat_canvas_spec": [],
                                                    "wechat_mini_program_spec": {
                                                        "mini_program_paths": []
                                                    },
                                                    "wechat_canvas_mini_program_spec": [],
                                                    "qq_app_mini_program_spec": [],
                                                    "simple_wechat_canvas_spec": [],
                                                    "wechat_consult_spec": [],
                                                    "wecom_consult_spec": [],
                                                    "wechat_official_account_detail_spec": [],
                                                    "app_deep_link_spec": [],
                                                    "app_market_spec": [],
                                                    "android_direct_download_spec": [],
                                                    "official_spec": [],
                                                    "h5_profile_spec": [],
                                                    "search_area_brand_spec": [],
                                                    "wechat_channels_profile_spec": [],
                                                    "h5_spec": [],
                                                    "wechat_mini_game_spec": [],
                                                    "wechat_channels_reserve_spec": [],
                                                    "android_quick_app_spec": [],
                                                    "wechat_channels_shop_product_spec": []
                                                }
                                            }
                                        }
                                    },
                                    "wechat_channels_reserve_spec": [],
                                    "android_quick_app_spec": [],
                                    "wechat_channels_shop_product_spec": [],
                                    "wechat_shop_spec": [],
                                    "wechat_channels_watch_live_spec": [],
                                    "harmony_app_spec": [],
                                    "wechat_channels_activity_spec": []
                                },
                                "backups": [
                                    {
                                        "page_spec": {
                                            "android_app_spec": [],
                                            "ios_app_spec": [],
                                            "xj_android_app_h5_spec": [],
                                            "xj_ios_app_h5_spec": [],
                                            "xj_web_h5_spec": [],
                                            "xj_quick_spec": [],
                                            "fengye_ecommmerce_spec": [],
                                            "wechat_canvas_spec": [],
                                            "wechat_mini_program_spec": {
                                                "mini_program_paths": []
                                            },
                                            "wechat_canvas_mini_program_spec": [],
                                            "qq_app_mini_program_spec": [],
                                            "qq_mini_game_spec": [],
                                            "simple_wechat_canvas_spec": [],
                                            "wechat_consult_spec": [],
                                            "wecom_consult_spec": [],
                                            "wechat_official_account_detail_spec": [],
                                            "app_deep_link_spec": [],
                                            "app_market_spec": [],
                                            "android_direct_download_spec": [],
                                            "official_spec": [],
                                            "h5_profile_spec": [],
                                            "search_area_brand_spec": [],
                                            "wechat_channels_profile_spec": [],
                                            "h5_spec": [],
                                            "wechat_mini_game_spec": [],
                                            "wechat_channels_feed_spec": {
                                                "action_button": {
                                                    "jump_info": {
                                                        "page_spec": {
                                                            "android_app_spec": [],
                                                            "ios_app_spec": [],
                                                            "xj_android_app_h5_spec": [],
                                                            "xj_ios_app_h5_spec": [],
                                                            "xj_web_h5_spec": [],
                                                            "xj_quick_spec": [],
                                                            "fengye_ecommmerce_spec": [],
                                                            "wechat_canvas_spec": [],
                                                            "wechat_mini_program_spec": {
                                                                "mini_program_paths": []
                                                            },
                                                            "wechat_canvas_mini_program_spec": [],
                                                            "qq_app_mini_program_spec": [],
                                                            "simple_wechat_canvas_spec": [],
                                                            "wechat_consult_spec": [],
                                                            "wecom_consult_spec": [],
                                                            "wechat_official_account_detail_spec": [],
                                                            "app_deep_link_spec": [],
                                                            "app_market_spec": [],
                                                            "android_direct_download_spec": [],
                                                            "official_spec": [],
                                                            "h5_profile_spec": [],
                                                            "search_area_brand_spec": [],
                                                            "wechat_channels_profile_spec": [],
                                                            "h5_spec": [],
                                                            "wechat_mini_game_spec": [],
                                                            "wechat_channels_reserve_spec": [],
                                                            "android_quick_app_spec": [],
                                                            "wechat_channels_shop_product_spec": []
                                                        }
                                                    }
                                                }
                                            },
                                            "wechat_channels_reserve_spec": [],
                                            "android_quick_app_spec": [],
                                            "wechat_channels_shop_product_spec": [],
                                            "wechat_shop_spec": [],
                                            "wechat_channels_watch_live_spec": [],
                                            "harmony_app_spec": [],
                                            "wechat_channels_activity_spec": []
                                        }
                                    }
                                ]
                            },
                            "list": [
                                {
                                    "jump_info": {
                                        "page_spec": {
                                            "android_app_spec": [],
                                            "ios_app_spec": [],
                                            "xj_android_app_h5_spec": [],
                                            "xj_ios_app_h5_spec": [],
                                            "xj_web_h5_spec": [],
                                            "xj_quick_spec": [],
                                            "fengye_ecommmerce_spec": [],
                                            "wechat_canvas_spec": [],
                                            "wechat_mini_program_spec": {
                                                "mini_program_paths": []
                                            },
                                            "wechat_canvas_mini_program_spec": [],
                                            "qq_app_mini_program_spec": [],
                                            "qq_mini_game_spec": [],
                                            "simple_wechat_canvas_spec": [],
                                            "wechat_consult_spec": [],
                                            "wecom_consult_spec": [],
                                            "wechat_official_account_detail_spec": [],
                                            "app_deep_link_spec": [],
                                            "app_market_spec": [],
                                            "android_direct_download_spec": [],
                                            "official_spec": [],
                                            "h5_profile_spec": [],
                                            "search_area_brand_spec": [],
                                            "wechat_channels_profile_spec": [],
                                            "h5_spec": [],
                                            "wechat_mini_game_spec": [],
                                            "wechat_channels_feed_spec": {
                                                "action_button": {
                                                    "jump_info": {
                                                        "page_spec": {
                                                            "android_app_spec": [],
                                                            "ios_app_spec": [],
                                                            "xj_android_app_h5_spec": [],
                                                            "xj_ios_app_h5_spec": [],
                                                            "xj_web_h5_spec": [],
                                                            "xj_quick_spec": [],
                                                            "fengye_ecommmerce_spec": [],
                                                            "wechat_canvas_spec": [],
                                                            "wechat_mini_program_spec": {
                                                                "mini_program_paths": []
                                                            },
                                                            "wechat_canvas_mini_program_spec": [],
                                                            "qq_app_mini_program_spec": [],
                                                            "simple_wechat_canvas_spec": [],
                                                            "wechat_consult_spec": [],
                                                            "wecom_consult_spec": [],
                                                            "wechat_official_account_detail_spec": [],
                                                            "app_deep_link_spec": [],
                                                            "app_market_spec": [],
                                                            "android_direct_download_spec": [],
                                                            "official_spec": [],
                                                            "h5_profile_spec": [],
                                                            "search_area_brand_spec": [],
                                                            "wechat_channels_profile_spec": [],
                                                            "h5_spec": [],
                                                            "wechat_mini_game_spec": [],
                                                            "wechat_channels_reserve_spec": [],
                                                            "android_quick_app_spec": [],
                                                            "wechat_channels_shop_product_spec": []
                                                        }
                                                    }
                                                }
                                            },
                                            "wechat_channels_reserve_spec": [],
                                            "android_quick_app_spec": [],
                                            "wechat_channels_shop_product_spec": [],
                                            "wechat_shop_spec": [],
                                            "wechat_channels_watch_live_spec": [],
                                            "harmony_app_spec": [],
                                            "wechat_channels_activity_spec": []
                                        },
                                        "backups": [
                                            {
                                                "page_spec": {
                                                    "android_app_spec": [],
                                                    "ios_app_spec": [],
                                                    "xj_android_app_h5_spec": [],
                                                    "xj_ios_app_h5_spec": [],
                                                    "xj_web_h5_spec": [],
                                                    "xj_quick_spec": [],
                                                    "fengye_ecommmerce_spec": [],
                                                    "wechat_canvas_spec": [],
                                                    "wechat_mini_program_spec": {
                                                        "mini_program_paths": []
                                                    },
                                                    "wechat_canvas_mini_program_spec": [],
                                                    "qq_app_mini_program_spec": [],
                                                    "qq_mini_game_spec": [],
                                                    "simple_wechat_canvas_spec": [],
                                                    "wechat_consult_spec": [],
                                                    "wecom_consult_spec": [],
                                                    "wechat_official_account_detail_spec": [],
                                                    "app_deep_link_spec": [],
                                                    "app_market_spec": [],
                                                    "android_direct_download_spec": [],
                                                    "official_spec": [],
                                                    "h5_profile_spec": [],
                                                    "search_area_brand_spec": [],
                                                    "wechat_channels_profile_spec": [],
                                                    "h5_spec": [],
                                                    "wechat_mini_game_spec": [],
                                                    "wechat_channels_feed_spec": {
                                                        "action_button": {
                                                            "jump_info": {
                                                                "page_spec": {
                                                                    "android_app_spec": [],
                                                                    "ios_app_spec": [],
                                                                    "xj_android_app_h5_spec": [],
                                                                    "xj_ios_app_h5_spec": [],
                                                                    "xj_web_h5_spec": [],
                                                                    "xj_quick_spec": [],
                                                                    "fengye_ecommmerce_spec": [],
                                                                    "wechat_canvas_spec": [],
                                                                    "wechat_mini_program_spec": {
                                                                        "mini_program_paths": []
                                                                    },
                                                                    "wechat_canvas_mini_program_spec": [],
                                                                    "qq_app_mini_program_spec": [],
                                                                    "simple_wechat_canvas_spec": [],
                                                                    "wechat_consult_spec": [],
                                                                    "wecom_consult_spec": [],
                                                                    "wechat_official_account_detail_spec": [],
                                                                    "app_deep_link_spec": [],
                                                                    "app_market_spec": [],
                                                                    "android_direct_download_spec": [],
                                                                    "official_spec": [],
                                                                    "h5_profile_spec": [],
                                                                    "search_area_brand_spec": [],
                                                                    "wechat_channels_profile_spec": [],
                                                                    "h5_spec": [],
                                                                    "wechat_mini_game_spec": [],
                                                                    "wechat_channels_reserve_spec": [],
                                                                    "android_quick_app_spec": [],
                                                                    "wechat_channels_shop_product_spec": []
                                                                }
                                                            }
                                                        }
                                                    },
                                                    "wechat_channels_reserve_spec": [],
                                                    "android_quick_app_spec": [],
                                                    "wechat_channels_shop_product_spec": [],
                                                    "wechat_shop_spec": [],
                                                    "wechat_channels_watch_live_spec": [],
                                                    "harmony_app_spec": [],
                                                    "wechat_channels_activity_spec": []
                                                }
                                            }
                                        ]
                                    }
                                }
                            ]
                        },
                        "is_deleted": false
                    },
                    "video": {
                        "value": {
                            "jump_info": {
                                "page_spec": {
                                    "android_app_spec": [],
                                    "ios_app_spec": [],
                                    "xj_android_app_h5_spec": [],
                                    "xj_ios_app_h5_spec": [],
                                    "xj_web_h5_spec": [],
                                    "xj_quick_spec": [],
                                    "fengye_ecommmerce_spec": [],
                                    "wechat_canvas_spec": [],
                                    "wechat_mini_program_spec": {
                                        "mini_program_paths": []
                                    },
                                    "wechat_canvas_mini_program_spec": [],
                                    "qq_app_mini_program_spec": [],
                                    "qq_mini_game_spec": [],
                                    "simple_wechat_canvas_spec": [],
                                    "wechat_consult_spec": [],
                                    "wecom_consult_spec": [],
                                    "wechat_official_account_detail_spec": [],
                                    "app_deep_link_spec": [],
                                    "app_market_spec": [],
                                    "android_direct_download_spec": [],
                                    "official_spec": [],
                                    "h5_profile_spec": [],
                                    "search_area_brand_spec": [],
                                    "wechat_channels_profile_spec": [],
                                    "h5_spec": [],
                                    "wechat_mini_game_spec": [],
                                    "wechat_channels_feed_spec": {
                                        "action_button": {
                                            "jump_info": {
                                                "page_spec": {
                                                    "android_app_spec": [],
                                                    "ios_app_spec": [],
                                                    "xj_android_app_h5_spec": [],
                                                    "xj_ios_app_h5_spec": [],
                                                    "xj_web_h5_spec": [],
                                                    "xj_quick_spec": [],
                                                    "fengye_ecommmerce_spec": [],
                                                    "wechat_canvas_spec": [],
                                                    "wechat_mini_program_spec": {
                                                        "mini_program_paths": []
                                                    },
                                                    "wechat_canvas_mini_program_spec": [],
                                                    "qq_app_mini_program_spec": [],
                                                    "simple_wechat_canvas_spec": [],
                                                    "wechat_consult_spec": [],
                                                    "wecom_consult_spec": [],
                                                    "wechat_official_account_detail_spec": [],
                                                    "app_deep_link_spec": [],
                                                    "app_market_spec": [],
                                                    "android_direct_download_spec": [],
                                                    "official_spec": [],
                                                    "h5_profile_spec": [],
                                                    "search_area_brand_spec": [],
                                                    "wechat_channels_profile_spec": [],
                                                    "h5_spec": [],
                                                    "wechat_mini_game_spec": [],
                                                    "wechat_channels_reserve_spec": [],
                                                    "android_quick_app_spec": [],
                                                    "wechat_channels_shop_product_spec": []
                                                }
                                            }
                                        }
                                    },
                                    "wechat_channels_reserve_spec": [],
                                    "android_quick_app_spec": [],
                                    "wechat_channels_shop_product_spec": [],
                                    "wechat_shop_spec": [],
                                    "wechat_channels_watch_live_spec": [],
                                    "harmony_app_spec": [],
                                    "wechat_channels_activity_spec": []
                                },
                                "backups": [
                                    {
                                        "page_spec": {
                                            "android_app_spec": [],
                                            "ios_app_spec": [],
                                            "xj_android_app_h5_spec": [],
                                            "xj_ios_app_h5_spec": [],
                                            "xj_web_h5_spec": [],
                                            "xj_quick_spec": [],
                                            "fengye_ecommmerce_spec": [],
                                            "wechat_canvas_spec": [],
                                            "wechat_mini_program_spec": {
                                                "mini_program_paths": []
                                            },
                                            "wechat_canvas_mini_program_spec": [],
                                            "qq_app_mini_program_spec": [],
                                            "qq_mini_game_spec": [],
                                            "simple_wechat_canvas_spec": [],
                                            "wechat_consult_spec": [],
                                            "wecom_consult_spec": [],
                                            "wechat_official_account_detail_spec": [],
                                            "app_deep_link_spec": [],
                                            "app_market_spec": [],
                                            "android_direct_download_spec": [],
                                            "official_spec": [],
                                            "h5_profile_spec": [],
                                            "search_area_brand_spec": [],
                                            "wechat_channels_profile_spec": [],
                                            "h5_spec": [],
                                            "wechat_mini_game_spec": [],
                                            "wechat_channels_feed_spec": {
                                                "action_button": {
                                                    "jump_info": {
                                                        "page_spec": {
                                                            "android_app_spec": [],
                                                            "ios_app_spec": [],
                                                            "xj_android_app_h5_spec": [],
                                                            "xj_ios_app_h5_spec": [],
                                                            "xj_web_h5_spec": [],
                                                            "xj_quick_spec": [],
                                                            "fengye_ecommmerce_spec": [],
                                                            "wechat_canvas_spec": [],
                                                            "wechat_mini_program_spec": {
                                                                "mini_program_paths": []
                                                            },
                                                            "wechat_canvas_mini_program_spec": [],
                                                            "qq_app_mini_program_spec": [],
                                                            "simple_wechat_canvas_spec": [],
                                                            "wechat_consult_spec": [],
                                                            "wecom_consult_spec": [],
                                                            "wechat_official_account_detail_spec": [],
                                                            "app_deep_link_spec": [],
                                                            "app_market_spec": [],
                                                            "android_direct_download_spec": [],
                                                            "official_spec": [],
                                                            "h5_profile_spec": [],
                                                            "search_area_brand_spec": [],
                                                            "wechat_channels_profile_spec": [],
                                                            "h5_spec": [],
                                                            "wechat_mini_game_spec": [],
                                                            "wechat_channels_reserve_spec": [],
                                                            "android_quick_app_spec": [],
                                                            "wechat_channels_shop_product_spec": []
                                                        }
                                                    }
                                                }
                                            },
                                            "wechat_channels_reserve_spec": [],
                                            "android_quick_app_spec": [],
                                            "wechat_channels_shop_product_spec": [],
                                            "wechat_shop_spec": [],
                                            "wechat_channels_watch_live_spec": [],
                                            "harmony_app_spec": [],
                                            "wechat_channels_activity_spec": []
                                        }
                                    }
                                ]
                            }
                        },
                        "is_deleted": false
                    },
                    "brand": {
                        "value": {
                            "jump_info": {
                                "page_spec": {
                                    "android_app_spec": [],
                                    "ios_app_spec": [],
                                    "xj_android_app_h5_spec": [],
                                    "xj_ios_app_h5_spec": [],
                                    "xj_web_h5_spec": [],
                                    "xj_quick_spec": [],
                                    "fengye_ecommmerce_spec": [],
                                    "wechat_canvas_spec": [],
                                    "wechat_mini_program_spec": {
                                        "mini_program_paths": []
                                    },
                                    "wechat_canvas_mini_program_spec": [],
                                    "qq_app_mini_program_spec": [],
                                    "qq_mini_game_spec": [],
                                    "simple_wechat_canvas_spec": [],
                                    "wechat_consult_spec": [],
                                    "wecom_consult_spec": [],
                                    "wechat_official_account_detail_spec": [],
                                    "app_deep_link_spec": [],
                                    "app_market_spec": [],
                                    "android_direct_download_spec": [],
                                    "official_spec": [],
                                    "h5_profile_spec": [],
                                    "search_area_brand_spec": [],
                                    "wechat_channels_profile_spec": [],
                                    "h5_spec": [],
                                    "wechat_mini_game_spec": [],
                                    "wechat_channels_feed_spec": {
                                        "action_button": {
                                            "jump_info": {
                                                "page_spec": {
                                                    "android_app_spec": [],
                                                    "ios_app_spec": [],
                                                    "xj_android_app_h5_spec": [],
                                                    "xj_ios_app_h5_spec": [],
                                                    "xj_web_h5_spec": [],
                                                    "xj_quick_spec": [],
                                                    "fengye_ecommmerce_spec": [],
                                                    "wechat_canvas_spec": [],
                                                    "wechat_mini_program_spec": {
                                                        "mini_program_paths": []
                                                    },
                                                    "wechat_canvas_mini_program_spec": [],
                                                    "qq_app_mini_program_spec": [],
                                                    "simple_wechat_canvas_spec": [],
                                                    "wechat_consult_spec": [],
                                                    "wecom_consult_spec": [],
                                                    "wechat_official_account_detail_spec": [],
                                                    "app_deep_link_spec": [],
                                                    "app_market_spec": [],
                                                    "android_direct_download_spec": [],
                                                    "official_spec": [],
                                                    "h5_profile_spec": [],
                                                    "search_area_brand_spec": [],
                                                    "wechat_channels_profile_spec": [],
                                                    "h5_spec": [],
                                                    "wechat_mini_game_spec": [],
                                                    "wechat_channels_reserve_spec": [],
                                                    "android_quick_app_spec": [],
                                                    "wechat_channels_shop_product_spec": []
                                                }
                                            }
                                        }
                                    },
                                    "wechat_channels_reserve_spec": [],
                                    "android_quick_app_spec": [],
                                    "wechat_channels_shop_product_spec": [],
                                    "wechat_shop_spec": [],
                                    "wechat_channels_watch_live_spec": [],
                                    "harmony_app_spec": [],
                                    "wechat_channels_activity_spec": []
                                },
                                "backups": [
                                    {
                                        "page_spec": {
                                            "android_app_spec": [],
                                            "ios_app_spec": [],
                                            "xj_android_app_h5_spec": [],
                                            "xj_ios_app_h5_spec": [],
                                            "xj_web_h5_spec": [],
                                            "xj_quick_spec": [],
                                            "fengye_ecommmerce_spec": [],
                                            "wechat_canvas_spec": [],
                                            "wechat_mini_program_spec": {
                                                "mini_program_paths": []
                                            },
                                            "wechat_canvas_mini_program_spec": [],
                                            "qq_app_mini_program_spec": [],
                                            "qq_mini_game_spec": [],
                                            "simple_wechat_canvas_spec": [],
                                            "wechat_consult_spec": [],
                                            "wecom_consult_spec": [],
                                            "wechat_official_account_detail_spec": [],
                                            "app_deep_link_spec": [],
                                            "app_market_spec": [],
                                            "android_direct_download_spec": [],
                                            "official_spec": [],
                                            "h5_profile_spec": [],
                                            "search_area_brand_spec": [],
                                            "wechat_channels_profile_spec": [],
                                            "h5_spec": [],
                                            "wechat_mini_game_spec": [],
                                            "wechat_channels_feed_spec": {
                                                "action_button": {
                                                    "jump_info": {
                                                        "page_spec": {
                                                            "android_app_spec": [],
                                                            "ios_app_spec": [],
                                                            "xj_android_app_h5_spec": [],
                                                            "xj_ios_app_h5_spec": [],
                                                            "xj_web_h5_spec": [],
                                                            "xj_quick_spec": [],
                                                            "fengye_ecommmerce_spec": [],
                                                            "wechat_canvas_spec": [],
                                                            "wechat_mini_program_spec": {
                                                                "mini_program_paths": []
                                                            },
                                                            "wechat_canvas_mini_program_spec": [],
                                                            "qq_app_mini_program_spec": [],
                                                            "simple_wechat_canvas_spec": [],
                                                            "wechat_consult_spec": [],
                                                            "wecom_consult_spec": [],
                                                            "wechat_official_account_detail_spec": [],
                                                            "app_deep_link_spec": [],
                                                            "app_market_spec": [],
                                                            "android_direct_download_spec": [],
                                                            "official_spec": [],
                                                            "h5_profile_spec": [],
                                                            "search_area_brand_spec": [],
                                                            "wechat_channels_profile_spec": [],
                                                            "h5_spec": [],
                                                            "wechat_mini_game_spec": [],
                                                            "wechat_channels_reserve_spec": [],
                                                            "android_quick_app_spec": [],
                                                            "wechat_channels_shop_product_spec": []
                                                        }
                                                    }
                                                }
                                            },
                                            "wechat_channels_reserve_spec": [],
                                            "android_quick_app_spec": [],
                                            "wechat_channels_shop_product_spec": [],
                                            "wechat_shop_spec": [],
                                            "wechat_channels_watch_live_spec": [],
                                            "harmony_app_spec": [],
                                            "wechat_channels_activity_spec": []
                                        }
                                    }
                                ]
                            }
                        },
                        "is_deleted": false
                    },
                    "consult": {
                        "value": {
                            "jump_info_list": [
                                {
                                    "page_spec": {
                                        "android_app_spec": [],
                                        "ios_app_spec": [],
                                        "xj_android_app_h5_spec": [],
                                        "xj_ios_app_h5_spec": [],
                                        "xj_web_h5_spec": [],
                                        "xj_quick_spec": [],
                                        "fengye_ecommmerce_spec": [],
                                        "wechat_canvas_spec": [],
                                        "wechat_mini_program_spec": {
                                            "mini_program_paths": []
                                        },
                                        "wechat_canvas_mini_program_spec": [],
                                        "qq_app_mini_program_spec": [],
                                        "qq_mini_game_spec": [],
                                        "simple_wechat_canvas_spec": [],
                                        "wechat_consult_spec": [],
                                        "wecom_consult_spec": [],
                                        "wechat_official_account_detail_spec": [],
                                        "app_deep_link_spec": [],
                                        "app_market_spec": [],
                                        "android_direct_download_spec": [],
                                        "official_spec": [],
                                        "h5_profile_spec": [],
                                        "search_area_brand_spec": [],
                                        "wechat_channels_profile_spec": [],
                                        "h5_spec": [],
                                        "wechat_mini_game_spec": [],
                                        "wechat_channels_feed_spec": {
                                            "action_button": {
                                                "jump_info": {
                                                    "page_spec": {
                                                        "android_app_spec": [],
                                                        "ios_app_spec": [],
                                                        "xj_android_app_h5_spec": [],
                                                        "xj_ios_app_h5_spec": [],
                                                        "xj_web_h5_spec": [],
                                                        "xj_quick_spec": [],
                                                        "fengye_ecommmerce_spec": [],
                                                        "wechat_canvas_spec": [],
                                                        "wechat_mini_program_spec": {
                                                            "mini_program_paths": []
                                                        },
                                                        "wechat_canvas_mini_program_spec": [],
                                                        "qq_app_mini_program_spec": [],
                                                        "simple_wechat_canvas_spec": [],
                                                        "wechat_consult_spec": [],
                                                        "wecom_consult_spec": [],
                                                        "wechat_official_account_detail_spec": [],
                                                        "app_deep_link_spec": [],
                                                        "app_market_spec": [],
                                                        "android_direct_download_spec": [],
                                                        "official_spec": [],
                                                        "h5_profile_spec": [],
                                                        "search_area_brand_spec": [],
                                                        "wechat_channels_profile_spec": [],
                                                        "h5_spec": [],
                                                        "wechat_mini_game_spec": [],
                                                        "wechat_channels_reserve_spec": [],
                                                        "android_quick_app_spec": [],
                                                        "wechat_channels_shop_product_spec": []
                                                    }
                                                }
                                            }
                                        },
                                        "wechat_channels_reserve_spec": [],
                                        "android_quick_app_spec": [],
                                        "wechat_channels_shop_product_spec": [],
                                        "wechat_shop_spec": [],
                                        "wechat_channels_watch_live_spec": [],
                                        "harmony_app_spec": [],
                                        "wechat_channels_activity_spec": []
                                    }
                                }
                            ]
                        },
                        "is_deleted": false
                    },
                    "phone": {
                        "value": [],
                        "is_deleted": false
                    },
                    "form": {
                        "value": [],
                        "is_deleted": false
                    },
                    "action_button": {
                        "value": {
                            "jump_info": {
                                "page_spec": {
                                    "android_app_spec": [],
                                    "ios_app_spec": [],
                                    "xj_android_app_h5_spec": [],
                                    "xj_ios_app_h5_spec": [],
                                    "xj_web_h5_spec": [],
                                    "xj_quick_spec": [],
                                    "fengye_ecommmerce_spec": [],
                                    "wechat_canvas_spec": [],
                                    "wechat_mini_program_spec": {
                                        "mini_program_paths": []
                                    },
                                    "wechat_canvas_mini_program_spec": [],
                                    "qq_app_mini_program_spec": [],
                                    "qq_mini_game_spec": [],
                                    "simple_wechat_canvas_spec": [],
                                    "wechat_consult_spec": [],
                                    "wecom_consult_spec": [],
                                    "wechat_official_account_detail_spec": [],
                                    "app_deep_link_spec": [],
                                    "app_market_spec": [],
                                    "android_direct_download_spec": [],
                                    "official_spec": [],
                                    "h5_profile_spec": [],
                                    "search_area_brand_spec": [],
                                    "wechat_channels_profile_spec": [],
                                    "h5_spec": [],
                                    "wechat_mini_game_spec": [],
                                    "wechat_channels_feed_spec": {
                                        "action_button": {
                                            "jump_info": {
                                                "page_spec": {
                                                    "android_app_spec": [],
                                                    "ios_app_spec": [],
                                                    "xj_android_app_h5_spec": [],
                                                    "xj_ios_app_h5_spec": [],
                                                    "xj_web_h5_spec": [],
                                                    "xj_quick_spec": [],
                                                    "fengye_ecommmerce_spec": [],
                                                    "wechat_canvas_spec": [],
                                                    "wechat_mini_program_spec": {
                                                        "mini_program_paths": []
                                                    },
                                                    "wechat_canvas_mini_program_spec": [],
                                                    "qq_app_mini_program_spec": [],
                                                    "simple_wechat_canvas_spec": [],
                                                    "wechat_consult_spec": [],
                                                    "wecom_consult_spec": [],
                                                    "wechat_official_account_detail_spec": [],
                                                    "app_deep_link_spec": [],
                                                    "app_market_spec": [],
                                                    "android_direct_download_spec": [],
                                                    "official_spec": [],
                                                    "h5_profile_spec": [],
                                                    "search_area_brand_spec": [],
                                                    "wechat_channels_profile_spec": [],
                                                    "h5_spec": [],
                                                    "wechat_mini_game_spec": [],
                                                    "wechat_channels_reserve_spec": [],
                                                    "android_quick_app_spec": [],
                                                    "wechat_channels_shop_product_spec": []
                                                }
                                            }
                                        }
                                    },
                                    "wechat_channels_reserve_spec": [],
                                    "android_quick_app_spec": [],
                                    "wechat_channels_shop_product_spec": [],
                                    "wechat_shop_spec": [],
                                    "wechat_channels_watch_live_spec": [],
                                    "harmony_app_spec": [],
                                    "wechat_channels_activity_spec": []
                                },
                                "backups": [
                                    {
                                        "page_spec": {
                                            "android_app_spec": [],
                                            "ios_app_spec": [],
                                            "xj_android_app_h5_spec": [],
                                            "xj_ios_app_h5_spec": [],
                                            "xj_web_h5_spec": [],
                                            "xj_quick_spec": [],
                                            "fengye_ecommmerce_spec": [],
                                            "wechat_canvas_spec": [],
                                            "wechat_mini_program_spec": {
                                                "mini_program_paths": []
                                            },
                                            "wechat_canvas_mini_program_spec": [],
                                            "qq_app_mini_program_spec": [],
                                            "qq_mini_game_spec": [],
                                            "simple_wechat_canvas_spec": [],
                                            "wechat_consult_spec": [],
                                            "wecom_consult_spec": [],
                                            "wechat_official_account_detail_spec": [],
                                            "app_deep_link_spec": [],
                                            "app_market_spec": [],
                                            "android_direct_download_spec": [],
                                            "official_spec": [],
                                            "h5_profile_spec": [],
                                            "search_area_brand_spec": [],
                                            "wechat_channels_profile_spec": [],
                                            "h5_spec": [],
                                            "wechat_mini_game_spec": [],
                                            "wechat_channels_feed_spec": {
                                                "action_button": {
                                                    "jump_info": {
                                                        "page_spec": {
                                                            "android_app_spec": [],
                                                            "ios_app_spec": [],
                                                            "xj_android_app_h5_spec": [],
                                                            "xj_ios_app_h5_spec": [],
                                                            "xj_web_h5_spec": [],
                                                            "xj_quick_spec": [],
                                                            "fengye_ecommmerce_spec": [],
                                                            "wechat_canvas_spec": [],
                                                            "wechat_mini_program_spec": {
                                                                "mini_program_paths": []
                                                            },
                                                            "wechat_canvas_mini_program_spec": [],
                                                            "qq_app_mini_program_spec": [],
                                                            "simple_wechat_canvas_spec": [],
                                                            "wechat_consult_spec": [],
                                                            "wecom_consult_spec": [],
                                                            "wechat_official_account_detail_spec": [],
                                                            "app_deep_link_spec": [],
                                                            "app_market_spec": [],
                                                            "android_direct_download_spec": [],
                                                            "official_spec": [],
                                                            "h5_profile_spec": [],
                                                            "search_area_brand_spec": [],
                                                            "wechat_channels_profile_spec": [],
                                                            "h5_spec": [],
                                                            "wechat_mini_game_spec": [],
                                                            "wechat_channels_reserve_spec": [],
                                                            "android_quick_app_spec": [],
                                                            "wechat_channels_shop_product_spec": []
                                                        }
                                                    }
                                                }
                                            },
                                            "wechat_channels_reserve_spec": [],
                                            "android_quick_app_spec": [],
                                            "wechat_channels_shop_product_spec": [],
                                            "wechat_shop_spec": [],
                                            "wechat_channels_watch_live_spec": [],
                                            "harmony_app_spec": [],
                                            "wechat_channels_activity_spec": []
                                        }
                                    }
                                ]
                            }
                        },
                        "is_deleted": false
                    },
                    "chosen_button": {
                        "value": {
                            "left_button": {
                                "jump_info": {
                                    "page_spec": {
                                        "android_app_spec": [],
                                        "ios_app_spec": [],
                                        "xj_android_app_h5_spec": [],
                                        "xj_ios_app_h5_spec": [],
                                        "xj_web_h5_spec": [],
                                        "xj_quick_spec": [],
                                        "fengye_ecommmerce_spec": [],
                                        "wechat_canvas_spec": [],
                                        "wechat_mini_program_spec": {
                                            "mini_program_paths": []
                                        },
                                        "wechat_canvas_mini_program_spec": [],
                                        "qq_app_mini_program_spec": [],
                                        "qq_mini_game_spec": [],
                                        "simple_wechat_canvas_spec": [],
                                        "wechat_consult_spec": [],
                                        "wecom_consult_spec": [],
                                        "wechat_official_account_detail_spec": [],
                                        "app_deep_link_spec": [],
                                        "app_market_spec": [],
                                        "android_direct_download_spec": [],
                                        "official_spec": [],
                                        "h5_profile_spec": [],
                                        "search_area_brand_spec": [],
                                        "wechat_channels_profile_spec": [],
                                        "h5_spec": [],
                                        "wechat_mini_game_spec": [],
                                        "wechat_channels_feed_spec": {
                                            "action_button": {
                                                "jump_info": {
                                                    "page_spec": {
                                                        "android_app_spec": [],
                                                        "ios_app_spec": [],
                                                        "xj_android_app_h5_spec": [],
                                                        "xj_ios_app_h5_spec": [],
                                                        "xj_web_h5_spec": [],
                                                        "xj_quick_spec": [],
                                                        "fengye_ecommmerce_spec": [],
                                                        "wechat_canvas_spec": [],
                                                        "wechat_mini_program_spec": {
                                                            "mini_program_paths": []
                                                        },
                                                        "wechat_canvas_mini_program_spec": [],
                                                        "qq_app_mini_program_spec": [],
                                                        "simple_wechat_canvas_spec": [],
                                                        "wechat_consult_spec": [],
                                                        "wecom_consult_spec": [],
                                                        "wechat_official_account_detail_spec": [],
                                                        "app_deep_link_spec": [],
                                                        "app_market_spec": [],
                                                        "android_direct_download_spec": [],
                                                        "official_spec": [],
                                                        "h5_profile_spec": [],
                                                        "search_area_brand_spec": [],
                                                        "wechat_channels_profile_spec": [],
                                                        "h5_spec": [],
                                                        "wechat_mini_game_spec": [],
                                                        "wechat_channels_reserve_spec": [],
                                                        "android_quick_app_spec": [],
                                                        "wechat_channels_shop_product_spec": []
                                                    }
                                                }
                                            }
                                        },
                                        "wechat_channels_reserve_spec": [],
                                        "android_quick_app_spec": [],
                                        "wechat_channels_shop_product_spec": [],
                                        "wechat_shop_spec": [],
                                        "wechat_channels_watch_live_spec": [],
                                        "harmony_app_spec": [],
                                        "wechat_channels_activity_spec": []
                                    },
                                    "backups": [
                                        {
                                            "page_spec": {
                                                "android_app_spec": [],
                                                "ios_app_spec": [],
                                                "xj_android_app_h5_spec": [],
                                                "xj_ios_app_h5_spec": [],
                                                "xj_web_h5_spec": [],
                                                "xj_quick_spec": [],
                                                "fengye_ecommmerce_spec": [],
                                                "wechat_canvas_spec": [],
                                                "wechat_mini_program_spec": {
                                                    "mini_program_paths": []
                                                },
                                                "wechat_canvas_mini_program_spec": [],
                                                "qq_app_mini_program_spec": [],
                                                "qq_mini_game_spec": [],
                                                "simple_wechat_canvas_spec": [],
                                                "wechat_consult_spec": [],
                                                "wecom_consult_spec": [],
                                                "wechat_official_account_detail_spec": [],
                                                "app_deep_link_spec": [],
                                                "app_market_spec": [],
                                                "android_direct_download_spec": [],
                                                "official_spec": [],
                                                "h5_profile_spec": [],
                                                "search_area_brand_spec": [],
                                                "wechat_channels_profile_spec": [],
                                                "h5_spec": [],
                                                "wechat_mini_game_spec": [],
                                                "wechat_channels_feed_spec": {
                                                    "action_button": {
                                                        "jump_info": {
                                                            "page_spec": {
                                                                "android_app_spec": [],
                                                                "ios_app_spec": [],
                                                                "xj_android_app_h5_spec": [],
                                                                "xj_ios_app_h5_spec": [],
                                                                "xj_web_h5_spec": [],
                                                                "xj_quick_spec": [],
                                                                "fengye_ecommmerce_spec": [],
                                                                "wechat_canvas_spec": [],
                                                                "wechat_mini_program_spec": {
                                                                    "mini_program_paths": []
                                                                },
                                                                "wechat_canvas_mini_program_spec": [],
                                                                "qq_app_mini_program_spec": [],
                                                                "simple_wechat_canvas_spec": [],
                                                                "wechat_consult_spec": [],
                                                                "wecom_consult_spec": [],
                                                                "wechat_official_account_detail_spec": [],
                                                                "app_deep_link_spec": [],
                                                                "app_market_spec": [],
                                                                "android_direct_download_spec": [],
                                                                "official_spec": [],
                                                                "h5_profile_spec": [],
                                                                "search_area_brand_spec": [],
                                                                "wechat_channels_profile_spec": [],
                                                                "h5_spec": [],
                                                                "wechat_mini_game_spec": [],
                                                                "wechat_channels_reserve_spec": [],
                                                                "android_quick_app_spec": [],
                                                                "wechat_channels_shop_product_spec": []
                                                            }
                                                        }
                                                    }
                                                },
                                                "wechat_channels_reserve_spec": [],
                                                "android_quick_app_spec": [],
                                                "wechat_channels_shop_product_spec": [],
                                                "wechat_shop_spec": [],
                                                "wechat_channels_watch_live_spec": [],
                                                "harmony_app_spec": [],
                                                "wechat_channels_activity_spec": []
                                            }
                                        }
                                    ]
                                }
                            },
                            "right_button": {
                                "jump_info": {
                                    "page_spec": {
                                        "android_app_spec": [],
                                        "ios_app_spec": [],
                                        "xj_android_app_h5_spec": [],
                                        "xj_ios_app_h5_spec": [],
                                        "xj_web_h5_spec": [],
                                        "xj_quick_spec": [],
                                        "fengye_ecommmerce_spec": [],
                                        "wechat_canvas_spec": [],
                                        "wechat_mini_program_spec": {
                                            "mini_program_paths": []
                                        },
                                        "wechat_canvas_mini_program_spec": [],
                                        "qq_app_mini_program_spec": [],
                                        "qq_mini_game_spec": [],
                                        "simple_wechat_canvas_spec": [],
                                        "wechat_consult_spec": [],
                                        "wecom_consult_spec": [],
                                        "wechat_official_account_detail_spec": [],
                                        "app_deep_link_spec": [],
                                        "app_market_spec": [],
                                        "android_direct_download_spec": [],
                                        "official_spec": [],
                                        "h5_profile_spec": [],
                                        "search_area_brand_spec": [],
                                        "wechat_channels_profile_spec": [],
                                        "h5_spec": [],
                                        "wechat_mini_game_spec": [],
                                        "wechat_channels_feed_spec": {
                                            "action_button": {
                                                "jump_info": {
                                                    "page_spec": {
                                                        "android_app_spec": [],
                                                        "ios_app_spec": [],
                                                        "xj_android_app_h5_spec": [],
                                                        "xj_ios_app_h5_spec": [],
                                                        "xj_web_h5_spec": [],
                                                        "xj_quick_spec": [],
                                                        "fengye_ecommmerce_spec": [],
                                                        "wechat_canvas_spec": [],
                                                        "wechat_mini_program_spec": {
                                                            "mini_program_paths": []
                                                        },
                                                        "wechat_canvas_mini_program_spec": [],
                                                        "qq_app_mini_program_spec": [],
                                                        "simple_wechat_canvas_spec": [],
                                                        "wechat_consult_spec": [],
                                                        "wecom_consult_spec": [],
                                                        "wechat_official_account_detail_spec": [],
                                                        "app_deep_link_spec": [],
                                                        "app_market_spec": [],
                                                        "android_direct_download_spec": [],
                                                        "official_spec": [],
                                                        "h5_profile_spec": [],
                                                        "search_area_brand_spec": [],
                                                        "wechat_channels_profile_spec": [],
                                                        "h5_spec": [],
                                                        "wechat_mini_game_spec": [],
                                                        "wechat_channels_reserve_spec": [],
                                                        "android_quick_app_spec": [],
                                                        "wechat_channels_shop_product_spec": []
                                                    }
                                                }
                                            }
                                        },
                                        "wechat_channels_reserve_spec": [],
                                        "android_quick_app_spec": [],
                                        "wechat_channels_shop_product_spec": [],
                                        "wechat_shop_spec": [],
                                        "wechat_channels_watch_live_spec": [],
                                        "harmony_app_spec": [],
                                        "wechat_channels_activity_spec": []
                                    },
                                    "backups": [
                                        {
                                            "page_spec": {
                                                "android_app_spec": [],
                                                "ios_app_spec": [],
                                                "xj_android_app_h5_spec": [],
                                                "xj_ios_app_h5_spec": [],
                                                "xj_web_h5_spec": [],
                                                "xj_quick_spec": [],
                                                "fengye_ecommmerce_spec": [],
                                                "wechat_canvas_spec": [],
                                                "wechat_mini_program_spec": {
                                                    "mini_program_paths": []
                                                },
                                                "wechat_canvas_mini_program_spec": [],
                                                "qq_app_mini_program_spec": [],
                                                "qq_mini_game_spec": [],
                                                "simple_wechat_canvas_spec": [],
                                                "wechat_consult_spec": [],
                                                "wecom_consult_spec": [],
                                                "wechat_official_account_detail_spec": [],
                                                "app_deep_link_spec": [],
                                                "app_market_spec": [],
                                                "android_direct_download_spec": [],
                                                "official_spec": [],
                                                "h5_profile_spec": [],
                                                "search_area_brand_spec": [],
                                                "wechat_channels_profile_spec": [],
                                                "h5_spec": [],
                                                "wechat_mini_game_spec": [],
                                                "wechat_channels_feed_spec": {
                                                    "action_button": {
                                                        "jump_info": {
                                                            "page_spec": {
                                                                "android_app_spec": [],
                                                                "ios_app_spec": [],
                                                                "xj_android_app_h5_spec": [],
                                                                "xj_ios_app_h5_spec": [],
                                                                "xj_web_h5_spec": [],
                                                                "xj_quick_spec": [],
                                                                "fengye_ecommmerce_spec": [],
                                                                "wechat_canvas_spec": [],
                                                                "wechat_mini_program_spec": {
                                                                    "mini_program_paths": []
                                                                },
                                                                "wechat_canvas_mini_program_spec": [],
                                                                "qq_app_mini_program_spec": [],
                                                                "simple_wechat_canvas_spec": [],
                                                                "wechat_consult_spec": [],
                                                                "wecom_consult_spec": [],
                                                                "wechat_official_account_detail_spec": [],
                                                                "app_deep_link_spec": [],
                                                                "app_market_spec": [],
                                                                "android_direct_download_spec": [],
                                                                "official_spec": [],
                                                                "h5_profile_spec": [],
                                                                "search_area_brand_spec": [],
                                                                "wechat_channels_profile_spec": [],
                                                                "h5_spec": [],
                                                                "wechat_mini_game_spec": [],
                                                                "wechat_channels_reserve_spec": [],
                                                                "android_quick_app_spec": [],
                                                                "wechat_channels_shop_product_spec": []
                                                            }
                                                        }
                                                    }
                                                },
                                                "wechat_channels_reserve_spec": [],
                                                "android_quick_app_spec": [],
                                                "wechat_channels_shop_product_spec": [],
                                                "wechat_shop_spec": [],
                                                "wechat_channels_watch_live_spec": [],
                                                "harmony_app_spec": [],
                                                "wechat_channels_activity_spec": []
                                            }
                                        }
                                    ]
                                }
                            }
                        },
                        "is_deleted": false
                    },
                    "label": {
                        "value": {
                            "list": []
                        },
                        "is_deleted": false
                    },
                    "show_data": {
                        "value": [],
                        "is_deleted": false
                    },
                    "marketing_pendant": {
                        "value": [],
                        "is_deleted": false
                    },
                    "app_gift_pack_code": {
                        "value": {
                            "code": 0
                        },
                        "is_deleted": false
                    },
                    "shop_image": {
                        "value": [],
                        "is_deleted": false
                    },
                    "count_down": {
                        "value": [],
                        "is_deleted": false
                    },
                    "barrage": {
                        "value": {
                            "list": []
                        },
                        "is_deleted": false
                    },
                    "floating_zone": {
                        "value": {
                            "jump_info": {
                                "page_spec": {
                                    "android_app_spec": [],
                                    "ios_app_spec": [],
                                    "xj_android_app_h5_spec": [],
                                    "xj_ios_app_h5_spec": [],
                                    "xj_web_h5_spec": [],
                                    "xj_quick_spec": [],
                                    "fengye_ecommmerce_spec": [],
                                    "wechat_canvas_spec": [],
                                    "wechat_mini_program_spec": {
                                        "mini_program_paths": []
                                    },
                                    "wechat_canvas_mini_program_spec": [],
                                    "qq_app_mini_program_spec": [],
                                    "qq_mini_game_spec": [],
                                    "simple_wechat_canvas_spec": [],
                                    "wechat_consult_spec": [],
                                    "wecom_consult_spec": [],
                                    "wechat_official_account_detail_spec": [],
                                    "app_deep_link_spec": [],
                                    "app_market_spec": [],
                                    "android_direct_download_spec": [],
                                    "official_spec": [],
                                    "h5_profile_spec": [],
                                    "search_area_brand_spec": [],
                                    "wechat_channels_profile_spec": [],
                                    "h5_spec": [],
                                    "wechat_mini_game_spec": [],
                                    "wechat_channels_feed_spec": {
                                        "action_button": {
                                            "jump_info": {
                                                "page_spec": {
                                                    "android_app_spec": [],
                                                    "ios_app_spec": [],
                                                    "xj_android_app_h5_spec": [],
                                                    "xj_ios_app_h5_spec": [],
                                                    "xj_web_h5_spec": [],
                                                    "xj_quick_spec": [],
                                                    "fengye_ecommmerce_spec": [],
                                                    "wechat_canvas_spec": [],
                                                    "wechat_mini_program_spec": {
                                                        "mini_program_paths": []
                                                    },
                                                    "wechat_canvas_mini_program_spec": [],
                                                    "qq_app_mini_program_spec": [],
                                                    "simple_wechat_canvas_spec": [],
                                                    "wechat_consult_spec": [],
                                                    "wecom_consult_spec": [],
                                                    "wechat_official_account_detail_spec": [],
                                                    "app_deep_link_spec": [],
                                                    "app_market_spec": [],
                                                    "android_direct_download_spec": [],
                                                    "official_spec": [],
                                                    "h5_profile_spec": [],
                                                    "search_area_brand_spec": [],
                                                    "wechat_channels_profile_spec": [],
                                                    "h5_spec": [],
                                                    "wechat_mini_game_spec": [],
                                                    "wechat_channels_reserve_spec": [],
                                                    "android_quick_app_spec": [],
                                                    "wechat_channels_shop_product_spec": []
                                                }
                                            }
                                        }
                                    },
                                    "wechat_channels_reserve_spec": [],
                                    "android_quick_app_spec": [],
                                    "wechat_channels_shop_product_spec": [],
                                    "wechat_shop_spec": [],
                                    "wechat_channels_watch_live_spec": [],
                                    "harmony_app_spec": [],
                                    "wechat_channels_activity_spec": []
                                },
                                "backups": [
                                    {
                                        "page_spec": {
                                            "android_app_spec": [],
                                            "ios_app_spec": [],
                                            "xj_android_app_h5_spec": [],
                                            "xj_ios_app_h5_spec": [],
                                            "xj_web_h5_spec": [],
                                            "xj_quick_spec": [],
                                            "fengye_ecommmerce_spec": [],
                                            "wechat_canvas_spec": [],
                                            "wechat_mini_program_spec": {
                                                "mini_program_paths": []
                                            },
                                            "wechat_canvas_mini_program_spec": [],
                                            "qq_app_mini_program_spec": [],
                                            "qq_mini_game_spec": [],
                                            "simple_wechat_canvas_spec": [],
                                            "wechat_consult_spec": [],
                                            "wecom_consult_spec": [],
                                            "wechat_official_account_detail_spec": [],
                                            "app_deep_link_spec": [],
                                            "app_market_spec": [],
                                            "android_direct_download_spec": [],
                                            "official_spec": [],
                                            "h5_profile_spec": [],
                                            "search_area_brand_spec": [],
                                            "wechat_channels_profile_spec": [],
                                            "h5_spec": [],
                                            "wechat_mini_game_spec": [],
                                            "wechat_channels_feed_spec": {
                                                "action_button": {
                                                    "jump_info": {
                                                        "page_spec": {
                                                            "android_app_spec": [],
                                                            "ios_app_spec": [],
                                                            "xj_android_app_h5_spec": [],
                                                            "xj_ios_app_h5_spec": [],
                                                            "xj_web_h5_spec": [],
                                                            "xj_quick_spec": [],
                                                            "fengye_ecommmerce_spec": [],
                                                            "wechat_canvas_spec": [],
                                                            "wechat_mini_program_spec": {
                                                                "mini_program_paths": []
                                                            },
                                                            "wechat_canvas_mini_program_spec": [],
                                                            "qq_app_mini_program_spec": [],
                                                            "simple_wechat_canvas_spec": [],
                                                            "wechat_consult_spec": [],
                                                            "wecom_consult_spec": [],
                                                            "wechat_official_account_detail_spec": [],
                                                            "app_deep_link_spec": [],
                                                            "app_market_spec": [],
                                                            "android_direct_download_spec": [],
                                                            "official_spec": [],
                                                            "h5_profile_spec": [],
                                                            "search_area_brand_spec": [],
                                                            "wechat_channels_profile_spec": [],
                                                            "h5_spec": [],
                                                            "wechat_mini_game_spec": [],
                                                            "wechat_channels_reserve_spec": [],
                                                            "android_quick_app_spec": [],
                                                            "wechat_channels_shop_product_spec": []
                                                        }
                                                    }
                                                }
                                            },
                                            "wechat_channels_reserve_spec": [],
                                            "android_quick_app_spec": [],
                                            "wechat_channels_shop_product_spec": [],
                                            "wechat_shop_spec": [],
                                            "wechat_channels_watch_live_spec": [],
                                            "harmony_app_spec": [],
                                            "wechat_channels_activity_spec": []
                                        }
                                    }
                                ]
                            }
                        },
                        "is_deleted": false
                    },
                    "text_link": {
                        "value": {
                            "jump_info": {
                                "page_spec": {
                                    "android_app_spec": [],
                                    "ios_app_spec": [],
                                    "xj_android_app_h5_spec": [],
                                    "xj_ios_app_h5_spec": [],
                                    "xj_web_h5_spec": [],
                                    "xj_quick_spec": [],
                                    "fengye_ecommmerce_spec": [],
                                    "wechat_canvas_spec": [],
                                    "wechat_mini_program_spec": {
                                        "mini_program_paths": []
                                    },
                                    "wechat_canvas_mini_program_spec": [],
                                    "qq_app_mini_program_spec": [],
                                    "qq_mini_game_spec": [],
                                    "simple_wechat_canvas_spec": [],
                                    "wechat_consult_spec": [],
                                    "wecom_consult_spec": [],
                                    "wechat_official_account_detail_spec": [],
                                    "app_deep_link_spec": [],
                                    "app_market_spec": [],
                                    "android_direct_download_spec": [],
                                    "official_spec": [],
                                    "h5_profile_spec": [],
                                    "search_area_brand_spec": [],
                                    "wechat_channels_profile_spec": [],
                                    "h5_spec": [],
                                    "wechat_mini_game_spec": [],
                                    "wechat_channels_feed_spec": {
                                        "action_button": {
                                            "jump_info": {
                                                "page_spec": {
                                                    "android_app_spec": [],
                                                    "ios_app_spec": [],
                                                    "xj_android_app_h5_spec": [],
                                                    "xj_ios_app_h5_spec": [],
                                                    "xj_web_h5_spec": [],
                                                    "xj_quick_spec": [],
                                                    "fengye_ecommmerce_spec": [],
                                                    "wechat_canvas_spec": [],
                                                    "wechat_mini_program_spec": {
                                                        "mini_program_paths": []
                                                    },
                                                    "wechat_canvas_mini_program_spec": [],
                                                    "qq_app_mini_program_spec": [],
                                                    "simple_wechat_canvas_spec": [],
                                                    "wechat_consult_spec": [],
                                                    "wecom_consult_spec": [],
                                                    "wechat_official_account_detail_spec": [],
                                                    "app_deep_link_spec": [],
                                                    "app_market_spec": [],
                                                    "android_direct_download_spec": [],
                                                    "official_spec": [],
                                                    "h5_profile_spec": [],
                                                    "search_area_brand_spec": [],
                                                    "wechat_channels_profile_spec": [],
                                                    "h5_spec": [],
                                                    "wechat_mini_game_spec": [],
                                                    "wechat_channels_reserve_spec": [],
                                                    "android_quick_app_spec": [],
                                                    "wechat_channels_shop_product_spec": []
                                                }
                                            }
                                        }
                                    },
                                    "wechat_channels_reserve_spec": [],
                                    "android_quick_app_spec": [],
                                    "wechat_channels_shop_product_spec": [],
                                    "wechat_shop_spec": [],
                                    "wechat_channels_watch_live_spec": [],
                                    "harmony_app_spec": [],
                                    "wechat_channels_activity_spec": []
                                },
                                "backups": [
                                    {
                                        "page_spec": {
                                            "android_app_spec": [],
                                            "ios_app_spec": [],
                                            "xj_android_app_h5_spec": [],
                                            "xj_ios_app_h5_spec": [],
                                            "xj_web_h5_spec": [],
                                            "xj_quick_spec": [],
                                            "fengye_ecommmerce_spec": [],
                                            "wechat_canvas_spec": [],
                                            "wechat_mini_program_spec": {
                                                "mini_program_paths": []
                                            },
                                            "wechat_canvas_mini_program_spec": [],
                                            "qq_app_mini_program_spec": [],
                                            "qq_mini_game_spec": [],
                                            "simple_wechat_canvas_spec": [],
                                            "wechat_consult_spec": [],
                                            "wecom_consult_spec": [],
                                            "wechat_official_account_detail_spec": [],
                                            "app_deep_link_spec": [],
                                            "app_market_spec": [],
                                            "android_direct_download_spec": [],
                                            "official_spec": [],
                                            "h5_profile_spec": [],
                                            "search_area_brand_spec": [],
                                            "wechat_channels_profile_spec": [],
                                            "h5_spec": [],
                                            "wechat_mini_game_spec": [],
                                            "wechat_channels_feed_spec": {
                                                "action_button": {
                                                    "jump_info": {
                                                        "page_spec": {
                                                            "android_app_spec": [],
                                                            "ios_app_spec": [],
                                                            "xj_android_app_h5_spec": [],
                                                            "xj_ios_app_h5_spec": [],
                                                            "xj_web_h5_spec": [],
                                                            "xj_quick_spec": [],
                                                            "fengye_ecommmerce_spec": [],
                                                            "wechat_canvas_spec": [],
                                                            "wechat_mini_program_spec": {
                                                                "mini_program_paths": []
                                                            },
                                                            "wechat_canvas_mini_program_spec": [],
                                                            "qq_app_mini_program_spec": [],
                                                            "simple_wechat_canvas_spec": [],
                                                            "wechat_consult_spec": [],
                                                            "wecom_consult_spec": [],
                                                            "wechat_official_account_detail_spec": [],
                                                            "app_deep_link_spec": [],
                                                            "app_market_spec": [],
                                                            "android_direct_download_spec": [],
                                                            "official_spec": [],
                                                            "h5_profile_spec": [],
                                                            "search_area_brand_spec": [],
                                                            "wechat_channels_profile_spec": [],
                                                            "h5_spec": [],
                                                            "wechat_mini_game_spec": [],
                                                            "wechat_channels_reserve_spec": [],
                                                            "android_quick_app_spec": [],
                                                            "wechat_channels_shop_product_spec": []
                                                        }
                                                    }
                                                }
                                            },
                                            "wechat_channels_reserve_spec": [],
                                            "android_quick_app_spec": [],
                                            "wechat_channels_shop_product_spec": [],
                                            "wechat_shop_spec": [],
                                            "wechat_channels_watch_live_spec": [],
                                            "harmony_app_spec": [],
                                            "wechat_channels_activity_spec": []
                                        }
                                    }
                                ]
                            }
                        },
                        "is_deleted": false
                    },
                    "jump_info": {
                        "value": {
                            "page_spec": {
                                "android_app_spec": [],
                                "ios_app_spec": [],
                                "xj_android_app_h5_spec": [],
                                "xj_ios_app_h5_spec": [],
                                "xj_web_h5_spec": [],
                                "xj_quick_spec": [],
                                "fengye_ecommmerce_spec": [],
                                "wechat_canvas_spec": [],
                                "wechat_mini_program_spec": {
                                    "mini_program_paths": []
                                },
                                "wechat_canvas_mini_program_spec": [],
                                "qq_app_mini_program_spec": [],
                                "qq_mini_game_spec": [],
                                "simple_wechat_canvas_spec": [],
                                "wechat_consult_spec": [],
                                "wecom_consult_spec": [],
                                "wechat_official_account_detail_spec": [],
                                "app_deep_link_spec": [],
                                "app_market_spec": [],
                                "android_direct_download_spec": [],
                                "official_spec": [],
                                "h5_profile_spec": [],
                                "search_area_brand_spec": [],
                                "wechat_channels_profile_spec": [],
                                "h5_spec": [],
                                "wechat_mini_game_spec": [],
                                "wechat_channels_feed_spec": {
                                    "action_button": {
                                        "jump_info": {
                                            "page_spec": {
                                                "android_app_spec": [],
                                                "ios_app_spec": [],
                                                "xj_android_app_h5_spec": [],
                                                "xj_ios_app_h5_spec": [],
                                                "xj_web_h5_spec": [],
                                                "xj_quick_spec": [],
                                                "fengye_ecommmerce_spec": [],
                                                "wechat_canvas_spec": [],
                                                "wechat_mini_program_spec": {
                                                    "mini_program_paths": []
                                                },
                                                "wechat_canvas_mini_program_spec": [],
                                                "qq_app_mini_program_spec": [],
                                                "simple_wechat_canvas_spec": [],
                                                "wechat_consult_spec": [],
                                                "wecom_consult_spec": [],
                                                "wechat_official_account_detail_spec": [],
                                                "app_deep_link_spec": [],
                                                "app_market_spec": [],
                                                "android_direct_download_spec": [],
                                                "official_spec": [],
                                                "h5_profile_spec": [],
                                                "search_area_brand_spec": [],
                                                "wechat_channels_profile_spec": [],
                                                "h5_spec": [],
                                                "wechat_mini_game_spec": [],
                                                "wechat_channels_reserve_spec": [],
                                                "android_quick_app_spec": [],
                                                "wechat_channels_shop_product_spec": []
                                            }
                                        }
                                    }
                                },
                                "wechat_channels_reserve_spec": [],
                                "android_quick_app_spec": [],
                                "wechat_channels_shop_product_spec": [],
                                "wechat_shop_spec": [],
                                "wechat_channels_watch_live_spec": [],
                                "harmony_app_spec": [],
                                "wechat_channels_activity_spec": []
                            },
                            "backups": [
                                {
                                    "page_spec": {
                                        "android_app_spec": [],
                                        "ios_app_spec": [],
                                        "xj_android_app_h5_spec": [],
                                        "xj_ios_app_h5_spec": [],
                                        "xj_web_h5_spec": [],
                                        "xj_quick_spec": [],
                                        "fengye_ecommmerce_spec": [],
                                        "wechat_canvas_spec": [],
                                        "wechat_mini_program_spec": {
                                            "mini_program_paths": []
                                        },
                                        "wechat_canvas_mini_program_spec": [],
                                        "qq_app_mini_program_spec": [],
                                        "qq_mini_game_spec": [],
                                        "simple_wechat_canvas_spec": [],
                                        "wechat_consult_spec": [],
                                        "wecom_consult_spec": [],
                                        "wechat_official_account_detail_spec": [],
                                        "app_deep_link_spec": [],
                                        "app_market_spec": [],
                                        "android_direct_download_spec": [],
                                        "official_spec": [],
                                        "h5_profile_spec": [],
                                        "search_area_brand_spec": [],
                                        "wechat_channels_profile_spec": [],
                                        "h5_spec": [],
                                        "wechat_mini_game_spec": [],
                                        "wechat_channels_feed_spec": {
                                            "action_button": {
                                                "jump_info": {
                                                    "page_spec": {
                                                        "android_app_spec": [],
                                                        "ios_app_spec": [],
                                                        "xj_android_app_h5_spec": [],
                                                        "xj_ios_app_h5_spec": [],
                                                        "xj_web_h5_spec": [],
                                                        "xj_quick_spec": [],
                                                        "fengye_ecommmerce_spec": [],
                                                        "wechat_canvas_spec": [],
                                                        "wechat_mini_program_spec": {
                                                            "mini_program_paths": []
                                                        },
                                                        "wechat_canvas_mini_program_spec": [],
                                                        "qq_app_mini_program_spec": [],
                                                        "simple_wechat_canvas_spec": [],
                                                        "wechat_consult_spec": [],
                                                        "wecom_consult_spec": [],
                                                        "wechat_official_account_detail_spec": [],
                                                        "app_deep_link_spec": [],
                                                        "app_market_spec": [],
                                                        "android_direct_download_spec": [],
                                                        "official_spec": [],
                                                        "h5_profile_spec": [],
                                                        "search_area_brand_spec": [],
                                                        "wechat_channels_profile_spec": [],
                                                        "h5_spec": [],
                                                        "wechat_mini_game_spec": [],
                                                        "wechat_channels_reserve_spec": [],
                                                        "android_quick_app_spec": [],
                                                        "wechat_channels_shop_product_spec": []
                                                    }
                                                }
                                            }
                                        },
                                        "wechat_channels_reserve_spec": [],
                                        "android_quick_app_spec": [],
                                        "wechat_channels_shop_product_spec": [],
                                        "wechat_shop_spec": [],
                                        "wechat_channels_watch_live_spec": [],
                                        "harmony_app_spec": [],
                                        "wechat_channels_activity_spec": []
                                    }
                                }
                            ]
                        },
                        "is_deleted": false
                    },
                    "end_page": {
                        "value": [],
                        "is_deleted": false
                    },
                    "living_desc": {
                        "value": {
                            "desc_list": []
                        },
                        "is_deleted": false
                    },
                    "wechat_channels": {
                        "value": [],
                        "is_deleted": false
                    },
                    "short_video": {
                        "value": [],
                        "is_deleted": false
                    },
                    "element_story": {
                        "value": {
                            "list": []
                        },
                        "is_deleted": false
                    },
                    "wxgame_playable_page": {
                        "value": {
                            "wxgame_playable_page_trigger_types": []
                        },
                        "is_deleted": false
                    },
                    "app_promotion_video": {
                        "value": {
                            "qrcode_position": []
                        },
                        "is_deleted": false
                    },
                    "video_showcase": {
                        "value": {
                            "video": {
                                "jump_info": {
                                    "page_spec": {
                                        "android_app_spec": [],
                                        "ios_app_spec": [],
                                        "xj_android_app_h5_spec": [],
                                        "xj_ios_app_h5_spec": [],
                                        "xj_web_h5_spec": [],
                                        "xj_quick_spec": [],
                                        "fengye_ecommmerce_spec": [],
                                        "wechat_canvas_spec": [],
                                        "wechat_mini_program_spec": {
                                            "mini_program_paths": []
                                        },
                                        "wechat_canvas_mini_program_spec": [],
                                        "qq_app_mini_program_spec": [],
                                        "qq_mini_game_spec": [],
                                        "simple_wechat_canvas_spec": [],
                                        "wechat_consult_spec": [],
                                        "wecom_consult_spec": [],
                                        "wechat_official_account_detail_spec": [],
                                        "app_deep_link_spec": [],
                                        "app_market_spec": [],
                                        "android_direct_download_spec": [],
                                        "official_spec": [],
                                        "h5_profile_spec": [],
                                        "search_area_brand_spec": [],
                                        "wechat_channels_profile_spec": [],
                                        "h5_spec": [],
                                        "wechat_mini_game_spec": [],
                                        "wechat_channels_feed_spec": {
                                            "action_button": {
                                                "jump_info": {
                                                    "page_spec": {
                                                        "android_app_spec": [],
                                                        "ios_app_spec": [],
                                                        "xj_android_app_h5_spec": [],
                                                        "xj_ios_app_h5_spec": [],
                                                        "xj_web_h5_spec": [],
                                                        "xj_quick_spec": [],
                                                        "fengye_ecommmerce_spec": [],
                                                        "wechat_canvas_spec": [],
                                                        "wechat_mini_program_spec": {
                                                            "mini_program_paths": []
                                                        },
                                                        "wechat_canvas_mini_program_spec": [],
                                                        "qq_app_mini_program_spec": [],
                                                        "simple_wechat_canvas_spec": [],
                                                        "wechat_consult_spec": [],
                                                        "wecom_consult_spec": [],
                                                        "wechat_official_account_detail_spec": [],
                                                        "app_deep_link_spec": [],
                                                        "app_market_spec": [],
                                                        "android_direct_download_spec": [],
                                                        "official_spec": [],
                                                        "h5_profile_spec": [],
                                                        "search_area_brand_spec": [],
                                                        "wechat_channels_profile_spec": [],
                                                        "h5_spec": [],
                                                        "wechat_mini_game_spec": [],
                                                        "wechat_channels_reserve_spec": [],
                                                        "android_quick_app_spec": [],
                                                        "wechat_channels_shop_product_spec": []
                                                    }
                                                }
                                            }
                                        },
                                        "wechat_channels_reserve_spec": [],
                                        "android_quick_app_spec": [],
                                        "wechat_channels_shop_product_spec": [],
                                        "wechat_shop_spec": [],
                                        "wechat_channels_watch_live_spec": [],
                                        "harmony_app_spec": [],
                                        "wechat_channels_activity_spec": []
                                    },
                                    "backups": [
                                        {
                                            "page_spec": {
                                                "android_app_spec": [],
                                                "ios_app_spec": [],
                                                "xj_android_app_h5_spec": [],
                                                "xj_ios_app_h5_spec": [],
                                                "xj_web_h5_spec": [],
                                                "xj_quick_spec": [],
                                                "fengye_ecommmerce_spec": [],
                                                "wechat_canvas_spec": [],
                                                "wechat_mini_program_spec": {
                                                    "mini_program_paths": []
                                                },
                                                "wechat_canvas_mini_program_spec": [],
                                                "qq_app_mini_program_spec": [],
                                                "qq_mini_game_spec": [],
                                                "simple_wechat_canvas_spec": [],
                                                "wechat_consult_spec": [],
                                                "wecom_consult_spec": [],
                                                "wechat_official_account_detail_spec": [],
                                                "app_deep_link_spec": [],
                                                "app_market_spec": [],
                                                "android_direct_download_spec": [],
                                                "official_spec": [],
                                                "h5_profile_spec": [],
                                                "search_area_brand_spec": [],
                                                "wechat_channels_profile_spec": [],
                                                "h5_spec": [],
                                                "wechat_mini_game_spec": [],
                                                "wechat_channels_feed_spec": {
                                                    "action_button": {
                                                        "jump_info": {
                                                            "page_spec": {
                                                                "android_app_spec": [],
                                                                "ios_app_spec": [],
                                                                "xj_android_app_h5_spec": [],
                                                                "xj_ios_app_h5_spec": [],
                                                                "xj_web_h5_spec": [],
                                                                "xj_quick_spec": [],
                                                                "fengye_ecommmerce_spec": [],
                                                                "wechat_canvas_spec": [],
                                                                "wechat_mini_program_spec": {
                                                                    "mini_program_paths": []
                                                                },
                                                                "wechat_canvas_mini_program_spec": [],
                                                                "qq_app_mini_program_spec": [],
                                                                "simple_wechat_canvas_spec": [],
                                                                "wechat_consult_spec": [],
                                                                "wecom_consult_spec": [],
                                                                "wechat_official_account_detail_spec": [],
                                                                "app_deep_link_spec": [],
                                                                "app_market_spec": [],
                                                                "android_direct_download_spec": [],
                                                                "official_spec": [],
                                                                "h5_profile_spec": [],
                                                                "search_area_brand_spec": [],
                                                                "wechat_channels_profile_spec": [],
                                                                "h5_spec": [],
                                                                "wechat_mini_game_spec": [],
                                                                "wechat_channels_reserve_spec": [],
                                                                "android_quick_app_spec": [],
                                                                "wechat_channels_shop_product_spec": []
                                                            }
                                                        }
                                                    }
                                                },
                                                "wechat_channels_reserve_spec": [],
                                                "android_quick_app_spec": [],
                                                "wechat_channels_shop_product_spec": [],
                                                "wechat_shop_spec": [],
                                                "wechat_channels_watch_live_spec": [],
                                                "harmony_app_spec": [],
                                                "wechat_channels_activity_spec": []
                                            }
                                        }
                                    ]
                                }
                            },
                            "image_list": {
                                "jump_info": {
                                    "page_spec": {
                                        "android_app_spec": [],
                                        "ios_app_spec": [],
                                        "xj_android_app_h5_spec": [],
                                        "xj_ios_app_h5_spec": [],
                                        "xj_web_h5_spec": [],
                                        "xj_quick_spec": [],
                                        "fengye_ecommmerce_spec": [],
                                        "wechat_canvas_spec": [],
                                        "wechat_mini_program_spec": {
                                            "mini_program_paths": []
                                        },
                                        "wechat_canvas_mini_program_spec": [],
                                        "qq_app_mini_program_spec": [],
                                        "qq_mini_game_spec": [],
                                        "simple_wechat_canvas_spec": [],
                                        "wechat_consult_spec": [],
                                        "wecom_consult_spec": [],
                                        "wechat_official_account_detail_spec": [],
                                        "app_deep_link_spec": [],
                                        "app_market_spec": [],
                                        "android_direct_download_spec": [],
                                        "official_spec": [],
                                        "h5_profile_spec": [],
                                        "search_area_brand_spec": [],
                                        "wechat_channels_profile_spec": [],
                                        "h5_spec": [],
                                        "wechat_mini_game_spec": [],
                                        "wechat_channels_feed_spec": {
                                            "action_button": {
                                                "jump_info": {
                                                    "page_spec": {
                                                        "android_app_spec": [],
                                                        "ios_app_spec": [],
                                                        "xj_android_app_h5_spec": [],
                                                        "xj_ios_app_h5_spec": [],
                                                        "xj_web_h5_spec": [],
                                                        "xj_quick_spec": [],
                                                        "fengye_ecommmerce_spec": [],
                                                        "wechat_canvas_spec": [],
                                                        "wechat_mini_program_spec": {
                                                            "mini_program_paths": []
                                                        },
                                                        "wechat_canvas_mini_program_spec": [],
                                                        "qq_app_mini_program_spec": [],
                                                        "simple_wechat_canvas_spec": [],
                                                        "wechat_consult_spec": [],
                                                        "wecom_consult_spec": [],
                                                        "wechat_official_account_detail_spec": [],
                                                        "app_deep_link_spec": [],
                                                        "app_market_spec": [],
                                                        "android_direct_download_spec": [],
                                                        "official_spec": [],
                                                        "h5_profile_spec": [],
                                                        "search_area_brand_spec": [],
                                                        "wechat_channels_profile_spec": [],
                                                        "h5_spec": [],
                                                        "wechat_mini_game_spec": [],
                                                        "wechat_channels_reserve_spec": [],
                                                        "android_quick_app_spec": [],
                                                        "wechat_channels_shop_product_spec": []
                                                    }
                                                }
                                            }
                                        },
                                        "wechat_channels_reserve_spec": [],
                                        "android_quick_app_spec": [],
                                        "wechat_channels_shop_product_spec": [],
                                        "wechat_shop_spec": [],
                                        "wechat_channels_watch_live_spec": [],
                                        "harmony_app_spec": [],
                                        "wechat_channels_activity_spec": []
                                    },
                                    "backups": [
                                        {
                                            "page_spec": {
                                                "android_app_spec": [],
                                                "ios_app_spec": [],
                                                "xj_android_app_h5_spec": [],
                                                "xj_ios_app_h5_spec": [],
                                                "xj_web_h5_spec": [],
                                                "xj_quick_spec": [],
                                                "fengye_ecommmerce_spec": [],
                                                "wechat_canvas_spec": [],
                                                "wechat_mini_program_spec": {
                                                    "mini_program_paths": []
                                                },
                                                "wechat_canvas_mini_program_spec": [],
                                                "qq_app_mini_program_spec": [],
                                                "qq_mini_game_spec": [],
                                                "simple_wechat_canvas_spec": [],
                                                "wechat_consult_spec": [],
                                                "wecom_consult_spec": [],
                                                "wechat_official_account_detail_spec": [],
                                                "app_deep_link_spec": [],
                                                "app_market_spec": [],
                                                "android_direct_download_spec": [],
                                                "official_spec": [],
                                                "h5_profile_spec": [],
                                                "search_area_brand_spec": [],
                                                "wechat_channels_profile_spec": [],
                                                "h5_spec": [],
                                                "wechat_mini_game_spec": [],
                                                "wechat_channels_feed_spec": {
                                                    "action_button": {
                                                        "jump_info": {
                                                            "page_spec": {
                                                                "android_app_spec": [],
                                                                "ios_app_spec": [],
                                                                "xj_android_app_h5_spec": [],
                                                                "xj_ios_app_h5_spec": [],
                                                                "xj_web_h5_spec": [],
                                                                "xj_quick_spec": [],
                                                                "fengye_ecommmerce_spec": [],
                                                                "wechat_canvas_spec": [],
                                                                "wechat_mini_program_spec": {
                                                                    "mini_program_paths": []
                                                                },
                                                                "wechat_canvas_mini_program_spec": [],
                                                                "qq_app_mini_program_spec": [],
                                                                "simple_wechat_canvas_spec": [],
                                                                "wechat_consult_spec": [],
                                                                "wecom_consult_spec": [],
                                                                "wechat_official_account_detail_spec": [],
                                                                "app_deep_link_spec": [],
                                                                "app_market_spec": [],
                                                                "android_direct_download_spec": [],
                                                                "official_spec": [],
                                                                "h5_profile_spec": [],
                                                                "search_area_brand_spec": [],
                                                                "wechat_channels_profile_spec": [],
                                                                "h5_spec": [],
                                                                "wechat_mini_game_spec": [],
                                                                "wechat_channels_reserve_spec": [],
                                                                "android_quick_app_spec": [],
                                                                "wechat_channels_shop_product_spec": []
                                                            }
                                                        }
                                                    }
                                                },
                                                "wechat_channels_reserve_spec": [],
                                                "android_quick_app_spec": [],
                                                "wechat_channels_shop_product_spec": [],
                                                "wechat_shop_spec": [],
                                                "wechat_channels_watch_live_spec": [],
                                                "harmony_app_spec": [],
                                                "wechat_channels_activity_spec": []
                                            }
                                        }
                                    ]
                                },
                                "list": [
                                    {
                                        "jump_info": {
                                            "page_spec": {
                                                "android_app_spec": [],
                                                "ios_app_spec": [],
                                                "xj_android_app_h5_spec": [],
                                                "xj_ios_app_h5_spec": [],
                                                "xj_web_h5_spec": [],
                                                "xj_quick_spec": [],
                                                "fengye_ecommmerce_spec": [],
                                                "wechat_canvas_spec": [],
                                                "wechat_mini_program_spec": {
                                                    "mini_program_paths": []
                                                },
                                                "wechat_canvas_mini_program_spec": [],
                                                "qq_app_mini_program_spec": [],
                                                "qq_mini_game_spec": [],
                                                "simple_wechat_canvas_spec": [],
                                                "wechat_consult_spec": [],
                                                "wecom_consult_spec": [],
                                                "wechat_official_account_detail_spec": [],
                                                "app_deep_link_spec": [],
                                                "app_market_spec": [],
                                                "android_direct_download_spec": [],
                                                "official_spec": [],
                                                "h5_profile_spec": [],
                                                "search_area_brand_spec": [],
                                                "wechat_channels_profile_spec": [],
                                                "h5_spec": [],
                                                "wechat_mini_game_spec": [],
                                                "wechat_channels_feed_spec": {
                                                    "action_button": {
                                                        "jump_info": {
                                                            "page_spec": {
                                                                "android_app_spec": [],
                                                                "ios_app_spec": [],
                                                                "xj_android_app_h5_spec": [],
                                                                "xj_ios_app_h5_spec": [],
                                                                "xj_web_h5_spec": [],
                                                                "xj_quick_spec": [],
                                                                "fengye_ecommmerce_spec": [],
                                                                "wechat_canvas_spec": [],
                                                                "wechat_mini_program_spec": {
                                                                    "mini_program_paths": []
                                                                },
                                                                "wechat_canvas_mini_program_spec": [],
                                                                "qq_app_mini_program_spec": [],
                                                                "simple_wechat_canvas_spec": [],
                                                                "wechat_consult_spec": [],
                                                                "wecom_consult_spec": [],
                                                                "wechat_official_account_detail_spec": [],
                                                                "app_deep_link_spec": [],
                                                                "app_market_spec": [],
                                                                "android_direct_download_spec": [],
                                                                "official_spec": [],
                                                                "h5_profile_spec": [],
                                                                "search_area_brand_spec": [],
                                                                "wechat_channels_profile_spec": [],
                                                                "h5_spec": [],
                                                                "wechat_mini_game_spec": [],
                                                                "wechat_channels_reserve_spec": [],
                                                                "android_quick_app_spec": [],
                                                                "wechat_channels_shop_product_spec": []
                                                            }
                                                        }
                                                    }
                                                },
                                                "wechat_channels_reserve_spec": [],
                                                "android_quick_app_spec": [],
                                                "wechat_channels_shop_product_spec": [],
                                                "wechat_shop_spec": [],
                                                "wechat_channels_watch_live_spec": [],
                                                "harmony_app_spec": [],
                                                "wechat_channels_activity_spec": []
                                            },
                                            "backups": [
                                                {
                                                    "page_spec": {
                                                        "android_app_spec": [],
                                                        "ios_app_spec": [],
                                                        "xj_android_app_h5_spec": [],
                                                        "xj_ios_app_h5_spec": [],
                                                        "xj_web_h5_spec": [],
                                                        "xj_quick_spec": [],
                                                        "fengye_ecommmerce_spec": [],
                                                        "wechat_canvas_spec": [],
                                                        "wechat_mini_program_spec": {
                                                            "mini_program_paths": []
                                                        },
                                                        "wechat_canvas_mini_program_spec": [],
                                                        "qq_app_mini_program_spec": [],
                                                        "qq_mini_game_spec": [],
                                                        "simple_wechat_canvas_spec": [],
                                                        "wechat_consult_spec": [],
                                                        "wecom_consult_spec": [],
                                                        "wechat_official_account_detail_spec": [],
                                                        "app_deep_link_spec": [],
                                                        "app_market_spec": [],
                                                        "android_direct_download_spec": [],
                                                        "official_spec": [],
                                                        "h5_profile_spec": [],
                                                        "search_area_brand_spec": [],
                                                        "wechat_channels_profile_spec": [],
                                                        "h5_spec": [],
                                                        "wechat_mini_game_spec": [],
                                                        "wechat_channels_feed_spec": {
                                                            "action_button": {
                                                                "jump_info": {
                                                                    "page_spec": {
                                                                        "android_app_spec": [],
                                                                        "ios_app_spec": [],
                                                                        "xj_android_app_h5_spec": [],
                                                                        "xj_ios_app_h5_spec": [],
                                                                        "xj_web_h5_spec": [],
                                                                        "xj_quick_spec": [],
                                                                        "fengye_ecommmerce_spec": [],
                                                                        "wechat_canvas_spec": [],
                                                                        "wechat_mini_program_spec": {
                                                                            "mini_program_paths": []
                                                                        },
                                                                        "wechat_canvas_mini_program_spec": [],
                                                                        "qq_app_mini_program_spec": [],
                                                                        "simple_wechat_canvas_spec": [],
                                                                        "wechat_consult_spec": [],
                                                                        "wecom_consult_spec": [],
                                                                        "wechat_official_account_detail_spec": [],
                                                                        "app_deep_link_spec": [],
                                                                        "app_market_spec": [],
                                                                        "android_direct_download_spec": [],
                                                                        "official_spec": [],
                                                                        "h5_profile_spec": [],
                                                                        "search_area_brand_spec": [],
                                                                        "wechat_channels_profile_spec": [],
                                                                        "h5_spec": [],
                                                                        "wechat_mini_game_spec": [],
                                                                        "wechat_channels_reserve_spec": [],
                                                                        "android_quick_app_spec": [],
                                                                        "wechat_channels_shop_product_spec": []
                                                                    }
                                                                }
                                                            }
                                                        },
                                                        "wechat_channels_reserve_spec": [],
                                                        "android_quick_app_spec": [],
                                                        "wechat_channels_shop_product_spec": [],
                                                        "wechat_shop_spec": [],
                                                        "wechat_channels_watch_live_spec": [],
                                                        "harmony_app_spec": [],
                                                        "wechat_channels_activity_spec": []
                                                    }
                                                }
                                            ]
                                        }
                                    }
                                ]
                            }
                        },
                        "is_deleted": false
                    },
                    "image_showcase": {
                        "value": {
                            "image": {
                                "jump_info": {
                                    "page_spec": {
                                        "android_app_spec": [],
                                        "ios_app_spec": [],
                                        "xj_android_app_h5_spec": [],
                                        "xj_ios_app_h5_spec": [],
                                        "xj_web_h5_spec": [],
                                        "xj_quick_spec": [],
                                        "fengye_ecommmerce_spec": [],
                                        "wechat_canvas_spec": [],
                                        "wechat_mini_program_spec": {
                                            "mini_program_paths": []
                                        },
                                        "wechat_canvas_mini_program_spec": [],
                                        "qq_app_mini_program_spec": [],
                                        "qq_mini_game_spec": [],
                                        "simple_wechat_canvas_spec": [],
                                        "wechat_consult_spec": [],
                                        "wecom_consult_spec": [],
                                        "wechat_official_account_detail_spec": [],
                                        "app_deep_link_spec": [],
                                        "app_market_spec": [],
                                        "android_direct_download_spec": [],
                                        "official_spec": [],
                                        "h5_profile_spec": [],
                                        "search_area_brand_spec": [],
                                        "wechat_channels_profile_spec": [],
                                        "h5_spec": [],
                                        "wechat_mini_game_spec": [],
                                        "wechat_channels_feed_spec": {
                                            "action_button": {
                                                "jump_info": {
                                                    "page_spec": {
                                                        "android_app_spec": [],
                                                        "ios_app_spec": [],
                                                        "xj_android_app_h5_spec": [],
                                                        "xj_ios_app_h5_spec": [],
                                                        "xj_web_h5_spec": [],
                                                        "xj_quick_spec": [],
                                                        "fengye_ecommmerce_spec": [],
                                                        "wechat_canvas_spec": [],
                                                        "wechat_mini_program_spec": {
                                                            "mini_program_paths": []
                                                        },
                                                        "wechat_canvas_mini_program_spec": [],
                                                        "qq_app_mini_program_spec": [],
                                                        "simple_wechat_canvas_spec": [],
                                                        "wechat_consult_spec": [],
                                                        "wecom_consult_spec": [],
                                                        "wechat_official_account_detail_spec": [],
                                                        "app_deep_link_spec": [],
                                                        "app_market_spec": [],
                                                        "android_direct_download_spec": [],
                                                        "official_spec": [],
                                                        "h5_profile_spec": [],
                                                        "search_area_brand_spec": [],
                                                        "wechat_channels_profile_spec": [],
                                                        "h5_spec": [],
                                                        "wechat_mini_game_spec": [],
                                                        "wechat_channels_reserve_spec": [],
                                                        "android_quick_app_spec": [],
                                                        "wechat_channels_shop_product_spec": []
                                                    }
                                                }
                                            }
                                        },
                                        "wechat_channels_reserve_spec": [],
                                        "android_quick_app_spec": [],
                                        "wechat_channels_shop_product_spec": [],
                                        "wechat_shop_spec": [],
                                        "wechat_channels_watch_live_spec": [],
                                        "harmony_app_spec": [],
                                        "wechat_channels_activity_spec": []
                                    },
                                    "backups": [
                                        {
                                            "page_spec": {
                                                "android_app_spec": [],
                                                "ios_app_spec": [],
                                                "xj_android_app_h5_spec": [],
                                                "xj_ios_app_h5_spec": [],
                                                "xj_web_h5_spec": [],
                                                "xj_quick_spec": [],
                                                "fengye_ecommmerce_spec": [],
                                                "wechat_canvas_spec": [],
                                                "wechat_mini_program_spec": {
                                                    "mini_program_paths": []
                                                },
                                                "wechat_canvas_mini_program_spec": [],
                                                "qq_app_mini_program_spec": [],
                                                "qq_mini_game_spec": [],
                                                "simple_wechat_canvas_spec": [],
                                                "wechat_consult_spec": [],
                                                "wecom_consult_spec": [],
                                                "wechat_official_account_detail_spec": [],
                                                "app_deep_link_spec": [],
                                                "app_market_spec": [],
                                                "android_direct_download_spec": [],
                                                "official_spec": [],
                                                "h5_profile_spec": [],
                                                "search_area_brand_spec": [],
                                                "wechat_channels_profile_spec": [],
                                                "h5_spec": [],
                                                "wechat_mini_game_spec": [],
                                                "wechat_channels_feed_spec": {
                                                    "action_button": {
                                                        "jump_info": {
                                                            "page_spec": {
                                                                "android_app_spec": [],
                                                                "ios_app_spec": [],
                                                                "xj_android_app_h5_spec": [],
                                                                "xj_ios_app_h5_spec": [],
                                                                "xj_web_h5_spec": [],
                                                                "xj_quick_spec": [],
                                                                "fengye_ecommmerce_spec": [],
                                                                "wechat_canvas_spec": [],
                                                                "wechat_mini_program_spec": {
                                                                    "mini_program_paths": []
                                                                },
                                                                "wechat_canvas_mini_program_spec": [],
                                                                "qq_app_mini_program_spec": [],
                                                                "simple_wechat_canvas_spec": [],
                                                                "wechat_consult_spec": [],
                                                                "wecom_consult_spec": [],
                                                                "wechat_official_account_detail_spec": [],
                                                                "app_deep_link_spec": [],
                                                                "app_market_spec": [],
                                                                "android_direct_download_spec": [],
                                                                "official_spec": [],
                                                                "h5_profile_spec": [],
                                                                "search_area_brand_spec": [],
                                                                "wechat_channels_profile_spec": [],
                                                                "h5_spec": [],
                                                                "wechat_mini_game_spec": [],
                                                                "wechat_channels_reserve_spec": [],
                                                                "android_quick_app_spec": [],
                                                                "wechat_channels_shop_product_spec": []
                                                            }
                                                        }
                                                    }
                                                },
                                                "wechat_channels_reserve_spec": [],
                                                "android_quick_app_spec": [],
                                                "wechat_channels_shop_product_spec": [],
                                                "wechat_shop_spec": [],
                                                "wechat_channels_watch_live_spec": [],
                                                "harmony_app_spec": [],
                                                "wechat_channels_activity_spec": []
                                            }
                                        }
                                    ]
                                }
                            },
                            "image_list": {
                                "jump_info": {
                                    "page_spec": {
                                        "android_app_spec": [],
                                        "ios_app_spec": [],
                                        "xj_android_app_h5_spec": [],
                                        "xj_ios_app_h5_spec": [],
                                        "xj_web_h5_spec": [],
                                        "xj_quick_spec": [],
                                        "fengye_ecommmerce_spec": [],
                                        "wechat_canvas_spec": [],
                                        "wechat_mini_program_spec": {
                                            "mini_program_paths": []
                                        },
                                        "wechat_canvas_mini_program_spec": [],
                                        "qq_app_mini_program_spec": [],
                                        "qq_mini_game_spec": [],
                                        "simple_wechat_canvas_spec": [],
                                        "wechat_consult_spec": [],
                                        "wecom_consult_spec": [],
                                        "wechat_official_account_detail_spec": [],
                                        "app_deep_link_spec": [],
                                        "app_market_spec": [],
                                        "android_direct_download_spec": [],
                                        "official_spec": [],
                                        "h5_profile_spec": [],
                                        "search_area_brand_spec": [],
                                        "wechat_channels_profile_spec": [],
                                        "h5_spec": [],
                                        "wechat_mini_game_spec": [],
                                        "wechat_channels_feed_spec": {
                                            "action_button": {
                                                "jump_info": {
                                                    "page_spec": {
                                                        "android_app_spec": [],
                                                        "ios_app_spec": [],
                                                        "xj_android_app_h5_spec": [],
                                                        "xj_ios_app_h5_spec": [],
                                                        "xj_web_h5_spec": [],
                                                        "xj_quick_spec": [],
                                                        "fengye_ecommmerce_spec": [],
                                                        "wechat_canvas_spec": [],
                                                        "wechat_mini_program_spec": {
                                                            "mini_program_paths": []
                                                        },
                                                        "wechat_canvas_mini_program_spec": [],
                                                        "qq_app_mini_program_spec": [],
                                                        "simple_wechat_canvas_spec": [],
                                                        "wechat_consult_spec": [],
                                                        "wecom_consult_spec": [],
                                                        "wechat_official_account_detail_spec": [],
                                                        "app_deep_link_spec": [],
                                                        "app_market_spec": [],
                                                        "android_direct_download_spec": [],
                                                        "official_spec": [],
                                                        "h5_profile_spec": [],
                                                        "search_area_brand_spec": [],
                                                        "wechat_channels_profile_spec": [],
                                                        "h5_spec": [],
                                                        "wechat_mini_game_spec": [],
                                                        "wechat_channels_reserve_spec": [],
                                                        "android_quick_app_spec": [],
                                                        "wechat_channels_shop_product_spec": []
                                                    }
                                                }
                                            }
                                        },
                                        "wechat_channels_reserve_spec": [],
                                        "android_quick_app_spec": [],
                                        "wechat_channels_shop_product_spec": [],
                                        "wechat_shop_spec": [],
                                        "wechat_channels_watch_live_spec": [],
                                        "harmony_app_spec": [],
                                        "wechat_channels_activity_spec": []
                                    },
                                    "backups": [
                                        {
                                            "page_spec": {
                                                "android_app_spec": [],
                                                "ios_app_spec": [],
                                                "xj_android_app_h5_spec": [],
                                                "xj_ios_app_h5_spec": [],
                                                "xj_web_h5_spec": [],
                                                "xj_quick_spec": [],
                                                "fengye_ecommmerce_spec": [],
                                                "wechat_canvas_spec": [],
                                                "wechat_mini_program_spec": {
                                                    "mini_program_paths": []
                                                },
                                                "wechat_canvas_mini_program_spec": [],
                                                "qq_app_mini_program_spec": [],
                                                "qq_mini_game_spec": [],
                                                "simple_wechat_canvas_spec": [],
                                                "wechat_consult_spec": [],
                                                "wecom_consult_spec": [],
                                                "wechat_official_account_detail_spec": [],
                                                "app_deep_link_spec": [],
                                                "app_market_spec": [],
                                                "android_direct_download_spec": [],
                                                "official_spec": [],
                                                "h5_profile_spec": [],
                                                "search_area_brand_spec": [],
                                                "wechat_channels_profile_spec": [],
                                                "h5_spec": [],
                                                "wechat_mini_game_spec": [],
                                                "wechat_channels_feed_spec": {
                                                    "action_button": {
                                                        "jump_info": {
                                                            "page_spec": {
                                                                "android_app_spec": [],
                                                                "ios_app_spec": [],
                                                                "xj_android_app_h5_spec": [],
                                                                "xj_ios_app_h5_spec": [],
                                                                "xj_web_h5_spec": [],
                                                                "xj_quick_spec": [],
                                                                "fengye_ecommmerce_spec": [],
                                                                "wechat_canvas_spec": [],
                                                                "wechat_mini_program_spec": {
                                                                    "mini_program_paths": []
                                                                },
                                                                "wechat_canvas_mini_program_spec": [],
                                                                "qq_app_mini_program_spec": [],
                                                                "simple_wechat_canvas_spec": [],
                                                                "wechat_consult_spec": [],
                                                                "wecom_consult_spec": [],
                                                                "wechat_official_account_detail_spec": [],
                                                                "app_deep_link_spec": [],
                                                                "app_market_spec": [],
                                                                "android_direct_download_spec": [],
                                                                "official_spec": [],
                                                                "h5_profile_spec": [],
                                                                "search_area_brand_spec": [],
                                                                "wechat_channels_profile_spec": [],
                                                                "h5_spec": [],
                                                                "wechat_mini_game_spec": [],
                                                                "wechat_channels_reserve_spec": [],
                                                                "android_quick_app_spec": [],
                                                                "wechat_channels_shop_product_spec": []
                                                            }
                                                        }
                                                    }
                                                },
                                                "wechat_channels_reserve_spec": [],
                                                "android_quick_app_spec": [],
                                                "wechat_channels_shop_product_spec": [],
                                                "wechat_shop_spec": [],
                                                "wechat_channels_watch_live_spec": [],
                                                "harmony_app_spec": [],
                                                "wechat_channels_activity_spec": []
                                            }
                                        }
                                    ]
                                },
                                "list": [
                                    {
                                        "jump_info": {
                                            "page_spec": {
                                                "android_app_spec": [],
                                                "ios_app_spec": [],
                                                "xj_android_app_h5_spec": [],
                                                "xj_ios_app_h5_spec": [],
                                                "xj_web_h5_spec": [],
                                                "xj_quick_spec": [],
                                                "fengye_ecommmerce_spec": [],
                                                "wechat_canvas_spec": [],
                                                "wechat_mini_program_spec": {
                                                    "mini_program_paths": []
                                                },
                                                "wechat_canvas_mini_program_spec": [],
                                                "qq_app_mini_program_spec": [],
                                                "qq_mini_game_spec": [],
                                                "simple_wechat_canvas_spec": [],
                                                "wechat_consult_spec": [],
                                                "wecom_consult_spec": [],
                                                "wechat_official_account_detail_spec": [],
                                                "app_deep_link_spec": [],
                                                "app_market_spec": [],
                                                "android_direct_download_spec": [],
                                                "official_spec": [],
                                                "h5_profile_spec": [],
                                                "search_area_brand_spec": [],
                                                "wechat_channels_profile_spec": [],
                                                "h5_spec": [],
                                                "wechat_mini_game_spec": [],
                                                "wechat_channels_feed_spec": {
                                                    "action_button": {
                                                        "jump_info": {
                                                            "page_spec": {
                                                                "android_app_spec": [],
                                                                "ios_app_spec": [],
                                                                "xj_android_app_h5_spec": [],
                                                                "xj_ios_app_h5_spec": [],
                                                                "xj_web_h5_spec": [],
                                                                "xj_quick_spec": [],
                                                                "fengye_ecommmerce_spec": [],
                                                                "wechat_canvas_spec": [],
                                                                "wechat_mini_program_spec": {
                                                                    "mini_program_paths": []
                                                                },
                                                                "wechat_canvas_mini_program_spec": [],
                                                                "qq_app_mini_program_spec": [],
                                                                "simple_wechat_canvas_spec": [],
                                                                "wechat_consult_spec": [],
                                                                "wecom_consult_spec": [],
                                                                "wechat_official_account_detail_spec": [],
                                                                "app_deep_link_spec": [],
                                                                "app_market_spec": [],
                                                                "android_direct_download_spec": [],
                                                                "official_spec": [],
                                                                "h5_profile_spec": [],
                                                                "search_area_brand_spec": [],
                                                                "wechat_channels_profile_spec": [],
                                                                "h5_spec": [],
                                                                "wechat_mini_game_spec": [],
                                                                "wechat_channels_reserve_spec": [],
                                                                "android_quick_app_spec": [],
                                                                "wechat_channels_shop_product_spec": []
                                                            }
                                                        }
                                                    }
                                                },
                                                "wechat_channels_reserve_spec": [],
                                                "android_quick_app_spec": [],
                                                "wechat_channels_shop_product_spec": [],
                                                "wechat_shop_spec": [],
                                                "wechat_channels_watch_live_spec": [],
                                                "harmony_app_spec": [],
                                                "wechat_channels_activity_spec": []
                                            },
                                            "backups": [
                                                {
                                                    "page_spec": {
                                                        "android_app_spec": [],
                                                        "ios_app_spec": [],
                                                        "xj_android_app_h5_spec": [],
                                                        "xj_ios_app_h5_spec": [],
                                                        "xj_web_h5_spec": [],
                                                        "xj_quick_spec": [],
                                                        "fengye_ecommmerce_spec": [],
                                                        "wechat_canvas_spec": [],
                                                        "wechat_mini_program_spec": {
                                                            "mini_program_paths": []
                                                        },
                                                        "wechat_canvas_mini_program_spec": [],
                                                        "qq_app_mini_program_spec": [],
                                                        "qq_mini_game_spec": [],
                                                        "simple_wechat_canvas_spec": [],
                                                        "wechat_consult_spec": [],
                                                        "wecom_consult_spec": [],
                                                        "wechat_official_account_detail_spec": [],
                                                        "app_deep_link_spec": [],
                                                        "app_market_spec": [],
                                                        "android_direct_download_spec": [],
                                                        "official_spec": [],
                                                        "h5_profile_spec": [],
                                                        "search_area_brand_spec": [],
                                                        "wechat_channels_profile_spec": [],
                                                        "h5_spec": [],
                                                        "wechat_mini_game_spec": [],
                                                        "wechat_channels_feed_spec": {
                                                            "action_button": {
                                                                "jump_info": {
                                                                    "page_spec": {
                                                                        "android_app_spec": [],
                                                                        "ios_app_spec": [],
                                                                        "xj_android_app_h5_spec": [],
                                                                        "xj_ios_app_h5_spec": [],
                                                                        "xj_web_h5_spec": [],
                                                                        "xj_quick_spec": [],
                                                                        "fengye_ecommmerce_spec": [],
                                                                        "wechat_canvas_spec": [],
                                                                        "wechat_mini_program_spec": {
                                                                            "mini_program_paths": []
                                                                        },
                                                                        "wechat_canvas_mini_program_spec": [],
                                                                        "qq_app_mini_program_spec": [],
                                                                        "simple_wechat_canvas_spec": [],
                                                                        "wechat_consult_spec": [],
                                                                        "wecom_consult_spec": [],
                                                                        "wechat_official_account_detail_spec": [],
                                                                        "app_deep_link_spec": [],
                                                                        "app_market_spec": [],
                                                                        "android_direct_download_spec": [],
                                                                        "official_spec": [],
                                                                        "h5_profile_spec": [],
                                                                        "search_area_brand_spec": [],
                                                                        "wechat_channels_profile_spec": [],
                                                                        "h5_spec": [],
                                                                        "wechat_mini_game_spec": [],
                                                                        "wechat_channels_reserve_spec": [],
                                                                        "android_quick_app_spec": [],
                                                                        "wechat_channels_shop_product_spec": []
                                                                    }
                                                                }
                                                            }
                                                        },
                                                        "wechat_channels_reserve_spec": [],
                                                        "android_quick_app_spec": [],
                                                        "wechat_channels_shop_product_spec": [],
                                                        "wechat_shop_spec": [],
                                                        "wechat_channels_watch_live_spec": [],
                                                        "harmony_app_spec": [],
                                                        "wechat_channels_activity_spec": []
                                                    }
                                                }
                                            ]
                                        }
                                    }
                                ]
                            }
                        },
                        "is_deleted": false
                    },
                    "social_skill": {
                        "value": [],
                        "is_deleted": false
                    },
                    "mini_card_link": {
                        "value": {
                            "jump_info": {
                                "page_spec": {
                                    "android_app_spec": [],
                                    "ios_app_spec": [],
                                    "xj_android_app_h5_spec": [],
                                    "xj_ios_app_h5_spec": [],
                                    "xj_web_h5_spec": [],
                                    "xj_quick_spec": [],
                                    "fengye_ecommmerce_spec": [],
                                    "wechat_canvas_spec": [],
                                    "wechat_mini_program_spec": {
                                        "mini_program_paths": []
                                    },
                                    "wechat_canvas_mini_program_spec": [],
                                    "qq_app_mini_program_spec": [],
                                    "qq_mini_game_spec": [],
                                    "simple_wechat_canvas_spec": [],
                                    "wechat_consult_spec": [],
                                    "wecom_consult_spec": [],
                                    "wechat_official_account_detail_spec": [],
                                    "app_deep_link_spec": [],
                                    "app_market_spec": [],
                                    "android_direct_download_spec": [],
                                    "official_spec": [],
                                    "h5_profile_spec": [],
                                    "search_area_brand_spec": [],
                                    "wechat_channels_profile_spec": [],
                                    "h5_spec": [],
                                    "wechat_mini_game_spec": [],
                                    "wechat_channels_feed_spec": {
                                        "action_button": {
                                            "jump_info": {
                                                "page_spec": {
                                                    "android_app_spec": [],
                                                    "ios_app_spec": [],
                                                    "xj_android_app_h5_spec": [],
                                                    "xj_ios_app_h5_spec": [],
                                                    "xj_web_h5_spec": [],
                                                    "xj_quick_spec": [],
                                                    "fengye_ecommmerce_spec": [],
                                                    "wechat_canvas_spec": [],
                                                    "wechat_mini_program_spec": {
                                                        "mini_program_paths": []
                                                    },
                                                    "wechat_canvas_mini_program_spec": [],
                                                    "qq_app_mini_program_spec": [],
                                                    "simple_wechat_canvas_spec": [],
                                                    "wechat_consult_spec": [],
                                                    "wecom_consult_spec": [],
                                                    "wechat_official_account_detail_spec": [],
                                                    "app_deep_link_spec": [],
                                                    "app_market_spec": [],
                                                    "android_direct_download_spec": [],
                                                    "official_spec": [],
                                                    "h5_profile_spec": [],
                                                    "search_area_brand_spec": [],
                                                    "wechat_channels_profile_spec": [],
                                                    "h5_spec": [],
                                                    "wechat_mini_game_spec": [],
                                                    "wechat_channels_reserve_spec": [],
                                                    "android_quick_app_spec": [],
                                                    "wechat_channels_shop_product_spec": []
                                                }
                                            }
                                        }
                                    },
                                    "wechat_channels_reserve_spec": [],
                                    "android_quick_app_spec": [],
                                    "wechat_channels_shop_product_spec": [],
                                    "wechat_shop_spec": [],
                                    "wechat_channels_watch_live_spec": [],
                                    "harmony_app_spec": [],
                                    "wechat_channels_activity_spec": []
                                },
                                "backups": [
                                    {
                                        "page_spec": {
                                            "android_app_spec": [],
                                            "ios_app_spec": [],
                                            "xj_android_app_h5_spec": [],
                                            "xj_ios_app_h5_spec": [],
                                            "xj_web_h5_spec": [],
                                            "xj_quick_spec": [],
                                            "fengye_ecommmerce_spec": [],
                                            "wechat_canvas_spec": [],
                                            "wechat_mini_program_spec": {
                                                "mini_program_paths": []
                                            },
                                            "wechat_canvas_mini_program_spec": [],
                                            "qq_app_mini_program_spec": [],
                                            "qq_mini_game_spec": [],
                                            "simple_wechat_canvas_spec": [],
                                            "wechat_consult_spec": [],
                                            "wecom_consult_spec": [],
                                            "wechat_official_account_detail_spec": [],
                                            "app_deep_link_spec": [],
                                            "app_market_spec": [],
                                            "android_direct_download_spec": [],
                                            "official_spec": [],
                                            "h5_profile_spec": [],
                                            "search_area_brand_spec": [],
                                            "wechat_channels_profile_spec": [],
                                            "h5_spec": [],
                                            "wechat_mini_game_spec": [],
                                            "wechat_channels_feed_spec": {
                                                "action_button": {
                                                    "jump_info": {
                                                        "page_spec": {
                                                            "android_app_spec": [],
                                                            "ios_app_spec": [],
                                                            "xj_android_app_h5_spec": [],
                                                            "xj_ios_app_h5_spec": [],
                                                            "xj_web_h5_spec": [],
                                                            "xj_quick_spec": [],
                                                            "fengye_ecommmerce_spec": [],
                                                            "wechat_canvas_spec": [],
                                                            "wechat_mini_program_spec": {
                                                                "mini_program_paths": []
                                                            },
                                                            "wechat_canvas_mini_program_spec": [],
                                                            "qq_app_mini_program_spec": [],
                                                            "simple_wechat_canvas_spec": [],
                                                            "wechat_consult_spec": [],
                                                            "wecom_consult_spec": [],
                                                            "wechat_official_account_detail_spec": [],
                                                            "app_deep_link_spec": [],
                                                            "app_market_spec": [],
                                                            "android_direct_download_spec": [],
                                                            "official_spec": [],
                                                            "h5_profile_spec": [],
                                                            "search_area_brand_spec": [],
                                                            "wechat_channels_profile_spec": [],
                                                            "h5_spec": [],
                                                            "wechat_mini_game_spec": [],
                                                            "wechat_channels_reserve_spec": [],
                                                            "android_quick_app_spec": [],
                                                            "wechat_channels_shop_product_spec": []
                                                        }
                                                    }
                                                }
                                            },
                                            "wechat_channels_reserve_spec": [],
                                            "android_quick_app_spec": [],
                                            "wechat_channels_shop_product_spec": [],
                                            "wechat_shop_spec": [],
                                            "wechat_channels_watch_live_spec": [],
                                            "harmony_app_spec": [],
                                            "wechat_channels_activity_spec": []
                                        }
                                    }
                                ]
                            }
                        },
                        "is_deleted": false
                    },
                    "floating_zone_list": {
                        "value": {
                            "list": [
                                {
                                    "jump_info": {
                                        "page_spec": {
                                            "android_app_spec": [],
                                            "ios_app_spec": [],
                                            "xj_android_app_h5_spec": [],
                                            "xj_ios_app_h5_spec": [],
                                            "xj_web_h5_spec": [],
                                            "xj_quick_spec": [],
                                            "fengye_ecommmerce_spec": [],
                                            "wechat_canvas_spec": [],
                                            "wechat_mini_program_spec": {
                                                "mini_program_paths": []
                                            },
                                            "wechat_canvas_mini_program_spec": [],
                                            "qq_app_mini_program_spec": [],
                                            "qq_mini_game_spec": [],
                                            "simple_wechat_canvas_spec": [],
                                            "wechat_consult_spec": [],
                                            "wecom_consult_spec": [],
                                            "wechat_official_account_detail_spec": [],
                                            "app_deep_link_spec": [],
                                            "app_market_spec": [],
                                            "android_direct_download_spec": [],
                                            "official_spec": [],
                                            "h5_profile_spec": [],
                                            "search_area_brand_spec": [],
                                            "wechat_channels_profile_spec": [],
                                            "h5_spec": [],
                                            "wechat_mini_game_spec": [],
                                            "wechat_channels_feed_spec": {
                                                "action_button": {
                                                    "jump_info": {
                                                        "page_spec": {
                                                            "android_app_spec": [],
                                                            "ios_app_spec": [],
                                                            "xj_android_app_h5_spec": [],
                                                            "xj_ios_app_h5_spec": [],
                                                            "xj_web_h5_spec": [],
                                                            "xj_quick_spec": [],
                                                            "fengye_ecommmerce_spec": [],
                                                            "wechat_canvas_spec": [],
                                                            "wechat_mini_program_spec": {
                                                                "mini_program_paths": []
                                                            },
                                                            "wechat_canvas_mini_program_spec": [],
                                                            "qq_app_mini_program_spec": [],
                                                            "simple_wechat_canvas_spec": [],
                                                            "wechat_consult_spec": [],
                                                            "wecom_consult_spec": [],
                                                            "wechat_official_account_detail_spec": [],
                                                            "app_deep_link_spec": [],
                                                            "app_market_spec": [],
                                                            "android_direct_download_spec": [],
                                                            "official_spec": [],
                                                            "h5_profile_spec": [],
                                                            "search_area_brand_spec": [],
                                                            "wechat_channels_profile_spec": [],
                                                            "h5_spec": [],
                                                            "wechat_mini_game_spec": [],
                                                            "wechat_channels_reserve_spec": [],
                                                            "android_quick_app_spec": [],
                                                            "wechat_channels_shop_product_spec": []
                                                        }
                                                    }
                                                }
                                            },
                                            "wechat_channels_reserve_spec": [],
                                            "android_quick_app_spec": [],
                                            "wechat_channels_shop_product_spec": [],
                                            "wechat_shop_spec": [],
                                            "wechat_channels_watch_live_spec": [],
                                            "harmony_app_spec": [],
                                            "wechat_channels_activity_spec": []
                                        },
                                        "backups": [
                                            {
                                                "page_spec": {
                                                    "android_app_spec": [],
                                                    "ios_app_spec": [],
                                                    "xj_android_app_h5_spec": [],
                                                    "xj_ios_app_h5_spec": [],
                                                    "xj_web_h5_spec": [],
                                                    "xj_quick_spec": [],
                                                    "fengye_ecommmerce_spec": [],
                                                    "wechat_canvas_spec": [],
                                                    "wechat_mini_program_spec": {
                                                        "mini_program_paths": []
                                                    },
                                                    "wechat_canvas_mini_program_spec": [],
                                                    "qq_app_mini_program_spec": [],
                                                    "qq_mini_game_spec": [],
                                                    "simple_wechat_canvas_spec": [],
                                                    "wechat_consult_spec": [],
                                                    "wecom_consult_spec": [],
                                                    "wechat_official_account_detail_spec": [],
                                                    "app_deep_link_spec": [],
                                                    "app_market_spec": [],
                                                    "android_direct_download_spec": [],
                                                    "official_spec": [],
                                                    "h5_profile_spec": [],
                                                    "search_area_brand_spec": [],
                                                    "wechat_channels_profile_spec": [],
                                                    "h5_spec": [],
                                                    "wechat_mini_game_spec": [],
                                                    "wechat_channels_feed_spec": {
                                                        "action_button": {
                                                            "jump_info": {
                                                                "page_spec": {
                                                                    "android_app_spec": [],
                                                                    "ios_app_spec": [],
                                                                    "xj_android_app_h5_spec": [],
                                                                    "xj_ios_app_h5_spec": [],
                                                                    "xj_web_h5_spec": [],
                                                                    "xj_quick_spec": [],
                                                                    "fengye_ecommmerce_spec": [],
                                                                    "wechat_canvas_spec": [],
                                                                    "wechat_mini_program_spec": {
                                                                        "mini_program_paths": []
                                                                    },
                                                                    "wechat_canvas_mini_program_spec": [],
                                                                    "qq_app_mini_program_spec": [],
                                                                    "simple_wechat_canvas_spec": [],
                                                                    "wechat_consult_spec": [],
                                                                    "wecom_consult_spec": [],
                                                                    "wechat_official_account_detail_spec": [],
                                                                    "app_deep_link_spec": [],
                                                                    "app_market_spec": [],
                                                                    "android_direct_download_spec": [],
                                                                    "official_spec": [],
                                                                    "h5_profile_spec": [],
                                                                    "search_area_brand_spec": [],
                                                                    "wechat_channels_profile_spec": [],
                                                                    "h5_spec": [],
                                                                    "wechat_mini_game_spec": [],
                                                                    "wechat_channels_reserve_spec": [],
                                                                    "android_quick_app_spec": [],
                                                                    "wechat_channels_shop_product_spec": []
                                                                }
                                                            }
                                                        }
                                                    },
                                                    "wechat_channels_reserve_spec": [],
                                                    "android_quick_app_spec": [],
                                                    "wechat_channels_shop_product_spec": [],
                                                    "wechat_shop_spec": [],
                                                    "wechat_channels_watch_live_spec": [],
                                                    "harmony_app_spec": [],
                                                    "wechat_channels_activity_spec": []
                                                }
                                            }
                                        ]
                                    }
                                }
                            ]
                        },
                        "is_deleted": false
                    },
                    "video_channels_content": {
                        "value": [],
                        "is_deleted": false
                    },
                    "wxgame_direct_page": {
                        "value": [],
                        "is_deleted": false
                    },
                    "video_list": {
                        "value": {
                            "list": []
                        },
                        "is_deleted": false
                    }
                },
                "created_time": 1491019858,
                "last_modified_time": 1491098468,
                "is_deleted": false
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
