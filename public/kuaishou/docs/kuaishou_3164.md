---
title: 代理商-创建广告主
platform: kuaishou
source_url: https://developers.e.kuaishou.com/docs?docType=DSP&documentId=3164&menuId=3917
doc_id: kuaishou_3164
source_id: kuaishou_3164
---
# 代理商-创建广告主

## 文档元数据

| 字段 | 值 |
| --- | --- |
| documentId | 3164 |
| documentType | 2 |
| version | 0.0.2 |
| bizName | 代理商 |
| createTime | 2025-09-16T12:16:50.313Z |

## 概述

创建并绑定广告主，接口调用前需要先获取验证码，参考「代理商-创建广告主发送验证码」 流控规则：120QPM

## 接口信息

| 字段 | 值 |
| --- | --- |
| targetPath | https://ad.e.kuaishou.com/rest/openapi/gw/agent/v1/advertiser/create |
| httpMethod | POST |
| httpContentType | JSON |

## 请求参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| sms_code | String |  | 验证码 | 验证码 | 验证码 |
| corporation_name | String | 是 | 测试企业 | 公司名称 | 公司名称 |
| advertiser_user_id | Long | 是 | 1 | 快手id | 快手id |
| agent_id | Long | 是 | 309 | 代理商ID | 代理商ID |
| uc_type | String |  | DSP_MAPI | 账户类型 | DSP：DSP-MAPI；CID：ESP_CID |
| account_name | String |  | 账户名称 | 账户名称 | 账户名称 |

## 返回参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| data | AccountIdResp |  | result | result | result |
| - id | Long |  | 1 | 广告主id | 广告主id |
| message | String |  | success | 响应msg | 响应msg |
| code | Integer |  | 1 | 响应code | 响应code |
