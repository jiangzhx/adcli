---
title: 短剧付费模式查询接口
platform: kuaishou
source_url: https://developers.e.kuaishou.com/docs?docType=DSP&documentId=2419&menuId=3541
doc_id: kuaishou_2419
source_id: kuaishou_2419
---
# 短剧付费模式查询接口

## 文档元数据

| 字段 | 值 |
| --- | --- |
| documentId | 2419 |
| documentType | 2 |
| version | 0.0.1 |
| bizName | 效果广告 |
| createTime | 2024-07-04T12:02:43.699Z |

## 概述

通过短剧作者和短剧id查询短剧下付费模式类型 目前只支持“打包”付费模式，即payMode=1

## 接口信息

| 字段 | 值 |
| --- | --- |
| targetPath | https://ad.e.kuaishou.com/rest/openapi/gw/dsp/series/payModeType |
| httpMethod | POST |
| httpContentType | JSON |

## 请求参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| advertiser_id | Long | 是 |  | 广告主id |  |
| series_id | Long | 是 |  | 短剧id |  |
| user_id | Long | 是 |  | 短剧作者id |  |

## 请求样例

### 示例标题 (jsonc)

```
{
  "advertiser_id": 900015364,
  "user_id": 2196670040,
  "series_id": 384643
}
```

## 返回参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| data | MapiSeriesPayModeInfoSnake[] |  |  | 返回数据 |  |
| - pay_mode | Integer |  |  | 目前仅支持payMode=1，即“打包“ |  |
| - pay_mode_desc | String |  |  | - |  |
| code | Integer |  |  | 返回码 |  |
| message | String |  |  | 放回信息 |  |

## 返回样例

### 示例标题 (jsonc)

```
{
  "code": 0,
  "data": [
    {
      "pay_mode_desc": "打包",
      "pay_mode": 1
    }
  ],
  "message": "OK",
  "request_id": "ELmAgIDApJiOrAEY_wUghIrH87gxKNbY_-AD"
}
```
