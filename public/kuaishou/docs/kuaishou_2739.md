---
title: 获取直播间小铃铛列表
platform: kuaishou
source_url: https://developers.e.kuaishou.com/docs?docType=DSP&documentId=2739&menuId=3472
doc_id: kuaishou_2739
source_id: kuaishou_2739
---
# 获取直播间小铃铛列表

## 文档元数据

| 字段 | 值 |
| --- | --- |
| documentId | 2739 |
| documentType | 2 |
| version | 0.0.1 |
| bizName | 效果广告 |
| createTime | 2024-07-04T12:18:05.911Z |

## 接口信息

| 字段 | 值 |
| --- | --- |
| targetPath | https://ad.e.kuaishou.com/rest/openapi/gw/dsp/v1/jingle_bell/live_user_bind_list |
| httpMethod | POST |
| httpContentType | JSON |

## 请求参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| advertiser_id | Long | 是 |  | 广告主 ID |  |
| live_user_id | Long | 是 |  | 主播id |  |
| current_page | Integer | 是 |  | 当前页数 |  |
| page_size | Integer | 是 |  | 每页行数 |  |

## 请求样例

### 请求样例 (shell)

```
curl --location --request POST 'http://star-gateway.test.gifshow.com/rest/openapi/gw/dsp/v1/jingle_bell/live_user_bind_list' \
--header 'Access-Token: 71e16e2fccb0d694c3004aeca4221637' \
--header 'Content-Type: application/json' \
--data-raw '{
    "advertiser_id": 90001041,
    "current_page": 1,
    "page_size": 10,
    "live_user_id": 1743291153
}'
```

## 返回参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| code | Integer |  |  | 返回码 |  |
| message | String |  |  | 返回信息 |  |
| data | GetJingleBellInfoResponse |  |  | data |  |
| - total_count | Integer |  |  | 总行数 |  |
| - jingle_bell_list | JingleBellInfoView[] |  |  | jingle_bell_list |  |
| - jingle_bell_id | String |  |  | 铃铛id |  |
| - jingle_bell_status | Integer |  |  | 铃铛状态 | 铃铛状态 1-上架，2-下架，3-审核通过可随时投放，5-上架失败，6-审核失败，7-审核中 |
| - active | Boolean |  |  | 激活状态 |  |
| - conversion_type | Integer |  |  | 铃铛类型 | 铃铛类型 2-应用下载，5-H5落地页，9-短剧 |
| - ios_app_id | Long |  | 1 | ios应用id |  |
| - android_app_id | Long |  | 1 | android应用id |  |
| - jingle_bell_name | String |  | 1 | 铃铛名字 |  |
| - series_id | Long |  | 1 | 短剧id |  |

## 返回样例

### 返回样例 (jsonc)

```
{
    "code": 0,
    "data": {
        "total_count": 59,
        "jingle_bell_list": [
            {
                "conversion_type": 2,
                "active": false,
                "jingle_bell_status": 3,
                "jingle_bell_id": "645078377796059"
            }
        ]
    },
    "message": "OK",
    "request_id": "cd2ee1bed33d4fb285e9257334ab5552"
}
```
