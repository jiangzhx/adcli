---
title: 网络电话呼叫 全部接口
platform: tencent_ads
source_url: https://developers.e.qq.com/v3.0/docs/api/leads_voip_call/add
doc_id: tencent_ads_v3_0_docs_api_leads_voip_call_add
source_id: tencent_ads_v3_0_docs_api_leads_voip_call_add
---
# 网络电话呼叫 [全部接口](https://developers.e.qq.com/v3.0/docs/apilist)

| 所属权限 | ads_management,ads_insights,account_management,audience_management,user_actions |
| --- | --- |
| 请求地址 | leads_voip_call/add |
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
| account_id* | integer | 广告主账号 id，直客账号或子客账号 |
| leads_id | integer | 线索 id |
| outer_leads_id | string | 作为线索管理平台的线索与客户侧 CRM 系统的线索关联的唯一标识，outer_leads_id 和 leads_id 二选一必填 |
| user_id* | integer | 客服 id，平台下客服 id 不能重复 |
| callee_number* | string | 线索号码 |
| request_id | string | 代表唯一的业务请求，如果因为网络或其他原因重试时，此 id 不变。如果不填，线索平台生成后返回。如果填写了，原样返回 |
| version | string | 版本号，不填就是最新版 |

## 请求示例

```
curl 'https://api.e.qq.com/v3.0/leads_voip_call/add?access_token=<ACCESS_TOKEN>&timestamp=<TIMESTAMP>&nonce=<NONCE>' \
-H 'Content-Type: application/json' \
-d '{
    "account_id": "<ACCOUNT_ID>"
}'
curl 'https://api.e.qq.com/v3.0/leads_voip_call/add?access_token=<ACCESS_TOKEN>&timestamp=<TIMESTAMP>&nonce=<NONCE>' \
-H 'Content-Type: application/json' \
-d '{
    "account_id": "<ACCOUNT_ID>"
}'
```

## 应答字段

| 名称 | 类型 | 描述 |
| --- | --- | --- |
| contact_id | string | 用来标识一次外呼行为 |
| request_id | string | 代表唯一的业务请求，如果因为网络或其他原因重试时，此 id 不变。如果不填，线索平台生成后返回。如果填写了，原样返回 |

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

问题仍未解决？

请前往腾讯广告反馈中心在线提交问题，我们的人工客服将为你服务
