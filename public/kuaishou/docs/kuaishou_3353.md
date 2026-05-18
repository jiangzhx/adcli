---
title: callback合法性校验
platform: kuaishou
source_url: https://developers.e.kuaishou.com/docs?docType=DSP&documentId=3353&menuId=4151
doc_id: kuaishou_3353
source_id: kuaishou_3353
---
# callback合法性校验

## 文档元数据

| 字段 | 值 |
| --- | --- |
| documentId | 3353 |
| documentType | 2 |
| version | 0.0.0 |
| bizName | 魔力建站 |
| createTime | 2026-04-07T07:02:21.815Z |

## 概述

校验callback与所传账户id、请求id是否匹配。 平台接入流程：https://developers.e.kuaishou.com/docs?docType=DSP&amp;documentId=2539&amp;menuId=3765

## 接口信息

| 字段 | 值 |
| --- | --- |
| targetPath | https://ad.e.kuaishou.com/rest/openapi/gw/magicsite/v1/lp/validateCallbackWithAccount |
| httpMethod | POST |
| httpContentType | JSON |

## Header 参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| access-token | String |  |  | access-token,从开放平台获取到的token |  |

## 请求参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| llsid | Long | 是 |  | 客户提供 | 请求ID |
| account_id | Long | 是 |  | 客户提供 | 快手广告平台账号ID |
| callback | String | 是 |  | 客户提供 | 广告参数 |
| app_id | String | 是 |  | 快手分配 | 应用ID ，gateway平台申请的应用id |

## 返回参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| data | CallbackValidResult |  | true | 校验结果 | true为校验通过 |
| - if_valid | Boolean |  |  | 校验结果 |  |
| message | String |  |  | 状态描述 |  |
| code | Integer |  | 1 | 状态码 | code=1即为请求成功 |
