---
title: 小铃铛删除接口
platform: kuaishou
source_url: https://developers.e.kuaishou.com/docs?docType=DSP&documentId=2743&menuId=3476
doc_id: kuaishou_2743
source_id: kuaishou_2743
---
# 小铃铛删除接口

## 文档元数据

| 字段 | 值 |
| --- | --- |
| documentId | 2743 |
| documentType | 2 |
| version | 0.0.1 |
| bizName | 效果广告 |
| createTime | 2024-07-04T12:19:07.886Z |

## 接口信息

| 字段 | 值 |
| --- | --- |
| targetPath | https://ad.e.kuaishou.com/rest/openapi/gw/dsp/jingleBell/unbind |
| httpMethod | POST |
| httpContentType | JSON |

## 请求参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| advertiser_id | Long | 是 |  | advertiser_id |  |
| jingle_bell_id | Long | 是 |  | 小铃铛ID |  |
| live_user_id | Long | 是 |  | 主播ID |  |

## 请求样例

### 请求用例 (jsonc)

```
{
  "advertiser_id": 900015364,
  "live_user_id": 2190171067,
  "jingle_bell_id": "876230739624482"
}
```

## 返回参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| code | Integer |  |  | 状态码 |  |
| message | String |  |  | 错误信息 |  |
| data | Data |  |  | 数据 |  |
| - total_count | Long |  | 0 | 总数 |  |
| - details | Long[] |  | 1 | 详情 |  |

## 返回样例

### 返回样例 (jsonc)

```
{
  "code": 0,
  "data": {},
  "message": "OK",
  "request_id": "ELqAgIDg8piOrAEYtAkgne-tpMMxKNzJwb8I"
}
```
