---
title: 批量删除视频
platform: kuaishou
source_url: https://developers.e.kuaishou.com/docs?docType=DSP&documentId=2705&menuId=3440
doc_id: kuaishou_2705
source_id: kuaishou_2705
---
# 批量删除视频

## 文档元数据

| 字段 | 值 |
| --- | --- |
| documentId | 2705 |
| documentType | 2 |
| version | 0.0.1 |
| bizName | 效果广告 |
| createTime | 2024-07-04T11:38:07.293Z |

## 接口信息

| 字段 | 值 |
| --- | --- |
| targetPath | https://ad.e.kuaishou.com/rest/openapi/gw/dsp/file/ad/video/delete |
| httpMethod | POST |
| httpContentType | JSON |

## 请求参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| advertiser_id | Long |  |  | 广告主id |  |
| photo_ids | String[] |  |  | 视频id列表 |  |

## 返回参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| code | Integer |  |  | 状态码 |  |
| message | String |  |  | 返回信息 |  |
| data | AdMarketVideoIdView |  |  | 信息 |  |
| - photo_ids | String[] |  |  | 视频id列表 |  |
