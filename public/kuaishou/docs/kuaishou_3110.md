---
title: 查询素材包
platform: kuaishou
source_url: https://developers.e.kuaishou.com/docs?docType=DSP&documentId=3110&menuId=3853
doc_id: kuaishou_3110
source_id: kuaishou_3110
---
# 查询素材包

## 文档元数据

| 字段 | 值 |
| --- | --- |
| documentId | 3110 |
| documentType | 2 |
| version | 0.0.1 |
| bizName | 效果广告 |
| createTime | 2024-09-13T13:38:02.768Z |

## 接口信息

| 字段 | 值 |
| --- | --- |
| targetPath | https://ad.e.kuaishou.com/rest/openapi/gw/dsp/photoPackage/query |
| httpMethod | POST |
| httpContentType | JSON |

## 请求参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| advertiser_id | Long | 是 |  | 广告主id |  |
| photo_package_id | Long |  |  | 素材包id |  |
| name_like | String |  |  | 素材包名称 |  |
| page | Integer |  |  | 当前页 |  |
| page_size | Integer |  |  | 分页大小 |  |

## 请求样例

### 请求样例 (javascript)

```
{
    "advertiser_id": 16859321,
    "photo_package_id": 11135761637,
    "page": 1,
    "page_size": 5
}
```

## 返回参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| code | Integer |  |  | 状态码 |  |
| data | MarketPhotoPackageView |  |  | 信息 |  |
| - total_count | Long |  |  | 总数 |  |
| - details | AdMarketPhotoPackageView[] |  |  | 详情 |  |
| - photo_package_id | Long |  |  | 素材包ID |  |
| - user_id | Long |  |  | 快手ID |  |
| - name | String |  |  | 素材包名称 |  |
| - photo_ids | String[] |  |  | 视频ID集合 |  |
| - status | Integer |  |  | 状态，1-有效，0-删除 |  |
| - creat_time | Long |  |  | 创建时间 |  |
| - update_time | Long |  |  | 更新时间 |  |
| - photo_add_quota | Integer |  |  | 可继续追加的视频数量 |  |
| - advertiser_id | Long |  |  | 广告主id |  |
| message | String |  |  | 返回信息 |  |

## 返回样例

### 返回样例 (javascript)

```
{
    "code": 0,
    "data": {
        "total_count": 1,
        "details": [
            {
                "update_time": 1726124135778,
                "photo_ids": [
                    "5196028205791837691",
                    "5199405903511832514"
                ],
                "photo_add_quota": 8,
                "photo_package_id": 11135761637,
                "creat_time": 1726124135778,
                "user_id": 786136055,
                "name": "MAPI创建素材包1",
                "advertiser_id": 16859321,
                "status": 1
            }
        ]
    },
    "message": "OK",
    "request_id": "EJiEgICwqpWaChiLByC64peonjIoutP7wAM="
}
```
