---
title: 获取视频信息 get 接口
platform: kuaishou
source_url: https://developers.e.kuaishou.com/docs?docType=DSP&documentId=2636&menuId=3360
doc_id: kuaishou_2636
source_id: kuaishou_2636
---
# 获取视频信息 get 接口

## 文档元数据

| 字段 | 值 |
| --- | --- |
| documentId | 2636 |
| documentType | 2 |
| version | 0.0.1 |
| bizName | 效果广告 |
| createTime | 2025-08-05T11:54:13.011Z |

## 接口信息

| 字段 | 值 |
| --- | --- |
| targetPath | https://ad.e.kuaishou.com/rest/openapi/v1/file/ad/video/get |
| httpMethod | POST |
| httpContentType | JSON |

## 请求参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| advertiser_id | Long | 是 |  | 广告主 ID | 在获取 accessToken 的时候返回 |
| photo_ids | String[] | 是 |  | 视频 ID 集 |  |

## 请求样例

### 请求样例 (shell)

```
curl --location --request GET 'https://ad.e.kuaishou.com/rest/openapi/v1/file/ad/video/get' \
--header 'Access-Token: 34baebdbe9a5c1dae529f9661cee193b' \
--header 'Content-Type: application/json' \
--header 'Cookie: apdid=5c3fd87a-6413-4412-91f3-5cf737c4e063f754283d1f8c46c5fa256508dd43365b:1676291427:1' \
--data-raw '{
    "advertiser_id": 139494,
    "photo_ids": [
        "5196591116855324734"
    ]
}'
```

## 返回参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| code | Integer |  |  | 返回码 |  |
| message | String |  |  | 返回信息 |  |
| data | Details603GW[] |  |  | 返回数据 |  |
| - cover_url | String |  | http://ali2.a.yximgs.com/upic/2021/07/08/11/unknown-0-5967be10b83044ab-3d4b358efb604372&clientCacheKey=3xtg7uijuw72f8u_v1.jpg&di=a3491bb&bp=10000 | 视频首帧图片链接 |  |
| - photo_id | String |  | 5233464296313677649 | 视频 ID |  |
| - photo_name | String |  | 49396634578.mp4 | 视频名称 | `默认为视频ID |
| - create_time | String |  | 2021-07-08 11:54:38 | 创建时间 |  |
| - signature | String |  | b6529d6fdd09ce085bcb384664caae89 | 视频MD5 |  |
| - new_status | Integer |  | 1 | 视频状态 | `0：视频库删除，1：可用状态，2：转码中，3：审核中，11：转码失败，12：审核失败，13：已屏蔽，14：视频在客户端删除 |
| - source | Integer |  | 0 | 视频来源 | ` 0：本地；1：开眼；2：素造；4：mapi；7：聚星视频；8：LA 素材上传；10：个人主页；11:代理商自制 |
| - url | String |  | http://txmov6.a.yximgs.com/upic/2021/07/08/11/unknown-0-5967be10b83044ab-3d4b358efb604372&clientCacheKey=3xtg7uijuw72f8u_v1_b.mp4&tt=b&di=a3491bb&bp=10000 | 视频预览链接 |  |
| - authorization | Integer |  | 1 | 授权状态`1：授权视频；2：取消授权 |  |
| - duration | Long |  | 24566 | 视频时长 | `单位：毫秒 |
| - upload_time | String |  | 2021-07-08 11:54:37 | 上传时间 |  |
| - photo_tag | String[] |  | 123 | 视频标签 |  |
| - width | Integer |  | 720 | 视频宽度 |  |
| - height | Integer |  | 1280 | 视频高度 |  |
| - status | Integer |  | 0 | 视频状态`0：正常；1：删除 |  |
| - adPhotoValuateInfo | AdPhotoValuateInfo742 |  |  | 视频素材评价 | "quality_label": "优质 普通 非常低", // 素材质量 "is_dup_photo": false or true, // 素材创新度（这两个字段为旧的素材评价维度，以下面的为准） |
| - simLabel | String |  |  | 视频重复信息（风控） |  |
| - qualityLabel | String |  |  | 视频质量信息 |  |
| - quotaMsg | String |  |  | 视频内卷份额信息 |  |
| - isDupPhoto | Boolean |  |  | 视频是否重复 |  |
| - isDelayReview | Boolean |  |  | 视频是否延审 |  |
| - runningScore | Integer |  | 0 | 视频跑量分：1=优质；2=低质 |  |
| - hitTagCombination | Integer |  | 0 | 是否命中标签组合 |  |
| - optimizationSuggestions | String |  | 0 | 优化建议 |  |
| - photo_wake_status | Integer |  |  | 视频唤醒状态 |  |
| - photoTagIdentifyItems | PhotoTagIdentifyItems[] |  |  | 素材内容标签 |  |
| - dimension | String |  | 产品卖点 | 字段描述，需要修改 |  |
| - adAssetTagActionItems | AdAssetTagActionItems[] |  | [{}] | 字段描述，需要修改 |  |
| - action | String |  | 删除 | 字段描述，需要修改 |  |
| - adAssetTagInfoItemList | AdAssetTagInfoItemList[] |  | [{}] | 字段描述，需要修改 |  |
| - tagId | Long |  | 4030114 | 字段描述，需要修改 |  |
| - tagName | String |  | 真人认证交友 | 字段描述，需要修改 |  |
| - tagDetail | String |  | 产品卖点，指用户是真人用户，非机器人 | 字段描述，需要修改 |  |
| - outer_loop_native | Integer |  | 0 | 是否是原生视频 |  |
| - photoUserId | Long |  | 0 | 视频所属的UserId |  |
| - atlas_pic_ids | String[] |  | 1 | 图集图片 |  |
| - atlas_audio_bs_key | String |  | 1 | 图集音频 |  |
| - atlas_audio_url | String |  | 1 | 音频播放链接 |  |
| - shieldStatus | Integer |  | 0 | 是否在个人主页隐藏 0非隐藏态 1隐藏态 |  |
| - photo_dup_status | Integer |  | 1 | 素材创新度 | 0-原创，1-重复 |
| - low_quality_status | Integer |  | 1 | 素材低质标签 | 0-非低质，1-低质 |

## 返回样例

### 返回样例 (jsonc)

```
{
    "code": 0,
    "message": "OK",
    "data": [
        {
            "width": 1080,
            "height": 1920,
     		"url": "http://alimov2.a.kwimgs.com/upic/2023/02/13/21/BMjAyMzAyMTMyMTEwNTZfMTM0NTU3MjczNl85NjE1NTQxMTYzM18wXzM=_b_Babc63b0ad7b27d636415e0341b41ae93.mp4?tag=1-1676367447-unknown-0-cz8y1cj1uw-6dbcdc3a8bd83d0b&clientCacheKey=3x9zia4mv7je6ri_b.mp4&tt=b&di=72ffbc2d&bp=13840",
      		"signature": "b6529d6fdd09ce085bcb384664caae89",
      		"duration": 24566,
            "source": 4,
            "photoUserId": 1345572736,
            "status": 0,
            "authorization": 1,
            "photo_dup_status": 0,
            "low_quality_status": 1,
            "adPhotoValuateInfo": {
                "simLabel": "否",
                "qualityLabel": "普通",
                "quotaMsg": "",
                "isDupPhoto": false,
                "isDelayReview": null,
                "optimizationSuggestions": "",
                "runningScore": 0,
                "hitTagCombination": 0
            },
            "photoTagIdentifyItems": null,
            "photo_id": "5208131608549181870",
            "upload_time": "2023-09-27 17:04:37",
            "cover_url": "http://ali2.a.kwimgs.com/upic/2023/09/27/17/BMjAyMzA5MjcxNzA0MzZfMTM0NTU3MjczNl8xMTM2Nzc0MjA0NDZfMF82_Bc587f555525d99ab216bbde643603f1b.jpg?tag=1-1697192162-unknown-0-422chy5cj1-9a38dca33c95d10b&clientCacheKey=3xav727mxehxpkq.jpg&di=a1c62a5&bp=13840",
            "photo_name": "图文视频_5208131608549181870",
            "photo_tag": [
                "这是一个长标签"
            ],
            "new_status": 1,
            "create_time": "2023-09-27 17:04:37",
            "atlas_pic_ids": [ // 图集才有
                "5215449848999249535",
                "5220516399508008924",
                "5206724126146862162"
            ],
            "atlas_audio_bs_key": "55a4aebd6b544b6aa4ac99ef9c004c18", // 图集才有
            "atlas_audio_url": "http://ali2.a.kwimgs.com/ufile/atlas/NTIwODEzMTYwODU0OTE4MTg3MF8xNjk1ODA1NDc3ODYw.m4a" // 图集才有
        }
    ],
    "request_id": "f23e87d6862f44bf9f666b6b97ff4686"
}
```

## 原始内容

```
获取视频信息 get 接口 /rest/openapi/v1/file/ad/video/get curl --location --request GET 'https://ad.e.kuaishou.com/rest/openapi/v1/file/ad/video/get' \ --header 'Access-Token: 34baebdbe9a5c1dae529f9661cee193b' \ --header 'Content-Type: application/json' \ --header 'Cookie: apdid=5c3fd87a-6413-4412-91f3-5cf737c4e063f754283d1f8c46c5fa256508dd43365b:1676291427:1' \ --data-raw '{ "advertiser_id": 139494, "photo_ids": [ "5196591116855324734" ] }' { "code": 0, "message": "OK", "data": [ { "width": 1080, "height": 1920, "url": "http://alimov2.a.kwimgs.com/upic/2023/02/13/21/BMjAyMzAyMTMyMTEwNTZfMTM0NTU3MjczNl85NjE1NTQxMTYzM18wXzM=_b_Babc63b0ad7b27d636415e0341b41ae93.mp4?tag=1-1676367447-unknown-0-cz8y1cj1uw-6dbcdc3a8bd83d0b&clientCacheKey=3x9zia4mv7je6ri_b.mp4&tt=b&di=72ffbc2d&bp=13840", "signature": "b6529d6fdd09ce085bcb384664caae89", "duration": 24566, "source": 4, "photoUserId": 1345572736, "status": 0, "authorization": 1, "photo_dup_status": 0, "native_good_type": 2, "adPhotoValuateInfo": { "simLabel": "否", "qualityLabel": "普通", "quotaMsg": "", "isDupPhoto": false, "isDelayReview": null, "optimizationSuggestions": "", "runningScore": 0, "hitTagCombination": 0 }, "photoTagIdentifyItems": null, "photo_id": "5208131608549181870", "upload_time": "2023-09-27 17:04:37", "cover_url": "http://ali2.a.kwimgs.com/upic/2023/09/27/17/BMjAyMzA5MjcxNzA0MzZfMTM0NTU3MjczNl8xMTM2Nzc0MjA0NDZfMF82_Bc587f555525d99ab216bbde643603f1b.jpg?tag=1-1697192162-unknown-0-422chy5cj1-9a38dca33c95d10b&clientCacheKey=3xav727mxehxpkq.jpg&di=a1c62a5&bp=13840", "photo_name": "图文视频_5208131608549181870", "photo_tag": [ "这是一个长标签" ], "new_status": 1, "create_time": "2023-09-27 17:04:37", "atlas_pic_ids": [ // 图集才有 "5215449848999249535", "5220516399508008924", "5206724126146862162" ], "atlas_audio_bs_key": "55a4aebd6b544b6aa4ac99ef9c004c18", // 图集才有 "atlas_audio_url": "http://ali2.a.kwimgs.com/ufile/atlas/NTIwODEzMTYwODU0OTE4MTg3MF8xNjk1ODA1NDc3ODYw.m4a" // 图集才有 } ], "request_id": "f23e87d6862f44bf9f666b6b97ff4686" } advertiser_id Long 广告主 ID photo_ids String[] 视频 ID 集 code Integer 返回码 message String 返回信息 data Details603GW[] 返回数据 cover_url String 视频首帧图片链接 photo_id String 视频 ID photo_name String 视频名称 create_time String 创建时间 signature String 视频MD5 new_status Integer 视频状态 source Integer 视频来源 url String 视频预览链接 authorization Integer 授权状态`1：授权视频；2：取消授权 duration Long 视频时长 upload_time String 上传时间 photo_tag String[] 视频标签 width Integer 视频宽度 height Integer 视频高度 status Integer 视频状态`0：正常；1：删除 adPhotoValuateInfo AdPhotoValuateInfo742 视频素材评价 simLabel String 视频重复信息（风控） qualityLabel String 视频质量信息 quotaMsg String 视频内卷份额信息 isDupPhoto Boolean 视频是否重复 isDelayReview Boolean 视频是否延审 runningScore Integer 视频跑量分：1=优质；2=低质 hitTagCombination Integer 是否命中标签组合 optimizationSuggestions String 优化建议 photo_wake_status Integer 视频唤醒状态 photoTagIdentifyItems PhotoTagIdentifyItems[] 素材内容标签 dimension String 字段描述，需要修改 adAssetTagActionItems AdAssetTagActionItems[] 字段描述，需要修改 action String 字段描述，需要修改 adAssetTagInfoItemList AdAssetTagInfoItemList[] 字段描述，需要修改 tagId Long 字段描述，需要修改 tagName String 字段描述，需要修改 tagDetail String 字段描述，需要修改 outer_loop_native Integer 是否是原生视频 photoUserId Long 视频所属的UserId atlas_pic_ids String[] 图集图片 atlas_audio_bs_key String 图集音频 atlas_audio_url String 音频播放链接 shieldStatus Integer 是否在个人主页隐藏 0非隐藏态 1隐藏态 photo_dup_status Integer 素材创新度 low_quality_status Integer 素材低质标签
```
