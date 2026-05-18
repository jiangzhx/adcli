---
title: 客户共享钱包间转账
platform: kuaishou
source_url: https://developers.e.kuaishou.com/docs?docType=DSP&documentId=3341&menuId=4137
doc_id: kuaishou_3341
source_id: kuaishou_3341
---
# 客户共享钱包间转账

## 文档元数据

| 字段 | 值 |
| --- | --- |
| documentId | 3341 |
| documentType | 2 |
| version | 0.0.1 |
| bizName | 效果广告 |
| createTime | 2026-03-25T07:40:46.858Z |

## 接口信息

| 字段 | 值 |
| --- | --- |
| targetPath | https://ad.e.kuaishou.com/rest/openapi/gw/dsp/trade/shared/wallet/transfer |
| httpMethod | POST |
| httpContentType | JSON |

## 请求参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| to_wallet_name | String | 是 | 测试2000+个绑定账户 | 转入钱包名称 |  |
| wallet_id_in | String | 是 | 662785604249194538 | 转入钱包id |  |
| for_wallet | Boolean | 是 | true | 证明是否是客户共享钱包间转账 |  |
| wallet_id | String | 是 | 662785604249194538 | 转出钱包id |  |
| wallet_name | String | 是 | 测试2000+个绑定账户 | 转出钱包名称 |  |
| agent_id | String | 是 | 897 | 代理商id |  |
| agent_name | String | 是 | 大植哥代理商 | 代理商名称 |  |
| trade_no | String | 是 | map_test_001 | 交易流水号-每笔交易唯一 流水号生成方式：mapi_{共享钱包ID}_{代理商ID}_{自定义编号} （重要：快手侧根据该流水号 |  |
| trade_type | Long | 是 | 17 | 17 （重要：此处必填17表示钱包间转账） |  |
| related_flow_no | String | 是 | map_test_001 | 关联业务方流水号 |  |
| biz_trade_time | String | 是 | 1743410090000 | 交易时间戳 |  |
| total_amount | Long | 是 | 1 | 转账金额 |  |
| user_data | String |  |  | user_data |  |
| user_id | String | 是 | 2189467598 | 操作人快手ID（需要有权限操作的人员快手ID） |  |
| operator | String | 是 | System | 操作人快手昵称 |  |
| app_id | Long | 是 | 7 | 业务线【必填】磁力智投默认传7 |  |
| sign_company | String | 是 | 大植哥代理商 | 签约主体信息【必填】 |  |
| funds_op_type | Long | 是 | 1 | 资金操作类型 1 现金操作 2 信用操作 |  |

## 返回参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| data | AccountSharedWalletTransferRespNew |  |  | 返回结果数据 |  |
| - trade_status | Long |  | 1 | 字段描述，需要修改 |  |
| - trade_no | String |  | map_test_001 | 接入方流水号 |  |
| message | String |  | 钱包余额不足 | 错误原因 |  |
| code | Integer |  | 1-成功 | 返回码1-成功 |  |

## 原始内容

```
客户共享钱包间转账 /rest/openapi/gw/dsp/trade/shared/wallet/transfer to_wallet_name String 转入钱包姓名 wallet_id_in String 转入钱包id for_wallet Boolean 证明是否是客户共享钱包间转账 wallet_id String 转出钱包id wallet_name String 转出钱包姓名 agent_id String 代理商id agent_name String 代理商姓名 trade_no String 交易流水号-每笔交易唯一 流水号生成方式：mapi_{共享钱包ID}_{代理商ID}_{自定义编号} （重要：快手侧根据该流水号 trade_type Long 交易类型 16-转入共享钱包 17-从共享钱包转出 related_flow_no String 关联业务方流水号 biz_trade_time String 交易时间戳 total_amount Long 转账金额 user_data String user_data user_id String 操作人快手ID（需要有权限操作的人员快手ID） operator String 操作人快手昵称 app_id Long 业务线【必填】磁力智投默认传7 sign_company String 签约主体信息【必填】 funds_op_type Long 资金操作类型 1 现金操作 2 信用操作 data AccountSharedWalletTransferRespNew 返回结果数据 trade_status Long 字段描述，需要修改 trade_no String 接入方流水号 message String 错误原因 code Integer 返回码1-成功
```
