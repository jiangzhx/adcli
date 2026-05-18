---
title: 获取落地页通配符 全部接口
platform: tencent_ads
source_url: https://developers.e.qq.com/v3.0/docs/api/wildcards/get
doc_id: tencent_ads_v3_0_docs_api_wildcards_get
source_id: tencent_ads_v3_0_docs_api_wildcards_get
---
# 获取落地页通配符 [全部接口](https://developers.e.qq.com/v3.0/docs/apilist)

| 所属权限 | ads_management |
| --- | --- |
| 请求地址 | wildcards/get |
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
| account_id* | integer | 推广帐号 id，有操作权限的帐号 id，包括代理商和广告主帐号 id |
| product_catalog_id* | integer | 商品库 id |
| marketing_carrier_type* | enum | 营销载体类型，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#api_marketing_carrier_type) 可选值：{ MARKETING_CARRIER_TYPE_UNKNOWN, MARKETING_CARRIER_TYPE_APP_ANDROID, MARKETING_CARRIER_TYPE_APP_IOS, MARKETING_CARRIER_TYPE_WECHAT_OFFICIAL_ACCOUNT, MARKETING_CARRIER_TYPE_JUMP_PAGE, MARKETING_CARRIER_TYPE_WECHAT_MINI_GAME, MARKETING_CARRIER_TYPE_WECHAT_CHANNELS_LIVE, MARKETING_CARRIER_TYPE_WECHAT_CHANNELS, MARKETING_CARRIER_TYPE_WECHAT_CHANNELS_LIVE_RESERVATION, MARKETING_CARRIER_TYPE_MINI_PROGRAM_WECHAT, MARKETING_CARRIER_TYPE_APP_QUICK_APP, MARKETING_CARRIER_TYPE_PC_GAME, MARKETING_CARRIER_TYPE_QQ_MINI_GAME, MARKETING_CARRIER_TYPE_APP_HARMONY } |

## 请求示例

```
curl -v -G 'https://api.e.qq.com/v3.0/wildcards/get?access_token=<ACCESS_TOKEN>&timestamp=<TIMESTAMP>&nonce=<NONCE>' \
-d 'account_id=25610' \
-d 'product_catalog_id=6'
curl -v -G 'https://api.e.qq.com/v3.0/wildcards/get?access_token=<ACCESS_TOKEN>&timestamp=<TIMESTAMP>&nonce=<NONCE>' \
-d 'account_id=25610' \
-d 'product_catalog_id=6'
```

## 应答字段

| 名称 | 类型 | 描述 |
| --- | --- | --- |
| list | struct[] | 返回信息列表 |
| wildcard | string | 通配符用于落地页中某些字段的自动替换 |
| wildcard_type | enum | 通配符类型，[\[枚举详情\]](https://developers.e.qq.com/v3.0/docs/enums#wildcard_type) |
| display_name | string | 通配符展示名称 |

## 应答示例

```
{
    "code": 0,
    "message": "",
    "message_cn": "",
    "data": {
        "list": [
            {
                "wildcard": "%%product_id1%%",
                "wildcard_type": "PRODUCT_INDEX",
                "display_name": "商品 1"
            },
            {
                "wildcard": "%%product_id2%%",
                "wildcard_type": "PRODUCT_INDEX",
                "display_name": "商品 2"
            },
            {
                "wildcard": "%%target_url_mobile%%",
                "wildcard_type": "LANDING_PAGE",
                "display_name": "移动 H5 落地页 1"
            }
        ]
    }
}
```

## 可视化调试工具

请求

问题仍未解决？

请前往腾讯广告反馈中心在线提交问题，我们的人工客服将为你服务
