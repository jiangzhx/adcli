---
title: 查询短剧付费模板信息接口
platform: kuaishou
source_url: https://developers.e.kuaishou.com/docs?docType=DSP&documentId=3077&menuId=3756
doc_id: kuaishou_3077
source_id: kuaishou_3077
---
# 查询短剧付费模板信息接口

## 文档元数据

| 字段 | 值 |
| --- | --- |
| documentId | 3077 |
| documentType | 2 |
| version | 0.0.1 |
| bizName | 效果广告 |
| createTime | 2024-07-23T07:01:26.044Z |

## 概述

通过短剧作者快手ID和短剧，查询支持多付费模版的付费模式 目前仅直吹付费模式为"打包"（即payMode=1）的多付费模板查询

## 接口信息

| 字段 | 值 |
| --- | --- |
| targetPath | https://ad.e.kuaishou.com/rest/openapi/gw/dsp/series/payModeTemplateInfo |
| httpMethod | POST |
| httpContentType | JSON |

## 请求参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| advertiser_id | Long | 是 |  | 广告主id |  |
| series_id | Long | 是 |  | 短剧id |  |
| series_pay_mode | Integer | 是 |  | 付费模式类型(目前多付费模板只支持“打包“，即payMode=1) |  |
| series_pay_template_id | Long |  |  | 付费模版id (非必填，填写则代表查询该模板id对应信息） |  |
| user_id | Long | 是 |  | 短剧作者id |  |

## 请求样例

### 请求样例 (jsonc)

```
{
  "advertiser_id": 900015364,
  "user_id": 2196670040,
  "series_id": 384643,
  "series_pay_mode": 1
}
```

## 返回参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| data | MapiSeriesPayModeTemplateInfoSnake[] |  |  | mapi短剧付费模板详情信息 |  |
| - series_pay_mode | Integer |  |  | 请补充描述详情 |  |
| - series_pay_template_id | Long |  |  | 请补充描述详情 |  |
| - template_name | String |  |  | 请补充描述详情 |  |
| - template_status | Integer |  |  | 1 有效，2已删除 |  |
| code | Integer |  |  | 返回码 |  |
| message | String |  |  | 返回信息 |  |

## 返回样例

### 示例标题 (jsonc)

```
{
  "code": 0,
  "data": [
    {
      "template_name": "基础模版1618",
      "template_status": 1,
      "series_pay_template_id": 1618,
      "series_pay_mode": 1
    },
    {
      "template_name": "已删除的模版1621",
      "template_status": 2,
      "series_pay_template_id": 1621,
      "series_pay_mode": 1
    }
  ],
  "message": "OK",
  "request_id": "EO60gICQgpGOChipDSCm-Z73uDEo963k4QM="
}
```
