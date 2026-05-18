---
title: 查询优化目标权限 全部接口
platform: tencent_ads
source_url: https://developers.e.qq.com/v3.0/docs/api/optimization_goal_permissions/get
doc_id: tencent_ads_v3_0_docs_api_optimization_goal_permissions_get
source_id: tencent_ads_v3_0_docs_api_optimization_goal_permissions_get
---
# 查询优化目标权限 [全部接口](https://developers.e.qq.com/v3.0/docs/apilist)

| 所属权限 | ads_management |
| --- | --- |
| 请求地址 | optimization_goal_permissions/get |
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
| site_set* | enum[] | 投放版位集合，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#api_optimization_site_set_definition) 数组最小长度 1，最大长度 255 可选值：{ SITE_SET_QZONE, SITE_SET_QQCLIENT, SITE_SET_MUSIC, SITE_SET_MOBILE_UNION, SITE_SET_KUAISHOU, SITE_SET_QQCOM, SITE_SET_WECHAT, SITE_SET_MOBILE_MYAPP, SITE_SET_MOBILE_INNER, SITE_SET_TENCENT_NEWS, SITE_SET_TENCENT_VIDEO, SITE_SET_TENCENT_KUAIBAO, SITE_SET_MOBILE_YYB, SITE_SET_PCQQ, SITE_SET_KANDIAN, SITE_SET_QQ_MUSIC_GAME, SITE_SET_MOMENTS, SITE_SET_MINI_GAME_WECHAT, SITE_SET_MINI_GAME_QQ, SITE_SET_MOBILE_GAME, SITE_SET_QQSHOPPING, SITE_SET_WECHAT_PLUGIN, SITE_SET_SMART } |
| bid_mode | enum | 出价方式，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#api_optimization_bid_mode) 可选值：{ BID_MODE_OCPC, BID_MODE_OCPM } |
| marketing_goal* | enum | 营销目的类型，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#api_marketing_goal) 可选值：{ MARKETING_GOAL_UNKNOWN, MARKETING_GOAL_USER_GROWTH, MARKETING_GOAL_PRODUCT_SALES, MARKETING_GOAL_LEAD_RETENTION, MARKETING_GOAL_BRAND_PROMOTION, MARKETING_GOAL_INCREASE_FANS_INTERACTION } |
| marketing_sub_goal* | enum | 二级营销目的类型，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#api_marketing_sub_goal) 可选值：{ MARKETING_SUB_GOAL_UNKNOWN, MARKETING_SUB_GOAL_NEW_GAME_RESERVE, MARKETING_SUB_GOAL_NEW_GAME_TEST, MARKETING_SUB_GOAL_NEW_GAME_LAUNCH, MARKETING_SUB_GOAL_PLATEAU_PHASE_LAUNCH, MARKETING_SUB_GOAL_MINI_GAME_NEW_CUSTOMER_GROWTH, MARKETING_SUB_GOAL_MINI_GAME_RETURN_CUSTOMER_ENGAGEMENT, MARKETING_SUB_GOAL_APP_ACQUISITION, MARKETING_SUB_GOAL_APP_ACTIVATION, MARKETING_SUB_GOAL_NOT_INSTALL_USER, MARKETING_SUB_GOAL_PRE_INSTALL_USER, MARKETING_SUB_GOAL_UNLOADED_USER, MARKETING_SUB_GOAL_SHORT_INACTIVE_USER, MARKETING_SUB_GOAL_LONG_INACTIVE_USER, MARKETING_SUB_GOAL_GAME_VERSION_UPGRADE, MARKETING_SUB_GOAL_NEW_STORE_OPENING, MARKETING_SUB_GOAL_EVENING_PROMOTION, MARKETING_SUB_GOAL_SPECIAL_RELEASE } |
| marketing_carrier_type* | enum | 营销载体类型，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#api_marketing_carrier_type) 可选值：{ MARKETING_CARRIER_TYPE_UNKNOWN, MARKETING_CARRIER_TYPE_APP_ANDROID, MARKETING_CARRIER_TYPE_APP_IOS, MARKETING_CARRIER_TYPE_WECHAT_OFFICIAL_ACCOUNT, MARKETING_CARRIER_TYPE_JUMP_PAGE, MARKETING_CARRIER_TYPE_WECHAT_MINI_GAME, MARKETING_CARRIER_TYPE_WECHAT_CHANNELS_LIVE, MARKETING_CARRIER_TYPE_WECHAT_CHANNELS, MARKETING_CARRIER_TYPE_WECHAT_CHANNELS_LIVE_RESERVATION, MARKETING_CARRIER_TYPE_MINI_PROGRAM_WECHAT, MARKETING_CARRIER_TYPE_APP_QUICK_APP, MARKETING_CARRIER_TYPE_PC_GAME, MARKETING_CARRIER_TYPE_QQ_MINI_GAME, MARKETING_CARRIER_TYPE_APP_HARMONY } |
| marketing_target_type* | enum | 推广产品类型，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#api_marketing_target_type) 可选值：{ MARKETING_TARGET_TYPE_APP_ANDROID, MARKETING_TARGET_TYPE_APP_IOS, MARKETING_TARGET_TYPE_WECHAT_OFFICIAL_ACCOUNT, MARKETING_TARGET_TYPE_PRODUCT, MARKETING_TARGET_TYPE_TRAFFIC, MARKETING_TARGET_TYPE_LOCAL_STORE, MARKETING_TARGET_TYPE_WECHAT_MINI_GAME, MARKETING_TARGET_TYPE_CONSUMER_PRODUCT, MARKETING_TARGET_TYPE_WECHAT_CHANNELS, MARKETING_TARGET_TYPE_WECHAT_CHANNELS_LIVE, MARKETING_TARGET_TYPE_WECHAT_CHANNELS_LIVE_RESERVATION, MARKETING_TARGET_TYPE_MINI_PROGRAM_WECHAT, MARKETING_TARGET_TYPE_APP_QUICK_APP, MARKETING_TARGET_TYPE_CONSUME_MEDICAL, MARKETING_TARGET_TYPE_COMPREHENSIVE_HOUSEKEEPING, MARKETING_TARGET_TYPE_FICTION, MARKETING_TARGET_TYPE_SHORT_DRAMA, MARKETING_TARGET_TYPE_AUDIOVISUAL_ENTERTAINMENT, MARKETING_TARGET_TYPE_BEAUTY_AND_PERSONAL_CARE, MARKETING_TARGET_TYPE_WEDDING_AND_PORTRAIT_PHOTOGRAPHY, MARKETING_TARGET_TYPE_FRANCHISE_BRAND, MARKETING_TARGET_TYPE_ENTERPRISE_SERVICES, MARKETING_TARGET_TYPE_EXHIBITION_BOOTH_DESIGN, MARKETING_TARGET_TYPE_INSURANCE, MARKETING_TARGET_TYPE_BANK, MARKETING_TARGET_TYPE_CREDIT, MARKETING_TARGET_TYPE_INVESTMENT_CONSULTING, MARKETING_TARGET_TYPE_REAL_ESTATE, MARKETING_TARGET_TYPE_TELECOMMUNICATIONS_OPERATOR, MARKETING_TARGET_TYPE_TOURIST_ATTRACTIONS_TICKETS, MARKETING_TARGET_TYPE_RENOVATION_SERVICES, MARKETING_TARGET_TYPE_FURNITURE_AND_BUILDING_MATERIALS, MARKETING_TARGET_TYPE_EXHIBITION_SALES, MARKETING_TARGET_TYPE_MEDICINE_INDUSTRY_COMMERCIAL, MARKETING_TARGET_TYPE_FINANCE, MARKETING_TARGET_TYPE_LOCAL_STORE_PACKAGE, MARKETING_TARGET_TYPE_CATERING_AND_LEISURE, MARKETING_TARGET_TYPE_CHAIN_RESTAURANT, MARKETING_TARGET_TYPE_COMMODITY_SET, MARKETING_TARGET_TYPE_TOURIST_TRAVEL_ROUTE, MARKETING_TARGET_TYPE_TOURIST_CRUISE_LINE, MARKETING_TARGET_TYPE_TOURIST_HOTEL_SERVICE, MARKETING_TARGET_TYPE_TOURIST_AIRLINE_TICKETS, MARKETING_TARGET_TYPE_LOCAL_STORE_COMBINE_WITH_PRODUCT, MARKETING_TARGET_TYPE_ACTIVITY, MARKETING_TARGET_TYPE_STORE, MARKETING_TARGET_TYPE_MINI_GAME_QQ, MARKETING_TARGET_TYPE_PC_GAME, MARKETING_TARGET_TYPE_WECHAT_WORK, MARKETING_TARGET_TYPE_LIVE_STREAM_ROOM, MARKETING_TARGET_TYPE_PERSONAL_STORE, MARKETING_TARGET_TYPE_PLATFORM_CHANNEL, MARKETING_TARGET_TYPE_TWO_WHEEL_VEHICLE, MARKETING_TARGET_TYPE_GOVERNMENT_AFFAIRS, MARKETING_TARGET_TYPE_CAR_ECOLOGY, MARKETING_TARGET_TYPE_WECHAT_STORE_PRODUCT, MARKETING_TARGET_TYPE_APP_HARMONY, MARKETING_TARGET_TYPE_WECHAT_STORE_PRODUCT_SET, MARKETING_TARGET_TYPE_PRODUCT_AGGREGATION_PAGE, MARKETING_TARGET_TYPE_WECHAT_STORE, MARKETING_TARGET_TYPE_RESALE_AND_COMMERCIAL_LAND, MARKETING_TARGET_TYPE_VIDEO_PROGRAM, MARKETING_TARGET_TYPE_FUN_TEST, MARKETING_TARGET_TYPE_MATERNITY_PARENTING, MARKETING_TARGET_TYPE_LEISURE_ENTERTAINMENT, MARKETING_TARGET_TYPE_MEDICAL_INSTITUTION, MARKETING_TARGET_TYPE_WECHAT_CHANNELS_ACTIVITY } |
| marketing_carrier_detail | struct | 营销载体详情，当营销载体类型是 MARKETING_CARRIER_TYPE_APP_ANDROID、MARKETING_CARRIER_TYPE_APP_IOS 和 MARKETING_CARRIER_TYPE_WECHAT_MINI_GAME 等需要使用该结构体 |
| marketing_carrier_id* | string | 营销载体 id，如安卓应用 id、IOS 应用 id、小游戏 id 等 字段长度最小 0 字节，长度最大 2048 字节 |
| marketing_sub_carrier_id | string | 二级营销载体 id |
| marketing_carrier_name | string | 营销载体名称 |
| delivery_scene | enum | 投放场景，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#delivery_scene) 可选值：{ DELIVERY_SCENE_UNKNOWN, DELIVERY_SCENE_STANDARD, DELIVERY_SCENE_STORE_FLOW, DELIVERY_SCENE_RETENTION, DELIVERY_SCENE_SEARCH_AUCTION, SMART_DELIVERY_PLATFORM_EDITION_ECOLOGY_PLAYLET, SMART_DELIVERY_PLATFORM_EDITION_ECOLOGY_LEADS, SMART_DELIVERY_PLATFORM_EDITION_MINI_GAME_PROMOTION, SMART_DELIVERY_PLATFORM_EDITION_ECOLOGY_LEADS_LINK_PREFERENCE, SMART_DELIVERY_PLATFORM_EDITION_PLAYLET_MANAGEMENT, SMART_DELIVERY_PLATFORM_EDITION_BIG_GAME_PROMOTION, SMART_DELIVERY_PLATFORM_EDITION_MINI_GAME_MIXED_MONETIZATION, SMART_DELIVERY_PLATFORM_EDITION_PERIODIC_STABILIZATION, SMART_DELIVERY_PLATFORM_EDITION_MULTI_OPTIMIZATION, SMART_DELIVERY_PLATFORM_EDITION_DRUG_PRODUCT, SMART_DELIVERY_PLATFORM_EDITION_FICTION, SMART_DELIVERY_PLATFORM_EDITION_WECHAT_MINI_GAME_LONG_TERM_ROI, SMART_DELIVERY_PLATFORM_EDITION_WECHAT_MINI_GAME_MONETIZATION, SMART_DELIVERY_PLATFORM_EDITION_WECHAT_STORE_SINGLE_PRODUCT, SMART_DELIVERY_PLATFORM_EDITION_WECHAT_STORE_PRODUCT_OR_LIVE, SMART_DELIVERY_PLATFORM_EDITION_WECHAT_STORE_MANAGEMENT, SMART_DELIVERY_PLATFORM_EDITION_WECHAT_STORE_LIVE, SMART_DELIVERY_PLATFORM_EDITION_WECHAT_STORE_PRODUCT, SMART_DELIVERY_PLATFORM_EDITION_QYT_LIVE, SMART_DELIVERY_PLATFORM_EDITION_QYT_WECHAT_STORE, SMART_DELIVERY_PLATFORM_EDITION_QYT_STORE_PAGE, SMART_DELIVERY_PLATFORM_EDITION_CPS_MANUAL, SMART_DELIVERY_PLATFORM_EDITION_CPS_INTELLIGENT, SMART_DELIVERY_PLATFORM_EDITION_MPA_STORE_MANAGEMENT, SMART_DELIVERY_PLATFORM_EDITION_GAME_APP, SMART_DELIVERY_PLATFORM_EDITION_READING_APP, SMART_DELIVERY_PLATFORM_EDITION_AI_APP, SMART_DELIVERY_PLATFORM_EDITION_USER_GROWTH_APP, SMART_DELIVERY_PLATFORM_EDITION_SELECTION_AD, SMART_DELIVERY_PLATFORM_EDITION_WECHAT_WORK } |

## 请求示例

```
curl -v -G 'https://api.e.qq.com/v3.0/optimization_goal_permissions/get?access_token=<ACCESS_TOKEN>&timestamp=<TIMESTAMP>&nonce=<NONCE>' \
-d 'account_id=<ACCOUNT_ID>' \
-d 'site_set=[
    "SITE_SET_CHANNELS",
    "SITE_SET_KANDIAN",
    "SITE_SET_MOBILE_UNION",
    "SITE_SET_MOMENTS",
    "SITE_SET_QQ_MUSIC_GAME",
    "SITE_SET_TENCENT_NEWS",
    "SITE_SET_TENCENT_VIDEO",
    "SITE_SET_WECHAT",
    "SITE_SET_WECHAT_PLUGIN"
]' \
-d 'marketing_goal=MARKETING_GOAL_USER_GROWTH' \
-d 'marketing_sub_goal=MARKETING_SUB_GOAL_PLATEAU_PHASE_LAUNCH' \
-d 'marketing_carrier_type=MARKETING_CARRIER_TYPE_APP_IOS' \
-d 'marketing_target_type=MARKETING_TARGET_TYPE_APP_IOS' \
-d 'marketing_carrier_detail={
    "marketing_carrier_id": "1000030000"
}'
curl -v -G 'https://api.e.qq.com/v3.0/optimization_goal_permissions/get?access_token=<ACCESS_TOKEN>&timestamp=<TIMESTAMP>&nonce=<NONCE>' \
-d 'account_id=<ACCOUNT_ID>' \
-d 'site_set=[
    "SITE_SET_CHANNELS",
    "SITE_SET_KANDIAN",
    "SITE_SET_MOBILE_UNION",
    "SITE_SET_MOMENTS",
    "SITE_SET_QQ_MUSIC_GAME",
    "SITE_SET_TENCENT_NEWS",
    "SITE_SET_TENCENT_VIDEO",
    "SITE_SET_WECHAT",
    "SITE_SET_WECHAT_PLUGIN"
]' \
-d 'marketing_goal=MARKETING_GOAL_USER_GROWTH' \
-d 'marketing_sub_goal=MARKETING_SUB_GOAL_PLATEAU_PHASE_LAUNCH' \
-d 'marketing_carrier_type=MARKETING_CARRIER_TYPE_APP_IOS' \
-d 'marketing_target_type=MARKETING_TARGET_TYPE_APP_IOS' \
-d 'marketing_carrier_detail={
    "marketing_carrier_id": "1000030000"
}'
```

## 应答字段

| 名称 | 类型 | 描述 |
| --- | --- | --- |
| optimization_goal_permission_list | enum[] | 浅层优化目标及对应支持的深度优化目标组合，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#api_optimization_goal) |
| deep_behavior_optimization_goal_permission_list | struct[] | 浅层优化目标及对应支持的深度优化目标行为目标组合 |
| optimization_goal | enum | 广告优化目标类型，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#api_optimization_goal) |
| deep_behavior_optimization_goal_list | enum[] | 对应支持的深度优化行为目标组合，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#api_optimization_goal) |
| deep_worth_optimization_goal_permission_list | struct[] | 浅层优化目标及对应支持的深度优化 ROI 目标组合 |
| optimization_goal | enum | 广告优化目标类型，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#api_optimization_goal) |
| deep_worth_optimization_goal_list | enum[] | 对应支持的深度优化 ROI 目标组合，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#api_deep_conversion_worth_goal) |
| deep_behavior_advanced_goal_permission_list | struct[] | 浅层优化目标及对应支持的深度辅助目标组合 |
| optimization_goal | enum | 广告优化目标类型，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#api_optimization_goal) |
| deep_behavior_advanced_goal_list | enum[] | 对应支持的深度辅助目标组合，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#api_optimization_goal) |
| deep_worth_advanced_goal_permission_list | struct[] | 浅层优化目标及对应支持的深度辅助 ROI 组合 |
| optimization_goal | enum | 广告优化目标类型，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#api_optimization_goal) |
| deep_worth_advanced_goal_list | enum[] | 对应支持的辅助 ROI 组合，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#api_deep_conversion_worth_goal) |
| forward_link_assist_permission_list | struct[] | 浅层优化目标及对应支持的助攻行为目标组合 |
| optimization_goal | enum | 广告优化目标类型，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#api_optimization_goal) |
| forward_link_assist_list | enum[] | 对应支持的助攻行为目标组合，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#api_optimization_goal) |
| conversion_link_og_info | struct[] | 链路 og 对象集合 |
| og | enum | 广告优化目标类型，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#api_optimization_goal) |
| deep_og | enum | 优化转化行为目标，枚举列表：[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#api_optimization_goal) |
| deep_roi | enum | 优化 ROI 目标，枚举列表：[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#api_deep_conversion_worth_goal) |
| advanced_roi | enum | 优化 ROI 目标，枚举列表：[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#api_deep_conversion_worth_goal) |
| advanced_og | enum | 深度辅助优化 OG 目标，枚举列表：[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#api_optimization_goal) |
| forward_link_assist | enum | 助攻行为目标，ADX 程序化广告不可填写提交，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#api_optimization_goal) |

## 应答示例

```
{
    "code": 0,
    "message": "",
    "message_cn": "",
    "data": {
        "optimization_goal_permission_list": [
            "OPTIMIZATIONGOAL_PAGE_RESERVATION",
            "OPTIMIZATIONGOAL_FIRST_PURCHASE",
            "OPTIMIZATIONGOAL_APP_ACTIVATE",
            "OPTIMIZATIONGOAL_APP_REGISTER",
            "OPTIMIZATIONGOAL_PROMOTION_VIEW_KEY_PAGE",
            "OPTIMIZATIONGOAL_APP_PURCHASE",
            "OPTIMIZATIONGOAL_CORE_ACTION"
        ],
        "deep_behavior_optimization_goal_permission_list": [
            {
                "optimization_goal": "OPTIMIZATIONGOAL_APP_ACTIVATE",
                "deep_behavior_optimization_goal_list": [
                    "OPTIMIZATIONGOAL_ONE_DAY_RETENTION"
                ]
            },
            {
                "optimization_goal": "OPTIMIZATIONGOAL_APP_REGISTER",
                "deep_behavior_optimization_goal_list": [
                    "OPTIMIZATIONGOAL_FIRST_PURCHASE"
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
