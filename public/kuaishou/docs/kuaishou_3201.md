---
title: 广告主转账
platform: kuaishou
source_url: https://developers.e.kuaishou.com/docs?docType=DSP&documentId=3201&menuId=3958
doc_id: kuaishou_3201
source_id: kuaishou_3201
---
# 广告主转账

## 文档元数据

| 字段 | 值 |
| --- | --- |
| documentId | 3201 |
| documentType | 2 |
| version | 0.0.0 |
| bizName | 代理商 |
| createTime | 2026-01-07T03:17:07.624Z |

## 接口信息

| 字段 | 值 |
| --- | --- |
| targetPath | https://ad.e.kuaishou.com/rest/openapi/gw/agent/v1/finance/account/transfer |
| httpMethod | POST |
| httpContentType | JSON |

## 请求参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| from_account_id | Long | 是 |  | 转账广告主ID |  |
| to_account_id | Long | 是 |  | 目标广告主ID |  |
| operator_name | String | 是 |  | 操作人名称 |  |
| transfer_type | Integer | 是 |  | 操作类型:1:现金,2:信用,3: 框返,4: 激励, ,6: 现金+信用 |  |
| transfer_amount | Long | 是 |  | 转账金额, 单位厘 |  |
| agent_id | Long | 是 |  | agent_id |  |
| biz_unique_key | String | 是 |  | 转账交易唯一串（可通过getPayToken接口获取） |  |

## 返回参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| code | Integer |  |  | 状态码 |  |
| message | String |  |  | message |  |
| data | TransferResultGatewayResp |  |  | data |  |
| - trade_no | String |  | 776975954695352320 | 转账请求对应的交易号（业务唯一键） |  |
| - success | Boolean |  |  | 转账是否成功（旧逻辑的二值结果，为了兼容历史而留，更准确的状态应该看tradeStatus） |  |
| - trade_status | String |  | SUCCESS | 转账交易的目前状态，枚举SUCCESS（交易成功）DOING（交易处理中）FAILED（交易失败）EXCEPTION（交易异常-业务上不应存在的异常失败）IGNORED（无效交易-可忽略不管的交易） |  |
| - fail_reason | String |  | 失败原因 | 转账失败原因 |  |
