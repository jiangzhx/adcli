---
title: 获取可用的推广内容资产类目 全部接口
platform: tencent_ads
source_url: https://developers.e.qq.com/v3.0/docs/api/marketing_target_asset_categories/get
doc_id: tencent_ads_v3_0_docs_api_marketing_target_asset_categories_get
source_id: tencent_ads_v3_0_docs_api_marketing_target_asset_categories_get
---
# 获取可用的推广内容资产类目 [全部接口](https://developers.e.qq.com/v3.0/docs/apilist)

| 所属权限 | ads_management,ads_insights |
| --- | --- |
| 请求地址 | marketing_target_asset_categories/get |
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
| organization_id* | integer | 业务单元 id 最小值 0，最大值 9999999999 |
| marketing_target_type* | enum | 推广内容资产类型，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#api_marketing_target_type) 可选值：{ MARKETING_TARGET_TYPE_FRANCHISE_BRAND, MARKETING_TARGET_TYPE_ENTERPRISE_SERVICES, MARKETING_TARGET_TYPE_REAL_ESTATE, MARKETING_TARGET_TYPE_LIVE_STREAM_ROOM, MARKETING_TARGET_TYPE_PERSONAL_STORE, MARKETING_TARGET_TYPE_AUDIOVISUAL_ENTERTAINMENT, MARKETING_TARGET_TYPE_PLATFORM_CHANNEL, MARKETING_TARGET_TYPE_STORE, MARKETING_TARGET_TYPE_FINANCE, MARKETING_TARGET_TYPE_TOURIST_ATTRACTIONS_TICKETS, MARKETING_TARGET_TYPE_TOURIST_TRAVEL_ROUTE, MARKETING_TARGET_TYPE_TOURIST_CRUISE_LINE, MARKETING_TARGET_TYPE_TOURIST_HOTEL_SERVICE, MARKETING_TARGET_TYPE_TOURIST_AIRLINE_TICKETS, MARKETING_TARGET_TYPE_ACTIVITY, MARKETING_TARGET_TYPE_CATERING_AND_LEISURE, MARKETING_TARGET_TYPE_CHAIN_RESTAURANT, MARKETING_TARGET_TYPE_PRODUCT, MARKETING_TARGET_TYPE_TELECOMMUNICATIONS_OPERATOR, MARKETING_TARGET_TYPE_RENOVATION_SERVICES, MARKETING_TARGET_TYPE_FURNITURE_AND_BUILDING_MATERIALS, MARKETING_TARGET_TYPE_BEAUTY_AND_PERSONAL_CARE, MARKETING_TARGET_TYPE_WEDDING_AND_PORTRAIT_PHOTOGRAPHY, MARKETING_TARGET_TYPE_COMPREHENSIVE_HOUSEKEEPING, MARKETING_TARGET_TYPE_VIDEO_PROGRAM } |
| marketing_asset_type | enum | 产品类型，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#marketing_asset_type) 可选值：{ MARKETING_ASSET_TYPE_FINANCE_LOAN, MARKETING_ASSET_TYPE_FINANCE_INSURANCE_A, MARKETING_ASSET_TYPE_FINANCE_INSURANCE_C, MARKETING_ASSET_TYPE_FINANCE_BANK_CARD_A, MARKETING_ASSET_TYPE_FINANCE_BANK_CARD_C, MARKETING_ASSET_TYPE_FINANCE_WEALTH, MARKETING_ASSET_TYPE_FINANCE_OTHER, MARKETING_ASSET_TYPE_TELECOMMUNICATIONS_OPERATOR_RINGTONE, MARKETING_ASSET_TYPE_TELECOMMUNICATIONS_OPERATOR_MEMBERSHIP_BENEFIT_PACKAGE, MARKETING_ASSET_TYPE_TELECOMMUNICATIONS_OPERATOR_DATA_PACK, MARKETING_ASSET_TYPE_TELECOMMUNICATIONS_OPERATOR_NUMBER_CARD, MARKETING_ASSET_TYPE_TELECOMMUNICATIONS_OPERATOR_BROADBAND, MARKETING_ASSET_TYPE_TELECOMMUNICATIONS_OPERATOR_NICE_MEMBER_DEAL, MARKETING_ASSET_TYPE_TELECOMMUNICATIONS_OPERATOR_OTHER, MARKETING_ASSET_TYPE_RENOVATION_SERVICES_SERVICE, MARKETING_ASSET_TYPE_RENOVATION_SERVICES_BRAND, MARKETING_ASSET_TYPE_FURNITURE_AND_BUILDING_MATERIALS_PRODUCT, MARKETING_ASSET_TYPE_FURNITURE_AND_BUILDING_MATERIALS_BRAND, MARKETING_ASSET_TYPE_TRAFFIC_CAR_BRAND, MARKETING_ASSET_TYPE_TRAFFIC_CAR_SERIES, MARKETING_ASSET_TYPE_TRAFFIC_CAR_MODEL, MARKETING_ASSET_TYPE_REAL_ESTATE_BRAND, MARKETING_ASSET_TYPE_REAL_ESTATE_REAL_ESTATE, MARKETING_ASSET_TYPE_REAL_ESTATE_LAYOUT, MARKETING_ASSET_TYPE_TOURIST_ATTRACTIONS_TICKETS_ATTRACTION, MARKETING_ASSET_TYPE_TOURIST_ATTRACTIONS_TICKETS_TICKET_PACKAGE, MARKETING_ASSET_TYPE_TOURIST_TRAVEL_ROUTE_BRAND, MARKETING_ASSET_TYPE_TOURIST_TRAVEL_ROUTE_FREE, MARKETING_ASSET_TYPE_TOURIST_TRAVEL_TRAVEL_ROUTE, MARKETING_ASSET_TYPE_TOURIST_CRUISE_LINE_CRUISE_BRAND, MARKETING_ASSET_TYPE_TOURIST_CRUISE_LINE_CRUISE_NAME, MARKETING_ASSET_TYPE_TOURIST_HOTEL_SERVICE_BRAND, MARKETING_ASSET_TYPE_TOURIST_HOTEL_SERVICE_SERVICE, MARKETING_ASSET_TYPE_TOURIST_AIRLINE_TICKETS_AIRLINE, MARKETING_ASSET_TYPE_TOURIST_AIRLINE_TICKETS_TICKETS, MARKETING_ASSET_TYPE_VIDEO_PROGRAM_MAIN } |
| filtering | struct[] | 过滤条件，若此字段不传，或传空则视为无限制条件 数组最小长度 1，最大长度 10 |
| field* | string | 过滤字段 字段长度最小 1 字节，长度最大 100 字节 |
| operator* | string | 操作符 |
| values* | string[] | 字段取值，values 数组的个数限制与 operator 的取值相关，详见 [\[过滤条件\]](https://developers.e.qq.com/docs/reference/illustration#filtering) |
| page | integer | 搜索页码 最小值 1，最大值 99999 默认值：1 |
| page_size | integer | 一页显示的数据条数 最小值 1，最大值 100 默认值：10 |

## 请求示例

```
curl -v -G 'https://api.e.qq.com/v3.0/marketing_target_asset_categories/get?access_token=<ACCESS_TOKEN>&timestamp=<TIMESTAMP>&nonce=<NONCE>' \
-d 'marketing_asset_type=MARKETING_ASSET_TYPE_PLATFORM_CHANNEL_APP_ANDROID' \
-d 'organization_id=23919314' \
-d 'marketing_target_type=MARKETING_TARGET_TYPE_PLATFORM_CHANNEL'
curl -v -G 'https://api.e.qq.com/v3.0/marketing_target_asset_categories/get?access_token=<ACCESS_TOKEN>&timestamp=<TIMESTAMP>&nonce=<NONCE>' \
-d 'marketing_asset_type=MARKETING_ASSET_TYPE_PLATFORM_CHANNEL_APP_ANDROID' \
-d 'organization_id=23919314' \
-d 'marketing_target_type=MARKETING_TARGET_TYPE_PLATFORM_CHANNEL'
```

## 应答字段

| 名称 | 类型 | 描述 |
| --- | --- | --- |
| list | struct[] | 资产类目列表 |
| cate1_id | string | 行业类目 id |
| cate1_name | string | 行业类目名称 |
| cate2_id | string | 行业类目 id |
| cate2_name | string | 行业类目名称 |
| cate3_id | string | 行业类目 id |
| cate3_name | string | 行业类目名称 |
| cate4_id | string | 行业类目 id |
| cate4_name | string | 行业类目名称 |
| cate3_disabled | boolean | 是否能用 |
| last_cate_tips | string | 末级类目 tips 文案 |
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
        "page_info": {
            "total_number": 1,
            "total_page": 1,
            "page": 1,
            "page_size": 10
        },
        "list": [
            {
                "cate1_id": "网服",
                "cate3_name": "都市短剧",
                "cate2_name": "小剧场",
                "cate1_name": "网服",
                "cate4_name": "",
                "cate3_id": "网服-小剧场-都市短剧",
                "cate2_id": "网服-小剧场",
                "cate4_id": ""
            },
            {
                "cate1_id": "网服",
                "cate3_name": "古风短剧",
                "cate2_name": "小剧场",
                "cate1_name": "网服",
                "cate4_name": "",
                "cate3_id": "网服-小剧场-古风短剧",
                "cate2_id": "网服-小剧场",
                "cate4_id": ""
            }
        ]
    }
}
```

## 场景组合示例

枚举值会自动根据已选条件变化，只展示有示例数据的枚举值

## 可视化调试工具

问题仍未解决？

请前往腾讯广告反馈中心在线提交问题，我们的人工客服将为你服务
