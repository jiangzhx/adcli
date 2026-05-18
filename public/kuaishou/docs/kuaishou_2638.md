---
title: 视频库-视频关联创意数查询
platform: kuaishou
source_url: https://developers.e.kuaishou.com/docs?docType=DSP&documentId=2638&menuId=3362
doc_id: kuaishou_2638
source_id: kuaishou_2638
---
# 视频库-视频关联创意数查询

## 文档元数据

| 字段 | 值 |
| --- | --- |
| documentId | 2638 |
| documentType | 2 |
| version | 0.0.1 |
| bizName | 效果广告 |
| createTime | 2025-09-21T03:09:56.786Z |

## 接口信息

| 字段 | 值 |
| --- | --- |
| targetPath | https://ad.e.kuaishou.com/rest/openapi/v1/file/ad/video/relate/creatives |
| httpMethod | POST |
| httpContentType | JSON |

## 请求参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| advertiser_id | Long | 是 | 1 | 广告主ID | 在获取 access_token 的时候返回 |
| photo_ids | String[] | 是 | 1 | 视频id | 最大 20 个，可以动态配置 |

## 请求样例

### 请求样例 (shell)

```
curl --location --request GET 'https://ad.e.kuaishou.com/rest/openapi/v1/file/ad/video/relate/creatives' \
--header 'Access-Token: 1e41aab611f75e1c2472f8dd5c540b21' \
--header 'Content-Type: application/json' \
--data-raw '{
    "advertiser_id": 11311124,
    "photo_ids": [
        "5228679230762349823",
        "5251760176597172988"
    ]
}'
```

## 返回参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| code | Integer |  | 1 | 状态码 |  |
| message | String |  | 1 | 返回信息 |  |
| data | RelatedCreatives |  | 1 | 关联创意信息 |  |
| - related_creatives | AdGatePhotoRelateCreativesView[] |  |  | 与视频相关联的创意的信息 | 关联创意数=审核中+投放中的创意，仅包含自定义创意，程序化创意数量暂未计入 |
| - photo_id | Long |  |  | 视频id |  |
| - creative_count | Long |  | 1 | 自定义创意数量 |  |
| - advanced_creative_count | Long |  | 1 | 程序化创意数量 |  |
| - advanced_creative_ids | Long[] |  |  | 程序化创意关联的unitid |  |
| - creatives | AdGateRelateCreativesView[] |  |  | 与视频关联的创意的信息 |  |
| - creative_id | Long |  | 1 | 自定义创意id |  |
| - creative_name | String |  | 1 | 创意名称 |  |
| - smart_creative_count | Long |  | 1 | 关联的智能创意数量 |  |
| - smart_creative_ids | Long[] |  | - | 智能创意关联的unitid |  |

## 返回样例

### 返回样例 (jsonc)

```
{
    "code": 0,
    "data": {
        "related_creatives": [
            {
                "advanced_creative_count": 0,
                "advanced_creative_ids": [],
                "photo_id": "5228679230762349823",
                "creative_count": 2,
                "creatives": [
                    {
                        "creative_name": "自定义创意_竖版视频_创意6",
                        "creative_id": 20473687787
                    },
                    {
                        "creative_name": "自定义创意_竖版视频_创意1",
                        "creative_id": 10375405875
                    }
                ]
            },
            {
                "advanced_creative_count": 0,
                "advanced_creative_ids": [],
                "smart_creative_count": 0,
                "smart_creative_ids": [],
                "photo_id": "5251760176597172988",
                "creative_count": 1,
                "creatives": [
                    {
                        "creative_name": "自定义创意_竖版视频_创意4",
                        "creative_id": 20473687789
                    }
                ]
            }
        ]
    },
    "message": "OK",
    "request_id": "EMSAgICwzKu1ChiRCSDXg-6OgzEo6fT_8wg="
}
```

## 原始内容

```
视频库-视频关联创意数查询 /rest/openapi/v1/file/ad/video/relate/creatives curl --location --request GET 'https://ad.e.kuaishou.com/rest/openapi/v1/file/ad/video/relate/creatives' \ --header 'Access-Token: 1e41aab611f75e1c2472f8dd5c540b21' \ --header 'Content-Type: application/json' \ --data-raw '{ "advertiser_id": 11311124, "photo_ids": [ "5228679230762349823", "5251760176597172988" ] }' { "code": 0, "data": { "related_creatives": [ { "advanced_creative_count": 0, "advanced_creative_ids": [], "photo_id": "5228679230762349823", "creative_count": 2, "creatives": [ { "creative_name": "自定义创意_竖版视频_创意6", "creative_id": 20473687787 }, { "creative_name": "自定义创意_竖版视频_创意1", "creative_id": 10375405875 } ] }, { "advanced_creative_count": 0, "advanced_creative_ids": [], "smart_creative_count": 1, "smart_creative_ids": [], "photo_id": "5251760176597172988", "creative_count": 1, "creatives": [ { "creative_name": "自定义创意_竖版视频_创意4", "creative_id": 20473687789 } ] } ] }, "message": "OK", "request_id": "EMSAgICwzKu1ChiRCSDXg-6OgzEo6fT_8wg=" } advertiser_id Long 广告主ID photo_ids String[] 视频id code Integer 状态码 message String 返回信息 data RelatedCreatives 关联创意信息 related_creatives AdGatePhotoRelateCreativesView[] 与视频相关联的创意的信息 photo_id Long 视频id creative_count Long 自定义创意数量 advanced_creative_count Long 程序化创意数量 advanced_creative_ids Long[] 程序化创意关联的unitid creatives AdGateRelateCreativesView[] 与视频关联的创意的信息 creative_id Long 自定义创意id creative_name String 创意名称 smart_creative_count Long 关联的智能创意数量 smart_creative_ids Long[] 智能创意关联的unitid
```
