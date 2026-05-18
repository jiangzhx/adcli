---
title: 获取地域定向
platform: kuaishou
source_url: https://developers.e.kuaishou.com/docs?docType=DSP&documentId=2944&menuId=3696
doc_id: kuaishou_2944
source_id: kuaishou_2944
---
# 获取地域定向

## 文档元数据

| 字段 | 值 |
| --- | --- |
| documentId | 2944 |
| documentType | 2 |
| version | 0.0.1 |
| bizName | 效果广告 |
| createTime | 2024-07-04T12:05:32.014Z |

## 接口信息

| 字段 | 值 |
| --- | --- |
| targetPath | https://ad.e.kuaishou.com/rest/openapi/v1/region/list |
| httpMethod | GET |
| httpContentType | JSON |

## 请求参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| advertiser_id | Long |  |  | 广告主id |  |

## 请求样例

### 请求样例 (shell)

```
curl -X GET \
--header 'Content-Type: application/json' \
--data-raw '{
    "advertiser_id":xxxxxxxx
}'
```

## 返回参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| code | Integer |  |  | 返回码 |  |
| message | String |  |  | 返回信息 |  |
| data | RegionListData |  |  | JSON 返回值 |  |
| - id | Long |  |  | 地域 ID |  |
| - level | Integer |  |  | 地域层级 |  |
| - name | String |  |  | 地域名称 |  |
| - parent | Long |  |  | 父级地域 |  |
| - children | Long[] |  |  | 子级地域 |  |

## 返回样例

### 返回样例 (jsonc)

```
{
  "code":0,
  "message":"OK",
  "data":{
      "471038":{
          "id":471038,
          "level":1,
          "name":"上海",
          "parent":0,
          "children":[
          	471039,
          	471040
          ]
      },
      "471129":{
          "id":471129,
          "level":3,
          "name":"云林",
          "parent":471128,
          "children":null
      }
  }
}
```
