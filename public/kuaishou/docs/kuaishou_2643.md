---
title: 第三步：领用上传token
platform: kuaishou
source_url: https://developers.e.kuaishou.com/docs?docType=DSP&documentId=2643&menuId=3368
doc_id: kuaishou_2643
source_id: kuaishou_2643
---
# 第三步：领用上传token

## 文档元数据

| 字段 | 值 |
| --- | --- |
| documentId | 2643 |
| documentType | 2 |
| version | 0.0.1 |
| bizName | 效果广告 |
| createTime | 2024-07-04T11:41:38.889Z |

## 接口信息

| 字段 | 值 |
| --- | --- |
| targetPath | https://ad.e.kuaishou.com/rest/openapi/gw/ad/common/upload/token/verify |
| httpMethod | POST |
| httpContentType | JSON |

## 请求参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| upload_token | String | 是 |  | 广告主 ID | 在获取 access_token 的时候返回 |
| advertiser_id | Long | 是 |  | 上传token |  |

## 请求样例

### 请求样例 (shell)

```
curl --location 'https://ad.e.kuaishou.com/rest/openapi/gw/ad/common/upload/token/verify' \
--header 'Access-Token: xxx' \
--header 'Content-Type: application/json' \
--data '{
    "advertiser_id": 1111,
    "upload_token": "xxx"
}'
```

## 返回参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| data | CommonTokenModelRespSnake |  |  | JSON 返回值 |  |
| - blob_store_key | String |  |  | 文件存储位置的标识 |  |
| message | String |  |  | 返回信息 |  |
| code | Integer |  |  | 返回码 |  |

## 返回样例

### 返回样例 (jsonc)

```
{
    "code": 0,
    "message": "OK",
    "data": {
        "blob_store_key": "xxxx"
    }
}
```
