---
title: 客户共享钱包告警信息查询
platform: kuaishou
source_url: https://developers.e.kuaishou.com/docs?docType=DSP&documentId=3313&menuId=4092
doc_id: kuaishou_3313
source_id: kuaishou_3313
---
# 客户共享钱包告警信息查询

## 文档元数据

| 字段 | 值 |
| --- | --- |
| documentId | 3313 |
| documentType | 2 |
| version | 0.0.3 |
| bizName | 效果广告 |
| createTime | 2025-11-03T08:54:03.029Z |

## 接口信息

| 字段 | 值 |
| --- | --- |
| targetPath | https://ad.e.kuaishou.com/rest/openapi/gw/dsp/trade/shared/alert |
| httpMethod | POST |
| httpContentType | JSON |

## 请求参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| agent_id | Long | 是 | 897 | agent_id |  |

## 返回参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| data | WalletAlertInfo[] |  |  | 警告信息 | 共享钱包返回结果 |
| - type | Integer |  |  | 警告类型 |  |
| - hit_number | Integer |  |  | 告警命中钱包数量 |  |
| - status | Integer |  |  | 警告状态 1:开启 0: 关闭 |  |
| - account_shared_wallet_balance_info | AccountSharedWalletBalanceInfo9[] |  |  | 钱包余额信息 |  |
| - app_id_list | Integer[] |  |  | 业务线列表 |  |
| - bind_account_id | Long[] |  |  | 绑定账户id列表 |  |
| - bind_account_cnt | Integer |  |  | 绑定账户数量 |  |
| - app_id | Integer |  |  | 业务线 |  |
| - bind_account_corp_info | Integer |  |  | 绑定账户公司详情 |  |
| - daily_total_charge | Long |  |  | 当日累计总消耗 |  |
| - wallet_name | String |  |  | 钱包名称 |  |
| - account_shared_wallet_status | Integer |  |  | 钱包状态 |  |
| - user_id | Long |  |  | 操作人快手ID |  |
| - operator | String |  |  | 操作人快手昵称 |  |
| - create_time | Long |  |  | 钱包创建时间 |  |
| - after_rebate | Long |  |  | 后返 |  |
| - before_rebate | Long |  |  | 前返 |  |
| - credit | Long |  |  | 信用 |  |
| - cash | Long |  |  | 现金 |  |
| - total_balance | Long |  |  | 总金额 |  |
| - wallet_id | Long |  |  | 钱包ID |  |
| message | String |  | 参数错误 | 错误原因 |  |
| code | Integer |  | 1-成功 | 返回码1-成功 |  |

## 原始内容

```
客户共享钱包告警信息查询 /rest/openapi/gw/dsp/trade/shared/alert agent_id Long agent_id data WalletAlertInfo[] 警告信息 type Integer 警告类型 hit_number Integer 告警命中钱包数量 status Integer 警告状态 1:开启 0: 关闭 account_shared_wallet_balance_info AccountSharedWalletBalanceInfo9[] 钱包余额信息 app_id_list Integer[] 业务线列表 bind_account_id Long[] 绑定账户id列表 bind_account_cnt Integer 绑定账户数量 app_id Integer 业务线 bind_account_corp_info Integer 绑定账户公司详情 daily_total_charge Long 当日累计总消耗 wallet_name String 钱包名称 account_shared_wallet_status Integer 钱包状态 user_id Long 操作人快手ID operator String 操作人快手昵称 create_time Long 钱包创建时间 after_rebate Long 后返 before_rebate Long 前返 credit Long 信用 cash Long 现金 total_balance Long 总金额 wallet_id Long 钱包ID message String 错误原因 code Integer 返回码1-成功
```
