---
title: 创建优词提量信息
platform: kuaishou
source_url: https://developers.e.kuaishou.com/docs?docType=DSP&documentId=2598&menuId=3322
doc_id: kuaishou_2598
source_id: kuaishou_2598
---
# 创建优词提量信息

## 文档元数据

| 字段 | 值 |
| --- | --- |
| documentId | 2598 |
| documentType | 2 |
| version | 0.0.1 |
| bizName | 效果广告 |
| createTime | 2024-07-04T11:17:59.752Z |

## 接口信息

| 字段 | 值 |
| --- | --- |
| targetPath | https://ad.e.kuaishou.com/rest/openapi/gw/dsp/unit/bid_weight/create |
| httpMethod | POST |
| httpContentType | JSON |

## 请求参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| advertiser_id | Long | 是 |  | 广告主id |  |
| bid_weight_info | AddBidWeightInfoSnake[] | 是 |  | 优词信息 |  |
| - campaign_id | Long |  |  | 计划id |  |
| - info | WeightInfo[] | 是 |  | 词信息 |  |
| - weight | Double | 是 |  | 提量系数 | 1.1 ～ 2 保留1位小数 |
| - word | String | 是 |  | 关键词 |  |
| - unit_id | Long |  |  | 广告组id |  |
| scope | Integer | 是 |  | 添加范围 | 1 - 账户维度，2 - 广告组维度 |

## 请求样例

### 请求样例 (jsonc)

```
{
    "advertiser_id": 139494,
    "scope": 2,
    "bid_weight_info": [
        {
            "unit_id": 3891211196,
            "info": [
                {
                    "word": "yiulld04",
                    "weight": 1.1
                },
              	{
                    "word": "yiulld05",
                    "weight": 1.1
                }
            ]
        }
    ],
  	"bid_weight_info": [
        {
          	"unit_id": 3891211197,
          	"info": [
              	{
                	"word": "yiulld04",
                	"weight": 1.1
              	}
            ]
        }
    ]
}
```

## 返回参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| data | MapiWordBidWeightInfoSnake |  |  | 无返回值 |  |
| - bid_weight | Double |  |  | 提量系数 | 1.1-2区间，最多一位小数 |
| - scope | Integer |  |  | 生效范围 | 1 - 账户为度，2 - 广告组维度 |
| - unit_info | WordBidWeightInfoSnake[] |  |  | 广告组信息 | 优词的scope = 2的情况下会返回该字段 |
| - bid_weight | Double |  |  | 请补充描述详情 |  |
| - campaign_id | Long |  |  | 计划id |  |
| - id | Long |  |  | 请补充描述详情 |  |
| - old_bid_weight | Double |  |  | 请补充描述详情 |  |
| - scope | Integer |  |  | 请补充描述详情 |  |
| - scope_info | ScopeInfoSnake |  |  | 请补充描述详情 |  |
| - scope | Integer |  |  | 请补充描述详情 |  |
| - unit_info | String[] |  |  | 请补充描述详情 |  |
| - unit_id | Long |  |  | 广告组id |  |
| - unit_name | String |  |  | 广告组名称 |  |
| - word | String |  |  | 请补充描述详情 |  |
| - word | String |  |  | 关键词内容 |  |
| code | Integer |  |  | 返回状态码 |  |
| message | String |  |  | 返回状态信息 |  |

## 返回样例

### 返回样例 (jsonc)

```
{
    "code": 0,
    "data": "",
    "message": "OK",
    "request_id": "EL2BgIDw9pmaChi8ECDb8cSS4zEoxtXzpQg="
}
```
