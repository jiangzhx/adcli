---
title: 直播间组件报表
platform: kuaishou
source_url: https://developers.e.kuaishou.com/docs?docType=DSP&documentId=2623&menuId=3347
doc_id: kuaishou_2623
source_id: kuaishou_2623
---
# 直播间组件报表

## 文档元数据

| 字段 | 值 |
| --- | --- |
| documentId | 2623 |
| documentType | 2 |
| version | 0.0.1 |
| bizName | 效果广告 |
| createTime | 2024-07-04T11:32:08.197Z |

## 接口信息

| 字段 | 值 |
| --- | --- |
| targetPath | https://ad.e.kuaishou.com/rest/openapi/gw/dsp/v1/report/live_component_report |
| httpMethod | POST |
| httpContentType | JSON |

## 请求参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| advertiser_id | Long |  |  | 广告主 ID（注：非账户快手 ID），在获取 accessToken 时返回 |  |
| start_date | String |  |  | 过滤筛选条件，格式 yyyy-MM-dd 可选时间范围参见文档上方说明 | （必选其 2） |
| end_date | String |  |  | 过滤筛选条件，格式 yyyy-MM-dd 可选时间范围参见文档上方说明 | （必选其 2） |
| page | Integer |  |  | 请求的页码，默认为 1 |  |
| page_size | Integer |  |  | 每页行数，默认为 20，最大支持 2000 |  |
| view_type | Integer |  |  | 1 |  |
| start_date_min | String |  |  | 增量拉取过滤筛选条件，格式【yyyy-MM-dd HH:mm】可选时间范围参见文档上方说明 | （必选其 1） |
| end_date_min | String |  |  | 增量拉取过滤筛选条件，格式【yyyy-MM-dd HH:mm】可选时间范围参见文档上方说明 | （必选其 1） |
| jingle_bell_id | Long |  |  | 铃铛组件 id |  |
| temporal_granularity | String |  |  | 天粒度（DAILY）／小时粒度（HOURLY），默认支持天粒度数据 | （可选） |

## 请求样例

### 请求样例 (shell)

```
curl --location --request POST 'https://ad.e.kuaishou.com/rest/openapi/gw/dsp/v1/yyq/report/live_component_report' \
--header 'Access-Token: 96534c089dad3ff7092f0fed23' \
--header 'trace-context: {"laneId":"STAGING.material_report_support_live_dev"}' \
--header 'Content-Type: application/json' \
--header 'Cookie: apdid=3acdbff1-3266-4cb1-b01d-db6f19056cc1a8df27a68e0c7d9d75e5b3ff607d5cae:1651590893:1; accessproxy_session=bd51ca4a-1409-414b-abab-3917472c7421' \
--data-raw '{
    "advertiser_id":900015068,
    "start_date":"2022-05-24",
    "end_date":"2022-05-27",
    "page":1,
    "page_size":5
}'
```

## 返回参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| code | Integer |  |  | 响应码 |  |
| message | String |  |  | 消息 |  |
| data | LiveUnitReport |  |  | data |  |
| - total_count | Long |  | 1 | 数据的总行数 |  |
| - details | Detail |  |  | 数据明细信息 |  |
| - user_id | Long |  | 1 | 主播id |  |
| - author_id | Long |  | 1 | 主播id |  |
| - jingle_bell_id | Long |  | 1 | 小铃铛id |  |
| - jingle_bell_name | String |  | 1 | 小铃铛名称 |  |
| - live_room_avg_played_seconds | Double |  | 1 | 直播间平均观看时长 |  |
| - ad_live_share | Long |  | 1 | 直播间分享数 |  |
| - ad_live_comment | Long |  | 1 | 直播间评论数 |  |
| - live_played_started | Double |  | 1 | 直播间进人数 |  |
| - live_played_started_cost | Double |  | 1 | 直播间进入成本 |  |
| - ad_live_follow | Long |  | 1 | 粉丝关注数 |  |
| - ad_live_follow_cost | Double |  | 1 | 粉丝关注成本 |  |
| - simple_live_played_started | Long |  | 1 | 简易直播间开始播放数 |  |
| - standard_live_played_started | Long |  | 1 | 标准直播间开始播放数 |  |
| - conversion_component_impression | Long |  | 1 | 组件展示量 |  |
| - conversion_component_click | Long |  | 1 | 组件点击量 |  |
| - conversion_component_rate | Double |  | 1 | 组件点击率 |  |
| - ad_landing_page_impression | Long |  | 1 | 广告主第三方半屏落地页曝光 |  |
| - ad_app_download_half_impression | Long |  | 1 | 安卓APP下载类半屏落地页曝光 |  |
