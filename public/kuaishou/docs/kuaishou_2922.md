---
title: 删除高级创意接口
platform: kuaishou
source_url: https://developers.e.kuaishou.com/docs?docType=DSP&documentId=2922&menuId=3672
doc_id: kuaishou_2922
source_id: kuaishou_2922
---
# 删除高级创意接口

## 文档元数据

| 字段 | 值 |
| --- | --- |
| documentId | 2922 |
| documentType | 2 |
| version | 0.0.1 |
| bizName | 效果广告 |
| createTime | 2024-07-04T11:13:27.283Z |

## 接口信息

| 字段 | 值 |
| --- | --- |
| targetPath | https://ad.e.kuaishou.com/rest/openapi/v1/asset/adv_card/remove |
| httpMethod | POST |
| httpContentType | JSON |

## 请求参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| advertiser_id | Long | 是 |  | 广告主 id |  |
| adv_card_id | Long | 是 |  | 卡片 id |  |

## 返回参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| code | Integer |  |  | 返回码 |  |
| message | String |  |  | 返回信息 |  |
| data | AdvCardRemoveData |  |  | 返回数据 |  |
| - adv_card_id | Long[] |  |  | 卡片 id 数组 |  |
