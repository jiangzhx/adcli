---
title: 更新客户人群 全部接口
platform: tencent_ads
source_url: https://developers.e.qq.com/v3.0/docs/api/custom_audiences/update
doc_id: tencent_ads_v3_0_docs_api_custom_audiences_update
source_id: tencent_ads_v3_0_docs_api_custom_audiences_update
---
# 更新客户人群 [全部接口](https://developers.e.qq.com/v3.0/docs/apilist)

| 所属权限 | audience_management,ads_management,user_actions |
| --- | --- |
| 请求地址 | custom_audiences/update |
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
| audience_id* | integer | 人群 id，通过 [\[custom_audiences\]](https://developers.e.qq.com/v3.0/docs/api/custom_audiences/add) 模块创建客户人群获得 |
| name | string | 人群名称，同一个帐号下的人群不许重名,人群名称、人群描述、是否深度合作至少填写一个 字段长度最小 1 字节，长度最大 32 字节 |
| description | string | 人群描述，人群名称、人群描述、是否深度合作至少填写一个 字段长度最小 1 字节，长度最大 100 字节 |
| cooperated | boolean | 深度数据合作，可将您的数据数据从 DMP 平台导出，平台将为您进行定制化的挖掘，进行深度数据合作;只有客户人群的创建者才能修改是否深度合作，人群名称、人群描述、是否深度合作至少填写一个 可选值：{ true, false } |

## 请求示例

```
curl 'https://api.e.qq.com/v3.0/custom_audiences/update?access_token=<ACCESS_TOKEN>&timestamp=<TIMESTAMP>&nonce=<NONCE>' \
-H 'Content-Type: application/json' \
-d '{
    "account_id": "<ACCOUNT_ID>",
    "audience_id": "<AUDIENCE_ID>",
    "name": "客户人群",
    "description": "客户人群描述"
}'
curl 'https://api.e.qq.com/v3.0/custom_audiences/update?access_token=<ACCESS_TOKEN>&timestamp=<TIMESTAMP>&nonce=<NONCE>' \
-H 'Content-Type: application/json' \
-d '{
    "account_id": "<ACCOUNT_ID>",
    "audience_id": "<AUDIENCE_ID>",
    "name": "客户人群",
    "description": "客户人群描述"
}'
```

## 应答字段

## 应答示例

```
{
    "code": 0,
    "message": "",
    "message_cn": ""
}
```

## 可视化调试工具

请求

## 相关阅读

问题仍未解决？

请前往腾讯广告反馈中心在线提交问题，我们的人工客服将为你服务
