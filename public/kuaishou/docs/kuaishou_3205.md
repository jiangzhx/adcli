---
title: 客户共享钱包余额查询
platform: kuaishou
source_url: https://developers.e.kuaishou.com/docs?docType=DSP&documentId=3205&menuId=3965
doc_id: kuaishou_3205
source_id: kuaishou_3205
---
# 客户共享钱包余额查询

## 文档元数据

| 字段 | 值 |
| --- | --- |
| documentId | 3205 |
| documentType | 2 |
| version | 0.0.4 |
| bizName | 效果广告 |
| createTime | 2026-04-13T11:49:09.636Z |

## 接口信息

| 字段 | 值 |
| --- | --- |
| targetPath | https://ad.e.kuaishou.com/rest/openapi/gw/dsp/trade/shared/balance |
| httpMethod | POST |
| httpContentType | JSON |

## 请求参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| query_time | Long |  |  | 日终余额查询起始时间戳 | 毫秒级时间戳，比如，需要查2026年4月13日的日终余额，传参为1776009600 |
| agent_id | Long | 是 | agent_id | 代理商ID | agent_id |
| wallet_ids | Long[] | 是 |  | 钱包id列表 |  |

## 返回参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| code | Integer |  | 返回码 | 返回码 | 返回码 |
| message | String |  | 描述 | 描述 |  |
| data | AccountSharedWalletBalanceInfoForMapi[] |  |  | 钱包余额信息列表 |  |
| - after_rebate_end | Long |  |  | 后返日终余额 |  |
| - before_rebate_end | Long |  |  | 前返日终余额 |  |
| - credit_end | Long |  |  | 信用日终余额 |  |
| - cash_end | Long |  |  | 现金日终余额 |  |
| - credit_refund_balance | Long |  |  | 信用可退金额 |  |
| - cash_refund_balance | Long |  |  | 现金可退金额 |  |
| - wallet_name | String |  |  | 钱包名称 |  |
| - account_shared_wallet_status | Integer |  |  | 钱包状态 | 0 未知；1 已生效；2 失效中；3已失效 |
| - user_id | Long |  |  | 操作人快手ID |  |
| - operator | String |  |  | 操作人快手昵称 |  |
| - create_time | Long |  |  | 钱包创建时间 |  |
| - after_rebate | Long |  |  | 后返 |  |
| - before_rebate | Long |  |  | 前返 |  |
| - credit | Long |  |  | 信用 |  |
| - cash | Long |  |  | 现金 |  |
| - total_balance | Long |  |  | 总金额 |  |
| - wallet_id | Long |  |  | 钱包ID |  |
| - create_user_id | Long |  |  | 创建人快手ID |  |
| - create_operator | String |  |  | 创建人快手昵称 |  |

## 原始内容

```
客户共享钱包余额查询 /rest/openapi/gw/dsp/trade/shared/balance query_time Long 日终余额查询起始时间戳 agent_id Long 代理商ID wallet_ids Long[] 钱包id列表 code Integer 返回码 message String 描述 data AccountSharedWalletBalanceInfoForMapi[] 钱包余额信息列表 after_rebate_end Long 后返日终余额 before_rebate_end Long 前返日终余额 credit_end Long 信用日终余额 cash_end Long 现金日终余额 credit_refund_balance Long 信用可退金额 cash_refund_balance Long 现金可退金额 wallet_name String 钱包名称 account_shared_wallet_status Integer 钱包状态 user_id Long 操作人快手ID operator String 操作人快手昵称 create_time Long 钱包创建时间 after_rebate Long 后返 before_rebate Long 前返 credit Long 信用 cash Long 现金 total_balance Long 总金额 wallet_id Long 钱包ID create_user_id Long 创建人快手ID create_operator String 创建人快手昵称
```
