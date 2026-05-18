---
title: 创意高相关词推荐
platform: kuaishou
source_url: https://developers.e.kuaishou.com/docs?docType=DSP&documentId=2595&menuId=3092
doc_id: kuaishou_2595
source_id: kuaishou_2595
---
# 创意高相关词推荐

## 文档元数据

| 字段 | 值 |
| --- | --- |
| documentId | 2595 |
| documentType | 2 |
| version | 0.0.1 |
| bizName | 效果广告 |
| createTime | 2024-07-04T11:13:59.964Z |

## 接口信息

| 字段 | 值 |
| --- | --- |
| targetPath | https://ad.e.kuaishou.com/rest/openapi/gw/dsp/v1/report/photo_recommend_word |
| httpMethod | POST |
| httpContentType | JSON |

## 请求参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| photo_ids | String[] | 是 |  | 素材ids | 过滤筛选条件，单次查询数量不超过 20 |
| advertiser_id | Long | 是 |  | 账户id | （注：非账户快手 ID），在获取 accessToken 时返回 |

## 请求样例

### 请求样例 (shell)

```
curl "https://ad.e.kuaishou.com/rest/openapi/gw/dsp/v1/report/photo_recommend_word" -X POST \
-H "Access-Token:dff82058d5221da3139e24b865e5f904" \
-H "Content-Type:application/json" \
-d '{"advertiser_id":"139494", "photo_ids":["5189272782789606404"]}'
```

## 返回参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| message | String |  |  | 错误信息 |  |
| data | AdMarketPhotoWordResult |  |  | data |  |
| - details | AdMarketWordIPvView[] |  |  | AdMarketWordIPvView |  |
| - photo_id | String |  |  | 素材id |  |
| - rela_value | Integer |  |  | 相关性分数 | 相关性分数值为 1，2，3，4 |
| - pv | Long |  |  | pv |  |
| - word | String |  |  | 关键词 |  |
| code | Integer |  |  | 1 |  |

## 返回样例

### 返回样例 (jsonc)

```
{
    "code": 0,
    "message": "OK",
    "data": {
        "total_count": 2,
        "details": [
            {
              "word": "茶具推荐",
              "pv": 116,
              "rela_value": 4,
              "photo_id": "5189272782789606404"
            },
            {
              "word": "茶具",
              "pv": 101606,
              "rela_value": 4,
              "photo_id": "5189272782789606404"
            }
        ]
    }
}
```
