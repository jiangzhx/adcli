---
title: 账户日预算查询
platform: kuaishou
source_url: https://developers.e.kuaishou.com/docs?docType=DSP&documentId=2948&menuId=3700
doc_id: kuaishou_2948
source_id: kuaishou_2948
---
# 账户日预算查询

## 文档元数据

| 字段 | 值 |
| --- | --- |
| documentId | 2948 |
| documentType | 2 |
| version | 0.0.1 |
| bizName | 效果广告 |
| createTime | 2024-07-04T09:18:07.329Z |

## 接口信息

| 字段 | 值 |
| --- | --- |
| targetPath | https://ad.e.kuaishou.com/rest/openapi/v1/advertiser/budget/get |
| httpMethod | POST |
| httpContentType | JSON |

## 请求参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| advertiser_id | Long | 是 |  | 广告主 ID | 在获取 access_token 的时候返回 |

## 返回参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| day_budget | Long |  |  | 单日预算 | 单位：厘 |
| day_budget_schedule | Long |  |  | 分日预算 | 单位：厘，单日预算和分日预算同时存在时，以分日预算为准，优先级高于day_budget |
