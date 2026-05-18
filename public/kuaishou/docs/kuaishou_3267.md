---
title: 获取交易状态信息
platform: kuaishou
source_url: https://developers.e.kuaishou.com/docs?docType=DSP&documentId=3267&menuId=4040
doc_id: kuaishou_3267
source_id: kuaishou_3267
---
# 获取交易状态信息

## 文档元数据

| 字段 | 值 |
| --- | --- |
| documentId | 3267 |
| documentType | 2 |
| version | 0.0.0 |
| bizName | 代理商 |
| createTime | 2025-12-29T09:49:59.417Z |

## 接口信息

| 字段 | 值 |
| --- | --- |
| targetPath | https://ad.e.kuaishou.com/rest/openapi/gw/agent/v1/finance/trade/detail |
| httpMethod | POST |
| httpContentType | JSON |

## 请求参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| agent_id | Long | 是 |  | 代理商id |  |
| trade_no | String | 是 |  | 要查询的交易号 |  |

## 返回参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| data | TradeDetailGatewayResp |  |  | 交易详情 |  |
| - trade_no | String |  |  | 交易号 |  |
| - trade_status | String |  |  | 交易状态 |  |
| - trade_type | String |  |  | 交易类型，枚举：AGENT_TO_ACCOUNT（广告主充值）ACCOUNT_TO_AGENT（广告主退款）ACCOUNT_TO_ACCOUNT（广告主互转） |  |
| - payer_side_record_id | String |  |  | 支付侧（转出方一侧）产生流水号 |  |
| - receiver_side_record_id | String |  |  | 收款侧（转入方一侧）产生流水号 |  |
| code | Integer |  |  | 状态码 |  |
| message | String |  |  | 返回消息 |  |

## 原始内容

```
获取交易状态信息 /rest/openapi/gw/agent/v1/finance/trade/detail trade_no String 要查询的交易号 data TradeDetailGatewayResp 交易详情 trade_no String 交易号 trade_status String 交易状态 trade_type String 交易类型，枚举：AGENT_TO_ACCOUNT（广告主充值）ACCOUNT_TO_AGENT（广告主退款）ACCOUNT_TO_ACCOUNT（广告主互转） payer_side_record_id String 支付侧（转出方一侧）产生流水号 receiver_side_record_id String 收款侧（转入方一侧）产生流水号 code Integer 状态码 message String 返回消息
```
