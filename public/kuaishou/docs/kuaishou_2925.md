---
title: 修改关键词匹配方式
platform: kuaishou
source_url: https://developers.e.kuaishou.com/docs?docType=DSP&documentId=2925&menuId=3675
doc_id: kuaishou_2925
source_id: kuaishou_2925
---
# 修改关键词匹配方式

## 文档元数据

| 字段 | 值 |
| --- | --- |
| documentId | 2925 |
| documentType | 2 |
| version | 0.0.1 |
| bizName | 效果广告 |
| createTime | 2024-07-04T11:15:24.480Z |

## 接口信息

| 字段 | 值 |
| --- | --- |
| targetPath | https://ad.e.kuaishou.com/rest/openapi/v2/word_info/update/match_type |
| httpMethod | POST |
| httpContentType | JSON |

## 请求参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| advertiser_id | Long | 是 |  | 广告主账号ID |  |
| word_info_ids | Long[] | 是 |  | 关键词ID | ID不重复，最大数量20，关键词未删除 |
| match_type | Integer | 是 |  | 匹配类型 | 1 - 精确匹配，2 - 短语匹配，3 - 广泛匹配 |

## 请求样例

### 请求样例 (jsonc)

```
{
    "advertiser_id": 90000344,
    "word_info_ids": [
        1807749,
        1807750,
        1807751
    ],
    "match_type": 2
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
            1807749,
            1807750,
            1807751
        ]
    },
    "request_id": "cd1ef56c85b6431480c1d8cbbf876562"
}
```
