---
title: 批量获取监测链接接口
platform: kuaishou
source_url: https://developers.e.kuaishou.com/docs?docType=DSP&documentId=2592&menuId=3316
doc_id: kuaishou_2592
source_id: kuaishou_2592
---
# 批量获取监测链接接口

## 文档元数据

| 字段 | 值 |
| --- | --- |
| documentId | 2592 |
| documentType | 2 |
| version | 0.0.1 |
| bizName | 效果广告 |
| createTime | 2024-07-22T15:49:44.176Z |

## 接口信息

| 字段 | 值 |
| --- | --- |
| targetPath | https://ad.e.kuaishou.com/rest/openapi/gw/dsp/v3/unit/getMonitorUrls |
| httpMethod | POST |
| httpContentType | JSON |

## 请求参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| unit_ids | Long[] | 是 |  | 广告组ID |  |
| advertiser_id | Long | 是 |  | 广告主ID |  |

## 返回参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| code | Integer |  |  | 非1为失败 |  |
| message | String |  |  | 错误详情 |  |
| data | BatchUnitMonitorUrlInfoViewSnake |  |  | 返回详情 |  |
| - unit_monitor_urls | UnitMonitorUrlInfoViewSnake[] |  |  | 监测链接详情 |  |
| - unit_id | Long |  |  | 广告组ID |  |
| - is_dpa | Boolean |  |  | 是否是DPA（DPA的监测链接在广告组上） |  |
| - exist_valid_creative | Boolean |  |  | 是否存在有效创意 |  |
| - actionbar_click_url | String |  |  | actionBar点击监测 |  |
| - click_url | String |  |  | 点击监测（排除粉丝直播推广） |  |
| - impression_url | String |  |  | 曝光监测 |  |
| - live_track_url | String |  |  | 粉丝直播推广点击监测 |  |
| - ad_photo_played_t3s_url | String |  |  | 3s曝光监测链接 |  |
