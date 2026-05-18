---
title: 刷新token
platform: kuaishou
source_url: https://developers.e.kuaishou.com/docs?docType=DSP&documentId=3047&menuId=3791
doc_id: kuaishou_3047
source_id: kuaishou_3047
---
# 刷新token

## 文档元数据

| 字段 | 值 |
| --- | --- |
| documentId | 3047 |
| documentType | 2 |
| version | 0.0.1 |
| bizName | 效果广告 |
| createTime | 2024-09-02T02:28:51.013Z |

## 概述

请求快手服务器，刷新 access_token 和 refresh_token 及 token 过期时间。

## 接口信息

| 字段 | 值 |
| --- | --- |
| targetPath | https://ad.e.kuaishou.com/rest/openapi/oauth2/authorize/refresh_token |
| httpMethod | POST |
| httpContentType | JSON |

## 请求参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| app_id | Long | 是 |  | 申请应用后快手返回的 app_id |  |
| secret | String | 是 |  | 申请应用后快手返回的 secret |  |
| refresh_token | String | 是 |  | 最近一次快手返回的 refresh_token |  |

## 请求样例

### 请求样例 (shell)

```
curl -H "Content-Type:application/json" \
-d '
{
"app_id": 1,
"secret": "abcd",
"refresh_token": "5991a7e2a6c7933b93"
} '
```

## 返回参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| code | Integer |  |  | 返回码 |  |
| message | String |  |  | 返回信息 |  |
| data | AuthorizeRefreshTokenData |  |  | 返回数据 |  |
| - access_token | String |  |  | 用于验证权限的 token |  |
| - access_token_expires_in | Long |  |  | access_token 剩余有效时间，单位：秒 |  |
| - refresh_token | String |  |  | 用于获取新的 access_token 和 refresh_token，并且刷新过期时间 |  |
| - refresh_token_expires_in | Long |  |  | refresh_token 剩余有效时间，单位：秒 |  |

## 返回样例

### 返回样例 (jsonc)

```
{
"code": 0,
"message": "OK",
"data": {
"access_token":"xxxxxxxxx",
"refresh_token_expires_in":xxxxxxxxx,
"refresh_token":"xxxxxxxxx",
"access_token_expires_in":xxxxxxxxx
        }
}
```

## 原始内容

```
刷新token /rest/openapi/oauth2/authorize/refresh_token curl -H "Content-Type:application/json" \ -d ' { "app_id": 1, "secret": "abcd", "refresh_token": "5991a7e2a6c7933b93" } ' { "code": 0, "message": "OK", "data": { "access_token":"xxxxxxxxx", "refresh_token_expires_in":xxxxxxxxx, "refresh_token":"xxxxxxxxx", "access_token_expires_in":xxxxxxxxx, "advertiser_id": xxxxxxxxx } } app_id Long 申请应用后快手返回的 app_id secret String 申请应用后快手返回的 secret refresh_token String 最近一次快手返回的 refresh_token code Integer 返回码 message String 返回信息 data AuthorizeRefreshTokenData 返回数据 access_token String 用于验证权限的 token access_token_expires_in Long access_token 剩余有效时间，单位：秒 refresh_token String 用于获取新的 access_token 和 refresh_token，并且刷新过期时间 refresh_token_expires_in Long refresh_token 剩余有效时间，单位：秒
```
