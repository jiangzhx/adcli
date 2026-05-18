---
title: 创建批量请求 全部接口
platform: tencent_ads
source_url: https://developers.e.qq.com/v3.0/docs/api/batch_requests/add
doc_id: tencent_ads_v3_0_docs_api_batch_requests_add
source_id: tencent_ads_v3_0_docs_api_batch_requests_add
---
# 创建批量请求 [全部接口](https://developers.e.qq.com/v3.0/docs/apilist)

| 所属权限 | ads_management |
| --- | --- |
| 请求地址 | batch_requests/add |
| 请求方法 | POST |
| Content-Type | application/json |

## 全局参数

全局参数是指每一个接口都需要使用到的参数。详情[参考](https://developers.e.qq.com/v3.0/pages/send_request)，代码案例[参考](https://developers.e.qq.com/v3.0/pages/send_request)。

| 参数名称 | 参数类型 |
| --- | --- |
| access_token | 授权令牌，完成 OAuth 2.0 授权后获得，参考[授权认证](https://developers.e.qq.com/docs/start/authorization)章节 |
| timestamp | 当前的时间戳，单位为秒，允许客户端请求最大时间误差为 300 秒。 MarketingAPI 所使用的时间戳，若无特殊说明，均为秒级时间戳 MarketingAPI 所使用的时区为 GMT+8，例如当时间戳为 1494840119 时，表示 2017-05-15 17:21:59 |
| nonce | 随机字串标识，不超过 32 个字符，由调用方自行生成，需保证全局唯一性 |

## 特定请求参数

该参数为实名认证要求参数,调用受限接口时必传，注意不是放在 header 中

| 参数名称 | 参数类型 |
| --- | --- |
| user_token | 实名认证完成获取的令牌，获取方式参考[API 身份验证升级公告](https://docs.qq.com/doc/DSVdkdk1LQ1hOam5n)中的开发者对接文档 |

## 请求参数

标有*的参数为必填项

| 名称 | 类型 | 描述 |
| --- | --- | --- |
| batch_request_spec* | struct[] | 批量调用接口所需条件列表 |
| relative_path* | string | 相对接口请求路径； POST 请求不带参数，形如：v3.0/adgroups/update ； GET 请求带参数，形如：v3.0/adgroups/get?account_id=12345 |
| body | string | POST 原始请求时的正文，是 JSON 编码的字符串 |

使用说明

## 请求示例

```
curl 'https://api.e.qq.com/v3.0/batch_requests/add?access_token=<ACCESS_TOKEN>&timestamp=<TIMESTAMP>&nonce=<NONCE>' \
-H 'Content-Type: application/json' \
-d '{
    "batch_request_spec": [
        {
            "body": "{\"adgroup_id\": 5076530760, \"dynamic_creative_id\": 41006154, \"configured_status\": \"AD_STATUS_NORMAL\", \"account_id\": 20458}",
            "relative_path": "v3.0/dynamic_creatives/update"
        },
        {
            "body": "{\"adgroup_id\": 5076530876, \"dynamic_creative_id\": 41006147, \"configured_status\": \"AD_STATUS_SUSPEND\", \"account_id\": 20458}",
            "relative_path": "v3.0/dynamic_creatives/update"
        }
    ]
}'
curl 'https://api.e.qq.com/v3.0/batch_requests/add?access_token=<ACCESS_TOKEN>&timestamp=<TIMESTAMP>&nonce=<NONCE>' \
-H 'Content-Type: application/json' \
-d '{
    "batch_request_spec": [
        {
            "body": "{\"adgroup_id\": 5076530760, \"dynamic_creative_id\": 41006154, \"configured_status\": \"AD_STATUS_NORMAL\", \"account_id\": 20458}",
            "relative_path": "v3.0/dynamic_creatives/update"
        },
        {
            "body": "{\"adgroup_id\": 5076530876, \"dynamic_creative_id\": 41006147, \"configured_status\": \"AD_STATUS_SUSPEND\", \"account_id\": 20458}",
            "relative_path": "v3.0/dynamic_creatives/update"
        }
    ]
}'
```

## 应答字段

| 名称 | 类型 | 描述 |
| --- | --- | --- |
| list | struct[] | 返回信息列表 |
| http_code | integer | http 返回码 |
| headers | struct[] | http header |
| name | string | 单个 header 名 |
| value | string | 单个 header 值 |
| body | string | 返回的正文数据 |

## 应答示例

```
{
    "code": 0,
    "message": "",
    "message_cn": "",
    "data": {
        "list": [
            {
                "body": "{\"code\":0,\"data\":{\"dynamic_creative_id\":41006154},\"message\":\"\",\"message_cn\":\"\"}"
            },
            {
                "body": "{\"code\":0,\"data\":{\"dynamic_creative_id\":41006147},\"message\":\"\",\"message_cn\":\"\"}"
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
