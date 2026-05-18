---
title: 修改周期稳投计划续投状态
platform: kuaishou
source_url: https://developers.e.kuaishou.com/docs?docType=DSP&documentId=3183&menuId=3938
doc_id: kuaishou_3183
source_id: kuaishou_3183
---
# 修改周期稳投计划续投状态

## 文档元数据

| 字段 | 值 |
| --- | --- |
| documentId | 3183 |
| documentType | 2 |
| version | 0.0.1 |
| bizName | 效果广告 |
| createTime | 2025-02-11T11:07:11.675Z |

## 接口信息

| 字段 | 值 |
| --- | --- |
| targetPath | https://ad.e.kuaishou.com/rest/openapi/gw/dsp/campaign/continue/period/update |
| httpMethod | POST |
| httpContentType | JSON |

## 请求参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| advertiser_id | Long | 是 |  | 广告主id |  |
| campaign_id | Long | 是 |  | 广告计划id |  |
| continue_period_type | Integer | 是 |  | 周期稳投续投开关 | 1-关闭，2-开启 |

## 返回参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| data | SingleIdResp |  |  | 创编计划、广告组、创意返回id参数 |  |
| - id | Long |  |  | 修改成功广告计划id |  |
| code | Integer |  |  | 返回码 |  |
| message | String |  |  | 返回信息 |  |

## 原始内容

```
修改周期稳投计划续投状态 /rest/openapi/gw/dsp/campaign/continue/period/update advertiser_id Long 广告主id campaign_id Long 广告计划id continue_period_type Integer 周期稳投续投开关 data SingleIdResp 创编计划、广告组、创意返回id参数 id Long 请补充描述详情 code Integer 请补充描述详情 message String 请补充描述详情
```
