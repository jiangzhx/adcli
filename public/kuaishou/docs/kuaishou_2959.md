---
title: 评论列表数据查询
platform: kuaishou
source_url: https://developers.e.kuaishou.com/docs?docType=DSP&documentId=2959&menuId=3710
doc_id: kuaishou_2959
source_id: kuaishou_2959
---
# 评论列表数据查询

## 文档元数据

| 字段 | 值 |
| --- | --- |
| documentId | 2959 |
| documentType | 2 |
| version | 0.0.1 |
| bizName | 效果广告 |
| createTime | 2024-07-04T12:08:34.035Z |

## 接口信息

| 字段 | 值 |
| --- | --- |
| targetPath | https://ad.e.kuaishou.com/rest/openapi/v1/comment/list |
| httpMethod | POST |
| httpContentType | JSON |

## 请求参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| advertiser_id | Long | 是 | 123456 | 广告主 ID | 在获取 access_token 的时候返回 |
| comment_content | String |  | "商品" | 评论内容 | 模糊匹配 |
| reply_status | Integer |  | 1 | 回复状态 | 1：未回复，2：已回复 |
| comment_level | Integer |  | 1 | 评论层级 | 1：一级评论，2：二级评论 |
| post_time_start | Long |  | 1676882918528 | 评论发布起始时间 | 与 post_time_end 同时传或同时不传；过滤筛选条件，毫秒级时间戳 |
| post_time_end | Long |  | 1676882931137 | 评论发布截止时间 | 与 post_time_start 同时传或同时不传；过滤筛选条件，毫秒级时间戳 |
| shield_status | Integer |  | 1 | 隐藏状态 | 1：未隐藏，2：已隐藏 |
| photo_query_value | String |  | "xxx" | 视频搜索参数 | 可输入视频 ID 或视频名称进行查询 |
| photo_tags | String[] |  | ["tag"] | 视频标签 |  |
| page | Integer |  | 1 | 请求的页码数 | 默认为 1 |
| page_size | Integer |  | 20 | 请求的每页行数 | 默认为 20，每次最多100 |

## 请求样例

### 请求样例 (jsonc)

```
{
    "comment_content": "",
    "reply_status": 1,
    "comment_level": 1,
    "post_time_start": 1676876810395,
    "post_time_end": 1676876820194,
    "shield_status": 1,
    "photo_query_value": "",
    "photo_tags": [
        ""
    ],
    "advertiser_id": 123456,
    "page": 1,
    "page_size": 20
}
```

## 返回参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| code | Integer |  | 0 | 返回码 |  |
| message | String |  | "OK" | 返回信息 |  |
| data | CommentList |  |  | JSON 返回值 |  |
| - total_count | Long |  | 1 | 符合条件的记录总数 |  |
| - details | AdCommentDetailView[] |  |  | 返回值详情 |  |
| - comment_id | Long |  | 51235133 | 评论 ID |  |
| - root_comment_id | Long |  | 52351235 | 一级评论 ID |  |
| - comment_author_id | Long |  | 341234 | 评论发布者 UserID |  |
| - photo_id | String |  | "test_photo_id" | 视频 ID |  |
| - photo_author_id | Long |  | 51345 | 视频作者 UserID |  |
| - comment_level | Integer |  | 1 | 评论层级 | 1：一级评论，2：二级评论 |
| - comment_content | String |  | "test_comment" | 评论内容 |  |
| - fav_num | Long |  | 23 | 点赞数 |  |
| - post_time | Long |  | 1676961890024 | 评论发布时间 | 毫秒级时间戳 |
| - nickname | String |  | "test_nick" | 评论发布者昵称 |  |
| - reply_status | Integer |  | 1 | 回复状态 | 1：未回复，2：已回复 |
| - shield_status | Integer |  | 1 | 隐藏状态 | 1：未隐藏，2：已隐藏 |
| - photo_tags | String[] |  | ["tag"] | 视频标签 |  |
| - is_root_comment_forbid | Boolean |  | false | 一级评论是否被隐藏 |  |
| - shield_type | Integer |  | 1 | 屏蔽类型 | 1：评论内容关键词，3：手动屏蔽，4：社区自动屏蔽，5：用户昵称关键词，6：快手 ID |
| - emotion_url | String |  | "test_url" | 表情url |  |
| - is_top_comment | Boolean |  | false | 是否被置顶 |  |
| request_id | String |  |  | 请求ID |  |

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
                "comment_id": 1234567899,
                "root_comment_id": 123456789,
                "comment_author_id": 123,
                "photo_id": "xxx",
                "photo_author_id": 51256,
                "comment_level": 1,
                "comment_content": "xxxxxx",
                "fav_num": 59,
                "post_time": 1676876810395,
                "nickname": "xxxxx",
                "reply_status": 1,
                "shield_status": 1,
                "shield_type": 2,
                "photo_name": "xxxxx",
                "photo_tags": [
                    "xx"
                ],
                "is_root_comment_forbid": true,
                "emotion_url": "xxxxx",
                "is_top_comment": false
            }
        ]
    }
}
```
