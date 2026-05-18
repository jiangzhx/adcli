---
title: 投前预估列表
platform: kuaishou
source_url: https://developers.e.kuaishou.com/docs?docType=DSP&documentId=2763&menuId=3500
doc_id: kuaishou_2763
source_id: kuaishou_2763
---
# 投前预估列表

## 文档元数据

| 字段 | 值 |
| --- | --- |
| documentId | 2763 |
| documentType | 2 |
| version | 0.0.1 |
| bizName | 效果广告 |
| createTime | 2024-07-04T12:17:17.477Z |

## 接口信息

| 字段 | 值 |
| --- | --- |
| targetPath | https://ad.e.kuaishou.com/rest/openapi/gw/dsp/v1/pre_put/predication_task/list |
| httpMethod | POST |
| httpContentType | JSON |

## 请求参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| page | PageSnake | 是 |  | 分页参数 |  |
| - current_page | Integer |  | 1 | 当前页码, 第一页是1 |  |
| - page_size | Integer |  | 20 | 分页大小 |  |
| - total_count | Long |  | 10 | 数据总数 |  |
| overall_rating | Integer | 是 |  | 总体评分 |  |
| advertiser_id | Long | 是 |  | 广告主id |  |
| task_create_time_duration | String[] |  |  | 按任务创建时间范围筛选，yyyy-MM-dd，不能超出最近7天 |  |
| task_ids | Long[] |  |  | 按任务id范围筛选，不能超过100个 |  |

## 请求样例

### 请求样例 (jsonc)

```
{
    "advertiser_id": 123,
    "page": {
        "current_page": 1,
        "page_size": 20
    }
}
```

## 返回参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| code | Integer |  | 0 | 响应状态码 |  |
| message | String |  | "OK" | 返回信息 |  |
| data | PhotoPredicationTaskListResult |  |  | mapi响应参数 |  |
| - tasks | PhotoPredicationTaskListItemSnake[] |  |  | 投前预估列表页 |  |
| - predication_id | Long |  | 10814878 | 预估任务id |  |
| - predication_time | Long |  | 0 | 预估时间 |  |
| - photo_url | String |  | https://txmov2.a.kwimgs.com/upic/ | 视频url地址 |  |
| - title | String |  | VID_20190808_212147.mp4 | 视频文件名 |  |
| - duration | Long |  | 10533 | 视频时长,单位是ms |  |
| - photo_predication_status | Long |  | 2 | 任务预估状态, 1表示预测中，2表示预测结果已出，3表示特征已过期 |  |
| - ocpx_action_type | Long |  | 180 | 优化目标，53表示表单提交，180表示激活 |  |
| - content_quality | Long |  | 0 | 内容分 |  |
| - photo_pushed_status | Long |  | 0 | 任务同步到视频库状态，0表示未推送，1表示已经推送 |  |
| - photo_id | Long |  | 0 | 视频id |  |
| - content_duplicate | Boolean |  | false | 是否重复 |  |
| - page | PageSnake |  |  | 列表页参数 |  |
| - current_page | Integer |  | 1 | 当前页码, 第一页是1 |  |
| - page_size | Integer |  | 20 | 分页大小 |  |
| - total_count | Long |  | 10 | 数据总数 |  |

## 返回样例

### 返回样例 (jsonc)

```
{
    "code": 0,
    "data": {
        "page": {
            "total_count": 3,
            "current_page": 1,
            "page_size": 20
        },
        "tasks": [
            {
                "photo_pushed_status": 0,
                "predication_id": 55101688,
                "content_quality": 1,
                "title": "5s-3.mp4",
                "duration": 5000,
                "photo_predication_status": 2,
                "photo_url": "https://alimov2.a.kwimgs.com/upic/2021/12/07/17/BMjAyMTEyMDcxNzQ2MjdfMjE4NjY2NTM4M182MjI5MTQ1MDEwN18wXzM=_b_B5596f2337c208966b88f949cba05e6a8.mp4?tag=1-1644386914-unknown-0-rfclt1wkjx-336b12d5adcfa974&clientCacheKey=3x9gg2uwk9jge5c_b.mp4&tt=b&di=247090c5&bp=10000",
                "predication_time": 1642064018370,
                "ocpx_action_type": 180,
                "content_duplicate":false,
                "photo_id": 795194857901
            },
            {
                "photo_pushed_status": 1,
                "predication_id": 55101741,
                "content_quality": 1,
                "title": "5s-2.mp4",
                "duration": 5000,
                "photo_predication_status": 2,
                "photo_url": "https://alimov2.a.kwimgs.com/upic/2021/12/06/14/BMjAyMTEyMDYxNDE1MTFfMjE4NjY2NTM4M182MjIxNzUwODQ1NF8wXzM=_b_B6980bb0be0fe4603352fe27864879197.mp4?tag=1-1644386914-unknown-0-leii20f7jq-ad0e334ba1706547&clientCacheKey=3xtsdngb5bnrs8w_b.mp4&tt=b&di=247090c5&bp=10000",
                "predication_time": 1642064008952,
                "ocpx_action_type": 180,
                "content_duplicate":false,
                "photo_id": 89056723894
            },
            {
                "photo_pushed_status": 0,
                "predication_id": 60177601,
                "content_quality": 4,
                "title": "测试2.mp4",
                "duration": 21146,
                "photo_predication_status": 2,
                "photo_url": "https://alimov2.a.kwimgs.com/upic/2022/01/13/14/BMjAyMjAxMTMxNDA0MTdfMjE4NjY2NTM4M182NDc4MzE2OTA3N18wXzM=_b_B65255069a839ebc6b06bbec98e80b595.mp4?tag=1-1644386914-unknown-0-2np1gioypl-56089dc16f2a5360&clientCacheKey=3xsam4p48sc87zc_b.mp4&tt=b&di=247090c5&bp=10000",
                "predication_time": 1642063956483,
                "ocpx_action_type": 53,
                "content_duplicate":false,
                "photo_id": 487129
            }
        ]
    },
    "message": "OK",
    "request_id": "07817025287b4f24a2f13366fb558d64"
}
```
