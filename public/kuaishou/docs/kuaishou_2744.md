---
title: 一键复苏开启
platform: kuaishou
source_url: https://developers.e.kuaishou.com/docs?docType=DSP&documentId=2744&menuId=3477
doc_id: kuaishou_2744
source_id: kuaishou_2744
---
# 一键复苏开启

## 文档元数据

| 字段 | 值 |
| --- | --- |
| documentId | 2744 |
| documentType | 2 |
| version | 0.0.1 |
| bizName | 效果广告 |
| createTime | 2024-07-04T12:13:58.232Z |

## 概述

注：目前不支持部分二级行业

## 接口信息

| 字段 | 值 |
| --- | --- |
| targetPath | https://ad.e.kuaishou.com/rest/openapi/gw/dsp/v1/unit/explore/recovery/start |
| httpMethod | POST |
| httpContentType | JSON |

## 请求参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| unit_id | Long | 是 | 1 | 广告组id |  |
| recovery_budget | Long | 是 | 1 | 探索预算，单位厘 |  |
| recovery_duration | Integer | 是 | 1 | 探索时间，单位小时 |  |
| recovery_strength | Integer | 是 | 1 | 探索强度，1-低，2-高 |  |
| intelli_extend | String |  | {"noAgeBreak":false,"noGenderBreak":false,"noAreaBreak":false,"extendTimes":1,"open":true,"isOpen":true} | 智能扩量，如果隐藏了智能扩量则不传 |  |
| advertiser_id | Long | 是 | 1 | 账户id |  |

## 请求样例

### 请求样例 (jsonc)

```
{
    "advertiser_id": 20000681,
    "unit_id": 3776211,
    "recovery_budget": 2000000000,
    "recovery_duration": 8,
    "recovery_strength": 1
}
```

## 返回参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| code | Integer |  | 1 | 状态码 |  |
| message | String |  |  | 返回信息 |  |
| data | GatewayExploreDataResult |  | 1 | 开启结果 |  |
| - unit_id | Long |  | 1 | 广告组id，操作成功后返回，否则返回空 |  |

## 返回样例

### 返回样例 (jsonc)

```
{
    "code": 0,
    "data": {
        "unit_id": 3776211
    },
    "message": "OK",
    "request_id": "d5283316f6034be1b428480f92086d90"
}
```
