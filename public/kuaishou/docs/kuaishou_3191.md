---
title: 删除增量探索配置
platform: kuaishou
source_url: https://developers.e.kuaishou.com/docs?docType=DSP&documentId=3191&menuId=3947
doc_id: kuaishou_3191
source_id: kuaishou_3191
---
# 删除增量探索配置

## 文档元数据

| 字段 | 值 |
| --- | --- |
| documentId | 3191 |
| documentType | 2 |
| version | 0.0.0 |
| bizName | 效果广告 |
| createTime | 2025-02-17T13:51:18.719Z |

## 概述

注意 1.删除对象是 ocpx_action_type X deep_conversion_type

## 接口信息

| 字段 | 值 |
| --- | --- |
| targetPath | https://ad.e.kuaishou.com/rest/openapi/gw/dsp/account/incExplore/delete |
| httpMethod | POST |
| httpContentType | JSON |

## 请求参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| deep_conversion_type | Integer | 是 |  | 深度转化目标 |  |
| ocpx_action_type | Integer | 是 |  | 浅度转化目标 |  |
| advertiser_id | Long | 是 |  | 账号id |  |

## 请求样例

### 请求样例 (javascript)

```
{
  "advertiser_id": 123456,
  "ocpx_action_type": 53,
  "deep_conversion_type": 4
}
```

## 返回参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| error_msg | String |  |  | 具体报错信息 |  |
| message | String |  |  | 状态码描述 |  |
| code | Integer |  |  | 状态码 |  |
| data | GwIncExploreDetailView |  |  | 请补充描述详情 |  |
| - ocpx_action_type | Integer |  | 944 | 转化目标类型 |  |
| - ocpx_action_type_name | String |  | 磁力金牛全店ROI | 转化目标类型名称 |  |
| - deep_conversion_type | Integer |  | 0 | 深度转化目标类型 |  |
| - deep_conversion_type_name | String |  |  | 深度转化目标类型名称 |  |
| - auto_mode | Integer |  | 2 | 是否开启uax: 1-开启 2-未开启 |  |
| - explore_budget | Double |  | 1000.0 | 探索预算，单位（元） |  |
| - status | Integer |  | 3 | 探索状态 1-探索未开始 2-探索中 3-探索结束 4-探索暂停 |  |
| - inc_explore_time_type | Integer |  | 3 | 增量时间类型 1-长期生效 2-当日生效 3-立即生效6小时 |  |
| - first_start_time | Long |  | 1735290653320 | 第一次开始时间 |  |
| - create_time | Long |  | 1735290653421 | 创建时间 |  |
| - ad_dsp_cost | Double |  | 0.0 | 消耗 |  |
| - conversion_cost | Double |  | 0.0 | 转化成本 |  |
| - ad_show | Long |  | 0 | 曝光量 |  |
| - ad_item_click | Long |  | 0 | 点击量 |  |
| - conversion_cnt | Long |  | 0 | 转化数 |  |
| - ltv | Double |  | 0.0 | 付费金额,单位元 |  |
| - roi | Double |  | 0.0 | ROI |  |
| - mini_game_iaa_purchase_amount | Double |  | 0.0 | IAA广告变现LTV,单位元 |  |
| - mini_game_iaa_roi | Double |  | 0.0 | IAA广告变现ROI |  |
| - key_action | Long |  | 0 | 关键行为数 |  |
| - key_action_cost | Double |  | 0.0 | 关键行为成本 |  |

## 返回样例

### 返回样例 (javascript)

```
{
  "code": 0,
  "message": "",
  "request_id": "ENKAgICg1OWcChioBiCC2peh0TIo2bzoSw=="
}
```
