---
title: 查询创意组件字段选项对于其他组件的依赖信息 全部接口
platform: tencent_ads
source_url: https://developers.e.qq.com/v3.0/docs/api/component_depends/get
doc_id: tencent_ads_v3_0_docs_api_component_depends_get
source_id: tencent_ads_v3_0_docs_api_component_depends_get
---
# 查询创意组件字段选项对于其他组件的依赖信息 [全部接口](https://developers.e.qq.com/v3.0/docs/apilist)

| 所属权限 | ads_management,ads_insights |
| --- | --- |
| 请求地址 | component_depends/get |
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
| component_type | enum | 创意组件类型，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#component_type) 可选值：{ UNKNOWN, TITLE, DESCRIPTION, IMAGE, IMAGE_LIST, JUMP_INFO, VIDEO, BRAND, CONSULT, PHONE, FORM, ACTION_BUTTON, CHOSEN_BUTTON, LABEL, SHOW_DATA, MARKETING_PENDANT, APP_GIFT_PACK_CODE, SHOP_IMAGE, COUNT_DOWN, BARRAGE, FLOATING_ZONE, TEXT_LINK, END_PAGE, LIVING_DESC, WECHAT_CHANNELS, SHORT_VIDEO, ELEMENT_STORY, WXGAME_PLAYABLE_PAGE, APP_PROMOTION_VIDEO, VIDEO_SHOWCASE, IMAGE_SHOWCASE, MINI_CARD_LINK, CONSULT_LINK, AUDIO, WECHAT_SHOP_ACTIVITY, WXGAME_DIRECT_PAGE, VIDEO_LIST, V2_TITLE, V2_DESCRIPTION, V2_LONG_SUBLINK, V2_SHORT_SUBLINK, V2_LONG_SUBLINK_LIST, V2_SHORT_SUBLINK_LIST, V2_APP_DOWNLOAD, V2_IMAGE_1X1, V2_IMAGE_LIST_1X1, V2_IMAGE_TEXT_1X1, V2_IMAGE_BIG_20X7, V2_VIDEO_16X9_IMAGE_16X9, V2_VIDEO_16X9_IMAGE_4X3, V2_VIDEO_16X9_IMAGE_1X1, V2_QUICK_CONSULT, V2_PHONE, V2_FORM, V2_BRAND, V2_LANDING_PAGE, V2_HOLIDAY_LOGO, V2_ACTION_BUTTON, V2_CHOSEN_BUTTON, V2_VIDEO_9X16_IMAGE_9X16, V2_IMAGE_16X9, V2_LABEL, V2_PROMOTION_SUBLINK, V2_IMAGE_LIST_3X2, V2_IMAGE_LIST_9X16, V2_LIST_SUBLINK, V2_MDPA_TITLE, V2_MDPA_DESCRIPTION } |

使用说明

## 请求示例

```
curl -v -G 'https://api.e.qq.com/v3.0/component_depends/get?access_token=<ACCESS_TOKEN>&timestamp=<TIMESTAMP>&nonce=<NONCE>' \
-d 'account_id=<ACCOUNT_ID>' \
-d 'site_set=[]'
curl -v -G 'https://api.e.qq.com/v3.0/component_depends/get?access_token=<ACCESS_TOKEN>&timestamp=<TIMESTAMP>&nonce=<NONCE>' \
-d 'account_id=<ACCOUNT_ID>' \
-d 'site_set=[]'
```

## 应答字段

| 名称 | 类型 | 描述 |
| --- | --- | --- |
| component_type | enum | 创意组件类型，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#component_type) |
| component_name | string | 创意组件名称 |
| component_depends | struct[] | 组件依赖列表 |
| target_path | string | 当前组件字段路径 |
| depend_paths | string[] | 依赖组件字段路径列表 |
| target_options | struct[] | 当前组件字段的依赖情况列表 |
| depends | struct[] | 依赖条件列表 |
| path | string | 依赖组件字段路径 |
| value | string | 字段值 |
| desc | string | 枚举描述 |
| switch | boolean | 是否为开启组件，true 或 false |
| support_options | struct[] | 当前组件字段支持的选项列表 |
| value | string | 字段值 |
| desc | string | 枚举描述 |
| additional_field_options | struct[] | 校验枚举类型 |
| value | string | 枚举名称 |
| desc | string | 枚举描述 |
| support_trd_link | boolean | 是否支持作为三链落地页 |
| required | boolean | 选项是否必选 |
| use | enum | 组件依赖可用类型，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#api_component_depend_use_type) |
| tip | string | 提示 |

## 应答示例

```
{
    "code": 0,
    "message": "",
    "message_cn": "",
    "data": {
        "component_depends": [
            {
                "depend_paths": [],
                "target_options": [
                    {
                        "depends": [],
                        "support_options": [
                            {
                                "additional_field_options": []
                            }
                        ]
                    }
                ]
            }
        ]
    }
}
```

## 可视化调试工具

请求

问题仍未解决？

请前往腾讯广告反馈中心在线提交问题，我们的人工客服将为你服务
