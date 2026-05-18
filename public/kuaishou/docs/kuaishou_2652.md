---
title: 魔力建站落地页投放开关接口
platform: kuaishou
source_url: https://developers.e.kuaishou.com/docs?docType=DSP&documentId=2652&menuId=3377
doc_id: kuaishou_2652
source_id: kuaishou_2652
---
# 魔力建站落地页投放开关接口

## 文档元数据

| 字段 | 值 |
| --- | --- |
| documentId | 2652 |
| documentType | 2 |
| version | 0.0.1 |
| bizName | 魔力建站 |
| createTime | 2024-07-04T12:24:13.453Z |

## 接口信息

| 字段 | 值 |
| --- | --- |
| targetPath | https://ad.e.kuaishou.com/rest/openapi/gw/magicsite/v1/group/page/switch |
| httpMethod | POST |
| httpContentType | JSON |

## 请求参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| advertiser_id | Long | 是 | 123123 | 广告主id |  |
| group_id | String | 是 | 123123 | 落地页组id |  |
| page_id | String | 是 | 1312134123 | 落地页id |  |
| switch_action | Integer | 是 | 1 | 开关状态 | 开关，1-打开，0-关闭 |

## 请求样例

### 请求样例 (shell)

```
curl --location --request POST 'http://ad.e.kuaishou.com/rest/openapi/gw/magicsite/v1/group/update' \
--header 'Access-Token: XXXXXXXXXXXXXXXXX' \
  --header 'Content-Type: application/json' \
--data-raw {
  "advertiser_id": 123456,
  "group_id":"123123123123",
  "page_id":"451834589234",
  "switch_action":1
}'
```

## 返回参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| code | Integer |  | code | 1 |  |
| message | String |  | 成功 | 成功 |  |
| data | GroupUsableInfo |  |  | 1 |  |
| - usable | Integer |  | 1 | 开关 |  |

## 返回样例

### 返回样例 (jsonc)

```
{
  "code": 0,
  "message": "OK",
  "data":{
     "usable":1
   }
  "request_id": "d16c5c13738b427788c6df9e1a01db18"
}
```
