---
title: 投前预估详情
platform: kuaishou
source_url: https://developers.e.kuaishou.com/docs?docType=DSP&documentId=2762&menuId=3499
doc_id: kuaishou_2762
source_id: kuaishou_2762
---
# 投前预估详情

## 文档元数据

| 字段 | 值 |
| --- | --- |
| documentId | 2762 |
| documentType | 2 |
| version | 0.0.1 |
| bizName | 效果广告 |
| createTime | 2024-07-04T12:17:00.234Z |

## 接口信息

| 字段 | 值 |
| --- | --- |
| targetPath | https://ad.e.kuaishou.com/rest/openapi/gw/dsp/v1/pre_put/predication_task/details |
| httpMethod | POST |
| httpContentType | JSON |

## 请求参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| predication_id | Long | 是 | 1 | 投前预估任务id |  |
| ocpx_action_type | Long | 是 | 180 | 优化目标 | 53：表单提交，180：激活 |
| advertiser_id | Long | 是 | 23 | 广告主id |  |

## 请求样例

### 请求样例 (jsonc)

```
{
    "advertiser_id": 11440033,
    "ocpx_action_type": 180,
    "predication_id": 55101688
}
```

## 返回参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| code | Integer |  | 0 | 响应状态码 |  |
| message | String |  | "OK" | 返回信息 |  |
| data | AdPredicationTaskDetailSnake |  | {} | 投前预估任务详情 |  |
| - predication_id | Long |  | 10814878 | 预估任务id |  |
| - predication_time | Long |  | 0 | 预估时间 | 毫秒时间戳 |
| - photo_url | String |  | https://txmov2.a.kwimgs.com/up | 视频url链接 |  |
| - title | String |  | VID_20190808_212147.mp4 | 视频标题 |  |
| - duration | Long |  | 10533 | 视频时长 |  |
| - ocpx_action_type | Long |  | 180 | 优化目标 |  |
| - content_quality | Long |  | 0 | 内容分 |  |
| - photo_id | Long |  |  | 视频id |  |
| - content_quality_prompt | String |  | test | 内容质量文案 |  |
| - content_duplicate_prompt | String |  | test | 内容重复度文案 |  |
| - content_duplicate | Boolean |  | false | 是否重复 |  |

## 返回样例

### 返回样例 (jsonc)

```
{
    "code": 0,
    "data": {
        "predication_id": 55101688,
        "content_quality": 1,
        "title": "5s-3.mp4",
        "duration": 5000,
        "photo_url": "https://alimov2.a.kwimgs.com/upic/2021/12/07/17/BMjAyMTEyMDcxNzQ2MjdfMjE4NjY2NTM4M182MjI5MTQ1MDEwN18wXzM=_b_B5596f2337c208966b88f949cba05e6a8.mp4?tag=1-1644387033-unknown-0-7git4lqns0-e6527f07d1b8c175&clientCacheKey=3x9gg2uwk9jge5c_b.mp4&tt=b&di=247090c5&bp=10000",
        "predication_time": 1642064018370,
        "ocpx_action_type": 180,
        "content_quality_prompt":"xxxxx",
        "content_duplicate_prompt":"xxxxx",
        "content_duplicate":false,
        "photo_id": 123456789
    },
    "message": "OK",
    "request_id": "7a5b7d12d5714695a7b9bc5566746d03"
}
```
