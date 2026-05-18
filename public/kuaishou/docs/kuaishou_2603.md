---
title: 共享授权-获取已共享授权授权记录
platform: kuaishou
source_url: https://developers.e.kuaishou.com/docs?docType=DSP&documentId=2603&menuId=3327
doc_id: kuaishou_2603
source_id: kuaishou_2603
---
# 共享授权-获取已共享授权授权记录

## 文档元数据

| 字段 | 值 |
| --- | --- |
| documentId | 2603 |
| documentType | 2 |
| version | 0.0.1 |
| bizName | 效果广告 |
| createTime | 2024-07-04T11:25:36.928Z |

## 接口信息

| 字段 | 值 |
| --- | --- |
| targetPath | https://ad.e.kuaishou.com/rest/openapi/gw/dsp/authorization/shareAccount/authorizeInfo |
| httpMethod | POST |
| httpContentType | JSON |

## 请求参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| kol_user_id | Long | 是 |  | 达人ID |  |
| advertiser_id | Long | 是 |  | advertiser_id |  |

## 返回参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| code | Integer |  |  | 查询结果 0查询失败。1查询成功 |  |
| message | String |  | "OK" | 状态信息 |  |
| data | KwaiUserAuthorizeInfoSnake425[] |  |  | 授权记录信息 |  |
| - user_id | Long |  |  | 用户id |  |
| - kol_status | Integer |  |  | 快手号授权状态1 待达人确认2 达人已确认3 授权生效中4 达人拒绝授权5 达人超时未确认6 授权过期7 授权终止 |  |
| - valid_start_time | Long |  | 0 | 授权开始时间，不限时间时为0 |  |
| - valid_end_time | Long |  | 0 | 授权结束时间，不限时间时为0 |  |
| - user_info | UserProfileView |  |  | 用户信息 |  |
| - valid_type | Integer |  |  | 授权类型，1固定时间，2不限时间 |  |
| - kol_user_type | Integer |  | 1 | 达人类型 1普通快手号达人 2 蓝V服务号 |  |
| - auth_id | Long |  | 123 | 共享授权记录ID |  |
| - account_id | Long |  |  | 账户ID |  |
| - component_status | Integer |  |  | 组件授权状态 0待审核 1审核通过 2审核拒绝 3未授权 4已终止 |  |
