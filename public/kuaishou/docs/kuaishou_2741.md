---
title: 小铃铛激活接口
platform: kuaishou
source_url: https://developers.e.kuaishou.com/docs?docType=DSP&documentId=2741&menuId=3474
doc_id: kuaishou_2741
source_id: kuaishou_2741
---
# 小铃铛激活接口

## 文档元数据

| 字段 | 值 |
| --- | --- |
| documentId | 2741 |
| documentType | 2 |
| version | 0.0.1 |
| bizName | 效果广告 |
| createTime | 2024-07-04T12:18:40.046Z |

## 接口信息

| 字段 | 值 |
| --- | --- |
| targetPath | https://ad.e.kuaishou.com/rest/openapi/gw/dsp/jingleBell/active |
| httpMethod | POST |
| httpContentType | JSON |

## 请求参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| advertiser_id | Long | 是 |  | advertiser_id |  |
| jingle_bell_id | Long | 是 |  | 小铃铛ID |  |
| live_user_id | Long | 是 |  | 主播ID |  |
| switch_active_status_to | Integer | 是 |  | 状态变更1激活 2非激活 |  |

## 请求样例

### 示例标题 (javascript)

```
{
  "advertiser_id": 900015364,
  "live_user_id": 2190171067,
  "jingle_bell_id": "876230739624482",
  "switch_active_status_to": 1
}
```

## 返回参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| code | Integer |  |  | 状态码 |  |
| message | String |  |  | 返回信息 |  |
| data | Data |  |  | 返回结果 |  |
| - total_count | Long |  | 0 | 总数 |  |
| - details | Long[] |  | 1 | 详情 |  |

## 返回样例

### 示例标题 (jsonc)

```
{
  "code": 401000,
  "data": {},
  "message": "禁止操作未审核通过的主播",
  "request_id": "ELqAgIDg8piOrAEY6gggxqGqpMMxKPLs3KUG"
}
```
