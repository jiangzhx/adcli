---
title: 修改广告组预算
platform: kuaishou
source_url: https://developers.e.kuaishou.com/docs?docType=DSP&documentId=2573&menuId=3297
doc_id: kuaishou_2573
source_id: kuaishou_2573
---
# 修改广告组预算

## 文档元数据

| 字段 | 值 |
| --- | --- |
| documentId | 2573 |
| documentType | 2 |
| version | 0.0.1 |
| bizName | 效果广告 |
| createTime | 2024-07-22T15:46:46.538Z |

## 接口信息

| 字段 | 值 |
| --- | --- |
| targetPath | https://ad.e.kuaishou.com/rest/openapi/v1/ad_unit/update/day_budget |
| httpMethod | POST |
| httpContentType | JSON |

## 请求参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| advertiser_id | Long | 是 |  | 广告主id |  |
| day_budget | Long | 是 |  | 单日预算金额 | 广告组单日预算金额，单位：厘，指定 0 表示预算不限，默认为 0；不小于 100 元，不超过 100000000 元，仅支持输入数字；修改预算不得低于该广告组当日花费的 120% 和修改前预算的较小者. |
| day_budget_schedule | Integer[] | 是 |  | 分日预算 | 单位：厘，指定 0 表示预算不限，默认为 0；每天不小于 100 元，不超过 100000000 元，仅支持输入数字；修改预算不得低于当日广告组最高花费的1.2倍和修改前预算的较小者，与 day_budget 不能同时传，组预算不能低于组出价，优先级高于day_budget |
| unit_id | Long | 是 |  | 广告组 ID |  |
| unit_ids | Integer[] |  |  | 请补充描述详情 |  |

## 请求样例

### 请求样例 (shell)

```
curl -X POST \
  -H 'Access-Token: 303dca831b30c9c21' \
  -H 'Content-Type: application/json' \
  -d '{
    "advertiser_id":20000800,
    "unit_id":2960079,
    "day_budget":1213312
}' -L https://ad.e.kuaishou.com/rest/openapi/v1/ad_unit/update/day_budget
```

## 返回参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| data | BatchIdResp532Snake |  |  | 创编计划、广告组、创意返回id参数 |  |
| - errors | ErrorMsg574Snake457[] |  |  | 请补充描述详情 |  |
| - error_msg | String |  |  | 请补充描述详情 |  |
| - id | Long |  |  | 请补充描述详情 |  |
| - unit_ids | Integer[] |  |  | 请补充描述详情 |  |
| message | String |  |  | 返回信息 |  |
| code | Integer |  |  | 返回码 |  |

## 返回样例

### 返回样例 (jsonc)

```
{
    "code": 0,
    "message": "OK",
    "data": {}
}
```
