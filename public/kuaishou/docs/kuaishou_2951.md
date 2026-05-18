---
title: 修改账户预算
platform: kuaishou
source_url: https://developers.e.kuaishou.com/docs?docType=DSP&documentId=2951&menuId=3702
doc_id: kuaishou_2951
source_id: kuaishou_2951
---
# 修改账户预算

## 文档元数据

| 字段 | 值 |
| --- | --- |
| documentId | 2951 |
| documentType | 2 |
| version | 0.0.2 |
| bizName | 效果广告 |
| createTime | 2024-12-24T14:27:40.495Z |

## 接口信息

| 字段 | 值 |
| --- | --- |
| targetPath | https://ad.e.kuaishou.com/rest/openapi/v1/advertiser/update/budget |
| httpMethod | POST |
| httpContentType | JSON |

## 请求参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| advertiser_id | Long | 是 |  | 广告主 ID | 在获取 access_token 的时候返回 |
| day_budget_schedule | Long[] |  |  | 分日预算 | 单位：厘，指定 0 表示预算不限，默认为 0；每天不小于 500 元，不超过 100,000,000 元，仅支持输入数字；修改预算不得低于该账户当日花费的 120% 和修改前预算的较小者。注意，本字段优先级高于day_budget，当数组内存在非0数据时，day_budget传入的非0值将会不生效。如果想从分日预算修改为单日预算day_budget，那么本字段需要传入[]以代表清空分日预算值。 |
| day_budget | Long |  |  | 单日预算金额 | 账户层级单日预算金额，单位：厘，指定 0 表示预算不限，默认为 0；不小于 500 元，不超过 100,000,000 元，仅支持输入数字；修改预算不得低于当日账户最高花费的1.2倍和修改前预算的较小者。本字段优先级低于day_budget_schedule。如果想从单日预算修改为分日预算，建议本字段传入0值，且day_budget_schedule传入至少一个非0值。 |

## 返回参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| code | Integer |  |  | 返回码 |  |
| message | String |  |  | 返回信息 |  |

## 原始内容

```
修改账户预算 /rest/openapi/v1/advertiser/update/budget advertiser_id Long 广告主 ID day_budget_schedule Long[] 分日预算 day_budget Long 单日预算金额 code Integer 返回码 message String 返回信息
```
