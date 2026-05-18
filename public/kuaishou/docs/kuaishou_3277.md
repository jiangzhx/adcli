---
title: 代理商-获取新的交易号
platform: kuaishou
source_url: https://developers.e.kuaishou.com/docs?docType=DSP&documentId=3277&menuId=4053
doc_id: kuaishou_3277
source_id: kuaishou_3277
---
# 代理商-获取新的交易号

## 文档元数据

| 字段 | 值 |
| --- | --- |
| documentId | 3277 |
| documentType | 2 |
| version | 0.0.2 |
| bizName | 代理商 |
| createTime | 2025-12-29T09:30:45.621Z |

## 概述

在使用代理商相关的财务交易能力时，可以先获取一个交易号，再传入biz_unique_key字段作为本次交易的唯一标识，用于查询交易状态

## 接口信息

| 字段 | 值 |
| --- | --- |
| targetPath | https://ad.e.kuaishou.com/rest/openapi/gw/agent/v1/finance/pay/payToken |
| httpMethod | POST |
| httpContentType | FORM |

## 请求参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| agent_id | Long | 是 | 1 | 代理商id | 代理商id |
| remark | String | 是 |  | 获取交易号的场景说明 |  |

## 返回参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| data | TradeNoGatewayResp |  |  | 新分配的交易号 |  |
| - trade_no | String |  |  | 交易号 |  |
| message | String |  |  | 返回消息 |  |
| code | Integer |  |  | 返回码 |  |
