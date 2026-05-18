---
title: 代理商给广告主账户转账接口
platform: kuaishou
source_url: https://developers.e.kuaishou.com/docs?docType=DSP&documentId=3099&menuId=3842
doc_id: kuaishou_3099
source_id: kuaishou_3099
---
# 代理商给广告主账户转账接口

## 文档元数据

| 字段 | 值 |
| --- | --- |
| documentId | 3099 |
| documentType | 2 |
| version | 0.0.0 |
| bizName | 代理商 |
| createTime | 2026-01-07T03:20:44.866Z |

## 接口信息

| 字段 | 值 |
| --- | --- |
| targetPath | https://ad.e.kuaishou.com/rest/openapi/gw/agent/v1/finance/transfer/out |
| httpMethod | POST |
| httpContentType | JSON |

## 请求参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| biz_unique_key | String |  |  | 交易号，可用于查询交易状态 |  |
| advertiser_id | Long | 是 | 1 | 广告主ID |  |
| amount | Long |  |  | 现金金额，转现金的时候，金额放在这个字段上 |  |
| credit_amount | Long |  |  | 信用账户金额，转信用、现金+信用的时候，金额放在这个字段 |  |
| extended_amount | Long |  |  | 预留账户金额 |  |
| rebate_amount | Long |  |  | 后返金额 |  |
| pre_rebate_amount | Long |  |  | 前返金额 |  |
| transfer_type | Long |  |  | 转账类型 1:现金,2:信用,,6: 现金+信用 |  |

## 返回参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| code | Integer |  | 1 | code |  |
| message | String |  |  | message |  |
| data | TransferResultGatewayResp |  |  | data |  |
| - trade_no | String |  | 776975954695352320 | 转账请求对应的交易号（业务唯一键） |  |
| - success | Boolean |  |  | 转账是否成功（旧逻辑的二值结果，为了兼容历史而留，更准确的状态应该看tradeStatus） |  |
| - trade_status | String |  | SUCCESS | 转账交易的目前状态，枚举SUCCESS（交易成功）DOING（交易处理中）FAILED（交易失败）EXCEPTION（交易异常-业务上不应存在的异常失败）IGNORED（无效交易-可忽略不管的交易） |  |
| - fail_reason | String |  | 失败原因 | 转账失败原因 |  |

## 原始内容

```
代理商给广告主账户转账接口 /rest/openapi/gw/agent/v1/finance/transfer/out biz_unique_key String 交易号，可用于查询交易状态 advertiser_id Long 广告主ID amount Long 现金金额，转现金的时候，金额放在这个字段上 credit_amount Long 信用账户金额，转信用、现金+信用的时候，金额放在这个字段 extended_amount Long 预留账户金额 rebate_amount Long 后返金额 pre_rebate_amount Long 前返金额 transfer_type Long 转账类型 1:现金,2:信用,,6: 现金+信用 code Integer code message String message data TransferResultGatewayResp data trade_no String 转账请求对应的交易号（业务唯一键） success Boolean 转账是否成功（旧逻辑的二值结果，为了兼容历史而留，更准确的状态应该看tradeStatus） trade_status String 转账交易的目前状态，枚举SUCCESS（交易成功）DOING（交易处理中）FAILED（交易失败）EXCEPTION（交易异常-业务上不应存在的异常失败）IGNORED（无效交易-可忽略不管的交易）
```
