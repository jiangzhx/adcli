---
title: 探索工具关键报表数据
platform: kuaishou
source_url: https://developers.e.kuaishou.com/docs?docType=DSP&documentId=2627&menuId=3351
doc_id: kuaishou_2627
source_id: kuaishou_2627
---
# 探索工具关键报表数据

## 文档元数据

| 字段 | 值 |
| --- | --- |
| documentId | 2627 |
| documentType | 2 |
| version | 0.0.1 |
| bizName | 效果广告 |
| createTime | 2024-07-04T12:16:26.565Z |

## 接口信息

| 字段 | 值 |
| --- | --- |
| targetPath | https://ad.e.kuaishou.com/rest/openapi/gw/dsp/v1/unit/explore/report/detail |
| httpMethod | POST |
| httpContentType | JSON |

## 请求参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| advertiser_id | Long | 是 | 1 | 广告主id |  |
| unit_id | Long | 是 | 1 | 广告组id |  |
| param | GatewayExploreReportParam414 | 是 |  | 请求参数 |  |
| - id | Long | 是 | 1 | 报表记录主键id |  |
| - explore_type | Integer | 是 | 1 | 探索类型，1-加速探索，2-一键复苏，3-辅助探索 |  |
| - explore_start_time | Long | 是 | 1636450616000 | 开始时间 |  |
| - explore_end_time | Long | 是 | 1636450616000 | 结束时间 |  |

## 请求样例

### 请求样例 (jsonc)

```
{
    "advertiser_id": 20000681,
    "unit_id": 3776211,
    "param": {
        "id": 89456749,
        "explore_type": 2,
        "explore_start_time": 1677490338371,
        "explore_end_time": 1677490351193
    }
}
```

## 返回参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| code | Integer |  | 1 | 状态码 |  |
| message | String |  | succ | 返回信息 |  |
| data | GatewayExploreReportDetail550693 |  |  | 返回结果 |  |
| - explore_budget | Long |  | 100 | 探索预算 | 单位：厘 |
| - total_charge | Long |  | 100 | 消耗 | 单位：厘 |
| - click | Long |  | 100 | 素材曝光数 |  |
| - actionbar_click | Long |  | 1 | 行为数 |  |
| - action_ratio | Double |  | 0.32 | 素材点击率 |  |

## 返回样例

### 返回样例 (jsonc)

```
{
    "code": 0,
    "data": {
        "explore_budget": 10000,
        "total_charge": 10000,
        "click": 1200,
        "actionbar_click": 235,
        "action_ratio": 0.32
    },
    "message": "OK",
    "request_id": "a71c6d22c6354b19ae5f6bd7377bfa69"
}
```
