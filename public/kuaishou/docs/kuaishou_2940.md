---
title: 获取联盟投放白名单
platform: kuaishou
source_url: https://developers.e.kuaishou.com/docs?docType=DSP&documentId=2940&menuId=3691
doc_id: kuaishou_2940
source_id: kuaishou_2940
---
# 获取联盟投放白名单

## 文档元数据

| 字段 | 值 |
| --- | --- |
| documentId | 2940 |
| documentType | 2 |
| version | 0.0.1 |
| bizName | 效果广告 |
| createTime | 2024-07-04T12:07:37.276Z |

## 接口信息

| 字段 | 值 |
| --- | --- |
| targetPath | https://ad.e.kuaishou.com/rest/openapi/v1/advertiser/white_list |
| httpMethod | GET |
| httpContentType | JSON |

## 请求参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| advertiser_id | Long |  |  | 广告主 ID | 在获取 access_token 的时候返回 |

## 请求样例

### 请求样例 (shell)

```
curl --location --request GET 'https://ad.e.kuaishou.com/rest/openapi/v1/advertiser/white_list' \
--header 'access-token: 847c1441cdb02bed258dc2b91d4e311d' \
--header 'Content-Type: application/json' \
--data-raw '{
   "advertiser_id": xxxxxxxx
}
```

## 返回参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| code | Integer |  |  | 返回码 |  |
| message | String |  |  | 返回信息 |  |
| data | AdvertiserWhiteListData |  |  | 返回数据 |  |
| - alliance_account | Integer |  |  | 返回码 | 如果广告主 id 在白名单里面，值为 1，如果不在白名单里面，值为 0 |

## 返回样例

### 返回样例 (jsonc)

```
{
   "code": 0,
   "message": "OK",
   "data": {
       "alliance_account": 1
   }
}
```
