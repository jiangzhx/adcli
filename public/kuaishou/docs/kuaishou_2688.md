---
title: 查询同步失败列表
platform: kuaishou
source_url: https://developers.e.kuaishou.com/docs?docType=DSP&documentId=2688&menuId=3421
doc_id: kuaishou_2688
source_id: kuaishou_2688
---
# 查询同步失败列表

## 文档元数据

| 字段 | 值 |
| --- | --- |
| documentId | 2688 |
| documentType | 2 |
| version | 0.0.1 |
| bizName | 效果广告 |
| createTime | 2024-07-04T12:11:49.862Z |

## 接口信息

| 字段 | 值 |
| --- | --- |
| targetPath | https://ad.e.kuaishou.com/rest/openapi/gw/dsp/target/template/sync_history |
| httpMethod | POST |
| httpContentType | JSON |

## 请求参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| task_id | Long |  |  | 任务ID |  |
| template_id | Long |  |  | 模板ID |  |
| current_page | Integer |  |  | 当前页码 |  |
| page_size | Integer |  |  | 每页大小 |  |

## 请求样例

### 请求样例 (jsonc)

```
{
    "advertiser_id": 9000153264,
    "task_id": 2031290,
    "template_id": 31022,
    "current_page": 1,
    "page_size": 2
}
```

## 返回参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| data | PageDataListTemplateSyncFailedUnitResp896Snake |  |  | 返回的数据json |  |
| - current_page | Integer |  |  | 当前页码 |  |
| - details | TemplateSyncFailedUnitResp656Snake[] |  |  | 数据详情 |  |
| - auto_adjust | Integer |  |  | 计划是否开启自动调控 |  |
| - auto_build | Integer |  |  | 计划是否开启自动基建 |  |
| - auto_manage | Integer |  |  | 计划是否开启智能投放 |  |
| - campaign_id | Long |  |  | 计划ID |  |
| - campaign_name | String |  |  | 计划名称 |  |
| - failed_msg | String |  |  | 同步失败详情信息 |  |
| - template_id | Long |  |  | 模板ID |  |
| - unit_id | Long |  |  | 广告组ID |  |
| - unit_name | String |  |  | 广告组名称 |  |
| - unit_view_status | Integer |  |  | 广告组状态 | -1：不限，1：计划已暂停，3：计划超预算，6：余额不足，，11：审核中，12：审核未通过，14：已结束，15：已暂停，17：组超预算，19：未达投放时间，20：有效，22：不在投放时段 |
| - unit_view_status_reason | String |  |  | 广告组状态描述 |  |
| - page_size | Integer |  |  | 每页大小 |  |
| - total_count | Long |  |  | 此次任务ID对应同步的广告组数 |  |
| message | String |  |  | 错误详情 |  |
| code | Integer |  |  | 返回码 |  |

## 返回样例

### 返回样例 (jsonc)

```
{
    "code": 0,
    "data": {
        "total_count": 14,
        "details": [
            {
                "auto_build": 0,
                "unit_name": "加白+获取电商下单",
                "campaign_name": "获取电商下单_1114_11:26",
                "auto_manage": 0,
                "auto_adjust": 1,
                "unit_view_status": 11,
                "failed_msg": "开启智能定向->不可设置快手网红",
                "template_id": 3102,
                "unit_id": 1719056,
                "campaign_id": 426631,
                "unit_view_status_reason": "广告组审核中"
            },
            {
                "auto_build": 0,
                "unit_name": "新建广告组_20220718_15:05",
                "campaign_name": "推广快手小程序-上下滑+联盟优选-程序化-10s",
                "auto_manage": 0,
                "auto_adjust": 0,
                "unit_view_status": 14,
                "failed_msg": "开启智能定向->不可设置定向行为兴趣",
                "template_id": 3102,
                "unit_id": 831861,
                "campaign_id": 216055,
                "unit_view_status_reason": "广告组投放到期下线"
            }
        ],
        "current_page": 1,
        "page_size": 2
    },
    "message": "OK",
    "request_id": "EMyAgICw0JiOrAEY3wIgiYih8OYwKM2_hpcC"
}
```
