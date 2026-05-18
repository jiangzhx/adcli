---
title: 查询短剧的剧集列表
platform: kuaishou
source_url: https://developers.e.kuaishou.com/docs?docType=DSP&documentId=2708&menuId=3443
doc_id: kuaishou_2708
source_id: kuaishou_2708
---
# 查询短剧的剧集列表

## 文档元数据

| 字段 | 值 |
| --- | --- |
| documentId | 2708 |
| documentType | 2 |
| version | 0.0.1 |
| bizName | 效果广告 |
| createTime | 2024-07-04T12:02:04.099Z |

## 接口信息

| 字段 | 值 |
| --- | --- |
| targetPath | https://ad.e.kuaishou.com/rest/openapi/gw/dsp/series/episode/list |
| httpMethod | POST |
| httpContentType | JSON |

## 请求参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| advertiser_id | Long | 是 |  | 广告主id |  |
| cursor | String |  |  | 游标，第一次传"",后续查询请求根据上一次返回结果的cursor传入, 当返回 "no_more"时，则可结束查询。 |  |
| episode_name | String |  |  | 剧集id |  |
| page_size | Integer |  |  | 每次请求的数量，当cursor和page_size未传入时，则最多返回5000条 |  |
| series_id | Long | 是 |  | 短剧id |  |
| user_id | Long | 是 |  | 作者id |  |

## 请求样例

### 请求样例 (jsonc)

```
{
    "advertiser_id": 90003331538,
    "user_id": 218095337497,
    "series_id":3821619
    
}
```

## 返回参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| data | MapiEpisodeQueryResSnake |  |  | 返回数据 |  |
| - cursor | String |  |  | 游标 |  |
| - episodes | MapiEpisodeInfoSnake[] |  |  | mapi短剧剧集信息 |  |
| - description | String |  |  | 剧集描述 |  |
| - id | Long |  |  | 剧集id |  |
| - name | String |  |  | 剧集名称 |  |
| - order_no | Integer |  |  | 剧集顺序 |  |
| - serial_id | Long |  |  | 短剧id(旧) | 合集ID，与短剧ID不同，若短剧已生成合集信息，可获取该信息 |
| code | Integer |  |  | 返回码 |  |
| message | String |  |  | 返回信息 |  |

## 返回样例

### 返回样例 (jsonc)

```
{
    "code": 0,
    "data": {
        "cursor": "no_more",
        "episodes": [
            {
                "order_no": 0,
                "serial_id": 901,
                "name": "剧集名称1",
                "description": "",
                "id": 1392304
            },
            {
                "order_no": 1,
                "serial_id": 901,
                "name": "剧集名称2",
                "description": "",
                "id": 1392305
            },
            {
                "order_no": 2,
                "serial_id": 901,
                "name": "剧集名称3",
                "description": "",
                "id": 1392306
            }
        ]
    },
    "message": "OK",
    "request_id": "ELqAgIDQ9JiOrAEY6gQgt6a63qQxKKKp2qoD"
}
```
