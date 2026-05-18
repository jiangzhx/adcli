---
title: 一代给二代充值
platform: kuaishou
source_url: https://developers.e.kuaishou.com/docs?docType=DSP&documentId=3265&menuId=4038
doc_id: kuaishou_3265
source_id: kuaishou_3265
---
# 一代给二代充值

## 文档元数据

| 字段 | 值 |
| --- | --- |
| documentId | 3265 |
| documentType | 2 |
| version | 0.0.0 |
| bizName | 代理商 |
| createTime | 2025-12-29T09:39:56.256Z |

## 接口信息

| 字段 | 值 |
| --- | --- |
| targetPath | https://ad.e.kuaishou.com/rest/openapi/gw/agent/v1/finance/transfer/secondary/recharge |
| httpMethod | POST |
| httpContentType | JSON |

## 请求参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| agent_id | Long | 是 |  | 代理商id |  |
| biz_unique_key | String |  |  | 唯一交易号(可不填） |  |
| credit_amount | Long |  |  | 信用，单位厘 |  |
| amount | Long |  |  | 现金，单位厘 |  |
| transfer_type | Integer | 是 |  | 转账类型：1-现金 2-信用 |  |
| secondary_agent_id | Long | 是 |  | 子端口id（二代代理商id） |  |

## 返回参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| data | SecondaryAgentTradeGwResult |  |  | 转账结果 |  |
| - data | Boolean |  |  | 转账结果：true-成功，false-fail |  |
| message | String |  |  | message |  |
| code | Integer |  |  | code |  |

## 原始内容

```
一代给二代充值 /rest/openapi/gw/agent/v1/finance/transfer/secondary/recharge biz_unique_key String 唯一交易号(可不填） credit_amount Long 信用，单位厘 amount Long 现金，单位厘 transfer_type Integer 转账类型：1-现金 2-信用 secondary_agent_id Long 子端口id（二代代理商id） data SecondaryAgentTradeGwResult 转账结果 data Boolean 转账结果：true-成功，false-fail message String message code Integer code
```
