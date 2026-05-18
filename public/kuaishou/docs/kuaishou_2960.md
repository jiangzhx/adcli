---
title: 回复评论
platform: kuaishou
source_url: https://developers.e.kuaishou.com/docs?docType=DSP&documentId=2960&menuId=3711
doc_id: kuaishou_2960
source_id: kuaishou_2960
---
# 回复评论

## 文档元数据

| 字段 | 值 |
| --- | --- |
| documentId | 2960 |
| documentType | 2 |
| version | 0.0.1 |
| bizName | 效果广告 |
| createTime | 2024-07-04T12:08:46.658Z |

## 接口信息

| 字段 | 值 |
| --- | --- |
| targetPath | https://ad.e.kuaishou.com/rest/openapi/v1/comment/reply |
| httpMethod | POST |
| httpContentType | JSON |

## 请求参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| advertiser_id | Long | 是 | 123 | 广告主id |  |
| reply_list | ReplyCommentDto[] | 是 |  | 批量回复评论参数 | 具体参数如下表 |
| - reply_to_comment_id | Long | 是 | 51825371 | 回复的评论 ID |  |
| - photo_id | String | 是 | "test_photo_id" | 视频 ID |  |
| - photo_author_id | Long | 是 | 31756 | 视频作者 UserID |  |
| - reply_to_user_id | Long | 是 | 51235 | 被回复的用户 UserID |  |
| - reply_content | String | 是 | "test_reply" | 回复内容 |  |

## 请求样例

### 请求样例 (jsonc)

```
{
    "reply_list": [
        {
            "reply_to_comment_id": 6,
            "photo_id": "test_0765f9e7a2b1",
            "photo_author_id": 16,
            "reply_to_user_id": 4,
            "reply_content": "test_cab83a1809dc"
        }
    ],
    "advertiser_id": 20
}
```

## 返回参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| code | Integer |  | 0 | 状态码 |  |
| message | String |  | "OK" | 错误信息 |  |
| request_id | String |  |  | 请求ID |  |
| data | CommentReplyData |  |  | 返回结果 |  |
| - reply_result_list | AdCommentReplyResultView[] |  |  | 一级评论 |  |
| - reply_to_comment_id | Long |  | 51897 | 回复的评论 ID |  |
| - reply_result | Integer |  | 1 | 回复结果 | 1 成功；2 失败 |

## 返回样例

### 返回样例 (jsonc)

```
{
    "code": 0,
    "message": "OK",
    "request_id": "997a93fead6b4ddbb5a0940abd3ea17f",
    "data": {
        "reply_result_list": [
            {
                "reply_to_comment_id": 6,
                "reply_result": 1
            }
        ]
    }
}
```
