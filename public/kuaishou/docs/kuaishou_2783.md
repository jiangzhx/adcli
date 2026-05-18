---
title: iOS 应用上报更新
platform: kuaishou
source_url: https://developers.e.kuaishou.com/docs?docType=DSP&documentId=2783&menuId=3520
doc_id: kuaishou_2783
source_id: kuaishou_2783
---
# iOS 应用上报更新

## 文档元数据

| 字段 | 值 |
| --- | --- |
| documentId | 2783 |
| documentType | 2 |
| version | 0.0.1 |
| bizName | 效果广告 |
| createTime | 2024-07-04T11:56:39.127Z |

## 接口信息

| 字段 | 值 |
| --- | --- |
| targetPath | https://ad.e.kuaishou.com/rest/openapi/gw/dsp/appcenter/app/ios/update |
| httpMethod | POST |
| httpContentType | JSON |

## 请求参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| advertiser_id | Long | 是 |  | 广告主id |  |
| app_id | Long | 是 |  | 应用ID |  |
| ios_app_id | Long | 是 |  | 苹果商店 iOS App Id |  |
| package_id | Long | 是 |  | 应用包ID |  |

## 请求样例

### 请求样例 (shell)

```
curl --location 'https://ad.e.kuaishou.com/rest/openapi/gw/dsp/appcenter/app/ios/update' \
--header 'Access-Token: 309140fd130b236962de0773e225934e' \
--header 'Content-Type: application/json' \
--data '{
    "advertiser_id": 900015366,
    "package_id": 1099611636631,
    "app_id": 2199123264406,
    "ios_app_id": 1321803705
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
    "request_id": "EPaAgIDwtZiOrAEY-wIgy8657PAwKNDUi9UI"
}
```
