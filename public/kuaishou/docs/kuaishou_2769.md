---
title: 创建 iOS 应用
platform: kuaishou
source_url: https://developers.e.kuaishou.com/docs?docType=DSP&documentId=2769&menuId=3505
doc_id: kuaishou_2769
source_id: kuaishou_2769
---
# 创建 iOS 应用

## 文档元数据

| 字段 | 值 |
| --- | --- |
| documentId | 2769 |
| documentType | 2 |
| version | 0.0.1 |
| bizName | 效果广告 |
| createTime | 2025-11-06T13:36:04.328Z |

## 接口信息

| 字段 | 值 |
| --- | --- |
| targetPath | https://ad.e.kuaishou.com/rest/openapi/gw/dsp/appcenter/app/create/ios |
| httpMethod | POST |
| httpContentType | JSON |

## 请求参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| advertiser_id | Long | 是 |  | 广告主id |  |
| app_icon_url | String | 是 |  | 应用图标，可不填，如果填写则覆盖应用解析出的应用图标，可通过通过上传图片 API 获取链接。 |  |
| app_id | Long |  |  | 请补充描述详情 |  |
| ios_download_url | String | 是 |  | App Store 应用下载链接 |  |
| package_id | Long |  |  | 请补充描述详情 |  |
| app_privacy_url | String |  |  | 隐私政策链接 |  |

## 请求样例

### 请求样例 (shell)

```
curl --location 'https://ad.e.kuaishou.com/rest/openapi/gw/dsp/appcenter/app/create/ios' \
--header 'Access-Token: 55805d49f17e961b239468479f66672d' \
--header 'Content-Type: application/json' \
--data '{
    "advertiser_id": 900015366,
    "ios_download_url": "https://apps.apple.com/cn/app/%_e5%_a_f%_b_b%_e6%89%_b_e%_e5%_a4%_a9%_e5%_a0%82/id1454750038",
    "app_privacy_url": "https://www.baiud.com"
}'
```

## 返回参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| data | AddAppResponseSnake |  |  | JSON 返回值 |  |
| - app_id | Long |  |  | 应用ID |  |
| - global_app_id | Long |  |  | 请补充描述详情 |  |
| - package_id | Long |  |  | 应用包ID【母包ID】 |  |
| - privacy_id | Long |  |  | 隐私声明ID |  |
| code | Integer |  | 1 | 返回码 |  |
| message | String |  | 1 | 返回信息 |  |

## 返回样例

### 返回样例 (jsonc)

```
{
    "code": 401000,
    "data": {
        "global_app_id": 4801050,
        "privacy_id": 4801051,
        "package_id": 1099611636564,
        "app_id": 2199123264339
    },
    "message": "OK"
}
```

## 原始内容

```
创建 iOS 应用 /rest/openapi/gw/dsp/appcenter/app/create/ios curl --location 'https://ad.e.kuaishou.com/rest/openapi/gw/dsp/appcenter/app/create/ios' \ --header 'Access-Token: 55805d49f17e961b239468479f66672d' \ --header 'Content-Type: application/json' \ --data '{ "advertiser_id": 900015366, "ios_download_url": "https://apps.apple.com/cn/app/%_e5%_a_f%_b_b%_e6%89%_b_e%_e5%_a4%_a9%_e5%_a0%82/id1454750038" }' { "code": 401000, "data": { "global_app_id": 4801050, "privacy_id": 4801051, "package_id": 1099611636564, "app_id": 2199123264339 }, "message": "OK" } advertiser_id Long 广告主id app_icon_url String 应用图标，可不填，如果填写则覆盖应用解析出的应用图标，可通过通过上传图片 API 获取链接。 app_id Long 请补充描述详情 ios_download_url String App Store 应用下载链接 package_id Long 请补充描述详情 data AddAppResponseSnake JSON 返回值 app_id Long 应用ID global_app_id Long 请补充描述详情 package_id Long 应用包ID【母包ID】 privacy_id Long 隐私声明ID code Integer 返回码 message String 返回信息
```
