---
title: 查询创意推荐理由
platform: kuaishou
source_url: https://developers.e.kuaishou.com/docs?docType=DSP&documentId=2710&menuId=3445
doc_id: kuaishou_2710
source_id: kuaishou_2710
---
# 查询创意推荐理由

## 文档元数据

| 字段 | 值 |
| --- | --- |
| documentId | 2710 |
| documentType | 2 |
| version | 0.0.1 |
| bizName | 效果广告 |
| createTime | 2024-07-04T11:11:11.116Z |

## 接口信息

| 字段 | 值 |
| --- | --- |
| targetPath | https://ad.e.kuaishou.com/rest/openapi/v1/tool/expose_tags/list |
| httpMethod | GET |
| httpContentType | JSON |

## 请求参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| campaign_type | Integer |  | 24 | 计划类型 |  |
| advertiser_id | Long | 是 |  | 广告主id |  |

## 返回参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| code | Integer |  |  | 状态码 |  |
| message | String |  |  | message |  |
| data | ExposeTagViewData |  |  | 创意推荐理由 |  |
| - details | ExposeTagView[] |  |  | 推荐理由 list |  |
| - text | String |  |  | 推荐理由 |  |
