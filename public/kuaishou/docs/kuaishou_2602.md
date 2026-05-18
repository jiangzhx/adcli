---
title: 共享授权结果
platform: kuaishou
source_url: https://developers.e.kuaishou.com/docs?docType=DSP&documentId=2602&menuId=3326
doc_id: kuaishou_2602
source_id: kuaishou_2602
---
# 共享授权结果

## 文档元数据

| 字段 | 值 |
| --- | --- |
| documentId | 2602 |
| documentType | 2 |
| version | 0.0.1 |
| bizName | 效果广告 |
| createTime | 2024-07-04T11:24:58.916Z |

## 接口信息

| 字段 | 值 |
| --- | --- |
| targetPath | https://ad.e.kuaishou.com/rest/openapi/gw/dsp/authorization/shard/result |
| httpMethod | POST |
| httpContentType | JSON |

## 请求参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| shard_auth_id | Long | 是 |  | 共享授权任务ID |  |
| advertiser_id | Long | 是 |  | advertiser_id |  |

## 返回参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| code | Integer |  |  | 共享授权任务信息查询是否成功 0代表查询失败 1代表查询成功 |  |
| message | String |  | "OK" | 返回信息 |  |
| data | ShardAuthorizeResultSnake |  |  | 共享授权结果 |  |
| - status | Integer |  |  | 授权任务状态 0 处理中 1全部成功 2部分成功 3全部失败 |  |
| - success_account | AuthAccountSnake[] |  |  | 共享授权成功的账户信息 |  |
| - account_id | Long |  |  | 账户ID |  |
| - account_name | String |  |  | 账户名称 |  |
| - fail_reason | String |  |  | 授权失败原因 |  |
| - fail_account | AuthAccountSnake[] |  |  | 共享授权失败的账户信息 |  |
| - account_id | Long |  |  | 账户ID |  |
| - account_name | String |  |  | 账户名称 |  |
| - fail_reason | String |  |  | 授权失败原因 |  |
