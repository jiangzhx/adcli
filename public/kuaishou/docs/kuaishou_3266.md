---
title: 客户共享钱包列表
platform: kuaishou
source_url: https://developers.e.kuaishou.com/docs?docType=DSP&documentId=3266&menuId=4039
doc_id: kuaishou_3266
source_id: kuaishou_3266
---
# 客户共享钱包列表

## 文档元数据

| 字段 | 值 |
| --- | --- |
| documentId | 3266 |
| documentType | 2 |
| version | 0.0.0 |
| bizName | 效果广告 |
| createTime | 2025-07-21T11:54:42.743Z |

## 接口信息

| 字段 | 值 |
| --- | --- |
| targetPath | https://ad.e.kuaishou.com/rest/openapi/gw/dsp/trade/shared/walletList |
| httpMethod | POST |
| httpContentType | JSON |

## 请求参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| agent_id | String | 是 | 897 | agent_id |  |
| page_num | Long |  | 1 | page_num |  |
| page_size | Long |  | 1 | page_size |  |

## 返回参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| data | AccountSharedListResp[] |  | 共享钱包返回结果 | 共享钱包返回结果 | 共享钱包返回结果 |
| - wallet_id | String |  | 774751159713685694 | 钱包ID |  |
| - wallet_name | String |  | 共享钱包-游戏下载类 | 钱包名称 |  |
| - app_id | Long |  | 7 | 业务线ID |  |
| - agent_name | String |  | 博文-免领 | 代理商名称 |  |
| - agent_id | String |  | 1012836 | 代理商ID |  |
| - total_balance | String |  | 0 | 总余额 |  |
| - cash | String |  | 0 | 现金余额 |  |
| - create_time | String |  | 1753063650102 | 创建时间时间戳 |  |
| - account_shared_wallet_status | Long |  | 1 | 钱包状态 1-已生效2-失效中 3-已失效 |  |
| message | String |  | 参数错误 | 错误原因 |  |
| code | Integer |  | 1-成功 | 返回码1-成功 |  |

## 原始内容

```
客户共享钱包列表 /rest/openapi/gw/dsp/trade/shared/walletList agent_id String agent_id page_num Long page_num page_size Long page_size data AccountSharedListResp[] 共享钱包返回结果 wallet_id String 字段描述，需要修改 wallet_name String 字段描述，需要修改 app_id Long 字段描述，需要修改 agent_name String 字段描述，需要修改 agent_id String 字段描述，需要修改 total_balance String 字段描述，需要修改 cash String 字段描述，需要修改 credit String 字段描述，需要修改 before_rebate String 字段描述，需要修改 after_rebate String 字段描述，需要修改 create_time String 字段描述，需要修改 operator String 字段描述，需要修改 user_id String 字段描述，需要修改 account_shared_wallet_status Long 字段描述，需要修改 message String 错误原因 code Integer 返回码1-成功
```
