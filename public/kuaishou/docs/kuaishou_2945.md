---
title: 获取商圈地域定向
platform: kuaishou
source_url: https://developers.e.kuaishou.com/docs?docType=DSP&documentId=2945&menuId=3697
doc_id: kuaishou_2945
source_id: kuaishou_2945
---
# 获取商圈地域定向

## 文档元数据

| 字段 | 值 |
| --- | --- |
| documentId | 2945 |
| documentType | 2 |
| version | 0.0.1 |
| bizName | 效果广告 |
| createTime | 2024-07-04T12:05:45.496Z |

## 接口信息

| 字段 | 值 |
| --- | --- |
| targetPath | https://ad.e.kuaishou.com/rest/openapi/v1/region/district/list |
| httpMethod | GET |
| httpContentType | JSON |

## 请求参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| advertiser_id | Long |  |  | 广告主 ID | 在获取 access_token 的时候返回 |

## 请求样例

### 请求样例 (shell)

```
curl --location --request GET 'https://ad.e.kuaishou.com/rest/openapi/v1/region/district/list' \
--header 'access-token: bfeb24de4a3c1650832cff00d1629af2' \
--header 'Content-Type: application/json' \
--data-raw '{
  "advertiser_id": 7075662
}'
```

## 返回参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| code | Integer |  |  | 返回码 |  |
| message | String |  |  | 返回信息 |  |
| data | RegionDistrictList |  |  | 返回数据 |  |
| - key | Key |  |  | 地域 parent_id | 该地域下的所有商圈 list |
| - id | Long |  |  | 商圈 id |  |
| - level | Integer |  |  | 地域层级-商圈层级=4 |  |
| - name | String |  |  | 商圈名称 |  |
| - full_name | String |  |  | 全名称 |  |

## 返回样例

### 返回样例 (jsonc)

```
{
   "code": 0,
   "message": "OK",
   "data": {
       "350213": [
           {
               "id": 3502130002,
               "level": 4,
               "name": "马巷",
               "parent": 350213,
               "full_name": "中国-福建-厦门-翔安-马巷"
           },
                      ]
          },
"request_id":"3e1dd1230fec46bb8501a9bb6e0c27f2"

}
```
