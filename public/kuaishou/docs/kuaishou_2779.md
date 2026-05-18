---
title: 获取应用已共享主体列表
platform: kuaishou
source_url: https://developers.e.kuaishou.com/docs?docType=DSP&documentId=2779&menuId=3516
doc_id: kuaishou_2779
source_id: kuaishou_2779
---
# 获取应用已共享主体列表

## 文档元数据

| 字段 | 值 |
| --- | --- |
| documentId | 2779 |
| documentType | 2 |
| version | 0.0.1 |
| bizName | 效果广告 |
| createTime | 2024-07-04T11:55:21.164Z |

## 概述

应用的共享类型为：share_type=2【主体共享】才会有数据

## 接口信息

| 字段 | 值 |
| --- | --- |
| targetPath | https://ad.e.kuaishou.com/rest/openapi/gw/dsp/appcenter/app/shareCorpList |
| httpMethod | POST |
| httpContentType | JSON |

## 请求参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| advertiser_id | Long | 是 |  | 广告主id |  |
| app_id | Long | 是 |  | 应用id |  |

## 请求样例

### 请求样例 (shell)

```
curl --location --request POST 'https://ad.e.kuaishou.com/rest/openapi/gw/dsp/appcenter/app/shareCorpList' \
--header 'Access-Token: e6d2a9a50d3ba728c77ac79f3a063d2c' \
--header 'Content-Type: application/json' \
--header 'Cookie: apdid=e8977018-0d93-4c22-8d95-1cbb0a4ab5daaa26501f062a0b9042d0bd60d291b622:1685348999:1' \
--data-raw '{
    "advertiser_id": 12078245,
    "app_id": 2199123262731
}'
```

## 返回参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| data | PageDataListShareCorpResp90Snake |  |  | JSON返回值 |  |
| - list | ShareCorpResp437Snake[] |  |  | 主体列表的返回参数 |  |
| - corp_id | Long |  |  | 主体ID |  |
| - corp_name | String |  |  | 主体名称 |  |
| - total_account_cnt | Integer |  |  | 主体共享，挂载的Account数量 |  |
| code | Integer |  |  | 返回码 |  |
| message | String |  |  | 返回详情 |  |

## 返回样例

### 返回样例 (jsonc)

```
{
    "code": 0,
    "data": {
        "list": [
            {
                "total_account_cnt": 2699,
                "corp_name": "北京慕远科技有限公司",
                "corp_id": 15280
            }
        ]
    },
    "message": "OK",
    "request_id": "EMyAgIDglZy7ChiMAyDDwPvziDEozoTh4AM="
}
```
