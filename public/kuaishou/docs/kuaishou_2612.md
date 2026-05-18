---
title: 代理商-可复制账户列表
platform: kuaishou
source_url: https://developers.e.kuaishou.com/docs?docType=DSP&documentId=2612&menuId=3336
doc_id: kuaishou_2612
source_id: kuaishou_2612
---
# 代理商-可复制账户列表

## 文档元数据

| 字段 | 值 |
| --- | --- |
| documentId | 2612 |
| documentType | 2 |
| version | 0.0.2 |
| bizName | 代理商 |
| createTime | 2025-08-28T12:01:17.857Z |

## 接口信息

| 字段 | 值 |
| --- | --- |
| targetPath | https://ad.e.kuaishou.com/rest/openapi/gw/agent/v1/bind/copy/accounts |
| httpMethod | POST |
| httpContentType | JSON |

## 请求参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| agent_id | Long | 是 | 1 | 代理商id | 代理商id |
| keyword | String |  |  | 模糊查询关键字 |  |
| uc_type | String | 是 |  | 广告主复制类型：DSP_MAPI |  |
| page_no | Integer | 是 |  | 页码 |  |
| page_size | Integer | 是 |  | 页面大小 |  |

## 返回参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| code | Integer |  |  | 状态码 |  |
| message | String |  |  | msg |  |
| data | AgentCanCopyAccountRespSnake949 |  |  | 可复制账户列表 |  |
| - agent_can_copy_accounts | AgentCanCopyAccountSnake[] |  |  | 可复制广告主列表 |  |
| - account_id | Long |  |  | 广告主id |  |
| - user_id | Long |  |  | 广告主快手id |  |
| - account_name | String |  |  | 广告主名称 |  |
| - corporation_name | String |  |  | 公司名称 |  |
| - uc_type | String |  |  | 账户类型 |  |
| - product_name | String |  |  | 产品名 |  |
| - total | Long |  |  | 总条数 |  |

## 原始内容

```
代理商-可复制账户列表 /rest/openapi/gw/agent/v1/bind/copy/accounts keyword String 模糊查询关键字 uc_type String 广告主复制类型：DSP_MAPI page_no Integer 页码 page_size Integer 页面大小 code Integer 状态码 message String msg data AgentCanCopyAccountRespSnake949 可复制账户列表 agent_can_copy_accounts AgentCanCopyAccountSnake[] 可复制广告主列表 account_id Long 广告主id user_id Long 广告主快手id account_name String 广告主名称 corporation_name String 公司名称 uc_type String 账户类型 product_name String 产品名 total Long 总条数
```
