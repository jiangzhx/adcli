---
title: 代理商-修改账户名称
platform: kuaishou
source_url: https://developers.e.kuaishou.com/docs?docType=DSP&documentId=3281&menuId=4059
doc_id: kuaishou_3281
source_id: kuaishou_3281
---
# 代理商-修改账户名称

## 文档元数据

| 字段 | 值 |
| --- | --- |
| documentId | 3281 |
| documentType | 2 |
| version | 0.0.1 |
| bizName | 代理商 |
| createTime | 2025-10-23T07:19:17.716Z |

## 概述

用于修改广告主名称，注意user_id字段为广告主对应的快手ID。 流控规则：20QPM。 权限scope：account_cert，参考：scope权限说明

## 接口信息

| 字段 | 值 |
| --- | --- |
| targetPath | https://ad.e.kuaishou.com/rest/openapi/gw/agent/v1/advertiser/modify/name |
| httpMethod | POST |
| httpContentType | JSON |

## 请求参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| agent_id | Long | 是 | 1 | 代理商ID | 代理商ID |
| advertiser_id | Long | 是 | 123 | 广告主ID | 广告主ID |
| user_id | Long | 是 | 1234 | 广告主快手ID | 广告主快手ID |
| new_account_name | String | 是 | 新的名字 | 新的广告主名称 | 新的广告主名称 |

## 返回参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| code | Integer |  | 1 | 响应code | 响应code |
| message | String |  | 成功 | 响应msg | 响应msg |
| data | TransferOutResp |  | - | 响应data | 该接口无需关注 |
| - success | Boolean |  | true | 是否成功 |  |
