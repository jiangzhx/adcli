---
title: 获取通话结果 全部接口
platform: tencent_ads
source_url: https://developers.e.qq.com/v3.0/docs/api/leads_call_record/get
doc_id: tencent_ads_v3_0_docs_api_leads_call_record_get
source_id: tencent_ads_v3_0_docs_api_leads_call_record_get
---
# 获取通话结果 [全部接口](https://developers.e.qq.com/v3.0/docs/apilist)

| 所属权限 | ads_management,ads_insights,account_management,audience_management,user_actions |
| --- | --- |
| 请求地址 | leads_call_record/get |
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
| account_id* | integer | 广告主账号 id，直客账号或子客账号 |
| leads_id | integer | 线索 id |
| outer_leads_id | string | 作为线索管理平台的线索与客户侧 CRM 系统的线索关联的唯一标识，outer_leads_id 和 leads_id 二选一必填 |
| request_id | string | 代表唯一的业务请求，如果因为网络或其他原因重试时，此 id 不变。如果不填，线索平台生成后返回。如果填写了，原样返回 |
| contact_id | string | 用来标识一次外呼行为 |

## 请求示例

```
curl -v -G 'https://api.e.qq.com/v3.0/leads_call_record/get?access_token=<ACCESS_TOKEN>&timestamp=<TIMESTAMP>&nonce=<NONCE>' \
-d 'account_id=123456' \
-d 'leads_id=218000154' \
-d 'request_id=223255a1-2d02-44d0-8c1b-7217302de746' \
-d 'contact_id=xat-conat-id'
curl -v -G 'https://api.e.qq.com/v3.0/leads_call_record/get?access_token=<ACCESS_TOKEN>&timestamp=<TIMESTAMP>&nonce=<NONCE>' \
-d 'account_id=123456' \
-d 'leads_id=218000154' \
-d 'request_id=223255a1-2d02-44d0-8c1b-7217302de746' \
-d 'contact_id=xat-conat-id'
```

## 应答字段

| 名称 | 类型 | 描述 |
| --- | --- | --- |
| call_records | struct[] | 通话记录列表 |
| call_id | string | 该通话记录的唯一 id |
| account_id | integer | 广告主账号 id，直客账号或子客账号 |
| leads_id | integer | 线索 id |
| contact_id | string | 用来标识一次外呼行为 |
| caller | string | 主叫号码，11 位手机号或座机号(例如:01085170811) |
| callee | string | 被叫号码，11 位手机号或座机号(例如:01085170811) |
| call_direction | string | 呼叫方式，CALL_IN：呼入, CALL_OUT：呼出 |
| duration | integer | 通话时长，单位：秒 |
| call_start_time | string | 呼叫开始时间，例如，2019-10-18 10:52:39 |
| call_end_time | string | 呼叫结束时间，例如，2019-10-18 10:52:39 |
| ring_time | string | 振铃时间，例如，2019-10-18 10:52:39 |
| answer_time | string | 接听时间，例如，2019-10-18 10:52:39 |
| end_status | integer | 通话结束状态，0 正常通话，1 拒接，2 无人接听，3 关机，4 停机，5 正在通话中，6 暂时无法接通，7 空号，8 主叫挂断 9 主叫取消，10 其他 |
| call_record_url | string | 通话录音 url，7 天内有效 |
| request_id | string | 代表唯一的业务请求，如果因为网络或其他原因重试时，此 id 不变。如果不填，线索平台生成后返回。如果填写了，原样返回 |

## 应答示例

```
{
    "code": 0,
    "message": "",
    "message_cn": "",
    "data": {
        "call_records": [
            {
                "call_id": "clouspstn_16-230110-7186854205522307833167331989018423960427189",
                "account_id": 20458,
                "leads_id": 218000154,
                "contact_id": "xat-conat-id",
                "caller": "13810433402",
                "callee": "13717983965",
                "call_direction": "CALL_OUT",
                "duration": 14,
                "call_start_time": "2023-01-10 11:04:50",
                "call_end_time": "2023-01-10 11:05:14",
                "ring_time": "2023-01-10 11:04:51",
                "answer_time": "2023-01-10 11:05:00",
                "end_status": 0,
                "call_record_url": ""
            }
        ],
        "request_id": "223255a1-2d02-44d0-8c1b-7217302de746"
    }
}
```

## 可视化调试工具

问题仍未解决？

请前往腾讯广告反馈中心在线提交问题，我们的人工客服将为你服务
