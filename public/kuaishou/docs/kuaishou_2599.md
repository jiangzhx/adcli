---
title: 获取快手号授权列表
platform: kuaishou
source_url: https://developers.e.kuaishou.com/docs?docType=DSP&documentId=2599&menuId=3323
doc_id: kuaishou_2599
source_id: kuaishou_2599
---
# 获取快手号授权列表

## 文档元数据

| 字段 | 值 |
| --- | --- |
| documentId | 2599 |
| documentType | 2 |
| version | 0.0.1 |
| bizName | 效果广告 |
| createTime | 2024-07-04T11:21:25.233Z |

## 接口信息

| 字段 | 值 |
| --- | --- |
| targetPath | https://ad.e.kuaishou.com/rest/openapi/gw/dsp/v1/native/auth/list |
| httpMethod | POST |
| httpContentType | JSON |

## 请求参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| advertiser_id | Long | 是 |  | 广告主id |  |
| page_info | PageInfoSnake | 是 |  | 分页信息 |  |
| - current_page | Long | 是 | 1 | 当前页面值 |  |
| - page_size | Long |  | 10 | 页面大小 |  |
| kol_user_id | Long |  |  | 快手号用户id查询 |  |
| user_name | String |  |  | 快手号名称查询 |  |
| auth_status | Integer[] |  |  | 授权状态查询 | 授权状态查询 枚举含义如下：1-新建待达人确认 2-达人已确认协议，未到授权开始时间 3-授权生效中 4-达人拒绝授权 5-授权超时未确认 6-授权过期失效 7-授权终止 8-授权已删除 |
| kol_user_type | Integer[] | 是 |  | 达人类型 | 1普通快手号，2蓝V服务号 3聚星作品达人 5聚星直播达人 不传递该字段时默认查蓝V服务号 |

## 返回参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| code | Integer |  |  | 状态码 |  |
| message | String |  |  | 返回信息 |  |
| data | KwaiUserAuthorizeInfoViewSnake |  |  | 返回数据 |  |
| - data | KwaiUserAuthorizeInfoSnake[] |  | [] | 授权列表 |  |
| - user_id | Long |  |  | 用户id |  |
| - kol_status | Integer |  |  | 快手号授权状态1 待达人确认2 达人已确认3 授权生效中4 达人拒绝授权5 达人超时未确认6 授权过期7 授权终止 |  |
| - valid_start_time | Long |  | 0 | 授权开始时间，不限时间时为0 |  |
| - valid_end_time | Long |  | 0 | 授权结束时间，不限时间时为0 |  |
| - user_info | UserProfileViewSnake |  |  | 用户信息 |  |
| - user_id | Long |  |  | 用户id |  |
| - user_name | String |  |  | 用户名称 |  |
| - user_sex | String |  | M | 用户性别，男性M，女性F |  |
| - head_url | String |  |  | 用户头像 |  |
| - kol_user_type | Integer |  |  | 达人用户类型，2服务号达人，3聚星达人 |  |
| - valid_type | Integer |  | 1 | 授权类型，1固定时间，2不限时间 |  |
| - kol_user_type | Integer |  | 2 | 快手号用户类型，1普通快手号达人 2蓝v服务号，3聚星达人 |  |
| - auth_id | Long |  | 123 | 授权记录ID，用于进行共享授权 |  |
| - component_status | Integer |  |  | 组件授权状态 0待审核 1审核通过 2审核拒绝 3未授权 4已终止 |  |
| - page_info | PageInfoSnake |  |  | 分页信息 |  |
| - current_page | Long |  | 1 | 当前页面值 |  |
| - page_size | Long |  | 10 | 页面大小 |  |
| - total_count | Long |  | 2 | 总共数目 |  |
