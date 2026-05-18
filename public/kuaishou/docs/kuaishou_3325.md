---
title: 智投短剧查询接口
platform: kuaishou
source_url: https://developers.e.kuaishou.com/docs?docType=DSP&documentId=3325&menuId=4108
doc_id: kuaishou_3325
source_id: kuaishou_3325
---
# 智投短剧查询接口

## 文档元数据

| 字段 | 值 |
| --- | --- |
| documentId | 3325 |
| documentType | 2 |
| version | 0.0.0 |
| bizName | 效果广告 |
| createTime | 2025-11-20T12:48:24.021Z |

## 接口信息

| 字段 | 值 |
| --- | --- |
| targetPath | https://ad.e.kuaishou.com/rest/openapi/gw/dsp/v2/auax/series/list |
| httpMethod | POST |
| httpContentType | JSON |

## 请求参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| advertiser_id | Long | 是 |  | 广告主账号ID |  |
| cursor | Long |  |  | 查询起始游标（类似页码，首次查询不传，之后传上次返回的游标值） |  |
| limit | Integer | 是 |  | 查询数据量 |  |

## 返回参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| data | AuaxSeriesListS |  |  | 智投短剧信息 |  |
| - auax_series_infos | AuaxSeriesInfoS[] |  |  | 智投短剧信息 |  |
| - id | Long |  |  | 短剧ID |  |
| - kol_user_id | Long |  |  | 快手号ID |  |
| - kol_user_type | Integer |  |  | 快手号类型：1-普通快手号，2-蓝V服务号，3-聚星达人 |  |
| - title | String |  |  | 短剧标题 |  |
| - description | String |  |  | 短剧简介 |  |
| - cover_img | String |  |  | 短剧封面URL |  |
| - episode_amount | Long |  |  | 剧集数量 |  |
| - pay_mode | Integer[] |  |  | 付费模式：1-打包，2-虚拟币，3-观看广告解锁 |  |
| - valid_status | Boolean |  |  | 短剧状态：true-可用，false-不可用 |  |
| - invalid_reason | String |  |  | 不可用原因 |  |
| - cursor | Long |  |  | 下次查询起始游标，null则表示全部数据已查询完，不再继续查询 |  |
| code | Integer |  |  | code |  |
| message | String |  |  | mesage |  |
