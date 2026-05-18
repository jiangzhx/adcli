---
title: 代理商-创建广告主发送验证码
platform: kuaishou
source_url: https://developers.e.kuaishou.com/docs?docType=DSP&documentId=3165&menuId=3916
doc_id: kuaishou_3165
source_id: kuaishou_3165
---
# 代理商-创建广告主发送验证码

## 文档元数据

| 字段 | 值 |
| --- | --- |
| documentId | 3165 |
| documentType | 2 |
| version | 0.0.1 |
| bizName | 代理商 |
| createTime | 2024-11-01T09:23:09.336Z |

## 概述

创建广告主前，先调用接口发送短信验证码 返回true-会下发短信验证码，需要在创建广告主接口提供 返回false-不会下发短信验证码，在创建广告主时无需填写验证码 检验通过后，同一个agentId+userId当天无需重复检验

## 接口信息

| 字段 | 值 |
| --- | --- |
| targetPath | https://ad.e.kuaishou.com/rest/openapi/gw/agent/v1/sms_code/send |
| httpMethod | POST |
| httpContentType | JSON |

## 请求参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| advertiser_user_id | Long | 是 | 1 | 快手id | 快手id |
| agent_id | Long | 是 | 309 | 代理商ID | 代理商ID |

## 返回参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| data | AdAgentSendSmsRespSnake |  | result | result | result |
| - check_sms_code | Boolean |  | true | 是否需要校验验证码 | 是否需要校验验证码 |
| - result | Boolean |  | true | 是否成功 | 是否成功 |
| message | String |  | success | 响应msg | 响应msg |
| code | Integer |  | 1 | 响应code | 响应code |
