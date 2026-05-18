---
title: 查询授权短剧列表（新）
platform: kuaishou
source_url: https://developers.e.kuaishou.com/docs?docType=DSP&documentId=3257&menuId=4046
doc_id: kuaishou_3257
source_id: kuaishou_3257
---
# 查询授权短剧列表（新）

## 文档元数据

| 字段 | 值 |
| --- | --- |
| documentId | 3257 |
| documentType | 2 |
| version | 0.0.2 |
| bizName | 效果广告 |
| createTime | 2025-08-05T02:17:54.010Z |

## 概述

旧版本接口“查询授权短剧列表：https://ad.e.kuaishou.com/rest/openapi/gw/dsp/series/list”由于性能问题不推荐使用，建议切换至本接口

## 接口信息

| 字段 | 值 |
| --- | --- |
| targetPath | https://ad.e.kuaishou.com/rest/openapi/gw/dsp/v2/series/list |
| httpMethod | POST |
| httpContentType | JSON |

## 请求参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| page_size | Integer |  | 20 | page_size最大 20 |  |
| cursor | String |  |  | 游标 |  |
| series_title | String |  |  | 短剧标题 |  |
| user_id | Long | 是 |  | 快手号id |  |

## 返回参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| data | MapiSeriesQueryResV2Snake |  |  | mapi短剧信息 |  |
| - total_count | Integer |  |  | 返回短剧的数量 |  |
| - cursor | String |  |  | 游标 |  |
| - series | MapiSeriesInfoSnake[] |  |  | 请补充描述详情 |  |
| - cover_img | String |  |  | 短剧封面 |  |
| - description | String |  |  | 短剧描述 |  |
| - episode_amount | Integer |  |  | 剧集数量 |  |
| - id | Long |  |  | 短剧id |  |
| - title | String |  |  | 短剧标题 |  |
| code | Integer |  |  | 请补充描述详情 |  |
| message | String |  |  | 请补充描述详情 |  |
