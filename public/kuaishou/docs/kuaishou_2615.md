---
title: 获取罗盘绑定广告主列表
platform: kuaishou
source_url: https://developers.e.kuaishou.com/docs?docType=DSP&documentId=2615&menuId=3339
doc_id: kuaishou_2615
source_id: kuaishou_2615
---
# 获取罗盘绑定广告主列表

## 文档元数据

| 字段 | 值 |
| --- | --- |
| documentId | 2615 |
| documentType | 2 |
| version | 0.0.2 |
| bizName | UC |
| createTime | 2025-09-26T08:42:18.313Z |

## 接口信息

| 字段 | 值 |
| --- | --- |
| targetPath | https://ad.e.kuaishou.com/rest/openapi/gw/uc/v1/advertisers |
| httpMethod | POST |
| httpContentType | JSON |

## 请求参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| advertiser_id | Long | 是 |  | 罗盘账户的「快手 id」，只能传递授权时使用的快手 id |  |

## 返回参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| code | Integer |  |  | code |  |
| message | String |  |  | message |  |
| data | MAPIAccountInfoData |  |  | 广告主信息 |  |
| - details | MAPIAccountInfo[] |  |  | 广告主 list |  |
| - advertiser_id | Long |  |  | 广告主ID |  |
| - advertiser_name | String |  |  | 广告主名称 |  |
| - corporation_name | String |  |  | 公司名称 |  |
| - app_id | Integer |  |  | 账户所属业务线 |  |
| - create_source | Integer |  |  | 账户创建来源 |  |
| - review_status | Integer |  |  | 账户审核状态 |  |
| - create_time | Integer |  |  | 账户创建时间 |  |
| - user_id | Long |  | - | 快手ID | - |
| - product_name | String |  | - | 产品名 | - |
| - agent_id | Long |  | - | 代理商ID | - |
| - account_type | Integer |  | - | 投放类型 | - |
| - frozen_status | Integer |  | - | 冻结状态1正常 2冻结 | - |
| - frozen_reason | String |  | - | 冻结原因 | - |
| - auth_status | Integer |  | - | 认证状态 | - |
| - auth_detail | String |  | - | 认证详情 | - |
| - uid_banned | Boolean |  | - | 快手ID是否被封禁 | - |
| - review_detail | String |  | - | 审核详情 | - |
