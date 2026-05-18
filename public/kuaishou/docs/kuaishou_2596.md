---
title: 更新否定词
platform: kuaishou
source_url: https://developers.e.kuaishou.com/docs?docType=DSP&documentId=2596&menuId=3320
doc_id: kuaishou_2596
source_id: kuaishou_2596
---
# 更新否定词

## 文档元数据

| 字段 | 值 |
| --- | --- |
| documentId | 2596 |
| documentType | 2 |
| version | 0.0.1 |
| bizName | 效果广告 |
| createTime | 2024-07-22T15:51:14.259Z |

## 概述

注：exact_words 和 phrase_words 同时为空是，代表清空否词。

## 接口信息

| 字段 | 值 |
| --- | --- |
| targetPath | https://ad.e.kuaishou.com/rest/openapi/gw/dsp/v1/ad_unit/update/negative_word |
| httpMethod | POST |
| httpContentType | JSON |

## 请求参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| advertiser_id | Long | 是 |  | 广告主id |  |
| negative_word | MapiNegativeWordSnake | 是 |  | 否定词内容 |  |
| - exact_words | String[] |  |  | 精确否定词 | 搜索广告新增，最大数量200，单个词最大长度20，不支持制表符、换行符、Emoji表情等特殊字符 |
| - phrase_words | String[] |  |  | 短语否定词 | 搜索广告新增， 最大数量200，单个词最大长度20，不支持制表符、换行符、Emoji表情等特殊字符 |
| unit_ids | Integer[] |  |  | 广告单元ID | 搜索广告单元ID，最大数量20 |

## 请求样例

### 请求样例 (jsonc)

```
{
    "advertiser_id": 900015364,
    "unit_ids": [
        761270
    ],
    "negative_word": {
        "exact_words": [
            "增加精确否词"
        ],
        "phrase_words": [
            "增加短语否词"
        ]
    }
}
```

## 返回参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| data | BatchIdResp713Snake |  |  | 创编计划、广告组、创意返回id参数 |  |
| - errors | ErrorMsg574Snake332[] |  |  | 请补充描述详情 |  |
| - error_msg | String |  |  | 请补充描述详情 |  |
| - id | Long |  |  | 请补充描述详情 |  |
| - success_unit_ids | Long[] |  |  | 更新成功单元ID列表 |  |
| - error_unit_ids | Long[] |  |  | 更新失败单元ID列表 |  |
| message | String |  |  | 返回信息 |  |
| code | Integer |  |  | 返回码 |  |

## 返回样例

### 返回样例 (jsonc)

```
{
    "code": 0,
    "data": {
        "success_unit_ids": [
            761270
        ],
        "error_unit_ids": []
    },
    "message": "OK",
    "request_id": "a264a584a9624d1b923e054223cee38c"
}
```
