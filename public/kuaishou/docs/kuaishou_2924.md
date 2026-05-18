---
title: 创建关键词
platform: kuaishou
source_url: https://developers.e.kuaishou.com/docs?docType=DSP&documentId=2924&menuId=3674
doc_id: kuaishou_2924
source_id: kuaishou_2924
---
# 创建关键词

## 文档元数据

| 字段 | 值 |
| --- | --- |
| documentId | 2924 |
| documentType | 2 |
| version | 0.0.1 |
| bizName | 效果广告 |
| createTime | 2025-06-16T08:08:58.902Z |

## 概述

此接口用于在指定Unit上创建关键词，可以在已有关键词基础上新增，单个Unit最多创建500个关键词（若账号满足以下2个条件 （1）距离账户首次消耗>0，超过7天 （2）近7日，账户日均消耗<100 ，则单个unit最多创建100个关键词）。

## 接口信息

| 字段 | 值 |
| --- | --- |
| targetPath | https://ad.e.kuaishou.com/rest/openapi/v2/word_info/create |
| httpMethod | POST |
| httpContentType | JSON |

## 请求参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| advertiser_id | Long | 是 |  | 广告主账号ID |  |
| campaign_id | Long | 是 |  | 广告计划ID |  |
| unit_id | Long | 是 |  | 广告单元ID | 需保证是搜索广告Unit |
| word_infos | WordInfo[] | 是 |  | 关键词信息 |  |
| - word | String | 是 |  | 关键词内容 | 新增关键词：最大长度20，不支持制表符、换行符、Emoji表情等特殊字符；已存在关键词：需为投放中状态 |
| - match_type | Integer | 是 |  | 关键词匹配类型 | 1 - 精确匹配，2 - 短语匹配，3 - 广泛匹配 |

## 请求样例

### 请求样例 (jsonc)

```
{
    "advertiser_id": 90000344,
    "campaign_id": 25133631,
    "unit_id": 3833404,
    "word_infos": [
        {
            "word": "d7",
            "match_type": 3
        },
        {
            "word": "汉堡包",
            "match_type": 3
        },
        {
            "word": "薯条",
            "match_type": 2
        },
        {
            "word": "可乐",
            "match_type": 1
        }
    ]
}
```

## 返回参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| code | Integer |  |  | 返回状态码 |  |
| message | String |  |  | 返回状态信息 |  |
| data | WordInfoCreateData |  |  | 返回数据内容 |  |
| - error_list | WordInfoCreateError[] |  |  | 添加失败关键词列表 |  |
| - word | String |  |  | 关键词内容 |  |
| - match_type | Integer |  |  | 匹配类型 | 1 - 精确匹配，2 - 短语匹配，3 - 广泛匹配 |
| - error_reason | String |  |  | 失败原因 |  |
| - success_list | WordInfoCreateSuccess[] |  |  | 添加成功关键词列表 |  |
| - word_info_id | Long |  |  | 关键词ID |  |
| - word | String |  |  | 关键词内容 |  |
| - match_type | Integer |  |  | 匹配类型 | 1 - 精确匹配，2 - 短语匹配，3 - 广泛匹配 |
| - put_status | Integer |  |  | 投放状态 | 1 - 投放中，2 - 已暂停，3 - 已删除 |

## 返回样例

### 返回样例 (jsonc)

```
{
    "code": 0,
    "message": "OK",
    "data": {
        "error_list": [],
        "success_list": [
            {
                "word": "d7",
                "match_type": 3,
                "put_status": 1,
                "word_info_id": 1809519
            },
            {
                "word": "汉堡包",
                "match_type": 3,
                "put_status": 1,
                "word_info_id": 1809522
            },
            {
                "word": "薯条",
                "match_type": 2,
                "put_status": 1,
                "word_info_id": 1809521
            },
            {
                "word": "可乐",
                "match_type": 1,
                "put_status": 1,
                "word_info_id": 1809520
            }
        ]
    },
    "request_id": "ad3fb7dc96ba4eb4bdc9aecdd03c859a"
}
```
