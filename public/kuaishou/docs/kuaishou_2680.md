---
title: 评论置顶
platform: kuaishou
source_url: https://developers.e.kuaishou.com/docs?docType=DSP&documentId=2680&menuId=3413
doc_id: kuaishou_2680
source_id: kuaishou_2680
---
# 评论置顶

## 文档元数据

| 字段 | 值 |
| --- | --- |
| documentId | 2680 |
| documentType | 2 |
| version | 0.0.1 |
| bizName | 效果广告 |
| createTime | 2024-07-04T12:10:08.895Z |

## 接口信息

| 字段 | 值 |
| --- | --- |
| targetPath | https://ad.e.kuaishou.com/rest/openapi/gw/dsp/v1/comment/setTop |
| httpMethod | POST |
| httpContentType | JSON |

## 请求参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| advertiser_id | Long | 是 | 100 | 广告主id |  |
| comment_id | Long | 是 | 100 | 评论id |  |
| photo_id | Long | 是 | 100 | 视频id |  |

## 请求样例

### 请求样例 (jsonc)

```
{
  "advertiser_id":10010,
  "comment_id": 634356637492,
  "photo_id": 5196028089786633607
}
```

## 返回参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| code | Integer |  | 1 | 状态码 |  |
| message | String |  | succ | 返回信息 |  |
| data | CommentUpdateStructSnake |  | 100 | 返回结果 |  |
| - comment_id | Long |  | 100 | 评论id |  |

## 返回样例

### 返回样例 (jsonc)

```
{
  "code": 1,
  "message": "succ",
  "data": {
    "comment_id": 634356637492
  }
}
```
