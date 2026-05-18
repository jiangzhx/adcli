---
title: 获取屏蔽评论信息列表
platform: kuaishou
source_url: https://developers.e.kuaishou.com/docs?docType=DSP&documentId=2969&menuId=3718
doc_id: kuaishou_2969
source_id: kuaishou_2969
---
# 获取屏蔽评论信息列表

## 文档元数据

| 字段 | 值 |
| --- | --- |
| documentId | 2969 |
| documentType | 2 |
| version | 0.0.1 |
| bizName | 效果广告 |
| createTime | 2024-07-04T12:09:53.938Z |

## 接口信息

| 字段 | 值 |
| --- | --- |
| targetPath | https://ad.e.kuaishou.com/rest/openapi/v1/comment/shield_info/list |
| httpMethod | POST |
| httpContentType | FORM |

## 请求参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| advertiser_id | Long | 是 | 123456 | 广告主 ID | 在获取 access_token 的时候返回 |
| page | Integer |  | 1 | 请求的页码数 | 默认为 1 |
| page_size | Integer |  | 20 | 请求的每页行数 | 默认为 20 |
| shield_type_list | Integer[] | 是 | [1] | 屏蔽信息类型 | 1：评论内容关键词，5：用户昵称关键词，6：快手 ID |

## 请求样例

### 请求样例 (jsonc)

```
{
    "shield_type_list": [1],
    "advertiser_id": 76,
    "page": 1,
    "page_size": 20
}
```

## 返回参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| code | Integer |  | 0 | 状态码 |  |
| message | String |  | "OK" | 错误信息 |  |
| request_id | String |  |  | 请求ID |  |
| data | ShieldInfoListData |  |  | 返回结果 |  |
| - total_count | Long |  | 12 | 总数 |  |
| - details | ShieldInfoView[] |  |  | 详细数据 |  |
| - shield_info_id | Long |  | 657476 | 屏蔽信息 id |  |
| - shield_type | Integer |  | 1 | 屏蔽类型 |  |
| - shield_content | String |  | "test" | 屏蔽信息内容 |  |

## 返回样例

### 返回样例 (jsonc)

```
{
    "code": 0,
    "message": "OK",
    "request_id": "997a93fead6b4ddbb5a0940abd3ea17f",
    "data": {
        "total_count": 1,
        "details": [
            {
                "shield_info_id": 79,
                "shield_type": 1,
                "shield_content": "test_2f5c1e66aa92"
            }
        ]
    }
}
```

## 原始内容

```
获取屏蔽评论信息列表 /rest/openapi/v1/comment/shield_info/list { "shield_type_list": [1], "advertiser_id": 76, "page": 1, "page_size": 20 } { "code": 0, "message": "OK", "request_id": "997a93fead6b4ddbb5a0940abd3ea17f", "data": { "total_count": 1, "details": [ { "shield_info_id": 79, "shield_type": 1, "shield_content": "test_2f5c1e66aa92" } ] } } advertiser_id Long 广告主 ID page Integer 请求的页码数 page_size Integer 请求的每页行数 shield_type_list Integer[] 屏蔽信息类型 code Integer 状态码 message String 错误信息 request_id String 请求ID data ShieldInfoListData 返回结果 total_count Long 总数 details ShieldInfoView[] 详细数据 shield_info_id Long 屏蔽信息 id shield_type Integer 屏蔽类型 shield_content String 屏蔽信息内容
```
