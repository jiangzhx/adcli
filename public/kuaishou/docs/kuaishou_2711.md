---
title: 代理商-复制账户
platform: kuaishou
source_url: https://developers.e.kuaishou.com/docs?docType=DSP&documentId=2711&menuId=3446
doc_id: kuaishou_2711
source_id: kuaishou_2711
---
# 代理商-复制账户

## 文档元数据

| 字段 | 值 |
| --- | --- |
| documentId | 2711 |
| documentType | 2 |
| version | 0.0.2 |
| bizName | 代理商 |
| createTime | 2025-09-16T12:20:02.842Z |

## 概述

流控规则：60QPM

## 接口信息

| 字段 | 值 |
| --- | --- |
| targetPath | https://ad.e.kuaishou.com/rest/openapi/gw/agent/v1/bind/copy/checkAndCopy |
| httpMethod | POST |
| httpContentType | JSON |

## 请求参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| agent_id | Long | 是 | 1 | 代理商id | 代理商id |
| account_list | Long[] | 是 |  | 被复制账户的广告主Ids |  |
| user_id | Long |  |  | 复制后账户绑定的快手Id，不更换userId的情况下不传 |  |
| code | String |  |  | 验证码，不更换userId的情况下不传 |  |
| email | String |  |  | 邮箱，不更换userId的情况下不传 |  |
| uc_type | String | 是 |  | 广告主开户类型，DSP_MAPI |  |
| copy_number | Integer | 是 |  | 需要复制出的广告主数量 |  |

## 返回参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| code | Integer |  |  | 状态码 |  |
| message | String |  |  | 状态描述 |  |
| data | AgentCopyAccountSnake[] |  |  | 代理商复制账户结果 |  |
| - old_account_id | Long |  |  | 被复制账户Id |  |
| - old_account_name | String |  |  | 被复制账户名称 |  |
| - new_account_id | Long |  |  | 复制出的账户Id |  |
| - success | Boolean |  |  | 是否复制成功 |  |
| - err_msg | String |  |  | 复制失败原因 |  |
| - new_account_name | String |  |  | 复制出的账户名称 |  |
| - new_user_id | Long |  |  | 复制出的账户快手Id |  |
| - new_user_name | String |  |  | 复制出的账户快手昵称 |  |
