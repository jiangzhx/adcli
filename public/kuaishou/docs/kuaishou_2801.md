---
title: 查询企微回传投放信息
platform: kuaishou
source_url: https://developers.e.kuaishou.com/docs?docType=DSP&documentId=2801&menuId=3540
doc_id: kuaishou_2801
source_id: kuaishou_2801
---
# 查询企微回传投放信息

## 文档元数据

| 字段 | 值 |
| --- | --- |
| documentId | 2801 |
| documentType | 2 |
| version | 0.0.1 |
| bizName | 老铁线索通 |
| createTime | 2024-07-04T12:26:21.505Z |

## 接口信息

| 字段 | 值 |
| --- | --- |
| targetPath | https://ad.e.kuaishou.com/rest/openapi/gw/clue_laotie/v1/qywx/callback |
| httpMethod | POST |
| httpContentType | JSON |

## 请求参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| state | String | 是 | KSAD_84468288888 | 渠道参数，以KSAD开头的为合法值 |  |
| advertiser_id | Long | 是 |  | 广告主id |  |

## 返回参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| data | GetQywxCallbackData |  |  | res |  |
| - callback | String |  | 1 | 广告回传信息 |  |
| - out_page_id | Long |  | 1 | 落地页id |  |
| - creative_id | Long |  | 1 | 创意id |  |
| - unit_id | Long |  | 1 | 单元id |  |
| - campaign_id | Long |  | 1 | 计划Id |  |
| - account_id | Long |  | 1 | 用户id | 22 |
| message | String |  |  | 描述 |  |
| code | Integer |  |  | 响应码 |  |
