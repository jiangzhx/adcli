---
title: 应用商店上下架
platform: kuaishou
source_url: https://developers.e.kuaishou.com/docs?docType=DSP&documentId=2787&menuId=3525
doc_id: kuaishou_2787
source_id: kuaishou_2787
---
# 应用商店上下架

## 文档元数据

| 字段 | 值 |
| --- | --- |
| documentId | 2787 |
| documentType | 2 |
| version | 0.0.1 |
| bizName | 效果广告 |
| createTime | 2024-07-04T11:57:50.730Z |

## 接口信息

| 字段 | 值 |
| --- | --- |
| targetPath | https://ad.e.kuaishou.com/rest/openapi/gw/dsp/appcenter/app/offline/appstores |
| httpMethod | POST |
| httpContentType | JSON |

## 请求参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| advertiser_id | Long | 是 |  | 广告主id |  |
| app_ids | Long[] | 是 | 1 | 应用ID |  |
| offline_stores | String[] | 是 | 1 | 应用商店 |  |

## 请求样例

### 请求样例 (shell)

```
curl --location 'https://ad.e.kuaishou.com/rest/openapi/gw/dsp/appcenter/app/offline/appstores' \
--header 'Access-Token: 309140fd130b236962de0773e225934e' \
--header 'Content-Type: application/json' \
--header 'Cookie: apdid=e8977018-0d93-4c22-8d95-1cbb0a4ab5daaa26501f062a0b9042d0bd60d291b622:1676600940:1' \
--data '{
    "advertiser_id": 900015366,
    "app_ids": [
        2199123262524
    ],
    "offline_stores": ["xiaomi"]
}'
```

## 返回参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| data | BooleanStruct |  |  | JSON 返回值 |  |
| - result | Boolean |  | true | 上报更新结果 |  |
| code | Integer |  |  | 返回码 |  |
| message | String |  |  | 返回信息 |  |

## 返回样例

### 返回样例 (jsonc)

```
{
    "code": 0,
    "data": {
        "result": true
    },
    "message": "OK",
    "request_id": "EMOAgIDQjpmOrAEYhQMg4b_d4PIwKOiKxYgF"
}
```
