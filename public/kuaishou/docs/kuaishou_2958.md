---
title: 获取行为兴趣"关键词"
platform: kuaishou
source_url: https://developers.e.kuaishou.com/docs?docType=DSP&documentId=2958&menuId=3709
doc_id: kuaishou_2958
source_id: kuaishou_2958
---
# 获取行为兴趣"关键词"

## 文档元数据

| 字段 | 值 |
| --- | --- |
| documentId | 2958 |
| documentType | 2 |
| version | 0.0.1 |
| bizName | 效果广告 |
| createTime | 2024-07-04T12:07:54.815Z |

## 接口信息

| 字段 | 值 |
| --- | --- |
| targetPath | https://ad.e.kuaishou.com/rest/openapi/v1/tool/keyword/query |
| httpMethod | POST |
| httpContentType | JSON |

## 请求参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| advertiser_id | Long | 是 |  | 广告主 id | 广告主 id |
| query_str | String |  |  | 行为兴趣关键词名称 | 行为兴趣关键词名称 |
| type | Integer | 是 |  | 类型 | 0：按照 query_str 模糊查询 1：按照 id 进行查询 |
| ids | Long[] |  |  | id列表 |  |

## 返回参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| keyword | Keyword[] |  |  | 行为兴趣关键词，详情见下方 |  |
| - id | Long |  |  | 关键词 id |  |
| - name | String |  |  | 关键词名称 |  |
| - count | Long |  |  | 当前关键词的人群预估数量 |  |
