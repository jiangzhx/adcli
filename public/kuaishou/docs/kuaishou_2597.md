---
title: 获取优词提量列表
platform: kuaishou
source_url: https://developers.e.kuaishou.com/docs?docType=DSP&documentId=2597&menuId=3321
doc_id: kuaishou_2597
source_id: kuaishou_2597
---
# 获取优词提量列表

## 文档元数据

| 字段 | 值 |
| --- | --- |
| documentId | 2597 |
| documentType | 2 |
| version | 0.0.1 |
| bizName | 效果广告 |
| createTime | 2024-07-04T11:17:36.220Z |

## 接口信息

| 字段 | 值 |
| --- | --- |
| targetPath | https://ad.e.kuaishou.com/rest/openapi/gw/dsp/unit/bid_weight/list |
| httpMethod | POST |
| httpContentType | JSON |

## 请求参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| advertiser_id | Long | 是 |  | 广告主id | 广告主账号ID |
| all_available | Boolean |  |  | 请补充描述详情 |  |
| filter_param | FilterParamSnake |  |  | 筛选 |  |
| - unit_id | Long |  |  | 广告单元ID |  |
| - word | String |  |  | 关键词（模糊匹配） |  |
| page_info | PageInfoSnake | 是 |  | 分页 |  |
| - current_page | Integer | 是 |  | 当前页id |  |
| - page_size | Integer | 是 |  | 页大小 |  |
| - total_count | Long |  |  | 总条数 |  |

## 请求样例

### 请求样例 (jsonc)

```
{
  "advertiser_id": 139494,
  "page_info": {
    "current_page": 1,
    "page_size": 10
  },
  "filter_param": {
    "unit_id": 3891211196,
    "word": "快手科技",
  }
}
```

## 返回参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| data | PageDataListMapiWordBidWeightInfoSnake |  |  | 返回数据内容 |  |
| - current_page | Integer |  |  | 当前页 |  |
| - list | MapiWordBidWeightInfoSnake[] |  |  | 优词信息 |  |
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
| - page_size | Integer |  |  | 页大小 |  |
| - total_count | Long |  |  | 优词数量 |  |
| code | Integer |  |  | 返回状态码 |  |
| message | String |  |  | 返回状态信息 |  |

## 返回样例

### 返回样例 (jsonc)

```
{
  "code": 0,
  "data": {
    "total_count": 2,
    "list": [
      {
        "scope": 2,
        "word": "yiulld02",
        "unit_info": [
          {
            "unit_name": "激励视频-__20240226_11:33_0226_14:30_0226_14:31-1",
            "unit_id": 3891211196,
            "campaign_id": 2004407724
          }
        ],
        "bid_weight": 1.1
      },
      {
        "scope": 2,
        "word": "yiulld01",
        "unit_info": [
          {
            "unit_name": "激励视频-__20240226_11:33_0226_14:30_0226_14:31-1",
            "unit_id": 3891211196,
            "campaign_id": 2004407724
          }
        ],
        "bid_weight": 1.1
      }
    ],
    "current_page": 1,
    "page_size": 10
  },
  "message": "OK",
  "request_id": "EL2BgIDw9pmaChi5DSDM4Yiu4zEo3cHIjA8="
}
```
