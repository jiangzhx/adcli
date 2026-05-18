---
title: 分包失败重新构建
platform: kuaishou
source_url: https://developers.e.kuaishou.com/docs?docType=DSP&documentId=2792&menuId=3530
doc_id: kuaishou_2792
source_id: kuaishou_2792
---
# 分包失败重新构建

## 文档元数据

| 字段 | 值 |
| --- | --- |
| documentId | 2792 |
| documentType | 2 |
| version | 0.0.1 |
| bizName | 效果广告 |
| createTime | 2024-07-04T11:59:31.233Z |

## 概述

本接口适用于给定的app_id下，存在部分分包构建失败，通过此接口能够一键全量发起分包重建。若没有需要重建的分包【全部都是成功的】，接口的返回值cnt=0.

## 接口信息

| 字段 | 值 |
| --- | --- |
| targetPath | https://ad.e.kuaishou.com/rest/openapi/gw/dsp/appcenter/app/retryBuildSubPackage |
| httpMethod | POST |
| httpContentType | JSON |

## 请求参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| advertiser_id | Long | 是 |  | 广告主id |  |
| app_id | Long | 是 |  | 应用ID |  |

## 请求样例

### 请求样例 (shell)

```
curl --location --request POST 'https://ad.e.kuaishou.com/rest/openapi/gw/dsp/appcenter/app/retryBuildSubPackage' \
--header 'Access-Token: 8f2c41d34360e3af50b0cc29404b1b70' \
--header 'Content-Type: application/json' \
--data-raw '{
    "advertiser_id": "900015073",
    "app_id": "2199123303321"
}'
```

## 返回参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| data | SubPackageRetryBuildResponseSnake |  |  | 返回数据 |  |
| - retry_cnt | Integer |  |  | 本次发起重新构建，应用分包的数量。 | cnt=0表示没有需要重建的分包，cnt=x表示对x个分包发起了重建 |
| code | Integer |  |  | 错误码 |  |
| message | String |  |  | 错误详情 |  |

## 返回样例

### 返回样例 (jsonc)

```
{
    "code": 0,
    "data": {
        "retry_cnt": 10
    },
    "message": "OK",
    "request_id": "EIWCgICg7ZmOrAEY5gUg2v-H45AxKKPn6KAL"
}
```
