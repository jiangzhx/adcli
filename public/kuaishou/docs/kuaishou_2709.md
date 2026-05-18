---
title: 获取授权的短剧作者列表
platform: kuaishou
source_url: https://developers.e.kuaishou.com/docs?docType=DSP&documentId=2709&menuId=3444
doc_id: kuaishou_2709
source_id: kuaishou_2709
---
# 获取授权的短剧作者列表

## 文档元数据

| 字段 | 值 |
| --- | --- |
| documentId | 2709 |
| documentType | 2 |
| version | 0.0.1 |
| bizName | 效果广告 |
| createTime | 2024-07-04T12:02:26.782Z |

## 接口信息

| 字段 | 值 |
| --- | --- |
| targetPath | https://ad.e.kuaishou.com/rest/openapi/gw/dsp/series/auth/user/list |
| httpMethod | POST |
| httpContentType | JSON |

## 请求参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| advertiser_id | Long | 是 |  | 广告主id |  |

## 请求样例

### 请求样例 (jsonc)

```
{
    "advertiser_id": 123456
}
```

## 返回参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| data | MapiSeriesUserSnake[] |  |  | mapi短剧授权User |  |
| - head_url | String |  |  | 短剧作者快手号头像 |  |
| - user_id | Long |  |  | 短剧作者快手号id |  |
| - user_name | String |  |  | 短剧作者快手号名称 |  |
| - user_sex | String |  |  | 短剧作者快手号性别，男性M，女性F，U未知 |  |
| code | Integer |  |  | 返回码 |  |
| message | String |  |  | 返回描述 |  |

## 返回样例

### 返回样例 (jsonc)

```
{
    "code": 0,
    "data": [
        {
            "user_sex": "U",
            "head_url": "http://kcdn.staging.kuaishou.com/uhead/A/BMjAyMTTMyOTI1MF8xX2hkMV8w.jpg",
            "user_id": 1234,
            "user_name": "test1"
        },
        {
            "user_sex": "F",
            "head_url": "http://kcdn.staging.kuaishou.com/uhead/BMjAyMTA1NzQ5N18xX2hkOTIzXzA=.jpg",
            "user_id": 23456,
            "user_name": "test2"
        },
        {
            "user_sex": "M",
            "head_url": "http://kcdn.staging.kuaishou.com/uhead/A/BMjAyMTExMTkxODMyMF8xX2hkMzY1XzA=.jpg",
            "user_id": 12345,
            "user_name": "test3"
        }
    ],
    "message": "OK",
    "request_id": "ELqAgIDQ9JiOrAEY3gUg_u7KoqQxKPjT_vgN"
}
```
