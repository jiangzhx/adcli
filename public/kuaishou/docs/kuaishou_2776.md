---
title: 添加应用共享
platform: kuaishou
source_url: https://developers.e.kuaishou.com/docs?docType=DSP&documentId=2776&menuId=3513
doc_id: kuaishou_2776
source_id: kuaishou_2776
---
# 添加应用共享

## 文档元数据

| 字段 | 值 |
| --- | --- |
| documentId | 2776 |
| documentType | 2 |
| version | 0.0.1 |
| bizName | 效果广告 |
| createTime | 2024-07-04T11:54:25.270Z |

## 概述

备注：主体共享为异步操作，服务内部基于主体下账号ID数量做共享操作。

## 接口信息

| 字段 | 值 |
| --- | --- |
| targetPath | https://ad.e.kuaishou.com/rest/openapi/gw/dsp/appcenter/share/add |
| httpMethod | POST |
| httpContentType | JSON |

## 请求参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| advertiser_id | Long | 是 |  | 广告主id |  |
| app_id | Long | 是 | 123 | 应用id |  |
| share_advertiser_ids | Long[] |  | [11,22,33] | 要共享的账号id | share_type=1必填 单次支持添加200个账号 |
| share_corp_ids | Long[] |  | [11,22,33] | 要共享的主体ID | share_type=2必填 正常只需要传当前账号主体ID即可，跨主体共享根据申请的可共享主体ID填入 |
| share_type | Integer | 是 | 1 | 共享类型，0-不共享，1-账号，2-主体 |  |

## 请求样例

### 请求样例 (shell)

```
curl --location --request POST 'https://ad.e.kuaishou.com/rest/openapi/gw/dsp/appcenter/share/add' \
--header 'Access-Token: e6d2a9a50d3ba728c77ac79f3a063d2c' \
--header 'Content-Type: application/json' \
--header 'Cookie: apdid=e8977018-0d93-4c22-8d95-1cbb0a4ab5daaa26501f062a0b9042d0bd60d291b622:1685348999:1' \
--data-raw '{
    "advertiser_id": 12078245,
    "app_id": 2199123262731,
    "share_corp_ids": [
        15280
    ],
    "share_type" : 2
}'
```

## 返回参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| data | MapiAppModResp |  |  | MAPI-修改应用的响应参数 |  |
| - result | Boolean |  |  | 修改分包备注是否成功 | true-成功，false-失败 |
| code | Integer |  |  | 返回码 |  |
| message | String |  |  | 返回信息 |  |

## 返回样例

### 返回样例 (jsonc)

```
{
    "code": 0,
    "data": {
        "result": true
    },
    "message": "OK",
    "request_id": "EMmAgICAhaS7ChjgCCDu2eDziDEonrHssgM="
}
```
