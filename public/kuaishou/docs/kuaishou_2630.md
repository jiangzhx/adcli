---
title: 图片推送
platform: kuaishou
source_url: https://developers.e.kuaishou.com/docs?docType=DSP&documentId=2630&menuId=3354
doc_id: kuaishou_2630
source_id: kuaishou_2630
---
# 图片推送

## 文档元数据

| 字段 | 值 |
| --- | --- |
| documentId | 2630 |
| documentType | 2 |
| version | 0.0.1 |
| bizName | 效果广告 |
| createTime | 2025-04-07T08:33:21.468Z |

## 接口信息

| 字段 | 值 |
| --- | --- |
| targetPath | https://ad.e.kuaishou.com/rest/openapi/gw/dsp/v1/pic/share |
| httpMethod | POST |
| httpContentType | JSON |

## 请求参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| advertiser_id | Long | 是 |  | 广告主id |  |
| image_tokens | String[] |  |  | 分享图片的tokens |  |
| share_advertiser_ids | Long[] | 是 |  | 推送账户 |  |
| pic_ids | String[] |  |  | 分享图片的ids | 分享图片的ids和tokens只能二选一 |
| share_account_type | Integer | 是 |  | 分享账户类型 | 1. 同主体同代理商账户；2. 同主体下账户（需加白使用）；3. 内部账户（需加白使用） |

## 请求样例

### 请求样例 (shell)

```
curl --location --request POST 'https://ad.e.kuaishou.com/rest/openapi/gw/dsp/v1/pic/share' \
--header 'Access-Token: 1e41aab611f75e1c2472f8dd5c540b21' \
--header 'Content-Type: application/json' \
--data-raw '{
    "advertiser_id": 11311124,
    "image_tokens": [
        "market484ccbeaf5a6467495cbc0248d8e83d7.jpg"
    ],
    "share_advertiser_ids": [
        11360719
    ],
    "share_account_type": 1
}'
```

## 返回参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| code | Integer |  |  | 返回码 |  |
| message | String |  |  | 返回信息 |  |
| data | MapiDspPicListData |  |  | 推送图片的详细信息 |  |
| - details | MApiDspSharePic[] |  |  | 详细信息 |  |
| - advertiser_id | Long |  |  | 广告主id |  |
| - image_token | String |  |  | 图片 token |  |
| - pic_id | String |  |  | 加密的照片id |  |

## 返回样例

### 返回样例 (jsonc)

```
{
    "code": 0,
    "data": {
        "details": [
            {
                "pic_id": "5244160298288158171",
                "image_token": "market484ccbeaf5a6467495cbc0248d8e83d7.jpg",
                "advertiser_id": 11360719
            }
        ]
    },
    "message": "OK",
    "request_id": "EMqAgIDAi5a1ChiKAiCx-aKNgzEo5ayr-gw="
}
```

## 原始内容

```
图片推送 /rest/openapi/gw/dsp/v1/pic/share curl --location --request POST 'https://ad.e.kuaishou.com/rest/openapi/gw/dsp/v1/pic/share' \ --header 'Access-Token: 1e41aab611f75e1c2472f8dd5c540b21' \ --header 'Content-Type: application/json' \ --data-raw '{ "advertiser_id": 11311124, "image_tokens": [ "market484ccbeaf5a6467495cbc0248d8e83d7.jpg" ], "share_advertiser_ids": [ 11360719 ], "share_account_type": 1 }' { "code": 0, "data": { "details": [ { "pic_id": "5244160298288158171", "image_token": "market484ccbeaf5a6467495cbc0248d8e83d7.jpg", "advertiser_id": 11360719 } ] }, "message": "OK", "request_id": "EMqAgIDAi5a1ChiKAiCx-aKNgzEo5ayr-gw=" } advertiser_id Long 广告主id image_tokens String[] 分享图片的tokens share_advertiser_ids Long[] 推送账户 pic_ids String[] 分享图片的ids share_account_type Integer 分享账户类型 code Integer 返回码 message String 返回信息 data MapiDspPicListData 推送图片的详细信息 details MApiDspSharePic[] 详细信息 advertiser_id Long 广告主id image_token String 图片 token pic_id String 加密的照片id
```
