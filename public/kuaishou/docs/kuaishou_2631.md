---
title: 视频库-推送视频
platform: kuaishou
source_url: https://developers.e.kuaishou.com/docs?docType=DSP&documentId=2631&menuId=3355
doc_id: kuaishou_2631
source_id: kuaishou_2631
---
# 视频库-推送视频

## 文档元数据

| 字段 | 值 |
| --- | --- |
| documentId | 2631 |
| documentType | 2 |
| version | 0.0.1 |
| bizName | 效果广告 |
| createTime | 2025-09-02T07:48:55.430Z |

## 接口信息

| 字段 | 值 |
| --- | --- |
| targetPath | https://ad.e.kuaishou.com/rest/openapi/v1/file/ad/video/share |
| httpMethod | POST |
| httpContentType | JSON |

## 请求参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| sync_profile | Boolean |  |  | 是否同步个人主页（默认不同步） |  |
| advertiser_id | Long | 是 |  | 广告主 id |  |
| photo_ids | String[] | 是 |  | 视频 ids， | 不超过 10 个 |
| share_advertiser_ids | Long[] | 是 |  | 推送账户 | 同一资质下其他 user_id 下的广告主 ids，不超过 10 个，同一个快手 user_id 下视频是共享的（无需推送）， 视频共享只能是同一个资质主体下不同的 user_id 的广告主可以共享 |

## 请求样例

### 请求样例 (shell)

```
curl --location --request GET 'https://ad.e.kuaishou.com/rest/openapi/v1/file/ad/video/share' \
--header 'Access-Token: 68c641e25158eaedb339076cd77036a3' \
--header 'Content-Type: application/json' \
--data-raw '{
    "advertiser_id": 1111,
    "photo_ids": [
        123123,
        456456
    ],
    "share_advertiser_ids": [
        2222,
        33333
    ]
}
```

## 返回参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| code | Integer |  |  | 返回码 |  |
| data | AMPhotoShareResultSnake |  |  | JSON 返回值 |  |
| - details | AMPhotoShareVoSnake[] |  |  | JSON 返回值 |  |
| - advertiser_id | Long |  |  | 账号 ID |  |
| - original_photo_id | String |  |  | 原始 photoId |  |
| - photo_id | String |  |  | 分享生成新的 photoId |  |
| message | String |  |  | 返回信息 |  |

## 返回样例

### 返回样例 (jsonc)

```
{
    "code": 0,
    "message": "OK",
    "data": {
        "details": [
            {
                "advertiser_id": 200001,
                "photo_id": 100000002,
                "original_photo_id": 100000001,
            }
        ]
    }
}
```
