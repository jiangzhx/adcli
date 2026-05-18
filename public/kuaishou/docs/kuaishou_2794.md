---
title: 获取最新未发布应用包
platform: kuaishou
source_url: https://developers.e.kuaishou.com/docs?docType=DSP&documentId=2794&menuId=3532
doc_id: kuaishou_2794
source_id: kuaishou_2794
---
# 获取最新未发布应用包

## 文档元数据

| 字段 | 值 |
| --- | --- |
| documentId | 2794 |
| documentType | 2 |
| version | 0.0.1 |
| bizName | 效果广告 |
| createTime | 2024-07-04T12:00:15.847Z |

## 接口信息

| 字段 | 值 |
| --- | --- |
| targetPath | https://ad.e.kuaishou.com/rest/openapi/gw/dsp/appcenter/app/release/latest |
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
curl --location 'https://ad.e.kuaishou.com/rest/openapi/gw/dsp/appcenter/app/release/latest' \
--header 'Access-Token: 309140fd130b236962de0773e225934e' \
--header 'Content-Type: application/json' \
--data '{
    "advertiser_id": 900015366,
    "app_id": 2199123262249
}'
```

## 返回参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| data | AppPackageInfoSnake |  |  | JSON 返回值 |  |
| - app_id | Long |  |  | 应用ID |  |
| - package_id | Long |  |  | 应用包ID |  |
| - real_app_version | String |  |  | 应用完整版本信息 |  |
| - version_code | Long |  |  | 应用版本号 |  |
| code | Integer |  |  | 返回码 |  |
| message | String |  |  | 返回信息 |  |

## 返回样例

### 返回样例 (jsonc)

```
{
    "code": 0,
    "data": {
        "version_code": 946,
        "real_app_version": "10.15.3",
        "package_id": 1099611634749,
        "app_id": 2199123262249
    },
    "message": "OK",
    "request_id": "EMOAgIDQjpmOrAEYhQMg09Kn4fIwKLL1qKkC"
}
```
