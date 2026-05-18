---
title: 客户共享钱包绑定账户查询
platform: kuaishou
source_url: https://developers.e.kuaishou.com/docs?docType=DSP&documentId=3312&menuId=4093
doc_id: kuaishou_3312
source_id: kuaishou_3312
---
# 客户共享钱包绑定账户查询

## 文档元数据

| 字段 | 值 |
| --- | --- |
| documentId | 3312 |
| documentType | 2 |
| version | 0.0.2 |
| bizName | 效果广告 |
| createTime | 2025-11-03T08:54:06.764Z |

## 接口信息

| 字段 | 值 |
| --- | --- |
| targetPath | https://ad.e.kuaishou.com/rest/openapi/gw/dsp/trade/shared/bindList |
| httpMethod | POST |
| httpContentType | JSON |

## 请求参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| page_size | Integer |  |  | 分页大小 |  |
| page_num | Integer |  |  | 分页页码 |  |
| agent_id | Long | 是 |  | 代理商id |  |
| wallet_id | Long | 是 |  | 钱包id |  |

## 返回参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| data | AccountSharedWalletAccountRelationQueryForMapiResp |  |  | 账户详细信息 |  |
| - total_cnt | Long |  |  | 总数 |  |
| - account_shared_wallet_account_info | AccountSharedWalletAccountInfo[] |  |  | 绑定账户信息列表 |  |
| - app_id_list | Integer[] |  |  | 业务线列表 |  |
| - account_status_desc | String |  |  | 投放账户状态描述 |  |
| - account_type_desc | String |  |  | 账户类型描述 |  |
| - yesterday_consume | Long |  |  | 昨日消耗 |  |
| - bind_time | Long |  |  | 绑定时间 |  |
| - open_account_name | String |  |  | 开户人 |  |
| - account_bind_status | Integer |  |  | 账户绑定状态 |  |
| - update_time | Long |  |  | 更新时间 |  |
| - create_time | Long |  |  | 创建时间 |  |
| - product_name | String |  |  | 产品名称 |  |
| - product_id | Long |  |  | 产品id |  |
| - account_status | Integer |  |  | 投放账户状态 |  |
| - user_name | String |  |  | 关联投放账户快手名称 |  |
| - user_id | Long |  |  | 关联投放账户快手id |  |
| - subject | String |  |  | 公司主体，投放账户公司名称 |  |
| - account_type | Integer |  |  | 关联投放账户类型 |  |
| - account_name | String |  |  | 关联投放账户名称 |  |
| - account_id | Long |  |  | 关联投放账户id |  |
| - agent_name | String |  |  | 代理商名称 |  |
| - agent_id | Long |  |  | 代理商id |  |
| - app_id | Integer |  |  | 业务线 |  |
| - wallet_id | Long |  |  | 钱包id |  |
| - id | Long |  |  | id |  |
| - wallet_name | String |  |  | 钱包名称 |  |
| - wallet_id | Long |  |  | 钱包id |  |
| message | String |  |  | 错误描述 |  |
| code | Integer |  |  | 返回码 |  |

## 原始内容

```
客户共享钱包绑定账户查询 /rest/openapi/gw/dsp/trade/shared/bindList page_size Integer 分页大小 page_num Integer 分页页码 agent_id Long 代理商id wallet_id Long 钱包id data AccountSharedWalletAccountRelationQueryForMapiResp 账户详细信息 total_cnt Long 总数 account_shared_wallet_account_info AccountSharedWalletAccountInfo[] 绑定账户信息列表 app_id_list Integer[] 业务线列表 account_status_desc String 投放账户状态描述 account_type_desc String 账户类型描述 yesterday_consume Long 昨日消耗 bind_time Long 绑定时间 open_account_name String 开户人 account_bind_status Integer 账户绑定状态 update_time Long 更新时间 create_time Long 创建时间 product_name String 产品名称 product_id Long 产品id account_status Integer 投放账户状态 user_name String 关联投放账户快手名称 user_id Long 关联投放账户快手id subject String 公司主体，投放账户公司名称 account_type Integer 关联投放账户类型 account_name String 关联投放账户名称 account_id Long 关联投放账户id agent_name String 代理商名称 agent_id Long 代理商id app_id Integer 业务线 wallet_id Long 钱包id id Long id wallet_name String 钱包名称 wallet_id Long 钱包id message String 错误描述 code Integer 返回码
```
