---
title: 更新 iOS 应用
platform: kuaishou
source_url: https://developers.e.kuaishou.com/docs?docType=DSP&documentId=2771&menuId=3507
doc_id: kuaishou_2771
source_id: kuaishou_2771
---
# 更新 iOS 应用

## 文档元数据

| 字段 | 值 |
| --- | --- |
| documentId | 2771 |
| documentType | 2 |
| version | 0.0.1 |
| bizName | 效果广告 |
| createTime | 2024-07-04T11:52:58.243Z |

## 接口信息

| 字段 | 值 |
| --- | --- |
| targetPath | https://ad.e.kuaishou.com/rest/openapi/gw/dsp/appcenter/app/update/ios |
| httpMethod | POST |
| httpContentType | JSON |

## 请求参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| advertiser_id | Long | 是 |  | 广告主id |  |
| app_icon_url | String |  |  | 应用图标 | 通过上传图片 API 获取 |
| app_id | Long | 是 |  | 应用ID |  |
| ios_download_url | String |  |  | 下载链接 |  |
| package_id | Long | 是 |  | 应用包ID |  |

## 请求样例

### 请求样例 (shell)

```
curl --location 'https://ad.e.kuaishou.com/rest/openapi/gw/dsp/appcenter/app/update/ios' \
--header 'Access-Token: 309140fd130b236962de0773e225934e' \
--header 'Content-Type: application/json' \
--data '{
    "advertiser_id": 900015366,
    "package_id": 1099611636631,
    "app_id": 2199123264406,
    "ios_download_url":"https://apps.apple.com/app/id9921801",
    "app_icon_url": "https://kcdn.staging.kuaishou.com/bs2/ad-app/icon/efebd9277ae5b39800c46d88166dcc33.png"
}'
```

## 返回参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| data | ModAppResponseSnake |  |  | JSON 返回值 |  |
| - app_id | Long |  |  | 应用ID |  |
| - global_app_id | Long |  |  | 请补充描述详情 |  |
| - package_id | Long |  |  | 应用包ID |  |
| - privacy_id | Long |  |  | 隐私声明ID |  |
| code | Integer |  | 1 | 返回码 |  |
| message | String |  | 1 | 返回信息 |  |

## 返回样例

### 返回样例 (jsonc)

```
{
    "code": 0,
    "data": {
        "privacy_id": 4801050,
        "package_id": 1099611636631,
        "app_id": 2199123264406
    },
    "message": "OK"
}
```
