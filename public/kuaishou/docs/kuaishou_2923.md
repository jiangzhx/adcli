---
title: 获取关键词列表
platform: kuaishou
source_url: https://developers.e.kuaishou.com/docs?docType=DSP&documentId=2923&menuId=3673
doc_id: kuaishou_2923
source_id: kuaishou_2923
---
# 获取关键词列表

## 文档元数据

| 字段 | 值 |
| --- | --- |
| documentId | 2923 |
| documentType | 2 |
| version | 0.0.1 |
| bizName | 效果广告 |
| createTime | 2024-07-04T11:14:23.709Z |

## 接口信息

| 字段 | 值 |
| --- | --- |
| targetPath | https://ad.e.kuaishou.com/rest/openapi/v2/word_info/list |
| httpMethod | POST |
| httpContentType | JSON |

## 请求参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| advertiser_id | Long | 是 |  | 广告主账号ID |  |
| unit_id | Long | 是 |  | 广告单元ID |  |

## 请求样例

### 请求样例 (jsonc)

```
{
    "advertiser_id": 90000344,
    "unit_id": 3833404
}
```

## 返回参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| code | Integer |  |  | 返回状态码 |  |
| message | String |  |  | 返回状态信息 |  |
| data | WordInfoListData |  |  | 返回数据内容 |  |
| - total_count | Long |  |  | 关键词数量 |  |
| - details | WordInfoListDetail |  |  | 关键词信息 |  |
| - word_info_id | Long |  |  | 关键词ID |  |
| - word | String |  |  | 关键词内容 |  |
| - match_type | Integer |  |  | 匹配类型 | 1 - 精确匹配，2 - 短语匹配，3 - 广泛匹配 |
| - review_status | Integer |  |  | 审核状态 | 1 - 审核中，2 - 审核通过，3 - 审核未通过，7 - 待送审 |
| - put_status | Integer |  |  | 投放状态 | 1 - 投放中，2 - 已暂停，3 - 已删除 |
| - status | Integer |  |  | 综合状态 | 101 - 已删除，102 - 审核失败，103 - 审核中，104 - 已暂停，105 - 投放中，106 - 待送审 |

## 返回样例

### 返回样例 (jsonc)

```
{
    "code": 0,
    "message": "OK",
    "data": {
        "total_count": 3,
        "details": [
            {
                "status": 106,
                "word": "中明",
                "word_info_id": 126002,
                "put_status": 1,
                "match_type": 1,
                "review_status": 7
            },
            {
                "status": 106,
                "word": "小明",
                "word_info_id": 126001,
                "put_status": 2,
                "match_type": 2,
                "review_status": 7
            },
            {
                "status": 106,
                "word": "大明",
                "word_info_id": 126000,
                "put_status": 1,
                "match_type": 2,
                "review_status": 7
            }
        ]
    },
    "request_id": "8ca2604c4433473985276536090e41fd"
}
```
