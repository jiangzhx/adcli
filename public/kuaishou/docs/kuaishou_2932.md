---
title: 查询图片关联创意接口
platform: kuaishou
source_url: https://developers.e.kuaishou.com/docs?docType=DSP&documentId=2932&menuId=3682
doc_id: kuaishou_2932
source_id: kuaishou_2932
---
# 查询图片关联创意接口

## 文档元数据

| 字段 | 值 |
| --- | --- |
| documentId | 2932 |
| documentType | 2 |
| version | 0.0.1 |
| bizName | 效果广告 |
| createTime | 2024-07-04T11:36:30.064Z |

## 接口信息

| 字段 | 值 |
| --- | --- |
| targetPath | https://ad.e.kuaishou.com/rest/openapi/v1/file/ad/pic/relate/creatives |
| httpMethod | GET |
| httpContentType | JSON |

## 请求参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| advertiser_id | Long | 是 |  | 广告主 ID | 在获取 access_token 的时候返回 |
| image_token | String | 是 |  | 图片 token | 图片 token,上传或查询图片列表获得 |

## 请求样例

### 请求样例 (shell)

```
curl --location --request GET 'https://ad.e.kuaishou.com/rest/openapi/v1/file/ad/pic/relate/creatives' \
--header 'Access-Token: 76021ddf612c3ffd57c3c' \
--header 'Content-Type: application/json' \
--data-raw '{
    "advertiser_id": 20000800,
    "image_token": "marketd604af10412c48d6b2e44e0ed1b9b336.jpg"
}'
```

## 返回参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| code | Integer |  |  | 返回码 |  |
| message | String |  |  | 返回信息 |  |
| data | PicRelateCreativesData |  |  | JSON 返回值 |  |
| - creative_count | Integer |  |  | 绑定创意个数 |  |
| - image_token | String |  |  | 图片 token |  |
| - creatives | Creative[] |  |  | 创意 |  |
| - creative_id | Integer |  |  | 创意 id |  |
| - creative_name | String |  |  | 创意名称 |  |

## 返回样例

### 返回样例 (jsonc)

```
{
   "code": 0,
   "message": "OK",
   "data": {
       "related_creatives": [
           {
               "creatives": [
                   {
                       "creative_id": 81782272,
                       "creative_name": "测试创意v11"
                   },
                   {
                       "creative_id": 81781809,
                       "creative_name": "market api 创建创意v2"
                   }
               ],
               "creative_count": 2,
               "image_token": "marketd604af10412c48d6b2e44e0ed1b9b336.jpg"
           }
       ]
   },
   "request_id": "beeed88b64364ee7bdf75904a00adfb0"
}
```
