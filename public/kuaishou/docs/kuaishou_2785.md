---
title: 应用上架
platform: kuaishou
source_url: https://developers.e.kuaishou.com/docs?docType=DSP&documentId=2785&menuId=3523
doc_id: kuaishou_2785
source_id: kuaishou_2785
---
# 应用上架

## 文档元数据

| 字段 | 值 |
| --- | --- |
| documentId | 2785 |
| documentType | 2 |
| version | 0.0.1 |
| bizName | 效果广告 |
| createTime | 2024-07-04T11:57:14.307Z |

## 接口信息

| 字段 | 值 |
| --- | --- |
| targetPath | https://ad.e.kuaishou.com/rest/openapi/gw/dsp/appcenter/app/online |
| httpMethod | POST |
| httpContentType | JSON |

## 请求参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| advertiser_id | Long | 是 |  | 广告主id |  |
| package_ids | Long[] | 是 | - | 应用包ID |  |

## 请求样例

### 请求样例 (shell)

```
curl --location 'https://ad.e.kuaishou.com/rest/openapi/gw/dsp/appcenter/app/online' \
--header 'Access-Token: 309140fd130b236962de0773e225934e' \
--header 'Content-Type: application/json' \
--data '{
    "advertiser_id": 900015366,
    "package_ids": [
        1099611634749
    ]
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
    "message": "OK"
}
```
