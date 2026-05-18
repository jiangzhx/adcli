---
title: 直播间报表
platform: kuaishou
source_url: https://developers.e.kuaishou.com/docs?docType=DSP&documentId=2624&menuId=3348
doc_id: kuaishou_2624
source_id: kuaishou_2624
---
# 直播间报表

## 文档元数据

| 字段 | 值 |
| --- | --- |
| documentId | 2624 |
| documentType | 2 |
| version | 0.0.1 |
| bizName | 效果广告 |
| createTime | 2024-08-08T02:13:35.429Z |

## 接口信息

| 字段 | 值 |
| --- | --- |
| targetPath | https://ad.e.kuaishou.com/rest/openapi/gw/dsp/v1/report/live_user_report |
| httpMethod | POST |
| httpContentType | JSON |

## 请求参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| advertiser_id | Long |  |  | 广告主id |  |
| start_date | String |  |  | 开始时间 |  |
| end_date | String |  |  | 结束时间 |  |
| page | Integer |  |  | 页码 |  |
| page_size | Integer |  |  | 页面大小 |  |
| view_type | Integer |  |  | 1 |  |
| start_date_min | String |  |  | 2021-10-12 |  |
| end_date_min | String |  |  | 2021-10-21 |  |
| user_id | Long |  |  | 主播 id |  |
| live_stream_id | Long |  |  | liveStreamId |  |
| temporal_granularity | String |  |  | 111 |  |

## 请求样例

### 请求样例 (shell)

```
curl --location --request POST 'https://ad.e.kuaishou.com/rest/openapi/gw/dsp/v1/yyq/report/live_user_report' \
--header 'Access-Token: 96534c089dad3ff7092f0fed23' \
--header 'trace-context: {"laneId":"STAGING.material_report_support_live_dev"}' \
--header 'Content-Type: application/json' \
--header 'Cookie: apdid=3acdbff1-3266-4cb1-b01d-db6f19056cc1a8df27a68e0c7d9d75e5b3ff607d5cae:1651590893:1; accessproxy_session=bd51ca4a-1409-414b-abab-3917472c7421' \
--data-raw '{"advertiser_id":900015068,
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
| data | LiveOrderReport |  |  | data |  |
| - total_count | Long |  | 1 | 数据的总行数 |  |
| - details | Details[] |  | 111 | 数据明细信息 |  |
| - user_id | Long |  | 1 | 主播id |  |
| - live_stream_id | Long |  | 1 | 直播间id |  |
| - live_start_time | Long |  | 1 | 直播开始时间 |  |
| - live_end_time | Long |  | 1 | 直播结束时间 |  |
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
| - jingle_bell_id | Long |  | 1 | 小铃铛id |  |
| - jingle_bell_name | String |  | 1 | 小铃铛名称 |  |
| - simple_live_room_played_seconds | Long |  | 1 | 简易直播间观看时长 |  |
| - standard_live_room_played_seconds | Long |  | 1 | 标准直播间观看时长 |  |
| - campaign_id | Long |  | 1 | 计划ID |  |
| - unit_id | Long |  | 1 | 广告组ID |  |
| - creative_id | Long |  | 1 | 创意ID |  |
| - charge | Double |  | 1 | 花费（元） |  |
| - impression | Long |  | 1 | 封面曝光数 |  |
| - photo_click | Long |  | 1 | 封面点击数 |  |
| - aclick | Long |  | 1 | 素材曝光数 |  |
| - bclick | Long |  | 1 | 行为数 |  |
| - photo_click_ratio | Double |  | 1 | 封面点击率 |  |
| - impression_1k_cost | Double |  | 1 | 平均千次封面曝光花费(元) |  |
| - click_1k_cost | Double |  | 1 | 平均千次素材曝光花费(元) |  |
| - photo_click_cost | Double |  | 1 | 平均封面点击单价(元) |  |
| - action_cost | Double |  | 1 | 平均行为单价(元) |  |
| - play_3s_ratio | Double |  | 1 | 3秒播放率 |  |
| - play_5s_ratio | Double |  | 1 | 5秒播放率 |  |
| - play_end_ratio | Double |  | 1 | 完播率 |  |
| - share | Long |  | 1 | 分享数 |  |
| - comment | Long |  | 1 | 评论数 |  |
| - report | Long |  | 1 | 举报数 |  |
| - block | Long |  | 1 | 拉黑数 |  |
| - negative | Long |  | 1 | 不感兴趣数 |  |
| - live_played_3s | Long |  | 1 | 直播观看3秒数 |  |
| - conversion | Long |  | 1 | 激活数 |  |
| - action_ratio | Double |  | 1 | 素材点击率 |  |
| - likes | Long |  | 1 | 点赞数 |  |

## 原始内容

```
直播间报表 /rest/openapi/gw/dsp/v1/report/live_user_report curl --location --request POST 'https://ad.e.kuaishou.com/rest/openapi/gw/dsp/v1/yyq/report/live_user_report' \ --header 'Access-Token: 96534c089dad3ff7092f0fed23' \ --header 'trace-context: {"laneId":"STAGING.material_report_support_live_dev"}' \ --header 'Content-Type: application/json' \ --header 'Cookie: apdid=3acdbff1-3266-4cb1-b01d-db6f19056cc1a8df27a68e0c7d9d75e5b3ff607d5cae:1651590893:1; accessproxy_session=bd51ca4a-1409-414b-abab-3917472c7421' \ --data-raw '{"advertiser_id":900015068, "start_date":"2022-05-24", "end_date":"2022-05-27", "page":1, "page_size":5 }' advertiser_id Long 广告主id start_date String 开始时间 end_date String 结束时间 page Integer 页码 page_size Integer 页面大小 view_type Integer 1 start_date_min String 2021-10-12 end_date_min String 2021-10-21 user_id Long 主播 id live_stream_id Long liveStreamId temporal_granularity String 111 code Integer 响应码 message String 消息 data LiveOrderReport data total_count Long 数据的总行数 details Details[] 数据明细信息 user_id Long 主播id live_stream_id Long 直播间id live_start_time Long 直播开始时间 live_end_time Long 直播结束时间 live_room_avg_played_seconds Double 直播间平均观看时长 ad_live_share Long 直播间分享数 ad_live_comment Long 直播间评论数 live_played_started Double 直播间进人数 live_played_started_cost Double 直播间进入成本 ad_live_follow Long 粉丝关注数 ad_live_follow_cost Double 粉丝关注成本 simple_live_played_started Long 简易直播间开始播放数 standard_live_played_started Long 标准直播间开始播放数 conversion_component_impression Long 组件展示量 conversion_component_click Long 组件点击量 conversion_component_rate Double 组件点击率 ad_landing_page_impression Long 广告主第三方半屏落地页曝光 ad_app_download_half_impression Long 安卓APP下载类半屏落地页曝光 jingle_bell_id Long 小铃铛id jingle_bell_name String 小铃铛名称 simple_live_room_played_seconds Long 简易直播间观看时长 standard_live_room_played_seconds Long 标准直播间观看时长 campaign_id Long 计划ID unit_id Long 广告组ID creative_id Long 创意ID charge Double 花费（元） impression Long 封面曝光数 photo_click Long 封面点击数 aclick Long 素材曝光数 bclick Long 行为数 photo_click_ratio Double 封面点击率 impression_1k_cost Double 平均千次封面曝光花费(元) click_1k_cost Double 平均千次素材曝光花费(元) photo_click_cost Double 平均封面点击单价(元) action_cost Double 平均行为单价(元) play_3s_ratio Double 3秒播放率 play_5s_ratio Double 5秒播放率 play_end_ratio Double 完播率 share Long 分享数 comment Long 评论数 report Long 举报数 block Long 拉黑数 negative Long 不感兴趣数 live_played_3s Long 直播观看3秒数 conversion Long 激活数 action_ratio Double 素材点击率
```
