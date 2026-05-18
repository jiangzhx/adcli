---
title: 获取创意形式详情 全部接口
platform: tencent_ads
source_url: https://developers.e.qq.com/v3.0/docs/api/creative_template/get
doc_id: tencent_ads_v3_0_docs_api_creative_template_get
source_id: tencent_ads_v3_0_docs_api_creative_template_get
---
# 获取创意形式详情 [全部接口](https://developers.e.qq.com/v3.0/docs/apilist)

| 所属权限 | ads_management,ads_insights |
| --- | --- |
| 请求地址 | creative_template/get |
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
| marketing_goal* | enum | 营销目的类型，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#api_marketing_goal) 可选值：{ MARKETING_GOAL_UNKNOWN, MARKETING_GOAL_USER_GROWTH, MARKETING_GOAL_PRODUCT_SALES, MARKETING_GOAL_LEAD_RETENTION, MARKETING_GOAL_BRAND_PROMOTION, MARKETING_GOAL_INCREASE_FANS_INTERACTION } |
| marketing_sub_goal | enum | 二级营销目的类型，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#api_marketing_sub_goal) 可选值：{ MARKETING_SUB_GOAL_UNKNOWN, MARKETING_SUB_GOAL_NEW_GAME_RESERVE, MARKETING_SUB_GOAL_NEW_GAME_TEST, MARKETING_SUB_GOAL_NEW_GAME_LAUNCH, MARKETING_SUB_GOAL_PLATEAU_PHASE_LAUNCH, MARKETING_SUB_GOAL_MINI_GAME_NEW_CUSTOMER_GROWTH, MARKETING_SUB_GOAL_MINI_GAME_RETURN_CUSTOMER_ENGAGEMENT, MARKETING_SUB_GOAL_APP_ACQUISITION, MARKETING_SUB_GOAL_APP_ACTIVATION, MARKETING_SUB_GOAL_NOT_INSTALL_USER, MARKETING_SUB_GOAL_PRE_INSTALL_USER, MARKETING_SUB_GOAL_UNLOADED_USER, MARKETING_SUB_GOAL_SHORT_INACTIVE_USER, MARKETING_SUB_GOAL_LONG_INACTIVE_USER, MARKETING_SUB_GOAL_GAME_VERSION_UPGRADE, MARKETING_SUB_GOAL_NEW_STORE_OPENING, MARKETING_SUB_GOAL_EVENING_PROMOTION, MARKETING_SUB_GOAL_SPECIAL_RELEASE } |
| marketing_target_type* | enum | 推广产品类型，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#api_marketing_target_type) 可选值：{ MARKETING_TARGET_TYPE_APP_ANDROID, MARKETING_TARGET_TYPE_APP_IOS, MARKETING_TARGET_TYPE_WECHAT_OFFICIAL_ACCOUNT, MARKETING_TARGET_TYPE_PRODUCT, MARKETING_TARGET_TYPE_TRAFFIC, MARKETING_TARGET_TYPE_LOCAL_STORE, MARKETING_TARGET_TYPE_WECHAT_MINI_GAME, MARKETING_TARGET_TYPE_CONSUMER_PRODUCT, MARKETING_TARGET_TYPE_WECHAT_CHANNELS, MARKETING_TARGET_TYPE_WECHAT_CHANNELS_LIVE, MARKETING_TARGET_TYPE_WECHAT_CHANNELS_LIVE_RESERVATION, MARKETING_TARGET_TYPE_MINI_PROGRAM_WECHAT, MARKETING_TARGET_TYPE_APP_QUICK_APP, MARKETING_TARGET_TYPE_CONSUME_MEDICAL, MARKETING_TARGET_TYPE_COMPREHENSIVE_HOUSEKEEPING, MARKETING_TARGET_TYPE_FICTION, MARKETING_TARGET_TYPE_SHORT_DRAMA, MARKETING_TARGET_TYPE_AUDIOVISUAL_ENTERTAINMENT, MARKETING_TARGET_TYPE_BEAUTY_AND_PERSONAL_CARE, MARKETING_TARGET_TYPE_WEDDING_AND_PORTRAIT_PHOTOGRAPHY, MARKETING_TARGET_TYPE_FRANCHISE_BRAND, MARKETING_TARGET_TYPE_ENTERPRISE_SERVICES, MARKETING_TARGET_TYPE_EXHIBITION_BOOTH_DESIGN, MARKETING_TARGET_TYPE_INSURANCE, MARKETING_TARGET_TYPE_BANK, MARKETING_TARGET_TYPE_CREDIT, MARKETING_TARGET_TYPE_INVESTMENT_CONSULTING, MARKETING_TARGET_TYPE_REAL_ESTATE, MARKETING_TARGET_TYPE_TELECOMMUNICATIONS_OPERATOR, MARKETING_TARGET_TYPE_TOURIST_ATTRACTIONS_TICKETS, MARKETING_TARGET_TYPE_RENOVATION_SERVICES, MARKETING_TARGET_TYPE_FURNITURE_AND_BUILDING_MATERIALS, MARKETING_TARGET_TYPE_EXHIBITION_SALES, MARKETING_TARGET_TYPE_MEDICINE_INDUSTRY_COMMERCIAL, MARKETING_TARGET_TYPE_FINANCE, MARKETING_TARGET_TYPE_LOCAL_STORE_PACKAGE, MARKETING_TARGET_TYPE_CATERING_AND_LEISURE, MARKETING_TARGET_TYPE_CHAIN_RESTAURANT, MARKETING_TARGET_TYPE_COMMODITY_SET, MARKETING_TARGET_TYPE_TOURIST_TRAVEL_ROUTE, MARKETING_TARGET_TYPE_TOURIST_CRUISE_LINE, MARKETING_TARGET_TYPE_TOURIST_HOTEL_SERVICE, MARKETING_TARGET_TYPE_TOURIST_AIRLINE_TICKETS, MARKETING_TARGET_TYPE_LOCAL_STORE_COMBINE_WITH_PRODUCT, MARKETING_TARGET_TYPE_ACTIVITY, MARKETING_TARGET_TYPE_STORE, MARKETING_TARGET_TYPE_MINI_GAME_QQ, MARKETING_TARGET_TYPE_PC_GAME, MARKETING_TARGET_TYPE_WECHAT_WORK, MARKETING_TARGET_TYPE_LIVE_STREAM_ROOM, MARKETING_TARGET_TYPE_PERSONAL_STORE, MARKETING_TARGET_TYPE_PLATFORM_CHANNEL, MARKETING_TARGET_TYPE_TWO_WHEEL_VEHICLE, MARKETING_TARGET_TYPE_GOVERNMENT_AFFAIRS, MARKETING_TARGET_TYPE_CAR_ECOLOGY, MARKETING_TARGET_TYPE_WECHAT_STORE_PRODUCT, MARKETING_TARGET_TYPE_APP_HARMONY, MARKETING_TARGET_TYPE_WECHAT_STORE_PRODUCT_SET, MARKETING_TARGET_TYPE_PRODUCT_AGGREGATION_PAGE, MARKETING_TARGET_TYPE_WECHAT_STORE, MARKETING_TARGET_TYPE_RESALE_AND_COMMERCIAL_LAND, MARKETING_TARGET_TYPE_VIDEO_PROGRAM, MARKETING_TARGET_TYPE_FUN_TEST, MARKETING_TARGET_TYPE_MATERNITY_PARENTING, MARKETING_TARGET_TYPE_LEISURE_ENTERTAINMENT, MARKETING_TARGET_TYPE_MEDICAL_INSTITUTION, MARKETING_TARGET_TYPE_WECHAT_CHANNELS_ACTIVITY } |
| marketing_carrier_type* | enum | 营销载体类型，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#api_marketing_carrier_type) 可选值：{ MARKETING_CARRIER_TYPE_UNKNOWN, MARKETING_CARRIER_TYPE_APP_ANDROID, MARKETING_CARRIER_TYPE_APP_IOS, MARKETING_CARRIER_TYPE_WECHAT_OFFICIAL_ACCOUNT, MARKETING_CARRIER_TYPE_JUMP_PAGE, MARKETING_CARRIER_TYPE_WECHAT_MINI_GAME, MARKETING_CARRIER_TYPE_WECHAT_CHANNELS_LIVE, MARKETING_CARRIER_TYPE_WECHAT_CHANNELS, MARKETING_CARRIER_TYPE_WECHAT_CHANNELS_LIVE_RESERVATION, MARKETING_CARRIER_TYPE_MINI_PROGRAM_WECHAT, MARKETING_CARRIER_TYPE_APP_QUICK_APP, MARKETING_CARRIER_TYPE_PC_GAME, MARKETING_CARRIER_TYPE_QQ_MINI_GAME, MARKETING_CARRIER_TYPE_APP_HARMONY } |
| automatic_site_enabled | boolean | 是否开启智能版位功能，建议使用。ADX 程序化广告不可填写提交。 可选值：{ true, false } |
| site_set | enum[] | 投放站点集合，当前单站点或者 SITE_SET_TENCENT_NEWS+SITE_SET_TENCENT_VIDEO 的组合，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#api_site_set_definition) 数组最小长度 1，最大长度 32 可选值：{ SITE_SET_MOBILE_UNION, SITE_SET_WECHAT, SITE_SET_TENCENT_NEWS, SITE_SET_TENCENT_VIDEO, SITE_SET_MOBILE_YYB, SITE_SET_PCQQ, SITE_SET_KANDIAN, SITE_SET_QQ_MUSIC_GAME, SITE_SET_MOMENTS, SITE_SET_CHANNELS, SITE_SET_WECHAT_SEARCH, SITE_SET_WECHAT_PLUGIN, SITE_SET_QBSEARCH, SITE_SET_SEARCH_SCENE, SITE_SET_SEARCH_MOBILE_UNION, SITE_SET_SMART } |
| delivery_mode* | enum | 投放模式，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#delivery_mode) 可选值：{ DELIVERY_MODE_COMPONENT, DELIVERY_MODE_CUSTOMIZE } |
| dynamic_creative_type | enum | 动态创意类型，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#dynamic_creative_type) 可选值：{ DYNAMIC_CREATIVE_TYPE_COMMON, DYNAMIC_CREATIVE_TYPE_PROGRAM } |
| creative_template_id | integer | 创意形式 id，具体请咨询您的运营接口人 |
| use_new_version | boolean | 是否使用新版本，新版本返回 creative_permissions 结构 可选值：{ true, false } |
| adgroup_type | enum | 广告类型，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#adgroup_type) 可选值：{ ADGROUP_TYPE_SEARCH, ADGROUP_TYPE_NORMAL } |

## 请求示例

```
curl -v -G 'https://api.e.qq.com/v3.0/creative_template/get?access_token=<ACCESS_TOKEN>&timestamp=<TIMESTAMP>&nonce=<NONCE>' \
-d 'account_id=<ACCOUNT_ID>' \
-d 'site_set=[]'
curl -v -G 'https://api.e.qq.com/v3.0/creative_template/get?access_token=<ACCESS_TOKEN>&timestamp=<TIMESTAMP>&nonce=<NONCE>' \
-d 'account_id=<ACCOUNT_ID>' \
-d 'site_set=[]'
```

## 应答字段

| 名称 | 类型 | 描述 |
| --- | --- | --- |
| list | struct[] | 创意形式列表 |
| creative_template_id | integer | 创意形式 id，具体请咨询您的运营接口人 |
| creative_template_style | string | 创意形式类型 |
| creative_template_appellation | string | 创意形式名称 |
| creative_sample_image | string | 创意形式示意图链接 |
| site_set | enum[] | 投放站点集合，当前单站点或者 SITE_SET_TENCENT_NEWS+SITE_SET_TENCENT_VIDEO 的组合，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#api_site_set_definition) |
| creative_components | struct[] | 创意组件列表 |
| name | string | 元素字段名，创意接口要求的 creative_components 结构中的元素字段名，如 image、title 等 |
| element_type | enum | 创意元素类型，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#api_element_type) |
| field_type | enum | 创意元素传参类型，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#api_field_type) |
| required | boolean | 创意元素是否必填，true 或 false |
| description | string | 组件元素的描述，如图片、广告文案等 |
| parent_name | string | 创意元素父节点名称，父节点的 name 字段 |
| enum_property | struct | 广告创意元素枚举值特性 |
| default | string | 创意元素默认枚举值 |
| enumeration | struct[] | 创意元素枚举可选值数组 |
| value | string | 创意元素枚举可选值 |
| description | string | 创意元素枚举可选值描述 |
| category | string | 默认值：创意元素枚举可选值适用范围 |
| array_property | struct | 广告创意元素数组特性 |
| min_number | integer | 广告创意元素数组个数最小值 |
| max_number | integer | 广告创意元素数组个数最大值 |
| struct_property | struct | 广告创意元素结构体特性 |
| element_mutual_exclusive | boolean | 结构体中元素是否互斥，true: 是，仅能使用结构体中的一个元素字段； false: 否 |
| restriction | struct | 广告创意元素需满足的限制条件 |
| text_restriction | struct | 文本需满足的限制条件，仅当 element_type 是 ELEMENT_TYPE_TEXT 时返回 |
| min_length | integer | 最小长度，文本类型适用 |
| max_length | integer | 最大长度，文本类型适用 |
| text_pattern | string | text 的正则表达式 |
| image_restriction | struct | 图片需满足的限制条件，仅当 element_type 是 ELEMENT_TYPE_IMAGE_ARRAY 或 ELEMENT_TYPE_IMAGE 时返回 |
| width | integer | 宽度，单位 px，图片适用 |
| height | integer | 高度，单位 px，图片适用 |
| file_size | integer | 支持的文件大小最大值，单位 KB，1KB=1024B, 图片、视频适用 |
| file_format | enum[] | 支持的图片文件格式数组，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#api_image_type) |
| url_restriction | struct | 链接需满足的限制条件，仅当 element_type 是 ELEMENT_TYPE_URL 时返回 |
| url_pattern | string | url 的正则表达式 |
| video_restriction | struct | 视频需满足的限制条件，仅当 element_type 是 ELEMENT_TYPE_VIDEO 时返回 |
| width | integer | 宽度，单位 px，视频适用，ratio_width、ratio_height、min_width、min_height 与 width、height 不同时返回 |
| height | integer | 高度，单位 px，视频适用，ratio_width、ratio_height、min_width、min_height 与 width、height 不同时返回 |
| min_width | integer | 最小宽度，单位 px，视频适用，ratio_width、ratio_height、min_width、min_height 与 width、height 不同时返回 |
| min_height | integer | 最小高度，单位 px，视频适用，ratio_width、ratio_height、min_width、min_height 与 width、height 不同时返回 |
| ratio_width | integer | 宽比例，视频比例=ratio_width：ratio_height，ratio_width、ratio_height、min_width、min_height 与 width、height 不同时返回 |
| ratio_height | integer | 高比例，视频比例=ratio_width：ratio_height，ratio_width、ratio_height、min_width、min_height 与 width、height 不同时返回 |
| file_size | integer | 支持的文件大小最大值，单位 KB，1KB=1024B, 图片、视频适用 |
| file_format | enum[] | 支持的流媒体文件格式数组，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#component_media_type) |
| min_duration | integer | 最小时长，单位秒，视频适用 |
| max_duration | integer | 最大时长，单位秒，视频适用 |
| number_restriction | struct | 数值型需满足的限制条件，仅当 element_type 是 ELEMENT_TYPE_INTEGER 时返回 |
| min | integer | 最小长度，文本类型适用 |
| max | integer | 最大长度，文本类型适用 |
| link_name_text_restrictions | struct[] | 文字链模板文案列表，文字链文案类型为文字链模板时，link_name_text 需要按照模板文案列表正则进行传参 |
| min_length | integer | 最小长度，文本类型适用 |
| max_length | integer | 最大长度，文本类型适用 |
| text_pattern | string | text 的正则表达式 |
| link_name_text_template | string | 文字链模板文案 |
| path | string | 元素路径名称，创意接口要求的 creative_components 结构中的元素路径 |
| unsupport_siteset_detail_spec | struct[] | 不支持播放的版位信息列表 |
| site_set | enum[] | 投放站点集合，当前单站点或者 SITE_SET_TENCENT_NEWS+SITE_SET_TENCENT_VIDEO 的组合，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#api_site_set_definition) |
| support_dynamic_ability_spec_list | struct | 动态广告支持情况 |
| dynamic_ability_type | enum[] | 动态广告投放能力类型，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#api_dynamic_ability_type) |
| product_item_display_quantity | enum[] | 在该规格位置上单个广告上的创意可展示商品数量，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#api_product_item_display_quantity) |
| support_mpa | boolean | 是否支持多商品广告 MPA，true: 支持； false: 不支持 |
| support_mpa_image_template | boolean | 是否支持 MPA 图片模版，true: 支持； false: 不支持 |
| support_mpa_video_template | boolean | 是否支持 MPA 视频模版，true: 支持； false: 不支持 |
| creative_permissions | struct | 创意形式详情 |
| creative_components | struct[] | 创意组件数据列表 |
| name | string | 创意组件参数名称 |
| desc | string | 描述 |
| valid | struct | 创意组件字段结构 |
| required | boolean | 当前字段是否为必填 |
| min_occurs | integer | 支持最小数量 |
| max_occurs | integer | 支持最大数量 |
| has_depend | boolean | 组件可用项是否存在依赖 |
| component_type | enum | 创意组件类型，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#component_type) |
| component_sub_type_options | struct[] | 创意组件数据列表 |
| component_sub_type | enum | 创意组件子类型，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#component_sub_type) |
| value_field | struct[] | 创意组件元数据字段列表 |
| name | string | 创意组件参数名称 |
| desc | string | 描述 |
| type | enum | 创意组件字段类型，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#component_metadata_field_type) |
| structure | struct[] | 创意组件数据字段列表 |
| name | string | 创意组件参数名称 |
| desc | string | 描述 |
| type | enum | 创意组件字段类型，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#component_metadata_field_type) |
| structure | struct | 创意组件数据字段列表 |
| component_name | string | 创意组件名称 |
| valid | struct | 创意组件字段结构 |
| required | boolean | 当前字段是否为必填 |
| type | enum | 创意组件字段校验类型，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#component_metadata_field_valid_type) |
| file_format | string | 文件支持类型 |
| file_size_kb_limit | integer | 文件支持大小，单位 kb |
| height | integer | 媒体高度 |
| width | integer | 媒体宽度 |
| max_length | integer | 支持最大数量 |
| min_length | integer | 支持最小数量 |
| pattern | string | 匹配正则表达式 |
| min_emoji_occurs | integer | 支持最小 emoji 标签数量 |
| max_emoji_occurs | integer | 支持最大 emoji 标签数量 |
| ratio_height | integer | 媒体比例-高 |
| ratio_width | integer | 媒体比例-宽 |
| min_duration | integer | 媒体最小时长，单位秒 |
| max_duration | integer | 媒体最大时长，单位秒 |
| min_height | integer | 最小媒体高度 |
| min_width | integer | 最小媒体宽度 |
| is_support_line_break | boolean | 当前字段是否支持换行 |
| min_occurs | integer | 支持最小数量 |
| max_occurs | integer | 支持最大数量 |
| max_total_content | integer | 总字数上限 |
| enum_options | struct[] | 校验枚举类型 |
| value | string | 枚举名称 |
| desc | string | 枚举描述 |
| support_trd_link | boolean | 是否支持作为三链落地页 |
| required | boolean | 选项是否必选 |
| min_duration_millisecond | integer | 媒体最小时长，单位毫秒 |
| max_duration_millisecond | integer | 媒体最大时长，单位毫秒 |
| image_format_options | struct[] | 校验枚举类型 |
| file_format | string | 文件支持类型 |
| file_size_kb_limit | integer | 文件支持大小，单位 kb |
| height | integer | 媒体高度 |
| width | integer | 媒体宽度 |
| ratio_height | integer | 媒体比例-高 |
| ratio_width | integer | 媒体比例-宽 |
| min_height | integer | 最小媒体高度 |
| min_width | integer | 最小媒体宽度 |
| video_format_options | struct[] | 校验枚举类型 |
| file_format | string | 文件支持类型 |
| file_size_kb_limit | integer | 文件支持大小，单位 kb |
| height | integer | 媒体高度 |
| width | integer | 媒体宽度 |
| ratio_height | integer | 媒体比例-高 |
| ratio_width | integer | 媒体比例-宽 |
| min_height | integer | 最小媒体高度 |
| min_width | integer | 最小媒体宽度 |
| min_duration | integer | 媒体最小时长，单位秒 |
| max_duration | integer | 媒体最大时长，单位秒 |
| min_duration_millisecond | integer | 媒体最小时长，单位毫秒 |
| max_duration_millisecond | integer | 媒体最大时长，单位毫秒 |
| valid | struct | 创意组件字段结构 |
| required | boolean | 当前字段是否为必填 |
| type | enum | 创意组件字段校验类型，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#component_metadata_field_valid_type) |
| file_format | string | 文件支持类型 |
| file_size_kb_limit | integer | 文件支持大小，单位 kb |
| height | integer | 媒体高度 |
| width | integer | 媒体宽度 |
| max_length | integer | 支持最大数量 |
| min_length | integer | 支持最小数量 |
| pattern | string | 匹配正则表达式 |
| min_emoji_occurs | integer | 支持最小 emoji 标签数量 |
| max_emoji_occurs | integer | 支持最大 emoji 标签数量 |
| ratio_height | integer | 媒体比例-高 |
| ratio_width | integer | 媒体比例-宽 |
| min_duration | integer | 媒体最小时长，单位秒 |
| max_duration | integer | 媒体最大时长，单位秒 |
| min_height | integer | 最小媒体高度 |
| min_width | integer | 最小媒体宽度 |
| is_support_line_break | boolean | 当前字段是否支持换行 |
| min_occurs | integer | 支持最小数量 |
| max_occurs | integer | 支持最大数量 |
| max_total_content | integer | 总字数上限 |
| enum_options | struct[] | 校验枚举类型 |
| value | string | 枚举名称 |
| desc | string | 枚举描述 |
| support_trd_link | boolean | 是否支持作为三链落地页 |
| required | boolean | 选项是否必选 |
| min_duration_millisecond | integer | 媒体最小时长，单位毫秒 |
| max_duration_millisecond | integer | 媒体最大时长，单位毫秒 |
| image_format_options | struct[] | 校验枚举类型 |
| file_format | string | 文件支持类型 |
| file_size_kb_limit | integer | 文件支持大小，单位 kb |
| height | integer | 媒体高度 |
| width | integer | 媒体宽度 |
| ratio_height | integer | 媒体比例-高 |
| ratio_width | integer | 媒体比例-宽 |
| min_height | integer | 最小媒体高度 |
| min_width | integer | 最小媒体宽度 |
| video_format_options | struct[] | 校验枚举类型 |
| file_format | string | 文件支持类型 |
| file_size_kb_limit | integer | 文件支持大小，单位 kb |
| height | integer | 媒体高度 |
| width | integer | 媒体宽度 |
| ratio_height | integer | 媒体比例-高 |
| ratio_width | integer | 媒体比例-宽 |
| min_height | integer | 最小媒体高度 |
| min_width | integer | 最小媒体宽度 |
| min_duration | integer | 媒体最小时长，单位秒 |
| max_duration | integer | 媒体最大时长，单位秒 |
| min_duration_millisecond | integer | 媒体最小时长，单位毫秒 |
| max_duration_millisecond | integer | 媒体最大时长，单位毫秒 |
| support_impression_tracking_url | boolean | 是否支持曝光监控地址 |
| support_click_tracking_url | boolean | 是否支持点击监控地址 |
| support_page_track_url | boolean | 是否使用新版本 |
| live_promoted_type | enum | 视频号直播推广形式，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#live_promoted_type) |

## 应答示例

```
{
    "code": 0,
    "message": "",
    "message_cn": "",
    "data": {
        "list": [
            {
                "site_set": [],
                "creative_components": [
                    {
                        "enum_property": {
                            "enumeration": []
                        },
                        "array_property": [],
                        "struct_property": [],
                        "restriction": {
                            "text_restriction": [],
                            "image_restriction": {
                                "file_format": []
                            },
                            "url_restriction": [],
                            "video_restriction": {
                                "file_format": []
                            },
                            "number_restriction": [],
                            "link_name_text_restrictions": []
                        }
                    }
                ],
                "unsupport_siteset_detail_spec": [
                    {
                        "site_set": []
                    }
                ],
                "support_dynamic_ability_spec_list": {
                    "dynamic_ability_type": [],
                    "product_item_display_quantity": []
                },
                "creative_permissions": {
                    "creative_components": [
                        {
                            "valid": [],
                            "component_sub_type_options": [
                                {
                                    "value_field": [
                                        {
                                            "structure": [
                                                {
                                                    "structure": [],
                                                    "valid": {
                                                        "enum_options": [],
                                                        "image_format_options": [],
                                                        "video_format_options": []
                                                    }
                                                }
                                            ],
                                            "valid": {
                                                "enum_options": [],
                                                "image_format_options": [],
                                                "video_format_options": []
                                            }
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            }
        ]
    }
}
```

## 可视化调试工具

请求

问题仍未解决？

请前往腾讯广告反馈中心在线提交问题，我们的人工客服将为你服务
