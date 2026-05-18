---
title: 获取转化目标当前消耗
platform: kuaishou
source_url: https://developers.e.kuaishou.com/docs?docType=DSP&documentId=3185&menuId=3945
doc_id: kuaishou_3185
source_id: kuaishou_3185
---
# 获取转化目标当前消耗

## 文档元数据

| 字段 | 值 |
| --- | --- |
| documentId | 3185 |
| documentType | 2 |
| version | 0.0.0 |
| bizName | 效果广告 |
| createTime | 2025-02-17T13:51:37.811Z |

## 概述

获取advertiser_id下转化目标此刻消耗。

## 接口信息

| 字段 | 值 |
| --- | --- |
| targetPath | https://ad.e.kuaishou.com/rest/openapi/gw/dsp/account/incExplore/curCost |
| httpMethod | POST |
| httpContentType | JSON |

## 请求参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| auto_mode | Integer | 是 |  | 是否开启uax |  |
| deep_conversion_type | Integer | 是 |  | 深度转化目标 |  |
| ocpx_action_type | Integer | 是 |  | 浅度转化目标 |  |
| advertiser_id | Long | 是 |  | 账号id |  |

## 请求样例

### 请求样例 (javascript)

```
{
  "advertiser_id": 123456,
  "ocpx_action_type": 191,
  "deep_conversion_type": 0,
  "auto_mode": 1
}
```

## 返回参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| error_msg | String |  |  | 具体报错信息 |  |
| message | String |  |  | 状态码描述 |  |
| code | Integer |  |  | 状态码 |  |
| data | GwCurCost |  |  | 转化目标当前时刻的消耗 |  |
| - cur_cost | Double |  | 0.0 | 当前时间消耗 |  |

## 返回样例

### 返回样例 (javascript)

```
{
  "code": 0,
  "data": {
    "cur_cost": 407.315
  },
  "message": "OK",
  "request_id": "ENKAgICg1OWcChj3ASDfgf-f0TIopI74sgM="
}
```
