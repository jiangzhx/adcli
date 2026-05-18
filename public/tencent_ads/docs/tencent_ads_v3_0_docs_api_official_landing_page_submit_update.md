---
title: 官方落地页-送审落地页 全部接口
platform: tencent_ads
source_url: https://developers.e.qq.com/v3.0/docs/api/official_landing_page_submit/update
doc_id: tencent_ads_v3_0_docs_api_official_landing_page_submit_update
source_id: tencent_ads_v3_0_docs_api_official_landing_page_submit_update
---
# 官方落地页-送审落地页 [全部接口](https://developers.e.qq.com/v3.0/docs/apilist)

| 所属权限 | ads_management |
| --- | --- |
| 请求地址 | official_landing_page_submit/update |
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
| account_id* | integer | 推广帐号 id，有操作权限的帐号 id，包括代理商和广告主帐号 id |
| page_id | int64 | 落地页服务 id，用于广告投放端搭建广告创意选择落地页时使用 |

## 请求示例

```
curl 'https://api.e.qq.com/v3.0/official_landing_page_submit/update?access_token=<ACCESS_TOKEN>&timestamp=<TIMESTAMP>&nonce=<NONCE>' \
-H 'Content-Type: application/json' \
-d '{
    "account_id": "<ACCOUNT_ID>",
    "page_id": 12345678
}'
curl 'https://api.e.qq.com/v3.0/official_landing_page_submit/update?access_token=<ACCESS_TOKEN>&timestamp=<TIMESTAMP>&nonce=<NONCE>' \
-H 'Content-Type: application/json' \
-d '{
    "account_id": "<ACCOUNT_ID>",
    "page_id": 12345678
}'
```

## 应答字段

| 名称 | 类型 | 描述 |
| --- | --- | --- |
| account_id | integer | 推广帐号 id，有操作权限的帐号 id，包括代理商和广告主帐号 id |
| page_id | int64 | 落地页服务 id，用于广告投放端搭建广告创意选择落地页时使用 |
| landing_page_id | integer | 官方落地页 id，仅用于官方落地页模块时使用 |

## 应答示例

```
{
    "code": 0,
    "message": "",
    "message_cn": "",
    "data": {
        "page_id": 12345678,
        "account_id": "<ACCOUNT_ID>",
        "landing_page_id": 123456
    }
}
```

## 可视化调试工具

问题仍未解决？

请前往腾讯广告反馈中心在线提交问题，我们的人工客服将为你服务
