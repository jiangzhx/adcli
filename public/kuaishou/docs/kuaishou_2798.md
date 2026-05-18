---
title: 获取应用中心隐私详情
platform: kuaishou
source_url: https://developers.e.kuaishou.com/docs?docType=DSP&documentId=2798&menuId=3536
doc_id: kuaishou_2798
source_id: kuaishou_2798
---
# 获取应用中心隐私详情

## 文档元数据

| 字段 | 值 |
| --- | --- |
| documentId | 2798 |
| documentType | 2 |
| version | 0.0.1 |
| bizName | 效果广告 |
| createTime | 2024-07-04T12:01:33.169Z |

## 接口信息

| 字段 | 值 |
| --- | --- |
| targetPath | https://ad.e.kuaishou.com/rest/openapi/gw/dsp/appcenter/privacy/detail |
| httpMethod | POST |
| httpContentType | JSON |

## 请求参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| advertiser_id | Long | 是 |  | 广告主id |  |
| privacy_id | Long | 是 |  | 隐私ID |  |

## 请求样例

### 请求样例 (shell)

```
curl --location 'https://ad.e.kuaishou.com/rest/openapi/gw/dsp/appcenter/privacy/detail' \
--header 'Content-Type: application/json' \
--header 'Access-Token: xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx' \
--data '{
    "advertiser_id":900015364,
    "privacy_id":4801146
}'
```

## 返回参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| data | AdAppPrivacyRespSnake |  |  | 隐私返回参数 |  |
| - account_id | Long |  |  | 账号id |  |
| - privacy_id | Long |  |  | 隐私id |  |
| - url | String |  |  | 隐私链接 |  |
| code | Integer |  |  | 返回码 |  |
| message | String |  |  | 返回详情 |  |

## 返回样例

### 返回样例 (jsonc)

```
{
    "code": 0,
    "data": {
        "account_id": 900015364,
        "privacy_id": 4801146,
        "url": "https://master--kuaishou-frontend-app-platform.jinx.staging.kuaishou.com/create/android?__accountId__=900015364"
    },
    "message": "OK",
    "request_id": "EPSAgIDwg5mOrAEY_wYgqOC5u_QwKIO19M8E"
}
```
