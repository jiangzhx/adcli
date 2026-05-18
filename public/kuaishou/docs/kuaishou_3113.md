---
title: 删除素材包
platform: kuaishou
source_url: https://developers.e.kuaishou.com/docs?docType=DSP&documentId=3113&menuId=3856
doc_id: kuaishou_3113
source_id: kuaishou_3113
---
# 删除素材包

## 文档元数据

| 字段 | 值 |
| --- | --- |
| documentId | 3113 |
| documentType | 2 |
| version | 0.0.0 |
| bizName | 效果广告 |
| createTime | 2024-09-14T06:46:10.452Z |

## 接口信息

| 字段 | 值 |
| --- | --- |
| targetPath | https://ad.e.kuaishou.com/rest/openapi/gw/dsp/photoPackage/del |
| httpMethod | POST |
| httpContentType | JSON |

## 请求参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| advertiser_id | Long | 是 |  | 广告主id |  |
| photo_package_ids | Long[] | 是 |  | 素材包ids |  |

## 请求样例

### 请求样例 (javascript)

```
{
  "advertiser_id": 16859321,
  "photo_package_ids": [
    11135761637
  ]
}
```

## 返回参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| code | Integer |  |  | 状态码 |  |
| message | String |  |  | 返回信息 |  |
| data | MarketPhotoPackageDelResp |  |  | 信息 |  |
| - photo_package_ids | Long[] |  |  | 素材包ids |  |

## 返回样例

### 返回样例 (javascript)

```
{
  "code": 0,
  "data": {
    "photo_package_ids": [
      11135761637
    ]
  },
  "message": "OK",
  "request_id": "EJiEgICwqpWaChiqCyCXisqonjIoiqW7mwI="
}
```

## 原始内容

```
删除素材包 /rest/openapi/gw/dsp/photoPackage/del { "advertiser_id": 16859321, "photo_package_ids": [ 11135761637 ] } { "code": 0, "data": { "photo_package_ids": [ 11135761637 ] }, "message": "OK", "request_id": "EJiEgICwqpWaChiqCyCXisqonjIoiqW7mwI=" } advertiser_id Long 广告主id photo_package_ids Long[] 素材包ids code Integer 状态码 message String 返回信息 data MarketPhotoPackageDelResp 信息 photo_package_ids Long[] 素材包ids
```
