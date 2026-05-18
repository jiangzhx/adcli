---
title: 查询图片信息 get 接口
platform: kuaishou
source_url: https://developers.e.kuaishou.com/docs?docType=DSP&documentId=2931&menuId=3681
doc_id: kuaishou_2931
source_id: kuaishou_2931
---
# 查询图片信息 get 接口

## 文档元数据

| 字段 | 值 |
| --- | --- |
| documentId | 2931 |
| documentType | 2 |
| version | 0.0.1 |
| bizName | 效果广告 |
| createTime | 2024-07-04T11:35:13.862Z |

## 接口信息

| 字段 | 值 |
| --- | --- |
| targetPath | https://ad.e.kuaishou.com/rest/openapi/v1/file/ad/image/get |
| httpMethod | GET |
| httpContentType | JSON |

## 请求参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| advertiser_id | Long | 是 |  | 广告主 ID | 在获取 access_token 的时候返回 |
| image_token | String |  |  | 图片 token |  |

## 请求样例

### 请求样例 (shell)

```
curl --location --request GET 'https://ad.e.kuaishou.com/rest/openapi/v1/file/ad/image/get' \
--header 'Access-Token: 1e41aab611f75e1c2472f8dd5c540b21' \
--header 'Content-Type: application/json' \
--data-raw '{
    "advertiser_id": 11311124,
    "image_token": "market484ccbeaf5a6467495cbc0248d8e83d7.jpg"
}'
```

## 返回参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| code | Integer |  |  | 返回码 |  |
| message | String |  |  | 返回信息 |  |
| data | ImageGetData |  |  | JSON 返回值 |  |
| - url | String |  |  | 图片预览地址 |  |
| - width | Long |  |  | 图片宽度 |  |
| - height | Long |  |  | 图片高度 |  |
| - size | Long |  |  | 图片大小 |  |
| - format | String |  |  | 图片格式 |  |
| - signature | String |  |  | 图片 MD5 值 |  |
| - image_token | String |  |  | 图片 token | 创建创意时使用 |
| - pic_id | String |  |  | 图片库图片ID |  |
| - pic_type | String |  |  | 图片类型 | 0-默认，5-竖版，6-横版，12-开屏,16-图集 |

## 返回样例

### 返回样例 (jsonc)

```
{
    "code": 0,
    "message": "OK",
    "data": {
        "url": "https://static.yximgs.com/udata/pkg/market484ccbeaf5a6467495cbc0248d8e83d7.jpg",
        "width": 1920,
        "height": 1080,
        "size": 12988,
        "format": "jpg",
        "signature": "8dd39015efc6e85b070974ef0abc8f64",
        "pic_type": 6,
        "image_token": "market484ccbeaf5a6467495cbc0248d8e83d7.jpg",
        "pic_id": "5228116223311661787"
    },
    "request_id": "f711cf8ff5ab47ddaf631261975404b9"
}
```
