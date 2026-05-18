---
title: 获取可选的应用定向
platform: kuaishou
source_url: https://developers.e.kuaishou.com/docs?docType=DSP&documentId=2941&menuId=3693
doc_id: kuaishou_2941
source_id: kuaishou_2941
---
# 获取可选的应用定向

## 文档元数据

| 字段 | 值 |
| --- | --- |
| documentId | 2941 |
| documentType | 2 |
| version | 0.0.1 |
| bizName | 效果广告 |
| createTime | 2024-07-04T12:04:03.411Z |

## 接口信息

| 字段 | 值 |
| --- | --- |
| targetPath | https://ad.e.kuaishou.com/rest/openapi/v1/tool/app/search |
| httpMethod | GET |
| httpContentType | JSON |

## 请求参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| advertiser_id | Long | 是 |  | 广告主 ID | 在获取 access_token 的时候返回 |
| app_name | String | 是 |  | 应用名称 | 支持模糊匹配 |

## 请求样例

### 请求样例 (shell)

```
curl -X GET \
  -H 'Access-Token: 6acd879e43a32b58b5' \
  -H 'Content-Type: application/json' \
  -d '{
    "advertiser_id": 20000152,
    "app_name": "快手"
  }' -L https://ad.e.kuaishou.com/rest/openapi/v1/tool/app/search
```

## 返回参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| code | Integer |  |  | 返回码 |  |
| message | String |  |  | 返回信息 |  |
| data | ToolAppSearchData |  |  | JSON 返回值 |  |
| - app_id | Long |  |  | 应用 ID |  |
| - app_name | String |  |  | 应用名称 |  |

## 返回样例

### 返回样例 (jsonc)

```
{
  "code": 0,
  "message": "OK",
  "data": {
      "app_id": 1234567,
      "app_name": "快手"
  }
}
```
