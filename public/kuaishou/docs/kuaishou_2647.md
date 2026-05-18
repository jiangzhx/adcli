---
title: 魔力建站预约下载信息查询接口
platform: kuaishou
source_url: https://developers.e.kuaishou.com/docs?docType=DSP&documentId=2647&menuId=3372
doc_id: kuaishou_2647
source_id: kuaishou_2647
---
# 魔力建站预约下载信息查询接口

## 文档元数据

| 字段 | 值 |
| --- | --- |
| documentId | 2647 |
| documentType | 2 |
| version | 0.0.1 |
| bizName | 魔力建站 |
| createTime | 2024-07-04T12:23:03.661Z |

## 接口信息

| 字段 | 值 |
| --- | --- |
| targetPath | https://ad.e.kuaishou.com/rest/openapi/v2/lp/appoint/download/list |
| httpMethod | POST |
| httpContentType | JSON |

## 请求参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| advertiser_id | Long | 是 |  | 广告主 ID | 在获取 access_token 的时候返回 |
| callbacks | String[] |  |  | callback 字符串 |  |
| start_time | String |  |  | 起始时间 | 格式：yyyy-MM-dd hh:MM:ss |
| end_time | String |  |  | 结束时间 | 格式：yyyy-MM-dd hh:MM:ss |
| page | Integer |  |  | 请求的页码 | 默认为 1 |
| page_size | Integer |  |  | 每页行数 | 默认为 20，上限 500 |

## 请求样例

### 请求样例 (jsonc)

```
{
  "advertiser_id": 20007234,
  "device_id":"DFPEDCB7620EB99470245133253D037E6AB6308BBD866BBE447D8737D705E98F",
  "callback":"callback",
  "start_time":"2021-03-21 17:01:48",
  "end_time":"2021-03-21 17:01:48"
}
```

## 返回参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| code | Integer |  |  | code码 |  |
| message | String |  |  | 提示信息 |  |
| data | AppointDownloadInfoRespGW |  |  | 列表 |  |
| - total_count | Integer |  |  | 总数 |  |
| - details | AppointDownloadInfoGW[] |  |  | 建站app预约下载信息 |  |
| - id | Long |  |  | id |  |
| - callback | String |  |  | callback |  |
| - account_id | Long |  |  | 广告主账号id |  |
| - event_type | String |  |  | 事件类型 | EVENT_APPOINT_DOWNLOAD |
| - page_id | Long |  |  | 落地页ID |  |
| - create_time | String |  |  | 创建时间 | 格式：yyyy-MM-dd hh:MM:ss |

## 返回样例

### 返回样例 (jsonc)

```
{
    "code": 0,
    "message": "OK",
    "data": {
        "total_count": 1,
        "details": [
            {
                "id": 202824214376713485,
                "callback": "callback",
                "account_id": 20007234,
                "event_type": "EVENT_APPOINT_DOWNLOAD",
                "page_id": 122023223941398528,
                "device_id": "DFPEDCB7620EB99470245133253D037E6AB6308BBD866BBE447D8737D705E98F",
                "create_time": "2021-03-21 17:01:48"
            }
        ]
    },
    "request_id": "792632d3a3f64400a544e2ab9af194a0"
}
```
