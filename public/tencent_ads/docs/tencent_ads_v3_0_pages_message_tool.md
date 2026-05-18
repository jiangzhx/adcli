---
title: 消息订阅工具
platform: tencent_ads
source_url: https://developers.e.qq.com/v3.0/pages/message-tool
doc_id: tencent_ads_v3_0_pages_message_tool
source_id: tencent_ads_v3_0_pages_message_tool
---
# 消息订阅工具

为了保证您可以及时接收到账户/广告等审核结果、财务充值进度等实时消息，无需自行调用相关接口做实时查询，我们为您提供了消息订阅工具。您可以在应用管理界面，订阅您所需要的消息类型，本期已支持广告通过审核、广告未通过审核、广告通过流量二次审核、广告未通过流量二次审核、账户余额不足预警、广告主账户审核通过/拒绝/封停（原状态名为：冻结）提醒等类型的消息订阅。更多消息类型请密切关注官网通知。

## 整体流程

您需要在[开发者官网-应用程序管理-应用编辑详情页](https://developers.e.qq.com/app)选择您需要订阅的消息类型，并根据官网提供的消息格式等信息提前搭建消息接收服务。

## 具体操作步骤：

您可在应用程序管理的详情页面，根据该应用已有的接口权限，订阅对应的消息类型。

1) 初次创建消息订阅时，您需要填写回调地址（消息推送的获取地址）及密钥（获取消息推送权限的唯一标识，一般为 3-32 个的数字或英文字母），我们会根据您提供的回调参数及密钥信息，为您推送一条测试消息体。测试消息体内容请参考的详细记录。测试消息体的格式为：

```
{ 
    "event_type": "EVENT_TYPE_TEST", 
    "account_id": 999999, //固定 999999 
    "event_id":"1000", //固定 1000 
    "event_data": { 
        "EVENT_TYPE_TEST": {} 
    } 
 }
```

您接收到此消息后，请按照正常消息做处理并返回。

2) 您可在此步骤对不同类型的消息做订阅或取消订阅操作。 — 如果您已有广告管理接口权限，A 广告主通过 Oauth 接口授权了广告管理权限给您，B 广告主未授权，则您仅可接收到 A 广告主的消息通知。

订阅消息的请求及返回参数的详细信息如下：

请求地址：由调用方定义（仅支持 HTTPS 协议）

请求方式：POST

请求字段：

以下字段在 URL 中传递

| 名称 | 类型 | 必填 | 限制 | 描述 |
| --- | --- | --- | --- | --- |
| signature | string | 是 | 40 个英文字符 | 加密签名，生成规则为 signature = sha1(post 内容+secret)，其中字符串的拼接就是简单的相加操作. 例如: hello + + world -> hello world。使用方法为：compare(signature, signature_in_URL)，即比较请求中的签名与计算的签名是否吻合。 |
| timestamp | timestamp | 是 | 精度为秒 | 发送请求时的时间戳 |
| nonce | string | 是 | 建议接收端可以设置该字段为不允许重复，避免请求重放：接收端把 nonce 缓存下来，比对每次请求的值是否已经存在。同时可利用 timestamp 字段来丢弃超过设定时间的请求，这样就只用保存一小段时间内的 nonce。 | nonce（number used once 的缩写），用于标识每个 HTTP 请求的字符串，MKT API 侧确保不会重复。 |

以下字段在 HTTP body 中传递(json 格式)

| 名称 | 类型 | 必填 | 限制 | 描述 |
| --- | --- | --- | --- | --- |
| event_type | enum | 是 | 详见【事件类型枚举值】 | 事件类型 |
| account_id | int | 是 |  | 事件所属帐号 id |
| event_id | string | 是 |  | 事件标识 id |
| event_data | struct | 是 | 不同类型事件包含的数据详见【事件数据结构】 | 事件数据结构，可以为空结构。不为空时包含：key-事件类型（event_type），value-各个事件具体的消息数据。 |

本期支持的消息内容：

| 所属权限分类 | 消息名称 | 事件类型枚举值 | 事件数据结构 |
| --- | --- | --- | --- |
| 广告管理（Ads Management） | 广告审核不通过(2.0) | EVENT_TYPE _AD_REVIEW_DISAPPROVED （adx 广告的 event_data 中会多 outer_creative_id、outer_advertiser_id 值类型是字符串的字段） | { “ event_type ”: “ EVENT_TYPE_AD_REVIEW_DISAPPROVED ”, “ account_id ”: 1111111, “ event_id ”:” 11111 ″, “ event_data ”: { “ EVENT_TYPE_AD_REVIEW_DISAPPROVED ”: { “ adgroup_id ”: 111111, “ ad_id ”: 111111, “ message ”: “”,//审核驳回原因 “ datetime ”: “ 2019-07-18 10:10:00 ” } } } |
|  | 广告审核不通过(3.0) | EVENT_TYPE _AD_REVIEW_DISAPPROVED(3.0 广告不通过原因需调用接口[查询动态创意审核结果](https://developers.e.qq.com/v3.0/docs/api/dynamic_creative_review_results/get)获取) | {"event_type":"EVENT_TYPE_AD_REVIEW_DISAPPROVED","account_id":111111111,"event_id":"56161095499","event_data":{"EVENT_TYPE_AD_REVIEW_DISAPPROVED":{"adgroup_id":1111,"agency_id":3333333333,"audit_time":1712818272,"audit_user":"reuse-same-reject","dynamic_creative_id":23332434344}}} |
|  | 广告审核通过(2.0) | EVENT_TYPE _AD_REVIEW_APPROVED （adx 广告的 event_data 中会多 outer_creative_id、outer_advertiser_id 值类型是字符串的字段） | { “ event_type ”: “ EVENT_TYPE_AD_REVIEW_APPROVED ”, “ account_id ”: 1111111, “ event_id ”:” 11111 ″, “ event_data ”: { “ EVENT_TYPE_AD_REVIEW_APPROVED ”: { “ adgroup_id ”: 111111, “ ad_id ”: 111111, “ datetime ”: “ 2019-07-18 10:10:00 ” } } } |
|  | 广告审核通过(3.0) | EVENT_TYPE _AD_REVIEW_APPROVED | {"event_type":"EVENT_TYPE_AD_REVIEW_APPROVED","account_id":111111111,"event_id":"56161095499","event_data":{"EVENT_TYPE_AD_REVIEW_APPROVED":{"adgroup_id":1111,"agency_id":3333333333,"audit_time":1712818272,"audit_user":"reuse-same-reject","dynamic_creative_id":23332434344}}} |
|  | 广告未通过流量二次审核 | EVENT_TYPE_AD_MEDIA_REVIEW_DISAPPROVED | { “ event_type ”: “ EVENT_TYPE_AD_MEDIA_REVIEW_DISAPPROVED ”, “ account_id ”: 1111111, “ event_id ”:” 11111 ″, “ event_data ”: { “ EVENT_TYPE_AD_MEDIA_REVIEW_DISAPPROVED ”: { “ adgroup_id ”: 11111, “ ad_id ”: 11111, “ message ”: “”, “ datetime ”: “ 2019-07-18 10:10:00 ” } } } |
|  | 衍生创意成功提醒（仅 2.0 广告） | EVENT_TYPE_AD_AUTO_DERIVED_CREATIVE_FINISHED | { “ event_type ”: “ EVENT_TYPE_AD_AUTO_DERIVED_CREATIVE_FINISHED ”, “ account_id ”: 1111111, “ event_id ”: “ 11111 ”, “ event_data ”: { “ EVENT_TYPE_AD_AUTO_DERIVED_CREATIVE_FINISHED ”: { “ adgroup_id ”: 111111, “ ad_id ”: 111111, “ adcreative_id ”: 111111, “ message ”: “”, “ datetime ”: “ 2021-04-09 16:10:00 ” } } } |
|  | 衍生创意成功提醒（3.0） | EVENT_TYPE_AD_AUTO_DERIVED_DYNAMIC_CREATIVE_FINISHED | { "event_type": "EVENT_TYPE_AD_AUTO_DERIVED_DYNAMIC_CREATIVE_FINISHED", "account_id": 1111111, "event_id": "11111", "event_data": { "EVENT_TYPE_AD_AUTO_DERIVED_DYNAMIC_CREATIVE_FINISHED": { "adgroup_id": 111111, "dynamic_creative_id": 111111, "message": "", "datetime": "2024-04-09 16:10:00" } } } |
|  | 广告通过流量二次审核 | EVENT_TYPE_AD_MEDIA_REVIEW_APPROVED | { “ event_type ”: “ EVENT_TYPE_AD_MEDIA_REVIEW_APPROVED ”, “ account_id ”: 1111111, “ event_id ”:” 11111 ″, “ event_data ”: { “ EVENT_TYPE_AD_MEDIA_REVIEW_APPROVED ”: { “ adgroup_id ”: “”, “ ad_id ”: 11111, “ datetime ”: “ 2019-07-18 10:10:00 ” } } } |
|  | 推广计划日消耗达到日预算 | EVENT_TYPE_CAMPAIN_DAYBUDGET_RUNOUT | { "event_type": "EVENT_TYPE_CAMPAIN_DAYBUDGET_RUNOUT", “ account_id ”: 1111111, “ event_id ”:” 11111 ″, "event_data": { "EVENT_TYPE_CAMPAIN_DAYBUDGET_RUNOUT": { "datetime": "", "campaign_id": "" } } } |
|  | 推广计划日消耗超过日预算的 80% | EVENT_TYPE_CAMPAIN_DAYBUDGET_LOW | { "event_type": "EVENT_TYPE_CAMPAIN_DAYBUDGET_LOW", “ account_id ”: 1111111, “ event_id ”:” 11111 ″, "event_data": { "EVENT_TYPE_CAMPAIN_DAYBUDGET_LOW": { "datetime": "1970-01-01 00:00:00", "campaign_id": 1 } } } |
|  | 推广计划总消耗超过总预算 | EVENT_TYPE_CAMPAIN_TOTAL_BUDGET_RUNOUT | { "event_type": "EVENT_TYPE_CAMPAIN_TOTAL_BUDGET_RUNOUT", “ account_id ”: 1111111, “ event_id ”:” 11111 ″, "event_data": { "EVENT_TYPE_CAMPAIN_TOTAL_BUDGET_RUNOUT": { "datetime": "1970-01-01 00:00:00", "campaign_id": 1 } } } |
|  | 推广计划总消耗超过总预算的 80% | EVENT_TYPE_CAMPAIN_TOTAL_BUDGET_LOW | { "event_type": "EVENT_TYPE_CAMPAIN_TOTAL_BUDGET_LOW", “ account_id ”: 1111111, “ event_id ”:” 11111 ″, "event_data": { "EVENT_TYPE_CAMPAIN_TOTAL_BUDGET_LOW": { "datetime": "1970-01-01 00:00:00", "campaign_id": 1 } } } |
|  | 广告组总消耗达到总预算 | EVENT_TYPE_ADGROUP_TOTAL_BUDGET_RUNOUT | { "event_type": "EVENT_TYPE_ADGROUP_TOTAL_BUDGET_RUNOUT", “ account_id ”: 1111111, “ event_id ”:” 11111 ″, "event_data": { "EVENT_TYPE_ADGROUP_TOTAL_BUDGET_RUNOUT": { "datetime": "1970-01-01 00:00:00", "adgroup_id": 1 } } } |
|  | 广告组总消耗达到总预算的 80% | EVENT_TYPE_ADGROUP_TOTAL_BUDGET_LOW | { "event_type": "EVENT_TYPE_ADGROUP_TOTAL_BUDGET_LOW", “ account_id ”: 1111111, “ event_id ”:” 11111 ″, "event_data": { "EVENT_TYPE_ADGROUP_TOTAL_BUDGET_LOW": { "datetime": "1970-01-01 00:00:00", "adgroup_id": 1 } } } |
|  | 广告日消耗超过日预算 | EVENT_TYPE_ADGROUP_DAYBUDGET_RUNOUT | { "event_type": "EVENT_TYPE_ADGROUP_DAYBUDGET_RUNOUT", “ account_id ”: 1111111, “ event_id ”:” 11111 ″, "event_data": { "EVENT_TYPE_ADGROUP_DAYBUDGET_RUNOUT": { "datetime": "1970-01-01 00:00:00", "adgroup_id": 1 } } } |
|  | 广告日消耗超过日预算的 80% | EVENT_TYPE_ADGROUP_DAYBUDGET_LOW | { "event_type": "EVENT_TYPE_ADGROUP_DAYBUDGET_LOW", “ account_id ”: 1111111, “ event_id ”:” 11111 ″, "event_data": { "EVENT_TYPE_ADGROUP_DAYBUDGET_LOW": { "datetime": "1970-01-01 00:00:00", "adgroup_id": 1 } } } |
|  | 视频转码成功 | EVENT_TYPE_MEDIA_STATUS_VALID | { "event_type": "EVENT_TYPE_MEDIA_STATUS_VALID", “ account_id ”: 1111111, “ event_id ”:” 11111 ″, "event_data": { "EVENT_TYPE_MEDIA_STATUS_VALID": { "video_id": "", "datetime": "" } } } |
|  | 视频转码失败 | EVENT_TYPE_MEDIA_STATUS_ERROR | { "event_type": "EVENT_TYPE_MEDIA_STATUS_ERROR", "account_id": 1111111, "event_id": "111111", "event_data": { "EVENT_TYPE_MEDIA_STATUS_ERROR": { "video_id": "", "datetime": "", "ad_details_list": ""//转码失败的视频影响到的广告列表 } } } |
|  | 落地页风控审核通过消息 | EVENT_TYPE_PAGE_REVIEW_APPROVED | { "event_type": "EVENT_TYPE_PAGE_REVIEW_APPROVED", “ account_id ”: 1111111, “ event_id ”:” 11111 ″, "event_data": { "EVENT_TYPE_PAGE_REVIEW_APPROVED": { "message": "", "page_url": "", "datetime": "" } } } |
|  | 落地页风控审核不通过消息 | EVENT_TYPE_PAGE_REVIEW_DISAPPROVED | { "event_type": "EVENT_TYPE_PAGE_REVIEW_DISAPPROVED", “ account_id ”: 1111111, “ event_id ”:” 11111 ″, "event_data": { "EVENT_TYPE_PAGE_REVIEW_DISAPPROVED": { "message": "", "page_url": "", "datetime": "" } } } |
|  | ocpa 赔付账单消息 | EVENT_TYPE_OCPA_COMPENSATE_BILL | { "event_type": "EVENT_TYPE_OCPA_COMPENSATE_BILL", “ account_id ”: 1111111, “ event_id ”:” 11111 ″, "event_data": { "EVENT_TYPE_OCPA_COMPENSATE_BILL": { "message": "", "exposureDate": "",//曝光日期 "compensateMoney": "",//赔付金额 "url": "",//账单详情查询页面 "datetime": ""//消息发送日期 } } } |
| 账号管理（Account Management） | 账户余额不足预警 | EVENT_TYPE_ADVERTISER_BALANCE_LOW | { "event_type": "EVENT_TYPE_ADVERTISER_BALANCE_RUNOUT", “ account_id ”: 1111111, “ event_id ”:” 11111 ″, "event_data": { "EVENT_TYPE_ADVERTISER_BALANCE_RUNOUT": { "datetime": "1970-01-01 00:00:00" } } } |
|  | 账户余额过低预警 | EVENT_TYPE_ADVERTISER_BALANCE_LOW | { "event_type": "EVENT_TYPE_ADVERTISER_BALANCE_LOW", “ account_id ”: 1111111, “ event_id ”:” 11111 ″, "event_data": { "EVENT_TYPE_ADVERTISER_BALANCE_LOW": { "datetime": "", "trigger": "" //账户余额低于此阈值（当前固定为 20000 分）就会触发本消息 } } } |
|  | 账户日消耗超过日预算的 80% | EVENT_TYPE_ADVERTISER_DAYBUDGET_LOW | { "event_type": "EVENT_TYPE_ADVERTISER_DAYBUDGET_LOW", “ account_id ”: 1111111, “ event_id ”:” 11111 ″, "event_data": { "EVENT_TYPE_ADVERTISER_DAYBUDGET_LOW": { "datetime": "1970-01-01 00:00:00" } } } |
|  | 账户日消耗达到日预算 | EVENT_TYPE_ADVERTISER_DAYBUDGET_RUNOUT | { "event_type": "EVENT_TYPE_ADVERTISER_DAYBUDGET_RUNOUT", “ account_id ”: 1111111, “ event_id ”:” 11111 ″, "event_data": { "EVENT_TYPE_ADVERTISER_DAYBUDGET_RUNOUT": { "datetime": "", //消息发送时间 "budget_date": "", //达到日预算的日期 "day_buget": 1000 //账户当前设置的日预算 } } } |
|  | 广告主账户审核通过 | EVENT_TYPE_ADVERTISER_REVIEW_APPROVED | { "event_type": "EVENT_TYPE_ADVERTISER_REVIEW_APPROVED", “ account_id ”: 1111111, “ event_id ”:” 11111 ″, "event_data": { "EVENT_TYPE_ADVERTISER_REVIEW_APPROVED": { "datetime": "" } } } |
|  | 广告主账户审核不通过 | EVENT_TYPE_ADVERTISER_REVIEW_DISAPPROVED | { "event_type": "EVENT_TYPE_ADVERTISER_REVIEW_DISAPPROVED", “ account_id ”: 1111111, “ event_id ”:” 11111 ″, "event_data": { "EVENT_TYPE_ADVERTISER_REVIEW_DISAPPROVED": { "message": "", "datetime": "" } } } |
|  | 广告主账户审核封停提醒（原状态名为：冻结） | EVENT_TYPE_ADVERTISER_REVIEW_FREEZED | { "event_type": "EVENT_TYPE_ADVERTISER_REVIEW_FREEZED", “ account_id ”: 1111111, “ event_id ”:” 11111 ″, "event_data": { "EVENT_TYPE_ADVERTISER_REVIEW_FREEZED": { "message": "", "datetime": "" } } } |
|  | 公众号解绑状态通知 | EVENT_TYPE_WECHAT_ACCOUNT_UNAUTHORIZED | { “ event_type ”: EVENT_TYPE_WECHAT_ACCOUNT_UNAUTHORIZED, “ account_id ”: 1111111, “ event_id ”:” 11111 ″, “ event_data ”: { EVENT_TYPE_WECHAT_ACCOUNT_UNAUTHORIZED: { “ wechat_account_id ”: “ 1111111 ”, “ datetime ”: “ 2019-07-18 10:10:00 ” } } } |

应答字段：

| 名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| code | int64 | 是 | 返回码，接收成功时为 0 |
| data | struct | 是 | 返回数据 |

data：

| 名称 | 类型 | 必填 | 描述 |
| --- | --- | --- | --- |
| event_id | string | 是 | 接收成功时请返回消息正文中的 event_id 值 |

如果您在消息订阅工具的使用过程中需要技术支持或者反馈问题，可以向与您接口的腾讯广告运营人员寻求帮助。

[查看更多工具](https://developers.e.qq.com/tools)
