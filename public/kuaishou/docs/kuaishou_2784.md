---
title: 发布应用
platform: kuaishou
source_url: https://developers.e.kuaishou.com/docs?docType=DSP&documentId=2784&menuId=3521
doc_id: kuaishou_2784
source_id: kuaishou_2784
---
# 发布应用

## 文档元数据

| 字段 | 值 |
| --- | --- |
| documentId | 2784 |
| documentType | 2 |
| version | 0.0.1 |
| bizName | 效果广告 |
| createTime | 2024-07-04T11:56:56.034Z |

## 接口信息

| 字段 | 值 |
| --- | --- |
| targetPath | https://ad.e.kuaishou.com/rest/openapi/gw/dsp/appcenter/app/release |
| httpMethod | POST |
| httpContentType | JSON |

## 请求参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| advertiser_id | Long | 是 |  | 广告主id |  |
| package_ids | Long[] | 是 | 1 | 应用包ID | 应用包ID【母包ID】。只有安卓审核通过的母包才可以发布，发布后的package_id才能绑定单元。 |

## 请求样例

### 请求样例 (shell)

```
curl --location 'https://ad.e.kuaishou.com/rest/openapi/gw/dsp/appcenter/app/release' \
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
| data | AdAppReleaseResponseSnake[] |  |  | JSON 返回值 |  |
| - app_id | Long |  |  | 应用ID |  |
| - package_id | Long |  |  | 应用ID |  |
| - real_app_version | String |  |  | 应用完整版本信息 |  |
| - version_code | Long |  |  | 应用版本号 |  |
| code | Integer |  |  | 返回码 |  |
| message | String |  |  | 返回信息 |  |

## 返回样例

### 返回样例 (jsonc)

```
{
    "code": 0,
    "data": [
        {
            "app_id": 2199123262524,
            "package_id": 1099611634749,
            "version_code": 1200099,
            "real_app_version": "1.20.0.0"
        }
    ],
    "message": "OK",
    "request_id": "EMOAgIDQjpmOrAEYggMg7pyi4PIwKKzS7nE="
}
```
