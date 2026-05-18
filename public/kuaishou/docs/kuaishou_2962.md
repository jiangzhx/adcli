---
title: 评论树查询
platform: kuaishou
source_url: https://developers.e.kuaishou.com/docs?docType=DSP&documentId=2962&menuId=3713
doc_id: kuaishou_2962
source_id: kuaishou_2962
---
# 评论树查询

## 文档元数据

| 字段 | 值 |
| --- | --- |
| documentId | 2962 |
| documentType | 2 |
| version | 0.0.1 |
| bizName | 效果广告 |
| createTime | 2024-07-04T12:08:59.601Z |

## 接口信息

| 字段 | 值 |
| --- | --- |
| targetPath | https://ad.e.kuaishou.com/rest/openapi/v1/comment/tree |
| httpMethod | POST |
| httpContentType | JSON |

## 请求参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| advertiser_id | Long | 是 | 123 | 广告主 ID | 在获取 access_token 的时候返回 |
| comment_id | Long | 是 | 123456 | 评论 ID |  |

## 请求样例

### 请求样例 (jsonc)

```
{
    "comment_id": 90,
    "advertiser_id": 42
}
```

## 返回参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| code | Integer |  | 0 | 状态码 |  |
| message | String |  | "OK" | 错误信息 |  |
| request_id | String |  |  | 请求ID |  |
| data | CommentTreeData |  |  | 返回结果 |  |
| - root_comment_detail | TreeAdCommentDetailView[] |  |  | 一级评论 |  |
| - comment_id | Long |  | 123456 | 评论 ID |  |
| - root_comment_id | Long |  | 12345 | 一级评论 ID |  |
| - comment_author_id | Long |  | 12314234 | 评论发布者 UserID |  |
| - photo_id | String |  | "test_photo_id" | 视频 ID |  |
| - photo_author_id | Long |  | 58917498 | 视频作者 UserID |  |
| - comment_level | Integer |  | 1 | 评论层级 |  |
| - comment_content | String |  | "test_comment_content" | 评论内容 |  |
| - fav_num | Long |  | 5 | 点赞数 |  |
| - post_time | Long |  | 1677469580796 | 评论发布时间 | 毫秒时间戳 |
| - nickname | String |  | "test_nick_name" | 评论发布者昵称 |  |
| - reply_status | Integer |  | 2 | 回复状态 | 1：未回复，2：已回复 |
| - shield_status | Integer |  | 1 | 隐藏状态 | 1：未隐藏，2：已隐藏 |
| - photo_name | String |  | "test_photo_name" | 视频名称 |  |
| - photo_tags | String[] |  | ["tag"] | 视频标签 |  |
| - is_root_comment_forbid | Boolean |  | 1 | 一级评论是否被隐藏 |  |
| - shield_type | Integer |  | 1 | 屏蔽类型 | 1：评论内容关键词，3：手动屏蔽，4：社区自动屏蔽，5：用户昵称关键词，6：快手 ID |
| - emotion_url | String |  | "test_emotion_url" | 表情url |  |
| - is_top_comment | Boolean |  | false | 是否被置顶 |  |
| - child_comment_detail_list | TreeAdCommentDetailView[] |  |  | 二级评论 | 最多返回 1000 条 |
| - comment_id | Long |  | 123456 | 评论 ID |  |
| - root_comment_id | Long |  | 12345 | 一级评论 ID |  |
| - comment_author_id | Long |  | 12314234 | 评论发布者 UserID |  |
| - photo_id | String |  | "test_photo_id" | 视频 ID |  |
| - photo_author_id | Long |  | 58917498 | 视频作者 UserID |  |
| - comment_level | Integer |  | 1 | 评论层级 |  |
| - comment_content | String |  | "test_comment_content" | 评论内容 |  |
| - fav_num | Long |  | 5 | 点赞数 |  |
| - post_time | Long |  | 1677469580796 | 评论发布时间 | 毫秒时间戳 |
| - nickname | String |  | "test_nick_name" | 评论发布者昵称 |  |
| - reply_status | Integer |  | 2 | 回复状态 | 1：未回复，2：已回复 |
| - shield_status | Integer |  | 1 | 隐藏状态 | 1：未隐藏，2：已隐藏 |
| - photo_name | String |  | "test_photo_name" | 视频名称 |  |
| - photo_tags | String[] |  | ["tag"] | 视频标签 |  |
| - is_root_comment_forbid | Boolean |  | 1 | 一级评论是否被隐藏 |  |
| - shield_type | Integer |  | 1 | 屏蔽类型 | 1：评论内容关键词，3：手动屏蔽，4：社区自动屏蔽，5：用户昵称关键词，6：快手 ID |
| - emotion_url | String |  | "test_emotion_url" | 表情url |  |
| - is_top_comment | Boolean |  | false | 是否被置顶 |  |

## 返回样例

### 返回样例 (jsonc)

```
{
    "code": 0,
    "message": "OK",
    "request_id": "997a93fead6b4ddbb5a0940abd3ea17f",
    "data": {
        "root_comment_detail": {
            "comment_id": 31,
            "root_comment_id": 1,
            "comment_author_id": 35,
            "photo_id": "test_90ecbc8734c9",
            "photo_author_id": 89,
            "comment_level": 43,
            "comment_content": "test_e034a2e9a550",
            "fav_num": 30,
            "post_time": 51,
            "nickname": "test_8052e3a1dd2d",
            "reply_status": 62,
            "shield_status": 99,
            "shield_type": 82,
            "photo_name": "test_44e63e60a4b6",
            "photo_tags": [
                "test_e6b79d52af25"
            ],
            "is_root_comment_forbid": true,
            "emotion_url": "test_db593c33320b",
            "is_top_comment": true
        },
        "child_comment_detail_list": [
            {
                "comment_id": 14,
                "root_comment_id": 4,
                "comment_author_id": 4,
                "photo_id": "test_d4675c08ceda",
                "photo_author_id": 51,
                "comment_level": 63,
                "comment_content": "test_e3f7584667b3",
                "fav_num": 66,
                "post_time": 4,
                "nickname": "test_ece8e60d49c7",
                "reply_status": 10,
                "shield_status": 66,
                "shield_type": 79,
                "photo_name": "test_f0110e192b7d",
                "photo_tags": [
                    "test_4d7b77b90332"
                ],
                "is_root_comment_forbid": true,
                "emotion_url": "test_72e0ab12c30f",
                "is_top_comment": false
            }
        ]
    }
}
```
