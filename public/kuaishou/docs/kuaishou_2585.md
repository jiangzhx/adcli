---
title: 创意体验
platform: kuaishou
source_url: https://developers.e.kuaishou.com/docs?docType=DSP&documentId=2585&menuId=3308
doc_id: kuaishou_2585
source_id: kuaishou_2585
---
# 创意体验

## 文档元数据

| 字段 | 值 |
| --- | --- |
| documentId | 2585 |
| documentType | 2 |
| version | 0.0.1 |
| bizName | 效果广告 |
| createTime | 2024-07-22T15:49:06.270Z |

## 接口信息

| 字段 | 值 |
| --- | --- |
| targetPath | https://ad.e.kuaishou.com/rest/openapi/v1/creative/preview |
| httpMethod | POST |
| httpContentType | JSON |

## 请求参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| advertiser_id | Long | 是 | 12312312 | 广告主ID |  |
| user_ids | String[] |  | ["7475171514"] | 快手ID`一次不超过十个 | 快手 id，和phone字段二选一必填 |
| creative_id | Long |  | 12312321 | 创意ID`unit_type 为4时，必填 |  |
| unit_id | Long |  | 313133131 | 广告组ID`unit_type 为7时，必填 |  |
| unit_type | Integer | 是 | 4 | 广告组类型`4：自定义创意；7：程序化创意 2.0 |  |
| phones | String[] |  | ["13838383838"] | 用户要推送创意到哪个手机号，和user_ids字段二选一必填 | 原本是传 userId，由于允许邮箱开户后，不一定每个 userId 都有手机号，所以改成传手机号 |

## 返回参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| code | Integer |  | 1 | 状态码 |  |
| message | String |  | "OK" | 返回信息 |  |
| data | AdMarketCreativePreviewView |  | 1 | 返回数据 |  |
| - creative_id | Long |  | 123123123 | 创意ID |  |
| - unit_id | String |  | 11323213 | 广告组ID |  |
