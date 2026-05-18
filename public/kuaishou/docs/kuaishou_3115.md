---
title: 素材包推送
platform: kuaishou
source_url: https://developers.e.kuaishou.com/docs?docType=DSP&documentId=3115&menuId=3858
doc_id: kuaishou_3115
source_id: kuaishou_3115
---
# 素材包推送

## 文档元数据

| 字段 | 值 |
| --- | --- |
| documentId | 3115 |
| documentType | 2 |
| version | 0.0.1 |
| bizName | 效果广告 |
| createTime | 2024-09-14T06:51:43.474Z |

## 概述

可支持单个&amp;批量推送素材包至同快手ID同主体同代理下的其余账户

## 接口信息

| 字段 | 值 |
| --- | --- |
| targetPath | https://ad.e.kuaishou.com/rest/openapi/gw/dsp/photoPackage/share |
| httpMethod | POST |
| httpContentType | JSON |

## 请求参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| advertiser_id | Long | 是 |  | 广告主id |  |
| photo_package_ids | Long[] | 是 |  | 素材包ids |  |
| share_advertiser_ids | Long[] | 是 |  | 要分享的广告主id |  |

## 请求样例

### 请求样例 (javascript)

```
{
  "advertiser_id": 16859321,
  "photo_package_ids": [
    11135761638
  ],
  "share_advertiser_ids": [
    21237604
  ]
}
```

## 返回参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| code | Integer |  |  | 状态码 |  |
| message | String |  |  | 返回信息 |  |
| data | MarketPhotoPackageShareResp |  |  | 信息 |  |
| - success_photo_package_ids | Long[] |  |  | 成功的素材包ID |  |
| - part_success_photo_package_ids | Long[] |  |  | 部分成功的素材包ID |  |
| - failed_photo_package_ids | Long[] |  |  | 失败的素材包ID |  |

## 返回样例

### 返回样例 (javascript)

```
{
  "code": 0,
  "data": {
    "part_success_photo_package_ids": [],
    "failed_photo_package_ids": [],
    "success_photo_package_ids": [
      11135761638
    ]
  },
  "message": "OK",
  "request_id": "EJiEgICwqpWaChiiDiD1puGonjIo8pTwMQ=="
}
```
