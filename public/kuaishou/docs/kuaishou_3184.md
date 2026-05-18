---
title: 增量探索配置列表
platform: kuaishou
source_url: https://developers.e.kuaishou.com/docs?docType=DSP&documentId=3184&menuId=3943
doc_id: kuaishou_3184
source_id: kuaishou_3184
---
# 增量探索配置列表

## 文档元数据

| 字段 | 值 |
| --- | --- |
| documentId | 3184 |
| documentType | 2 |
| version | 0.0.0 |
| bizName | 效果广告 |
| createTime | 2025-02-17T13:51:41.757Z |

## 概述

获取advertiser_id下的增量探索配置列表。 注意： 报表字段除ad_dsp_cost、conversion_cost、ad_show、ad_item_click、conversion_cnt为全行业可见外，其他字段目前仅二级行业为付费短剧可见。

## 接口信息

| 字段 | 值 |
| --- | --- |
| targetPath | https://ad.e.kuaishou.com/rest/openapi/gw/dsp/account/incExplore/list |
| httpMethod | POST |
| httpContentType | JSON |

## 请求参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| advertiser_id | Long | 是 |  | 账号id |  |

## 请求样例

### 请求样例 (javascript)

```
{
  "advertiser_id": 123456
}
```

## 返回参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| error_msg | String |  |  | 具体报错信息 |  |
| message | String |  |  | 状态码描述 |  |
| code | Integer |  |  | 状态码 |  |
| data | GwIncExploreDetailView[] |  |  | 增量探索配置列表 注意： 报表字段除ad_dsp_cost、conversion_cost、ad_show、ad_item_click、conversion_cnt为全行业可见外，其他字段目前仅二级行业为付费短剧可见。 |  |
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

### 响应样例 (javascript)

```
{
    "code": 0,
    "data": [
        {
            "ad_dsp_cost": 392.297,
            "conversion_cnt": 35,
            "explore_budget": 500,
            "create_time": 1739262052887,
            "mini_game_iaa_roi": 0,
            "inc_explore_time_type": 2,
            "ad_show": 22454,
            "key_action": 0,
            "mini_game_iaa_purchase_amount": 0,
            "first_start_time": 1739721806134,
            "roi": 1.455,
            "ltv": 570.9400024414062,
            "auto_mode": 1,
            "ad_item_click": 255,
            "ocpx_action_type_name": "首日ROI（24h）",
            "deep_conversion_type": 0,
            "key_action_cost": 0,
            "deep_conversion_type_name": "",
            "conversion_cost": 11.208,
            "ocpx_action_type": 191,
            "status": 2
        }
    ],
    "message": "OK",
    "request_id": "ENKAgICg1OWcChjfBSC_sO6e0TIorrqsjws="
}
```
