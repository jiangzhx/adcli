---
title: 获取可共享的主体列表
platform: kuaishou
source_url: https://developers.e.kuaishou.com/docs?docType=DSP&documentId=3024&menuId=3518
doc_id: kuaishou_3024
source_id: kuaishou_3024
---
# 获取可共享的主体列表

## 文档元数据

| 字段 | 值 |
| --- | --- |
| documentId | 3024 |
| documentType | 2 |
| version | 0.0.1 |
| bizName | 效果广告 |
| createTime | 2024-07-04T11:56:01.622Z |

## 概述

此接口只有在跨主体共享白名单内才会有数据返回，如没有相关场景，则可忽略此接口。

## 接口信息

| 字段 | 值 |
| --- | --- |
| targetPath | https://ad.e.kuaishou.com/rest/openapi/gw/dsp/appcenter/app/canShare/corpList |
| httpMethod | POST |
| httpContentType | JSON |

## 请求参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| advertiser_id | Long | 是 |  | 广告主id |  |

## 请求样例

### 请求样例 (shell)

```
curl --location --request POST 'https://ad.e.kuaishou.com/rest/openapi/gw/dsp/appcenter/app/canShare/corpList' \
--header 'Access-Token: e6d2a9a50d3ba728c77ac79f3a063d2c' \
--header 'Content-Type: application/json' \
--header 'Cookie: apdid=e8977018-0d93-4c22-8d95-1cbb0a4ab5daaa26501f062a0b9042d0bd60d291b622:1685348999:1' \
--data-raw '{
    "advertiser_id": 12078245
}'
```

## 返回参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| data | PageDataListShareCorpResp943Snake |  |  | json返回值 |  |
| - list | ShareCorpResp564Snake[] |  |  | 主体列表的返回参数 |  |
| - corp_id | Long |  |  | 主体ID |  |
| - corp_name | String |  |  | 主体名称 |  |
| code | Integer |  |  | 返回码 |  |
| message | String |  |  | 返回信息 |  |

## 返回样例

### 返回样例 (jsonc)

```
{
    "code": 0,
    "data": {
        "list": [
            {
                "corp_name": "郭老师测试账户",
                "corp_id": 93732
            },
            {
                "corp_name": "快手广告深圳分公司",
                "corp_id": 7159
            },
            {
                "corp_name": "程丽倩的测试企业",
                "corp_id": 41620
            },
            {
                "corp_name": "北京慕远科技有限公司",
                "corp_id": 15280
            }
        ]
    },
    "message": "OK",
    "request_id": "EMSAgIDQpbqQChi3AiC1kaX0iDEo09eglQ0="
}
```
