---
title: 推送高级创意接口
platform: kuaishou
source_url: https://developers.e.kuaishou.com/docs?docType=DSP&documentId=3335&menuId=4119
doc_id: kuaishou_3335
source_id: kuaishou_3335
---
# 推送高级创意接口

## 文档元数据

| 字段 | 值 |
| --- | --- |
| documentId | 3335 |
| documentType | 2 |
| version | 0.0.0 |
| bizName | 效果广告 |
| createTime | 2025-12-24T03:20:25.734Z |

## 接口信息

| 字段 | 值 |
| --- | --- |
| targetPath | https://ad.e.kuaishou.com/rest/openapi/gw/dsp/v1/adv_card/share |
| httpMethod | POST |
| httpContentType | JSON |

## 请求参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| advertiser_id | Long |  |  | 广告主id |  |
| share_advertiser_ids | Long[] |  |  | 推送账户ids |  |
| adv_card_ids | Long[] |  |  | 推送卡片ids |  |

## 请求样例

### 示例标题 (javascript)

```
{
    "advertiser_id": 900312980,
    "share_advertiser_ids": [
        900313084
    ],
    "adv_card_ids": [
        18602650
    ]
}
```

## 返回参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| code | Integer |  |  | 状态码 |  |
| message | String |  |  | 返回信息 |  |
| data | MarketAdvCardShareResp[] |  |  | 信息 |  |
| - advertiser_id | Long |  |  | 分享后的账户信息 |  |
| - adv_card_id | Long |  |  | 分享后的卡片id信息 |  |

## 返回样例

### 示例标题 (javascript)

```
{
    "code": 0,
    "data": [
        {
            "adv_card_id": 19459069,
            "advertiser_id": 900313084
        }
    ],
    "message": "OK",
    "request_id": "ELiAgIDAjp2OrAEYtQggqYPa8rQzKOnJo5kB"
}
```

## 原始内容

```
推送高级创意接口 /rest/openapi/gw/dsp/v1/adv_card/share { "advertiser_id": 900312980, "share_advertiser_ids": [ 900313084 ], "adv_card_ids": [ 18602650 ] } { "code": 0, "data": [ { "adv_card_id": 19459069, "advertiser_id": 900313084 } ], "message": "OK", "request_id": "ELiAgIDAjp2OrAEYtQggqYPa8rQzKOnJo5kB" } advertiser_id Long 广告主id share_advertiser_ids Long[] 推送账户ids adv_card_ids Long[] 推送卡片ids share_account_type Integer 分享账户类型 code Integer 状态码 message String 返回信息 data MarketAdvCardShareResp[] 信息 advertiser_id Long 分享后的账户信息 adv_card_id Long 分享后的卡片id信息
```
