---
title: 屏蔽评论
platform: kuaishou
source_url: https://developers.e.kuaishou.com/docs?docType=DSP&documentId=2964&menuId=3715
doc_id: kuaishou_2964
source_id: kuaishou_2964
---
# 屏蔽评论

## 文档元数据

| 字段 | 值 |
| --- | --- |
| documentId | 2964 |
| documentType | 2 |
| version | 0.0.1 |
| bizName | 效果广告 |
| createTime | 2024-07-04T12:09:12.914Z |

## 接口信息

| 字段 | 值 |
| --- | --- |
| targetPath | https://ad.e.kuaishou.com/rest/openapi/v1/comment/shield |
| httpMethod | POST |
| httpContentType | JSON |

## 请求参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| advertiser_id | Long | 是 | 123 | 广告主id |  |
| shield_list | ShieldCommentDto[] | 是 |  | 批量屏蔽评论参数，单次请求最多屏蔽50条评论 | 具体参数如下表 |
| - comment_id | Long | 是 | 51872 | 评论 ID |  |
| - photo_id | String | 是 | "test_photo_id" | 视频 ID |  |

## 请求样例

### 请求样例 (jsonc)

```
{
    "shield_list": [
        {
            "comment_id": 90,
            "photo_id": "test_7724f52152aa"
        }
    ],
    "advertiser_id": 58
}
```

## 返回参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| code | Integer |  | 0 | 状态码 |  |
| message | String |  | "OK" | 错误信息 |  |
| request_id | String |  |  | 请求ID |  |
| data | NullData |  |  | 返回结果 | 空 |
| - null | String |  |  | 空值 | 该部分内容为空 |

## 返回样例

### 返回样例 (jsonc)

```
{
    "code": 0,
    "message": "OK",
    "request_id": "997a93fead6b4ddbb5a0940abd3ea17f",
    "data": {}
}
```
