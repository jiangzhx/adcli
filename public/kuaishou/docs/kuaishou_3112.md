---
title: 从素材包内删除视频
platform: kuaishou
source_url: https://developers.e.kuaishou.com/docs?docType=DSP&documentId=3112&menuId=3855
doc_id: kuaishou_3112
source_id: kuaishou_3112
---
# 从素材包内删除视频

## 文档元数据

| 字段 | 值 |
| --- | --- |
| documentId | 3112 |
| documentType | 2 |
| version | 0.0.0 |
| bizName | 效果广告 |
| createTime | 2024-09-13T13:58:15.090Z |

## 接口信息

| 字段 | 值 |
| --- | --- |
| targetPath | https://ad.e.kuaishou.com/rest/openapi/gw/dsp/photoPackage/removePhotosToPackage |
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
| data | MarketRemovePhotosToPackageResp |  |  | 信息 |  |
| - photo_ids | String[] |  |  | 视频ids |  |

## 返回样例

### 返回样例 (javascript)

```
{
  "code": 0,
  "data": {
    "photo_ids": [
      "5196028205791837691"
    ]
  },
  "message": "OK",
  "request_id": "EJiEgICwqpWaChjwECDa0MaonjIotfeADg=="
}
```
