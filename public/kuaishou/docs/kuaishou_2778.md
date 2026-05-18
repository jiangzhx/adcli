---
title: 获取应用已共享账号列表
platform: kuaishou
source_url: https://developers.e.kuaishou.com/docs?docType=DSP&documentId=2778&menuId=3515
doc_id: kuaishou_2778
source_id: kuaishou_2778
---
# 获取应用已共享账号列表

## 文档元数据

| 字段 | 值 |
| --- | --- |
| documentId | 2778 |
| documentType | 2 |
| version | 0.0.1 |
| bizName | 效果广告 |
| createTime | 2024-07-04T11:55:04.275Z |

## 概述

应用的共享类型为：share_type=1【账号共享】才会有数据

## 接口信息

| 字段 | 值 |
| --- | --- |
| targetPath | https://ad.e.kuaishou.com/rest/openapi/gw/dsp/appcenter/app/share/list |
| httpMethod | POST |
| httpContentType | JSON |

## 请求参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| advertiser_id | Long | 是 |  | 广告主id |  |
| app_id | Long | 是 |  | 应用id |  |
| key_word | String |  |  | 搜索关键词 | 账号关键词 |
| page | Integer |  |  | 当前页 | 页码，默认1 |
| page_size | Integer |  |  | 分页大小 | 个数，默认20 |

## 请求样例

### 请求样例 (shell)

```
curl --location 'https://ad.e.kuaishou.com/rest/openapi/gw/dsp/appcenter/app/share/list' \
--header 'Content-Type: application/json' \
--header 'Access-Token: xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx' \
--data '{
    "advertiser_id":900015364,
    "app_id":2199123264636
}'
```

## 返回参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| data | PageDataListShareAccountResp708Snake |  |  | JSON 返回值 |  |
| - current_page | Integer |  |  | 当前页 |  |
| - list | ShareAccountResp281Snake[] |  |  | 账号列表的返回参数 |  |
| - account_id | Long |  |  | 账号ID |  |
| - account_name | String |  |  | 账号名称 |  |
| - page_size | Integer |  |  | 页码大小 |  |
| - total_count | Long |  |  | 总数 |  |
| code | Integer |  |  | 返回码 |  |
| message | String |  |  | 返回详情 |  |

## 返回样例

### 返回样例 (jsonc)

```
{
    "code": 0,
    "data": {
        "total_count": 1,
        "list": [
            {
                "account_id": 900164519,
                "account_name": "快手用户1654058295674"
            }
        ],
        "current_page": 1,
        "page_size": 10
    },
    "message": "OK",
    "request_id": "EPSAgIDwg5mOrAEYtAYgsMmfu_QwKIG21NIE"
}
```
