---
title: 获取可用的转化目标
platform: kuaishou
source_url: https://developers.e.kuaishou.com/docs?docType=DSP&documentId=2671&menuId=3403
doc_id: kuaishou_2671
source_id: kuaishou_2671
---
# 获取可用的转化目标

## 文档元数据

| 字段 | 值 |
| --- | --- |
| documentId | 2671 |
| documentType | 2 |
| version | 0.0.2 |
| bizName | 效果广告 |
| createTime | 2026-04-15T03:43:28.235Z |

## 接口信息

| 字段 | 值 |
| --- | --- |
| targetPath | https://ad.e.kuaishou.com/rest/openapi/v1/tool/convert/list |
| httpMethod | POST |
| httpContentType | JSON |

## 请求参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| advertiser_id | Long | 是 | 20000800 | 广告主id | 在获取 access_token 的时候返回 |
| type | Integer | 是 | 1 | 转化目标类型 | 1: JS 布玛; 2: Xpath; 3: 应用-SDK; 7: 应用-API; 17: 微信小程序; 20: API线索收集 |
| page | Integer |  | 1 | 页面值 |  |
| page_size | Integer |  | 20 | 页面大小 |  |
| convert_ids | Long[] |  | [11122] | 转化目标id |  |

## 返回参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| code | Integer |  |  | 返回码 |  |
| message | String |  | - | 返回信息 |  |
| data | ConvertData |  |  | 返回数据 |  |
| - total_count | Long |  | 174 | 结果总数 |  |

## 原始内容

```
获取可用的转化目标 /rest/openapi/v1/tool/convert/list advertiser_id Long 广告主id type Integer 转化目标类型 page Integer 页面值 page_size Integer 页面大小 convert_ids Long[] 转化目标id code Integer 返回码 message String 返回信息 data ConvertData 返回数据 total_count Long 结果总数
```
