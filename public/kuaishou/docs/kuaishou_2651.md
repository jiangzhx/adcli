---
title: 魔力建站落地页组删除接口
platform: kuaishou
source_url: https://developers.e.kuaishou.com/docs?docType=DSP&documentId=2651&menuId=3376
doc_id: kuaishou_2651
source_id: kuaishou_2651
---
# 魔力建站落地页组删除接口

## 文档元数据

| 字段 | 值 |
| --- | --- |
| documentId | 2651 |
| documentType | 2 |
| version | 0.0.1 |
| bizName | 魔力建站 |
| createTime | 2024-07-04T12:23:57.309Z |

## 接口信息

| 字段 | 值 |
| --- | --- |
| targetPath | https://ad.e.kuaishou.com/rest/openapi/gw/magicsite/v1/group/delete |
| httpMethod | POST |
| httpContentType | JSON |

## 请求参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| advertiser_id | Long | 是 | 123456 | 广告主id |  |
| group_id | String | 是 | 12342134 | 组id |  |

## 请求样例

### 请求样例 (shell)

```
curl --location --request POST 'http://ad.e.kuaishou.com/rest/openapi/gw/magicsite/v1/group/update' \
--header 'Access-Token: XXXXXXXXXXXXXXXXX' \
  --header 'Content-Type: application/json' \
--data-raw {
  "advertiser_id": 123456,
  "group_id":"123123123123"
}'
```

## 返回参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| code | Integer |  | 1 | 成功/失败 状态码 |  |
| message | String |  | 成功 | 成功/失败 的message信息 |  |
| data | GroupIdData |  |  | data |  |
| - group_id | String |  | 2214030995198595 | 魔力建站落地页组id |  |

## 返回样例

### 返回样例 (jsonc)

```
{
  "code": 0,
  "message": "OK",
  "request_id": "d16c5c13738b427788c6df9e1a01db18"
}
```
