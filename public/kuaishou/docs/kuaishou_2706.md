---
title: 上传图文视频
platform: kuaishou
source_url: https://developers.e.kuaishou.com/docs?docType=DSP&documentId=2706&menuId=3441
doc_id: kuaishou_2706
source_id: kuaishou_2706
---
# 上传图文视频

## 文档元数据

| 字段 | 值 |
| --- | --- |
| documentId | 2706 |
| documentType | 2 |
| version | 0.0.1 |
| bizName | 效果广告 |
| createTime | 2024-07-04T11:37:27.137Z |

## 接口信息

| 字段 | 值 |
| --- | --- |
| targetPath | https://ad.e.kuaishou.com/rest/openapi/gw/dsp/upload/atlasPhoto |
| httpMethod | POST |
| httpContentType | JSON |

## 请求参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| advertiser_id | Long | 是 |  | 广告主ID |  |
| pic_ids | String[] | 是 |  | 图片ID | 封面使用第一张图片 |
| audio_bs_key | String |  |  | 音频bs_key |  |
| shield_backward_switch | Boolean |  |  | 上传视频后是否自动同步至快手个人主页, 默认false |  |
| wait_for_transcode | Boolean |  |  | 用同步/异步方式上传视频,默认false |  |

## 请求样例

### 请求样例 (shell)

```
curl --location 'https://ad-star-gateway-api-beta.corp.kuaishou.com/rest/openapi/gw/dsp/upload/atlasPhoto' \
--header 'Access-Token: 1a4b1714f41f98e956fda6a84fd0ad28' \
--header 'Content-Type: application/json' \
--data '{
    "advertiser_id": 139494,
    "pic_ids": [
        "5215449848999249535",
        "5220516399508008924",
        "5206724126146862162"
    ],
    "audio_bs_key": "55a4aebd6b544b6aa4ac99ef9c004c18",
    "shield_backward_switch": false,
    "wait_for_transcode": false
}'
```

## 返回参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| data | PhotoIdSnake |  |  | 返回数据 |  |
| - photo_id | String |  |  | 图文视频ID |  |
| code | Integer |  |  | 返回码 |  |
| message | String |  |  | 返回信息 |  |

## 返回样例

### 返回样例 (jsonc)

```
{
    "code": 0,
    "data": {
        "photo_id": "5254293505944748162"
    },
    "message": "OK",
    "request_id": "EO60gICQgpGOChiqBSC_pPnDsjEorfyysww="
}
```
