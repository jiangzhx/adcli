---
title: 获取词包 全部接口
platform: tencent_ads
source_url: https://developers.e.qq.com/v3.0/docs/api/ad_param/get
doc_id: tencent_ads_v3_0_docs_api_ad_param_get
source_id: tencent_ads_v3_0_docs_api_ad_param_get
---
# 获取词包 [全部接口](https://developers.e.qq.com/v3.0/docs/apilist)

| 所属权限 | ads_management,ads_insights |
| --- | --- |
| 请求地址 | ad_param/get |
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
| marketing_carrier_type | enum | 营销载体类型，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#api_marketing_carrier_type) 可选值：{ MARKETING_CARRIER_TYPE_UNKNOWN, MARKETING_CARRIER_TYPE_APP_ANDROID, MARKETING_CARRIER_TYPE_APP_IOS, MARKETING_CARRIER_TYPE_WECHAT_OFFICIAL_ACCOUNT, MARKETING_CARRIER_TYPE_JUMP_PAGE, MARKETING_CARRIER_TYPE_WECHAT_MINI_GAME, MARKETING_CARRIER_TYPE_WECHAT_CHANNELS_LIVE, MARKETING_CARRIER_TYPE_WECHAT_CHANNELS, MARKETING_CARRIER_TYPE_WECHAT_CHANNELS_LIVE_RESERVATION, MARKETING_CARRIER_TYPE_MINI_PROGRAM_WECHAT, MARKETING_CARRIER_TYPE_APP_QUICK_APP, MARKETING_CARRIER_TYPE_PC_GAME, MARKETING_CARRIER_TYPE_QQ_MINI_GAME, MARKETING_CARRIER_TYPE_APP_HARMONY } |
| marketing_target_type | enum | 推广产品类型，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#api_marketing_target_type) 可选值：{ MARKETING_TARGET_TYPE_APP_ANDROID, MARKETING_TARGET_TYPE_APP_IOS, MARKETING_TARGET_TYPE_WECHAT_OFFICIAL_ACCOUNT, MARKETING_TARGET_TYPE_PRODUCT, MARKETING_TARGET_TYPE_TRAFFIC, MARKETING_TARGET_TYPE_LOCAL_STORE, MARKETING_TARGET_TYPE_WECHAT_MINI_GAME, MARKETING_TARGET_TYPE_CONSUMER_PRODUCT, MARKETING_TARGET_TYPE_WECHAT_CHANNELS, MARKETING_TARGET_TYPE_WECHAT_CHANNELS_LIVE, MARKETING_TARGET_TYPE_WECHAT_CHANNELS_LIVE_RESERVATION, MARKETING_TARGET_TYPE_MINI_PROGRAM_WECHAT, MARKETING_TARGET_TYPE_APP_QUICK_APP, MARKETING_TARGET_TYPE_CONSUME_MEDICAL, MARKETING_TARGET_TYPE_COMPREHENSIVE_HOUSEKEEPING, MARKETING_TARGET_TYPE_FICTION, MARKETING_TARGET_TYPE_SHORT_DRAMA, MARKETING_TARGET_TYPE_AUDIOVISUAL_ENTERTAINMENT, MARKETING_TARGET_TYPE_BEAUTY_AND_PERSONAL_CARE, MARKETING_TARGET_TYPE_WEDDING_AND_PORTRAIT_PHOTOGRAPHY, MARKETING_TARGET_TYPE_FRANCHISE_BRAND, MARKETING_TARGET_TYPE_ENTERPRISE_SERVICES, MARKETING_TARGET_TYPE_EXHIBITION_BOOTH_DESIGN, MARKETING_TARGET_TYPE_INSURANCE, MARKETING_TARGET_TYPE_BANK, MARKETING_TARGET_TYPE_CREDIT, MARKETING_TARGET_TYPE_INVESTMENT_CONSULTING, MARKETING_TARGET_TYPE_REAL_ESTATE, MARKETING_TARGET_TYPE_TELECOMMUNICATIONS_OPERATOR, MARKETING_TARGET_TYPE_TOURIST_ATTRACTIONS_TICKETS, MARKETING_TARGET_TYPE_RENOVATION_SERVICES, MARKETING_TARGET_TYPE_FURNITURE_AND_BUILDING_MATERIALS, MARKETING_TARGET_TYPE_EXHIBITION_SALES, MARKETING_TARGET_TYPE_MEDICINE_INDUSTRY_COMMERCIAL, MARKETING_TARGET_TYPE_FINANCE, MARKETING_TARGET_TYPE_LOCAL_STORE_PACKAGE, MARKETING_TARGET_TYPE_CATERING_AND_LEISURE, MARKETING_TARGET_TYPE_CHAIN_RESTAURANT, MARKETING_TARGET_TYPE_COMMODITY_SET, MARKETING_TARGET_TYPE_TOURIST_TRAVEL_ROUTE, MARKETING_TARGET_TYPE_TOURIST_CRUISE_LINE, MARKETING_TARGET_TYPE_TOURIST_HOTEL_SERVICE, MARKETING_TARGET_TYPE_TOURIST_AIRLINE_TICKETS, MARKETING_TARGET_TYPE_LOCAL_STORE_COMBINE_WITH_PRODUCT, MARKETING_TARGET_TYPE_ACTIVITY, MARKETING_TARGET_TYPE_STORE, MARKETING_TARGET_TYPE_MINI_GAME_QQ, MARKETING_TARGET_TYPE_PC_GAME, MARKETING_TARGET_TYPE_WECHAT_WORK, MARKETING_TARGET_TYPE_LIVE_STREAM_ROOM, MARKETING_TARGET_TYPE_PERSONAL_STORE, MARKETING_TARGET_TYPE_PLATFORM_CHANNEL, MARKETING_TARGET_TYPE_TWO_WHEEL_VEHICLE, MARKETING_TARGET_TYPE_GOVERNMENT_AFFAIRS, MARKETING_TARGET_TYPE_CAR_ECOLOGY, MARKETING_TARGET_TYPE_WECHAT_STORE_PRODUCT, MARKETING_TARGET_TYPE_APP_HARMONY, MARKETING_TARGET_TYPE_WECHAT_STORE_PRODUCT_SET, MARKETING_TARGET_TYPE_PRODUCT_AGGREGATION_PAGE, MARKETING_TARGET_TYPE_WECHAT_STORE, MARKETING_TARGET_TYPE_RESALE_AND_COMMERCIAL_LAND, MARKETING_TARGET_TYPE_VIDEO_PROGRAM, MARKETING_TARGET_TYPE_FUN_TEST, MARKETING_TARGET_TYPE_MATERNITY_PARENTING, MARKETING_TARGET_TYPE_LEISURE_ENTERTAINMENT, MARKETING_TARGET_TYPE_MEDICAL_INSTITUTION, MARKETING_TARGET_TYPE_WECHAT_CHANNELS_ACTIVITY } |
| creative_template_id* | integer | 创意形式 id，具体请咨询您的运营接口人 |
| site_set* | enum[] | 投放站点集合，当前单站点或者 SITE_SET_TENCENT_NEWS+SITE_SET_TENCENT_VIDEO 的组合，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#api_site_set_definition) 数组最小长度 1，最大长度 32 可选值：{ SITE_SET_MOBILE_UNION, SITE_SET_WECHAT, SITE_SET_TENCENT_NEWS, SITE_SET_TENCENT_VIDEO, SITE_SET_MOBILE_YYB, SITE_SET_PCQQ, SITE_SET_KANDIAN, SITE_SET_QQ_MUSIC_GAME, SITE_SET_MOMENTS, SITE_SET_CHANNELS, SITE_SET_WECHAT_SEARCH, SITE_SET_WECHAT_PLUGIN, SITE_SET_QBSEARCH, SITE_SET_SEARCH_SCENE, SITE_SET_SEARCH_MOBILE_UNION, SITE_SET_SMART } |
| product_catalog_id | integer | 商品库 id |
| marketing_asset_outer_spec | struct | 产品外部 id 数据，当推广产品类型是以下类型的时候，必须使用该字段，不允许使用 marketing_asset_id : MARKETING_TARGET_TYPE_APP_ANDROID,MARKETING_TARGET_TYPE_APP_IOS,MARKETING_TARGET_TYPE_APP_QUICK_APP,MARKETING_TARGET_TYPE_WECHAT_MINI_GAME,MARKETING_TARGET_TYPE_WECHAT_CHANNELS,MARKETING_TARGET_TYPE_MINI_PROGRAM_WECHAT,MARKETING_TARGET_TYPE_WECHAT_CHANNELS_LIVE,MARKETING_TARGET_TYPE_WECHAT_CHANNELS_LIVE_RESERVATION,MARKETING_TARGET_TYPE_CONSUMER_PRODUCT,MARKETING_TARGET_TYPE_WECHAT_OFFICIAL_ACCOUNT,MARKETING_TARGET_TYPE_LOCAL_STORE,MARKETING_TARGET_TYPE_LOCAL_STORE_PACKAGE,MARKETING_TARGET_TYPE_COMMODITY_SET,MARKETING_TARGET_TYPE_WECHAT_WORK,MARKETING_TARGET_TYPE_MINI_GAME_QQ,MARKETING_TARGET_TYPE_PC_GAME,MARKETING_TARGET_TYPE_WECHAT_STORE_PRODUCT,MARKETING_TARGET_TYPE_FICTION,MARKETING_TARGET_TYPE_SHORT_DRAMA. |
| marketing_target_type | enum | 推广产品类型，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#api_marketing_target_type) 可选值：{ MARKETING_TARGET_TYPE_APP_ANDROID, MARKETING_TARGET_TYPE_APP_IOS, MARKETING_TARGET_TYPE_WECHAT_OFFICIAL_ACCOUNT, MARKETING_TARGET_TYPE_PRODUCT, MARKETING_TARGET_TYPE_TRAFFIC, MARKETING_TARGET_TYPE_LOCAL_STORE, MARKETING_TARGET_TYPE_WECHAT_MINI_GAME, MARKETING_TARGET_TYPE_CONSUMER_PRODUCT, MARKETING_TARGET_TYPE_WECHAT_CHANNELS, MARKETING_TARGET_TYPE_WECHAT_CHANNELS_LIVE, MARKETING_TARGET_TYPE_WECHAT_CHANNELS_LIVE_RESERVATION, MARKETING_TARGET_TYPE_MINI_PROGRAM_WECHAT, MARKETING_TARGET_TYPE_APP_QUICK_APP, MARKETING_TARGET_TYPE_CONSUME_MEDICAL, MARKETING_TARGET_TYPE_COMPREHENSIVE_HOUSEKEEPING, MARKETING_TARGET_TYPE_FICTION, MARKETING_TARGET_TYPE_SHORT_DRAMA, MARKETING_TARGET_TYPE_AUDIOVISUAL_ENTERTAINMENT, MARKETING_TARGET_TYPE_BEAUTY_AND_PERSONAL_CARE, MARKETING_TARGET_TYPE_WEDDING_AND_PORTRAIT_PHOTOGRAPHY, MARKETING_TARGET_TYPE_FRANCHISE_BRAND, MARKETING_TARGET_TYPE_ENTERPRISE_SERVICES, MARKETING_TARGET_TYPE_EXHIBITION_BOOTH_DESIGN, MARKETING_TARGET_TYPE_INSURANCE, MARKETING_TARGET_TYPE_BANK, MARKETING_TARGET_TYPE_CREDIT, MARKETING_TARGET_TYPE_INVESTMENT_CONSULTING, MARKETING_TARGET_TYPE_REAL_ESTATE, MARKETING_TARGET_TYPE_TELECOMMUNICATIONS_OPERATOR, MARKETING_TARGET_TYPE_TOURIST_ATTRACTIONS_TICKETS, MARKETING_TARGET_TYPE_RENOVATION_SERVICES, MARKETING_TARGET_TYPE_FURNITURE_AND_BUILDING_MATERIALS, MARKETING_TARGET_TYPE_EXHIBITION_SALES, MARKETING_TARGET_TYPE_MEDICINE_INDUSTRY_COMMERCIAL, MARKETING_TARGET_TYPE_FINANCE, MARKETING_TARGET_TYPE_LOCAL_STORE_PACKAGE, MARKETING_TARGET_TYPE_CATERING_AND_LEISURE, MARKETING_TARGET_TYPE_CHAIN_RESTAURANT, MARKETING_TARGET_TYPE_COMMODITY_SET, MARKETING_TARGET_TYPE_TOURIST_TRAVEL_ROUTE, MARKETING_TARGET_TYPE_TOURIST_CRUISE_LINE, MARKETING_TARGET_TYPE_TOURIST_HOTEL_SERVICE, MARKETING_TARGET_TYPE_TOURIST_AIRLINE_TICKETS, MARKETING_TARGET_TYPE_LOCAL_STORE_COMBINE_WITH_PRODUCT, MARKETING_TARGET_TYPE_ACTIVITY, MARKETING_TARGET_TYPE_STORE, MARKETING_TARGET_TYPE_MINI_GAME_QQ, MARKETING_TARGET_TYPE_PC_GAME, MARKETING_TARGET_TYPE_WECHAT_WORK, MARKETING_TARGET_TYPE_LIVE_STREAM_ROOM, MARKETING_TARGET_TYPE_PERSONAL_STORE, MARKETING_TARGET_TYPE_PLATFORM_CHANNEL, MARKETING_TARGET_TYPE_TWO_WHEEL_VEHICLE, MARKETING_TARGET_TYPE_GOVERNMENT_AFFAIRS, MARKETING_TARGET_TYPE_CAR_ECOLOGY, MARKETING_TARGET_TYPE_WECHAT_STORE_PRODUCT, MARKETING_TARGET_TYPE_APP_HARMONY, MARKETING_TARGET_TYPE_WECHAT_STORE_PRODUCT_SET, MARKETING_TARGET_TYPE_PRODUCT_AGGREGATION_PAGE, MARKETING_TARGET_TYPE_WECHAT_STORE, MARKETING_TARGET_TYPE_RESALE_AND_COMMERCIAL_LAND, MARKETING_TARGET_TYPE_VIDEO_PROGRAM, MARKETING_TARGET_TYPE_FUN_TEST, MARKETING_TARGET_TYPE_MATERNITY_PARENTING, MARKETING_TARGET_TYPE_LEISURE_ENTERTAINMENT, MARKETING_TARGET_TYPE_MEDICAL_INSTITUTION, MARKETING_TARGET_TYPE_WECHAT_CHANNELS_ACTIVITY } |
| marketing_asset_outer_id | string | 推广产品外部 id，如安卓应用 id、IOS 应用 id、小游戏 id、商品库 id 等 字段长度最小 1 字节，长度最大 1024 字节 |
| marketing_asset_outer_sub_id | string | 推广产品外部子 id，如安卓应用渠道包 id、短剧 sku_id 等 字段长度最小 1 字节，长度最大 1024 字节 |
| marketing_asset_outer_name | string | 推广产品外部名称 字段长度最小 1 字节，长度最大 1024 字节 |
| mpa_spec | struct | 动态商品广告属性，当广告形态为动态商品广告时，该字段必填，ADX 程序化广告不可填写提交。 |
| recommend_method_ids | integer[] | 动态创意广告的商品推荐方式，有使用权限的推荐方式 id，当广告形态为动态创意广告时，该字段必填，如填写多个推荐方式，需确保推荐方式的父节点为同一个 数组最小长度 1，最大长度 16 |
| product_catalog_id | string | 商品库 id |
| product_series_id | string | 商品集合 id |
| dynamic_ad_type | enum | 动态广告类型，当前仅支持设置为 DCA 动态内容广告类型，该广告设置后不可修改，广告读取时非动态广告无法读取该字段，创建创意时仅支持自定义创意的投放模式，当前功能灰度放中仅部分客户可用，如有问题可联系您的客户运营。ADX 程序化广告不可填写提交，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#dynamic_ad_type) 可选值：{ DYNAMIC_AD_TYPE_DYNAMIC_CONTENT } |
| adgroup_type | enum | 广告类型，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#adgroup_type) 可选值：{ ADGROUP_TYPE_SEARCH, ADGROUP_TYPE_NORMAL } |

## 请求示例

```
curl -v -G 'https://api.e.qq.com/v3.0/ad_param/get?access_token=<ACCESS_TOKEN>&timestamp=<TIMESTAMP>&nonce=<NONCE>' \
-d 'account_id=25610' \
-d 'site_set=SITE_SET_MOBILE_UNION' \
-d 'product_catalog_id=1' \
-d 'marketing_asset_outer_spec=[]' \
-d 'mpa_spec={
    "recommend_method_ids": [],
    "product_catalog_id": 1
}'
curl -v -G 'https://api.e.qq.com/v3.0/ad_param/get?access_token=<ACCESS_TOKEN>&timestamp=<TIMESTAMP>&nonce=<NONCE>' \
-d 'account_id=25610' \
-d 'site_set=SITE_SET_MOBILE_UNION' \
-d 'product_catalog_id=1' \
-d 'marketing_asset_outer_spec=[]' \
-d 'mpa_spec={
    "recommend_method_ids": [],
    "product_catalog_id": 1
}'
```

## 应答字段

| 名称 | 类型 | 描述 |
| --- | --- | --- |
| system_ad_param_list | struct[] | 返回信息列表 |
| code | string | ，词包，用于广告文案中某些字段的自动替换 |
| name | string | 词包名称 |
| description | string | 词包描述 |
| max_length | integer | 词包最大长度 |
| product_ad_param_list | struct[] | 返回信息列表 |
| code | string | ，词包，用于广告文案中某些字段的自动替换 |
| name | string | 词包名称 |
| description | string | 词包描述 |
| max_length | integer | 词包最大长度 |
| dynamic_content_ad_param_list | struct[] | 返回信息列表 |
| code | string | ，词包，用于广告文案中某些字段的自动替换 |
| name | string | 词包名称 |
| description | string | 词包描述 |
| max_length | integer | 词包最大长度 |

## 应答示例

```
{
    "code": 0,
    "message": "",
    "message_cn": "",
    "data": {
        "system_ad_param_list": [
            {
                "code": "city",
                "name": "城市",
                "description": "使用城市词包，广告展示时，用户会在该广告文案上看到他所在的城市信息，如深圳，武汉",
                "max_length": 4
            },
            {
                "code": "gender",
                "name": "性别",
                "description": "使用性别词包，广告展示时，用户会在该广告文案上看到他相关的性别信息，如男，女",
                "max_length": 2
            },
            {
                "code": "day",
                "name": "日期",
                "description": "使用日期词包，广告展示时，用户会在该广告文案上看到当天日期信息，如 12 月 30 日",
                "max_length": 6
            },
            {
                "code": "week",
                "name": "星期",
                "description": "使用星期词包，广告展示时，用户会在该广告文案上看到当天星期，如星期三",
                "max_length": 3
            },
            {
                "code": "constellation",
                "name": "星座",
                "description": "使用星座词包，广告展示时，用户会在该广告文案上看到他所属的星座，如射手座，金牛座",
                "max_length": 3
            },
            {
                "code": "constellation_date",
                "name": "星座日期",
                "description": "使用星座时间区间词包，广告展示时，用户会在该广告文案上看到他所属的星座时间区间，如 11.23-12.21",
                "max_length": 6
            }
        ],
        "product_ad_param_list": [
            {
                "code": "product.product_short_name",
                "name": "商品简称",
                "description": "欧帝奴浴室柜, OSPREY 双肩包, 蔻驰相机包, 欧米茄石英表",
                "max_length": 10
            },
            {
                "code": "product.first_category_name",
                "name": "一级分类名称",
                "description": "家装建材, 运动户外, 礼品, 钟表眼镜",
                "max_length": 8
            },
            {
                "code": "product.second_category_name",
                "name": "二级分类名称",
                "description": "厨房卫浴, 户外装备, 奢侈品, 腕表",
                "max_length": 8
            }
        ],
        "dynamic_content_ad_param_list": [
            {
                "code": 0
            }
        ]
    }
}
```

## 可视化调试工具

问题仍未解决？

请前往腾讯广告反馈中心在线提交问题，我们的人工客服将为你服务
