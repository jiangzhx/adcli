---
title: 订阅服务消息推送说明
platform: tencent_ads
source_url: https://developers.e.qq.com/v3.0/pages/subscription_callback
doc_id: tencent_ads_v3_0_pages_subscription_callback
source_id: tencent_ads_v3_0_pages_subscription_callback
---
# 订阅服务消息推送说明

## 一、首先在订阅中心创建相应的订阅任务，并填写回调接口

### 回调接口验证

会先往回调接口，发送测试消息，如下：

```
{"message_id":"0bbed23f80aa660f43d2","subscription_data":{"account_id_list":[123456]},"subscription_id":111111,"subscription_type":"REPORT_SUBSCRIPTION"}
```

### 应答示例

```
{"code":0,"data":{"message_id":"0bbed23f80aa660f43d2"}}
```

仅当收到 message_id 回复，且跟发送一致，才认为回调接口可用，验证通过

## 二、任务订阅的数据变动，进行消息推送

### 回调说明

| 名称 | 说明 |
| --- | --- |
| 请求地址 | 订阅任务创建时填写的回调地址 |
| 请求方法 | POST |
| Content-Type | application/json |

### 请求 URL 参数

| 名称 | 类型 | 描述 |
| --- | --- | --- |
| signature | string | 加密签名，生成规则为 signature = sha1(post 内容+secret)，其中字符串的拼接就是简单的相加操作. 例如: hello + + world -> hello world。使用方法为：compare(signature, signature_in_URL)，即比较请求中的签名与计算的签名是否吻合 |
| timestamp | integer | 发送请求时的时间戳，精度为秒 |
| nonce | string | nonce（number used once 的缩写），用于标识每个 HTTP 请求的字符串，MKT API 侧确保不会重复。 |

### 请求 Body 参数

| 名称 | 类型 | 描述 |
| --- | --- | --- |
| subscription_id | integer | 订阅任务 id，在订阅中心创建的订阅任务 id |
| account_id_list | integer[] | 账户 id 列表 |
| subscription_type | integer | 订阅类型 |
| message_id | string | 消息 id，唯一判定消息是否接收标识 |

### 发送消息示例

```
{
  "subscription_id": 111111,
  "subscription_type": "REPORT_SUBSCRIPTION",
  "subscription_data": {
    "account_id_list": [
      11111111,
      22222222
    ]
  },
  "message_id": "MTAwNQ=="
}
```

### 应答字段

| 名称 | 类型 | 描述 |
| --- | --- | --- |
| code | integer | 返回列表信息 |
| message_id | string | 消息 id |

### 应答示例

```
{"code":0,"data":{"message_id":"MTAwNQ=="}}
```

### 应答说明

我们仅在收到 HTTP status = 200 的响应，并且 code = 0，message_id 与请求中的 message_id 相同时，才认为消息推送成功。

如果消息推送后 3 秒内未接收到您的响应时，则认为推送失败；对于推送失败的消息，针对定时任务：我们会在消息推送失败后每隔 5 分钟重试 5 次，如果重试 5 次仍不成功，则停止尝试。针对实时任务：我们会在消息推送失败后立刻重试 3 次，如果仍不成功则停止尝试。且推送失败的消息不会再做存储推送。请您及时检查并确保所提供的回调地址及密钥是可用的。

如果您收到 message_id 相同的消息，仅需返回成功，无需对所有消息均做入库处理。
