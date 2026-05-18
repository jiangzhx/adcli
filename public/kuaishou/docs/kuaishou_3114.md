---
title: 编辑素材包
platform: kuaishou
source_url: https://developers.e.kuaishou.com/docs?docType=DSP&documentId=3114&menuId=3857
doc_id: kuaishou_3114
source_id: kuaishou_3114
---
# 编辑素材包

## 文档元数据

| 字段 | 值 |
| --- | --- |
| documentId | 3114 |
| documentType | 2 |
| version | 0.0.0 |
| bizName | 效果广告 |
| createTime | 2025-04-27T12:09:16.746Z |

## 接口信息

| 字段 | 值 |
| --- | --- |
| targetPath | https://ad.e.kuaishou.com/rest/openapi/gw/dsp/photoPackage/update |
| httpMethod | POST |
| httpContentType | JSON |

## 请求参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| advertiser_id | Long | 是 |  | 广告主id |  |
| photo_package_id | Long | 是 |  | 素材包id |  |
| name | String |  |  | 素材包名称 |  |
| photo_ids | String[] |  |  | 视频ids |  |

## 请求样例

### 请求样例 (javascript)

```
{
    "advertiser_id": 16859321,
    "name": "素材包MAPI编辑",
    "photo_package_id": 11135761638,
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
| data | MarketPhotoPackageUpdateResp |  |  | 信息 |  |
| - photo_package_id | Long |  |  | 素材包id |  |

## 返回样例

### 返回样例 (javascript)

```
{
  "code": 0,
  "data": {
    "photo_package_id": 11135761638
  },
  "message": "OK",
  "request_id": "EJiEgICwqpWaChjDDCCyts6onjIotaL57gQ="
}
```

## 原始内容

```
编辑素材包 /rest/openapi/gw/dsp/photoPackage/update { "advertiser_id": 16859321, "name": "素材包MAPI编辑", "photo_package_id": 11135761638 } { "code": 0, "data": { "photo_package_id": 11135761638 }, "message": "OK", "request_id": "EJiEgICwqpWaChjDDCCyts6onjIotaL57gQ=" } advertiser_id Long 广告主id photo_package_id Long 素材包id name String 素材包名称 photo_ids String[] 视频ids code Integer 状态码 message String 返回信息 data MarketPhotoPackageUpdateResp 信息 photo_package_id Long 素材包id
```
