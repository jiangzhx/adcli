---
title: 创意标签填写建议
platform: kuaishou
source_url: https://developers.e.kuaishou.com/docs?docType=DSP&documentId=2586&menuId=3309
doc_id: kuaishou_2586
source_id: kuaishou_2586
---
# 创意标签填写建议

## 文档元数据

| 字段 | 值 |
| --- | --- |
| documentId | 2586 |
| documentType | 2 |
| version | 0.0.1 |
| bizName | 效果广告 |
| createTime | 2024-07-04T11:09:57.385Z |

## 接口信息

| 字段 | 值 |
| --- | --- |
| targetPath | https://ad.e.kuaishou.com/rest/openapi/v1/creative/creative_tag/advise |
| httpMethod | POST |
| httpContentType | JSON |

## 请求参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| advertiser_id | Long | 是 | 20000800 | 广告主id |  |

## 返回参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| code | Integer |  | 0 | 状态码 |  |
| message | String |  | "OK" | 返回信息 |  |
| data | AdMarketCreativeTagView[] |  | 1 | 详情 |  |
| - industry | String |  | 金融 | 一级行业 |  |
| - secondIndustry | String |  | 保险 | 二级行业 |  |
| - tags | String[] |  | 医疗险 | 推荐标签 |  |
