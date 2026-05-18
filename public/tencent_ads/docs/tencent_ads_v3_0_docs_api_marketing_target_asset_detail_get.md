---
title: 获取推广内容资产详情 全部接口
platform: tencent_ads
source_url: https://developers.e.qq.com/v3.0/docs/api/marketing_target_asset_detail/get
doc_id: tencent_ads_v3_0_docs_api_marketing_target_asset_detail_get
source_id: tencent_ads_v3_0_docs_api_marketing_target_asset_detail_get
---
# 获取推广内容资产详情 [全部接口](https://developers.e.qq.com/v3.0/docs/apilist)

| 所属权限 | ads_management,ads_insights |
| --- | --- |
| 请求地址 | marketing_target_asset_detail/get |
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
| account_id | integer | 推广帐号 id，有操作权限的帐号 id，包括代理商和广告主帐号 id |
| marketing_asset_id* | integer | 产品 id 最小值 0，最大值 9999999999 |
| marketing_target_type* | enum | 推广内容资产类型，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#api_marketing_target_type) 可选值：{ MARKETING_TARGET_TYPE_FRANCHISE_BRAND, MARKETING_TARGET_TYPE_ENTERPRISE_SERVICES, MARKETING_TARGET_TYPE_REAL_ESTATE, MARKETING_TARGET_TYPE_LIVE_STREAM_ROOM, MARKETING_TARGET_TYPE_PERSONAL_STORE, MARKETING_TARGET_TYPE_AUDIOVISUAL_ENTERTAINMENT, MARKETING_TARGET_TYPE_PLATFORM_CHANNEL, MARKETING_TARGET_TYPE_STORE, MARKETING_TARGET_TYPE_FINANCE, MARKETING_TARGET_TYPE_TOURIST_ATTRACTIONS_TICKETS, MARKETING_TARGET_TYPE_TOURIST_TRAVEL_ROUTE, MARKETING_TARGET_TYPE_TOURIST_CRUISE_LINE, MARKETING_TARGET_TYPE_TOURIST_HOTEL_SERVICE, MARKETING_TARGET_TYPE_TOURIST_AIRLINE_TICKETS, MARKETING_TARGET_TYPE_ACTIVITY, MARKETING_TARGET_TYPE_CATERING_AND_LEISURE, MARKETING_TARGET_TYPE_CHAIN_RESTAURANT, MARKETING_TARGET_TYPE_PRODUCT, MARKETING_TARGET_TYPE_TELECOMMUNICATIONS_OPERATOR, MARKETING_TARGET_TYPE_RENOVATION_SERVICES, MARKETING_TARGET_TYPE_FURNITURE_AND_BUILDING_MATERIALS, MARKETING_TARGET_TYPE_BEAUTY_AND_PERSONAL_CARE, MARKETING_TARGET_TYPE_WEDDING_AND_PORTRAIT_PHOTOGRAPHY, MARKETING_TARGET_TYPE_COMPREHENSIVE_HOUSEKEEPING, MARKETING_TARGET_TYPE_VIDEO_PROGRAM } |
| organization_id | integer | 业务单元 id 最小值 0，最大值 9999999999 |

## 请求示例

```
curl -v -G 'https://api.e.qq.com/v3.0/marketing_target_asset_detail/get?access_token=<ACCESS_TOKEN>&timestamp=<TIMESTAMP>&nonce=<NONCE>' \
-d 'marketing_asset_id=223868' \
-d 'marketing_target_type=MARKETING_TARGET_TYPE_PERSONAL_STORE' \
-d 'account_id=<ACCOUNT_ID>'
curl -v -G 'https://api.e.qq.com/v3.0/marketing_target_asset_detail/get?access_token=<ACCESS_TOKEN>&timestamp=<TIMESTAMP>&nonce=<NONCE>' \
-d 'marketing_asset_id=223868' \
-d 'marketing_target_type=MARKETING_TARGET_TYPE_PERSONAL_STORE' \
-d 'account_id=<ACCOUNT_ID>'
```

## 应答字段

| 名称 | 类型 | 描述 |
| --- | --- | --- |
| list | struct[] | 资产列表 |
| marketing_asset_id | integer | 产品 id，marketing_asset_id 与 marketing_asset_outer_spec 不能同时为空，也不能同时使用 |
| marketing_asset_name | string | 产品名称 |
| marketing_asset_type | enum | 产品类型，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#marketing_asset_type) |
| marketing_target_type | enum | 推广内容资产类型，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#api_marketing_target_type) |
| created_time | integer | 创建时间，时间戳 |
| properties | struct[] | 资产属性列表 |
| property_name | enum | 属性名称，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#promoted_asset_attr_key) |
| property_value | string[] | 属性值 |
| property_class | enum | 属性类型，营销对象属性、唯一属性、附加属性，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#marketing_asset_attr_class) |
| property_cn | string | 属性中文名 |
| extra_properties | struct[] | 附加属性列表 |
| property_cn | string | 属性中文名 |
| property_value | string[] | 属性值 |

## 应答示例

```
{
    "code": 0,
    "message": "",
    "message_cn": "",
    "data": {
        "list": [
            {
                "created_time": 1711443568,
                "marketing_asset_name": "17114435687966",
                "marketing_asset_type": "MARKETING_ASSET_TYPE_UNKNOWN",
                "marketing_target_type": "MARKETING_TARGET_TYPE_PERSONAL_STORE",
                "extra_properties": [],
                "marketing_asset_id": 223868,
                "properties": [
                    {
                        "property_value": [
                            "深圳市腾讯计算机系统有限公司"
                        ],
                        "property_name": "PROMOTED_ASSET_ATTR_KEY_PERSONAL_STORE_COMPANY_ENTITY"
                    }
                ]
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
