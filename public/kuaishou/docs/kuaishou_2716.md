---
title: 联盟定向媒体包删除
platform: kuaishou
source_url: https://developers.e.kuaishou.com/docs?docType=DSP&documentId=2716&menuId=3451
doc_id: kuaishou_2716
source_id: kuaishou_2716
---
# 联盟定向媒体包删除

## 文档元数据

| 字段 | 值 |
| --- | --- |
| documentId | 2716 |
| documentType | 2 |
| version | 0.0.1 |
| bizName | 联盟 |
| createTime | 2024-07-04T11:45:05.933Z |

## 接口信息

| 字段 | 值 |
| --- | --- |
| targetPath | https://ad.e.kuaishou.com/rest/openapi/v1/asset/media/delete |
| httpMethod | POST |
| httpContentType | JSON |

## 请求参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| advertiser_id | Long | 是 | 123456 | 广告主 id | 在获取 access_token 的时候返回 |
| media_id | Long | 是 | 12 | 媒体包 id |  |

## 请求样例

### 请求样例 (shell)

```
curl -X POST \
 -H 'Access-Token: 69d99a7c1fdf3f4b271b' \
 -H 'Content-Type: application/json' \
 -d '{
            "advertiser_id": 20000152,
            "media_id": 10005
}' -L https://ad.e.kuaishou.com/rest/openapi/v1/asset/media/delete
```

## 返回参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| code | Integer |  | 0 | 响应状态码 |  |
| message | String |  | “OK” | 响应详细信息 |  |
| data | AMMedia |  | {"mediaId": 123} | 媒体包 id |  |
| - media_id | Long |  | 10221 | 媒体包 id |  |

## 返回样例

### 返回样例 (jsonc)

```
{
  	"code": 0,
  	"message": "OK",
  	"data": {}
}
```
