---
title: 获取视频信息list接口
platform: kuaishou
source_url: https://developers.e.kuaishou.com/docs?docType=DSP&documentId=2639&menuId=3363
doc_id: kuaishou_2639
source_id: kuaishou_2639
---
# 获取视频信息list接口

## 文档元数据

| 字段 | 值 |
| --- | --- |
| documentId | 2639 |
| documentType | 2 |
| version | 0.0.1 |
| bizName | 效果广告 |
| createTime | 2025-11-20T03:29:20.849Z |

## 接口信息

| 字段 | 值 |
| --- | --- |
| targetPath | https://ad.e.kuaishou.com/rest/openapi/v1/file/ad/video/list |
| httpMethod | POST |
| httpContentType | JSON |

## 请求参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| advertiser_id | Long | 是 | 123455667 | 广告主ID | `在获取 accessToken 的时候返回 |
| photo_ids | String[] |  | ["ae1wdff","fq2f34gt53"] | 视频ID列表 | `最多不超过 100 个 ID |
| start_date | String |  | "2021-09-11" | 起始时间 | `过滤筛选条件，与 end_date 同时传或同时不传； 格式为 yyyy-MM-dd |
| end_date | String |  | "2021-12-12" | 结束时间 | `过滤筛选条件，与 start_date 同时传或同时不传； 格式为 yyyy-MM-dd |
| page | Integer |  | 1 | 当前页码 | `默认为 1 |
| page_size | Integer |  | 20 | 每页行数 | `默认为 20，不超过 200 |
| signature | String |  | "c922a641cc5dc03a497e540996d12198" | 视频MD5 |  |
| photo_name | String |  | "哈哈哈" | 视频名称 |  |
| outer_loop_native | Integer |  | 0 | 是否获取原生视频 0=False，1=True。 |  |
| photo_user_id | Long |  | 0 | 视频所属的UserId，当账户投放原生广告并获得其他快手号授权时可以传递并搜索结果，否则无结果。 |  |
| update_start_date | String |  |  | 起始更新时间 | 与 update_end_date 同时传或同时不传； 过滤筛选条件，格式为"yyyy-MM-dd" |
| update_end_date | String |  |  | 结束更新时间 | 与 update_start_date 同时传或同时不传； 过滤筛选条件，格式为"yyyy-MM-dd" |

## 请求样例

### 请求样例 (shell)

```
curl --location --request POST 'https://ad.e.kuaishou.com/rest/openapi/v1/file/ad/video/list' \
--header 'Access-Token: 1615fb41eebb1769373d05a3923cbc53' \
--header 'Content-Type: application/json' \
--header 'Cookie: apdid=5c3fd87a-6413-4412-91f3-5cf737c4e063f754283d1f8c46c5fa256508dd43365b:1676291427:1' \
--data-raw '{
    "advertiser_id": 139494,
    "photo_ids" : [5196591116855324734]
}'
```

## 返回参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| code | Integer |  | 0 | 状态码 |  |
| message | String |  | "OK" | 返回信息 |  |
| data | AdMarketVideoInfoView |  | 1 | 详情 |  |
| - total_count | Long |  | 104 | 视频总数 |  |
| - details | AMDetails603[] |  | [{}] | 详情 |  |
| - cover_url | String |  | http://ali2.a.yximgs.com/upic/2021/07/08/11/unknown-0-5967be10b83044ab-3d4b358efb604372&clientCacheKey=3xtg7uijuw72f8u_v1.jpg&di=a3491bb&bp=10000 | 视频首帧图片链接 |  |
| - photo_id | String |  | 5233464296313677649 | 视频 ID |  |
| - photo_name | String |  | 49396634578.mp4 | 视频名称 | `默认为视频ID |
| - create_time | String |  | 2021-07-08 11:54:38 | 创建时间 |  |
| - signature | String |  | b6529d6fdd09ce085bcb384664caae89 | 视频MD5 |  |
| - new_status | Integer |  | 1 | 视频状态 | 0：视频库删除，1：可用状态，2：转码中，3：审核中，11：转码失败，12：审核失败，13：已屏蔽，14：视频在客户端删除 |
| - source | Integer |  | 0 | 视频来源 | ` 0：本地；1：开眼；2：素造；4：mapi；7：聚星视频；8：LA 素材上传；10：个人主页；11:代理商自制 |
| - url | String |  | http://txmov6.a.yximgs.com/upic/2021/07/08/11/unknown-0-5967be10b83044ab-3d4b358efb604372&clientCacheKey=3xtg7uijuw72f8u_v1_b.mp4&tt=b&di=a3491bb&bp=10000 | 视频预览链接 |  |
| - authorization | Integer |  | 1 | 授权状态`1：授权视频；2：取消授权 |  |
| - duration | Long |  | 24566 | 视频时长 | 单位毫秒 |
| - upload_time | String |  | 2021-07-08 11:54:37 | 上传时间 |  |
| - photo_tag | String[] |  | 123 | 视频标签 |  |
| - width | Integer |  | 720 | 视频宽度 |  |
| - height | Integer |  | 1280 | 视频高度 |  |
| - status | Integer |  | 0 | 视频状态`0：正常；1：删除 |  |
| - photo_valuate_info | AMPhotoValuateInfo |  |  | 视频素材评价 | "quality_label": "优质 普通 非常低", // 素材质量 "is_dup_photo": false or true, // 素材创新度（这两个字段为旧的素材评价维度，以下面的为准） |
| - sim_label | String |  |  | 视频重复信息（风控） |  |
| - quality_label | String |  |  | 视频质量信息 |  |
| - is_dup_photo | Boolean |  |  | 视频是否重复 |  |
| - is_delay_review | Boolean |  |  | 视频是否延审 |  |
| - running_score | Integer |  | 0 | 视频跑量分：1=优质；2=低质 |  |
| - hit_tag_combination | Integer |  | 0 | 是否命中标签组合 |  |
| - photo_wake_status | Integer |  |  | 视频唤醒状态 | 已经废弃， |
| - photo_tag_identify_items | PhotoTagIdentifyItems[] |  |  | 素材内容标签 |  |
| - dimension | String |  | 产品卖点 | 字段描述，需要修改 |  |
| - adAssetTagActionItems | AdAssetTagActionItems[] |  | [{}] | 字段描述，需要修改 |  |
| - action | String |  | 删除 | 字段描述，需要修改 |  |
| - adAssetTagInfoItemList | AdAssetTagInfoItemList[] |  | [{}] | 字段描述，需要修改 |  |
| - tagId | Long |  | 4030114 | 字段描述，需要修改 |  |
| - tagName | String |  | 真人认证交友 | 字段描述，需要修改 |  |
| - tagDetail | String |  | 产品卖点，指用户是真人用户，非机器人 | 字段描述，需要修改 |  |
| - photo_user_id | Long |  | 0 | 视频所属的UserId |  |
| - outer_loop_native | Integer |  | 0 | 是否是原生视频 | 0或2=非原生视频；1或3=原生视频。 |
| - atlas_pic_ids | String[] |  | 1 | 1 |  |
| - atlas_audio_bs_key | String |  | 1 | 1 |  |
| - atlas_audio_url | String |  | 1 | 1 |  |
| - shield_status | Integer |  | 1 | 视频是否已同步个人主页 1否 0是 |  |
| - photo_dup_status | Integer |  | 1 | 素材创新度 | 0-原创，1-重复 |
| - low_quality_status | Integer |  | 1 | 素材低质标签 | 0-非低质，1-低质 |

## 返回样例

### 返回样例 (jsonc)

```
{
    "code": 0,
    "data": {
        "total_count": 1,
        "details": [
            {
                "atlas_audio_url": "http://ali2.a.kwimgs.com/ufile/atlas/NTIwODEzMTYwODU0OTE4MTg3MF8xNjk1ODA1NDc3ODYw.m4a",
                "cover_url": "http://ali2.a.kwimgs.com/upic/2023/09/27/17/BMjAyMzA5MjcxNzA0MzZfMTM0NTU3MjczNl8xMTM2Nzc0MjA0NDZfMF82_Bc587f555525d99ab216bbde643603f1b.jpg?tag=1-1697191788-unknown-0-wdsoz7ziib-9fab089901fdb1bc&clientCacheKey=3xav727mxehxpkq.jpg&di=a0e1372&bp=10000",
                "photo_wake_status": 0,
                "photo_id": "5208131608549181870",
                "photo_name": "图文视频_5208131608549181870",
                "create_time": "2023-09-27 17:04:37",
                "signature": "52154adsagaxg498489a99249535",
                "photo_tag_identify_items": null,
                "photo_user_id": 1345572736,
                "atlas_pic_ids": [
                    "5215449848999249535",
                    "5220516399508008924",
                    "5206724126146862162"
                ],
                "new_status": 1,
                "source": 4,
                "url": "",
                "authorization": 1,
                "duration": 1000,
                "upload_time": "2023-09-27 17:04:37",
                "photo_tag": [
                    "这是一个长标签"
                ],
                "outer_loop_native": 0,
                "width": 1080,
                "atlas_audio_bs_key": "55a4aebd6b544b6aa4ac99ef9c004c18",
                "photo_dup_status": 0,
                "low_quality_status": 1,
                "photo_valuate_info": {
                    "sim_label": "否",
                    "running_score": 0,
                    "quality_label": "普通",
                    "is_delay_review": null,
                    "is_dup_photo": false,
                    "hit_tag_combination": 0
                },
                "height": 1920,
                "status": 0
            }
        ]
    },
    "message": "OK",
    "request_id": "EO60gICQgpGOChioDyD_843EsjEor_S1_gg="
}
```

## 原始内容

```
获取视频信息list接口 /rest/openapi/v1/file/ad/video/list curl --location --request POST 'https://ad.e.kuaishou.com/rest/openapi/v1/file/ad/video/list' \ --header 'Access-Token: 1615fb41eebb1769373d05a3923cbc53' \ --header 'Content-Type: application/json' \ --header 'Cookie: apdid=5c3fd87a-6413-4412-91f3-5cf737c4e063f754283d1f8c46c5fa256508dd43365b:1676291427:1' \ --data-raw '{ "advertiser_id": 139494, "photo_ids" : [5196591116855324734] }' { "code": 0, "data": { "total_count": 1, "details": [ { "atlas_audio_url": "http://ali2.a.kwimgs.com/ufile/atlas/NTIwODEzMTYwODU0OTE4MTg3MF8xNjk1ODA1NDc3ODYw.m4a", "cover_url": "http://ali2.a.kwimgs.com/upic/2023/09/27/17/BMjAyMzA5MjcxNzA0MzZfMTM0NTU3MjczNl8xMTM2Nzc0MjA0NDZfMF82_Bc587f555525d99ab216bbde643603f1b.jpg?tag=1-1697191788-unknown-0-wdsoz7ziib-9fab089901fdb1bc&clientCacheKey=3xav727mxehxpkq.jpg&di=a0e1372&bp=10000", "photo_wake_status": 0, "photo_id": "5208131608549181870", "photo_name": "图文视频_5208131608549181870", "create_time": "2023-09-27 17:04:37", "signature": "52154adsagaxg498489a99249535", "photo_tag_identify_items": null, "photo_user_id": 1345572736, "atlas_pic_ids": [ "5215449848999249535", "5220516399508008924", "5206724126146862162" ], "new_status": 1, "source": 4, "url": "", "authorization": 1, "duration": 1000, "upload_time": "2023-09-27 17:04:37", "photo_tag": [ "这是一个长标签" ], "outer_loop_native": 0, "width": 1080, "atlas_audio_bs_key": "55a4aebd6b544b6aa4ac99ef9c004c18", "photo_dup_status": 0, "low_quality_status": 1, "photo_valuate_info": { "sim_label": "否", "running_score": 0, "quality_label": "普通", "is_delay_review": null, "is_dup_photo": false, "hit_tag_combination": 0 }, "height": 1920, "status": 0 } ] }, "message": "OK", "request_id": "EO60gICQgpGOChioDyD_843EsjEor_S1_gg=" } advertiser_id Long 广告主ID photo_ids String[] 视频ID列表 new_status Integer 视频状态`0：删除， -1：全部数据，包含删除 不传默认返回不含删除的数据 start_date String 起始时间 end_date String 结束时间 page Integer 当前页码 page_size Integer 每页行数 signature String 视频MD5 photo_name String 视频名称 outer_loop_native Integer 是否获取原生视频 0=False，1=True。 photo_user_id Long 视频所属的UserId，当账户投放原生广告并获得其他快手号授权时可以传递并搜索结果，否则无结果。 update_start_date String 起始更新时间 update_end_date String 结束更新时间 code Integer 状态码 message String 返回信息 data AdMarketVideoInfoView 详情 total_count Long 视频总数 details AMDetails603[] 详情 cover_url String 视频首帧图片链接 photo_id String 视频 ID photo_name String 视频名称 create_time String 创建时间 signature String 视频MD5 new_status Integer 视频状态 source Integer 视频来源 url String 视频预览链接 authorization Integer 授权状态`1：授权视频；2：取消授权 duration Long 视频时长 upload_time String 上传时间 photo_tag String[] 视频标签 width Integer 视频宽度 height Integer 视频高度 status Integer 视频状态`0：正常；1：删除 photo_valuate_info AMPhotoValuateInfo 视频素材评价 sim_label String 视频重复信息（风控） quality_label String 视频质量信息 is_dup_photo Boolean 视频是否重复 is_delay_review Boolean 视频是否延审 running_score Integer 视频跑量分：1=优质；2=低质 hit_tag_combination Integer 是否命中标签组合 photo_wake_status Integer 视频唤醒状态 photo_tag_identify_items PhotoTagIdentifyItems[] 素材内容标签 dimension String 字段描述，需要修改 adAssetTagActionItems AdAssetTagActionItems[] 字段描述，需要修改 action String 字段描述，需要修改 adAssetTagInfoItemList AdAssetTagInfoItemList[] 字段描述，需要修改 tagId Long 字段描述，需要修改 tagName String 字段描述，需要修改 tagDetail String 字段描述，需要修改 photo_user_id Long 视频所属的UserId outer_loop_native Integer 是否是原生视频 atlas_pic_ids String[] 1 atlas_audio_bs_key String 1 atlas_audio_url String 1 shield_status Integer 视频是否已同步个人主页 1否 0是 photo_dup_status Integer 素材创新度 low_quality_status Integer 素材低质标签
```
