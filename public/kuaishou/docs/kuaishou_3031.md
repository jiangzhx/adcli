---
title: 魔力建站落地页批量转赠
platform: kuaishou
source_url: https://developers.e.kuaishou.com/docs?docType=DSP&documentId=3031&menuId=3750
doc_id: kuaishou_3031
source_id: kuaishou_3031
---
# 魔力建站落地页批量转赠

## 文档元数据

| 字段 | 值 |
| --- | --- |
| documentId | 3031 |
| documentType | 2 |
| version | 0.0.1 |
| bizName | 魔力建站 |
| createTime | 2024-07-04T12:24:39.054Z |

## 接口信息

| 字段 | 值 |
| --- | --- |
| targetPath | https://ad.e.kuaishou.com/rest/openapi/gw/magicsite/v1/page/batchGive |
| httpMethod | POST |
| httpContentType | JSON |

## 请求参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| give_account_ids | Long[] | 是 |  | 赠予的目标账户列表 |  |
| advertiser_id | Long | 是 |  | 账户id |  |
| page_ids | Long[] | 是 |  | 赠予的页面list |  |

## 返回参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| data | MagicSiteRespStatus |  |  | 无信息 |  |
| - code | Integer |  |  | 1-成功 |  |
| message | String |  |  | 错误信息 |  |
| code | Integer |  |  | 1-成功 |  |
