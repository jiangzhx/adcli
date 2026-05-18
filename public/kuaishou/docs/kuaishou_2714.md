---
title: 联盟定向媒体包创建
platform: kuaishou
source_url: https://developers.e.kuaishou.com/docs?docType=DSP&documentId=2714&menuId=3449
doc_id: kuaishou_2714
source_id: kuaishou_2714
---
# 联盟定向媒体包创建

## 文档元数据

| 字段 | 值 |
| --- | --- |
| documentId | 2714 |
| documentType | 2 |
| version | 0.0.1 |
| bizName | 联盟 |
| createTime | 2024-07-04T11:42:20.618Z |

## 接口信息

| 字段 | 值 |
| --- | --- |
| targetPath | https://ad.e.kuaishou.com/rest/openapi/v1/asset/media/create |
| httpMethod | POST |
| httpContentType | JSON |

## 请求参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| advertiser_id | Long | 是 | 123 | 广告主id |  |
| name | String | 是 | 教育行业媒体包 | 媒体包名，媒体包名不能和已存在的包名重复 |  |
| pos_ids | String[] | 是 | ["shidsadafasfsaffa"] | 广告位列表 |  |

## 请求样例

### 请求样例 (shell)

```
curl -X POST \
 -H 'Access-Token: 69d99a7c1fdf3f4b271b' \
 -H 'Content-Type: application/json' \
 -d '{
            "advertiser_id": 20000152,
            "name":"market api创建计划",
            "pos_ids":["shidsadafasfsaffa", "sadsafsafsafsa"]
}' -L https://ad.e.kuaishou.com/rest/openapi/v1/asset/media/create
```

## 返回参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| code | Integer |  | 0 | 响应状态码 |  |
| message | String |  | “OK” | 响应具体信息 |  |
| data | AMMedia |  | {"media_id": "1232"} | 媒体包 id |  |
| - media_id | Long |  | 10221 | 媒体包 id |  |

## 返回样例

### 返回样例 (jsonc)

```
{
  	"code": 0,
  	"message": "OK",
  	"data": {
      	      "media_id": 10005
  	}
}
```
