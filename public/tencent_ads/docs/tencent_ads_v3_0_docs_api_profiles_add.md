---
title: 创建朋友圈头像昵称跳转页 全部接口
platform: tencent_ads
source_url: https://developers.e.qq.com/v3.0/docs/api/profiles/add
doc_id: tencent_ads_v3_0_docs_api_profiles_add
source_id: tencent_ads_v3_0_docs_api_profiles_add
---
# 创建朋友圈头像昵称跳转页 [全部接口](https://developers.e.qq.com/v3.0/docs/apilist)

| 所属权限 | ads_management |
| --- | --- |
| 请求地址 | profiles/add |
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
| account_id | integer | 广告主帐号 id，有操作权限的帐号 id，不支持代理商 id |
| marketing_goal | enum | 营销目的类型，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#api_marketing_goal) 可选值：{ MARKETING_GOAL_UNKNOWN, MARKETING_GOAL_USER_GROWTH, MARKETING_GOAL_PRODUCT_SALES, MARKETING_GOAL_LEAD_RETENTION, MARKETING_GOAL_BRAND_PROMOTION, MARKETING_GOAL_INCREASE_FANS_INTERACTION } |
| marketing_sub_goal | enum | 二级营销目的类型，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#api_marketing_sub_goal) 可选值：{ MARKETING_SUB_GOAL_UNKNOWN, MARKETING_SUB_GOAL_NEW_GAME_RESERVE, MARKETING_SUB_GOAL_NEW_GAME_TEST, MARKETING_SUB_GOAL_NEW_GAME_LAUNCH, MARKETING_SUB_GOAL_PLATEAU_PHASE_LAUNCH, MARKETING_SUB_GOAL_MINI_GAME_NEW_CUSTOMER_GROWTH, MARKETING_SUB_GOAL_MINI_GAME_RETURN_CUSTOMER_ENGAGEMENT, MARKETING_SUB_GOAL_APP_ACQUISITION, MARKETING_SUB_GOAL_APP_ACTIVATION, MARKETING_SUB_GOAL_NOT_INSTALL_USER, MARKETING_SUB_GOAL_PRE_INSTALL_USER, MARKETING_SUB_GOAL_UNLOADED_USER, MARKETING_SUB_GOAL_SHORT_INACTIVE_USER, MARKETING_SUB_GOAL_LONG_INACTIVE_USER, MARKETING_SUB_GOAL_GAME_VERSION_UPGRADE, MARKETING_SUB_GOAL_NEW_STORE_OPENING, MARKETING_SUB_GOAL_EVENING_PROMOTION, MARKETING_SUB_GOAL_SPECIAL_RELEASE } |
| marketing_carrier_type | enum | ，营销载体类型（仅当 profile_type 为 PROFILE_TYPE_AUTO_GENERATE 时有效）详见 [\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#api_marketing_carrier_type) 可选值：{ MARKETING_CARRIER_TYPE_APP_ANDROID, MARKETING_CARRIER_TYPE_APP_IOS } |
| marketing_target_type | enum | 推广产品类型，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#api_marketing_target_type) 可选值：{ MARKETING_TARGET_TYPE_APP_ANDROID, MARKETING_TARGET_TYPE_APP_IOS, MARKETING_TARGET_TYPE_WECHAT_OFFICIAL_ACCOUNT, MARKETING_TARGET_TYPE_PRODUCT, MARKETING_TARGET_TYPE_TRAFFIC, MARKETING_TARGET_TYPE_LOCAL_STORE, MARKETING_TARGET_TYPE_WECHAT_MINI_GAME, MARKETING_TARGET_TYPE_CONSUMER_PRODUCT, MARKETING_TARGET_TYPE_WECHAT_CHANNELS, MARKETING_TARGET_TYPE_WECHAT_CHANNELS_LIVE, MARKETING_TARGET_TYPE_WECHAT_CHANNELS_LIVE_RESERVATION, MARKETING_TARGET_TYPE_MINI_PROGRAM_WECHAT, MARKETING_TARGET_TYPE_APP_QUICK_APP, MARKETING_TARGET_TYPE_CONSUME_MEDICAL, MARKETING_TARGET_TYPE_COMPREHENSIVE_HOUSEKEEPING, MARKETING_TARGET_TYPE_FICTION, MARKETING_TARGET_TYPE_SHORT_DRAMA, MARKETING_TARGET_TYPE_AUDIOVISUAL_ENTERTAINMENT, MARKETING_TARGET_TYPE_BEAUTY_AND_PERSONAL_CARE, MARKETING_TARGET_TYPE_WEDDING_AND_PORTRAIT_PHOTOGRAPHY, MARKETING_TARGET_TYPE_FRANCHISE_BRAND, MARKETING_TARGET_TYPE_ENTERPRISE_SERVICES, MARKETING_TARGET_TYPE_EXHIBITION_BOOTH_DESIGN, MARKETING_TARGET_TYPE_INSURANCE, MARKETING_TARGET_TYPE_BANK, MARKETING_TARGET_TYPE_CREDIT, MARKETING_TARGET_TYPE_INVESTMENT_CONSULTING, MARKETING_TARGET_TYPE_REAL_ESTATE, MARKETING_TARGET_TYPE_TELECOMMUNICATIONS_OPERATOR, MARKETING_TARGET_TYPE_TOURIST_ATTRACTIONS_TICKETS, MARKETING_TARGET_TYPE_RENOVATION_SERVICES, MARKETING_TARGET_TYPE_FURNITURE_AND_BUILDING_MATERIALS, MARKETING_TARGET_TYPE_EXHIBITION_SALES, MARKETING_TARGET_TYPE_MEDICINE_INDUSTRY_COMMERCIAL, MARKETING_TARGET_TYPE_FINANCE, MARKETING_TARGET_TYPE_LOCAL_STORE_PACKAGE, MARKETING_TARGET_TYPE_CATERING_AND_LEISURE, MARKETING_TARGET_TYPE_CHAIN_RESTAURANT, MARKETING_TARGET_TYPE_COMMODITY_SET, MARKETING_TARGET_TYPE_TOURIST_TRAVEL_ROUTE, MARKETING_TARGET_TYPE_TOURIST_CRUISE_LINE, MARKETING_TARGET_TYPE_TOURIST_HOTEL_SERVICE, MARKETING_TARGET_TYPE_TOURIST_AIRLINE_TICKETS, MARKETING_TARGET_TYPE_LOCAL_STORE_COMBINE_WITH_PRODUCT, MARKETING_TARGET_TYPE_ACTIVITY, MARKETING_TARGET_TYPE_STORE, MARKETING_TARGET_TYPE_MINI_GAME_QQ, MARKETING_TARGET_TYPE_PC_GAME, MARKETING_TARGET_TYPE_WECHAT_WORK, MARKETING_TARGET_TYPE_LIVE_STREAM_ROOM, MARKETING_TARGET_TYPE_PERSONAL_STORE, MARKETING_TARGET_TYPE_PLATFORM_CHANNEL, MARKETING_TARGET_TYPE_TWO_WHEEL_VEHICLE, MARKETING_TARGET_TYPE_GOVERNMENT_AFFAIRS, MARKETING_TARGET_TYPE_CAR_ECOLOGY, MARKETING_TARGET_TYPE_WECHAT_STORE_PRODUCT, MARKETING_TARGET_TYPE_APP_HARMONY, MARKETING_TARGET_TYPE_WECHAT_STORE_PRODUCT_SET, MARKETING_TARGET_TYPE_PRODUCT_AGGREGATION_PAGE, MARKETING_TARGET_TYPE_WECHAT_STORE, MARKETING_TARGET_TYPE_RESALE_AND_COMMERCIAL_LAND, MARKETING_TARGET_TYPE_VIDEO_PROGRAM, MARKETING_TARGET_TYPE_FUN_TEST, MARKETING_TARGET_TYPE_MATERNITY_PARENTING, MARKETING_TARGET_TYPE_LEISURE_ENTERTAINMENT, MARKETING_TARGET_TYPE_MEDICAL_INSTITUTION, MARKETING_TARGET_TYPE_WECHAT_CHANNELS_ACTIVITY } |
| marketing_carrier_id | string | 营销载体 id，如安卓应用 id、IOS 应用 id、小游戏 id 等 字段长度最小 0 字节，长度最大 2048 字节 |
| profile_type* | enum | 朋友圈头像及昵称跳转页类型，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#api_profile_type) 可选值：{ PROFILE_TYPE_DEFINITION, PROFILE_TYPE_AUTO_GENERATE } |
| head_image_id | string | ，头像图片 id，通过 [\[images 模块\]](https://developers.e.qq.com/docs/api/business_assets/image/images_add) 上传图片后获得； profile_type 为 PROFILE_TYPE_DEFINITION 时必填，head_image_id 对应的图片高、宽均为 512px、大小限制 400KB 字段长度最小 1 字节，长度最大 64 字节 |
| profile_name | string | ，昵称，自定义时传入，不允许有特殊字符,字段长度最小 1 个等宽字符，长度最大 30 等宽字符（即字段最大长度为 15 个中文字或全角标点,30 个英文字或半角标点。一个等宽字符等价于一个中文，等价于两个英文。) 字段长度最小 1 字节，长度最大 30 字节 |
| description | string | ，朋友圈头像及昵称跳转页简介，字段长度最小 1 个等宽字符，长度最大 120 等宽字符（即字段最大长度为 120 个中文字或全角标点,240 个英文字或半角标点。一个等宽字符等价于一个中文，等价于两个英文。）； profile_type 为 PROFILE_TYPE_DEFINITION 时必填 字段长度最小 1 字节，长度最大 240 字节 |
| organization_id | integer | 业务单元 id 最小值 0，最大值 9999999999 |
| mdm_id | integer | 主体 id |

使用说明

## 请求示例

```
curl 'https://api.e.qq.com/v3.0/profiles/add?access_token=<ACCESS_TOKEN>&timestamp=<TIMESTAMP>&nonce=<NONCE>' \
-H 'Content-Type: application/json' \
-d '{
    "account_id": "<ACCOUNT_ID>",
    "profile_type": "PROFILE_TYPE_DEFINITION",
    "head_image_id": 22222,
    "profile_name": "profile name",
    "description": "profile description"
}'
curl 'https://api.e.qq.com/v3.0/profiles/add?access_token=<ACCESS_TOKEN>&timestamp=<TIMESTAMP>&nonce=<NONCE>' \
-H 'Content-Type: application/json' \
-d '{
    "account_id": "<ACCOUNT_ID>",
    "profile_type": "PROFILE_TYPE_DEFINITION",
    "head_image_id": 22222,
    "profile_name": "profile name",
    "description": "profile description"
}'
```

## 应答字段

| 名称 | 类型 | 描述 |
| --- | --- | --- |
| profile_id | integer | 朋友圈头像及昵称跳转页 id |

## 应答示例

```
{
    "code": 0,
    "message": "",
    "message_cn": "",
    "data": {
        "profile_id": 11111
    }
}
```

## 可视化调试工具

问题仍未解决？

请前往腾讯广告反馈中心在线提交问题，我们的人工客服将为你服务
