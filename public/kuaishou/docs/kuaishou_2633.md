---
title: 视频库-批量更新视频功能
platform: kuaishou
source_url: https://developers.e.kuaishou.com/docs?docType=DSP&documentId=2633&menuId=3357
doc_id: kuaishou_2633
source_id: kuaishou_2633
---
# 视频库-批量更新视频功能

## 文档元数据

| 字段 | 值 |
| --- | --- |
| documentId | 2633 |
| documentType | 2 |
| version | 0.0.1 |
| bizName | 效果广告 |
| createTime | 2024-07-04T11:37:47.589Z |

## 接口信息

| 字段 | 值 |
| --- | --- |
| targetPath | https://ad.e.kuaishou.com/rest/openapi/v1/file/ad/video/update |
| httpMethod | POST |
| httpContentType | JSON |

## 请求参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| advertiser_id | Long | 是 |  | 广告主 id |  |
| photo_ids | String[] | 是 |  | 视频 ids， | 不超过 100 个 |
| photo_name | String |  |  | 视频名称 | photo_name 和 photo_tags 填其一即可。photo_name 长度不得超过 100 字符 |
| photo_tag | String[] |  |  | 视频标签 | 单个标签长度不能超过 10，只支持一个标签 |

## 请求样例

### 请求样例 (shell)

```
curl --location --request POST 'https://ad.e.kuaishou.com/rest/openapi/v1/file/ad/video/update' \
--header 'Access-Token: 1e41aab611f75e1c2472f8dd5c540b21' \
--header 'Content-Type: application/json' \
--data-raw '{
    "advertiser_id" : 11311124,
    "photo_ids" : ["5238249419979025844"],
    "photo_name" : "视频名称",
    "photo_tag": ["标签1"]
}'
```

## 返回参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| code | Integer |  |  | 返回码 |  |
| data | PhotoUpdateResultSnake |  |  | JSON 返回值 |  |
| - photo_ids | String[] |  |  | 视频 ids， |  |
| message | String |  |  | 返回信息 |  |

## 返回样例

### 返回样例 (jsonc)

```
{
    "code": 0,
    "message": "OK",
    "data": {
        "photo_ids": [
            "5238249419979025844"
        ]
    },
    "request_id": "62c361a29c974b50ab04c704e0eb9c24"
}
```
