---
title: 视频库-删除视频标签
platform: kuaishou
source_url: https://developers.e.kuaishou.com/docs?docType=DSP&documentId=2635&menuId=3359
doc_id: kuaishou_2635
source_id: kuaishou_2635
---
# 视频库-删除视频标签

## 文档元数据

| 字段 | 值 |
| --- | --- |
| documentId | 2635 |
| documentType | 2 |
| version | 0.0.1 |
| bizName | 效果广告 |
| createTime | 2024-07-04T11:38:25.211Z |

## 接口信息

| 字段 | 值 |
| --- | --- |
| targetPath | https://ad.e.kuaishou.com/rest/openapi/v1/file/ad/video/tag/delete |
| httpMethod | POST |
| httpContentType | JSON |

## 请求参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| advertiser_id | Long | 是 |  | 广告主 id |  |
| photo_tag | String[] | 是 |  | 视频标签 | 最多 10 个 |

## 请求样例

### 请求样例 (shell)

```
curl --location --request POST 'https://ad.e.kuaishou.com/rest/openapi/v1/file/ad/video/tag/delete' \
--header 'Access-Token: 1e41aab611f75e1c2472f8dd5c540b21' \
--header 'Content-Type: application/json' \
--data-raw '{
    "advertiser_id" : 11311124,
    "photo_tag": ["标签1", "标签2"]
}'
```

## 返回参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| code | Integer |  |  | 返回码 |  |
| data | PhotoDeleteTagResultSnake |  |  | 返回数据 |  |
| - photo_tag | String[] |  |  | - |  |
| message | String |  |  | 返回信息 |  |

## 返回样例

### 返回样例 (jsonc)

```
{
    "code": 0,
    "message": "OK",
    "data": {
        "photo_tag": [
            "标签1",
            "标签2"
        ]
    },
    "request_id": "00aa2f969e1544349000aa09a2248434"
}
```
