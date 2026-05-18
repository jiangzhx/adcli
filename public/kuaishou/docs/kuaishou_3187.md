---
title: 添加增量探索配置
platform: kuaishou
source_url: https://developers.e.kuaishou.com/docs?docType=DSP&documentId=3187&menuId=3942
doc_id: kuaishou_3187
source_id: kuaishou_3187
---
# 添加增量探索配置

## 文档元数据

| 字段 | 值 |
| --- | --- |
| documentId | 3187 |
| documentType | 2 |
| version | 0.0.0 |
| bizName | 效果广告 |
| createTime | 2025-02-17T13:51:27.297Z |

## 概述

注意： 1.同一种转化目标（ocpx_action_type X deep_conversion_type）开启uax和未开启uax的inc_explore_time_type必须相同且first_start_time必须相同。 2.历史上有消耗的转化目标从/rest/openapi/gw/dsp/account/incExplore/ocpxTypes接口返回。

## 接口信息

| 字段 | 值 |
| --- | --- |
| targetPath | https://ad.e.kuaishou.com/rest/openapi/gw/dsp/account/incExplore/add |
| httpMethod | POST |
| httpContentType | JSON |

## 请求参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| inc_explore_info | GwIncExploreDetailDto[] | 是 |  | 增量探索配置列表 |  |
| - ocpx_action_type_name | String |  | 激活 | 转化目标名称 |  |
| - ocpx_action_type | Long |  | 180 | 转化目标类型 |  |
| - deep_conversion_type_name | String |  |  | 深度转化目标名称 |  |
| - deep_conversion_type | Long |  | 0 | 深度转化目标类型 |  |
| - auto_mode | Integer |  | 1 | 是否开启uax: 1-开启 2-未开启 |  |
| - explore_budget | Double |  | 300 | 探索预算，单位（元） |  |
| - first_start_time | Long |  | 1736862595671 | 第一次开始时间（长期生效会多次开启） |  |
| - inc_explore_time_type | Integer |  | 1 | 增量时间类型 1-长期生效 2-当日生效 3-立即生效6小时 |  |
| advertiser_id | Long | 是 |  | 账号id |  |

## 请求样例

### 请求样例 (javascript)

```
{
  "advertiser_id": 123456,
  "inc_explore_info": [
    {
      "ocpx_action_type_name": "表单转化",
      "ocpx_action_type": 53,
      "deep_conversion_type": 3,
      "deep_conversion_type_name": "付费",
      "auto_mode": 2,
      "explore_budget": "500",
      "inc_explore_time_type": 3,
      "first_start_time": 1739432679938
    },
    {
      "ocpx_action_type_name": "表单转化",
      "ocpx_action_type": 53,
      "deep_conversion_type": 3,
      "deep_conversion_type_name": "付费",
      "auto_mode": 1,
      "explore_budget": "500",
      "inc_explore_time_type": 3,
      "first_start_time": 1739432679938
    }
  ]
}
```

## 返回参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| error_msg | String |  |  | 具体报错信息 |  |
| message | String |  |  | 状态码描述 |  |
| code | Integer |  |  | 状态码 |  |
| data | GwIncExploreDetailDto |  |  | 请补充描述详情 |  |
| - ocpx_action_type_name | String |  | 激活 | 转化目标名称 |  |
| - ocpx_action_type | Long |  | 180 | 转化目标类型 |  |
| - deep_conversion_type_name | String |  |  | 深度转化目标名称 |  |
| - deep_conversion_type | Long |  | 0 | 深度转化目标类型 |  |
| - auto_mode | Integer |  | 1 | 是否开启uax: 1-开启 2-未开启 |  |
| - explore_budget | Double |  | 300 | 探索预算，单位（元） |  |
| - first_start_time | Long |  | 1736862595671 | 第一次开始时间（长期生效会多次开启） |  |
| - inc_explore_time_type | Integer |  | 1 | 增量时间类型 1-长期生效 2-当日生效 3-立即生效6小时 |  |

## 返回样例

### 返回样例 (javascript)

```
{
  "code": 0,
  "message": "OK",
  "request_id": "ENKAgICg1OWcChjzCyC38Leg0TIotMm_jQY="
}
```
