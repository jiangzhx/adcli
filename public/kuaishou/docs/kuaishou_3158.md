---
title: 获取推荐广告语接口
platform: kuaishou
source_url: https://developers.e.kuaishou.com/docs?docType=DSP&documentId=3158&menuId=3913
doc_id: kuaishou_3158
source_id: kuaishou_3158
---
# 获取推荐广告语接口

## 文档元数据

| 字段 | 值 |
| --- | --- |
| documentId | 3158 |
| documentType | 2 |
| version | 0.0.0 |
| bizName | 效果广告 |
| createTime | 2024-10-17T06:48:18.604Z |

## 接口信息

| 字段 | 值 |
| --- | --- |
| targetPath | https://ad.e.kuaishou.com/rest/openapi/gw/dsp/creative/recmmend/description |
| httpMethod | POST |
| httpContentType | JSON |

## 请求参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| app_id | Long |  |  | 应用id |  |
| course_id | Long |  |  | 付费课堂课程id |  |
| dpa_product_id | Long |  |  | 商品库产品id |  |
| kwai_book_id | Long |  |  | 小说id |  |
| series_id | Long |  |  | 短剧id |  |

## 返回参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| data | RecommedDescriptionRespSnake |  |  | 推荐广告语 |  |
| - recommend_description | String[] |  |  | 广告语 |  |
| - count | Integer |  |  | 广告语数量 |  |
| code | Integer |  |  | 返回码 |  |
| message | String |  |  | 返回信息 |  |
