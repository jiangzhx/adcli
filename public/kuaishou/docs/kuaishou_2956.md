---
title: 获取可选的推荐封面
platform: kuaishou
source_url: https://developers.e.kuaishou.com/docs?docType=DSP&documentId=2956&menuId=3707
doc_id: kuaishou_2956
source_id: kuaishou_2956
---
# 获取可选的推荐封面

## 文档元数据

| 字段 | 值 |
| --- | --- |
| documentId | 2956 |
| documentType | 2 |
| version | 0.0.1 |
| bizName | 效果广告 |
| createTime | 2024-07-04T12:04:18.089Z |

## 接口信息

| 字段 | 值 |
| --- | --- |
| targetPath | https://ad.e.kuaishou.com/rest/openapi/v1/tool/key_frame |
| httpMethod | GET |
| httpContentType | JSON |

## 请求参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| advertiser_id | Long | 是 |  | 广告主 ID | 在获取 access_token 的时候返回 |
| photo_ids | String[] | 是 |  | 视频 ID | 1.目前只支持一次查询一个 photo_id 关键帧；2.视频的 user_id 要与当前 account 的 user_id 一致 |

## 请求样例

### 请求样例 (shell)

```
curl -X GET \
  -H 'Access-Token: 6acd879e43a32b58b5' \
  -H 'Content-Type: application/json' \
  -d '{
    "advertiser_id":20000800,
    "photo_ids":["5189835635550640193"]
  }' -L https://ad.e.kuaishou.com/rest/openapi/v1/tool/key_frame
```

## 返回参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| code | Integer |  |  | 返回码 |  |
| message | String |  |  | 返回信息 |  |
| data | String[] |  |  | JSON 返回值 |  |

## 返回样例

### 返回样例 (jsonc)

```
{
    "code": 0,
    "message": "OK",
    "data": [
        "https://ali2.a.yximgs.com/bs2/multicover/4338454.jpg",
        "https://ali2.a.yximgs.com/bs2/multicover/6414979.jpg",
        "https://ali2.a.yximgs.com/bs2/multicover/6759047.jpg",
        "https://ali2.a.yximgs.com/bs2/multicover/6918688.jpg",
        "https://ali2.a.yximgs.com/bs2/multicover/7066256.jpg",
        "https://ali2.a.yximgs.com/bs2/multicover/7164708.jpg",
        "https://ali2.a.yximgs.com/bs2/multicover/7254790.jpg",
        "https://ali2.a.yximgs.com/bs2/multicover/7324291.jpg"
    ]
}
```
