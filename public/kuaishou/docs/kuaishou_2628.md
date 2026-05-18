---
title: 快小游ECPM报表
platform: kuaishou
source_url: https://developers.e.kuaishou.com/docs?docType=DSP&documentId=2628&menuId=3352
doc_id: kuaishou_2628
source_id: kuaishou_2628
---
# 快小游ECPM报表

## 文档元数据

| 字段 | 值 |
| --- | --- |
| documentId | 2628 |
| documentType | 2 |
| version | 0.0.1 |
| bizName | 效果广告 |
| createTime | 2024-07-04T11:34:03.704Z |

## 接口信息

| 字段 | 值 |
| --- | --- |
| targetPath | https://ad.e.kuaishou.com/rest/openapi/gw/dsp/v1/report/ecpm_report |
| httpMethod | POST |
| httpContentType | JSON |

## 请求参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| advertiser_id | Long | 是 |  | 广告主id,主要用于鉴权无实际含义 |  |
| app_id | String | 是 |  | 游戏id |  |
| open_id | String[] |  |  | 用户的 open_id或union_id，单次允许最多传入200个，传入为空字符串时，查询所有用户 |  |
| page | Integer |  |  | 查询的页码，页码从1开始 |  |
| page_size | Integer |  |  | 单页的大小，最大支持500 |  |
| data_hour | String | 是 |  | 根据传参，有两种时间范围可查： - 若传 YYYY-MM-DD，则查天级范围，即 YYYY-MM-DD 00:00:00 ～ YYYY-MM-DD 23:59:59 - 若传 YYYY-MM-DD hh:mm:ss，则查小时级范围，即 YYYY-MM-DD hh:00:00 ～ YYYY-MM-DD hh:59:59 举例：查 13 号：“2023-07-13” 查 13 号 14 点：“2023-07-13 14” 或 “2023-07-13 14:00:00” 或 “2023-07-13 14:13:24” PS：数据源仅保存近 168小时的数据，建议明确时间范围的情况下，指定小时级别只支持1天的查询 |  |

## 请求样例

### 请求样例 (shell)

```
curl -H "Access-Token:d198a850da67a16279e30" \
-H "Content-Type:application/json" \
-d '
{
  "advertiser_id": "131114",
  "app_id": "ks67159985317480",
  "open_id": [
    "f11187870a1ca232814bf47248fe9ab9a",
    "f11187870a1ca232814bf47248fe9ab9b",
    "f11187870a1ca232814bf47248fe9ab9c",
    "f11187870a1ca232814bf47248fe9ab9d",
    "f11187870a1ca232814bf47248fe9ab9e",
    "f11187870a1ca232814bf47248fe9ab9f",
  ],
  "data_hour": "2023-11-02 14:00:00"
}
' https://ad.e.kuaishou.com/rest/openapi/gw/dsp/v1/report/ecpm_report
```

## 返回参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| code | Integer |  |  | 状态码 |  |
| message | String |  |  | 返回信息 |  |
| data | AdEcpmReport |  |  | 返回数据 |  |
| - details | AdEcpmReportDetail[] |  |  | 数据详情 |  |
| - id | String |  | 11 | 记录唯一标识（返回记录按 ID 递增排序） | 1 |
| - event_time | String |  | 11 | 广告计费事件发生时间 | 1 |
| - open_id | String |  |  | 用户的 open_id或union_id |  |
| - cost | Long |  | 1 | 消耗：单位厘 |  |
| - total_count | Long |  |  | 总条数 |  |

## 返回样例

### 返回样例 (jsonc)

```
{
  "code": 0,
  "data": {
    "empty": false,
    "total_count": 3,
    "details": [
      {
        "open_id": "f11187870a1ca232814bf47248fe9ab9a",
        "cost": 10,
        "id":"17052480001016060086879176560",
        "event_time":"2024-01-18 15:10:00"
      },
      {
        "open_id": "f11187870a1ca232814bf47248fe9ab9b",
        "cost": 133,
        "id":"17052480001016060086879176564",
        "event_time":"2024-01-18 15:11:00"
      },
      {
        "open_id": "f11187870a1ca232814bf47248fe9ab9c",
        "cost": 90,
        "id":"17052480001016060086879176569",
        "event_time":"2024-01-18 15:12:00"
      }
    ]
  },
  "message": "OK",
  "request_id": "EO60gICQgpGOChjDCSDfnJXpuTEo0sOVigg="
}
```
