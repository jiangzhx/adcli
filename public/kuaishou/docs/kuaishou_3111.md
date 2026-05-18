---
title: 添加视频至素材包
platform: kuaishou
source_url: https://developers.e.kuaishou.com/docs?docType=DSP&documentId=3111&menuId=3854
doc_id: kuaishou_3111
source_id: kuaishou_3111
---
# 添加视频至素材包

## 文档元数据

| 字段 | 值 |
| --- | --- |
| documentId | 3111 |
| documentType | 2 |
| version | 0.0.0 |
| bizName | 效果广告 |
| createTime | 2024-09-13T13:54:45.797Z |

## 接口信息

| 字段 | 值 |
| --- | --- |
| targetPath | https://ad.e.kuaishou.com/rest/openapi/gw/dsp/photoPackage/addPhotosToPackage |
| httpMethod | POST |
| httpContentType | JSON |

## 请求参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| advertiser_id | Long | 是 |  | 广告主id |  |
| photo_package_id | Long | 是 |  | 素材包id |  |
| photo_ids | String[] | 是 |  | 视频ids |  |

## 请求样例

### 请求样例 (javascript)

```
{
  "advertiser_id": 16859321,
  "photo_package_id": 11135761637,
  "photo_ids": [
    "5196028205791837691"
  ]
}
```

## 返回参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| code | Integer |  |  | 状态码 |  |
| message | String |  |  | 返回信息 |  |
| data | MarketPhotoPackageAddResp |  |  | 信息 |  |
| - success_photo_ids | String[] |  |  | 成功视频ids |  |
| - dup_photo_ids | String[] |  |  | 重复视频ids |  |

## 返回样例

### 返回样例 (javascript)

```
{
  "code": 0,
  "data": {
    "success_photo_ids": [
      "5196028205791837691"
    ],
    "dup_photo_ids": []
  },
  "message": "OK",
  "request_id": "EJiEgICwqpWaChj1ByChu8WonjIoq8Llsg8="
}
```
