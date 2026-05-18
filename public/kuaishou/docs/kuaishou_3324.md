---
title: 代理商-广告主可转/退金额查询
platform: kuaishou
source_url: https://developers.e.kuaishou.com/docs?docType=DSP&documentId=3324&menuId=4106
doc_id: kuaishou_3324
source_id: kuaishou_3324
---
# 代理商-广告主可转/退金额查询

## 文档元数据

| 字段 | 值 |
| --- | --- |
| documentId | 3324 |
| documentType | 2 |
| version | 0.0.1 |
| bizName | 代理商 |
| createTime | 2025-12-04T08:32:00.066Z |

## 概述

该接口用于查询广告主可转/退金额，可转/退金额存在消耗押款逻辑，具体可咨询销运同学。 广告主ID需要有直接归属关系，例如一代代理商只能查询未分配给子端口的账户，子端口只能查询已分配给自身的账户。

## 接口信息

| 字段 | 值 |
| --- | --- |
| targetPath | https://ad.e.kuaishou.com/rest/openapi/gw/agent/v1/finance/account/can/decrease/query |
| httpMethod | POST |
| httpContentType | JSON |

## 请求参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| agent_id | Long | 是 | 1 | 代理商id |  |
| advertiser_id | Long | 是 | 1 | 广告主id | 一代代理商只能查未分配给子端口广告主，子端口只能查已经分配给自己的广告主 |
| refund_type | Integer | 是 | 1 | 退款/转账类型 | 1-现金转账，2-信用转账，3-框返转账，4-激励转账，6-信用+现金转账 |

## 返回参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| code | Integer |  | 0 | 响应code |  |
| message | String |  | OK | 响应msg |  |
| data | RefundTransferAmountResp |  |  | 响应内容 |  |
| - amount | Long |  | 10000 | 可转/退金额 | 单位：厘 |

## 原始内容

```
代理商-广告主可转/退金额查询 /rest/openapi/gw/agent/v1/finance/account/can/decrease/query agent_id Long 代理商id advertiser_id Long 广告主id refund_type Integer 退款/转账类型 code Integer 响应code message String 响应msg data RefundTransferAmountResp 响应内容 amount Long 可转/退金额
```
