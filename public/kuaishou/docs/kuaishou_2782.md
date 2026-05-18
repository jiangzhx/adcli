---
title: 获取可共享的账号列表
platform: kuaishou
source_url: https://developers.e.kuaishou.com/docs?docType=DSP&documentId=2782&menuId=3519
doc_id: kuaishou_2782
source_id: kuaishou_2782
---
# 获取可共享的账号列表

## 文档元数据

| 字段 | 值 |
| --- | --- |
| documentId | 2782 |
| documentType | 2 |
| version | 0.0.1 |
| bizName | 效果广告 |
| createTime | 2024-07-04T11:56:17.177Z |

## 概述

备注：此接口已提供分页能力，分页参数需要进行填写。

## 接口信息

| 字段 | 值 |
| --- | --- |
| targetPath | https://ad.e.kuaishou.com/rest/openapi/gw/dsp/appcenter/app/canShare/accountList |
| httpMethod | POST |
| httpContentType | JSON |

## 请求参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| advertiser_id | Long | 是 |  | 广告主id |  |
| search_account_id | Long[] |  |  | 精确查找的账号 | 搜索账号个数上限为500个 |
| current_page | Integer | 是 |  | 当前页 | 默认需要填写10，单页上限为500个 |
| page_size | Integer | 是 |  | 分页大小 | 默认需要填写1 |

## 请求样例

### 请求样例 (shell)

```
curl --location --request POST 'https://ad.e.kuaishou.com/rest/openapi/gw/dsp/appcenter/app/canShare/accountList' \
--header 'Access-Token: e6d2a9a50d3ba728c77ac79f3a063d2c' \
--header 'Content-Type: application/json' \
--header 'Cookie: apdid=e8977018-0d93-4c22-8d95-1cbb0a4ab5daaa26501f062a0b9042d0bd60d291b622:1685348999:1' \
--data-raw '{
    "advertiser_id": 12078245,
    "current_page": 1,
    "page_size": 10
}'
```

## 返回参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| data | PageDataListShareAccountResp542Snake |  |  | 请补充描述详情 |  |
| - current_page | Integer |  |  | 当前页 |  |
| - list | ShareAccountResp352Snake348[] |  |  | 账号列表的返回参数 |  |
| - account_id | Long |  |  | 账号ID |  |
| - account_name | String |  |  | 账号名称 |  |
| - page_size | Integer |  |  | 页码大小 |  |
| - total_count | Long |  |  | 总数 |  |
| code | Integer |  |  | 返回码 |  |
| message | String |  |  | 错误信息 |  |

## 返回样例

### 返回样例 (jsonc)

```
{
    "code": 0,
    "data": {
      	"total_count": 4,
        "current_page": 1,
        "page_size": 10,
        "list": [
            {
                "account_id": 16855298,
                "account_name": "舞动星闪耀-小舞"
            },
            {
                "account_id": 13918416,
                "account_name": "世界online-9"
            },
            {
                "account_id": 13918417,
                "account_name": "世界online-10"
            },
            {
                "account_id": 14434516,
                "account_name": "德里克克德"
            }
        ]
    },
    "message": "OK",
    "request_id": "EMmAgICA5oS1ChjvBCD5wLH0iDEo_Prh2wQ="
}
```
