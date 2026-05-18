---
title: 拉取账户可复制信息列表
platform: kuaishou
source_url: https://developers.e.kuaishou.com/docs?docType=DSP&documentId=3309&menuId=4090
doc_id: kuaishou_3309
source_id: kuaishou_3309
---
# 拉取账户可复制信息列表

## 文档元数据

| 字段 | 值 |
| --- | --- |
| documentId | 3309 |
| documentType | 2 |
| version | 0.0.2 |
| bizName | 代理商 |
| createTime | 2025-10-31T04:24:48.915Z |

## 接口信息

| 字段 | 值 |
| --- | --- |
| targetPath | https://ad.e.kuaishou.com/rest/openapi/gw/agent/v1/account/can/copy/query |
| httpMethod | POST |
| httpContentType | JSON |

## 请求参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| agent_id | Long | 是 | 1 | 代理商id |  |
| account_id_list | Long[] | 是 | [1,2] | 广告主id列表 |  |
| uc_type | String | 是 | 只可填写DSP_MAPI、ESP_CID | 业务线 |  |

## 返回参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| code | Integer |  | 1 | 响应code |  |
| message | String |  | success | 响应msg |  |
| data | AccountCanCopyInfoSnake[] |  | data | 响应data |  |
| - account_id | Long |  |  | 账户id |  |
| - user_id | Long |  |  | 快手id |  |
| - account_name | String |  |  | 账户名称 |  |
| - corporation_name | String |  |  | 公司名称 |  |
| - product_name | String |  |  | 产品名称 |  |
| - can_copy | Integer |  |  | 是否可复制 | 0-不可复制，1-可复制 |
| - cannot_copy_reason | String |  |  | 不可复制原因 |  |
