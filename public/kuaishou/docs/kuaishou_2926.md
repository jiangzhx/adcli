---
title: 修改关键词投放状态
platform: kuaishou
source_url: https://developers.e.kuaishou.com/docs?docType=DSP&documentId=2926&menuId=3676
doc_id: kuaishou_2926
source_id: kuaishou_2926
---
# 修改关键词投放状态

## 文档元数据

| 字段 | 值 |
| --- | --- |
| documentId | 2926 |
| documentType | 2 |
| version | 0.0.1 |
| bizName | 效果广告 |
| createTime | 2024-09-03T07:04:54.473Z |

## 概述

已支持删除

## 接口信息

| 字段 | 值 |
| --- | --- |
| targetPath | https://ad.e.kuaishou.com/rest/openapi/v2/word_info/update/status |
| httpMethod | POST |
| httpContentType | JSON |

## 请求参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| advertiser_id | Long | 是 |  | 广告主账号ID |  |
| word_info_ids | Long[] | 是 |  | 关键词ID | ID不重复，最大数量20，关键词未删除 |
| put_status | Integer | 是 |  | 投放状态 | 1 - 投放，2 - 暂停，3 - 删除 |

## 请求样例

### 请求样例 (jsonc)

```
{
    "advertiser_id": 90000344,
    "word_info_ids": [
        1809522,
        1809522,
        1809520,
        1809521,
        1809519,
        1705019,
        1807749
    ],
    "put_status": 2
}
```

## 返回参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| code | Integer |  |  | 返回状态码 |  |
| message | String |  |  | 返回状态信息 |  |
| data | WordInfoUpdateData |  |  | 返回数据内容 |  |
| - word_info_ids | Long[] |  |  | 修改成功关键词ID列表 |  |

## 返回样例

### 返回样例 (jsonc)

```
{
    "code": 0,
    "message": "OK",
    "data": {
        "word_info_ids": [
            1809522,
            1809522,
            1809520,
            1809521,
            1809519,
            1705019,
            1807749
        ]
    },
    "request_id": "ce4addec384e467a974ca0c0a65507bb"
}
```
