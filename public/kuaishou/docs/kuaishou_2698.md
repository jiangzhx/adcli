---
title: 批量更新监测链接接口
platform: kuaishou
source_url: https://developers.e.kuaishou.com/docs?docType=DSP&documentId=2698&menuId=3433
doc_id: kuaishou_2698
source_id: kuaishou_2698
---
# 批量更新监测链接接口

## 文档元数据

| 字段 | 值 |
| --- | --- |
| documentId | 2698 |
| documentType | 2 |
| version | 0.0.1 |
| bizName | 效果广告 |
| createTime | 2024-07-23T02:43:16.408Z |

## 接口信息

| 字段 | 值 |
| --- | --- |
| targetPath | https://ad.e.kuaishou.com/rest/openapi/gw/dsp/v3/unit/batchUpdateMonitorUrls |
| httpMethod | POST |
| httpContentType | JSON |

## 请求参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| unit_monitor_urls | BatchModMonitorUrlParamSnake[] | 是 |  | 监测链接详情 |  |
| - unit_id | Long | 是 |  | 广告组ID |  |
| - actionbar_click_url | String |  |  | actionbar点击监测 |  |
| - click_url | String |  |  | 点击监测（排除粉丝直播推广） |  |
| - impression_url | String |  |  | 曝光监测 |  |
| - live_track_url | String |  |  | 点击监测（计划为粉丝直播推广） |  |
| - ad_photo_played_t3s_url | String |  |  | 3s播放监测链接 |  |

## 请求样例

### 请求样例 (shell)

```
curl --location 'https://ad.e.kuaishou.com/rest/openapi/gw/dsp/v3/unit/batchUpdateMonitorUrls' \
--header 'Content-Type: application/json' \
--header 'Access-Token: jidfjaiefiwjaihsqweqwe' \
--data '{
    "advertiser_id": 13949412321,
    "unit_monitor_urls": [
        {
            "click_url": "https//www.baidu.com",
            "live_track_url": "https//www.baidu.com",
            "unit_id": 12321312
        }
    ]
}'
```

## 返回参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| code | Integer |  |  | 非1为失败 |  |
| message | String |  |  | 错误详情 |  |
| data | BatchModMonitorUrlViewSnake |  |  | 返回详情 |  |
| - unit_monitor_urls | BatchModMonitorUrlParamSnake[] |  |  | 监测链接详情 |  |
| - unit_id | Long |  |  | 广告组ID |  |
| - actionbar_click_url | String |  |  | actionbar点击监测 |  |
| - click_url | String |  |  | 点击监测（排除粉丝直播推广） |  |
| - impression_url | String |  |  | 曝光监测 |  |
| - live_track_url | String |  |  | 点击监测（计划为粉丝直播推广） |  |
| - ad_photo_played_t3s_url | String |  |  | 3s播放监测链接 |  |
| - result | Boolean |  |  | 修改是否成功 |  |
| - message | String |  |  | 修改成功与否提示信息 |  |

## 返回样例

### 返回样例 (jsonc)

```
{
    "result": 1,
    "message": "OK",
    "data": {
        "unit_monitor_urls": [
            {
                "click_url": "https//www.baidu.com",
                "live_track_url": "https//www.baidu.com",
                "unit_id": 12321312,
                "result": true
            }
        ]
    }
}
```
