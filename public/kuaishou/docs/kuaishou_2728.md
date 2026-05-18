---
title: 获取商品库类目树
platform: kuaishou
source_url: https://developers.e.kuaishou.com/docs?docType=DSP&documentId=2728&menuId=3461
doc_id: kuaishou_2728
source_id: kuaishou_2728
---
# 获取商品库类目树

## 文档元数据

| 字段 | 值 |
| --- | --- |
| documentId | 2728 |
| documentType | 2 |
| version | 0.0.1 |
| bizName | 效果广告 |
| createTime | 2024-07-04T11:48:24.706Z |

## 接口信息

| 字段 | 值 |
| --- | --- |
| targetPath | https://ad.e.kuaishou.com/rest/openapi/gw/dsp/v1/dpa/category/list |
| httpMethod | POST |
| httpContentType | JSON |

## 请求参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| advertiser_id | Long | 是 |  | advertiser id |  |
| library_id | Long | 是 |  | 类目id |  |

## 请求样例

### 请求样例 (jsonc)

```
{
    "advertiser_id": xxxxx,
    "library_id": xxxxxx
}
```

## 返回参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| code | Integer |  |  | 返回结果状态码 |  |
| message | String |  |  | 返回结果状态信息 |  |
| data | CategoryListViewData |  |  | 商品库类目数据 |  |
| - details | CategoryListView[] |  |  | value |  |
| - value | Long |  |  | 类目ID |  |
| - label | String |  |  | 类目名称 |  |

## 返回样例

### 返回样例 (jsonc)

```
{
  "code": 0,
  "data": {
    "details": [
      {
        "value": 21,
        "label": "居家日用",
        "children": [
          {
            "value": 50012514,
            "label": "防护用品",
            "children": [
              {
                "value": 50003458,
                "label": "口罩",
                "children": null
              }
            ]
          }
        ]
      }
    ]
  },
  "message": "OK",
  "request_id": "EPGAgIDQhpmOrAEYrQIg3tbSm8owKOyamOsP"
}
```
