---
title: 客户共享钱包账户充值/退款
platform: kuaishou
source_url: https://developers.e.kuaishou.com/docs?docType=DSP&documentId=3213&menuId=3983
doc_id: kuaishou_3213
source_id: kuaishou_3213
---
# 客户共享钱包账户充值/退款

## 文档元数据

| 字段 | 值 |
| --- | --- |
| documentId | 3213 |
| documentType | 2 |
| version | 0.0.3 |
| bizName | 效果广告 |
| createTime | 2026-03-05T13:56:10.942Z |

## 概述

从代理商钱包向共享钱包转入&amp;转出

## 接口信息

| 字段 | 值 |
| --- | --- |
| targetPath | https://ad.e.kuaishou.com/rest/openapi/gw/dsp/trade/shared/transfer |
| httpMethod | POST |
| httpContentType | JSON |

## 请求参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| wallet_id | String |  | 662785604249194538 | 钱包ID |  |
| wallet_name | String |  | 测试2000+个绑定账户 | 钱包名称 |  |
| agent_id | String |  | 897 | 代理商ID |  |
| agent_name | String |  | 大植哥代理商 | 代理商名称 |  |
| trade_no | String |  | map_test_001 | 交易流水号-每笔交易唯一 流水号生成方式：mapi_{共享钱包ID}_{代理商ID}_{自定义编号} （重要：快手侧根据该流水号幂等） |  |
| trade_type | Long |  | 16 | 交易类型 16-转入共享钱包 17-从共享钱包转出 |  |
| related_flow_no | String |  | map_test_001 | 关联业务方流水号 |  |
| biz_trade_time | String |  | 1743410090000 | 交易时间戳 |  |
| total_amount | Long |  | 1 | total_amount |  |
| user_data | String |  |  | user_data |  |
| user_id | String |  | 2189467598 | 操作人快手ID（需要有权限操作的人员快手ID） |  |
| operator | String |  | System | 操作人快手昵称 |  |
| app_id | Long |  | 7 | 业务线【必填】磁力智投默认传7 |  |
| sign_company | String |  | 大植哥代理商 | 签约主体信息【必填】 |  |
| funds_op_type | Long |  | 1 | 资金操作类型 1 现金操作 2 信用操作 |  |

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
客户共享钱包账户充值/退款 /rest/openapi/gw/dsp/trade/shared/transfer to_wallet_name String 转入钱包姓名 wallet_id_in String 转入钱包id for_wallet Boolean 是否是共享钱包间转账 wallet_id String 钱包ID wallet_name String 钱包名称 agent_id String 代理商ID agent_name String 代理商名称 trade_no String 交易流水号-每笔交易唯一 流水号生成方式：mapi_{共享钱包ID}_{代理商ID}_{自定义编号} （重要：快手侧根据该流水号幂等） trade_type Long 交易类型 16-转入共享钱包 17-从共享钱包转出 related_flow_no String 关联业务方流水号 biz_trade_time String 交易时间戳 total_amount Long total_amount user_data String user_data user_id String 操作人快手ID（需要有权限操作的人员快手ID） operator String 操作人快手昵称 app_id Long 业务线【必填】磁力智投默认传7 sign_company String 签约主体信息【必填】 funds_op_type Long 资金操作类型 1 现金操作 2 信用操作 data AccountSharedWalletTransferRespNew 返回结果数据 trade_status Long 字段描述，需要修改 trade_no String 接入方流水号 message String 错误原因 code Integer 返回码1-成功
```
