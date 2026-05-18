---
title: 获取试玩按钮列表
platform: kuaishou
source_url: https://developers.e.kuaishou.com/docs?docType=DSP&documentId=2722&menuId=3454
doc_id: kuaishou_2722
source_id: kuaishou_2722
---
# 获取试玩按钮列表

## 文档元数据

| 字段 | 值 |
| --- | --- |
| documentId | 2722 |
| documentType | 2 |
| version | 0.0.1 |
| bizName | 效果广告 |
| createTime | 2024-07-04T11:46:44.261Z |

## 接口信息

| 字段 | 值 |
| --- | --- |
| targetPath | https://ad.e.kuaishou.com/rest/openapi/gw/dsp/v1/playable/play_buttons |
| httpMethod | GET |
| httpContentType | JSON |

## 请求参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| advertiser_id | Long |  | 0 | 广告主 ID |  |

## 返回参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| code | Integer |  | 0 | 状态码 |  |
| message | String |  | Success | 状态信息 |  |
| data | PlayButtonList |  | 试玩一下 | 试玩按钮 |  |
| - play_buttons | String[] |  | "" | 试玩按钮列表 | 试玩按钮所能选择的内容，包括但不限于“立即试玩”、”试玩一下“、”立即体验“ 等。 |
