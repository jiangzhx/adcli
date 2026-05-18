---
title: 查询图片list接口
platform: kuaishou
source_url: https://developers.e.kuaishou.com/docs?docType=DSP&documentId=2629&menuId=3353
doc_id: kuaishou_2629
source_id: kuaishou_2629
---
# 查询图片list接口

## 文档元数据

| 字段 | 值 |
| --- | --- |
| documentId | 2629 |
| documentType | 2 |
| version | 0.0.1 |
| bizName | 效果广告 |
| createTime | 2024-07-04T11:35:38.367Z |

## 接口信息

| 字段 | 值 |
| --- | --- |
| targetPath | https://ad.e.kuaishou.com/rest/openapi/v1/file/ad/image/list |
| httpMethod | POST |
| httpContentType | JSON |

## 请求参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| advertiser_id | Long | 是 | 12345667778 | 广告主ID | 在获取 access_token 的时候返回 |
| start_date | String |  | 2021-09-11 | 开始时间 | 过滤筛选条件，格式为yyyy-MM-dd`与end_date同时传或同时不传 |
| end_date | String |  | 2021-11-30 | 结束时间 | 过滤筛选条件，格式为yyyy-MM-dd`与end_date同时传或同时不传 |
| pic_types | Integer[] |  | [1,2] | 图片类型 | 0-默认，5-竖版，6-横版，12-开屏。不填，则获取所有类型图片。 |
| page | Integer | 是 | 1 | 请求的页码数 | `默认为1 |
| page_size | Integer | 是 | 20 | 每页行数 | `默认为20，最高500。 |
| image_token | String |  | "jkh12nfjlh2j" | 图片token |  |
| signature | String |  | "12jklhr2" | 图片MD5 |  |
| image_tokens | String[] |  |  | 图片token数组，最多100个 |  |

## 请求样例

### 请求样例 (shell)

```
curl --location --request GET 'https://ad.e.kuaishou.com/rest/openapi/v1/file/ad/image/list' \
--header 'Access-Token: 1e41aab611f75e1c2472f8dd5c540b21' \
--header 'Content-Type: application/json' \
--data-raw '{
    "advertiser_id": 11311124,
    "start_date": "2023-11-01",
    "end_date": "2023-11-18",
    "pic_types": [
        5,
        6
    ],
    "page": 1,
    "page_size": 20
}'
```

## 返回参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| code | Integer |  | 0 | 状态码 |  |
| message | String |  | "OK" | 返回信息 |  |
| data | AdMarketImageUploadView |  | 1 | 详细信息 |  |
| - total_count | Long |  | 58 | 图片总数 |  |
| - details | Details423[] |  | [{}] | 详情 |  |
| - size | Long |  | 267023 | 图片大小 |  |
| - signature | String |  | c353625c4792915fcac1f009bf11fea72 | 图片MD5 |  |
| - image_token | String |  | marketd0f142fd769748b19d1967423cab2493.jpg | 图片token | `创建创意时使用 |
| - format | String |  | jpg | 图片格式 |  |
| - width | Long |  | 720 | 图片宽度 |  |
| - pic_type | Integer |  | 0 | 图片类型 | 0-默认，5-竖版，6-横版，12-开屏，16-图集 |
| - url | String |  | http://static.yximgs.com/udata/pkg/marketd0f142fd769748b19d1967423cab2493.jpg | 图片预览地址 |  |
| - height | Long |  | 1280 | 图片高度 |  |
| - pic_id | String |  | hfdsa1h23hl6d7 | 图片库图片id（已加密） |  |

## 返回样例

### 返回样例 (jsonc)

```
{
    "code": 0,
    "data": {
        "total_count": 1,
        "details": [
            {
                "url": "https://static.yximgs.com/udata/pkg/aW1hZ2UtcGtnOmFkX2RzcF9pbWFnZV91cGxvYWQ6MTM0NTU3MjczNjpNRVJDSEFOVDpbQkA1ZjkzOTA5ZToxMDQ4OTIwMjM5NzM2.png",
                "width": 1686,
                "height": 948,
                "size": 43804,
                "format": "mjpeg",
                "signature": "c5d1a2cb79017b4f75d8af6e3357f9ee",
                "name": "image (3).png",
                "pic_type": 6,
                "image_token": "aW1hZ2UtcGtnOmFkX2RzcF9pbWFnZV91cGxvYWQ6MTM0NTU3MjczNjpNRVJDSEFOVDpbQkA1ZjkzOTA5ZToxMDQ4OTIwMjM5NzM2.png",
                "pic_id": "5255700773077995990",
                "pic_tag": [
                    "磁力引擎",
                    "这是一个长标签"
                ],
                "create_time": 1699858653896
            }
        ]
    },
    "message": "OK",
    "request_id": "ELWAgIDQxNGIChjuBSDlia2ShTIo5ZXN4Qk="
}
```
