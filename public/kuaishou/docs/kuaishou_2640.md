---
title: 游标查询视频信息接口
platform: kuaishou
source_url: https://developers.e.kuaishou.com/docs?docType=DSP&documentId=2640&menuId=3364
doc_id: kuaishou_2640
source_id: kuaishou_2640
---
# 游标查询视频信息接口

## 文档元数据

| 字段 | 值 |
| --- | --- |
| documentId | 2640 |
| documentType | 2 |
| version | 0.0.1 |
| bizName | 效果广告 |
| createTime | 2025-08-05T12:11:18.081Z |

## 接口信息

| 字段 | 值 |
| --- | --- |
| targetPath | https://ad.e.kuaishou.com/rest/openapi/gw/dsp/video/listByCursor |
| httpMethod | POST |
| httpContentType | JSON |

## 请求参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| advertiser_id | Long | 是 |  | 广告主id | 在获取 accessToken 的时候返回 |
| cursor | Long | 是 |  | 游标值 | 比如上一轮返回值的最大cursor=100,那么本次查询cursor传100即可，返回的数据cursor都是大于100的 |
| limit | Integer |  |  | 每轮返回的数据量，默认200，最大1000 |  |

## 请求样例

### 请求样例 (jsonc)

```
curl --location 'https://ad.e.kuaishou.com/rest/openapi/gw/dsp/video/listByCursor' \
--header 'Access-Token: 82948eaf11d9a5985bce9f93abaecf9c' \
--header 'Content-Type: application/json' \
--data '{
    "advertiser_id": 11311124,
    "cursor": 5317797001,
    "limit" : 2
}'
```

## 返回参数

| 字段 | 类型 | 必填 | 示例 | 说明 | 备注 |
| --- | --- | --- | --- | --- | --- |
| code | Integer |  |  | 状态码 |  |
| message | String |  |  | 返回信息 |  |
| data | AdMarketVideoInfoView |  |  | 信息 |  |
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
| - cursor | Long |  | 1 | 游标值 |  |
| - photo_dup_status | Integer |  | 1 | 素材创新度 | 0-原创，1-重复 |
| - low_quality_status | Integer |  | 1 | 素材低质标签 | 0-非低质，1-低质 |

## 返回样例

### 返回样例 (jsonc)

```
{
    "code": 0,
    "data": {
        "total_count": 2,
        "details": [
            {
                "cursor": 5317797004,
                "photo_id": "5216012867726404981",
                "photo_name": "002 - 大帅哥姚景元 #姚景元-快手.mp4",
                "signature": "0c50115069536742e31ac35fc3929ad0",
                "atlas_pic_ids": null,
                "new_status": 1,
                "source": 0,
                "authorization": 1,
                "duration": 10566,
                "photoDupStatus": 0,
            	"low_quality_status": 0,
                "photo_valuate_info": {
                    "sim_label": "否",
                    "running_score": 2,
                    "quality_label": "普通",
                    "is_delay_review": null,
                    "is_dup_photo": false,
                    "hit_tag_combination": 0
                },
                "height": 1280,
                "atlas_audio_url": null,
                "cover_url": "http://ali2.a.kwimgs.com/upic/2022/05/06/21/BMjAyMjA1MDYyMTEyMTVfNTgzMDUxMzU0XzczODA1NDcyNTk0XzBfMw==_B545b9ddb4a8aaf3fdfa303f6e93134c6.jpg?tag=1-1705291689-unknown-0-qylbphqnu8-a3a82950d0459b8d&clientCacheKey=3xyi5s5zaf8kr84.jpg&di=a16b332&bp=10000",
                "photo_wake_status": 0,
                "create_time": "2022-05-06 21:12:19",
                "photo_tag_identify_items": null,
                "photo_user_id": 583051354,
                "shield_status": 1,
                "url": "http://alimov2.a.kwimgs.com/upic/2022/05/06/21/BMjAyMjA1MDYyMTEyMTVfNTgzMDUxMzU0XzczODA1NDcyNTk0XzBfMw==_b_B769b88400ff6f8ddcb689c43d45d0940.mp4?tag=1-1705291689-unknown-0-hycvsk4wib-dc835e14232d667e&clientCacheKey=3xyi5s5zaf8kr84_b.mp4&tt=b&di=a16b332&bp=10000",
                "upload_time": "2022-05-06 21:12:29",
                "photo_tag": null,
                "outer_loop_native": 0,
                "width": 720,
                "atlas_audio_bs_key": null,
                "status": 0
            },
            {
                "cursor": 5317797007,
                "photo_id": "5190961594358960817",
                "photo_name": "016 - #机车健身舞 #双子座 答应我 看见什么都不用说出来！-快手.mp4",
                "signature": "1a2859bd67021c9c0fe96afee2b00c1f",
                "atlas_pic_ids": null,
                "new_status": 1,
                "source": 0,
                "authorization": 1,
                "duration": 7616,
                "photoDupStatus": 0,
                "nativeGoodType": 0,
                "photo_valuate_info": {
                    "sim_label": "否",
                    "running_score": 2,
                    "quality_label": "普通",
                    "is_delay_review": null,
                    "is_dup_photo": false,
                    "hit_tag_combination": 0
                },
                "height": 1280,
                "atlas_audio_url": null,
                "cover_url": "http://ali2.a.kwimgs.com/upic/2022/05/24/14/BMjAyMjA1MjQxNDIwMzdfNTgzMDUxMzU0Xzc1MTU0MzA2NDk0XzBfMw==_B493ab6343fcd5bb425acb1cba57d653d.jpg?tag=1-1705291689-unknown-0-72ir2m6glq-8269c7e918c6bceb&clientCacheKey=3xnfv5rg2iei6z4.jpg&di=a16b332&bp=10000",
                "photo_wake_status": 0,
                "create_time": "2022-06-30 21:16:33",
                "photo_tag_identify_items": null,
                "photo_user_id": 583051354,
                "shield_status": 1,
                "url": "http://alimov2.a.kwimgs.com/upic/2022/05/24/14/BMjAyMjA1MjQxNDIwMzdfNTgzMDUxMzU0Xzc1MTU0MzA2NDk0XzBfMw==_b_B9e02bc26cca40b65d8adb8df7cfe13cd.mp4?tag=1-1705291689-unknown-0-kaufwkayob-109c8acaa97cab0b&clientCacheKey=3xnfv5rg2iei6z4_b.mp4&tt=b&di=a16b332&bp=10000",
                "upload_time": "2022-05-24 14:20:53",
                "photo_tag": null,
                "outer_loop_native": 0,
                "width": 720,
                "atlas_audio_bs_key": null,
                "status": 0
            }
        ]
    },
    "message": "OK",
    "request_id": "EL2AgICwooSaChiNECCG27ja0DEojYXJ7gk="
}
```

## 原始内容

```
游标查询视频信息接口 /rest/openapi/gw/dsp/video/listByCursor curl --location 'https://ad.e.kuaishou.com/rest/openapi/gw/dsp/video/listByCursor' \ --header 'Access-Token: 82948eaf11d9a5985bce9f93abaecf9c' \ --header 'Content-Type: application/json' \ --data '{ "advertiser_id": 11311124, "cursor": 5317797001, "limit" : 2 }' { "code": 0, "data": { "total_count": 2, "details": [ { "cursor": 5317797004, "photo_id": "5216012867726404981", "photo_name": "002 - 大帅哥姚景元 #姚景元-快手.mp4", "signature": "0c50115069536742e31ac35fc3929ad0", "atlas_pic_ids": null, "new_status": 1, "source": 0, "authorization": 1, "duration": 10566, "photoDupStatus": 0, "low_quality_status": 0, "photo_valuate_info": { "sim_label": "否", "running_score": 2, "quality_label": "普通", "is_delay_review": null, "is_dup_photo": false, "hit_tag_combination": 0 }, "height": 1280, "atlas_audio_url": null, "cover_url": "http://ali2.a.kwimgs.com/upic/2022/05/06/21/BMjAyMjA1MDYyMTEyMTVfNTgzMDUxMzU0XzczODA1NDcyNTk0XzBfMw==_B545b9ddb4a8aaf3fdfa303f6e93134c6.jpg?tag=1-1705291689-unknown-0-qylbphqnu8-a3a82950d0459b8d&clientCacheKey=3xyi5s5zaf8kr84.jpg&di=a16b332&bp=10000", "photo_wake_status": 0, "create_time": "2022-05-06 21:12:19", "photo_tag_identify_items": null, "photo_user_id": 583051354, "shield_status": 1, "url": "http://alimov2.a.kwimgs.com/upic/2022/05/06/21/BMjAyMjA1MDYyMTEyMTVfNTgzMDUxMzU0XzczODA1NDcyNTk0XzBfMw==_b_B769b88400ff6f8ddcb689c43d45d0940.mp4?tag=1-1705291689-unknown-0-hycvsk4wib-dc835e14232d667e&clientCacheKey=3xyi5s5zaf8kr84_b.mp4&tt=b&di=a16b332&bp=10000", "upload_time": "2022-05-06 21:12:29", "photo_tag": null, "outer_loop_native": 0, "width": 720, "atlas_audio_bs_key": null, "status": 0 }, { "cursor": 5317797007, "photo_id": "5190961594358960817", "photo_name": "016 - #机车健身舞 #双子座 答应我 看见什么都不用说出来！-快手.mp4", "signature": "1a2859bd67021c9c0fe96afee2b00c1f", "atlas_pic_ids": null, "new_status": 1, "source": 0, "authorization": 1, "duration": 7616, "photoDupStatus": 0, "nativeGoodType": 0, "photo_valuate_info": { "sim_label": "否", "running_score": 2, "quality_label": "普通", "is_delay_review": null, "is_dup_photo": false, "hit_tag_combination": 0 }, "height": 1280, "atlas_audio_url": null, "cover_url": "http://ali2.a.kwimgs.com/upic/2022/05/24/14/BMjAyMjA1MjQxNDIwMzdfNTgzMDUxMzU0Xzc1MTU0MzA2NDk0XzBfMw==_B493ab6343fcd5bb425acb1cba57d653d.jpg?tag=1-1705291689-unknown-0-72ir2m6glq-8269c7e918c6bceb&clientCacheKey=3xnfv5rg2iei6z4.jpg&di=a16b332&bp=10000", "photo_wake_status": 0, "create_time": "2022-06-30 21:16:33", "photo_tag_identify_items": null, "photo_user_id": 583051354, "shield_status": 1, "url": "http://alimov2.a.kwimgs.com/upic/2022/05/24/14/BMjAyMjA1MjQxNDIwMzdfNTgzMDUxMzU0Xzc1MTU0MzA2NDk0XzBfMw==_b_B9e02bc26cca40b65d8adb8df7cfe13cd.mp4?tag=1-1705291689-unknown-0-kaufwkayob-109c8acaa97cab0b&clientCacheKey=3xnfv5rg2iei6z4_b.mp4&tt=b&di=a16b332&bp=10000", "upload_time": "2022-05-24 14:20:53", "photo_tag": null, "outer_loop_native": 0, "width": 720, "atlas_audio_bs_key": null, "status": 0 } ] }, "message": "OK", "request_id": "EL2AgICwooSaChiNECCG27ja0DEojYXJ7gk=" } advertiser_id Long 广告主id cursor Long 游标值 limit Integer 每轮返回的数据量，默认200，最大1000 code Integer 状态码 message String 返回信息 data AdMarketVideoInfoView 信息 total_count Long 视频总数 details AMDetails603[] 详情 cover_url String 视频首帧图片链接 photo_id String 视频 ID photo_name String 视频名称 create_time String 创建时间 signature String 视频MD5 new_status Integer 视频状态 source Integer 视频来源 url String 视频预览链接 authorization Integer 授权状态`1：授权视频；2：取消授权 duration Long 视频时长 upload_time String 上传时间 photo_tag String[] 视频标签 width Integer 视频宽度 height Integer 视频高度 status Integer 视频状态`0：正常；1：删除 photo_wake_status Integer 视频唤醒状态 photo_tag_identify_items PhotoTagIdentifyItems[] 素材内容标签 dimension String 字段描述，需要修改 adAssetTagActionItems AdAssetTagActionItems[] 字段描述，需要修改 action String 字段描述，需要修改 adAssetTagInfoItemList AdAssetTagInfoItemList[] 字段描述，需要修改 tagId Long 字段描述，需要修改 tagName String 字段描述，需要修改 tagDetail String 字段描述，需要修改 photo_user_id Long 视频所属的UserId outer_loop_native Integer 是否是原生视频 atlas_pic_ids String[] 1 atlas_audio_bs_key String 1 atlas_audio_url String 1 shield_status Integer 视频是否已同步个人主页 1否 0是 cursor Long 游标值 photo_dup_status Integer 素材创新度 low_quality_status Integer 素材低质标签
```
