---
title: 共享授权接口
platform: kuaishou
source_url: https://developers.e.kuaishou.com/docs?docType=DSP&documentId=2601&menuId=3325
doc_id: kuaishou_2601
source_id: kuaishou_2601
---
# 共享授权接口

## 文档元数据

| 字段 | 值 |
| --- | --- |
| documentId | 2601 |
| documentType | 2 |
| version | 0.0.2 |
| bizName | 效果广告 |
| createTime | 2025-06-17T06:04:04.042Z |

## 接口信息

| 字段 | 值 |
| --- | --- |
| targetPath | https://ad.e.kuaishou.com/rest/openapi/gw/dsp/authorization/shard |
| httpMethod | POST |
| httpContentType | JSON |

## 请求参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| advertiser_id | Long | 是 |  | 广告主id |  |
| auth_id | Long | 是 |  | 要共享的授权ID |  |
| shard_authorize_scope | Integer | 是 |  | 共享授权范围 0 共享快手号授权 1共享快手号授权+组件授权 |  |
| shard_account_id | String | 是 | 12,34,56 | 要共享给账户，accountId用英文逗号分隔 |  |
| shard_user_type | Integer |  | 1 | 共享授权类型。1：同主体同代理商账户；2：同主体下账户；7：同代理下账户。 |  |

## 返回参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| code | Integer |  |  | 保存共享授权任务结果 0失败 1成功 |  |
| message | String |  |  | 失败原因 |  |
| data | KolShardAuthId |  |  | 共享授权任务ID，获取授权结果使用 |  |
| - auth_id | Long |  |  | 共享授权记录ID |  |

## 原始内容

```
共享授权接口 /rest/openapi/gw/dsp/authorization/shard advertiser_id Long 广告主id auth_id Long 要共享的授权ID shard_authorize_scope Integer 共享授权范围 0 共享快手号授权 1共享快手号授权+组件授权 shard_account_id String 要共享给账户，accountId用英文逗号分隔 shard_user_type Integer 共享授权类型 code Integer 保存共享授权任务结果 0失败 1成功 message String 失败原因 data KolShardAuthId 共享授权任务ID，获取授权结果使用 auth_id Long 共享授权记录ID
```
