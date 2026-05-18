---
title: 获取原生快手号列表接口
platform: kuaishou
source_url: https://developers.e.kuaishou.com/docs?docType=DSP&documentId=2605&menuId=3329
doc_id: kuaishou_2605
source_id: kuaishou_2605
---
# 获取原生快手号列表接口

## 文档元数据

| 字段 | 值 |
| --- | --- |
| documentId | 2605 |
| documentType | 2 |
| version | 0.0.1 |
| bizName | 效果广告 |
| createTime | 2024-07-04T11:26:06.988Z |

## 接口信息

| 字段 | 值 |
| --- | --- |
| targetPath | https://ad.e.kuaishou.com/rest/openapi/gw/dsp/v1/native/user/list |
| httpMethod | POST |
| httpContentType | JSON |

## 请求参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| advertiser_id | Long | 是 |  | 广告主id |  |
| kol_user_type | Integer[] | 是 | [1,2] | 达人原生类型，1 代表普通快手号大达人 2服务号原生达人，3聚星原生达人 |  |
| count | Integer |  | 100 | 游标查询数量 |  |
| cursor | String |  | "12312312312" | 游标 |  |

## 返回参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| code | Integer |  | - | 请求状态 |  |
| message | String |  | - | 请求结果显示 |  |
| data | UserProfileViewCursorSnakeList |  | - | 用户信息 |  |
| - user_list | UserProfileViewSnake[] |  |  | - |  |
| - user_id | Long |  |  | 用户id |  |
| - user_name | String |  |  | 用户名称 |  |
| - user_sex | String |  | M | 用户性别，男性M，女性F |  |
| - head_url | String |  |  | 用户头像 |  |
| - kol_user_type | Integer |  |  | 达人用户类型，2服务号达人，3聚星达人 |  |
| - suggestion | String |  |  | 账号建议 |  |
| - cursor | String |  | - | 下次查询游标，如果后面无结果则返回 no_more; 如果后续有结果需用此返回填到请求参数cursor上 |  |
